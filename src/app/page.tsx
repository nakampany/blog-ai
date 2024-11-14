'use client'

import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'

export default function Home() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                textAlign: 'center',
                padding: '0 16px'
            }}
        >
            <Container maxWidth="md">
                <Typography
                    variant="h2"
                    component="h1"
                    gutterBottom
                    sx={{
                        fontWeight: 'bold',
                        color: '#424242',
                        animation: 'fadeIn 2s ease-in-out'
                    }}
                >
                    ブログ執筆支援ツール
                </Typography>
                <Typography
                    variant="h6"
                    component="p"
                    color="textSecondary"
                    sx={{
                        marginBottom: '24px',
                        animation: 'fadeIn 3s ease-in-out'
                    }}
                >
                    {/* タイトル生成、記事概要生成、記事のリライトを行うことができます！ */}
                    <br />
                    TODO：タスク一覧（やりたいことリスト）
                    <br />
                    1. プロンプトを頑張り、実用的なものにする
                    <br />
                    2. デザインを考え、レイアウトを整える
                    <br />
                    3. 事前学習機能を実装
                    <br />
                    4. ローカルストレージのバグを修正
                    <br />
                    5. ログイン・認証機能
                </Typography>
                <Button
                    href="/TitleGeneration"
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{
                        padding: '12px 24px',
                        fontSize: '1rem',
                        borderRadius: '8px',
                        textTransform: 'none',
                        animation: 'fadeIn 4s ease-in-out',
                        ':hover': {
                            backgroundColor: '#1976d2'
                        }
                    }}
                >
                    生成AIを使ってブログを書く
                </Button>
            </Container>
        </Box>
    )
}
