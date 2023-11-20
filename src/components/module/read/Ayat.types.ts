import { IQuranWord } from "@/utils/api/api.types"

export interface IAyatData {
    text: string
    type: IQuranWord["char_type_name"] | 'start'
    verse_key: string
}

export interface IAyatProps {
    data: IAyatData
    onPress?: (params: { positionX: number, positionY: number }) => void
}