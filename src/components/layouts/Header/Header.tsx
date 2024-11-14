'use client'

import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import MenuIcon from '@mui/icons-material/Menu'
import {
    AppBar,
    Avatar,
    Box,
    IconButton,
    Menu,
    MenuItem,
    MenuList,
    Toolbar,
    Typography,
    useTheme
} from '@mui/material'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import type React from 'react'
import { useState } from 'react'

interface Props {
    onMenuClick: () => void
}

const menuVariants = {
    hidden: {
        opacity: 0,
        y: -5,
        transition: {
            duration: 0.2
        }
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.2
        }
    }
}

const buttonVariants = {
    hover: {
        scale: 1.05,
        transition: {
            duration: 0.2
        }
    },
    tap: {
        scale: 0.95
    }
}

export const Header: React.FC<Props> = (props) => {
    const theme = useTheme()
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleMenuClose = () => {
        setAnchorEl(null)
    }

    return (
        <AppBar
            position="sticky"
            component={motion.header}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            sx={{
                bgcolor: 'primary.main',
                boxShadow: theme.shadows[1]
            }}
        >
            <Toolbar
                sx={{
                    justifyContent: 'space-between',
                    height: 64,
                    px: { xs: 2, sm: 4 }
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <motion.div
                        whileHover="hover"
                        whileTap="tap"
                        variants={buttonVariants}
                    >
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={props.onMenuClick}
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </motion.div>
                    <Link href="/" passHref style={{ textDecoration: 'none' }}>
                        <Typography
                            variant="h6"
                            component={motion.div}
                            whileHover={{
                                scale: 1.02,
                                transition: { duration: 0.2 }
                            }}
                            sx={{
                                color: 'primary.contrastText',
                                fontWeight: 700,
                                cursor: 'pointer'
                            }}
                        >
                            Blog AI
                        </Typography>
                    </Link>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <motion.div
                        whileHover="hover"
                        whileTap="tap"
                        variants={buttonVariants}
                    >
                        <IconButton
                            onClick={handleMenuOpen}
                            size="small"
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                        >
                            <Avatar sx={{ width: 32, height: 32 }}>
                                <AccountCircleIcon />
                            </Avatar>
                        </IconButton>
                    </motion.div>
                </Box>

                <AnimatePresence>
                    {open && (
                        <Menu
                            id="account-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleMenuClose}
                            onClick={handleMenuClose}
                            transformOrigin={{
                                horizontal: 'right',
                                vertical: 'top'
                            }}
                            anchorOrigin={{
                                horizontal: 'right',
                                vertical: 'bottom'
                            }}
                            PaperProps={{
                                component: motion.div,
                                variants: menuVariants,
                                initial: 'hidden',
                                animate: 'visible',
                                exit: 'hidden',
                                elevation: 3,
                                sx: {
                                    mt: 1,
                                    minWidth: 180,
                                    borderRadius: 1,
                                    bgcolor: 'background.paper'
                                }
                            }}
                        >
                            <MenuList>
                                <MenuItem
                                    component={motion.div}
                                    whileHover={{
                                        backgroundColor:
                                            theme.palette.action.hover,
                                        x: 4,
                                        transition: { duration: 0.2 }
                                    }}
                                >
                                    プロフィール
                                </MenuItem>
                                <MenuItem
                                    component={motion.div}
                                    whileHover={{
                                        backgroundColor:
                                            theme.palette.action.hover,
                                        x: 4,
                                        transition: { duration: 0.2 }
                                    }}
                                >
                                    設定
                                </MenuItem>
                                <MenuItem
                                    component={motion.div}
                                    whileHover={{
                                        backgroundColor:
                                            theme.palette.action.hover,
                                        x: 4,
                                        transition: { duration: 0.2 }
                                    }}
                                >
                                    ログアウト
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    )}
                </AnimatePresence>
            </Toolbar>
        </AppBar>
    )
}
