import React, { useState } from 'react';
import { Bell, MapPin, Trophy, BookOpen, ShoppingBag, User, Home, Target, Award, ChevronRight, Filter, Search, Star, Clock, CheckCircle, XCircle, Map } from 'lucide-react';
import MissionStats from '../components/missions-components/MissionStats.jsx';
import SearchFilterBar from '../components/missions-components/SearchFilterBar.jsx';
import MissionCard from '../components/missions-components/MissionCard.jsx';

// Main Missions Page
const MissionsPage = ({missionsData}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedFilter, setSelectedFilter] = useState('all');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [activeTab, setActiveTab] = useState('available');

    const filterMissions = (missions) => {
        return missions.filter(mission => {
            const matchesSearch = mission.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                mission.city.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesType = selectedFilter === 'all' || mission.type === selectedFilter;
            const matchesCategory = selectedCategory === 'all' || mission.category === selectedCategory;
            return matchesSearch && matchesType && matchesCategory;
        });
    };

    return (
        <div className="min-h-screen bg-linear-to-br from-gray-50 to-blue-50">
            <main className="container mx-auto px-4 py-6 pb-24 md:pb-6">
                <div className="mb-6">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Le tue Missioni</h1>
                    <p className="text-gray-600">Esplora l'Italia, completa missioni e sblocca medaglie!</p>
                </div>

                <MissionStats missionsData={missionsData} />

                <SearchFilterBar
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    selectedFilter={selectedFilter}
                    setSelectedFilter={setSelectedFilter}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />

                {/* Tabs */}
                <div className="bg-white rounded-xl shadow-md mb-6">
                    <div className="flex border-b border-gray-200">
                        <button
                            onClick={() => setActiveTab('available')}
                            className={`flex-1 py-4 px-6 text-center font-semibold transition ${activeTab === 'available'
                                ? 'text-blue-600 border-b-2 border-blue-600'
                                : 'text-gray-600 hover:text-gray-800'
                                }`}
                        >
                            Disponibili ({filterMissions(missionsData.available).length})
                        </button>
                        <button
                            onClick={() => setActiveTab('inProgress')}
                            className={`flex-1 py-4 px-6 text-center font-semibold transition ${activeTab === 'inProgress'
                                ? 'text-blue-600 border-b-2 border-blue-600'
                                : 'text-gray-600 hover:text-gray-800'
                                }`}
                        >
                            In Corso ({filterMissions(missionsData.inProgress).length})
                        </button>
                        <button
                            onClick={() => setActiveTab('completed')}
                            className={`flex-1 py-4 px-6 text-center font-semibold transition ${activeTab === 'completed'
                                ? 'text-blue-600 border-b-2 border-blue-600'
                                : 'text-gray-600 hover:text-gray-800'
                                }`}
                        >
                            Completate ({filterMissions(missionsData.completed).length})
                        </button>
                    </div>
                </div>

                {/* Mission Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {activeTab === 'available' && filterMissions(missionsData.available).map((mission) => (
                        <MissionCard key={mission.id} mission={mission} />
                    ))}
                    {activeTab === 'inProgress' && filterMissions(missionsData.inProgress).map((mission) => (
                        <MissionCard key={mission.id} mission={mission} isInProgress={true} />
                    ))}
                    {activeTab === 'completed' && filterMissions(missionsData.completed).map((mission) => (
                        <MissionCard key={mission.id} mission={mission} isCompleted={true} />
                    ))}
                </div>

                {/* Empty State */}
                {((activeTab === 'available' && filterMissions(missionsData.available).length === 0) ||
                    (activeTab === 'inProgress' && filterMissions(missionsData.inProgress).length === 0) ||
                    (activeTab === 'completed' && filterMissions(missionsData.completed).length === 0)) && (
                        <div className="text-center py-12">
                            <Target className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-600 mb-2">Nessuna missione trovata</h3>
                            <p className="text-gray-500">Prova a modificare i filtri di ricerca</p>
                        </div>
                    )}
            </main>
        </div>
    );
};

export default MissionsPage;