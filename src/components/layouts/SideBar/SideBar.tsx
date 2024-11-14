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
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
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

const drawerVariants = {
    open: {
        x: 0,
        transition: { type: 'spring', stiffness: 300, damping: 30 }
    },
    closed: {
        x: '-100%',
        transition: { type: 'spring', stiffness: 300, damping: 30 }
    }
}

const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: { delay: i * 0.05, duration: 0.2 }
    })
}

export const SideBar: React.FC<Props> = (props) => {
    const theme = useTheme()
    const shouldReduceMotion = useReducedMotion()

    const variants = shouldReduceMotion
        ? { open: { x: 0 }, closed: { x: '-100%' } }
        : drawerVariants

    return (
        <AnimatePresence>
            {props.open && (
                <Drawer
                    variant="temporary"
                    anchor="left"
                    open={props.open}
                    onClose={props.onClose}
                    PaperProps={{
                        component: motion.div,
                        variants,
                        initial: 'closed',
                        animate: 'open',
                        exit: 'closed',
                        sx: {
                            width: { xs: '85%', sm: 280 },
                            bgcolor: 'background.paper',
                            borderRight: `1px solid ${theme.palette.divider}`,
                            boxShadow: theme.shadows[3]
                        }
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
                            component={motion.div}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
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
                        <List sx={{ flex: 1, py: 0 }}>
                            {menuItems.map((item, i) => (
                                <motion.div
                                    key={item.text}
                                    custom={i}
                                    variants={listItemVariants}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <ListItem disablePadding>
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
                                                component={motion.div}
                                                whileHover={{
                                                    backgroundColor:
                                                        theme.palette.action
                                                            .hover,
                                                    x: 4,
                                                    transition: {
                                                        duration: 0.2
                                                    }
                                                }}
                                                sx={{ px: 2 }}
                                            >
                                                <ListItemIcon
                                                    sx={{
                                                        color: 'primary.main',
                                                        minWidth: 40
                                                    }}
                                                >
                                                    {item.link ===
                                                        '/AllGenerate' && (
                                                        <MenuBookIcon />
                                                    )}
                                                    {item.link ===
                                                        '/TitleGeneration' && (
                                                        <TitleIcon />
                                                    )}
                                                    {item.link ===
                                                        '/Outline' && (
                                                        <TocIcon />
                                                    )}
                                                    {item.link ===
                                                        '/LeadText' && (
                                                        <ShortTextIcon />
                                                    )}
                                                    {item.link ===
                                                        '/BodyText' && (
                                                        <ArticleIcon />
                                                    )}
                                                    {item.link ===
                                                        '/Conclusion' && (
                                                        <NotesIcon />
                                                    )}
                                                    {item.link ===
                                                        '/RewriteShort' && (
                                                        <EditNoteIcon />
                                                    )}
                                                    {item.link ===
                                                        '/RewriteLong' && (
                                                        <EditNoteIcon />
                                                    )}
                                                    {item.link ===
                                                        '/CheckMistakes' && (
                                                        <ChecklistIcon />
                                                    )}
                                                    {item.link ===
                                                        '/FreeInput' && (
                                                        <SpellcheckIcon />
                                                    )}
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={item.text}
                                                    sx={{
                                                        '& .MuiTypography-root':
                                                            {
                                                                fontSize:
                                                                    '0.95rem',
                                                                fontWeight: 500
                                                            }
                                                    }}
                                                />
                                            </ListItemButton>
                                        </Link>
                                    </ListItem>
                                </motion.div>
                            ))}
                        </List>
                    </Box>
                </Drawer>
            )}
        </AnimatePresence>
    )
}
