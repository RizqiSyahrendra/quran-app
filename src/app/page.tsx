import { Button } from '@/components/material'
import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
	
	return (
		<main className="flex min-h-screen flex-col items-center justify-between py-[50px]">
			<div className="text-center">
				<div className="text-font-primary text-2xl font-bold">Qur'an App</div>
				<div className="text-font-secondary text-lg mt-4">Pelajari dan baca Qur'an setiap hari</div>
				<div className="flex justify-center mt-[40px]">
					<Image
						src="/assets/images/quran-landing-logo.png"
						alt="quran"
						width={314 - 80}
						height={450 - 80}
					/>
				</div>
				<div className="flex justify-center">
					<Link href="#" className="bg-warning" passHref legacyBehavior>
						<Button className="bg-warning text-font-neutral1 mt-8 rounded-full w-full">
							Mulai
						</Button>
					</Link>
				</div>
			</div>
		</main>
	)
}
