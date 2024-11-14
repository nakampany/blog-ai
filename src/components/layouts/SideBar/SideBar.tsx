'use client'

import ArticleIcon from '@mui/icons-material/Article'
import ChecklistIcon from '@mui/icons-material/Checklist'
import EditNoteIcon from '@mui/icons-material/EditNote'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import NotesIcon from '@mui/icons-material/Notes'
import ShortTextIcon from '@mui/icons-material/ShortText'
import SpellcheckIcon from '@mui/icons-material/Spellcheck'
import TitleIcon from '@mui/icons-material/Title'
import TocIcon from '@mui/icons-material/Toc'
import {
    Box,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    useTheme
} from '@mui/material'
import Link from 'next/link'
import type React from 'react'

interface Props {
    open: boolean
    onClose: () => void
}

const menuItems = [
    { text: '一括生成', link: '/AllGenerate' },
    { text: 'タイトル生成', link: '/TitleGeneration' },
    { text: 'アウトライン生成', link: '/Outline' },
    { text: 'リード文生成', link: '/LeadText' },
    { text: '本文生成', link: '/BodyText' },
    { text: 'まとめ生成', link: '/Conclusion' },
    { text: 'リライト（短文）', link: '/RewriteShort' },
    { text: 'リライト（長文）', link: '/RewriteLong' },
    { text: '誤字脱字チェック', link: '/CheckMistakes' },
    { text: '自由入力', link: '/FreeInput' }
]

export const SideBar: React.FC<Props> = (props) => {
    const theme = useTheme()

    return (
        <Drawer
            variant="temporary"
            anchor="left"
            open={props.open}
            onClose={props.onClose}
            sx={{
                '& .MuiDrawer-paper': {
                    width: { xs: '85%', sm: 280 },
                    bgcolor: 'background.paper',
                    borderRight: `1px solid ${theme.palette.divider}`,
                    boxShadow: theme.shadows[3]
                }
            }}
            PaperProps={{
                elevation: 3
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                }}
                role="presentation"
            >
                <Box
                    sx={{
                        p: 2,
                        bgcolor: 'primary.main',
                        color: 'primary.contrastText'
                    }}
                >
                    <Typography variant="h6" component="div">
                        機能一覧
                    </Typography>
                </Box>
                <Divider />
                <List
                    sx={{
                        flex: 1,
                        py: 0,
                        '& .MuiListItemButton-root': {
                            py: 1.5,
                            '&:hover': {
                                bgcolor: 'action.hover'
                            }
                        },
                        '& .MuiListItemIcon-root': {
                            color: 'primary.main',
                            minWidth: 40
                        },
                        '& .MuiListItemText-primary': {
                            fontSize: '0.95rem',
                            fontWeight: 500
                        }
                    }}
                >
                    {menuItems.map((item) => (
                        <ListItem key={item.text} disablePadding>
                            <Link
                                href={item.link}
                                passHref
                                style={{
                                    textDecoration: 'none',
                                    color: 'inherit',
                                    width: '100%'
                                }}
                            >
                                <ListItemButton
                                    sx={{
                                        px: 2,
                                        '&:hover': {
                                            '& .MuiListItemIcon-root': {
                                                color: 'primary.dark'
                                            },
                                            '& .MuiListItemText-primary': {
                                                color: 'primary.dark'
                                            }
                                        }
                                    }}
                                >
                                    <ListItemIcon>
                                        {item.link === '/AllGenerate' && (
                                            <MenuBookIcon />
                                        )}
                                        {item.link === '/TitleGeneration' && (
                                            <TitleIcon />
                                        )}
                                        {item.link === '/Outline' && (
                                            <TocIcon />
                                        )}
                                        {item.link === '/LeadText' && (
                                            <ShortTextIcon />
                                        )}
                                        {item.link === '/BodyText' && (
                                            <ArticleIcon />
                                        )}
                                        {item.link === '/Conclusion' && (
                                            <NotesIcon />
                                        )}
                                        {item.link === '/RewriteShort' && (
                                            <EditNoteIcon />
                                        )}
                                        {item.link === '/RewriteLong' && (
                                            <EditNoteIcon />
                                        )}
                                        {item.link === '/CheckMistakes' && (
                                            <ChecklistIcon />
                                        )}
                                        {item.link === '/FreeInput' && (
                                            <SpellcheckIcon />
                                        )}
                                    </ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            </Link>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    )
}
