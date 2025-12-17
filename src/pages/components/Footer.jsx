import {
    BookOpen,
    ShoppingBag,
    User,
    Home,
    Target
} from 'lucide-react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    const navItems = [
        { id: 'home', path: '/', icon: Home, label: 'Home' },
        { id: 'missions', path: '/missioni', icon: Target, label: 'Missioni' },
        { id: 'blog', path: '/blog', icon: BookOpen, label: 'Blog' },
        { id: 'shop', path: '/shop', icon: ShoppingBag, label: 'Shop' },
        { id: 'profile', path: '/profilo', icon: User, label: 'Profilo' }
    ]

    return (
        <footer className="bg-white border-t border-gray-200 fixed bottom-0 left-0 right-0 md:hidden">
            <div className="flex justify-around items-center py-3">
                {navItems.map((item) => {
                    const Icon = item.icon

                    return (
                        <NavLink
                            key={item.id}
                            to={item.path}
                            className={({ isActive }) =>
                                `flex flex-col items-center space-y-1 transition ${isActive ? 'text-blue-600' : 'text-gray-400'
                                }`
                            }
                        >
                            <Icon className="w-6 h-6" />
                            <span className="text-xs">{item.label}</span>
                        </NavLink>
                    )
                })}
            </div>
        </footer>
    )
}

export default Footer