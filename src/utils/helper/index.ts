
export function convertNumToArabic(num: string): string {
    const englishToArabicMap: { [key: string]: string } = {
        '0': '٠',
        '1': '١',
        '2': '٢',
        '3': '٣',
        '4': '٤',
        '5': '٥',
        '6': '٦',
        '7': '٧',
        '8': '٨',
        '9': '٩',
    };

    let arabicNumber = '';

    for (let i = 0; i < num.length; i++) {
        const char = num[i];
        const arabicChar = englishToArabicMap[char];

        if (arabicChar) {
            arabicNumber += arabicChar;
        } else {
            arabicNumber += char;
        }
    }
    
    return arabicNumber;
}

export function parseChapterNumber(num: any) {
    const result = parseInt(num);
    return !result ? 1 : result;
}

export function parseJuzNumber(num: any) {
    let juzNum = parseInt(num);
    juzNum = !juzNum ? 1 : juzNum;
    return juzNum >= 1 && juzNum <= 30 ? juzNum : 1;
}
