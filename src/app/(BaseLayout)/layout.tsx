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
      <div className="md:pl-[200px] lg:pl-[250px]">
        <Header />
        <div className="p-5">
          {children}
        </div>
        <BottomBar />
      </div>
    </>
  )
}