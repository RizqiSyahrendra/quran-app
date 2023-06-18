export interface IQuranPage {
    verses: Array<IQuranVerse>
    pagination: IQuranPagination
}

export interface IQuranVerse {
    id: number
    verse_number: number
    verse_key: string
    hizb_number: number
    rub_el_hizb_number: number
    ruku_number: number
    manzil_number: number
    sajdah_number: any
    page_number: number
    juz_number: number
    words: Array<IQuranWord>
}

export interface IQuranWord {
    id: number
    position: number
    audio_url?: string
    char_type_name: "word" | "end"
    text_indopak: string
    page_number: number
    line_number: number
    text: string
    translation: IQuranTranslation
    transliteration: IQuranTransliteration
}

export interface IQuranTranslation {
    text: string
    language_name: string
}

export interface IQuranTransliteration {
    text?: string
    language_name: string
}

export interface IQuranPagination {
    per_page: number
    current_page: number
    next_page: any
    total_pages: number
    total_records: number
}
