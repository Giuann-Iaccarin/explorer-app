import React, { useState } from 'react';
import { MapPin, Bell, X, CheckCheck, Trash2, Gift, Award, TrendingUp, Package } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';

const Header = ({ user }) => {
    const navigate = useNavigate();
    const [showNotifications, setShowNotifications] = useState(false);
    const [notifications, setNotifications] = useState([
        {
            id: 1,
            type: 'mission',
            icon: Award,
            title: 'Missione Completata!',
            message: 'Hai completato "Esplora Roma Centro"',
            time: '5 min fa',
            read: false,
            color: 'from-blue-500 to-cyan-500'
        },
        {
            id: 2,
            type: 'reward',
            icon: Gift,
            title: 'Nuovo Prodotto Disponibile',
            message: 'Smartphone XYZ ora disponibile nello shop',
            time: '1 ora fa',
            read: false,
            color: 'from-purple-500 to-pink-500'
        },
        {
            id: 3,
            type: 'level',
            icon: TrendingUp,
            title: 'Level Up!',
            message: 'Hai raggiunto il livello 13!',
            time: '2 ore fa',
            read: true,
            color: 'from-green-500 to-emerald-500'
        },
        {
            id: 4,
            type: 'order',
            icon: Package,
            title: 'Prodotto Riscattato',
            message: 'Il tuo ordine è stato confermato',
            time: '1 giorno fa',
            read: true,
            color: 'from-orange-500 to-red-500'
        }
    ]);

    const unreadCount = notifications.filter(n => !n.read).length;

    const markAsRead = (id) => {
        setNotifications(notifications.map(n =>
            n.id === id ? { ...n, read: true } : n
        ));
    };

    const markAllAsRead = () => {
        setNotifications(notifications.map(n => ({ ...n, read: true })));
    };

    const deleteNotification = (id) => {
        setNotifications(notifications.filter(n => n.id !== id));
    };

    const linkClass = ({ isActive }) =>
        `hover:text-blue-200 transition ${isActive ? "text-blue-200 font-semibold" : ""}`;

    return (
        <>
            <header className="bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg relative z-50">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-8">
                            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
                                <MapPin className="w-8 h-8" />
                                <span className="text-2xl font-bold">Explorer</span>
                            </div>
                            <nav className="hidden md:flex space-x-6">
                                <NavLink to="/" className={linkClass}>
                                    Dashboard
                                </NavLink>
                                <NavLink to="/missions" className={linkClass}>
                                    Missioni
                                </NavLink>
                                <NavLink to="/blog" className={linkClass}>
                                    Blog
                                </NavLink>
                                <NavLink to="/shop" className={linkClass}>
                                    Shop
                                </NavLink>
                            </nav>
                        </div>

                        <div className="flex items-center space-x-4">
                            {/* Notifiche */}
                            <div className="relative">
                                <button
                                    onClick={() => setShowNotifications(!showNotifications)}
                                    className="relative p-2 hover:bg-white/10 rounded-full transition-all"
                                >
                                    <Bell className={`w-6 h-6 cursor-pointer transition-all ${showNotifications ? 'text-blue-200 animate-pulse' : 'hover:text-blue-200'
                                        }`} />
                                    {unreadCount > 0 && (
                                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold animate-bounce">
                                            {unreadCount}
                                        </span>
                                    )}
                                </button>
                            </div>

                            {/* Avatar Utente */}
                            <img
                                src={user.avatar}
                                alt={user.name}
                                className="w-10 h-10 rounded-full cursor-pointer hover:ring-2 hover:ring-white transition-all border-2 border-white/50 hover:scale-110"
                                onClick={() => navigate('/profilo')}
                                title={`Profilo di ${user.name}`}
                            />
                        </div>
                    </div>
                </div>
            </header>

            {/* Pannello Notifiche */}
            {showNotifications && (
                <>
                    {/* Overlay */}
                    <div
                        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 animate-in fade-in duration-200"
                        onClick={() => setShowNotifications(false)}
                    ></div>

                    {/* Pannello */}
                    <div className="fixed top-20 right-4 w-96 max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl z-50 animate-in slide-in-from-top-5 duration-300 max-h-[calc(100vh-6rem)] flex flex-col">
                        {/* Header Pannello */}
                        <div className="bg-linear-to-r from-blue-600 to-purple-600 text-white p-5 rounded-t-2xl">
                            <div className="flex items-center justify-between mb-3">
                                <h3 className="text-xl font-bold flex items-center space-x-2">
                                    <Bell className="w-5 h-5" />
                                    <span>Notifiche</span>
                                </h3>
                                <button
                                    onClick={() => setShowNotifications(false)}
                                    className="hover:bg-white/20 p-1 rounded-full transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                            {unreadCount > 0 && (
                                <button
                                    onClick={markAllAsRead}
                                    className="flex items-center space-x-2 text-sm bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full transition-colors"
                                >
                                    <CheckCheck className="w-4 h-4" />
                                    <span>Segna tutte come lette</span>
                                </button>
                            )}
                        </div>

                        {/* Lista Notifiche */}
                        <div className="overflow-y-auto flex-1 p-2">
                            {notifications.length === 0 ? (
                                <div className="text-center py-12 px-4">
                                    <Bell className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                                    <p className="text-gray-500 font-medium">Nessuna notifica</p>
                                    <p className="text-sm text-gray-400 mt-1">Sei tutto aggiornato!</p>
                                </div>
                            ) : (
                                <div className="space-y-2">
                                    {notifications.map((notification) => {
                                        const Icon = notification.icon;
                                        return (
                                            <div
                                                key={notification.id}
                                                className={`group relative p-4 rounded-xl transition-all hover:shadow-md cursor-pointer ${notification.read
                                                    ? 'bg-gray-50 hover:bg-gray-100'
                                                    : 'bg-blue-50 hover:bg-blue-100 border-l-4 border-blue-500'
                                                    }`}
                                                onClick={() => markAsRead(notification.id)}
                                            >
                                                <div className="flex items-start space-x-3">
                                                    {/* Icona */}
                                                    <div className={`shrink-0 w-10 h-10 rounded-full bg-linear-to-br ${notification.color} flex items-center justify-center shadow-lg`}>
                                                        <Icon className="w-5 h-5 text-white" />
                                                    </div>

                                                    {/* Contenuto */}
                                                    <div className="flex-1 min-w-0">
                                                        <div className="flex items-start justify-between">
                                                            <h4 className="font-semibold text-gray-800 text-sm">
                                                                {notification.title}
                                                            </h4>
                                                            {!notification.read && (
                                                                <div className="w-2 h-2 bg-blue-500 rounded-full shrink-0 ml-2 mt-1"></div>
                                                            )}
                                                        </div>
                                                        <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                                                            {notification.message}
                                                        </p>
                                                        <span className="text-xs text-gray-400 mt-2 block">
                                                            {notification.time}
                                                        </span>
                                                    </div>

                                                    {/* Pulsante Elimina */}
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            deleteNotification(notification.id);
                                                        }}
                                                        className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-red-100 rounded-full"
                                                    >
                                                        <Trash2 className="w-4 h-4 text-red-500" />
                                                    </button>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        {notifications.length > 0 && (
                            <div className="border-t border-gray-200 p-3">
                                <button className="w-full text-center text-sm font-semibold text-blue-600 hover:text-blue-700 py-2 hover:bg-blue-50 rounded-lg transition-colors">
                                    Vedi tutte le notifiche
                                </button>
                            </div>
                        )}
                    </div>
                </>
            )}
        </>
    );
};

export default Header;