
export enum IJenisSurat {
    makkiyah = "MAKKIYAH",
    madaniyah = "MADANIYAH"
}

export interface IRowSuratProps {
    num: number
    nama: string
    namaArabic: string
    jenis: IJenisSurat
    jumlahAyat: string
    onClick?: () => void
}