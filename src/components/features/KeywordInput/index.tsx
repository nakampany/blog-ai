'use client'

import { FormHelperText, TextField } from '@mui/material'
import { motion } from 'framer-motion'
import React, { useMemo } from 'react'

interface Props {
    keyWords: string
    setKeyWords: (value: string) => void
}

const inputVariants = {
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
    const { keyWords, setKeyWords } = props

    const keywordCount = useMemo(() => {
        return keyWords.split(',').filter((k) => k.trim()).length
    }, [keyWords])

    const isExceedingLimit = keywordCount > 5
    const helperText = `${keywordCount}/5 キーワード${isExceedingLimit ? ' (制限を超えています)' : ''}`

    return (
        <motion.div
            variants={inputVariants}
            initial="initial"
            animate="animate"
        >
            <TextField
                type="text"
                name="keyWords"
                placeholder="キーワード（カンマ区切りで5個まで）"
                value={keyWords}
                onChange={(event) => setKeyWords(event.target.value)}
                fullWidth
                variant="outlined"
                error={isExceedingLimit}
                sx={{
                    mb: 1,
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
            <FormHelperText
                error={isExceedingLimit}
                sx={{
                    mb: 2,
                    textAlign: 'right',
                    fontWeight: isExceedingLimit ? 600 : 400
                }}
            >
                {helperText}
            </FormHelperText>
        </motion.div>
    )
}
