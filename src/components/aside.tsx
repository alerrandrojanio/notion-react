import { AiOutlineRight } from "react-icons/ai"
import { BsSearch, BsFillGearFill, BsPlusCircleFill } from "react-icons/bs"
import { LuClock9 } from "react-icons/lu"

export function Aside() {
  return (
    <aside className="bg-light-aside border-r border-r-light-border dark:bg-dark-aside dark:border-r-dark-border">
      <div className="flex gap-2 group p-4">
        <button className="w-3 h-3  rounded-full bg-zinc-300 group-hover:bg-red-400" />
        <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-yellow-400" />
        <button className="w-3 h-3  rounded-full bg-zinc-300 group-hover:bg-green-400" />
      </div>

      <div className="mt-10 p-2 flex flex-col gap-1">
        <button className="menu-button">
          <BsSearch className="w-4 h-4" />
          <span className="text-sm">Search</span>
        </button>

        <button className="menu-button">
          <LuClock9 className="w-4 h-4" />
          <span className="text-sm">Updates</span>
        </button>

        <button className="menu-button">
          <BsFillGearFill className="w-4 h-4" />
          <span className="text-sm">Setting and members</span>
        </button>

        <button className="menu-button">
          <BsPlusCircleFill className="w-4 h-4" />
          <span className="text-sm">New page</span>
        </button>
      </div>

      <details className="mt-5 p-2 [&_svg]:open:rotate-90">
        <summary className="menu-button list-none cursor-pointer">
          <AiOutlineRight className="w-4 h-4 rotate-0 transform text-blue-700 transition-all duration-300 dark:text-dark-textMenu" />
          <span className="text-sm">Documentos I</span>
        </summary>

        <div className="ml-4">
          <div className="menu-button">
            <span className="text-sm">New page</span>
          </div>

          <div className="menu-button">
            <span className="text-sm">New page</span>
          </div>
        </div>
      </details>
    </aside>
  )
}
