import { IQuranWord } from "@/utils/api/api.types"

export interface IAyatProps {
    text: string
    type: IQuranWord["char_type_name"]
}