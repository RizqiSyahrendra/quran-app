import { IChapter } from "@/utils/api/api.types";
import { useVersesData } from "@/utils/hooks/data/useVersesData";

export interface IContainerAyatProps {
    page: number
    chapter?: IChapter
    onPageChanged?: (page: number) => void
    onDataChanged?: (data: ReturnType<typeof useVersesData>["verses"]) => void
}