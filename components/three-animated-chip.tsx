"use client"

import { FunctionalChatbot } from "./functional-chatbot"

export function ThreeAnimatedChip({ visible = true, lang = "es" }: { visible?: boolean; lang?: "es" | "en" }) {
  return (
    <div className="w-full flex items-center justify-center p-2 sm:p-4 pointer-events-auto">
      <div className="relative w-[280px] h-[400px] xs:w-[320px] xs:h-[450px] sm:w-[380px] sm:h-[540px]">
        {/* Sleek, high-performance card without 12 heavy 3D GPU layers */}
        <div className="w-full h-full relative bg-white rounded-[32px] sm:rounded-[40px] shadow-[0_20px_50px_rgba(37,99,235,0.12)] border border-slate-200/80 overflow-hidden">
          <FunctionalChatbot visible={visible} lang={lang} />
        </div>
      </div>
    </div>
  )
}
