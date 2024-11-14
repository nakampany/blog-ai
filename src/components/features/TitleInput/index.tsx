'use client'

import { TextField } from '@mui/material'
import { motion } from 'framer-motion'
import React from 'react'

interface Props {
    title: string
    setTitle: (value: string) => void
}

const inputVariants = {
    initial: { opacity: 0, y: -10 },
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
    const { title, setTitle } = props

    return (
        <motion.div
            variants={inputVariants}
            initial="initial"
            animate="animate"
        >
            <TextField
                type="text"
                name="title"
                placeholder="タイトル"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
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
