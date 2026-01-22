import { NextResponse } from 'next/server'

export async function GET() {
  const xmlContent = `<?xml version="1.0"?>
<users>
	<user>789A29F33E1B0FAF8BF9DAC1B0FF211E</user>
</users>`

  return new NextResponse(xmlContent, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
