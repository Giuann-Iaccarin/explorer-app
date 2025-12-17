import { Target } from 'lucide-react';
import MissionCard from './MissionCard.jsx';

const MissionList = ({ missions }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Target className="w-6 h-6 mr-2 text-blue-500" />
                Missioni Disponibili
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {missions.map((mission) => (
                    <MissionCard key={mission.id} mission={mission} />
                ))}
            </div>
        </div>
    );
};

export default MissionList;