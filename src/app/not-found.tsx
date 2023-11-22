import { Button } from '@/components/material'
import { ImageRegistry } from '@/utils/image'
import { routeNames } from '@/utils/routes'
import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {

    return (
        <main className="flex min-h-screen flex-col items-center justify-between py-[50px]">
            <div className="text-center">
                <div className="text-font-primary text-2xl font-bold" data-testid="title">Halaman tidak ditemukan</div>
                <div className="flex justify-center mt-[90px] md:mt-[40px]">
                    <Image
                        src={ImageRegistry.quranLanding}
                        alt="quran"
                        width={314 - 80}
                        height={450 - 80}
                    />
                </div>
                <div className="flex justify-center">
                    <Link href={routeNames("home")} className="bg-warning" legacyBehavior replace prefetch={false}>
                        <Button className="bg-warning text-button-font1 -mt-4 md:mt-8 rounded-full w-1/2 md:w-full">
                            Kembali
                        </Button>
                    </Link>
                </div>
            </div>
        </main>
    )
}