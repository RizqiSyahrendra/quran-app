import '@/app/globals.css'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import BottomBar from '@/components/BottomBar'

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Sidebar />
      <div className="lg:pl-[250px]">
        <Header />
        <div className="px-6 md:px-14 lg:px-20 pt-4 md:py-10">
          {children}
        </div>
        <BottomBar />
      </div>
    </>
  )
}
