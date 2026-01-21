import { NextRequest, NextResponse } from 'next/server'

const BREVO_API_KEY = process.env.BREVO_API_KEY!
const SENDER_EMAIL = 'Info@Oliverdytko-arbeidsbemiddeling.nl'
const SENDER_NAME = 'Oliver Dytko Arbeidsbemiddeling'

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
<html lang="nl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bedankt voor uw bericht</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table role="presentation" style="width: 600px; max-width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #059669 0%, #10b981 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700;">Oliver Dytko</h1>
              <p style="margin: 8px 0 0 0; color: rgba(255,255,255,0.9); font-size: 14px; letter-spacing: 1px;">ARBEIDSBEMIDDELING</p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <h2 style="margin: 0 0 20px 0; color: #1f2937; font-size: 24px;">Bedankt voor uw bericht, ${data.name}!</h2>
              
              <p style="margin: 0 0 20px 0; color: #4b5563; font-size: 16px; line-height: 1.6;">
                Wij hebben uw bericht in goede orde ontvangen. Ons team zal zo spoedig mogelijk contact met u opnemen.
              </p>
              
              <div style="background-color: #f0fdf4; border-left: 4px solid #10b981; padding: 20px; margin: 30px 0; border-radius: 0 8px 8px 0;">
                <h3 style="margin: 0 0 15px 0; color: #059669; font-size: 16px;">Uw bericht:</h3>
                <p style="margin: 0; color: #374151; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
              </div>
              
              <p style="margin: 20px 0 0 0; color: #4b5563; font-size: 16px; line-height: 1.6;">
                Heeft u dringende vragen? Neem dan direct contact met ons op:
              </p>
              
              <table role="presentation" style="margin: 20px 0; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0;">
                    <span style="color: #10b981; font-weight: 600;">📞 Telefoon:</span>
                    <a href="tel:+31620180034" style="color: #1f2937; text-decoration: none; margin-left: 8px;">+31 6 20 18 00 34</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0;">
                    <span style="color: #10b981; font-weight: 600;">✉️ Email:</span>
                    <a href="mailto:Info@Oliverdytko-arbeidsbemiddeling.nl" style="color: #1f2937; text-decoration: none; margin-left: 8px;">Info@Oliverdytko-arbeidsbemiddeling.nl</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #1f2937; padding: 30px; text-align: center;">
              <p style="margin: 0 0 10px 0; color: #9ca3af; font-size: 14px;">
                Oliver Dytko Arbeidsbemiddeling
              </p>
              <p style="margin: 0 0 10px 0; color: #6b7280; font-size: 12px;">
                Vergiliusstraat 43, 1502 NN Zaandam
              </p>
              <p style="margin: 0; color: #6b7280; font-size: 12px;">
                © ${new Date().getFullYear()} Oliver Dytko. Alle rechten voorbehouden.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`
}

function getAdminNotificationEmail(data: ContactFormData): string {
  return `
<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nieuw Contactformulier Bericht</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table role="presentation" style="width: 600px; max-width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #059669 0%, #10b981 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700;">Nieuw Bericht</h1>
              <p style="margin: 8px 0 0 0; color: rgba(255,255,255,0.9); font-size: 14px;">Via het contactformulier</p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <h2 style="margin: 0 0 25px 0; color: #1f2937; font-size: 20px; border-bottom: 2px solid #10b981; padding-bottom: 10px;">Contactgegevens</h2>
              
              <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                    <span style="color: #6b7280; font-size: 14px; display: inline-block; width: 100px;">Naam:</span>
                    <span style="color: #1f2937; font-size: 14px; font-weight: 600;">${data.name}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                    <span style="color: #6b7280; font-size: 14px; display: inline-block; width: 100px;">Email:</span>
                    <a href="mailto:${data.email}" style="color: #059669; font-size: 14px; font-weight: 600; text-decoration: none;">${data.email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                    <span style="color: #6b7280; font-size: 14px; display: inline-block; width: 100px;">Telefoon:</span>
                    <a href="tel:${data.phone}" style="color: #059669; font-size: 14px; font-weight: 600; text-decoration: none;">${data.phone}</a>
                  </td>
                </tr>
                ${data.company ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                    <span style="color: #6b7280; font-size: 14px; display: inline-block; width: 100px;">Bedrijf:</span>
                    <span style="color: #1f2937; font-size: 14px; font-weight: 600;">${data.company}</span>
                  </td>
                </tr>
                ` : ''}
              </table>
              
              <h2 style="margin: 0 0 15px 0; color: #1f2937; font-size: 20px; border-bottom: 2px solid #10b981; padding-bottom: 10px;">Bericht</h2>
              
              <div style="background-color: #f9fafb; border: 1px solid #e5e7eb; padding: 20px; border-radius: 8px;">
                <p style="margin: 0; color: #374151; font-size: 14px; line-height: 1.8; white-space: pre-wrap;">${data.message}</p>
              </div>
              
              <!-- Quick Actions -->
              <div style="margin-top: 30px; text-align: center;">
                <a href="mailto:${data.email}" style="display: inline-block; background-color: #059669; color: #ffffff; padding: 12px 30px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px; margin-right: 10px;">Beantwoorden</a>
                <a href="tel:${data.phone}" style="display: inline-block; background-color: #1f2937; color: #ffffff; padding: 12px 30px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px;">Bellen</a>
              </div>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #1f2937; padding: 20px 30px; text-align: center;">
              <p style="margin: 0; color: #9ca3af; font-size: 12px;">
                Dit bericht is verzonden via het contactformulier op oliverdytko-arbeidsbemiddeling.nl
              </p>
              <p style="margin: 8px 0 0 0; color: #6b7280; font-size: 12px;">
                ${new Date().toLocaleString('nl-NL', { dateStyle: 'full', timeStyle: 'short' })}
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`
}

async function sendEmail(to: string, toName: string, subject: string, htmlContent: string): Promise<boolean> {
  try {
    console.log(`[Email] Sending to ${to} with subject: ${subject}`)
    console.log(`[Email] API Key present: ${!!BREVO_API_KEY}`)
    
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': BREVO_API_KEY,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
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
      }),
    })

    const responseData = await response.json()
    console.log(`[Email] Response status: ${response.status}`)
    console.log(`[Email] Response data:`, responseData)

    if (!response.ok) {
      console.error(`[Email] Brevo API error (${response.status}):`, responseData)
      return false
    }

    console.log(`[Email] Successfully sent to ${to}`)
    return true
  } catch (error) {
    console.error('[Email] Error sending email:', error)
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
