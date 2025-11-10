// Lagos Tourist Centers Data
const lagosTouristCenters = [
  {
    id: 1,
    name: "Lekki Conservation Centre",
    location: "KM 19, Lekki-Epe Expressway, Lekki, Lagos",
    coordinates: { lat: 6.4474, lng: 3.5224 },
    entryFee: {
      adults: "₦5,000",
      children: "₦3,000 (1.2-1.4m tall)",
      childrenFree: "Free (under 1.2m)"
    },
    openingHours: "8:30 AM - 5:00 PM (Daily)",
    description: "A 78-hectare natural reserve featuring Africa's longest canopy walkway at 401 meters. Home to diverse wildlife including monkeys, crocodiles, and rare birds.",
    category: "Nature & Wildlife",
    activities: ["Canopy walkway", "Wildlife viewing", "Picnicking", "Board games", "Photography"],
    images: {
      image1: "https://images.unsplash.com/photo-1516214104703-d870798883c5?w=800&h=600&fit=crop",
      image2: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&h=600&fit=crop",
      image3: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop"
    },
    rating: 4.5,
    bestTimeToVisit: "Dry season (November - March)"
  },
  {
    id: 2,
    name: "Tarkwa Bay Beach",
    location: "Near Lagos Harbour (Accessible only by boat)",
    coordinates: { lat: 6.4145, lng: 3.3847 },
    entryFee: {
      adults: "₦1,000 - ₦2,000",
      boatRide: "₦300 - ₦2,500 (depending on group size)",
      chairRental: "₦500/day"
    },
    openingHours: "24 hours (boat services daylight only)",
    description: "A serene island beach with calm waters, perfect for swimming and water sports. Accessible via 15-20 minute boat ride from Victoria Island.",
    category: "Beach",
    activities: ["Swimming", "Surfing", "Jet skiing", "Beach volleyball", "Horseback riding"],
    images: {
      image1: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
      image2: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
      image3: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=600&fit=crop"
    },
    rating: 4.7,
    boatDepartures: ["Fiki Marina (Falomo Bridge)", "Tarzan Jetty (VI)", "CMS Ferry Terminal"],
    accommodation: "Beach houses available (₦50,000 - ₦200,000/night)",
    bestTimeToVisit: "Dry season (November - March)"
  },
  {
    id: 3,
    name: "Lekki Leisure Lake",
    location: "Block 1, Plot 3, Lekki, Lagos (opposite Vantage Beach Hub)",
    coordinates: { lat: 6.4389, lng: 3.5403 },
    entryFee: {
      adults: "₦1,000",
      children: "₦500 (under 10 years)",
      jetSki: "₦5,000 (15 minutes)"
    },
    openingHours: "9:00 AM - 10:00 PM (Daily)",
    description: "A private beach resort with artificial lake offering various water activities and seaside dining experiences.",
    category: "Beach & Recreation",
    activities: ["Jet skiing", "Banana floats", "Quad biking", "Zip-lining", "Pontoon boat"],
    images: {
      image1: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
      image2: "https://images.unsplash.com/photo-1621277224630-81d9af65e40f?w=800&h=600&fit=crop",
      image3: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop"
    },
    rating: 4.0,
    restrictions: ["No pets allowed", "No outside food/drinks", "No professional cameras"],
    bestTimeToVisit: "Year-round"
  },
  {
    id: 4,
    name: "Alpha Beach",
    location: "New Road, Alpha Beach, Lekki-Ajah, Lagos",
    coordinates: { lat: 6.4521, lng: 3.6018 },
    entryFee: {
      adults: "₦1,000",
      children: "₦1,000",
      tentRental: "Available on-site"
    },
    openingHours: "24 hours (Daily)",
    description: "A serene public beach known for its rocky shores, golden sands, and peaceful atmosphere. Perfect for photography and tide pool exploration.",
    category: "Beach",
    activities: ["Swimming", "Photography", "Picnicking", "Horse riding", "Quad biking"],
    images: {
      image1: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800&h=600&fit=crop",
      image2: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=800&h=600&fit=crop",
      image3: "https://images.unsplash.com/photo-1484821582734-6c6c9f99a672?w=800&h=600&fit=crop"
    },
    rating: 4.3,
    highlights: ["Stunning rocky views", "Clean sand", "Less crowded", "Food vendors available"],
    bestTimeToVisit: "Year-round, weekdays for quieter experience"
  },
  {
    id: 5,
    name: "Muri Okunola Park",
    location: "Adeyemo Alakija Street, Victoria Island, Lagos",
    coordinates: { lat: 6.4299, lng: 3.4220 },
    entryFee: {
      general: "₦1,000",
      eventBooking: "Contact for rates"
    },
    openingHours: "8:00 AM - 8:00 PM (Daily)",
    description: "A well-maintained urban park perfect for jogging, picnicking, and outdoor events. Features manicured lawns, walking paths, and a playground.",
    category: "Park & Recreation",
    activities: ["Jogging", "Picnicking", "Outdoor concerts", "Art exhibitions", "Trade fairs"],
    images: {
      image1: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=800&h=600&fit=crop",
      image2: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop",
      image3: "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=800&h=600&fit=crop"
    },
    rating: 4.2,
    capacity: "Up to 3,000 people",
    highlights: ["Spacious venue", "Wide parking", "Mobile toilets", "Event-friendly"],
    bestTimeToVisit: "Weekdays for quieter visits"
  },
  {
    id: 6,
    name: "Lufasi Nature Park",
    location: "Majek 1st Gate, KM 41 Lekki-Epe Expressway, Lagos",
    coordinates: { lat: 6.4726, lng: 3.7206 },
    entryFee: {
      adults: "₦1,500",
      photoshoot: "Contact on-site"
    },
    openingHours: "Daily until 5:00 PM",
    description: "A 20-hectare farm-forest nature park featuring diverse wildlife, birds, and serene walking trails. Perfect for nature therapy and wildlife photography.",
    category: "Nature & Wildlife",
    activities: ["Bird watching", "Wildlife viewing", "Nature walks", "Table tennis", "Taekwondo classes"],
    images: {
      image1: "https://images.unsplash.com/photo-1511497584788-876760111969?w=800&h=600&fit=crop",
      image2: "https://images.unsplash.com/photo-1535083783855-76ae62b2914e?w=800&h=600&fit=crop",
      image3: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&h=600&fit=crop"
    },
    rating: 4.6,
    wildlife: ["Donkeys", "Horses", "Tortoises", "Monkeys", "Pangolins", "Various bird species"],
    facilities: ["Playground", "Sports courts", "Picnic areas", "Lake Moses"],
    restrictions: ["Bring own food allowed", "Camera-friendly"],
    bestTimeToVisit: "Early morning or late afternoon"
  },
  {
    id: 7,
    name: "Elegushi Beach",
    location: "Lekki-Epe Expressway, Ikate Elegushi, Lekki, Lagos",
    coordinates: { lat: 6.4513, lng: 3.5075 },
    entryFee: {
      adults: "₦2,000 - ₦3,000",
      children: "₦1,000",
      parking: "₦200",
      beachChair: "₦3,000",
      soloTent: "₦20,000",
      tyreTent: "₦10,000"
    },
    openingHours: "24 hours (Daily)",
    description: "One of Lagos' most vibrant beaches with lively atmosphere, beachfront restaurants, bars, and exciting nightlife. Owned by the Elegushi Royal Family.",
    category: "Beach",
    activities: ["Horseback riding", "Beach volleyball", "Jet skiing", "Live music", "Swimming"],
    images: {
      image1: "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=800&h=600&fit=crop",
      image2: "https://images.unsplash.com/photo-1520454974749-611b7248ffdb?w=800&h=600&fit=crop",
      image3: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=800&h=600&fit=crop"
    },
    rating: 4.4,
    weeklyVisitors: "40,000+",
    highlights: ["Best day: Sunday", "Vibrant nightlife", "Multiple beach clubs", "Food vendors"],
    bestTimeToVisit: "Weekends for lively atmosphere, weekdays for quieter experience"
  },
  {
    id: 8,
    name: "Oniru Private Beach",
    location: "Ligali Ayorinde Street, Victoria Island, Lagos",
    coordinates: { lat: 6.4331, lng: 3.4182 },
    entryFee: {
      adults: "₦1,000",
      parking: "₦200",
      horsePhoto: "₦500",
      horseRide: "₦1,000",
      tableSetup: "₦7,000 - ₦40,000"
    },
    openingHours: "24 hours (Daily, curfew at midnight)",
    description: "A tranquil private beach resort with pristine sandy shores, clear waters, and vibrant nightlife. Perfect for families and party-goers.",
    category: "Beach",
    activities: ["Horseback riding", "Jet skiing", "Beach volleyball", "Swimming", "Picnicking"],
    images: {
      image1: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&h=600&fit=crop",
      image2: "https://images.unsplash.com/photo-1476673160081-cf065607f449?w=800&h=600&fit=crop",
      image3: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&h=600&fit=crop"
    },
    rating: 4.1,
    restaurants: ["Moist Restaurant & Beach Club"],
    highlights: ["Close to Victoria Island", "Musical shows", "Beach clubs", "Clean white sand"],
    bestTimeToVisit: "Evenings for quieter experience, weekends for lively atmosphere"
  },
  {
    id: 9,
    name: "Nike Art Gallery",
    location: "8/9 Elegushi Royal Estate, Lekki, Lagos",
    coordinates: { lat: 6.4503, lng: 3.5145 },
    entryFee: {
      general: "₦500 - ₦1,000",
      guidedTour: "Available"
    },
    openingHours: "9:00 AM - 6:00 PM (Daily)",
    description: "A treasure trove of Nigerian art featuring paintings, sculptures, traditional fabrics, and artifacts across five floors.",
    category: "Art & Culture",
    activities: ["Art viewing", "Shopping for crafts", "Cultural tours", "Photography"],
    images: {
      image1: "https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?w=800&h=600&fit=crop",
      image2: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800&h=600&fit=crop",
      image3: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=800&h=600&fit=crop"
    },
    rating: 4.7,
    highlights: ["5-story building", "Traditional and contemporary art", "Craft shopping"],
    bestTimeToVisit: "Year-round"
  },
  {
    id: 10,
    name: "Freedom Park Lagos",
    location: "Broad Street, Lagos Island, Lagos",
    coordinates: { lat: 6.4549, lng: 3.3896 },
    entryFee: {
      adults: "₦500",
      children: "₦200"
    },
    openingHours: "10:00 AM - 10:00 PM (Daily)",
    description: "A historic park built on the grounds of a former colonial prison, now a memorial and cultural center with museum, restaurant, and amphitheater.",
    category: "History & Culture",
    activities: ["Museum tours", "Live performances", "Dining", "Photography", "Cultural events"],
    images: {
      image1: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop",
      image2: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=800&h=600&fit=crop",
      image3: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=600&fit=crop"
    },
    rating: 4.5,
    highlights: ["Historic site", "Memorial garden", "Cultural performances", "Restaurant"],
    bestTimeToVisit: "Year-round, check for special events"
  }
];

// Helper functions to work with the data
const getTouristCentersByCategory = (category) => {
  return lagosTouristCenters.filter(center => center.category === category);
};

const getTouristCenterById = (id) => {
  return lagosTouristCenters.find(center => center.id === id);
};

const getBeaches = () => {
  return lagosTouristCenters.filter(center => 
    center.category === "Beach" || center.category === "Beach & Recreation"
  );
};

const getNatureParks = () => {
  return lagosTouristCenters.filter(center => center.category === "Nature & Wildlife");
};

const getTopRatedCenters = (minRating = 4.5) => {
  return lagosTouristCenters.filter(center => center.rating >= minRating)
    .sort((a, b) => b.rating - a.rating);
};

const searchTouristCenters = (searchTerm) => {
  const term = searchTerm.toLowerCase();
  return lagosTouristCenters.filter(center => 
    center.name.toLowerCase().includes(term) ||
    center.description.toLowerCase().includes(term) ||
    center.location.toLowerCase().includes(term)
  );
};


// Example usage:
console.log("All Tourist Centers:", lagosTouristCenters);
console.log("All Beaches:", getBeaches());
console.log("Top Rated Centers:", getTopRatedCenters());
console.log("Search 'beach':", searchTouristCenters("beach"));









const unpopularLagosTouristCenters = [
  {
    id: 11,
    name: "Badagry Heritage Museum",
    location: "Mobee Royal Family Slave Relics Museum, Badagry, Lagos",
    coordinates: { lat: 6.4151, lng: 2.8771 },
    entryFee: {
      adults: "₦1,000",
      students: "₦500",
      guidedTour: "₦2,000"
    },
    openingHours: "9:00 AM - 5:00 PM (Monday - Saturday)",
    description: "A historic site documenting the Trans-Atlantic slave trade. Features artifacts, chains, and the 'Point of No Return' where enslaved Africans departed for the Americas.",
    category: "History & Culture",
    activities: ["Museum tours", "Historical education", "Photography", "Cultural learning"],
    images: {
      image1: "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=800&h=600&fit=crop",
      image2: "https://images.unsplash.com/photo-1513415756379-454ea5deaa31?w=800&h=600&fit=crop",
      image3: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&h=600&fit=crop"
    },
    rating: 4.3,
    highlights: ["First storey building in Nigeria", "Slave relics", "Historical artifacts", "Point of No Return beach"],
    bestTimeToVisit: "Dry season (November - March)",
    travelTime: "1.5 - 2 hours from Lagos Island"
  },
  {
    id: 12,
    name: "Ikoyi Cemetery",
    location: "Ikoyi, Lagos",
    coordinates: { lat: 6.4475, lng: 3.4331 },
    entryFee: {
      general: "Free"
    },
    openingHours: "8:00 AM - 5:00 PM (Daily)",
    description: "A peaceful colonial-era cemetery featuring unique architecture and historical gravesites. Popular spot for photographers and history enthusiasts.",
    category: "History & Culture",
    activities: ["Photography", "Historical exploration", "Architecture viewing", "Quiet reflection"],
    images: {
      image1: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800&h=600&fit=crop",
      image2: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=800&h=600&fit=crop",
      image3: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=600&fit=crop"
    },
    rating: 3.9,
    highlights: ["Colonial architecture", "Historic gravesites", "Unique photo location", "Serene atmosphere"],
    bestTimeToVisit: "Early morning or late afternoon",
    notes: "Respectful behavior required"
  },
  {
    id: 13,
    name: "Atican Beach Resort",
    location: "Plot 242 Okun-Ajah Road, Lekki-Ajah, Lagos",
    coordinates: { lat: 6.4612, lng: 3.6845 },
    entryFee: {
      adults: "₦1,500 - ₦2,000",
      children: "₦1,000",
      cabanaRental: "₦30,000 - ₦50,000/day"
    },
    openingHours: "9:00 AM - 9:00 PM (Daily)",
    description: "A hidden beach resort offering tranquility away from the crowds. Features chalets, swimming pool, and beachfront dining.",
    category: "Beach & Recreation",
    activities: ["Swimming", "Beach volleyball", "Jet skiing", "Picnicking", "Dining"],
    images: {
      image1: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
      image2: "https://images.unsplash.com/photo-1540202404-1b927e27fa8b?w=800&h=600&fit=crop",
      image3: "https://images.unsplash.com/photo-1566024164372-0281f1133aa6?w=800&h=600&fit=crop"
    },
    rating: 4.0,
    highlights: ["Less crowded", "Private cabanas", "Restaurant on-site", "Clean facilities"],
    accommodation: "Chalets available for rent",
    bestTimeToVisit: "Weekdays for peaceful experience"
  },
  {
    id: 14,
    name: "Kalakuta Republic Museum",
    location: "7 Gbemisola Street, Allen Avenue, Ikeja, Lagos",
    coordinates: { lat: 6.6018, lng: 3.3515 },
    entryFee: {
      adults: "₦1,000",
      students: "₦500",
      guidedTour: "₦1,500"
    },
    openingHours: "10:00 AM - 6:00 PM (Tuesday - Sunday)",
    description: "Former home of Afrobeat legend Fela Kuti, now a museum showcasing his life, music, and activism. Features his personal belongings and instruments.",
    category: "Art & Culture",
    activities: ["Museum tours", "Music history", "Photography", "Cultural education"],
    images: {
      image1: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=600&fit=crop",
      image2: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=800&h=600&fit=crop",
      image3: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop"
    },
    rating: 4.5,
    highlights: ["Fela's personal items", "Musical instruments", "Afrobeat history", "Underground shrine"],
    bestTimeToVisit: "Year-round, check for special events",
    notes: "Closed on Mondays"
  },
  {
    id: 15,
    name: "Epe Resort and Spa",
    location: "Epe, Lagos State",
    coordinates: { lat: 6.5833, lng: 3.9833 },
    entryFee: {
      dayUse: "₦3,000 - ₦5,000",
      poolAccess: "₦2,000",
      spaServices: "Varies"
    },
    openingHours: "9:00 AM - 8:00 PM (Daily)",
    description: "A peaceful lakeside resort offering spa services, fishing, and boat rides. Perfect for weekend getaways from the city hustle.",
    category: "Nature & Recreation",
    activities: ["Fishing", "Boat rides", "Swimming", "Spa treatments", "Picnicking"],
    images: {
      image1: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
      image2: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
      image3: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=600&fit=crop"
    },
    rating: 4.1,
    highlights: ["Lakeside views", "Fresh fish market", "Peaceful environment", "Spa facilities"],
    accommodation: "Hotel rooms available",
    bestTimeToVisit: "Year-round",
    travelTime: "1.5 hours from Lagos Island"
  },
  {
    id: 16,
    name: "Shoprite Sangotedo Beach",
    location: "Ajah-Epe Expressway, Sangotedo, Lagos",
    coordinates: { lat: 6.4656, lng: 3.6912 },
    entryFee: {
      general: "₦500 - ₦1,000",
      parking: "₦200"
    },
    openingHours: "24 hours (Daily)",
    description: "A quiet, less commercialized beach perfect for those seeking solitude. Close to Shoprite Sangotedo for convenience.",
    category: "Beach",
    activities: ["Swimming", "Beach walks", "Photography", "Picnicking"],
    images: {
      image1: "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=800&h=600&fit=crop",
      image2: "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=800&h=600&fit=crop",
      image3: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=600&fit=crop"
    },
    rating: 3.8,
    highlights: ["Less crowded", "Natural setting", "Affordable", "Close to shopping"],
    bestTimeToVisit: "Weekdays",
    notes: "Fewer amenities than popular beaches"
  },
  {
    id: 17,
    name: "Ikeja City Mall Park",
    location: "Obafemi Awolowo Way, Ikeja, Lagos",
    coordinates: { lat: 6.6208, lng: 3.3417 },
    entryFee: {
      general: "Free"
    },
    openingHours: "10:00 AM - 10:00 PM (Daily)",
    description: "An urban park within a shopping complex offering green space, playground, and outdoor seating. Perfect for quick relaxation.",
    category: "Park & Recreation",
    activities: ["Walking", "Picnicking", "Children's playground", "Shopping", "Dining"],
    images: {
      image1: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=800&h=600&fit=crop",
      image2: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop",
      image3: "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=800&h=600&fit=crop"
    },
    rating: 3.9,
    highlights: ["Central location", "Free entry", "Shopping access", "Family-friendly"],
    bestTimeToVisit: "Evenings and weekends",
    notes: "Can get crowded on weekends"
  },
  {
    id: 18,
    name: "Terra Kulture",
    location: "1376 Tiamiyu Savage Street, Victoria Island, Lagos",
    coordinates: { lat: 6.4367, lng: 3.4205 },
    entryFee: {
      events: "Varies by event",
      restaurant: "No entry fee"
    },
    openingHours: "10:00 AM - 10:00 PM (Daily)",
    description: "A cultural center promoting Nigerian art, theater, and cuisine. Features an art gallery, bookshop, restaurant, and theater space.",
    category: "Art & Culture",
    activities: ["Theater performances", "Art exhibitions", "Book shopping", "Nigerian dining", "Cultural events"],
    images: {
      image1: "https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?w=800&h=600&fit=crop",
      image2: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=600&fit=crop",
      image3: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=800&h=600&fit=crop"
    },
    rating: 4.4,
    highlights: ["Nigerian cuisine", "Art gallery", "Bookshop", "Theater productions", "Cultural hub"],
    bestTimeToVisit: "Check event calendar",
    notes: "Theater requires booking"
  },
  {
    id: 19,
    name: "Monkey Park Lekki",
    location: "Road 14, Ikate, Lekki Phase 1, Lagos",
    coordinates: { lat: 6.4477, lng: 3.4747 },
    entryFee: {
      adults: "₦500",
      children: "₦300"
    },
    openingHours: "9:00 AM - 5:00 PM (Daily)",
    description: "A small wildlife park where visitors can interact with friendly monkeys in a semi-natural habitat. Great for children.",
    category: "Nature & Wildlife",
    activities: ["Monkey feeding", "Photography", "Nature walks", "Wildlife observation"],
    images: {
      image1: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=800&h=600&fit=crop",
      image2: "https://images.unsplash.com/photo-1535083783855-76ae62b2914e?w=800&h=600&fit=crop",
      image3: "https://images.unsplash.com/photo-1516934024742-b461fba47600?w=800&h=600&fit=crop"
    },
    rating: 3.7,
    highlights: ["Interactive experience", "Family-friendly", "Affordable", "Educational"],
    bestTimeToVisit: "Morning hours",
    notes: "Follow safety guidelines, monkeys can be unpredictable"
  },
  {
    id: 20,
    name: "Inagbe Grand Resorts & Leisure",
    location: "Inagbe Town, Ibeju-Lekki, Lagos",
    coordinates: { lat: 6.4789, lng: 3.7856 },
    entryFee: {
      dayUse: "₦2,000 - ₦3,000",
      paintball: "₦5,000",
      zipLine: "₦3,000"
    },
    openingHours: "9:00 AM - 7:00 PM (Daily)",
    description: "An adventure resort on an island accessible by boat, offering zip-lining, paintball, ATV rides, and water sports.",
    category: "Beach & Recreation",
    activities: ["Zip-lining", "Paintball", "ATV rides", "Kayaking", "Swimming", "Camping"],
    images: {
      image1: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
      image2: "https://images.unsplash.com/photo-1621277224630-81d9af65e40f?w=800&h=600&fit=crop",
      image3: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop"
    },
    rating: 4.2,
    highlights: ["Island location", "Adventure activities", "Beach access", "Camping facilities"],
    accommodation: "Chalets and camping available",
    bestTimeToVisit: "Weekends for full activities",
    travelTime: "2 hours from Lagos Island + boat ride"
  }
];

// Helper functions for unpopular centers
const getUnpopularCentersByCategory = (category) => {
  return unpopularLagosTouristCenters.filter(center => center.category === category);
};

const getUnpopularCenterById = (id) => {
  return unpopularLagosTouristCenters.find(center => center.id === id);
};

const getUnpopularBeaches = () => {
  return unpopularLagosTouristCenters.filter(center => 
    center.category === "Beach" || center.category === "Beach & Recreation"
  );
};

const getHiddenGems = (minRating = 4.0) => {
  return unpopularLagosTouristCenters.filter(center => center.rating >= minRating)
    .sort((a, b) => b.rating - a.rating);
};

const searchUnpopularCenters = (searchTerm) => {
  const term = searchTerm.toLowerCase();
  return unpopularLagosTouristCenters.filter(center => 
    center.name.toLowerCase().includes(term) ||
    center.description.toLowerCase().includes(term) ||
    center.location.toLowerCase().includes(term)
  );
};

// Combine both arrays
const allLagosTouristCenters = [...lagosTouristCenters, ...unpopularLagosTouristCenters];

// Export everything
export {
  lagosTouristCenters,
  unpopularLagosTouristCenters,
  allLagosTouristCenters,
  getTouristCentersByCategory,
  getTouristCenterById,
  getBeaches,
  getNatureParks,
  getTopRatedCenters,
  searchTouristCenters,
  getUnpopularCentersByCategory,
  getUnpopularCenterById,
  getUnpopularBeaches,
  getHiddenGems,
  searchUnpopularCenters
};

// Example usage:
console.log("Popular Tourist Centers:", lagosTouristCenters.length);
console.log("Hidden Gems:", unpopularLagosTouristCenters.length);
console.log("All Centers Combined:", allLagosTouristCenters.length);
console.log("Unpopular Beaches:", getUnpopularBeaches());
console.log("Hidden Gems (4.0+):", getHiddenGems());