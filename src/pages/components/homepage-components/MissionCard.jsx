import { MapPin, Award } from "lucide-react";

const MissionCard = ({ mission }) => {
    const isCompleted = mission.status === 'completed';

    return (
        <div className={`bg-white rounded-lg shadow-md p-5 hover:shadow-xl transition ${isCompleted ? 'opacity-75' : ''}`}>
            <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-800 mb-1">{mission.name}</h4>
                    <p className="text-sm text-gray-600 mb-2">{mission.description}</p>
                    <div className="flex items-center space-x-2 mb-2">
                        <MapPin className="w-4 h-4 text-blue-500" />
                        <span className="text-sm font-medium text-blue-600">{mission.city}</span>
                        <span className={`text-xs px-2 py-1 rounded ${mission.type === 'universale' ? 'bg-green-100 text-green-700' : 'bg-purple-100 text-purple-700'}`}>
                            {mission.type}
                        </span>
                    </div>
                </div>
                {isCompleted && (
                    <div className="bg-green-500 text-white rounded-full p-2">
                        <Award className="w-5 h-5" />
                    </div>
                )}
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                <div className="flex space-x-4 text-sm">
                    <span className="text-blue-600 font-semibold">+{mission.xp} XP</span>
                    <span className="text-orange-600 font-semibold">+{mission.points} pts</span>
                </div>
                {!isCompleted && (
                    <button className="bg-linear-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-blue-600 hover:to-purple-600 transition">
                        Completa
                    </button>
                )}
                {isCompleted && (
                    <span className="text-green-600 font-semibold text-sm">Completata ✓</span>
                )}
            </div>
        </div>
    );
};

export default MissionCard;