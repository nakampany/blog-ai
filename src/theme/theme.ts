import { type ThemeOptions, createTheme } from '@mui/material/styles'
import '@fontsource/noto-sans-jp'

// カラーパレット定義
const colors = {
    primary: {
        main: '#2C3E50', // 落ち着いた青系
        light: '#3E5871',
        dark: '#1A252F'
    },
    secondary: {
        main: '#34495E', // ダークブルーグレー
        light: '#4A6785',
        dark: '#2C3E50'
    },
    background: {
        default: '#F8FAFC', // 明るい背景色
        paper: '#FFFFFF'
    },
    text: {
        primary: '#1A202C', // ダークグレー
        secondary: '#4A5568' // ミディアムグレー
    },
    success: {
        main: '#38A169', // グリーン
        light: '#48BB78',
        dark: '#2F855A'
    },
    error: {
        main: '#E53E3E', // レッド
        light: '#FC8181',
        dark: '#C53030'
    }
}

// タイポグラフィ定義
const typography: ThemeOptions['typography'] = {
    fontFamily: ['Noto Sans JP', 'sans-serif'].join(','),
    h1: {
        fontSize: '2.5rem',
        fontWeight: 700,
        lineHeight: 1.2,
        letterSpacing: '-0.01562em'
    },
    h2: {
        fontSize: '2rem',
        fontWeight: 700,
        lineHeight: 1.3,
        letterSpacing: '-0.00833em'
    },
    h3: {
        fontSize: '1.75rem',
        fontWeight: 600,
        lineHeight: 1.4,
        letterSpacing: '0em'
    },
    h4: {
        fontSize: '1.5rem',
        fontWeight: 600,
        lineHeight: 1.4,
        letterSpacing: '0.00735em'
    },
    h5: {
        fontSize: '1.25rem',
        fontWeight: 500,
        lineHeight: 1.5,
        letterSpacing: '0em'
    },
    h6: {
        fontSize: '1rem',
        fontWeight: 500,
        lineHeight: 1.6,
        letterSpacing: '0.0075em'
    },
    body1: {
        fontSize: '1rem',
        lineHeight: 1.75,
        letterSpacing: '0.00938em'
    },
    body2: {
        fontSize: '0.875rem',
        lineHeight: 1.6,
        letterSpacing: '0.01071em'
    },
    button: {
        fontSize: '0.875rem',
        fontWeight: 500,
        letterSpacing: '0.02857em',
        textTransform: 'none' // ボタンテキストを大文字変換しない
    }
}

const components: ThemeOptions['components'] = {
    MuiButton: {
        styleOverrides: {
            root: {
                borderRadius: '8px',
                padding: '8px 16px',
                transition: 'all 0.2s ease-in-out'
            },
            contained: {
                boxShadow: 'none',
                '&:hover': {
                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'
                }
            }
        }
    },
    MuiPaper: {
        styleOverrides: {
            root: {
                borderRadius: '12px',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.05)'
            }
        }
    },
    MuiAppBar: {
        styleOverrides: {
            root: {
                boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.05)'
            }
        }
    },
    MuiDrawer: {
        styleOverrides: {
            paper: {
                borderRight: 'none'
            }
        }
    }
}

// MUIのデフォルトシャドウ配列
const defaultShadows = [
    'none',
    '0px 2px 4px rgba(0, 0, 0, 0.05)',
    '0px 4px 6px rgba(0, 0, 0, 0.1)',
    '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
    '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
    '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
    '0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)',
    '0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)',
    '0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)',
    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
    '0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)',
    '0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)',
    '0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)',
    '0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)',
    '0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)',
    '0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)',
    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)',
    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)',
    '0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)',
    '0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)',
    '0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)'
] as unknown as ThemeOptions['shadows']

// テーマの作成
const theme = createTheme({
    palette: colors,
    typography,
    components,
    shape: {
        borderRadius: 8
    },
    shadows: defaultShadows
})

export default theme
