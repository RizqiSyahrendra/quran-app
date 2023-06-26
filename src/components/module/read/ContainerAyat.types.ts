import { useVersesData } from "@/utils/hooks/data/useVersesData";

export interface IContainerAyatProps {
    page: number
    onPageChanged?: (page: number) => void
    onDataChanged?: (data: ReturnType<typeof useVersesData>["verses"]) => void
}