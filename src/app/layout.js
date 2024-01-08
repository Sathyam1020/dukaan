import { Inter } from 'next/font/google'
import './globals.css'
import SideNavbar from '@/components/SideNavbar'
import TopNavbar from '@/components/TopNavbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dashboard',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex w-[100%]'>
          <div className='w-[18%]'>
            <SideNavbar/>
          </div>
          <div className='w-[82%]'>
            <TopNavbar />
            <div className='mt-16'>
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
