import { DarkModeSwitch } from "@/components/DarkModeSwitch"
import { Editor } from "@/components/Editor"
import { Aside } from "@/components/aside"

export default function Home() {
  return (
    <div className="min-h-screen p-8 text-zinc-50 bg-gradient-to-t from-pink-300 via-purple-300 to-indigo-400 flex justify-center items-center dark:from-gray-700 dark:via-gray-900 dark:to-black">
      <div className="bg-light-bg w-[1100px] mx-auto rounded-xl min-h-[720px] shadow-sm border border-black/20 overflow-hidden grid grid-cols-[16rem_1fr] dark:bg-dark-bg">
        <Aside />

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
