import { Bell, Search, User } from "lucide-react"

export const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-[#949fa8]" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-[#16161b] text-white pl-10 pr-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0092ff]"
          />
        </div>
        <Bell className="h-5 w-5 text-[#949fa8] hover:text-white cursor-pointer" />
        <div className="w-8 h-8 bg-[#0092ff] rounded-full flex items-center justify-center">
          <User className="h-4 w-4 text-white" />
        </div>
      </div>
    </header>
  )
}
