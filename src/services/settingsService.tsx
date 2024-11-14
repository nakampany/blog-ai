import { useEffect, useState } from 'react'

interface Settings {
    customPrompt: string
    selectedModel: string
}

const DEFAULT_SETTINGS: Settings = {
    customPrompt: '',
    selectedModel: 'gpt-3.5-turbo'
}

const STORAGE_KEY = 'blog-ai-settings'

// ローカルストレージから設定を読み込む
const loadSettings = (): Settings => {
    if (typeof window === 'undefined') return DEFAULT_SETTINGS

    const savedSettings = localStorage.getItem(STORAGE_KEY)
    if (!savedSettings) return DEFAULT_SETTINGS

    try {
        return JSON.parse(savedSettings)
    } catch (error) {
        console.error('Failed to parse settings:', error)
        return DEFAULT_SETTINGS
    }
}

// 設定をローカルストレージに保存
const saveSettings = (settings: Settings): void => {
    if (typeof window === 'undefined') return
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings))
}

// カスタムフック: 設定の状態管理
export const useSettings = () => {
    const [settings, setSettings] = useState<Settings>(DEFAULT_SETTINGS)
    const [isLoaded, setIsLoaded] = useState(false)

    // 初回マウント時に設定を読み込む
    useEffect(() => {
        const loadedSettings = loadSettings()
        setSettings(loadedSettings)
        setIsLoaded(true)
    }, [])

    // 設定を更新する
    const updateSettings = (newSettings: Partial<Settings>) => {
        setSettings((prev) => {
            const updated = { ...prev, ...newSettings }
            saveSettings(updated)
            return updated
        })
    }

    return {
        settings,
        isLoaded,
        updateSettings,
        // 個別の設定更新用のヘルパー関数
        setCustomPrompt: (prompt: string) =>
            updateSettings({ customPrompt: prompt }),
        setSelectedModel: (model: string) =>
            updateSettings({ selectedModel: model })
    }
}
