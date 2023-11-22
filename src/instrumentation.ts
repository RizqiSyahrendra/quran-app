
export async function register() {
    if (process.env.NEXT_RUNTIME === 'nodejs') {
        const { CronJob } = await import('cron');
        const fs = await import('fs');
        const { api } = await import('./utils/api/api');

        const job = new CronJob(
            '0 0 0 * * *',
            async function () {
                try {
                    const data = await api.fetchRandomVerse();
                    if (!!data) {
                        const filePath = 'src/app/assets/file/random-verse.json';
                        // Convert the JavaScript object to a JSON-formatted string
                        const jsonString = JSON.stringify(data, null, 2);

                        // Write the JSON string to the file synchronously
                        fs.writeFileSync(filePath, jsonString, 'utf8');
                    }
                } catch (error) {
                    console.error('Error writing to the file:', error);
                }
            },
            null,
            false,
        );

        job.start();
    }
}