"use client"

import { useEffect, useRef } from "react"

declare global {
  interface Window {
    instgrm?: {
      Embeds: { process: () => void }
    }
  }
}

function loadInstagramScript() {
  if (window.instgrm) {
    window.instgrm.Embeds.process()
    return
  }
  const existing = document.getElementById("instagram-embed-script")
  if (existing) return
  const script = document.createElement("script")
  script.id = "instagram-embed-script"
  script.src = "https://www.instagram.com/embed.js"
  script.async = true
  document.body.appendChild(script)
}

export function InstagramEmbed({ url }: { url: string }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    loadInstagramScript()
    const interval = setInterval(() => {
      if (window.instgrm) {
        window.instgrm.Embeds.process()
        clearInterval(interval)
      }
    }, 300)
    return () => clearInterval(interval)
  }, [])

  return (
    <div ref={containerRef} className="w-full max-w-[326px]">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{ margin: 0, width: "100%" }}
      />
    </div>
  )
}
