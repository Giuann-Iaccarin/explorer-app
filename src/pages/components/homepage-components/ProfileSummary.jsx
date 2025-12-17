import { Award, Trophy } from 'lucide-react';

const ProfileSummary = ({ user }) => {
    const xpPercentage = (user.currentXP / user.maxXP) * 100;

    return (
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <div className="flex items-center space-x-4 mb-4">
                <img src={user.avatar} alt={user.name} className="w-20 h-20 rounded-full border-4 border-blue-500" />
                <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
                    <div className="flex items-center space-x-4 mt-2">
                        <div className="flex items-center space-x-2">
                            <Award className="w-5 h-5 text-yellow-500" />
                            <span className="text-sm font-semibold text-gray-600">Livello {user.level}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Trophy className="w-5 h-5 text-orange-500" />
                            <span className="text-sm font-semibold text-gray-600">{user.points} punti</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-4">
                <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">XP Progress</span>
                    <span className="font-semibold text-gray-700">{user.currentXP} / {user.maxXP}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                        className="bg-linear-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-500"
                        style={{ width: `${xpPercentage}%` }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default ProfileSummary;