import { DarkModeSwitch } from "@/components/DarkModeSwitch"
import { Editor } from "@/components/Editor"
import Image from "next/image"
import { BsSearch, BsGearFill, BsFillGearFill } from "react-icons/bs"
import { LuClock9 } from "react-icons/lu"

export default function Home() {
  return (
    <div className="min-h-screen p-8 text-zinc-50 bg-gradient-to-t from-pink-300 via-purple-300 to-indigo-400 flex justify-center items-center dark:from-gray-700 dark:via-gray-900 dark:to-black">
      <div className="bg-light-bg w-[1100px] mx-auto rounded-xl min-h-[720px] shadow-sm border border-black/20 overflow-hidden grid grid-cols-[16rem_1fr] dark:bg-dark-bg">
        <aside className="bg-light-aside border-r border-r-light-border dark:bg-dark-aside dark:border-r-dark-border">
          <div className="flex gap-2 group p-4">
            <button className="w-3 h-3  rounded-full bg-zinc-300 group-hover:bg-red-400" />
            <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-yellow-400" />
            <button className="w-3 h-3  rounded-full bg-zinc-300 group-hover:bg-green-400" />
          </div>

          <div className="mt-10 p-2 flex flex-col gap-1">
            <button className="w-full flex items-center gap-2 rounded hover:bg-zinc-200 px-2 py-1 text-light-textMenu dark:text-dark-textMenu dark:hover:bg-zinc-800">
              <BsSearch className="w-4 h-4" />
              <span className="text-sm">Search</span>
            </button>

            <button className="w-full flex items-center gap-2 rounded hover:bg-zinc-200 px-2 py-1 text-light-textMenu dark:text-dark-textMenu dark:hover:bg-zinc-800">
              <LuClock9 className="w-4 h-4" />
              <span className="text-sm">Updates</span>
            </button>

            <button className="w-full flex items-center gap-2 rounded hover:bg-zinc-200 px-2 py-1 text-light-textMenu dark:text-dark-textMenu dark:hover:bg-zinc-800">
              <BsFillGearFill className="w-4 h-4" />
              <span className="text-sm">Setting and members</span>
            </button>
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
