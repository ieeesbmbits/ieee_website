from http.server import BaseHTTPRequestHandler
import json
import smtplib
from email.message import EmailMessage
import os
import datetime

SENDER_EMAIL = os.environ.get("SENDER_EMAIL", "ieeesbmbits@gmail.com")
APP_PASSWORD = os.environ.get("APP_PASSWORD", "hopfmpyjnuxmpcde")
CC_EMAILS = os.environ.get("CC_EMAILS", "ieeesbmbits@gmail.com, ieeesbmbits@mbits.ac.in")

def create_executive_html_email(full_name, phone, user_email, department, semester, user_message):
    timestamp_str = datetime.datetime.now().strftime("%B %d, %Y at %I:%M %p IST")
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>IEEE SB MBITS - Support Confirmation & Guide</title>
<style>
  body {{ font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9; margin: 0; padding: 30px 15px; color: #1e293b; line-height: 1.6; }}
  .email-container {{ max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.06); border: 1px solid #cbd5e1; }}
  .header-bar {{ background-color: #003366; padding: 32px; text-align: left; border-bottom: 4px solid #005696; }}
  .header-title {{ color: #ffffff; font-size: 22px; font-weight: 700; margin: 0; letter-spacing: 0.5px; }}
  .header-subtitle {{ color: #94a3b8; font-size: 12px; margin: 5px 0 0 0; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 600; }}
  .body-content {{ padding: 36px 32px; background-color: #ffffff; }}
  
  .greeting {{ font-size: 19px; font-weight: 700; color: #003366; margin-bottom: 16px; }}
  .intro-text {{ font-size: 15px; color: #334155; margin-bottom: 26px; line-height: 1.7; }}
  .notice-banner {{ background-color: #eff6ff; border: 1px solid #bfdbfe; border-left: 4px solid #2563eb; border-radius: 6px; padding: 16px 18px; font-size: 14px; color: #1e40af; font-weight: 600; margin-bottom: 28px; line-height: 1.6; }}

  .details-table {{ width: 100%; border-collapse: collapse; margin-bottom: 28px; border-radius: 6px; overflow: hidden; border: 1px solid #cbd5e1; }}
  .details-table th {{ background-color: #f8fafc; padding: 12px 18px; text-align: left; font-size: 12px; font-weight: 700; color: #005696; text-transform: uppercase; letter-spacing: 1px; border-bottom: 2px solid #cbd5e1; }}
  .details-table td {{ padding: 13px 18px; border-bottom: 1px solid #e2e8f0; font-size: 14px; }}
  .details-table tr:last-child td {{ border-bottom: none; }}
  .label-col {{ font-weight: 700; color: #475569; background-color: #f8fafc; width: 34%; text-transform: uppercase; font-size: 11px; letter-spacing: 0.5px; }}
  .value-col {{ color: #0f172a; font-weight: 600; }}

  .inquiry-card {{ background-color: #ffffff; border: 1px solid #cbd5e1; border-left: 4px solid #005696; border-radius: 6px; padding: 22px; margin-bottom: 28px; box-shadow: 0 2px 6px rgba(0,0,0,0.02); }}
  .inquiry-header {{ font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #005696; margin-bottom: 10px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #f1f5f9; padding-bottom: 6px; }}
  .inquiry-text {{ font-size: 14px; color: #334155; margin: 0; line-height: 1.7; background-color: #f8fafc; padding: 14px 16px; border-radius: 4px; border: 1px solid #e2e8f0; font-style: normal; }}

  .pdf-card {{ background-color: #fffbeb; border: 1px solid #fde68a; border-left: 4px solid #d97706; padding: 18px 20px; border-radius: 6px; margin-bottom: 30px; }}
  .pdf-title {{ font-size: 14px; font-weight: 700; color: #92400e; margin: 0 0 4px 0; display: flex; align-items: center; }}
  .pdf-desc {{ font-size: 13px; color: #78350f; margin: 0; line-height: 1.5; }}

  .cta-wrapper {{ text-align: center; margin: 25px 0 10px 0; }}
  .btn-primary {{ display: inline-block; background-color: #005696; color: #ffffff !important; font-weight: 600; font-size: 14px; padding: 13px 30px; border-radius: 6px; text-decoration: none; letter-spacing: 0.5px; box-shadow: 0 4px 10px rgba(0, 86, 150, 0.2); transition: background-color 0.2s ease; }}

  .footer-bar {{ background-color: #0f172a; color: #94a3b8; padding: 28px 32px; text-align: center; font-size: 13px; border-top: 1px solid #1e293b; line-height: 1.6; }}
  .footer-links {{ margin-top: 12px; font-size: 12px; }}
  .footer-links a {{ color: #38bdf8; text-decoration: none; margin: 0 10px; font-weight: 600; }}
</style>
</head>
<body>
  <div class="email-container">
    <div class="header-bar">
      <h1 class="header-title">IEEE SB MBITS</h1>
      <div class="header-subtitle">Mar Baselios Institute of Technology & Science</div>
    </div>
    <div class="body-content">
      <div class="greeting">Dear {full_name},</div>
      
      <p class="intro-text">
        Thank you for contacting the <strong>IEEE MBITS Student Branch</strong>. Your support request has been successfully registered under our executive committee portal.
      </p>

      <div class="notice-banner">
        &bull; <strong>Action Required:</strong> Please refer to the attached official <strong>Support Document</strong> for complete membership guidance. Our team will contact you soon!
      </div>

      <table class="details-table">
        <thead>
          <tr>
            <th colspan="2">OFFICIAL FORM SUBMISSION LOG &bull; {timestamp_str}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="label-col">Full Name</td>
            <td class="value-col"><strong>{full_name}</strong></td>
          </tr>
          <tr>
            <td class="label-col">Email Address</td>
            <td class="value-col"><a href="mailto:{user_email}" style="color: #005696; text-decoration: none; font-weight: 700;">{user_email}</a></td>
          </tr>
          <tr>
            <td class="label-col">Contact Phone</td>
            <td class="value-col"><a href="tel:{phone}" style="color: #005696; text-decoration: none; font-weight: 700;">{phone}</a></td>
          </tr>
          <tr>
            <td class="label-col">Department</td>
            <td class="value-col">{department}</td>
          </tr>
          <tr>
            <td class="label-col">Semester</td>
            <td class="value-col">{semester}</td>
          </tr>
        </tbody>
      </table>

      <div class="inquiry-card">
        <div class="inquiry-header">
          <span>EXECUTIVE INQUIRY SUMMARY</span>
          <span style="color: #005696; font-size: 10px; background: #e0f2fe; padding: 2px 8px; border-radius: 3px;">LOGGED</span>
        </div>
        <div class="inquiry-text">{user_message}</div>
      </div>

      <div class="pdf-card">
        <div class="pdf-title">📎 Attached Support Document</div>
        <div class="pdf-desc">We have attached the official <strong>IEEE SB MBITS Membership Support Guide (PDF)</strong> to this email for your detailed reference. Please review it — our team will reach out to you shortly.</div>
      </div>

      <div class="cta-wrapper">
        <a href="https://ieeembits.com" class="btn-primary">Visit Official IEEE MBITS Portal &rarr;</a>
      </div>
    </div>
    <div class="footer-bar">
      <p style="margin: 0 0 4px 0; font-weight: 700; color: #ffffff;">IEEE MBITS Student Branch</p>
      <p style="margin: 0; opacity: 0.85;">Mar Baselios Institute of Technology & Science &bull; Kothamangalam, Kerala - 686651</p>
      <div class="footer-links">
        <a href="https://ieeembits.com">IEEE MBITS Website</a> &bull;
        <a href="https://ieeekerala.org">IEEE Kerala Section</a> &bull;
        <a href="https://www.ieee.org">IEEE Global</a>
      </div>
    </div>
  </div>
</body>
</html>"""

def send_email_notification(data):
    full_name = data.get('fullName', 'N/A')
    phone = data.get('phone', 'N/A')
    user_email = data.get('email', 'N/A')
    department = data.get('department', 'N/A')
    semester = data.get('semester', 'N/A')
    user_message = data.get('message', 'No message query provided.')

    msg = EmailMessage()
    msg["Subject"] = f"IEEE MBITS Student Branch - Support Request Confirmation & Membership Guide ({full_name})"
    msg["From"] = SENDER_EMAIL
    msg["To"] = user_email
    msg["Cc"] = CC_EMAILS

    plain_text = f"Dear {full_name},\n\nThank you for reaching out to IEEE MBITS Student Branch.\nWe received your query:\n\"{user_message}\"\n\nPlease refer to the attached official IEEE SB MBITS Support Guide (PDF). Our team will contact you soon!\n\nBest regards,\nIEEE MBITS Student Branch"
    msg.set_content(plain_text)

    html_content = create_executive_html_email(full_name, phone, user_email, department, semester, user_message)
    msg.add_alternative(html_content, subtype='html')

    # Look for join.pdf in root directory relative to this api function or root CWD
    possible_pdf_paths = [
        os.path.join(os.path.dirname(__file__), "..", "join.pdf"),
        os.path.join(os.path.dirname(__file__), "join.pdf"),
        os.path.join(os.getcwd(), "join.pdf"),
        "join.pdf"
    ]

    pdf_attached = False
    for pdf_path in possible_pdf_paths:
        if os.path.exists(pdf_path):
            try:
                with open(pdf_path, 'rb') as pdf_file:
                    pdf_data = pdf_file.read()
                    msg.add_attachment(
                        pdf_data,
                        maintype='application',
                        subtype='pdf',
                        filename='IEEE-SB-MBITS-Support-Guide.pdf'
                    )
                pdf_attached = True
                print(f"[INFO] Attached {pdf_path} ({len(pdf_data)} bytes) to email.", file=sys.stderr)
                break
            except Exception as attach_err:
                print(f"[WARNING] Could not attach PDF: {attach_err}", file=sys.stderr)

    if not pdf_attached:
        print("[WARNING] join.pdf not found in standard paths.", file=sys.stderr)

    # Send Email via Gmail SMTP_SSL with 15-second timeout
    with smtplib.SMTP_SSL("smtp.gmail.com", 465, timeout=15) as smtp:
        smtp.login(SENDER_EMAIL, APP_PASSWORD)
        smtp.send_message(msg)

    print(f"[SUCCESS] Email sent for {full_name} ({user_email})", file=sys.stderr)
    return {"success": True, "message": f"Email sent successfully to {user_email}!"}


class handler(BaseHTTPRequestHandler):

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

    def do_POST(self):
        content_length = int(self.headers.get('Content-Length', 0))
        post_data = self.rfile.read(content_length)

        try:
            data = json.loads(post_data.decode('utf-8'))
            result = send_email_notification(data)

            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps(result).encode('utf-8'))

        except Exception as e:
            print(f"[ERROR] Failed to send email: {e}", file=sys.stderr)
            self.send_response(500)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            response = {"success": False, "error": str(e)}
            self.wfile.write(json.dumps(response).encode('utf-8'))


if __name__ == '__main__':
    import sys
    if len(sys.argv) > 1 and sys.argv[1] == '--server':
        from http.server import HTTPServer
        port = int(sys.argv[2]) if len(sys.argv) > 2 else 8000
        server = HTTPServer(('0.0.0.0', port), handler)
        print(f"Starting email server on port {port}...", file=sys.stderr)
        server.serve_forever()
    else:
        raw_input = sys.argv[1] if len(sys.argv) > 1 else sys.stdin.read()
        try:
            data = json.loads(raw_input)
            res = send_email_notification(data)
            print(json.dumps(res))
        except Exception as err:
            print(json.dumps({"success": False, "error": str(err)}))
            sys.exit(1)

