import { Target, CheckCircle, Clock, Star } from 'lucide-react';

const MissionStats = ({ missionsData }) => {
    const totalMissions = missionsData.available.length + missionsData.completed.length + missionsData.inProgress.length;
    const completedCount = missionsData.completed.length;
    const inProgressCount = missionsData.inProgress.length;
    const availableCount = missionsData.available.length;

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-xl shadow-md p-4 border-l-4 border-blue-500">
                <div className="flex items-center justify-between">
                    <div>
                        <div className="text-2xl font-bold text-gray-800">{totalMissions}</div>
                        <div className="text-sm text-gray-600">Totali</div>
                    </div>
                    <Target className="w-10 h-10 text-blue-500 opacity-20" />
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-4 border-l-4 border-green-500">
                <div className="flex items-center justify-between">
                    <div>
                        <div className="text-2xl font-bold text-gray-800">{completedCount}</div>
                        <div className="text-sm text-gray-600">Completate</div>
                    </div>
                    <CheckCircle className="w-10 h-10 text-green-500 opacity-20" />
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-4 border-l-4 border-yellow-500">
                <div className="flex items-center justify-between">
                    <div>
                        <div className="text-2xl font-bold text-gray-800">{inProgressCount}</div>
                        <div className="text-sm text-gray-600">In Corso</div>
                    </div>
                    <Clock className="w-10 h-10 text-yellow-500 opacity-20" />
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-4 border-l-4 border-purple-500">
                <div className="flex items-center justify-between">
                    <div>
                        <div className="text-2xl font-bold text-gray-800">{availableCount}</div>
                        <div className="text-sm text-gray-600">Disponibili</div>
                    </div>
                    <Star className="w-10 h-10 text-purple-500 opacity-20" />
                </div>
            </div>
        </div>
    );
};

export default MissionStats;