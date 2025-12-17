import { MapPin, Bell } from "lucide-react"
import { NavLink } from "react-router-dom"

const Header = ({ notifications }) => {
    const linkClass = ({ isActive }) =>
        `hover:text-blue-200 transition ${isActive ? "text-blue-200 font-semibold" : ""
        }`

    return (
        <header className="bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-8">
                        <div className="flex items-center space-x-2">
                            <MapPin className="w-8 h-8" />
                            <span className="text-2xl font-bold">Explorer</span>
                        </div>

                        <nav className="hidden md:flex space-x-6">
                            <NavLink to="/" className={linkClass}>
                                Dashboard
                            </NavLink>

                            <NavLink to="/missioni" className={linkClass}>
                                Missioni
                            </NavLink>

                            <NavLink to="/blog" className={linkClass}>
                                Blog
                            </NavLink>

                            <NavLink to="/shop" className={linkClass}>
                                Shop
                            </NavLink>

                            <NavLink to="/profilo" className={linkClass}>
                                Profilo
                            </NavLink>
                        </nav>
                    </div>

                    <div className="relative">
                        <Bell className="w-6 h-6 cursor-pointer hover:text-blue-200 transition" />
                        {notifications > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                {notifications}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
