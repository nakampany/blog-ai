'use client'

import { Button, Stack, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import React from 'react'

interface Props {
    copyToClipboard: () => void
    copySuccess: string
    clearReviewHistory: () => void
}

const buttonVariants = {
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
    const { copyToClipboard, copySuccess, clearReviewHistory } = props
    return (
        <motion.div
            variants={buttonVariants}
            initial="initial"
            animate="animate"
        >
            <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                sx={{ mt: 4 }}
            >
                <Button
                    variant="contained"
                    color="success"
                    onClick={copyToClipboard}
                    sx={{
                        fontWeight: 600,
                        '&:hover': {
                            backgroundColor: 'success.light'
                        }
                    }}
                >
                    コピー
                </Button>
                <Button
                    variant="contained"
                    color="error"
                    onClick={clearReviewHistory}
                    sx={{
                        fontWeight: 600,
                        '&:hover': {
                            backgroundColor: 'error.light'
                        }
                    }}
                >
                    履歴を削除
                </Button>
            </Stack>
            {copySuccess && (
                <Typography
                    color="success.main"
                    sx={{ mt: 2, fontWeight: 500 }}
                    component={motion.p}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    {copySuccess}
                </Typography>
            )}
        </motion.div>
    )
}
