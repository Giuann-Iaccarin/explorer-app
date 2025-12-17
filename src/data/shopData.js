export const productsData = [
    {
        id: 1,
        name: "Guida Digitale: Roma Segreta",
        category: "digitale",
        type: "guida",
        price: 500,
        priceType: "points", // "points" o "money"
        image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400&h=400&fit=crop",
        shortDescription: "Scopri i luoghi nascosti di Roma che solo i locali conoscono",
        fullDescription: "Una guida digitale completa con 50+ luoghi segreti di Roma, incluse catacombe nascoste, chiese sconosciute e ristoranti autentici lontani dalle zone turistiche. Include mappe interattive, audio guide e consigli pratici.",
        isLocked: false,
        requiredLevel: 5,
        requiredBadge: null,
        stock: "illimitato",
        rating: 4.8,
        reviews: 124
    },
    {
        id: 2,
        name: "T-Shirt Explorer Limited Edition",
        category: "fisico",
        type: "merchandise",
        price: 1200,
        priceType: "points",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
        shortDescription: "T-shirt esclusiva in cotone organico con logo Explorer",
        fullDescription: "T-shirt premium in cotone organico 100%, disponibile in taglie S-XXL. Design esclusivo con stampa del logo Explorer e mappa stilizzata dell'Italia sul retro. Edizione limitata disponibile solo per membri attivi della community.",
        isLocked: false,
        requiredLevel: 10,
        requiredBadge: null,
        stock: 45,
        rating: 4.9,
        reviews: 89,
        sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
        id: 3,
        name: "Corso Fotografia di Viaggio",
        category: "digitale",
        type: "corso",
        price: 25,
        priceType: "money",
        image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=400&h=400&fit=crop",
        shortDescription: "Impara a catturare i momenti migliori dei tuoi viaggi",
        fullDescription: "Corso online completo con 20 video lezioni (5 ore totali) su composizione, luce, editing e storytelling fotografico. Include esercizi pratici, feedback personalizzato e accesso a community esclusiva di travel photographer.",
        isLocked: false,
        requiredLevel: 1,
        requiredBadge: null,
        stock: "illimitato",
        rating: 4.7,
        reviews: 256
    },
    {
        id: 4,
        name: "Zaino da Trekking Premium",
        category: "fisico",
        type: "attrezzatura",
        price: 2500,
        priceType: "points",
        image: "https://images.unsplash.com/photo-1622260614153-03223fb72052?w=400&h=400&fit=crop",
        shortDescription: "Zaino tecnico 35L impermeabile con sistema anti-furto",
        fullDescription: "Zaino da trekking professionale con capacità 35 litri, tessuto impermeabile, schienale ventilato, tasche multiple e sistema anti-furto integrato. Include cover antipioggia e compatibilità con sacche idratazione. Perfetto per escursioni di 1-3 giorni.",
        isLocked: true,
        requiredLevel: 15,
        requiredBadge: "Escursionista Esperto",
        stock: 12,
        rating: 5.0,
        reviews: 45
    },
    {
        id: 5,
        name: "Abbonamento Premium 3 Mesi",
        category: "digitale",
        type: "abbonamento",
        price: 15,
        priceType: "money",
        image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=400&fit=crop",
        shortDescription: "Accesso illimitato a tutte le guide e missioni premium",
        fullDescription: "3 mesi di accesso completo a contenuti premium: guide esclusive per 100+ città italiane, missioni speciali con ricompense doppie, badge esclusivi, supporto prioritario e sconti del 20% su tutti i prodotti dello shop.",
        isLocked: false,
        requiredLevel: 1,
        requiredBadge: null,
        stock: "illimitato",
        rating: 4.9,
        reviews: 432,
        badge: "Premium"
    },
    {
        id: 6,
        name: "Power Bank Solare 20000mAh",
        category: "fisico",
        type: "accessorio",
        price: 1800,
        priceType: "points",
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop",
        shortDescription: "Caricabatterie portatile con pannelli solari integrati",
        fullDescription: "Power bank ad alta capacità (20000mAh) con pannelli solari integrati, 2 porte USB-A e 1 porta USB-C con ricarica rapida. Resistente all'acqua (IP65), perfetto per trekking e viaggi outdoor. Include torcia LED integrata.",
        isLocked: false,
        requiredLevel: 8,
        requiredBadge: null,
        stock: 28,
        rating: 4.6,
        reviews: 167
    },
    {
        id: 7,
        name: "Mappa Interattiva Italia",
        category: "digitale",
        type: "app",
        price: 800,
        priceType: "points",
        image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=400&h=400&fit=crop",
        shortDescription: "Mappa offline con tutti i punti d'interesse e missioni",
        fullDescription: "Applicazione con mappe offline dettagliate di tutta Italia, inclusi sentieri, punti d'interesse, ristoranti tipici e tutte le missioni disponibili. Funziona senza connessione internet, GPS integrato e modalità realtà aumentata per trovare i luoghi.",
        isLocked: false,
        requiredLevel: 3,
        requiredBadge: null,
        stock: "illimitato",
        rating: 4.8,
        reviews: 389
    },
    {
        id: 8,
        name: "Borraccia Termica Explorer",
        category: "fisico",
        type: "accessorio",
        price: 600,
        priceType: "points",
        image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
        shortDescription: "Borraccia in acciaio inox 750ml con isolamento termico",
        fullDescription: "Borraccia termica premium in acciaio inox 18/8, capacità 750ml. Mantiene le bevande calde per 12 ore e fredde per 24 ore. Design ergonomico, bocca larga per facile pulizia, compatibile con filtri purificatori d'acqua. Logo Explorer inciso.",
        isLocked: false,
        requiredLevel: 5,
        requiredBadge: null,
        stock: 156,
        rating: 4.7,
        reviews: 201
    },
    {
        id: 9,
        name: "Weekend Experience: Toscana",
        category: "fisico",
        type: "esperienza",
        price: 150,
        priceType: "money",
        image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=400&h=400&fit=crop",
        shortDescription: "Weekend esclusivo con tour guidato in Toscana",
        fullDescription: "Pacchetto weekend completo (2 giorni/1 notte) in Toscana: tour guidato di Siena e San Gimignano, degustazione vini in cantina storica, cena tipica toscana, pernottamento in agriturismo 4 stelle. Max 10 partecipanti per gruppo. Date disponibili tutto l'anno.",
        isLocked: true,
        requiredLevel: 20,
        requiredBadge: "Maestro Esploratore",
        stock: 8,
        rating: 5.0,
        reviews: 23
    },
    {
        id: 10,
        name: "Kit Primo Soccorso da Viaggio",
        category: "fisico",
        type: "accessorio",
        price: 450,
        priceType: "points",
        image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=400&h=400&fit=crop",
        shortDescription: "Kit completo compatto per emergenze in viaggio",
        fullDescription: "Kit di primo soccorso completo in custodia impermeabile compatta: cerotti, garze sterili, disinfettante, antidolorifici, farmaci base, forbici, pinzette e guida rapida primo soccorso. Certificato per viaggi internazionali. Dimensioni: 18x12x5cm.",
        isLocked: false,
        requiredLevel: 1,
        requiredBadge: null,
        stock: 89,
        rating: 4.5,
        reviews: 134
    },
    {
        id: 11,
        name: "Masterclass Cucina Italiana",
        category: "digitale",
        type: "corso",
        price: 35,
        priceType: "money",
        image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&h=400&fit=crop",
        shortDescription: "Impara a cucinare i piatti regionali italiani autentici",
        fullDescription: "Corso online di 8 settimane con chef stellato: impara a preparare 40+ ricette regionali autentiche, dalle basi (pasta fresca, pizza) ai piatti avanzati. Include video HD, ricettari scaricabili, lista ingredienti e certificato finale.",
        isLocked: false,
        requiredLevel: 1,
        requiredBadge: null,
        stock: "illimitato",
        rating: 4.9,
        reviews: 178
    },
    {
        id: 12,
        name: "Action Cam 4K Waterproof",
        category: "fisico",
        type: "elettronica",
        price: 3500,
        priceType: "points",
        image: "https://images.unsplash.com/photo-1617886903355-9354bb57751f?w=400&h=400&fit=crop",
        shortDescription: "Camera d'azione 4K per immortalare le tue avventure",
        fullDescription: "Action camera professionale: video 4K 60fps, foto 20MP, stabilizzazione avanzata, impermeabile fino a 40m, schermo touch LCD 2', WiFi e Bluetooth integrati. Include 2 batterie, custodia impermeabile, montature multiple e SD card 64GB.",
        isLocked: true,
        requiredLevel: 18,
        requiredBadge: "Content Creator",
        stock: 15,
        rating: 4.8,
        reviews: 92
    }
];

// User points simulation
export const userPoints = {
    available: 2340,
    total: 8750,
    spent: 6410
};

// Funzioni utility
export const getProductsByCategory = (category) => {
    if (category === 'all') return productsData;
    return productsData.filter(p => p.category === category);
};

export const getProductsByType = (type) => {
    if (type === 'all') return productsData;
    return productsData.filter(p => p.type === type);
};

export const getAvailableProducts = (userLevel) => {
    return productsData.filter(p => !p.isLocked || p.requiredLevel <= userLevel);
};

export const filterProducts = (products, filters) => {
    let filtered = [...products];

    if (filters.category && filters.category !== 'all') {
        filtered = filtered.filter(p => p.category === filters.category);
    }

    if (filters.priceType && filters.priceType !== 'all') {
        filtered = filtered.filter(p => p.priceType === filters.priceType);
    }

    if (filters.availability === 'available') {
        filtered = filtered.filter(p => !p.isLocked);
    } else if (filters.availability === 'locked') {
        filtered = filtered.filter(p => p.isLocked);
    }

    if (filters.search) {
        const search = filters.search.toLowerCase();
        filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(search) ||
            p.shortDescription.toLowerCase().includes(search)
        );
    }

    if (filters.sortBy === 'price-asc') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (filters.sortBy === 'price-desc') {
        filtered.sort((a, b) => b.price - a.price);
    } else if (filters.sortBy === 'rating') {
        filtered.sort((a, b) => b.rating - a.rating);
    }

    return filtered;
};