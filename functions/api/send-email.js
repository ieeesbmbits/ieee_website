export async function onRequestPost(context) {
  try {
    const data = await context.request.json();
    const { fullName, phone, email, department, semester, message } = data;

    const userMessage = message || 'Support request submitted via IEEE MBITS Join Portal.';
    const meta = [
      department ? `Dept: ${department}` : '',
      semester ? `Semester: ${semester}` : '',
      phone ? `Phone: ${phone}` : ''
    ].filter(Boolean).join(' | ');

    const querySummary = meta ? `[${meta}] ${userMessage}` : userMessage;

    // Send email via EmailJS API to primary template & notify admin
    const payload = {
      service_id: 'service_1z9s12v',
      template_id: 'template_gfb2p3a',
      user_id: '0LbUjqGewEYtLvFkg',
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
        JSON.stringify({ success: true, message: `Confirmation email sent to ${email} and notification sent to ieeesbmbits@mbits.ac.in!` }),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        }
      );
    } else {
      const errorText = await emailjsRes.text();
      console.error('EmailJS API execution error:', errorText);
      return new Response(
        JSON.stringify({ success: false, error: errorText }),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        }
      );
    }
  } catch (err) {
    console.error('Cloudflare worker error:', err);
    return new Response(
      JSON.stringify({ success: false, error: err.message }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      }
    );
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
}
