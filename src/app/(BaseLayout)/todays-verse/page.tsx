import fs from "fs";
import { IChaptersResponse, IRandomVerseResponse } from "@/utils/api/api.types";
import { api } from "@/utils/api/api";
import Ayat from "@/components/module/read/Ayat";

export default async function TodaysVerse() {

    const chapters = await getChapters();
    const randomVerse = await getRandomVerse();
    const chapterNumber = parseInt(randomVerse?.verse_key.split(":")[0] ?? '0');
    const chapter = chapters?.[chapterNumber - 1] ?? null;
    let translation = randomVerse?.translations?.[0]?.text ?? '';
    translation = translation.replace(/<sup[^>]*>[\s\S]*?<\/sup>/g, '');

    return (
        <div className="text-font-primary">
            <div className="mt-20 text-xl font-bold text-center">
                {chapter?.name_simple} : {randomVerse?.verse_number}
            </div>
            <div className="mt-10 flex flex-1 flex-wrap" dir="rtl">
                {!!randomVerse && randomVerse.words.map((word, wordIdx) => {
                    return (
                        <Ayat
                            key={wordIdx}
                            data={{
                                text: word.text_indopak,
                                type: "word",
                                verse_key: randomVerse.verse_key,
                            }}
                        />
                    )
                })}
            </div>
            <div className="mt-10 text-center bg-secondary rounded-lg p-4">
                {translation}
            </div>
        </div>
    );
}

async function getChapters() {
    const filePath = 'src/app/assets/file/chapters.json';
    let chapters: IChaptersResponse['chapters'] | null = null;

    // Read the file synchronously
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        const jsonObject = JSON.parse(data) as IChaptersResponse;
        chapters = jsonObject.chapters;
    } catch (error) {
        console.error('Error reading or parsing the file:', error);
    }

    //get from api if not available
    if (!chapters?.length) {
        try {
            const data = await api.fetchChapters();
            if (!!data) {
                // Convert the JavaScript object to a JSON-formatted string
                const jsonString = JSON.stringify(data, null, 2);

                // Write the JSON string to the file synchronously
                fs.writeFileSync(filePath, jsonString, 'utf8');

                chapters = data.chapters;
            }
        } catch (error) {
            console.error('Error writing to the file:', error);
        }
    }

    return chapters;
}

async function getRandomVerse() {
    const filePath = 'src/app/assets/file/random-verse.json';
    let quranVerse: IRandomVerseResponse['verse'] | null = null;

    // Read the file synchronously
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        const jsonObject = JSON.parse(data) as IRandomVerseResponse;
        quranVerse = jsonObject.verse;
    } catch (error) {
        console.error('Error reading or parsing the file:', error);
    }

    //get from api if not available
    if (!quranVerse) {
        try {
            const data = await api.fetchRandomVerse();
            if (!!data) {
                // Convert the JavaScript object to a JSON-formatted string
                const jsonString = JSON.stringify(data, null, 2);

                // Write the JSON string to the file synchronously
                fs.writeFileSync(filePath, jsonString, 'utf8');

                quranVerse = data.verse;
            }
        } catch (error) {
            console.error('Error writing to the file:', error);
        }
    }

    return quranVerse;
}