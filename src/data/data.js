import {
    Landmark,
    Camera,
    Utensils,
    Theater
} from 'lucide-react'

export const demoData = {
    user: {
        name: "Marco Rossi",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marco",
        level: 12,
        currentXP: 750,
        maxXP: 1000,
        points: 3420,
        notifications: 3
    },

    stats: {
        totalBadges: 24,
        earnedBadges: 18,
        citiesVisited: 12,
        missionsCompleted: 45
    },

    recentBadges: [
        {
            id: 1,
            name: "Esploratore di Roma",
            city: "Roma",
            icon: Landmark
        },
        {
            id: 2,
            name: "Fotografo Urbano",
            city: "Milano",
            icon: Camera
        },
        {
            id: 3,
            name: "Gourmet",
            city: "Bologna",
            icon: Utensils
        },
        {
            id: 4,
            name: "Avventuriero",
            city: "Venezia",
            icon: Theater
        }
    ],

    missions: [
        {
            id: 1,
            name: "Visita il Colosseo",
            city: "Roma",
            type: "universale",
            xp: 150,
            points: 300,
            status: "available",
            description: "Scatta una foto al tramonto"
        },
        {
            id: 2,
            name: "Assaggia la carbonara autentica",
            city: "Roma",
            type: "pilota",
            xp: 100,
            points: 200,
            status: "available",
            description: "In un ristorante tradizionale"
        },
        {
            id: 3,
            name: "Tour dei canali",
            city: "Venezia",
            type: "universale",
            xp: 200,
            points: 400,
            status: "completed",
            description: "Visita almeno 3 ponti storici"
        },
        {
            id: 4,
            name: "Duomo di Milano",
            city: "Milano",
            type: "universale",
            xp: 180,
            points: 350,
            status: "available",
            description: "Sali sulla terrazza panoramica"
        }
    ],

    blogPosts: [
        {
            id: 1,
            title: "Il mio weekend a Firenze",
            image: "https://images.unsplash.com/photo-1541950516-3c44833db8c8?w=400&h=300&fit=crop",
            date: "2 giorni fa"
        },
        {
            id: 2,
            title: "Street food a Napoli: una guida",
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop",
            date: "1 settimana fa"
        }
    ]
}
