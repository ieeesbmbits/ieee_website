// Cloudflare Pages Function: /api/send-email
// Handles email submissions securely using EmailJS API / Resend API
// Forwards to applicant & branch administrators (ieeesbmbits@mbits.ac.in, ieeesbmbits@gmail.com)

export async function onRequestOptions() {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    }
  });
}

export async function onRequestPost(context) {
  const corsHeaders = {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*'
  };

  try {
    const data = await context.request.json();
    const { fullName, phone, email, department, semester, message } = data;

    if (!fullName || !phone || !email) {
      return new Response(
        JSON.stringify({ success: false, error: 'Please fill in all required fields (Full Name, Phone, Email).' }),
        { status: 400, headers: corsHeaders }
      );
    }

    const env = context.env || {};
    const userMessage = message || 'Support request submitted via IEEE MBITS Join Portal.';
    const meta = [
      department ? `Dept: ${department}` : '',
      semester ? `Semester: ${semester}` : '',
      phone ? `Phone: ${phone}` : ''
    ].filter(Boolean).join(' | ');

    const querySummary = meta ? `[${meta}] ${userMessage}` : userMessage;

    // 1. If Resend API Key is provided, use Resend
    if (env.RESEND_API_KEY) {
      const senderFrom = env.SENDER_EMAIL || 'IEEE MBITS Student Branch <onboarding@resend.dev>';
      const adminEmails = (env.ADMIN_EMAILS || 'ieeesbmbits@mbits.ac.in,ieeesbmbits@gmail.com')
        .split(',')
        .map(e => e.trim())
        .filter(Boolean);

      const userRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${env.RESEND_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: senderFrom,
          to: [email],
          reply_to: 'ieeesbmbits@gmail.com',
          subject: 'IEEE MBITS Support Request Confirmation',
          html: `<p>Dear ${fullName},</p><p>Thank you for submitting your join/support request to IEEE SB MBITS. Our team will review your application and get in touch with you shortly.</p><p><strong>Summary:</strong> ${querySummary}</p>`
        })
      });

      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${env.RESEND_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: senderFrom,
          to: adminEmails,
          reply_to: email,
          subject: `New IEEE MBITS Support Request - ${fullName}`,
          html: `<p>A new support request was received from <strong>${fullName}</strong> (${email}, ${phone}).</p><p><strong>Query:</strong> ${querySummary}</p>`
        })
      });

      if (userRes.ok) {
        return new Response(
          JSON.stringify({ success: true, message: `Confirmation email sent to ${email} and notification sent to ieeesbmbits@mbits.ac.in!` }),
          { status: 200, headers: corsHeaders }
        );
      }
    }

    // 2. Default Primary Forwarding: EmailJS REST API
    const serviceId = env.EMAILJS_SERVICE_ID || 'service_1z9s12v';
    const templateId = env.EMAILJS_TEMPLATE_ID || 'template_gfb2p3a';
    const userId = env.EMAILJS_PUBLIC_KEY || '0LbUjqGewEYtLvFkg';

    const payload = {
      service_id: serviceId,
      template_id: templateId,
      user_id: userId,
      accessToken: env.EMAILJS_PRIVATE_KEY || undefined,
      template_params: {
        email: email,
        user_name: fullName,
        from_name: 'IEEE SB MBITS',
        reply_to: 'ieeesbmbits@gmail.com',
        user_query: querySummary,
        department: department || 'N/A',
        semester: semester || 'N/A',
        phone: phone || 'N/A',
        admin_email: 'ieeesbmbits@mbits.ac.in',
        to_email: `${email}, ieeesbmbits@mbits.ac.in, ieeesbmbits@gmail.com`
      }
    };

    const emailjsRes = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (emailjsRes.ok) {
      return new Response(
        JSON.stringify({
          success: true,
          message: `Confirmation email sent to ${email} and notification sent to ieeesbmbits@mbits.ac.in!`
        }),
        { status: 200, headers: corsHeaders }
      );
    } else {
      const errorText = await emailjsRes.text();
      console.error('EmailJS API execution error:', errorText);
      return new Response(
        JSON.stringify({ success: false, error: errorText }),
        { status: 500, headers: corsHeaders }
      );
    }
  } catch (err) {
    console.error('Cloudflare Pages API error:', err);
    return new Response(
      JSON.stringify({ success: false, error: err.message }),
      { status: 500, headers: corsHeaders }
    );
  }
}
