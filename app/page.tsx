import {  helveticaLight , helveticabold } from './fonts'
import Image from 'next/image'

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="p-6 flex justify-between items-center">
      <Image src="/macro.png"  width={100} height={100}  alt="logo" />

        <div className="text-amber-400 flex justify-center items-center gap-2">
        <Image src={'/logo.png'} width={200} height={200} alt='logo' className=' size-8'/>

          バンダルコア</div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center relative overflow-hidden">
        {/* Background Text */}
        <div className={`absolute inset-0 flex items-center justify-center opacity-60 text-[20vw] font-bold text-neutral-800 ${helveticaLight.className}`}>
          バンダル
        </div>

        {/* Main Text */}
        <div className={`relative z-10 text-center  ${helveticaLight.className}`}>
          <div className="flex items-center gap-4 justify-center mb-4">
                        <span className="text-6xl md:text-8xl">*</span>
            <span className={`text-4xl md:text-8xl text-neutral-300   font-extralight tracking-tighter ${helveticaLight.className}`}>
              RECONSTRUCTING
            </span>

          </div>
          <div className={`text-4xl font-bold  md:text-6xl text-neutral-300 tracking-tighter mt-4 ${helveticabold.className}`}>
            COMING SOON
          </div>
          <div className="mt-8 text-sm tracking-wider text-gray-400">
            VANDAL STUDIOS
            <br />
            ESTD. 2024
          </div>
        </div>
      </main>
    </div>
  )
}

