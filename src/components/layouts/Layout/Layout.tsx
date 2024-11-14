'use client'

import { Header } from '@/components/layouts/Header'
import { SideBar } from '@/components/layouts/SideBar'
import { Box, Container } from '@mui/material'
import React from 'react'

export const Layout: React.FC<{ children: React.ReactNode }> = ({
    children
}) => {
    const [open, setOpen] = React.useState(false)

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen)
    }

    return (
        <Box
            component="body"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                bgcolor: 'background.default'
            }}
        >
            <Header onMenuClick={toggleDrawer(true)} />
            <SideBar open={open} onClose={toggleDrawer(false)} />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: {
                        xs: 2, // 8px padding on mobile
                        sm: 3, // 12px padding on tablet
                        md: 4 // 16px padding on desktop
                    },
                    minHeight: '100vh'
                }}
            >
                <Container
                    maxWidth="lg"
                    sx={{
                        px: {
                            xs: 2, // Smaller padding on mobile
                            sm: 3, // Medium padding on tablet
                            md: 4 // Larger padding on desktop
                        }
                    }}
                >
                    {children}
                </Container>
            </Box>
        </Box>
    )
}
