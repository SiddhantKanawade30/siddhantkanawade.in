"use client"

import { useEffect, useState } from "react"

type WeatherResponse = {
  current?: {
    temperature_2m?: number
  }
}

export function MumbaiTemperature() {
  const [temperature, setTemperature] = useState<number | null>(null)
  const [unavailable, setUnavailable] = useState(false)

  useEffect(() => {
    const controller = new AbortController()

    async function updateTemperature() {
      try {
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=19.076&longitude=72.8777&current=temperature_2m&timezone=Asia%2FKolkata",
          { signal: controller.signal },
        )

        if (!response.ok) {
          throw new Error(`Weather request failed with status ${response.status}`)
        }

        const data = (await response.json()) as WeatherResponse
        const currentTemperature = data.current?.temperature_2m

        if (typeof currentTemperature !== "number" || !Number.isFinite(currentTemperature)) {
          throw new Error("Weather response did not contain a valid temperature")
        }

        setTemperature(currentTemperature)
        setUnavailable(false)
      } catch (error) {
        if (controller.signal.aborted) {
          return
        }

        console.error("Unable to load Mumbai weather:", error)
        setUnavailable(true)
      }
    }

    void updateTemperature()
    const intervalId = window.setInterval(() => void updateTemperature(), 30 * 60 * 1000)

    return () => {
      controller.abort()
      window.clearInterval(intervalId)
    }
  }, [])

  return (
    <p
      aria-live="polite"
      className="whitespace-nowrap py-1 text-[0.65rem] text-slate-500 sm:text-sm"
    >
      {temperature !== null ? (
        `Mumbai ${Math.round(temperature)}°C`
      ) : unavailable ? (
        "Mumbai --°C"
      ) : (
        "Mumbai --°C"
      )}
    </p>
  )
}
