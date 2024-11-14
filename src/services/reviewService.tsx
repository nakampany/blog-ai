import OpenAI from 'openai'

const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
})

interface ReviewOptions {
    model?: string
    customPrompt?: string
}

export async function reviewBlogPost(
    title: string,
    keyWords: string,
    body: string,
    prompt: string,
    options: ReviewOptions = {}
) {
    if (!title && !keyWords && !body) {
        throw new Error('All inputs are empty')
    }

    if (!prompt) {
        throw new Error('Prompt is empty')
    }

    const blogPrompt = `
    You are an excellent blog writer.

    ${options.customPrompt ? `${options.customPrompt}\n\n` : ''}
    ${prompt}

    ### user input

    Title: ${title}
    KeyWords(comma separated): ${keyWords}
    Blog: ${body}
    `

    const completion = await openai.chat.completions.create({
        messages: [
            {
                role: 'system',
                content: 'You are a great blog writer.'
            },
            {
                role: 'user',
                content: blogPrompt
            }
        ],
        model: options.model || 'gpt-3.5-turbo'
    })

    if (
        completion.choices.length === 0 ||
        !completion.choices[0].message.content
    ) {
        throw new Error('Failed to generate review comment')
    }

    return completion.choices[0].message.content
}
