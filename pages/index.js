import Header from '../components/Header'
import Hero from '../components/Hero'
import { Toaster } from 'react-hot-toast'

export default function Home() {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <Header />
      <Hero />
    </div>
  )
}