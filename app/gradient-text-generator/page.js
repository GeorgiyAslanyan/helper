import App from '@/components/GradientText/App'
import Image from 'next/image'

export const metadata = {
    title: 'Gradient Text Generator',
    description: 'Text gradient generator with TailwindCSS',
  }

export default function Page() {
  return (
    <main className="bg-black bg-opacity-50 backdrop-blur-2xl rounded-xl py-7 px-5 flex flex-col w-full">
      <h1 className='text-center text-3xl bg-clip-text text-transparent bg-gradient-to-r from-gray-700 via-white to-gray-700'>
      Gradient Text Generator
      </h1>
      <App />
    </main>
  )
}
