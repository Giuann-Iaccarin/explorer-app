import { Award, MapPin } from 'lucide-react'
import { useState } from 'react'

const BadgeGrid = ({ badges }) => {
    const [hoveredBadge, setHoveredBadge] = useState(null)

    return (
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <Award className="w-6 h-6 mr-2 text-yellow-500" />
                Medaglie Recenti
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {badges.map((badge) => {
                    const Icon = badge.icon
                    const isHovered = hoveredBadge === badge.id

                    return (
                        <div
                            key={badge.id}
                            className={`relative flex flex-col items-center justify-center p-2 cursor-pointer transition-transform
                              ${isHovered ? 'scale-105' : ''}`}
                            onMouseEnter={() => setHoveredBadge(badge.id)}
                            onMouseLeave={() => setHoveredBadge(null)}
                        >
                            {/* Badge */}
                            <div className="relative w-20 h-20 flex items-center justify-center rounded-full bg-linear-to-tr from-yellow-400 to-orange-400 shadow-inner border-4 border-yellow-600">
                                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white shadow-md">
                                    <Icon className="w-8 h-8 text-yellow-600" />
                                </div>
                                <div className="absolute inset-0 rounded-full ring-2 ring-yellow-300 opacity-40"></div>
                            </div>

                            {/* City label sotto badge */}
                            {badge.city && (
                                <div className="mt-2 px-3 py-1 rounded-full
                                        bg-linear-to-r from-yellow-400 to-orange-500 text-white text-[11px] font-semibold
                                        flex items-center gap-1 shadow-md border border-transparent">
                                    <MapPin className="w-3 h-3 text-white" />
                                    {badge.city}
                                </div>
                            )}

                            {/* Badge name */}
                            <span className="mt-2 text-sm font-semibold text-gray-800 text-center leading-tight">
                                {badge.name}
                            </span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default BadgeGrid
