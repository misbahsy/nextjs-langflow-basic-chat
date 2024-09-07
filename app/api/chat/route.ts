import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { message } = await request.json()

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 160000) // 1 minute timeout

    const response = await fetch(process.env.LANGFLOW_API_URL!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.LANGFLOW_API_TOKEN}`
      },
      body: JSON.stringify({
        input_value: message,
        output_type: 'chat',
        input_type: 'chat',
        tweaks: {
        }
      }),
      signal: controller.signal
    })

    clearTimeout(timeoutId)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const text = await response.text()
    let data
    try {
      data = JSON.parse(text)
    } catch (e) {
      console.error('Failed to parse JSON:', text)
      throw new Error('Invalid JSON response from API')
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error('Error:', error)
    if (error instanceof Error && error.name === 'AbortError') {
      return NextResponse.json({ error: 'Request timed out. Please try again.' }, { status: 504 })
    }
    return NextResponse.json({ error: 'An error occurred while processing your request' }, { status: 500 })
  }
}
