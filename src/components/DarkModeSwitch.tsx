"use client"
import { useTheme } from "next-themes"

import { MdLightMode } from "react-icons/md"
import { BsFillMoonFill } from "react-icons/bs"
import { useEffect, useState } from "react"

export function DarkModeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const currentTheme = theme === "system" ? systemTheme : theme
  return (
    <>
      {mounted && currentTheme === "dark" ? (
        <MdLightMode
          className="text-xl cursor-pointer hover:text-violet-400"
          onClick={() => setTheme("light")}
        />
      ) : (
        <BsFillMoonFill
          className="text-xl text-black cursor-pointer hover:text-violet-400"
          onClick={() => setTheme("dark")}
        />
      )}
    </>
  )
}
