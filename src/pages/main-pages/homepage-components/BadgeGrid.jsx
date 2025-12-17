import { Award } from 'lucide-react'
import { useState } from 'react'

const BadgeGrid = ({ badges }) => {
    const [hoveredBadge, setHoveredBadge] = useState(null)

    return (
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Award className="w-6 h-6 mr-2 text-yellow-500" />
                Medaglie Recenti
            </h3>

            <div className="grid grid-cols-4 gap-4">
                {badges.map((badge) => {
                    const Icon = badge.icon

                    return (
                        <div
                            key={badge.id}
                            className="relative flex flex-col items-center justify-center p-4 bg-linear-to-br from-yellow-50 to-orange-50 rounded-lg hover:shadow-md transition cursor-pointer"
                            onMouseEnter={() => setHoveredBadge(badge.id)}
                            onMouseLeave={() => setHoveredBadge(null)}
                        >
                            <Icon className="w-10 h-10 mb-2 text-yellow-600" />

                            {hoveredBadge === badge.id && (
                                <div className="absolute bottom-full mb-2 px-3 py-2 bg-gray-800 text-white text-xs rounded whitespace-nowrap z-10">
                                    {badge.name} – {badge.city}
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default BadgeGrid
