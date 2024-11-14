'use client'

import { Paper } from '@mui/material'
import { motion } from 'framer-motion'
import React from 'react'
import ReactMarkdown from 'react-markdown'

interface Props {
    reviewComment: string
}

const markdownVariants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 30
        }
    }
}

export const Component = (props: Props) => {
    const { reviewComment } = props

    return (
        <motion.div
            variants={markdownVariants}
            initial="initial"
            animate="animate"
        >
            <Paper
                elevation={0}
                sx={{
                    p: 3,
                    mb: 3,
                    borderRadius: 2,
                    backgroundColor: 'background.paper',
                    border: '1px solid',
                    borderColor: 'divider',
                    '& .markdown': {
                        '& h1': {
                            fontSize: '1.75rem',
                            fontWeight: 600,
                            mb: 2,
                            color: 'text.primary'
                        },
                        '& h2': {
                            fontSize: '1.5rem',
                            fontWeight: 600,
                            mb: 2,
                            mt: 3,
                            color: 'text.primary'
                        },
                        '& h3': {
                            fontSize: '1.25rem',
                            fontWeight: 600,
                            mb: 2,
                            mt: 3,
                            color: 'text.primary'
                        },
                        '& p': {
                            mb: 2,
                            lineHeight: 1.7,
                            color: 'text.primary'
                        },
                        '& ul, & ol': {
                            mb: 2,
                            pl: 3
                        },
                        '& li': {
                            mb: 1,
                            color: 'text.primary'
                        },
                        '& code': {
                            p: 0.5,
                            borderRadius: 1,
                            backgroundColor: 'action.hover',
                            color: 'primary.main',
                            fontFamily: 'monospace'
                        },
                        '& pre': {
                            p: 2,
                            mb: 2,
                            borderRadius: 1,
                            backgroundColor: 'action.hover',
                            '& code': {
                                p: 0,
                                backgroundColor: 'transparent'
                            }
                        },
                        '& blockquote': {
                            ml: 0,
                            pl: 2,
                            borderLeft: '4px solid',
                            borderColor: 'primary.main',
                            fontStyle: 'italic',
                            color: 'text.secondary'
                        }
                    }
                }}
            >
                <ReactMarkdown className="markdown">
                    {reviewComment}
                </ReactMarkdown>
            </Paper>
        </motion.div>
    )
}
