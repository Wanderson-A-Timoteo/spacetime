import { cookies } from 'next/headers'
import Copyright from '@/src/components/Copyright'
import EmptyMemories from '@/src/components/EmpytMemories'
import Hero from '@/src/components/Hero'
import SignIn from '@/src/components/SignIn'
import Profile from '@/src/components/Profile'

export default function Home() {
  const isAuthenticated = cookies().has('token')
  return (
    <main className="grid min-h-screen grid-cols-2">
      <div className="border-white/10 relative flex flex-col items-start justify-between overflow-hidden border-r bg-[url(./../src/assets/bg-stars.svg)] bg-cover px-28 py-16">
        <div className="blur-full absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50" />
        <div className="bg-stripes absolute bottom-0 right-2 top-0 w-2" />

        {isAuthenticated ? <Profile /> : <SignIn />}
        <Hero />
        <Copyright />
      </div>

      <div className="flex flex-col bg-[url(./../src/assets/bg-stars.svg)] bg-cover p-16">
        <EmptyMemories />
      </div>
    </main>
  )
}
