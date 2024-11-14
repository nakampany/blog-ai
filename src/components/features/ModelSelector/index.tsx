import {
    FormControl,
    MenuItem,
    Select,
    type SelectChangeEvent,
    Tooltip
} from '@mui/material'
import React from 'react'

interface Props {
    model: string
    setModel: (value: string) => void
}

const AVAILABLE_MODELS = [
    {
        id: 'gpt-4',
        name: 'GPT-4',
        description:
            '最新のGPT-4モデル。高度な理解力と生成能力を持ち、複雑なタスクに適しています。'
    },
    {
        id: 'gpt-3.5-turbo',
        name: 'GPT-3.5 Turbo',
        description:
            '高速で効率的なモデル。一般的なタスクに適しており、コストパフォーマンスに優れています。'
    }
]

export const Component = (props: Props) => {
    const { model, setModel } = props

    const handleChange = (event: SelectChangeEvent) => {
        setModel(event.target.value)
    }

    return (
        <FormControl fullWidth className="mb-4">
            <Select
                value={model}
                onChange={handleChange}
                displayEmpty
                className="bg-white"
            >
                {AVAILABLE_MODELS.map((modelOption) => (
                    <Tooltip
                        key={modelOption.id}
                        title={modelOption.description}
                        placement="right"
                    >
                        <MenuItem value={modelOption.id}>
                            {modelOption.name}
                        </MenuItem>
                    </Tooltip>
                ))}
            </Select>
        </FormControl>
    )
}
