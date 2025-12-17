import { Edit2, Package } from "lucide-react";
import ProductCard from "../components/profilo-components/ProductCard";
import ProgressBar from "../components/profilo-components/ProgressBar";
import UserInfoCard from "../components/profilo-components/UserInfoCard";

const ProfiloPage = ({ user, recentBadges, redeemedProducts }) => {
    return (
        <div className="min-h-screen bg-linear-to-br from-blue-50 via-purple-50 to-pink-50">
            {/* Hero Section */}
            <div className="bg-linear-to-r from-blue-600 to-purple-600 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                        <img
                            src={user.avatar}
                            alt={user.name}
                            className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
                        />
                        <div className="text-center sm:text-left flex-1">
                            <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
                            <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                                <span className="bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm">
                                    Livello {user.level}
                                </span>
                                <span className="bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm">
                                    {user.points} Punti
                                </span>
                                <span className="bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm">
                                    {user.currentXP}/{user.maxXP} XP
                                </span>
                            </div>
                        </div>
                        <button className="flex items-center space-x-2 px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold shadow-lg">
                            <Edit2 className="w-4 h-4" />
                            <span>Modifica Profilo</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* User Info & Progress */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                    <UserInfoCard user={user} recentBadges={recentBadges} />
                    <ProgressBar current={user.currentXP} max={user.maxXP} level={user.level} />
                </div>

                {/* Prodotti Riscattati */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800">Prodotti Riscattati</h2>
                            <p className="text-sm text-gray-600 mt-1">I tuoi premi ottenuti con i punti</p>
                        </div>
                        <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">
                            {redeemedProducts.length} prodotti
                        </div>
                    </div>

                    {redeemedProducts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {redeemedProducts.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                            <p className="text-gray-500">Nessun prodotto riscattato ancora</p>
                            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                Esplora Catalogo
                            </button>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default ProfiloPage;