import '@/app/globals.css'
import Sidebar from '@/components/Sidebar'
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
        <div className="px-4 md:px-10 lg:px-20 pt-2 pb-32">
          {children}
        </div>
        <BottomBar />
      </div>
    </>
  )
}
