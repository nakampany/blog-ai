import EditIcon from '@mui/icons-material/Edit'
import PreviewIcon from '@mui/icons-material/Preview'
import { Box, IconButton, TextField } from '@mui/material'
import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

interface Props {
    prompt: string
    setPrompt: (value: string) => void
}

export const Component = (props: Props) => {
    const { prompt, setPrompt } = props
    const [showPreview, setShowPreview] = useState(false)

    return (
        <Box className="relative">
            <Box className="absolute right-2 top-2 z-10">
                <IconButton
                    onClick={() => setShowPreview(!showPreview)}
                    size="small"
                    className="bg-white/80 hover:bg-white"
                >
                    {showPreview ? <EditIcon /> : <PreviewIcon />}
                </IconButton>
            </Box>

            {showPreview ? (
                <Box className="min-h-[250px] p-4 border rounded-md bg-white/80">
                    <ReactMarkdown>{prompt}</ReactMarkdown>
                </Box>
            ) : (
                <TextField
                    name="prompt"
                    placeholder="プロンプト（Markdown記法）"
                    rows={10}
                    value={prompt}
                    onChange={(event) => setPrompt(event.target.value)}
                    className="block w-full border-0 p-2 mb-4"
                    multiline
                    fullWidth
                />
            )}
        </Box>
    )
}
