'use client'

import { Button, CircularProgress, Typography } from '@mui/material'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

interface Props {
    isReviewing: boolean
    hasReviewed: boolean
    onReview: () => void
}

const buttonVariants = {
    initial: { scale: 0.95, opacity: 0 },
    animate: {
        scale: 1,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 25
        }
    },
    exit: { scale: 0.95, opacity: 0 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
}

const loadingVariants = {
    initial: { opacity: 0, y: 10 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.2
        }
    },
    exit: {
        opacity: 0,
        y: -10,
        transition: {
            duration: 0.2
        }
    }
}

export const Component = (props: Props) => {
    const { isReviewing, hasReviewed, onReview } = props

    return (
        <AnimatePresence mode="wait">
            {isReviewing ? (
                <motion.div
                    key="loading"
                    variants={loadingVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        float: 'right'
                    }}
                >
                    <CircularProgress size={20} color="primary" />
                    <Typography variant="body2" color="text.secondary">
                        生成中です... 最長でも1分ほどかかります。
                    </Typography>
                </motion.div>
            ) : (
                <motion.div
                    key="button"
                    variants={buttonVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    style={{ float: 'right' }}
                >
                    <Button
                        component={motion.button}
                        whileHover="hover"
                        whileTap="tap"
                        variant="contained"
                        onClick={onReview}
                        sx={{
                            mb: 2,
                            px: 3,
                            py: 1,
                            bgcolor: 'primary.main',
                            color: 'primary.contrastText',
                            fontWeight: 600,
                            '&:hover': {
                                bgcolor: 'primary.dark'
                            }
                        }}
                    >
                        {hasReviewed ? '再提案' : '提案'}
                    </Button>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
