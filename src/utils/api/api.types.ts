export interface IQuranPageResponse {
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

export interface IQuranVerseTranslation {
    id: number
    resource_id: number
    text: string
  }

export interface IQuranVerseWithTranslations extends IQuranVerse {
    translations: IQuranVerseTranslation[]
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
    translation: IQuranWordTranslation
    transliteration: IQuranTransliteration
}

export interface IQuranWordTranslation {
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

export interface IChaptersResponse {
    chapters: IChapter[]
}

export interface IChapter {
    id: number
    revelation_place: "makkah" | "madinah"
    revelation_order: number
    bismillah_pre: boolean
    name_simple: string
    name_complex: string
    name_arabic: string
    verses_count: number
    pages: number[]
    translated_name: ITranslatedName
}

export interface ITranslatedName {
    language_name: string
    name: string
}

export interface IJuzVerse {
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
}

export interface IJuzInfoResponse {
    verses: IJuzVerse[]
}

export interface IRandomVerseResponse {
    verse: IQuranVerseWithTranslations
}
