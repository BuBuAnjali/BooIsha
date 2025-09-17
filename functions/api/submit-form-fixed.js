export default {
  async fetch(request, env, ctx) {
    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });
    }

    if (request.method === 'POST' && new URL(request.url).pathname === '/api/submit-form') {
      try {
        const formData = await request.formData();

        // Extract form fields
        const data = {
          firstname: formData.get('firstname'),
          lastname: formData.get('lastname'),
          email: formData.get('email'),
          phone: formData.get('phone'),
          subject: formData.get('subject'),
          message: formData.get('message')
        };

        // Check if API key exists
        if (!env.RESEND_API_KEY) {
          throw new Error('RESEND_API_KEY not configured');
        }

        const emailResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'noreply@booshiv.com',
            to: 'info@booshiv.com',
            subject: `Website Enquiry: ${data.subject || 'New Contact Form'}`,
            text: `New enquiry from BooIsha website:

        Name: ${data.firstname} ${data.lastname}
        Email: ${data.email}
        Phone: ${data.phone}
        Subject: ${data.subject}

        Message:
        ${data.message}

        Submitted: ${new Date().toLocaleString()}`
          }),
        });

        // CHECK IF EMAIL SENDING SUCCEEDED
        if (!emailResponse.ok) {
          const errorDetails = await emailResponse.json();
          throw new Error(`Resend API error: ${errorDetails.message || emailResponse.status}`);
        }

        console.log('Email sent successfully');
        console.log('Form submission:', data);

        return new Response(JSON.stringify({ success: true }), {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        });
      } catch (error) {
        console.error('Form submission error:', error);

        return new Response(JSON.stringify({
          success: false,
          error: error.message,
          details: 'Check Cloudflare logs for more details'
        }), {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        });
      }
    }

    return new Response('Not Found', { status: 404 });
  },
};