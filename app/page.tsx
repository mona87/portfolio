'use client'

import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-bold">Main Page</h1>
      <a href="/configurator" className="text-2xl font-bold">Go to Configurator</a>
    </main>
  )
}
