import Image from "next/image"
import { BackgroundSlideshow } from "@/components/background-slideshow"
import { Apple } from "lucide-react"

export default function ComingSoonPage() {
  return (
    <main className="flex h-screen flex-col items-center justify-center px-6 py-8 overflow-hidden">
      <BackgroundSlideshow />
      <div className="fixed inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 z-[5]" />

      <div className="flex flex-col items-center justify-center gap-8 relative z-10 p-12">
        <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 animate-fade-in">
          <Image
            src="/images/ba-logo.png"
            alt="Brand Logo"
            fill
            className="object-contain drop-shadow-2xl"
            priority
            sizes="(max-width: 640px) 224px, (max-width: 768px) 256px, 288px"
          />
        </div>
        <div className="flex flex-col items-center gap-6 animate-fade-in-delay max-w-md">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-serif font-light tracking-tight drop-shadow-lg">
            Banquetable
          </h1>
          <p className="text-white/90 text-base sm:text-lg text-center leading-relaxed font-light drop-shadow-md">
           Please contact <a href="mailto:founder@banquetable.com" className="text-white/90 hover:text-white">founder@banquetable.com</a> for more info.
          </p>
          <div className="flex flex-col items-center gap-3 mt-4">
            <p className="text-white/80 text-xs sm:text-sm tracking-[0.3em] uppercase font-light drop-shadow-md mb-2">
              Coming Soon
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button className="flex items-center justify-center gap-2 bg-[#20262B] hover:bg-white text-white hover:text-[#20262B] px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 drop-shadow-lg min-w-[180px]">
                <Apple className="w-5 h-5" />
                <span className="text-sm font-light tracking-wide">Download iOS</span>
              </button>
              <button className="flex items-center justify-center gap-2 bg-[#20262B] hover:bg-white text-white hover:text-[#20262B] px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 drop-shadow-lg min-w-[180px]">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4483-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993 0 .5511-.4483.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3435-4.1021-2.6892-7.5743-6.1185-9.4396" />
                </svg>
                <span className="text-sm font-light tracking-wide">Download Android</span>
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </main>
  )
}
