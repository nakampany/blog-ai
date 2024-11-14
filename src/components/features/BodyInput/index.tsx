'use client'

import { TextField } from '@mui/material'
import { motion } from 'framer-motion'
import React from 'react'

interface Props {
    body: string
    setBody: (value: string) => void
}

const textAreaVariants = {
    initial: { opacity: 0, y: 10 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 30
        }
    }
}

export const Component = (props: Props) => {
    const { body, setBody } = props

    return (
        <motion.div
            variants={textAreaVariants}
            initial="initial"
            animate="animate"
        >
            <TextField
                name="body"
                placeholder="本文（Markdown記法）"
                rows={10}
                value={body}
                onChange={(event) => setBody(event.target.value)}
                multiline
                fullWidth
                variant="outlined"
                sx={{
                    mb: 3,
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: 'divider'
                        },
                        '&:hover fieldset': {
                            borderColor: 'primary.main'
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: 'primary.main'
                        }
                    },
                    '& .MuiInputBase-input': {
                        p: 2,
                        fontSize: '1rem',
                        lineHeight: 1.6,
                        fontFamily: 'monospace',
                        '&::placeholder': {
                            color: 'text.secondary',
                            opacity: 0.8
                        }
                    }
                }}
            />
        </motion.div>
    )
}
