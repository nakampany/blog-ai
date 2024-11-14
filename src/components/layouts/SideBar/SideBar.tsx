'use client'

import { Component as ModelSelector } from '@/components/features/ModelSelector'
import { Component as PromptInput } from '@/components/features/PromptInput'
import { useSettings } from '@/services/settingsService'
import ArticleIcon from '@mui/icons-material/Article'
import ChecklistIcon from '@mui/icons-material/Checklist'
import EditNoteIcon from '@mui/icons-material/EditNote'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import NotesIcon from '@mui/icons-material/Notes'
import SettingsIcon from '@mui/icons-material/Settings'
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
    Typography
} from '@mui/material'
import Link from 'next/link'
import type React from 'react'

interface props {
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

export const SideBar: React.FC<props> = (props) => {
    const { settings, setCustomPrompt, setSelectedModel } = useSettings()

    return (
        <Drawer
            variant="temporary"
            anchor="left"
            open={props.open}
            onClose={props.onClose}
        >
            <Box sx={{ width: 300 }} role="presentation">
                <List>
                    <ListItem>
                        <ListItemText primary="機能一覧" />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    {menuItems.map((item) => (
                        <ListItem key={item.text} disablePadding sx={{ pl: 2 }}>
                            <Link href={item.link} passHref>
                                <ListItemButton>
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
                <Divider />
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText primary="設定" />
                    </ListItem>
                    <ListItem
                        sx={{
                            flexDirection: 'column',
                            alignItems: 'stretch',
                            gap: 2,
                            p: 2
                        }}
                    >
                        <Typography variant="subtitle2" gutterBottom>
                            モデル選択
                        </Typography>
                        <ModelSelector
                            model={settings.selectedModel}
                            setModel={setSelectedModel}
                        />
                        <Typography variant="subtitle2" gutterBottom>
                            カスタムプロンプト
                        </Typography>
                        <PromptInput
                            prompt={settings.customPrompt}
                            setPrompt={setCustomPrompt}
                        />
                    </ListItem>
                </List>
            </Box>
        </Drawer>
    )
}
