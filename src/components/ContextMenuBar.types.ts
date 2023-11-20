import { CSSProperties } from "react"

export interface IContextMenuItem {
    label: string
    value: string
}

export interface IContextMenuBarProps {
    items: IContextMenuItem[]
    onPress?: (item: IContextMenuItem) => void
    isVisible?: boolean
    style?: CSSProperties
}