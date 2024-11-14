'use client'

import MenuIcon from '@mui/icons-material/Menu'
import {
    AppBar,
    Avatar,
    Box,
    Divider,
    IconButton,
    Menu,
    MenuItem,
    MenuList,
    Toolbar,
    Typography,
    useTheme
} from '@mui/material'
import Link from 'next/link'
import type React from 'react'
import { useState } from 'react'

interface Props {
    onClick: () => void
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
            position="static"
            sx={{
                bgcolor: 'primary.main',
                boxShadow: theme.shadows[1]
            }}
        >
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Box display="flex" alignItems="center" gap={2}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={props.onClick}
                        sx={{
                            mr: 1,
                            display: { xs: 'flex', md: 'none' }
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            fontWeight: 'bold',
                            color: 'text.primary'
                        }}
                    >
                        <Link
                            href="/TitleGeneration"
                            style={{
                                color: 'inherit',
                                textDecoration: 'none'
                            }}
                        >
                            記事執筆支援ツール
                        </Link>
                    </Typography>
                </Box>

                <Box
                    display="flex"
                    alignItems="center"
                    gap={3}
                    sx={{
                        '& > *:not(:last-child)': {
                            display: { xs: 'none', md: 'flex' }
                        }
                    }}
                >
                    <Typography
                        sx={{
                            fontWeight: 'bold',
                            color: 'text.primary',
                            '&:hover': {
                                color: 'primary.light',
                                cursor: 'pointer'
                            }
                        }}
                    >
                        使い方Notion
                    </Typography>
                    <Typography
                        sx={{
                            fontWeight: 'bold',
                            color: 'text.primary',
                            '&:hover': {
                                color: 'primary.light',
                                cursor: 'pointer'
                            }
                        }}
                    >
                        ヘルプ
                    </Typography>
                    <Typography
                        sx={{
                            fontWeight: 'bold',
                            color: 'text.primary',
                            '&:hover': {
                                color: 'primary.light',
                                cursor: 'pointer'
                            }
                        }}
                    >
                        その他Notion
                    </Typography>
                    <IconButton
                        onClick={handleMenuOpen}
                        sx={{
                            ml: { xs: 0, md: 2 }
                        }}
                    >
                        <Avatar
                            alt="User Avatar"
                            src=""
                            sx={{
                                width: 35,
                                height: 35,
                                bgcolor: 'secondary.main'
                            }}
                        />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleMenuClose}
                        MenuListProps={{ 'aria-labelledby': 'profileDropdown' }}
                        sx={{
                            '& .MuiPaper-root': {
                                bgcolor: 'background.paper',
                                boxShadow: theme.shadows[3]
                            }
                        }}
                    >
                        <MenuList>
                            <MenuItem
                                disabled
                                sx={{
                                    color: 'text.secondary',
                                    typography: 'body2'
                                }}
                            >
                                aaa@example.com
                            </MenuItem>
                            <Divider />
                            <MenuItem
                                onClick={handleMenuClose}
                                sx={{
                                    '&:hover': {
                                        bgcolor: 'primary.light',
                                        color: 'common.white'
                                    }
                                }}
                            >
                                ログイン機能作りたいかも？
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
