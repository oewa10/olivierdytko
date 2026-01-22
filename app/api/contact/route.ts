import { NextRequest, NextResponse } from 'next/server'

const BREVO_API_KEY = process.env.BREVO_API_KEY!
const SENDER_EMAIL = 'info@oliverdytko-arbeidsbemiddeling.nl'
const SENDER_NAME = 'Oliver Dytko'

interface ContactFormData {
  name: string
  email: string
  phone: string
  company?: string
  message: string
}

function getCustomerConfirmationEmail(data: ContactFormData): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f1f5f9; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #059669 0%, #10b981 100%); padding: 40px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">
                Bedankt voor uw bericht! ✨
              </h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <p style="color: #1e293b; font-size: 18px; font-weight: 500; margin: 0 0 8px 0;">
                Hallo ${data.name.split(' ')[0]},
              </p>
              <p style="color: #475569; font-size: 15px; line-height: 1.7; margin: 0 0 24px 0;">
                Wij hebben uw bericht in goede orde ontvangen. Ons team zal zo spoedig mogelijk contact met u opnemen.
              </p>
              
              <!-- Your message -->
              <div style="margin-bottom: 24px;">
                <h3 style="color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 12px 0;">Uw bericht</h3>
                <div style="background-color: #f8fafc; border-left: 3px solid #10b981; padding: 16px 20px; border-radius: 0 8px 8px 0;">
                  <p style="color: #64748b; font-size: 14px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${data.message}</p>
                </div>
              </div>
              
              <!-- Contact Info -->
              <div style="background-color: #f0fdf4; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
                <h3 style="color: #059669; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 16px 0;">
                  Contactgegevens
                </h3>
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding-bottom: 12px;">
                      <span style="color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Telefoon</span><br>
                      <a href="tel:+31620180034" style="color: #059669; font-size: 15px; font-weight: 500; text-decoration: none;">+31 6 20 18 00 34</a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span style="color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Email</span><br>
                      <a href="mailto:Info@Oliverdytko-arbeidsbemiddeling.nl" style="color: #059669; font-size: 15px; font-weight: 500; text-decoration: none;">Info@Oliverdytko-arbeidsbemiddeling.nl</a>
                    </td>
                  </tr>
                </table>
              </div>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 24px; text-align: center; border-top: 1px solid #e2e8f0;">
              <p style="color: #64748b; font-size: 13px; margin: 0 0 8px 0;">
                <a href="https://oliverdytko-arbeidsbemiddeling.nl" style="color: #10b981; text-decoration: none;">oliverdytko-arbeidsbemiddeling.nl</a>
              </p>
              <p style="color: #94a3b8; font-size: 12px; margin: 0;">
                © ${new Date().getFullYear()} Oliver Dytko. Alle rechten voorbehouden.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function getAdminNotificationEmail(data: ContactFormData): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f1f5f9; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #059669 0%, #10b981 100%); padding: 40px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">
                Nieuw Contactbericht
              </h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <!-- Contact Info Card -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8fafc; border-radius: 12px; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 24px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding-bottom: 12px;">
                          <span style="color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Naam</span><br>
                          <span style="color: #1e293b; font-size: 16px; font-weight: 500;">${data.name}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-bottom: 12px;">
                          <span style="color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Email</span><br>
                          <a href="mailto:${data.email}" style="color: #10b981; font-size: 16px; font-weight: 500; text-decoration: none;">${data.email}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-bottom: 12px;">
                          <span style="color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Telefoon</span><br>
                          <a href="tel:${data.phone}" style="color: #10b981; font-size: 16px; font-weight: 500; text-decoration: none;">${data.phone}</a>
                        </td>
                      </tr>
                      ${data.company ? `
                      <tr>
                        <td>
                          <span style="color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Bedrijf</span><br>
                          <span style="color: #1e293b; font-size: 16px; font-weight: 500;">${data.company}</span>
                        </td>
                      </tr>
                      ` : ''}
                    </table>
                  </td>
                </tr>
              </table>
              
              <!-- Message -->
              <div style="margin-bottom: 24px;">
                <h3 style="color: #1e293b; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 12px 0;">Bericht</h3>
                <div style="background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px;">
                  <p style="color: #475569; font-size: 15px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${data.message}</p>
                </div>
              </div>
              
              <!-- Quick Reply Button -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <a href="mailto:${data.email}?subject=Re: Uw bericht" style="display: inline-block; background: linear-gradient(135deg, #059669 0%, #10b981 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 600; font-size: 15px;">
                      Beantwoorden →
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 24px; text-align: center; border-top: 1px solid #e2e8f0;">
              <p style="color: #94a3b8; font-size: 13px; margin: 0;">
                Verzonden via het contactformulier op oliverdytko-arbeidsbemiddeling.nl
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

async function sendEmail(to: string, toName: string, subject: string, htmlContent: string): Promise<boolean> {
  try {
    console.log(`[Email] ===== EMAIL SEND START =====`)
    console.log(`[Email] To: ${to}`)
    console.log(`[Email] To Name: ${toName}`)
    console.log(`[Email] Subject: ${subject}`)
    console.log(`[Email] From: ${SENDER_EMAIL} (${SENDER_NAME})`)
    console.log(`[Email] API Key present: ${!!BREVO_API_KEY}`)
    console.log(`[Email] Recipient email valid: ${/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(to)}`)
    console.log(`[Email] HTML Content length: ${htmlContent.length}`)
    
    const payload = {
      sender: {
        name: SENDER_NAME,
        email: SENDER_EMAIL,
      },
      to: [
        {
          email: to,
          name: toName,
        },
      ],
      subject: subject,
      htmlContent: htmlContent,
      replyTo: {
        email: SENDER_EMAIL,
        name: SENDER_NAME,
      },
    }
    
    console.log(`[Email] Payload keys:`, Object.keys(payload))
    console.log(`[Email] Sender object:`, payload.sender)
    console.log(`[Email] To array:`, payload.to)
    
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': BREVO_API_KEY,
        'content-type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    const responseText = await response.text()
    console.log(`[Email] Raw response text: ${responseText}`)
    
    let responseData
    try {
      responseData = JSON.parse(responseText)
    } catch {
      responseData = { raw: responseText }
    }
    
    console.log(`[Email] Response status: ${response.status}`)
    console.log(`[Email] Response headers:`, {
      'content-type': response.headers.get('content-type'),
      'x-brevo-request-id': response.headers.get('x-brevo-request-id'),
    })
    console.log(`[Email] Response data:`, JSON.stringify(responseData, null, 2))

    if (!response.ok) {
      console.error(`[Email] ❌ Brevo API error (${response.status}):`, responseData)
      return false
    }

    console.log(`[Email] ✅ Successfully sent to ${to}`)
    console.log(`[Email] Message ID: ${responseData.messageId}`)
    console.log(`[Email] ===== EMAIL SEND END =====`)
    return true
  } catch (error) {
    console.error('[Email] ❌ Error sending email:', error)
    console.error('[Email] Error stack:', error instanceof Error ? error.stack : 'N/A')
    return false
  }
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json()

    // Validate required fields
    if (!data.name || !data.email || !data.phone || !data.message) {
      return NextResponse.json(
        { error: 'Alle verplichte velden moeten worden ingevuld' },
        { status: 400 }
      )
    }

    // Send confirmation email to customer
    const customerEmailSent = await sendEmail(
      data.email,
      data.name,
      'Bedankt voor uw bericht - Oliver Dytko Arbeidsbemiddeling',
      getCustomerConfirmationEmail(data)
    )

    // Send notification email to admin
    const adminEmailSent = await sendEmail(
      SENDER_EMAIL,
      SENDER_NAME,
      `Nieuw contactformulier bericht van ${data.name}`,
      getAdminNotificationEmail(data)
    )

    if (!customerEmailSent || !adminEmailSent) {
      console.error('Email sending failed:', { customerEmailSent, adminEmailSent })
      return NextResponse.json(
        { error: 'Er is een fout opgetreden bij het verzenden van de email' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, message: 'Bericht succesvol verzonden' })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Er is een onverwachte fout opgetreden' },
      { status: 500 }
    )
  }
}
