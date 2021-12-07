import AppHeader from './AppHeader'
import AppFooter from './AppFooter'

export default function DefaultLayout ({ children }: { children: any }) {
  return (
    <div className="flex flex-col h-screen">
      <AppHeader/>
      <main className="flex flex-col container mx-auto flex-1">
        {children}
      </main>
      <AppFooter/>
    </div>
  )
}
