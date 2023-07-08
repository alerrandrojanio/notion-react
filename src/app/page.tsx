import { DarkModeSwitch } from "@/components/DarkModeSwitch"
import { Editor } from "@/components/Editor"
import Image from "next/image"

export default function Home() {
  const quote = "&apos;"

  return (
    <div className="min-h-screen p-8 text-zinc-50 bg-gradient-to-t from-pink-300 via-purple-300 to-indigo-400 flex justify-center items-center dark:from-gray-700 dark:via-gray-900 dark:to-black">
      <div className="bg-light-bg w-[1100px] mx-auto rounded-xl min-h-[720px] shadow-sm border border-black/20 overflow-hidden grid grid-cols-[16rem_1fr] dark:bg-dark-bg">
        <aside className="bg-light-aside border-r border-r-light-border p-4 dark:bg-dark-aside dark:border-r-dark-border">
          <div className="flex gap-2 group">
            <button className="w-3 h-3  rounded-full bg-zinc-300 group-hover:bg-red-400" />
            <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-yellow-400" />
            <button className="w-3 h-3  rounded-full bg-zinc-300 group-hover:bg-green-400" />
          </div>
        </aside>

        <main className="p-4 pb-8">
          <div className="flex justify-end mr-2">
            <DarkModeSwitch />
          </div>
          <Editor />
        </main>
      </div>
    </div>
  )
}
