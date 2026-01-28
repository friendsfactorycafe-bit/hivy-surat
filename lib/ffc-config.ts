// HIVY - Place for Celebrations - Surat Configuration
// Main configuration file for the HIVY website

export interface SetupPackage {
  id: string;
  slug: string;
  name: string;
  emoji: string;
  shortDescription: string;
  fullDescription: string;
  price: number;
  cakeIncluded: boolean; // true for Setup 1-3, false for Setup 4-8 (extra cost)
  features: string[];
  perfectFor: string[];
  thumbnail: string;
  images: string[];
}

export interface ServiceCategory {
  slug: string;
  name: string;
  emoji: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  keywords: ServiceKeyword[];
}

export interface ServiceKeyword {
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
}

export interface AreaConfig {
  slug: string;
  name: string;
}

// ==================== SITE CONFIG ====================
export const siteConfig = {
  name: "HIVY - Place for Celebrations",
  tagline: "Where Every Occasion Turns Into a Forever Memory",
  description: "Premium romantic celebration venue in Surat for couples. Birthday surprises, candlelight dinners, anniversary celebrations, proposals, pre-wedding shoots & more.",
  phone: "09727027278",
  whatsapp: "919727027278",
  email: "hello@hivy.co.in",
  address: "252/253, 2nd Floor, The Boulevard, Near Pratham Circle, Galleria Street, Green City Road, Adajan, Pal Gam, Surat, Gujarat 394510",
  city: "Surat",
  website: "https://hivy.co.in",
  colors: {
    primary: "#78716C", // Warm Stone
    secondary: "#CA8A04", // Golden
    accent: "#A16207",
    gradient: "from-stone-700 to-yellow-700",
    gradientHover: "from-stone-800 to-yellow-800",
    lightBg: "bg-stone-100",
    darkBg: "bg-stone-800",
    text: "text-stone-700"
  },
  socialLinks: {
    instagram: "https://www.instagram.com/hivy_placeforcelebration/?hl=en",
    facebook: "https://www.facebook.com/p/Hivy-placeforcelebration-61553052747625/",
    youtube: ""
  }
};

// ==================== SETUP PACKAGES (6 Setups) ====================
export const packages: SetupPackage[] = [
  {
    id: "setup-1",
    slug: "tent-of-romance",
    name: "Tent of Romance",
    emoji: "⛺💕✨",
    shortDescription: "Step into a cozy romantic tent where love blooms under soft lights and dreamy décor ✨",
    fullDescription: `⛺💕✨ Tent of Romance @ ₹6500/- only — where intimacy meets elegance, and every moment feels wrapped in love

Experience the ultimate romantic celebration at Surat's best candlelight dinner venue ✨. Tent of Romance is designed for couples who want a cozy, intimate, and unforgettable celebration.

🎂 Cake / Champagne / Photography
• Cake: Complimentary
• Champagne: ₹500/- (Non-Alcoholic Fruit Flavor)
• Book Photography: ₹2700/-
  - 10 to 15 Photos
  - 30 to 45 seconds Reel
  - Same day delivery of all pictures and video after your date complete

⏰ 3 Mesmerizing Hours
3 hours for creating beautiful memories, each moment a brushstroke on the canvas of your love story.

⛺ Trending Tent
From personalized messages written in real rose petals on the floor to a complete transformation of the space, we design every detail to match your unique vision. The entire area is beautifully decorated, from the ceiling to the floor, with stunning props, vibrant accents, and custom touches that bring your idea to life.

🌸 Curtains, Flowers, and Lights
The tent is decorated with flowing curtains, vibrant flowers, and twinkling lights, creating a magical ambiance that is sure to enchant you and your partner.

🪴 Unique Props
We provide unique props to enhance the atmosphere and add a touch of whimsy to your experience. From vintage lanterns to bohemian rugs, our props will transport you to another world.

🌹 Floor Decorations
On the floor, we create stunning decorations using up to 7kg of real rose petals, arranged in different love shapes. You can also customize according to your need.

💑 Lower Seating
Relax and unwind in our comfortable lower seating, designed to help you and your partner connect on a deeper level as you enjoy each other's company in this beautiful open roof with the wind blowing through making it truly mesmerizing moments.

🕯️ Candle Lights
The soft glow of candle lights adds a warm, romantic touch to your evening. We strategically place candles around the tent to enhance the intimate atmosphere.

🍽️ Mouth-Watering Dishes
Indulge in our mouth-watering dishes, specially prepared to tantalize your taste buds and complement the romantic setting. From appetizers to desserts, our menu is sure to delight.

🎶 Romantic Music
Set the mood with soft, romantic music playing in the background, enhancing the overall ambiance of your evening and creating a truly unforgettable experience.

🎉 Perfect For
Romantic Proposal Surat | Anniversary Celebration | Birthday Surprise | Candlelight Dinner | Pre-Wedding Photoshoot | Valentine's Day Special

📍 Best romantic tent setup Surat | Candlelight dinner Gotri | Couple-friendly venue`,
    price: 6500,
    cakeIncluded: true,
    features: [
      "3 Hours Private Romantic Tent Celebration ⛺",
      "Complimentary Celebration Cake 🍰",
      "Champagne: ₹500/- (Non-Alcoholic)",
      "Photography Package Available: ₹2700/-",
      "7kg Real Rose Petals Floor Decoration 🌹",
      "Trending Tent Setup with Curtains & Lights 💡",
      "Unique Vintage Props & Bohemian Décor",
      "Comfortable Lower Seating 💑",
      "Candle-Lit Ambiance 🕯️",
      "Mouth-Watering Multi-Course Dishes 🍽️",
      "Romantic Background Music 🎶",
      "Instagram-worthy Setup 📸"
    ],
    perfectFor: ["Romantic Proposal", "Anniversary Celebration", "Birthday Surprise", "Candlelight Dinner", "Pre-Wedding Photoshoot", "Valentine's Day"],
    thumbnail: "/packages/thumbnails/Tent of Romance @ 6500_- only.png",
    images: [
      "/packages/tent-of-romance/images/12.png",
      "/packages/tent-of-romance/images/13.png",
      "/packages/tent-of-romance/images/14.png",
      "/packages/tent-of-romance/images/15.png",
      "/packages/tent-of-romance/images/16.png",
      "/packages/tent-of-romance/images/17.png",
      "/packages/tent-of-romance/images/18.png",
      "/packages/tent-of-romance/images/19.png",
      "/packages/tent-of-romance/images/20.png",
      "/packages/tent-of-romance/images/21.png",
      "/packages/tent-of-romance/images/22.png",
      "/packages/tent-of-romance/images/23.png",
      "/packages/tent-of-romance/images/24.png",
      "/packages/tent-of-romance/images/25.png",
      "/packages/tent-of-romance/images/26.png",
      "/packages/tent-of-romance/images/62.png",
      "/packages/tent-of-romance/images/63.png",
      "/packages/tent-of-romance/images/64.png",
      "/packages/tent-of-romance/images/65.png",
      "/packages/tent-of-romance/images/66.png",
      "/packages/tent-of-romance/images/67.png",
      "/packages/tent-of-romance/images/68.png",
      "/packages/tent-of-romance/images/69.png",
      "/packages/tent-of-romance/images/70.png",
      "/packages/tent-of-romance/images/71.png",
      "/packages/tent-of-romance/images/72.png",
      "/packages/tent-of-romance/images/73.png",
      "/packages/tent-of-romance/images/74.png",
      "/packages/tent-of-romance/images/75.png",
      "/packages/tent-of-romance/images/76.png"
    ]
  },
  {
    id: "setup-2",
    slug: "fairy-tale-proposals",
    name: "Fairy Tale Proposals",
    emoji: "🧚✨💍",
    shortDescription: "Step into a magical fairytale where dreams come true and love stories begin ✨",
    fullDescription: `🧚✨💍 Fairy Tale Proposals @ ₹6300/- — where every moment feels like a dream, and love stories get their perfect beginning

Step into a magical fairytale setting where romance meets enchantment at Surat's premier proposal venue ✨.

🎂 Cake & Champagne
• Cake: Complimentary
• Champagne: ₹500/- (Non-Alcoholic Fruit Flavor)

⏰ 3 Mesmerizing Hours
3 hours for creating beautiful memories, each moment a brushstroke on the canvas of your love story.

⛺ Trending Tent
We turn your proposal into a magical experience. Our expert team creates a stunning atmosphere with a floor adorned in real rose petals, an intimate tent draped in elegant curtains, and twinkling fairy lights that set the perfect romantic mood. Every detail is designed to make your moment unforgettable, ensuring your proposal is as enchanting as your love story.

🌸 Curtains, Flowers, and Lights
The tent is decorated with flowing curtains, vibrant flowers, and twinkling lights, creating a magical ambiance that is sure to enchant you and your partner.

🪴 Unique Props
We provide unique props to enhance the atmosphere and add a touch of whimsy to your experience. From vintage lanterns to bohemian rugs, our props will transport you to another world.

🌹 Floor Decorations
On the floor, we create stunning decorations using up to 7kg of real rose petals, arranged in different love shapes. You can also customize according to your need.

💑 Lower Seating
Relax and unwind in our comfortable lower seating, designed to help you and your partner connect on a deeper level as you enjoy each other's company in this beautiful open roof with the wind blowing through making it truly mesmerizing moments.

🕯️ Candle Lights
The soft glow of candle lights adds a warm, romantic touch to your evening. We strategically place candles around the tent to enhance the intimate atmosphere.

🍽️ Mouth-Watering Dishes
Indulge in our mouth-watering dishes, specially prepared to tantalize your taste buds and complement the romantic setting. From appetizers to desserts, our menu is sure to delight.

🎶 Romantic Music
Set the mood with soft, romantic music playing in the background, enhancing the overall ambiance of your evening and creating a truly unforgettable experience.

🎉 Perfect For
Romantic Proposal Surat | Anniversary Celebration | Birthday Surprise | Candlelight Dinner | Pre-Wedding Photoshoot | Marriage Proposal

📍 Best fairytale proposal venue Surat | Romantic celebration cafe Gotri | Couple-friendly venue`,
    price: 6300,
    cakeIncluded: true,
    features: [
      "3 Hours Private Fairytale Celebration ✨",
      "Complimentary Celebration Cake 🍰",
      "Champagne: ₹500/- (Non-Alcoholic)",
      "Magical Tent with Elegant Curtains",
      "7kg Real Rose Petals Floor Art 🌹",
      "Twinkling Fairy Lights Setup 💡",
      "Unique Vintage Props & Décor",
      "Comfortable Lower Seating 💑",
      "Candle-Lit Romantic Atmosphere 🕯️",
      "Mouth-Watering Multi-Course Dishes 🍽️",
      "Romantic Background Music 🎶",
      "Perfect for Proposals 💍"
    ],
    perfectFor: ["Marriage Proposal", "Romantic Proposal", "Anniversary Celebration", "Birthday Surprise", "Candlelight Dinner", "Pre-Wedding Photoshoot"],
    thumbnail: "/packages/thumbnails/Fairy Tale Proposals.png",
    images: [
      "/packages/fairy-tale-proposals/2.png",
      "/packages/fairy-tale-proposals/3.png",
      "/packages/fairy-tale-proposals/4.png",
      "/packages/fairy-tale-proposals/5.png",
      "/packages/fairy-tale-proposals/6.png",
      "/packages/fairy-tale-proposals/7.png",
      "/packages/fairy-tale-proposals/8.png",
      "/packages/fairy-tale-proposals/9.png",
      "/packages/fairy-tale-proposals/10.png"
    ]
  },
  {
    id: "setup-3",
    slug: "swing-of-love",
    name: "Swing of LOVE",
    emoji: "🪽💕",
    shortDescription: "Float in love on a dreamy swing setup where romance meets playfulness ✨",
    fullDescription: `🪽💕 Swing of LOVE @ ₹5100/- — where love takes flight, moments feel lighter, and hearts swing together in perfect harmony

Experience the magic of romance on a beautifully decorated swing setup at Surat's most unique romantic venue ✨.

🎂 Cake & Champagne
• Cake: Complimentary
• Champagne: ₹500/- (Non-Alcoholic Fruit Flavor)

⏰ 3 Mesmerizing Hours
3 hours for creating beautiful memories, each moment a brushstroke on the canvas of your love story.

🪽 Swing Of LOVE
"Swing of Love" is a beautifully designed decorative piece that symbolizes romance, harmony, and elegance. Featuring a gracefully crafted swing adorned with delicate embellishments, it creates a dreamy and charming ambiance. Perfect for special occasions, this piece adds a touch of love and serenity to any space.

🌸 Curtains, Flowers, and Lights
The space is decorated with flowing curtains, vibrant flowers, and twinkling lights, creating a magical ambiance that is sure to enchant you and your partner.

🪴 Unique Props
We provide unique props to enhance the atmosphere and add a touch of whimsy to your experience. From vintage lanterns to bohemian rugs, our props will transport you to another world.

💑 Also Comfortable Lower Seating
Relax and unwind in our comfortable lower seating, designed to help you and your partner connect on a deeper level as you enjoy each other's company in this beautiful space.

🕯️ Candle Lights
The soft glow of candle lights adds a warm, romantic touch to your evening. We strategically place candles around the tent to enhance the intimate atmosphere.

🌹 A Floor Adorned with Natural Red Rose Petals
On the floor, we create stunning decorations using up to 7kg of real rose petals, arranged in different love shapes. These intricate designs add a touch of romance and elegance to the space.

🍽️ Dishes That Delight the Senses
Indulge in our mouth-watering dishes, specially prepared to tantalize your taste buds and complement the romantic setting. From appetizers to desserts, our menu is sure to delight.

🎶 Romantic Music
Set the mood with soft, romantic music playing in the background, enhancing the overall ambiance of your evening and creating a truly unforgettable experience.

🎉 Perfect For
Romantic Proposal Surat | Anniversary Celebration | Birthday Surprise | Candlelight Dinner | Pre-Wedding Photoshoot | Date Night

📍 Best swing setup venue Surat | Romantic celebration cafe Gotri | Couple-friendly venue`,
    price: 5100,
    cakeIncluded: true,
    features: [
      "3 Hours Private Swing Setup Celebration 🪽",
      "Complimentary Celebration Cake 🍰",
      "Champagne: ₹500/- (Non-Alcoholic)",
      "Beautiful Decorated Swing of Love",
      "Flowing Curtains & Twinkling Lights 💡",
      "7kg Real Rose Petals Floor Décor 🌹",
      "Unique Props & Vintage Lanterns",
      "Comfortable Lower Seating 💑",
      "Candle-Lit Atmosphere 🕯️",
      "Mouth-Watering Multi-Course Dishes 🍽️",
      "Romantic Background Music 🎶",
      "Instagram-worthy Photo Spots 📸"
    ],
    perfectFor: ["Romantic Proposal", "Anniversary Celebration", "Birthday Surprise", "Candlelight Dinner", "Pre-Wedding Photoshoot", "Date Night"],
    thumbnail: "/packages/thumbnails/Swing of LOVE @ 5100.png",
    images: [
      "/packages/swing-of-love/images/28.png",
      "/packages/swing-of-love/images/29.png",
      "/packages/swing-of-love/images/30.png",
      "/packages/swing-of-love/images/31.png",
      "/packages/swing-of-love/images/32.png",
      "/packages/swing-of-love/images/33.png",
      "/packages/swing-of-love/images/34.png",
      "/packages/swing-of-love/images/35.png",
      "/packages/swing-of-love/images/36.png",
      "/packages/swing-of-love/images/37.png",
      "/packages/swing-of-love/images/38.png",
      "/packages/swing-of-love/images/39.png",
      "/packages/swing-of-love/images/40.png",
      "/packages/swing-of-love/images/41.png",
      "/packages/swing-of-love/images/42.png",
      "/packages/swing-of-love/images/43.png",
      "/packages/swing-of-love/images/44.png"
    ]
  },
  {
    id: "setup-4",
    slug: "boho-chic",
    name: "BoHo Chic",
    emoji: "🌾🪶✨",
    shortDescription: "Embrace free-spirited romance in a bohemian paradise filled with warmth and elegance ✨",
    fullDescription: `🌾🪶✨ BoHo Chic @ ₹5700/- — where bohemian vibes meet romantic elegance, and every moment feels effortlessly beautiful

Step into a boho-inspired wonderland where rustic charm meets modern romance at Surat's premier bohemian venue ✨.

🎂 Cake & Champagne
• Cake: Complimentary
• Champagne: ₹500/- (Non-Alcoholic Fruit Flavor)

⏰ 3 Mesmerizing Hours
3 hours for creating beautiful memories, each moment a brushstroke on the canvas of your love story.

🌾 Boho Styled Tent
Our tent is a work of art, with its intricate details and bohemian flair. Step inside and feel the cares of the world melt away as you immerse yourself in its cozy embrace.

🌸 Curtains, Flowers, and Lights
The tent is decorated with flowing curtains, vibrant flowers, and twinkling lights, creating a magical ambiance that is sure to enchant you and your partner.

🪴 Unique Props
We provide unique props to enhance the atmosphere and add a touch of whimsy to your experience. From vintage lanterns to bohemian rugs, our props will transport you to another world.

💑 Lower Seating
Relax and unwind in our comfortable lower seating, designed to help you and your partner connect on a deeper level as you enjoy each other's company in this beautiful open roof with the wind blowing through making it truly mesmerizing moments.

🕯️ Candle Lights
The soft glow of candle lights adds a warm, romantic touch to your evening. We strategically place candles around the tent to enhance the intimate atmosphere.

🌹 A Floor Adorned with Natural Red Rose Petals
On the floor, we create stunning decorations using up to 7kg of real rose petals, arranged in different love shapes. These intricate designs add a touch of romance and elegance to the space.

🍽️ Dishes That Delight the Senses
Indulge in our mouth-watering dishes, specially prepared to tantalize your taste buds and complement the romantic setting. From appetizers to desserts, our menu is sure to delight.

🎶 Romantic Music
Set the mood with soft, romantic music playing in the background, enhancing the overall ambiance of your evening and creating a truly unforgettable experience.

🎉 Perfect For
Romantic Proposal Surat | Anniversary Celebration | Birthday Surprise | Candlelight Dinner | Pre-Wedding Photoshoot | Boho Theme Party

📍 Best bohemian venue Surat | Boho celebration cafe Gotri | Couple-friendly venue`,
    price: 5700,
    cakeIncluded: true,
    features: [
      "3 Hours Private Bohemian Celebration 🌾",
      "Complimentary Celebration Cake 🍰",
      "Champagne: ₹500/- (Non-Alcoholic)",
      "Artistic Boho Styled Tent",
      "Flowing Curtains & Twinkling Lights 💡",
      "7kg Real Rose Petals Floor Art 🌹",
      "Vintage Lanterns & Bohemian Rugs 🪴",
      "Comfortable Lower Seating 💑",
      "Candle-Lit Intimate Atmosphere 🕯️",
      "Mouth-Watering Multi-Course Dishes 🍽️",
      "Romantic Background Music 🎶",
      "Open Roof Experience with Wind 🌙"
    ],
    perfectFor: ["Romantic Proposal", "Anniversary Celebration", "Birthday Surprise", "Candlelight Dinner", "Pre-Wedding Photoshoot", "Boho Theme Party"],
    thumbnail: "/packages/thumbnails/BoHo Chic @ 5700.png",
    images: [
      "/packages/boho-chic/images/46.png",
      "/packages/boho-chic/images/47.png",
      "/packages/boho-chic/images/48.png",
      "/packages/boho-chic/images/49.png",
      "/packages/boho-chic/images/50.png",
      "/packages/boho-chic/images/51.png",
      "/packages/boho-chic/images/52.png",
      "/packages/boho-chic/images/53.png",
      "/packages/boho-chic/images/54.png",
      "/packages/boho-chic/images/55.png",
      "/packages/boho-chic/images/56.png",
      "/packages/boho-chic/images/57.png",
      "/packages/boho-chic/images/58.png",
      "/packages/boho-chic/images/59.png",
      "/packages/boho-chic/images/60.png"
    ]
  },
  {
    id: "setup-5",
    slug: "twin-heart",
    name: "TwinHeart",
    emoji: "💕💕",
    shortDescription: "Celebrate love with twin hearts symbolizing two souls becoming one ✨",
    fullDescription: `💕💕 TwinHeart @ ₹4700/- only — where two hearts beat as one, and love is celebrated in its purest form

Experience the magic of togetherness in a beautifully decorated twin heart setup at Surat's most romantic venue ✨.

🎂 Cake & Champagne
• Cake: ₹500/-
• Champagne: ₹500/- (Non-Alcoholic Fruit Flavor)

⏰ 3 Mesmerizing Hours
3 hours for creating beautiful memories, each moment a brushstroke on the canvas of your love story.

❤️ Elegant Tent
Combining Red and White color to realm of elegance and luxury, where white curtains softly frame the scene, gentle lighting dances in the air, combined with Red Rose Petals.

🌸 Curtains, Flowers, and Lights
Decorating the floor with Red Roses giving twin heart shapes, enhanced by carefully selected props. The tent is decorated with flowing curtains, vibrant flowers, and twinkling lights, creating a magical ambiance that is sure to enchant you and your partner.

🪴 Unique Props
We provide unique props to enhance the atmosphere and add a touch of whimsy to your experience. From vintage lanterns to bohemian rugs, our props will transport you to another world.

💑 Lower Seating
Relax and unwind in our comfortable lower seating, designed to help you and your partner connect on a deeper level as you enjoy each other's company in this beautiful open roof with the wind blowing through making it truly mesmerizing moments.

🕯️ Candle Lights
The soft glow of candle lights adds a warm, romantic touch to your evening. We strategically place candles around the tent to enhance the intimate atmosphere.

🌹 A Floor Adorned with Natural Red Rose Petals
Immerse yourselves in the romance of a love story told through petals. Our Twin Hearts Rose Petal Decoration is designed to capture the essence of your connection. A beautiful arrangement of delicate rose petals forms two intertwined hearts, symbolizing the bond that ties you and your partner together. Surrounded by soft, fragrant petals, this stunning setup creates a breathtaking moment—perfect for a proposal, anniversary, or any celebration of love.

🍽️ Dishes That Delight the Senses
Indulge in our mouth-watering dishes, specially prepared to tantalize your taste buds and complement the romantic setting. From appetizers to desserts, our menu is sure to delight.

🎶 Romantic Music
Set the mood with soft, romantic music playing in the background, enhancing the overall ambiance of your evening and creating a truly unforgettable experience.

🎉 Perfect For
Romantic Proposal Surat | Anniversary Celebration | Birthday Surprise | Candlelight Dinner | Pre-Wedding Photoshoot | Couple Date Night

📍 Best heart-themed venue Surat | Romantic celebration cafe Gotri | Couple-friendly venue`,
    price: 4700,
    cakeIncluded: false,
    features: [
      "3 Hours Private Twin Heart Celebration 💕",
      "Cake Available: ₹500/-",
      "Champagne: ₹500/- (Non-Alcoholic)",
      "Elegant Red & White Tent Setup",
      "Twin Heart Rose Petal Floor Art 🌹",
      "Flowing Curtains & Twinkling Lights 💡",
      "Unique Props & Vintage Lanterns",
      "Comfortable Lower Seating 💑",
      "Candle-Lit Romantic Atmosphere 🕯️",
      "Mouth-Watering Multi-Course Dishes 🍽️",
      "Romantic Background Music 🎶",
      "Open Roof with Gentle Breeze 🌙"
    ],
    perfectFor: ["Romantic Proposal", "Anniversary Celebration", "Birthday Surprise", "Candlelight Dinner", "Pre-Wedding Photoshoot", "Couple Date Night"],
    thumbnail: "/packages/thumbnails/TwinHeart @ 4700_- only.png",
    images: [
      "/packages/tent-of-romance/images/62.png",
      "/packages/tent-of-romance/images/63.png",
      "/packages/tent-of-romance/images/64.png",
      "/packages/tent-of-romance/images/65.png",
      "/packages/tent-of-romance/images/66.png",
      "/packages/tent-of-romance/images/67.png",
      "/packages/tent-of-romance/images/68.png",
      "/packages/tent-of-romance/images/69.png",
      "/packages/tent-of-romance/images/70.png",
      "/packages/tent-of-romance/images/71.png",
      "/packages/tent-of-romance/images/72.png",
      "/packages/tent-of-romance/images/73.png",
      "/packages/tent-of-romance/images/74.png",
      "/packages/tent-of-romance/images/75.png",
      "/packages/tent-of-romance/images/76.png"
    ]
  },
  {
    id: "setup-6",
    slug: "the-elite-group-setup",
    name: "Elite Group Setup",
    emoji: "💍✨",
    shortDescription: "Create a one-of-a-kind proposal experience tailored just for your love story ✨",
    fullDescription: `💍✨ Elite Group Setup — where your unique love story gets the perfect setting it deserves

Make your proposal truly unforgettable with a customized setup designed around your love story at Surat's best elite group setup venue ✨.

📦 Package Includes
• Cake: Complimentary
• Champagne: ₹500/- (Non-Alcoholic Fruit Flavor)

⏰ 2 Mesmerizing Hours
2 hours for creating beautiful memories, each moment a brushstroke on the canvas of your love story.

✨ What Makes This Experience Special?
• A fully decorated private setup with rose petals, warm fairy lights, and aesthetic details
• Lower seating arrangement for a relaxed and intimate vibe
• Exclusive reservation — the space is yours alone
• Background music to enhance the mood
• Ideal for photography & videography to capture your special moments
• Neon LED message to add to your mood
• Perfect for proposals, birthdays, bride-to-be celebrations, or any personal milestone

⚠️ This experience focuses on ambience and celebration. Food is not included in this package.

🪴 Unique Props
We provide unique props to enhance the atmosphere and add a touch of whimsy to your experience. From vintage lanterns to bohemian rugs, and Neon LED light message, our props will transport you to another world.

💑 Lower Seating
Relax and unwind in our comfortable lower seating, designed to help you and your partner connect on a deeper level as you enjoy each other's company in this beautiful open roof with the wind blowing through making it truly mesmerizing moments.

🕯️ Candle Lights
The soft glow of candle lights adds a warm, romantic touch to your evening. We strategically place candles around the tent to enhance the intimate atmosphere.

🎶 Romantic Music
Set the mood with soft, romantic music playing in the background, enhancing the overall ambiance of your evening and creating a truly unforgettable experience.

📌 Important Notes
• This package does not include food or beverages
• Ideal for couples or small groups accompanying the celebration
• Advance booking recommended due to limited availability

🎉 Perfect For
Marriage Proposal Surat | Birthday Celebration | Bride-to-Be Party | Anniversary Surprise | Personal Milestones | Pre-Wedding Photoshoot

📍 Best elite group setup venue Surat | Custom celebration cafe Gotri | Couple-friendly venue`,
    price: 5400,
    cakeIncluded: true,
    features: [
      "2 Hours Private Elite Group Celebration 💍",
      "Complimentary Celebration Cake 🍰",
      "Champagne: ₹500/- (Non-Alcoholic)",
      "Fully Decorated Private Setup ✨",
      "Rose Petals & Warm Fairy Lights",
      "Neon LED Custom Message 💡",
      "Exclusive Reservation - Space is Yours",
      "Lower Seating for Intimate Vibe 💑",
      "Candle-Lit Ambiance 🕯️",
      "Romantic Background Music 🎶",
      "Perfect for Photography & Videography 📸",
      "⚠️ Food NOT included in this package"
    ],
    perfectFor: ["Marriage Proposal", "Birthday Celebration", "Bride-to-Be Party", "Anniversary Surprise", "Personal Milestones", "Pre-Wedding Photoshoot"],
    thumbnail: "/packages/thumbnails/Elite Group Setup.png",
    images: [
      "/packages/Elite Group Setup/78.png",
      "/packages/Elite Group Setup/79.png",
      "/packages/Elite Group Setup/80.png",
      "/packages/Elite Group Setup/81.png",
      "/packages/Elite Group Setup/82.png",
      "/packages/Elite Group Setup/83.png",
      "/packages/Elite Group Setup/84.png",
      "/packages/Elite Group Setup/85.png",
      "/packages/Elite Group Setup/86.png",
      "/packages/Elite Group Setup/87.png",
      "/packages/Elite Group Setup/88.png",
      "/packages/Elite Group Setup/89.png",
      "/packages/Elite Group Setup/90.png",
      "/packages/Elite Group Setup/91.png",
      "/packages/Elite Group Setup/92.png",
      "/packages/Elite Group Setup/93.png",
      "/packages/Elite Group Setup/94.png",
      "/packages/Elite Group Setup/95.png",
      "/packages/Elite Group Setup/96.png",
      "/packages/Elite Group Setup/97.png",
      "/packages/Elite Group Setup/98.png",
      "/packages/Elite Group Setup/99.png",
      "/packages/Elite Group Setup/100.png",
      "/packages/Elite Group Setup/101.png",
      "/packages/Elite Group Setup/102.png",
      "/packages/Elite Group Setup/103.png",
      "/packages/Elite Group Setup/104.png",
      "/packages/Elite Group Setup/105.png",
      "/packages/Elite Group Setup/106.png",
      "/packages/Elite Group Setup/107.png",
      "/packages/Elite Group Setup/108.png",
      "/packages/Elite Group Setup/109.png",
      "/packages/Elite Group Setup/110.png"
    ]
  }
];

// ==================== MENU ITEMS ====================
export const menuItems = {
  starters: [
    { name: "Welcome Drink", description: "A refreshing welcome to begin your romantic experience", emoji: "🥤" },
    { name: "Cheese Fondue", description: "A rich, velvety cheese fondue served with cheese balls, wedges, and nachos", emoji: "🧀" },
    { name: "Paneer Tortilla", description: "Soft tortilla filled with spicy paneer and the chef's special seasoning", emoji: "🌯" },
    { name: "Peri Peri Fries with Mac & Cheese", description: "Creamy mac & cheese paired with peri-peri fries", emoji: "🍟" },
    { name: "Tangy Loaf", description: "Warm loaf served with cheesy garlic sauce", emoji: "🍞" }
  ],
  desserts: [
    { name: "Dessert with Chocolate Bite", description: "A sweet ending with rich chocolate indulgence", emoji: "🍫" }
  ],
  addOns: [
    { name: "Cake", description: "Free in select packages, ₹350 for others", price: "Free / ₹350", emoji: "🍰" },
    { name: "Champagne", description: "Non-Alcoholic Fruit Flavour", price: "₹500", emoji: "🥂" }
  ]
};

// ==================== SERVICE CATEGORIES ====================
export const serviceCategories: ServiceCategory[] = [
  {
    slug: "birthday-surprise",
    name: "Birthday Surprise",
    emoji: "🎂",
    description: "Create magical birthday celebrations with beautiful decorations, cakes, and intimate private setups.",
    metaTitle: "Birthday Surprise in Surat | HIVY - Place for Celebrations",
    metaDescription: "Plan the perfect birthday surprise in Surat at HIVY - Place for Celebrations. Romantic decorations, celebration cake, and intimate rooftop celebration for couples.",
    keywords: [
      { slug: "birthday-surprise-for-boyfriend-surat", title: "Birthday Surprise for Boyfriend", h1: "Best Birthday Surprise for Boyfriend in Surat", metaTitle: "Birthday Surprise for Boyfriend Surat | HIVY - Place for Celebrations", metaDescription: "Plan the perfect birthday surprise for your boyfriend in Surat. Romantic decorations, cake, and intimate celebration at HIVY - Place for Celebrations." },
      { slug: "birthday-surprise-for-girlfriend-surat", title: "Birthday Surprise for Girlfriend", h1: "Romantic Birthday Surprise for Girlfriend in Surat", metaTitle: "Birthday Surprise for Girlfriend Surat | Make Her Day Special", metaDescription: "Create unforgettable birthday memories for your girlfriend in Surat with balloon decorations, cake, flowers and romantic setup at HIVY - Place for Celebrations." },
      { slug: "birthday-surprise-for-husband-surat", title: "Birthday Surprise for Husband", h1: "Special Birthday Surprise for Husband in Surat", metaTitle: "Birthday Surprise for Husband Surat | Romantic Celebration", metaDescription: "Surprise your husband with a romantic birthday celebration in Surat. Private rooftop setup, decorations, and memorable moments at HIVY - Place for Celebrations." },
      { slug: "birthday-surprise-for-wife-surat", title: "Birthday Surprise for Wife", h1: "Romantic Birthday Surprise for Wife in Surat", metaTitle: "Birthday Surprise for Wife Surat | Make Her Feel Special", metaDescription: "Plan a dreamy birthday surprise for your wife in Surat with elegant decorations, flowers, and romantic ambiance at HIVY - Place for Celebrations." },
      { slug: "romantic-birthday-surprise-surat", title: "Romantic Birthday Surprise", h1: "Romantic Birthday Surprise in Surat", metaTitle: "Romantic Birthday Surprise Surat | Couple Celebration", metaDescription: "Book a romantic birthday surprise in Surat with candlelight setup, decorations, and intimate celebration for couples at HIVY - Place for Celebrations." },
      { slug: "birthday-celebration-for-couples-surat", title: "Birthday Celebration for Couples", h1: "Birthday Celebration for Couples in Surat", metaTitle: "Couple Birthday Celebration Surat | Private Venue", metaDescription: "Celebrate your special day as a couple in Surat with exclusive birthday packages and romantic rooftop setups at HIVY - Place for Celebrations." },
      { slug: "birthday-room-decoration-surat", title: "Birthday Room Decoration", h1: "Birthday Room Decoration in Surat", metaTitle: "Birthday Room Decoration Surat | Balloon & Flower Setup", metaDescription: "Beautiful birthday room decoration in Surat with balloons, flowers, and romantic themes for couples at HIVY - Place for Celebrations." },
      { slug: "birthday-balloon-decoration-surat", title: "Birthday Balloon Decoration", h1: "Birthday Balloon Decoration in Surat", metaTitle: "Birthday Balloon Decoration Surat | Creative Setups", metaDescription: "Stunning birthday balloon decoration in Surat for romantic celebrations. Heart shapes, arches, and more at HIVY - Place for Celebrations." },
      { slug: "surprise-birthday-party-surat", title: "Surprise Birthday Party", h1: "Surprise Birthday Party in Surat", metaTitle: "Surprise Birthday Party Surat | Private Celebration", metaDescription: "Plan a surprise birthday party in Surat with romantic setup and private ambiance at HIVY - Place for Celebrations rooftop." },
      { slug: "midnight-birthday-surprise-surat", title: "Midnight Birthday Surprise", h1: "Midnight Birthday Surprise in Surat", metaTitle: "Midnight Birthday Surprise Surat | 12 AM Celebration", metaDescription: "Book midnight birthday surprise in Surat to celebrate at 12 AM with cake, decorations, and romantic moments at HIVY - Place for Celebrations." },
      { slug: "birthday-party-places-surat", title: "Birthday Party Places", h1: "Best Birthday Party Places in Surat", metaTitle: "Birthday Party Places Surat | Romantic Venues", metaDescription: "Find the best birthday party places in Surat for couples. HIVY - Place for Celebrations offers private rooftop celebrations." },
      { slug: "birthday-party-venues-surat", title: "Birthday Party Venues", h1: "Birthday Party Venues for Couples in Surat", metaTitle: "Birthday Party Venues Surat | Couple-Friendly", metaDescription: "Discover couple-friendly birthday party venues in Surat. Book HIVY - Place for Celebrations for intimate celebrations." },
      { slug: "best-birthday-surprise-surat", title: "Best Birthday Surprise", h1: "Best Birthday Surprise Ideas in Surat", metaTitle: "Best Birthday Surprise Surat | Top Rated", metaDescription: "Looking for the best birthday surprise in Surat? HIVY - Place for Celebrations offers premium decorations and romantic setups." },
      { slug: "birthday-surprise-planners-surat", title: "Birthday Surprise Planners", h1: "Birthday Surprise Planners in Surat", metaTitle: "Birthday Surprise Planners Surat | Professional Setup", metaDescription: "Expert birthday surprise planners in Surat. We handle decorations, cake, and everything at HIVY - Place for Celebrations." },
      { slug: "unique-birthday-celebration-surat", title: "Unique Birthday Celebration", h1: "Unique Birthday Celebration Ideas in Surat", metaTitle: "Unique Birthday Celebration Surat | Creative Ideas", metaDescription: "Plan a unique birthday celebration in Surat with creative themes and personalized romantic setups at HIVY - Place for Celebrations." }
    ]
  },
  {
    slug: "anniversary-celebration",
    name: "Anniversary Celebration",
    emoji: "💑",
    description: "Celebrate your love journey with elegant anniversary dinners featuring special decorations and intimate celebrations.",
    metaTitle: "Anniversary Celebration in Surat | HIVY - Place for Celebrations",
    metaDescription: "Plan the perfect anniversary celebration in Surat at HIVY - Place for Celebrations. Romantic rooftop dinners, decorations, and intimate moments for couples.",
    keywords: [
      { slug: "anniversary-dinner-surat", title: "Anniversary Dinner", h1: "Romantic Anniversary Dinner in Surat", metaTitle: "Anniversary Dinner Surat | Romantic Restaurant", metaDescription: "Book a romantic anniversary dinner in Surat at HIVY - Place for Celebrations. Candlelight setup, special decorations, and intimate dining." },
      { slug: "anniversary-surprise-for-husband-surat", title: "Anniversary Surprise for Husband", h1: "Anniversary Surprise for Husband in Surat", metaTitle: "Anniversary Surprise for Husband Surat | Special Setup", metaDescription: "Plan a special anniversary surprise for your husband in Surat with romantic decorations and intimate celebration." },
      { slug: "anniversary-surprise-for-wife-surat", title: "Anniversary Surprise for Wife", h1: "Anniversary Surprise for Wife in Surat", metaTitle: "Anniversary Surprise for Wife Surat | Make Her Feel Special", metaDescription: "Create a beautiful anniversary surprise for your wife in Surat with elegant decorations and romantic ambiance." },
      { slug: "first-anniversary-celebration-surat", title: "First Anniversary Celebration", h1: "First Anniversary Celebration in Surat", metaTitle: "First Anniversary Celebration Surat | Special Milestone", metaDescription: "Celebrate your first anniversary in Surat with a special romantic setup at HIVY - Place for Celebrations rooftop." },
      { slug: "wedding-anniversary-party-surat", title: "Wedding Anniversary Party", h1: "Wedding Anniversary Party in Surat", metaTitle: "Wedding Anniversary Party Surat | Private Venue", metaDescription: "Host a memorable wedding anniversary party in Surat with private venue and romantic decorations." },
      { slug: "anniversary-decoration-surat", title: "Anniversary Decoration", h1: "Anniversary Decoration in Surat", metaTitle: "Anniversary Decoration Surat | Romantic Setup", metaDescription: "Beautiful anniversary decoration in Surat with flowers, balloons, and romantic themes at HIVY - Place for Celebrations." },
      { slug: "anniversary-celebration-ideas-surat", title: "Anniversary Celebration Ideas", h1: "Best Anniversary Celebration Ideas in Surat", metaTitle: "Anniversary Celebration Ideas Surat | Creative Plans", metaDescription: "Find creative anniversary celebration ideas in Surat. From candlelight dinners to rooftop surprises at HIVY - Place for Celebrations." },
      { slug: "romantic-anniversary-date-surat", title: "Romantic Anniversary Date", h1: "Romantic Anniversary Date in Surat", metaTitle: "Romantic Anniversary Date Surat | Perfect Evening", metaDescription: "Plan a romantic anniversary date in Surat with candlelight dinner and beautiful decorations at HIVY - Place for Celebrations." },
      { slug: "anniversary-venues-surat", title: "Anniversary Venues", h1: "Best Anniversary Venues in Surat", metaTitle: "Anniversary Venues Surat | Couple-Friendly", metaDescription: "Discover the best anniversary venues in Surat for couples. HIVY - Place for Celebrations offers private rooftop celebrations." },
      { slug: "anniversary-restaurants-surat", title: "Anniversary Restaurants", h1: "Best Anniversary Restaurants in Surat", metaTitle: "Anniversary Restaurants Surat | Romantic Dining", metaDescription: "Find the best anniversary restaurants in Surat for romantic dining. HIVY - Place for Celebrations offers candlelight dinners." },
      { slug: "surprise-anniversary-party-surat", title: "Surprise Anniversary Party", h1: "Surprise Anniversary Party in Surat", metaTitle: "Surprise Anniversary Party Surat | Secret Celebration", metaDescription: "Plan a surprise anniversary party in Surat with secret setup and romantic decorations at HIVY - Place for Celebrations." },
      { slug: "anniversary-planners-surat", title: "Anniversary Planners", h1: "Anniversary Planners in Surat", metaTitle: "Anniversary Planners Surat | Professional Service", metaDescription: "Professional anniversary planners in Surat. We handle everything from decorations to dining at HIVY - Place for Celebrations." },
      { slug: "25th-anniversary-celebration-surat", title: "25th Anniversary Celebration", h1: "25th Wedding Anniversary Celebration in Surat", metaTitle: "25th Anniversary Celebration Surat | Silver Jubilee", metaDescription: "Celebrate your silver jubilee 25th anniversary in Surat with special decorations and romantic setup." },
      { slug: "10th-anniversary-celebration-surat", title: "10th Anniversary Celebration", h1: "10th Anniversary Celebration in Surat", metaTitle: "10th Anniversary Celebration Surat | Decade of Love", metaDescription: "Mark a decade of love with 10th anniversary celebration in Surat at HIVY - Place for Celebrations." },
      { slug: "anniversary-date-night-surat", title: "Anniversary Date Night", h1: "Anniversary Date Night in Surat", metaTitle: "Anniversary Date Night Surat | Romantic Evening", metaDescription: "Plan a special anniversary date night in Surat with candlelight dinner and romantic music at HIVY - Place for Celebrations." }
    ]
  },
  {
    slug: "proposal",
    name: "Proposal",
    emoji: "💍",
    description: "Pop the question in the most romantic way with our stunning proposal setups and private venues.",
    metaTitle: "Proposal Setup in Surat | HIVY - Place for Celebrations",
    metaDescription: "Plan the perfect proposal in Surat at HIVY - Place for Celebrations. Romantic rooftop setups, decorations, and private moments for your special question.",
    keywords: [
      { slug: "proposal-setup-surat", title: "Proposal Setup", h1: "Romantic Proposal Setup in Surat", metaTitle: "Proposal Setup Surat | Romantic Arrangements", metaDescription: "Book a romantic proposal setup in Surat at HIVY - Place for Celebrations. Beautiful decorations and private venue." },
      { slug: "proposal-planners-surat", title: "Proposal Planners", h1: "Proposal Planners in Surat", metaTitle: "Proposal Planners Surat | Professional Setup", metaDescription: "Expert proposal planners in Surat. We create perfect moments for your special question at HIVY - Place for Celebrations." },
      { slug: "surprise-proposal-surat", title: "Surprise Proposal", h1: "Surprise Proposal Ideas in Surat", metaTitle: "Surprise Proposal Surat | Say Yes Moment", metaDescription: "Plan a surprise proposal in Surat with secret setup and romantic decorations at HIVY - Place for Celebrations." },
      { slug: "proposal-decoration-surat", title: "Proposal Decoration", h1: "Proposal Decoration in Surat", metaTitle: "Proposal Decoration Surat | Beautiful Setup", metaDescription: "Beautiful proposal decoration in Surat with flowers, candles, and romantic themes at HIVY - Place for Celebrations." },
      { slug: "propose-day-celebration-surat", title: "Propose Day Celebration", h1: "Propose Day Celebration in Surat", metaTitle: "Propose Day Celebration Surat | February 8th", metaDescription: "Celebrate Propose Day in Surat with romantic setup and special decorations at HIVY - Place for Celebrations." },
      { slug: "proposal-ideas-surat", title: "Proposal Ideas", h1: "Best Proposal Ideas in Surat", metaTitle: "Proposal Ideas Surat | Creative Ways to Propose", metaDescription: "Find creative proposal ideas in Surat. From rooftop proposals to candlelight setups at HIVY - Place for Celebrations." },
      { slug: "marriage-proposal-surat", title: "Marriage Proposal", h1: "Marriage Proposal Venue in Surat", metaTitle: "Marriage Proposal Surat | Perfect Venue", metaDescription: "Find the perfect marriage proposal venue in Surat. HIVY - Place for Celebrations offers private rooftop celebrations." },
      { slug: "romantic-proposal-surat", title: "Romantic Proposal", h1: "Romantic Proposal Setup in Surat", metaTitle: "Romantic Proposal Surat | Unforgettable Moment", metaDescription: "Create an unforgettable romantic proposal in Surat with candlelight and decorations at HIVY - Place for Celebrations." },
      { slug: "proposal-venues-surat", title: "Proposal Venues", h1: "Best Proposal Venues in Surat", metaTitle: "Proposal Venues Surat | Private Spaces", metaDescription: "Discover the best proposal venues in Surat for couples. HIVY - Place for Celebrations offers intimate rooftop settings." },
      { slug: "engagement-proposal-surat", title: "Engagement Proposal", h1: "Engagement Proposal Setup in Surat", metaTitle: "Engagement Proposal Surat | Ring Ceremony Setup", metaDescription: "Plan an engagement proposal in Surat with ring ceremony setup and romantic decorations at HIVY - Place for Celebrations." },
      { slug: "private-proposal-surat", title: "Private Proposal", h1: "Private Proposal Setting in Surat", metaTitle: "Private Proposal Surat | Intimate Venue", metaDescription: "Book a private proposal setting in Surat with intimate venue and beautiful decorations at HIVY - Place for Celebrations." },
      { slug: "unique-proposal-ideas-surat", title: "Unique Proposal Ideas", h1: "Unique Proposal Ideas in Surat", metaTitle: "Unique Proposal Ideas Surat | Stand Out", metaDescription: "Find unique proposal ideas in Surat to make your moment special at HIVY - Place for Celebrations rooftop." },
      { slug: "proposal-places-surat", title: "Proposal Places", h1: "Best Proposal Places in Surat", metaTitle: "Proposal Places Surat | Romantic Spots", metaDescription: "Find the best proposal places in Surat. HIVY - Place for Celebrations offers romantic rooftop settings for your big question." },
      { slug: "candlelight-proposal-surat", title: "Candlelight Proposal", h1: "Candlelight Proposal Setup in Surat", metaTitle: "Candlelight Proposal Surat | Romantic Ambiance", metaDescription: "Plan a candlelight proposal in Surat with romantic ambiance and beautiful setup at HIVY - Place for Celebrations." }
    ]
  },
  {
    slug: "candlelight-dinner",
    name: "Candlelight Dinner",
    emoji: "🕯️",
    description: "Experience romantic dining with candlelight ambiance, gourmet cuisine, and an exclusive setting designed for couples.",
    metaTitle: "Candlelight Dinner in Surat | HIVY - Place for Celebrations",
    metaDescription: "Book a romantic candlelight dinner in Surat at HIVY - Place for Celebrations. Private rooftop dining, delicious food, and intimate ambiance for couples.",
    keywords: [
      { slug: "candlelight-dinner-for-couples-surat", title: "Candlelight Dinner for Couples", h1: "Candlelight Dinner for Couples in Surat", metaTitle: "Candlelight Dinner for Couples Surat | Romantic Dining", metaDescription: "Book a romantic candlelight dinner for couples in Surat at HIVY - Place for Celebrations." },
      { slug: "romantic-dinner-surat", title: "Romantic Dinner", h1: "Romantic Dinner in Surat", metaTitle: "Romantic Dinner Surat | Perfect Evening", metaDescription: "Plan a romantic dinner in Surat with candlelight and beautiful decorations at HIVY - Place for Celebrations." },
      { slug: "candlelight-dinner-restaurants-surat", title: "Candlelight Dinner Restaurants", h1: "Best Candlelight Dinner Restaurants in Surat", metaTitle: "Candlelight Dinner Restaurants Surat | Top Picks", metaDescription: "Find the best candlelight dinner restaurants in Surat. HIVY - Place for Celebrations offers private rooftop dining." },
      { slug: "private-dinner-surat", title: "Private Dinner", h1: "Private Dinner for Couples in Surat", metaTitle: "Private Dinner Surat | Intimate Setting", metaDescription: "Book a private dinner for couples in Surat with intimate setting at HIVY - Place for Celebrations." },
      { slug: "romantic-restaurants-surat", title: "Romantic Restaurants", h1: "Best Romantic Restaurants in Surat", metaTitle: "Romantic Restaurants Surat | Couple-Friendly", metaDescription: "Discover the best romantic restaurants in Surat for couples. HIVY - Place for Celebrations offers candlelight dinners." },
      { slug: "dinner-date-surat", title: "Dinner Date", h1: "Perfect Dinner Date in Surat", metaTitle: "Dinner Date Surat | Romantic Evening", metaDescription: "Plan a perfect dinner date in Surat with romantic setup and delicious food at HIVY - Place for Celebrations." },
      { slug: "couple-dinner-surat", title: "Couple Dinner", h1: "Couple Dinner Experience in Surat", metaTitle: "Couple Dinner Surat | Special Moments", metaDescription: "Enjoy a special couple dinner experience in Surat with candlelight and music at HIVY - Place for Celebrations." },
      { slug: "candlelight-dinner-date-surat", title: "Candlelight Dinner Date", h1: "Candlelight Dinner Date in Surat", metaTitle: "Candlelight Dinner Date Surat | Romantic Night", metaDescription: "Book a candlelight dinner date in Surat for a romantic night at HIVY - Place for Celebrations rooftop." },
      { slug: "outdoor-candlelight-dinner-surat", title: "Outdoor Candlelight Dinner", h1: "Outdoor Candlelight Dinner in Surat", metaTitle: "Outdoor Candlelight Dinner Surat | Under the Stars", metaDescription: "Experience outdoor candlelight dinner in Surat under the stars at HIVY - Place for Celebrations rooftop." },
      { slug: "candlelight-dinner-packages-surat", title: "Candlelight Dinner Packages", h1: "Candlelight Dinner Packages in Surat", metaTitle: "Candlelight Dinner Packages Surat | All Inclusive", metaDescription: "Explore candlelight dinner packages in Surat with food, decorations, and music at HIVY - Place for Celebrations." },
      { slug: "candlelight-dinner-places-surat", title: "Candlelight Dinner Places", h1: "Best Candlelight Dinner Places in Surat", metaTitle: "Candlelight Dinner Places Surat | Romantic Spots", metaDescription: "Find the best candlelight dinner places in Surat. HIVY - Place for Celebrations offers private rooftop settings." },
      { slug: "special-dinner-surat", title: "Special Dinner", h1: "Special Dinner for Two in Surat", metaTitle: "Special Dinner Surat | Memorable Evening", metaDescription: "Book a special dinner for two in Surat with romantic ambiance at HIVY - Place for Celebrations." },
      { slug: "candlelight-dinner-near-me-surat", title: "Candlelight Dinner Near Me", h1: "Candlelight Dinner Near Me in Surat", metaTitle: "Candlelight Dinner Near Me Surat | Local Options", metaDescription: "Find candlelight dinner near you in Surat. HIVY - Place for Celebrations offers convenient rooftop dining." },
      { slug: "intimate-dinner-surat", title: "Intimate Dinner", h1: "Intimate Dinner Setting in Surat", metaTitle: "Intimate Dinner Surat | Private Moments", metaDescription: "Enjoy an intimate dinner setting in Surat with private ambiance at HIVY - Place for Celebrations rooftop." }
    ]
  },
  {
    slug: "surprise-date",
    name: "Surprise Date",
    emoji: "🎁",
    description: "Transform ordinary dates into extraordinary memories with surprise setups, romantic themes, and unforgettable moments.",
    metaTitle: "Surprise Date Setup in Surat | HIVY - Place for Celebrations",
    metaDescription: "Plan the perfect surprise date in Surat at HIVY - Place for Celebrations. Romantic rooftop setups, decorations, and memorable moments for couples.",
    keywords: [
      { slug: "surprise-date-for-boyfriend-surat", title: "Surprise Date for Boyfriend", h1: "Surprise Date Ideas for Boyfriend in Surat", metaTitle: "Surprise Date for Boyfriend Surat | Romantic Setup", metaDescription: "Plan a surprise date for your boyfriend in Surat with romantic setup at HIVY - Place for Celebrations." },
      { slug: "surprise-date-for-girlfriend-surat", title: "Surprise Date for Girlfriend", h1: "Surprise Date Ideas for Girlfriend in Surat", metaTitle: "Surprise Date for Girlfriend Surat | Make Her Smile", metaDescription: "Create a surprise date for your girlfriend in Surat with beautiful decorations at HIVY - Place for Celebrations." },
      { slug: "surprise-date-for-husband-surat", title: "Surprise Date for Husband", h1: "Surprise Date for Husband in Surat", metaTitle: "Surprise Date for Husband Surat | Special Evening", metaDescription: "Plan a surprise date for your husband in Surat with romantic ambiance at HIVY - Place for Celebrations." },
      { slug: "surprise-date-for-wife-surat", title: "Surprise Date for Wife", h1: "Surprise Date for Wife in Surat", metaTitle: "Surprise Date for Wife Surat | Make Her Day", metaDescription: "Create a surprise date for your wife in Surat with elegant setup at HIVY - Place for Celebrations." },
      { slug: "romantic-surprise-surat", title: "Romantic Surprise", h1: "Romantic Surprise Ideas in Surat", metaTitle: "Romantic Surprise Surat | Unforgettable Moments", metaDescription: "Plan a romantic surprise in Surat with decorations and intimate setting at HIVY - Place for Celebrations." },
      { slug: "surprise-date-ideas-surat", title: "Surprise Date Ideas", h1: "Best Surprise Date Ideas in Surat", metaTitle: "Surprise Date Ideas Surat | Creative Plans", metaDescription: "Find creative surprise date ideas in Surat. From rooftop dinners to candlelight setups at HIVY - Place for Celebrations." },
      { slug: "surprise-date-planners-surat", title: "Surprise Date Planners", h1: "Surprise Date Planners in Surat", metaTitle: "Surprise Date Planners Surat | Professional Setup", metaDescription: "Expert surprise date planners in Surat. We create perfect moments at HIVY - Place for Celebrations." },
      { slug: "surprise-date-setup-surat", title: "Surprise Date Setup", h1: "Surprise Date Setup in Surat", metaTitle: "Surprise Date Setup Surat | Beautiful Arrangements", metaDescription: "Book a surprise date setup in Surat with beautiful arrangements at HIVY - Place for Celebrations rooftop." },
      { slug: "surprise-date-places-surat", title: "Surprise Date Places", h1: "Best Surprise Date Places in Surat", metaTitle: "Surprise Date Places Surat | Romantic Venues", metaDescription: "Find the best surprise date places in Surat. HIVY - Place for Celebrations offers private rooftop celebrations." },
      { slug: "surprise-date-night-surat", title: "Surprise Date Night", h1: "Surprise Date Night in Surat", metaTitle: "Surprise Date Night Surat | Magical Evening", metaDescription: "Plan a magical surprise date night in Surat with candlelight and music at HIVY - Place for Celebrations." },
      { slug: "unique-date-ideas-surat", title: "Unique Date Ideas", h1: "Unique Date Ideas in Surat", metaTitle: "Unique Date Ideas Surat | Stand Out", metaDescription: "Find unique date ideas in Surat to make your evening special at HIVY - Place for Celebrations." },
      { slug: "special-date-surat", title: "Special Date", h1: "Special Date Setup in Surat", metaTitle: "Special Date Surat | Memorable Moments", metaDescription: "Plan a special date in Surat with romantic setup and decorations at HIVY - Place for Celebrations." },
      { slug: "couple-date-surat", title: "Couple Date", h1: "Couple Date Experience in Surat", metaTitle: "Couple Date Surat | Romantic Evening", metaDescription: "Enjoy a couple date experience in Surat with romantic ambiance at HIVY - Place for Celebrations." },
      { slug: "surprise-date-decoration-surat", title: "Surprise Date Decoration", h1: "Surprise Date Decoration in Surat", metaTitle: "Surprise Date Decoration Surat | Beautiful Setup", metaDescription: "Beautiful surprise date decoration in Surat with flowers and candles at HIVY - Place for Celebrations." }
    ]
  },
  {
    slug: "pre-wedding-shoot",
    name: "Pre-Wedding Shoot",
    emoji: "📸",
    description: "Capture your love story with stunning pre-wedding photoshoots in our beautiful rooftop and glass house settings.",
    metaTitle: "Pre-Wedding Shoot Location in Surat | HIVY - Place for Celebrations",
    metaDescription: "Book the perfect pre-wedding shoot location in Surat at HIVY - Place for Celebrations. Stunning backdrops, romantic settings, and beautiful memories.",
    keywords: [
      { slug: "pre-wedding-shoot-location-surat", title: "Pre-Wedding Shoot Location", h1: "Best Pre-Wedding Shoot Location in Surat", metaTitle: "Pre-Wedding Shoot Location Surat | Stunning Backdrops", metaDescription: "Find the best pre-wedding shoot location in Surat at HIVY - Place for Celebrations with stunning backdrops." },
      { slug: "pre-wedding-photoshoot-surat", title: "Pre-Wedding Photoshoot", h1: "Pre-Wedding Photoshoot in Surat", metaTitle: "Pre-Wedding Photoshoot Surat | Romantic Shots", metaDescription: "Book a pre-wedding photoshoot in Surat with romantic settings at HIVY - Place for Celebrations." },
      { slug: "pre-wedding-shoot-places-surat", title: "Pre-Wedding Shoot Places", h1: "Best Pre-Wedding Shoot Places in Surat", metaTitle: "Pre-Wedding Shoot Places Surat | Top Locations", metaDescription: "Discover the best pre-wedding shoot places in Surat. HIVY - Place for Celebrations offers beautiful settings." },
      { slug: "pre-wedding-shoot-ideas-surat", title: "Pre-Wedding Shoot Ideas", h1: "Pre-Wedding Shoot Ideas in Surat", metaTitle: "Pre-Wedding Shoot Ideas Surat | Creative Concepts", metaDescription: "Find creative pre-wedding shoot ideas in Surat at HIVY - Place for Celebrations with unique setups." },
      { slug: "pre-wedding-venues-surat", title: "Pre-Wedding Venues", h1: "Best Pre-Wedding Venues in Surat", metaTitle: "Pre-Wedding Venues Surat | Romantic Locations", metaDescription: "Discover the best pre-wedding venues in Surat. HIVY - Place for Celebrations offers intimate rooftop settings." },
      { slug: "couple-photoshoot-surat", title: "Couple Photoshoot", h1: "Couple Photoshoot Location in Surat", metaTitle: "Couple Photoshoot Surat | Beautiful Backdrops", metaDescription: "Book a couple photoshoot in Surat with beautiful backdrops at HIVY - Place for Celebrations." },
      { slug: "romantic-photoshoot-surat", title: "Romantic Photoshoot", h1: "Romantic Photoshoot in Surat", metaTitle: "Romantic Photoshoot Surat | Intimate Setting", metaDescription: "Plan a romantic photoshoot in Surat with intimate setting at HIVY - Place for Celebrations rooftop." },
      { slug: "pre-wedding-photography-surat", title: "Pre-Wedding Photography", h1: "Pre-Wedding Photography Location in Surat", metaTitle: "Pre-Wedding Photography Surat | Stunning Shots", metaDescription: "Find the perfect pre-wedding photography location in Surat at HIVY - Place for Celebrations." },
      { slug: "engagement-photoshoot-surat", title: "Engagement Photoshoot", h1: "Engagement Photoshoot Location in Surat", metaTitle: "Engagement Photoshoot Surat | Beautiful Venue", metaDescription: "Book an engagement photoshoot location in Surat with beautiful venue at HIVY - Place for Celebrations." },
      { slug: "pre-wedding-shoot-packages-surat", title: "Pre-Wedding Shoot Packages", h1: "Pre-Wedding Shoot Packages in Surat", metaTitle: "Pre-Wedding Shoot Packages Surat | All Inclusive", metaDescription: "Explore pre-wedding shoot packages in Surat with decorations and setup at HIVY - Place for Celebrations." },
      { slug: "indoor-pre-wedding-shoot-surat", title: "Indoor Pre-Wedding Shoot", h1: "Indoor Pre-Wedding Shoot in Surat", metaTitle: "Indoor Pre-Wedding Shoot Surat | Glass House", metaDescription: "Experience indoor pre-wedding shoot in Surat at HIVY - Place for Celebrations glass house." },
      { slug: "night-pre-wedding-shoot-surat", title: "Night Pre-Wedding Shoot", h1: "Night Pre-Wedding Shoot in Surat", metaTitle: "Night Pre-Wedding Shoot Surat | Candlelight", metaDescription: "Plan a night pre-wedding shoot in Surat with candlelight at HIVY - Place for Celebrations rooftop." },
      { slug: "candlelight-pre-wedding-shoot-surat", title: "Candlelight Pre-Wedding Shoot", h1: "Candlelight Pre-Wedding Shoot in Surat", metaTitle: "Candlelight Pre-Wedding Shoot Surat | Romantic", metaDescription: "Capture romantic candlelight pre-wedding shoot in Surat at HIVY - Place for Celebrations." },
      { slug: "unique-pre-wedding-shoot-surat", title: "Unique Pre-Wedding Shoot", h1: "Unique Pre-Wedding Shoot Ideas in Surat", metaTitle: "Unique Pre-Wedding Shoot Surat | Creative Setup", metaDescription: "Find unique pre-wedding shoot ideas in Surat with creative setups at HIVY - Place for Celebrations." }
    ]
  },
  {
    slug: "baby-moments",
    name: "Baby Moments",
    emoji: "👶",
    description: "Celebrate pregnancy announcements, baby showers, and special baby moments with beautiful decorations and intimate settings.",
    metaTitle: "Baby Moments Celebration in Surat | HIVY - Place for Celebrations",
    metaDescription: "Celebrate baby moments in Surat at HIVY - Place for Celebrations. Pregnancy announcements, baby showers, and special celebrations with beautiful decorations.",
    keywords: [
      { slug: "pregnancy-announcement-surat", title: "Pregnancy Announcement", h1: "Pregnancy Announcement Celebration in Surat", metaTitle: "Pregnancy Announcement Surat | Special Celebration", metaDescription: "Plan a special pregnancy announcement celebration in Surat at HIVY - Place for Celebrations." },
      { slug: "baby-shower-venue-surat", title: "Baby Shower Venue", h1: "Best Baby Shower Venue in Surat", metaTitle: "Baby Shower Venue Surat | Private Space", metaDescription: "Find the best baby shower venue in Surat at HIVY - Place for Celebrations with private space." },
      { slug: "pregnancy-reveal-surat", title: "Pregnancy Reveal", h1: "Pregnancy Reveal Party in Surat", metaTitle: "Pregnancy Reveal Surat | Surprise Setup", metaDescription: "Plan a pregnancy reveal party in Surat with surprise setup at HIVY - Place for Celebrations." },
      { slug: "baby-announcement-party-surat", title: "Baby Announcement Party", h1: "Baby Announcement Party in Surat", metaTitle: "Baby Announcement Party Surat | Celebration", metaDescription: "Host a baby announcement party in Surat with beautiful decorations at HIVY - Place for Celebrations." },
      { slug: "expecting-celebration-surat", title: "Expecting Celebration", h1: "Expecting Baby Celebration in Surat", metaTitle: "Expecting Celebration Surat | Joyful Moments", metaDescription: "Celebrate expecting a baby in Surat with joyful decorations at HIVY - Place for Celebrations." },
      { slug: "maternity-photoshoot-surat", title: "Maternity Photoshoot", h1: "Maternity Photoshoot Location in Surat", metaTitle: "Maternity Photoshoot Surat | Beautiful Backdrop", metaDescription: "Book a maternity photoshoot location in Surat with beautiful backdrop at HIVY - Place for Celebrations." },
      { slug: "gender-reveal-party-surat", title: "Gender Reveal Party", h1: "Gender Reveal Party in Surat", metaTitle: "Gender Reveal Party Surat | Boy or Girl", metaDescription: "Plan a gender reveal party in Surat with exciting setup at HIVY - Place for Celebrations." },
      { slug: "baby-shower-decoration-surat", title: "Baby Shower Decoration", h1: "Baby Shower Decoration in Surat", metaTitle: "Baby Shower Decoration Surat | Beautiful Setup", metaDescription: "Beautiful baby shower decoration in Surat with balloons and flowers at HIVY - Place for Celebrations." },
      { slug: "pregnancy-celebration-surat", title: "Pregnancy Celebration", h1: "Pregnancy Celebration in Surat", metaTitle: "Pregnancy Celebration Surat | Special Moments", metaDescription: "Plan a pregnancy celebration in Surat with special moments at HIVY - Place for Celebrations." },
      { slug: "baby-moments-photoshoot-surat", title: "Baby Moments Photoshoot", h1: "Baby Moments Photoshoot in Surat", metaTitle: "Baby Moments Photoshoot Surat | Capture Joy", metaDescription: "Capture baby moments with photoshoot in Surat at HIVY - Place for Celebrations." },
      { slug: "couple-pregnancy-announcement-surat", title: "Couple Pregnancy Announcement", h1: "Couple Pregnancy Announcement in Surat", metaTitle: "Couple Pregnancy Announcement Surat | Together", metaDescription: "Plan a couple pregnancy announcement in Surat with romantic setup at HIVY - Place for Celebrations." },
      { slug: "godh-bharai-venue-surat", title: "Godh Bharai Venue", h1: "Godh Bharai Venue in Surat", metaTitle: "Godh Bharai Venue Surat | Traditional Setup", metaDescription: "Find the perfect godh bharai venue in Surat at HIVY - Place for Celebrations." },
      { slug: "baby-shower-places-surat", title: "Baby Shower Places", h1: "Best Baby Shower Places in Surat", metaTitle: "Baby Shower Places Surat | Top Venues", metaDescription: "Discover the best baby shower places in Surat. HIVY - Place for Celebrations offers intimate settings." },
      { slug: "pregnancy-photoshoot-surat", title: "Pregnancy Photoshoot", h1: "Pregnancy Photoshoot Location in Surat", metaTitle: "Pregnancy Photoshoot Surat | Beautiful Shots", metaDescription: "Book a pregnancy photoshoot location in Surat at HIVY - Place for Celebrations." },
      { slug: "baby-bump-photoshoot-surat", title: "Baby Bump Photoshoot", h1: "Baby Bump Photoshoot in Surat", metaTitle: "Baby Bump Photoshoot Surat | Capture Glow", metaDescription: "Capture the glow with baby bump photoshoot in Surat at HIVY - Place for Celebrations." }
    ]
  },
  {
    slug: "valentines-week",
    name: "Valentine's Week",
    emoji: "💝",
    description: "Celebrate Valentine's Week with romantic experiences from Rose Day to Valentine's Day at HIVY - Place for Celebrations.",
    metaTitle: "Valentine's Week Celebration in Surat | HIVY - Place for Celebrations",
    metaDescription: "Celebrate Valentine's Week 2026 in Surat at HIVY - Place for Celebrations. Rose Day, Propose Day, Hug Day, Kiss Day & Valentine's Day special romantic packages.",
    keywords: [
      { slug: "valentines-day-celebration-surat", title: "Valentine's Day Celebration", h1: "Valentine's Day Celebration in Surat 2026", metaTitle: "Valentine's Day Celebration Surat 2026 | Romantic Date", metaDescription: "Plan the perfect Valentine's Day celebration in Surat 2026. Romantic candlelight dinner, decorations & private venue at HIVY - Place for Celebrations." },
      { slug: "rose-day-celebration-surat", title: "Rose Day Celebration", h1: "Rose Day Celebration in Surat (Feb 7)", metaTitle: "Rose Day Celebration Surat 2026 | February 7th", metaDescription: "Celebrate Rose Day in Surat on February 7th with your partner. Rose decorations, romantic ambiance at HIVY - Place for Celebrations." },
      { slug: "propose-day-celebration-surat", title: "Propose Day Celebration", h1: "Propose Day Celebration in Surat (Feb 8)", metaTitle: "Propose Day Celebration Surat 2026 | February 8th", metaDescription: "Make Propose Day special in Surat on February 8th. Romantic proposal setup with decorations at HIVY - Place for Celebrations." },
      { slug: "chocolate-day-celebration-surat", title: "Chocolate Day Celebration", h1: "Chocolate Day Celebration in Surat (Feb 9)", metaTitle: "Chocolate Day Celebration Surat 2026 | February 9th", metaDescription: "Celebrate Chocolate Day in Surat on February 9th with sweet treats and romantic dinner at HIVY - Place for Celebrations." },
      { slug: "teddy-day-celebration-surat", title: "Teddy Day Celebration", h1: "Teddy Day Celebration in Surat (Feb 10)", metaTitle: "Teddy Day Celebration Surat 2026 | February 10th", metaDescription: "Cute Teddy Day celebration in Surat on February 10th with teddy decorations at HIVY - Place for Celebrations." },
      { slug: "promise-day-celebration-surat", title: "Promise Day Celebration", h1: "Promise Day Celebration in Surat (Feb 11)", metaTitle: "Promise Day Celebration Surat 2026 | February 11th", metaDescription: "Celebrate Promise Day in Surat on February 11th with meaningful moments at HIVY - Place for Celebrations." },
      { slug: "hug-day-celebration-surat", title: "Hug Day Celebration", h1: "Hug Day Celebration in Surat (Feb 12)", metaTitle: "Hug Day Celebration Surat 2026 | February 12th", metaDescription: "Cozy Hug Day celebration in Surat on February 12th with warm ambiance at HIVY - Place for Celebrations." },
      { slug: "kiss-day-celebration-surat", title: "Kiss Day Celebration", h1: "Kiss Day Celebration in Surat (Feb 13)", metaTitle: "Kiss Day Celebration Surat 2026 | February 13th", metaDescription: "Romantic Kiss Day celebration in Surat on February 13th with intimate setup at HIVY - Place for Celebrations." },
      { slug: "valentines-dinner-surat", title: "Valentine's Dinner", h1: "Valentine's Day Dinner in Surat 2026", metaTitle: "Valentine's Day Dinner Surat 2026 | Romantic Restaurant", metaDescription: "Book romantic Valentine's Day dinner in Surat 2026. Candlelight dinner with special menu at HIVY - Place for Celebrations." },
      { slug: "valentines-week-packages-surat", title: "Valentine's Week Packages", h1: "Valentine's Week Packages in Surat 2026", metaTitle: "Valentine's Week Packages Surat 2026 | All 7 Days", metaDescription: "Special Valentine's Week packages in Surat 2026 for all 7 days. Rose Day to Valentine's Day celebrations at HIVY - Place for Celebrations." },
      { slug: "valentines-date-surat", title: "Valentine's Date", h1: "Valentine's Day Date in Surat 2026", metaTitle: "Valentine's Day Date Surat 2026 | Perfect Evening", metaDescription: "Plan the perfect Valentine's Day date in Surat 2026. Romantic rooftop dinner at HIVY - Place for Celebrations." },
      { slug: "valentines-surprise-surat", title: "Valentine's Surprise", h1: "Valentine's Day Surprise in Surat 2026", metaTitle: "Valentine's Day Surprise Surat 2026 | Surprise Your Love", metaDescription: "Plan a Valentine's Day surprise in Surat 2026 with decorations and special setup at HIVY - Place for Celebrations." },
      { slug: "valentines-decoration-surat", title: "Valentine's Decoration", h1: "Valentine's Day Decoration in Surat 2026", metaTitle: "Valentine's Day Decoration Surat 2026 | Romantic Setup", metaDescription: "Beautiful Valentine's Day decoration in Surat 2026 with hearts, roses, and candles at HIVY - Place for Celebrations." },
      { slug: "valentines-candlelight-dinner-surat", title: "Valentine's Candlelight Dinner", h1: "Valentine's Day Candlelight Dinner in Surat 2026", metaTitle: "Valentine's Candlelight Dinner Surat 2026 | Private Venue", metaDescription: "Romantic Valentine's Day candlelight dinner in Surat 2026. Private rooftop venue at HIVY - Place for Celebrations." },
      { slug: "valentines-special-surat", title: "Valentine's Special", h1: "Valentine's Day Special Celebration in Surat 2026", metaTitle: "Valentine's Day Special Surat 2026 | Unforgettable", metaDescription: "Experience Valentine's Day special celebration in Surat 2026 with romantic packages at HIVY - Place for Celebrations." }
    ]
  }
];

// ==================== SURAT AREAS ====================
export const suratAreas: AreaConfig[] = [
  { slug: "adajan-surat", name: "Adajan" },
  { slug: "athwa-surat", name: "Athwa" },
  { slug: "vesu-surat", name: "Vesu" },
  { slug: "piplod-surat", name: "Piplod" },
  { slug: "city-light-surat", name: "City Light" },
  { slug: "pal-surat", name: "Pal" },
  { slug: "ghod-dod-road-surat", name: "Ghod Dod Road" },
  { slug: "ring-road-surat", name: "Ring Road" },
  { slug: "vip-road-surat", name: "VIP Road" },
  { slug: "dumas-road-surat", name: "Dumas Road" },
  { slug: "katargam-surat", name: "Katargam" },
  { slug: "varachha-surat", name: "Varachha" },
  { slug: "udhna-surat", name: "Udhna" },
  { slug: "pandesara-surat", name: "Pandesara" },
  { slug: "sachin-surat", name: "Sachin" },
  { slug: "sarthana-surat", name: "Sarthana" },
  { slug: "magdalla-surat", name: "Magdalla" },
  { slug: "althan-surat", name: "Althan" },
  { slug: "bhatar-surat", name: "Bhatar" },
  { slug: "rander-surat", name: "Rander" },
  { slug: "jahangirpura-surat", name: "Jahangirpura" },
  { slug: "hajira-surat", name: "Hajira" },
  { slug: "olpad-surat", name: "Olpad" },
  { slug: "kadodara-surat", name: "Kadodara" },
  { slug: "kim-surat", name: "Kim" },
  { slug: "amroli-surat", name: "Amroli" },
  { slug: "limbayat-surat", name: "Limbayat" },
  { slug: "kapodra-surat", name: "Kapodra" },
  { slug: "bamroli-surat", name: "Bamroli" },
  { slug: "parvat-patiya-surat", name: "Parvat Patiya" },
  { slug: "majura-gate-surat", name: "Majura Gate" },
  { slug: "nanpura-surat", name: "Nanpura" },
  { slug: "gopipura-surat", name: "Gopipura" },
  { slug: "begumpura-surat", name: "Begumpura" },
  { slug: "mahidharpura-surat", name: "Mahidharpura" },
  { slug: "sagrampura-surat", name: "Sagrampura" },
  { slug: "dindoli-surat", name: "Dindoli" },
  { slug: "mota-varachha-surat", name: "Mota Varachha" },
  { slug: "new-city-light-surat", name: "New City Light" },
  { slug: "parle-point-surat", name: "Parle Point" }
];

// Helper functions
export function getPackageBySlug(slug: string): SetupPackage | undefined {
  return packages.find(p => p.slug === slug);
}

export function getServiceBySlug(slug: string): ServiceCategory | undefined {
  return serviceCategories.find(s => s.slug === slug);
}

export function getKeywordBySlug(serviceSlug: string, keywordSlug: string): ServiceKeyword | undefined {
  const service = getServiceBySlug(serviceSlug);
  return service?.keywords.find(k => k.slug === keywordSlug);
}

export function getAreaBySlug(slug: string): AreaConfig | undefined {
  return suratAreas.find(a => a.slug === slug);
}

export function formatPrice(price: number): string {
  return `₹${price.toLocaleString('en-IN')}.00`;
}

// ==================== BLOG POSTS ====================
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  coverImage: string;
  publishedAt: string;
  readTime: string;
  category: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "top-10-birthday-surprise-ideas-surat",
    title: "Top 10 Birthday Surprise Ideas in Surat",
    excerpt: "Discover creative and romantic birthday surprise ideas to make your loved one's special day unforgettable in Surat.",
    metaTitle: "Top 10 Birthday Surprise Ideas in Surat 2026 | Best Ideas",
    metaDescription: "Looking for birthday surprise ideas in Surat? Discover 10 creative ways to surprise your partner, from rooftop dinners to midnight celebrations.",
    coverImage: "/images/gallery/romantic-rooftop-candlelight-dinner-surat-1.jpg",
    publishedAt: "2026-01-15",
    readTime: "5 min",
    category: "Birthday",
    tags: ["birthday", "surprise", "surat", "celebration"]
  },
  {
    slug: "how-to-plan-perfect-proposal-surat",
    title: "How to Plan a Perfect Proposal in Surat",
    excerpt: "A complete guide to planning a romantic and memorable marriage proposal in Surat that she'll never forget.",
    metaTitle: "How to Plan a Perfect Proposal in Surat | Complete Guide",
    metaDescription: "Planning to propose in Surat? Learn how to plan the perfect proposal with our step-by-step guide. Best locations, timing & decoration ideas.",
    coverImage: "/images/gallery/romantic-table-decoration-surat-1.jpg",
    publishedAt: "2026-01-12",
    readTime: "7 min",
    category: "Proposal",
    tags: ["proposal", "engagement", "romantic", "surat"]
  },
  {
    slug: "best-candlelight-dinner-spots-surat",
    title: "Best Candlelight Dinner Spots in Surat 2026",
    excerpt: "Explore the most romantic candlelight dinner restaurants and cafes in Surat for an unforgettable date night.",
    metaTitle: "Best Candlelight Dinner Spots in Surat 2026 | Top Picks",
    metaDescription: "Find the best candlelight dinner spots in Surat. Romantic restaurants, rooftop cafes & private dining options for couples.",
    coverImage: "/images/gallery/birthday-balloon-decoration-surat-1.jpg",
    publishedAt: "2026-01-10",
    readTime: "6 min",
    category: "Date Night",
    tags: ["candlelight dinner", "romantic", "restaurants", "surat"]
  },
  {
    slug: "anniversary-celebration-ideas-couples",
    title: "Anniversary Celebration Ideas for Couples in Surat",
    excerpt: "Creative and romantic ways to celebrate your wedding anniversary in Surat and make it truly special.",
    metaTitle: "Anniversary Celebration Ideas Surat | Romantic Ideas",
    metaDescription: "Looking for anniversary celebration ideas in Surat? From intimate dinners to surprise parties, discover the best ways to celebrate your love.",
    coverImage: "/images/gallery/anniversary-dinner-setup-surat-1.jpg",
    publishedAt: "2026-01-08",
    readTime: "6 min",
    category: "Anniversary",
    tags: ["anniversary", "couples", "celebration", "surat"]
  },
  {
    slug: "romantic-date-night-ideas-surat",
    title: "Romantic Date Night Ideas in Surat",
    excerpt: "Spice up your relationship with these creative and romantic date night ideas perfect for Surat couples.",
    metaTitle: "Romantic Date Night Ideas in Surat 2026 | Best Dates",
    metaDescription: "Need date night inspiration in Surat? Discover romantic ideas from rooftop dinners to stargazing experiences for couples.",
    coverImage: "/images/gallery/romantic-ambiance-cafe-surat-1.jpg",
    publishedAt: "2026-01-05",
    readTime: "5 min",
    category: "Date Night",
    tags: ["date night", "romantic", "couples", "surat"]
  },
  {
    slug: "best-rooftop-restaurants-surat-couples",
    title: "Best Rooftop Restaurants in Surat for Couples",
    excerpt: "Discover the most romantic rooftop restaurants in Surat perfect for date nights and special celebrations.",
    metaTitle: "Best Rooftop Restaurants in Surat for Couples 2026",
    metaDescription: "Looking for rooftop restaurants in Surat? Find the best sky-high dining spots for romantic dinners and couple celebrations.",
    coverImage: "/images/gallery/couple-celebration-surat-1.jpg",
    publishedAt: "2026-01-03",
    readTime: "5 min",
    category: "Restaurants",
    tags: ["rooftop", "restaurants", "couples", "surat"]
  },
  {
    slug: "surprise-birthday-party-wife-guide",
    title: "How to Plan a Surprise Birthday Party for Your Wife",
    excerpt: "A complete guide to planning the perfect surprise birthday party that will make your wife feel truly special.",
    metaTitle: "Surprise Birthday Party for Wife | Complete Planning Guide",
    metaDescription: "Want to surprise your wife on her birthday? Learn how to plan a memorable surprise party with decorations, cake & romantic setup.",
    coverImage: "/images/gallery/evening-romantic-celebration-surat-1.jpg",
    publishedAt: "2025-12-28",
    readTime: "8 min",
    category: "Birthday",
    tags: ["birthday", "wife", "surprise party", "planning"]
  },
  {
    slug: "creative-anniversary-gift-ideas-experiences",
    title: "Creative Anniversary Gift Ideas: Experience Over Things",
    excerpt: "Why experience gifts make the best anniversary presents and how to create lasting memories together.",
    metaTitle: "Anniversary Gift Ideas | Why Experiences Beat Material Gifts",
    metaDescription: "Looking for unique anniversary gifts? Discover why experience gifts like romantic dinners create better memories than material presents.",
    coverImage: "/images/gallery/glass-house-dinner-surat-1.jpg",
    publishedAt: "2025-12-25",
    readTime: "5 min",
    category: "Anniversary",
    tags: ["anniversary", "gifts", "experiences", "couples"]
  },
  {
    slug: "pre-wedding-photoshoot-locations-surat",
    title: "Best Pre-Wedding Photoshoot Locations in Surat",
    excerpt: "Stunning pre-wedding photoshoot locations in Surat including rooftops, gardens, and heritage sites.",
    metaTitle: "Best Pre-Wedding Photoshoot Locations Surat 2026",
    metaDescription: "Planning your pre-wedding shoot in Surat? Discover the best locations from rooftops to heritage sites for stunning photos.",
    coverImage: "/images/gallery/rooftop-romantic-setup-surat-1.jpg",
    publishedAt: "2025-12-22",
    readTime: "6 min",
    category: "Pre-Wedding",
    tags: ["pre-wedding", "photoshoot", "locations", "surat"]
  },
  {
    slug: "baby-shower-planning-guide-surat",
    title: "Baby Shower Planning Guide for Surat Moms",
    excerpt: "Everything you need to know about planning the perfect baby shower in Surat, from venues to themes.",
    metaTitle: "Baby Shower Planning Guide Surat | Complete Checklist",
    metaDescription: "Planning a baby shower in Surat? Get our complete guide with venue ideas, themes, decorations & checklist for a perfect celebration.",
    coverImage: "/images/gallery/night-romantic-setup-surat-1.jpg",
    publishedAt: "2025-12-20",
    readTime: "7 min",
    category: "Baby Shower",
    tags: ["baby shower", "planning", "surat", "celebration"]
  },
  {
    slug: "valentines-day-date-ideas-surat",
    title: "Valentine's Day Date Ideas in Surat",
    excerpt: "Make Valentine's Day special with these romantic date ideas perfect for couples in Surat.",
    metaTitle: "Valentine's Day Date Ideas Surat 2026 | Romantic Plans",
    metaDescription: "Looking for Valentine's Day ideas in Surat? Discover romantic date plans from candlelight dinners to rooftop surprises.",
    coverImage: "/images/gallery/proposal-setup-surat-1.jpg",
    publishedAt: "2025-12-18",
    readTime: "5 min",
    category: "Valentine's Day",
    tags: ["valentines day", "date ideas", "romantic", "surat"]
  },
  {
    slug: "corporate-team-lunch-ideas-surat",
    title: "How to Organize a Corporate Team Lunch in Surat",
    excerpt: "Tips and venue ideas for organizing successful corporate team lunches and office celebrations in Surat.",
    metaTitle: "Corporate Team Lunch Surat | Venue & Planning Guide",
    metaDescription: "Planning a corporate team lunch in Surat? Find the best venues and get tips for organizing a successful office gathering.",
    coverImage: "/images/gallery/day-celebration-surat-1.jpg",
    publishedAt: "2025-12-15",
    readTime: "5 min",
    category: "Corporate",
    tags: ["corporate", "team lunch", "office party", "surat"]
  },
  {
    slug: "kitty-party-ideas-venues-surat",
    title: "Kitty Party Ideas and Venues in Surat",
    excerpt: "Fun kitty party themes, games, and the best venues in Surat for your ladies' get-together.",
    metaTitle: "Kitty Party Ideas & Venues Surat 2026 | Best Places",
    metaDescription: "Planning a kitty party in Surat? Discover fun themes, games, and the best venues for your next ladies' gathering.",
    coverImage: "/images/gallery/surprise-party-surat-1.jpg",
    publishedAt: "2025-12-12",
    readTime: "6 min",
    category: "Kitty Party",
    tags: ["kitty party", "venues", "ladies", "surat"]
  },
  {
    slug: "private-dining-experiences-surat",
    title: "Best Places for Private Dining in Surat",
    excerpt: "Exclusive private dining venues in Surat for intimate celebrations and special occasions.",
    metaTitle: "Private Dining Surat | Exclusive Restaurant Experiences",
    metaDescription: "Looking for private dining in Surat? Discover exclusive venues for intimate dinners, proposals & special celebrations.",
    coverImage: "/images/gallery/romantic-dinner-date-surat-1.jpg",
    publishedAt: "2025-12-10",
    readTime: "5 min",
    category: "Dining",
    tags: ["private dining", "exclusive", "restaurants", "surat"]
  },
  {
    slug: "memorable-farewell-party-planning",
    title: "How to Plan a Memorable Farewell Party",
    excerpt: "Create lasting memories with our guide to planning the perfect farewell party for colleagues or friends.",
    metaTitle: "Farewell Party Planning Guide | Memorable Send-Off Ideas",
    metaDescription: "Planning a farewell party? Learn how to organize a memorable send-off with venue ideas, activities & emotional touches.",
    coverImage: "/images/gallery/valentines-day-celebration-surat-1.jpg",
    publishedAt: "2025-12-08",
    readTime: "6 min",
    category: "Farewell",
    tags: ["farewell", "party planning", "office", "celebration"]
  },
  {
    slug: "birthday-decoration-ideas-budget",
    title: "Birthday Party Decoration Ideas on a Budget",
    excerpt: "Creative and affordable birthday decoration ideas that look expensive but won't break the bank.",
    metaTitle: "Budget Birthday Decoration Ideas | Affordable Party Decor",
    metaDescription: "Want stunning birthday decorations on a budget? Discover creative DIY ideas and affordable decoration tips for memorable parties.",
    coverImage: "/images/gallery/valentines-dinner-surat-1.jpg",
    publishedAt: "2025-12-05",
    readTime: "5 min",
    category: "Birthday",
    tags: ["birthday", "decoration", "budget", "diy"]
  },
  {
    slug: "romantic-proposal-ideas-say-yes",
    title: "Romantic Proposal Ideas That Will Make Her Say Yes",
    excerpt: "Creative and heartfelt proposal ideas that are sure to get a 'YES!' from your special someone.",
    metaTitle: "Romantic Proposal Ideas | Creative Ways to Propose",
    metaDescription: "Looking for proposal inspiration? Discover romantic and creative proposal ideas guaranteed to make her say yes.",
    coverImage: "/images/gallery/valentines-romantic-setup-surat-1.jpg",
    publishedAt: "2025-12-02",
    readTime: "7 min",
    category: "Proposal",
    tags: ["proposal", "romantic", "engagement", "ideas"]
  },
  {
    slug: "gender-reveal-party-ideas-surat",
    title: "Gender Reveal Party Ideas in Surat",
    excerpt: "Creative and exciting gender reveal party ideas to announce your baby's gender in style.",
    metaTitle: "Gender Reveal Party Ideas Surat | Creative Announcements",
    metaDescription: "Planning a gender reveal party in Surat? Discover creative reveal ideas, decorations & venues for the big announcement.",
    coverImage: "/images/gallery/birthday-surprise-for-girlfriend-surat-1.jpg",
    publishedAt: "2025-11-28",
    readTime: "6 min",
    category: "Baby",
    tags: ["gender reveal", "baby", "party", "surat"]
  },
  {
    slug: "best-anniversary-restaurants-surat",
    title: "Best Anniversary Restaurants in Surat",
    excerpt: "Top restaurants in Surat perfect for celebrating your wedding anniversary with your partner.",
    metaTitle: "Best Anniversary Restaurants Surat 2026 | Top Picks",
    metaDescription: "Celebrating your anniversary in Surat? Find the best restaurants for romantic anniversary dinners with your partner.",
    coverImage: "/images/gallery/birthday-surprise-for-boyfriend-surat-1.jpg",
    publishedAt: "2025-11-25",
    readTime: "5 min",
    category: "Anniversary",
    tags: ["anniversary", "restaurants", "romantic", "surat"]
  },
  {
    slug: "surprise-date-night-planning-guide",
    title: "How to Plan a Surprise Date Night",
    excerpt: "Step-by-step guide to planning a romantic surprise date night that your partner will love.",
    metaTitle: "Surprise Date Night Planning | Complete Guide for Couples",
    metaDescription: "Want to surprise your partner with a romantic date night? Get our complete planning guide with ideas, tips & checklist.",
    coverImage: "/images/gallery/birthday-room-decoration-surat-1.jpg",
    publishedAt: "2025-11-22",
    readTime: "6 min",
    category: "Date Night",
    tags: ["date night", "surprise", "romantic", "planning"]
  },
  {
    slug: "maternity-photoshoot-ideas-surat",
    title: "Maternity Photoshoot Ideas for Expecting Mothers",
    excerpt: "Beautiful maternity photoshoot ideas and locations in Surat to capture your pregnancy journey.",
    metaTitle: "Maternity Photoshoot Ideas Surat | Pregnancy Photos",
    metaDescription: "Planning a maternity photoshoot in Surat? Discover poses, outfits & location ideas for stunning pregnancy photos.",
    coverImage: "/images/gallery/couple-birthday-party-surat-1.jpg",
    publishedAt: "2025-11-18",
    readTime: "6 min",
    category: "Maternity",
    tags: ["maternity", "photoshoot", "pregnancy", "surat"]
  },
  {
    slug: "bachelor-bachelorette-party-ideas-surat",
    title: "Bachelor and Bachelorette Party Ideas in Surat",
    excerpt: "Fun and memorable bachelor/bachelorette party ideas and venues for the bride and groom-to-be.",
    metaTitle: "Bachelor & Bachelorette Party Ideas Surat 2026",
    metaDescription: "Planning a bachelor or bachelorette party in Surat? Discover fun ideas, themes & venues for an unforgettable celebration.",
    coverImage: "/images/gallery/pre-wedding-photoshoot-surat-1.jpg",
    publishedAt: "2025-11-15",
    readTime: "7 min",
    category: "Pre-Wedding",
    tags: ["bachelor party", "bachelorette", "pre-wedding", "surat"]
  },
  {
    slug: "new-year-celebration-ideas-surat",
    title: "Best Places to Celebrate New Year in Surat",
    excerpt: "Top venues and ideas for celebrating New Year's Eve in Surat with your loved ones.",
    metaTitle: "New Year Celebration Surat 2026 | Best Places & Ideas",
    metaDescription: "Looking for New Year celebration venues in Surat? Find the best places to ring in the new year with parties & dinners.",
    coverImage: "/images/gallery/pre-wedding-shoot-surat-1.jpg",
    publishedAt: "2025-11-12",
    readTime: "5 min",
    category: "New Year",
    tags: ["new year", "celebration", "venues", "surat"]
  },
  {
    slug: "couple-photoshoot-locations-surat",
    title: "Couple Photoshoot Locations in Surat",
    excerpt: "Romantic and scenic locations in Surat perfect for couple photoshoots and engagement shoots.",
    metaTitle: "Couple Photoshoot Locations Surat | Romantic Spots",
    metaDescription: "Planning a couple photoshoot in Surat? Discover the most romantic locations for stunning couple photos.",
    coverImage: "/images/gallery/candlelight-dinner-for-couples-surat-1.jpg",
    publishedAt: "2025-11-08",
    readTime: "6 min",
    category: "Photoshoot",
    tags: ["couple", "photoshoot", "locations", "surat"]
  },
  {
    slug: "intimate-wedding-planning-guide",
    title: "Intimate Wedding Planning Guide for Surat Couples",
    excerpt: "Everything you need to know about planning a beautiful small wedding in Surat.",
    metaTitle: "Intimate Wedding Planning Surat | Small Wedding Guide",
    metaDescription: "Planning an intimate wedding in Surat? Get our complete guide with venue ideas, tips & checklist for a perfect small wedding.",
    coverImage: "/images/gallery/rooftop-dinner-surat-1.jpg",
    publishedAt: "2025-11-05",
    readTime: "8 min",
    category: "Wedding",
    tags: ["wedding", "intimate", "small wedding", "surat"]
  }
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(b => b.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getBlogsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(b => b.category === category);
}
