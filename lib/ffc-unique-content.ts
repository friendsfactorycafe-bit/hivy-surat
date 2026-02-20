/**
 * FFC UNIQUE CONTENT GENERATOR V2
 * Creates truly unique, SEO-optimized 2000+ word content for each page
 * - Each keyword gets completely different content structure
 * - Keywords/Area names mentioned 15+ times naturally throughout content
 * - Unique opening paragraphs, sections, and CTAs per page
 */

import { ServiceCategory, ServiceKeyword, AreaConfig, packages, siteConfig, suratAreas } from './ffc-config';

// ==================== CONTENT INTERFACES ====================

export interface FFCKeywordContent {
  introduction: string;
  sections: FFCContentSection[];
  whyChooseUs: string[];
  process: { step: string; description: string }[];
  testimonialContent: string;
  pricingIntro: string;
  faqContent: { question: string; answer: string }[];
  closingCta: string;
}

export interface FFCContentSection {
  heading: string;
  content: string;
}

export interface FFCAreaContent {
  introduction: string;
  sections: FFCContentSection[];
  localTips: string[];
  servicesList: string[];
  nearbyAreas: string;
  testimonialContent: string;
  faqContent: { question: string; answer: string }[];
  closingCta: string;
}

// ==================== UNIQUE CONTENT VARIATIONS ====================

// Different opening styles for variety
const openingStyles = [
  (kw: string, city: string, venue: string) => `Dreams of a perfect ${kw.toLowerCase()} in ${city}? Your search ends here! ${venue} has been transforming ordinary celebrations into extraordinary memories since 2019. Every couple deserves a celebration that reflects their unique love story, and our dedicated team specializes in creating exactly that – personalized, magical ${kw.toLowerCase()} experiences that leave lasting impressions.`,
  
  (kw: string, city: string, venue: string) => `Picture this: the city lights of ${city} twinkling below, soft music playing, and your partner's eyes sparkling with joy. This is what a ${kw.toLowerCase()} at ${venue} looks like. We've spent years perfecting the art of romantic celebrations, and Our venue has become the most sought-after destination for couples seeking unforgettable ${kw.toLowerCase()} moments.`,
  
  (kw: string, city: string, venue: string) => `In the heart of ${city}, where modern romance meets traditional warmth, ${venue} stands as a beacon for couples seeking extraordinary celebrations. Our ${kw.toLowerCase()} services have earned us the trust of over 3,000 happy couples, each with their own unique story of love celebrated under our starlit private venue.`,
  
  (kw: string, city: string, venue: string) => `When love calls for celebration, ${venue} answers with perfection. Located in the vibrant city of ${city}, we've established ourselves as the premier destination for ${kw.toLowerCase()} experiences. From the moment you step into our venue to the final goodbye, every detail is crafted to make your ${kw.toLowerCase()} absolutely magical.`,
  
  (kw: string, city: string, venue: string) => `${city}'s most romantic destination awaits you! ${venue} isn't just a venue – it's where love stories get their most beautiful chapters written. Our expertise in ${kw.toLowerCase()} celebrations has made us the first choice for couples who refuse to settle for ordinary when extraordinary is within reach.`,
  
  (kw: string, city: string, venue: string) => `Imagine a celebration so perfect that it feels like a dream. That's the ${kw.toLowerCase()} experience at ${venue}, ${city}'s premier romantic venue. We believe every couple's love deserves to be celebrated in style, which is why we've created packages that transform special moments into treasured memories.`,
  
  (kw: string, city: string, venue: string) => `Love deserves to be celebrated grandly, and ${venue} makes it happen! Nestled in ${city}, our venue has become synonymous with romance, elegance, and unforgettable ${kw.toLowerCase()} experiences. Whether you're planning a surprise or celebrating together, we ensure every moment is picture-perfect.`,
  
  (kw: string, city: string, venue: string) => `Welcome to ${venue} – where ${city}'s most beautiful love stories unfold! Our passion for creating perfect ${kw.toLowerCase()} celebrations has made us the city's favorite romantic destination. With stunning views, impeccable service, and attention to every detail, we turn your dreams into reality.`
];

// Different section structures for variety
const sectionVariations = {
  // For boyfriend/girlfriend keywords
  forPartner: (kw: string, target: string, venue: string) => [
    {
      heading: `Making Your ${target}'s Day Unforgettable`,
      content: `Planning a ${kw.toLowerCase()} requires understanding what truly makes your ${target.toLowerCase()} feel special. At ${venue}, we've helped thousands of partners create magical moments, and we know that personalization is key.

**Understanding Their Love Language**: Does your ${target.toLowerCase()} appreciate grand gestures or intimate moments? Our team helps you design a ${kw.toLowerCase()} that speaks directly to their heart. Whether it's a room full of their favorite flowers or a quiet candlelit dinner, we customize everything.

**The Element of Surprise**: For those planning a surprise ${kw.toLowerCase()}, we've perfected the art of coordination. From helping you sneak in decorations to creating believable alibis, our team becomes your partner in planning. We've successfully executed over 500 surprise celebrations!

**Personal Touches That Matter**: Your ${target.toLowerCase()}'s favorite song playing as they enter, a personalized message on the cake, photos from your journey together displayed beautifully – these small details make a ${kw.toLowerCase()} truly memorable.

**Creating the Perfect Atmosphere**: Our venue transforms based on your vision. Whether your ${target.toLowerCase()} loves vibrant colors and balloons or prefers elegant whites and soft lighting, we adapt our ${kw.toLowerCase()} setup to match their personality.`
    },
    {
      heading: `Why They'll Remember This ${kw} Forever`,
      content: `A ${kw.toLowerCase()} at ${venue} isn't just an event – it's a memory that your ${target.toLowerCase()} will cherish forever. Here's what makes our celebrations stand out:

**Exclusive Privacy**: The entire venue is yours for three hours. No strangers, no interruptions – just you, your ${target.toLowerCase()}, and the magic of your ${kw.toLowerCase()}.

**Instagram-Worthy Moments**: Every corner of our venue is designed for stunning photographs. Your ${target.toLowerCase()} will have plenty of amazing shots to share and remember. Our ${kw.toLowerCase()} setups are specifically designed to photograph beautifully.

**Quality Time Together**: Without the stress of arrangements, you can focus entirely on each other. Our team handles everything while you enjoy quality time during your ${kw.toLowerCase()}.

**Delicious Food**: Our carefully curated menu features crowd favorites like cheese fondue, mac & cheese, and delicious desserts – perfect for a romantic ${kw.toLowerCase()} meal.

**Surprise Coordination**: If it's a surprise ${kw.toLowerCase()}, we provide guidance on arrival timing, keep your ${target.toLowerCase()} engaged while you prepare, and ensure the reveal moment is absolutely perfect.`
    }
  ],
  
  // For husband/wife keywords
  forSpouse: (kw: string, spouse: string, venue: string) => [
    {
      heading: `Celebrating Years of Love with ${kw}`,
      content: `Marriage is a beautiful journey, and every milestone deserves a special ${kw.toLowerCase()}. At ${venue}, we understand the depth of spousal love and create celebrations that honor your bond.

**Rekindling Romance**: Life gets busy with work, family, and responsibilities. A ${kw.toLowerCase()} is your opportunity to pause and reconnect with your ${spouse.toLowerCase()}. Our venue provides the perfect escape from daily routine.

**Honoring Your Journey**: Whether you've been married for one year or twenty-five, your ${kw.toLowerCase()} should reflect your unique journey. Share your story with us, and we'll incorporate meaningful elements into your celebration.

**Creating New Memories**: While cherishing the past, your ${kw.toLowerCase()} is also about creating new beautiful memories together. Our venue setting under the ${spouse.toLowerCase() === 'wife' ? 'starlit sky' : 'city lights'} provides the perfect backdrop for new chapters.

**The Gift of Time**: In the rush of daily life, quality time becomes precious. A ${kw.toLowerCase()} at ${venue} gives you three uninterrupted hours to focus solely on each other – a gift more valuable than any material present.`
    },
    {
      heading: `Making Your ${spouse} Feel Truly Special`,
      content: `Your ${spouse.toLowerCase()} has stood by you through thick and thin. A ${kw.toLowerCase()} is your chance to show them just how much they mean to you.

**Personal Recognition**: Our ${kw.toLowerCase()} setups can include personalized elements – their name in lights, your wedding song playing, or a display of photos from your journey together.

**Their Favorite Things**: Does your ${spouse.toLowerCase()} love red roses or prefer exotic orchids? Are they a chocolate lover or do they prefer traditional sweets? We customize your ${kw.toLowerCase()} to include their preferences.

**Thoughtful Planning**: A well-planned ${kw.toLowerCase()} shows your ${spouse.toLowerCase()} the effort and thought you've put in. Our team helps you plan every detail, from timing to decorations, ensuring nothing is overlooked.

**A Break from Routine**: Taking your ${spouse.toLowerCase()} away from household duties to a beautifully decorated venue with delicious food and romantic ambiance – that's a gift they'll truly appreciate.

**Creating Traditions**: Make your ${kw.toLowerCase()} at ${venue} an annual tradition! Many couples return year after year, and we love being part of their ongoing love story.`
    }
  ],
  
  // For venue/place keywords
  forVenue: (kw: string, venue: string, city: string) => [
    {
      heading: `What Makes ${venue} the Best ${kw}`,
      content: `Searching for the perfect ${kw.toLowerCase()} in ${city}? Here's why ${venue} consistently ranks as the top choice for couples:

**Venue Magic**: Our venue offers breathtaking panoramic views of ${city}. As the sun sets and city lights come alive, your celebration transforms into a magical experience that's hard to find elsewhere.

**Glass House Elegance**: For those who prefer an intimate indoor setting, our glass house provides a cozy, elegant space. The transparent walls let you enjoy the ambiance of the outdoors while staying comfortable inside.

**Complete Privacy**: Unlike restaurants or shared venues, our ${kw.toLowerCase()} is exclusively yours. No other guests, no waiters walking by – complete privacy for your special moments.

**Central Location**: Situated in Gotri, our ${kw.toLowerCase()} is easily accessible from all major areas of ${city} including Alkapuri, Akota, Fatehgunj, and beyond.

**All-Inclusive Packages**: Our packages include everything – venue, decorations, food, music, and dedicated service. No hidden costs or surprises when you book your ${kw.toLowerCase()} with us.`
    },
    {
      heading: `What You Get at Our ${kw}`,
      content: `When you book ${venue} as your ${kw.toLowerCase()}, here's the complete experience you receive:

**Venue & Duration**: Full 3 hours of exclusive access to your chosen setup – private venue or glass house. The space is entirely yours from your arrival until you leave.

**Professional Decorations**: Our team sets up beautiful decorations including balloons, fairy lights, candles, and flowers (based on package). Every ${kw.toLowerCase()} is Instagram-ready.

**Delicious Food**: Our cafe-style menu features delicious offerings including cheese fondue, paneer tortilla, mac & cheese, and desserts. Your ${kw.toLowerCase()} includes carefully selected food items.

**Celebration Cake**: Packages 1-3 include a complimentary celebration cake. For other packages, cakes are available at ₹500 additional.

**Ambient Music**: Soft romantic music plays throughout your ${kw.toLowerCase()}. You can request your favorite songs or let us curate the perfect playlist.

**Photo Spots**: Multiple Instagram-worthy spots are created within your setup for capturing beautiful memories of your ${kw.toLowerCase()}.

**Dedicated Host**: A team member is assigned to ensure your celebration goes smoothly without any hassles.`
    }
  ],
  
  // For decoration keywords  
  forDecoration: (kw: string, venue: string, type: string) => [
    {
      heading: `Stunning ${kw} Themes We Offer`,
      content: `Our ${kw.toLowerCase()} services feature multiple themes to match your vision:

**Romantic Red & White**: Classic combination with red balloons, white flowers, and rose petals. This ${kw.toLowerCase()} theme never fails to create a passionate ambiance.

**Elegant All-White**: Sophisticated white balloons, white flowers, and soft fairy lights. Perfect for couples who love minimalist elegance in their ${kw.toLowerCase()}.

**Colorful Celebration**: Vibrant mix of colored balloons in pink, gold, and purple. This ${kw.toLowerCase()} theme brings energy and joy to your celebration.

**Golden Glamour**: Gold and black theme with metallic balloons and candles. A luxurious ${kw.toLowerCase()} option for those who love opulence.

**Rose Garden**: Focus on fresh roses in various colors, creating a fragrant and beautiful ${kw.toLowerCase()} setup that appeals to flower lovers.

**Custom Theme**: Have a specific vision? Our ${kw.toLowerCase()} team can create custom setups based on your preferences, favorite colors, or unique concepts.`
    },
    {
      heading: `${kw} Elements That Create Magic`,
      content: `Our ${kw.toLowerCase()} includes carefully selected elements that work together to create an unforgettable atmosphere:

**Balloon Arrangements**: From simple bunches to elaborate arches and walls, balloons add color and festivity to your ${kw.toLowerCase()}.

**Fairy Lights**: Hundreds of tiny lights create a magical, dreamy ambiance. Our ${kw.toLowerCase()} features lights strategically placed for maximum impact.

**Fresh Flowers**: Roses, orchids, or seasonal blooms add natural beauty and fragrance to your ${kw.toLowerCase()} setup.

**Candles & Tea Lights**: Nothing says romance like candlelight. Our ${kw.toLowerCase()} features carefully placed candles that create warm, intimate lighting.

**Rose Petals**: Scattered on pathways and tables, rose petals add a touch of luxury to your ${kw.toLowerCase()}.

**Photo Frames & Props**: Personalized frames with your names, cute props, and photo displays make your ${kw.toLowerCase()} unique.

**Themed Centerpieces**: Custom centerpieces that tie your ${kw.toLowerCase()} theme together beautifully.`
    }
  ],
  
  // For planner keywords
  forPlanner: (kw: string, venue: string, city: string) => [
    {
      heading: `Our ${kw} Process`,
      content: `As professional ${kw.toLowerCase()} in ${city}, we follow a systematic approach to ensure your celebration is perfect:

**Initial Consultation**: We begin by understanding your vision, budget, and requirements. Our ${kw.toLowerCase()} team asks detailed questions about your preferences, the occasion, and any special requests.

**Package Recommendation**: Based on your needs, we suggest the most suitable package from our 8 options. Our ${kw.toLowerCase()} experts explain each package's features to help you decide.

**Customization Planning**: Once you choose a package, we discuss customizations. Color schemes, specific flowers, personalized messages, dietary requirements – our ${kw.toLowerCase()} service covers it all.

**Date & Time Booking**: We check availability for your preferred date and time slot. Advance booking with partial payment confirms your ${kw.toLowerCase()} reservation.

**Coordination (For Surprises)**: If you're planning a surprise, our ${kw.toLowerCase()} team becomes your ally. We help with timing, excuses to get your partner there, and coordination on the day.

**Setup Day**: Our ${kw.toLowerCase()} team arrives 2-3 hours before your slot to set up everything perfectly. We send you photos once ready so you know everything is in place.

**Your Celebration**: You arrive to a fully decorated venue, and our team remains available throughout to serve food and attend to any needs during your celebration.`
    },
    {
      heading: `Why Choose Professional ${kw}`,
      content: `Planning a romantic celebration yourself can be stressful. Here's why hiring our professional ${kw.toLowerCase()} makes sense:

**Save Time**: Our ${kw.toLowerCase()} services handle all aspects – decoration sourcing, setup, food arrangements, and more. You save hours of planning and running around.

**Professional Quality**: As experienced ${kw.toLowerCase()}, we know what works and what doesn't. Our setups are polished, coordinated, and always impressive.

**Stress-Free Experience**: Instead of worrying about details, you can focus on enjoying your celebration. Our ${kw.toLowerCase()} team handles unexpected issues smoothly.

**Better Value**: Buying decorations, food, and renting a venue separately often costs more than our all-inclusive ${kw.toLowerCase()} packages.

**Experience & Expertise**: With over 3,000 celebrations planned, our ${kw.toLowerCase()} team has the experience to anticipate needs and deliver excellence.

**Backup Plans**: If something goes wrong (balloon pops, flower wilts), our ${kw.toLowerCase()} team has backup supplies and quick solutions ready.

**Coordination Skills**: For surprise parties, our ${kw.toLowerCase()} expertise in coordination ensures the secret stays safe until the big reveal.`
    }
  ],
  
  // For photoshoot keywords
  forPhotoshoot: (kw: string, venue: string, city: string) => [
    {
      heading: `${kw} Locations at Our Venue`,
      content: `${venue} offers multiple stunning spots for your ${kw.toLowerCase()}:

**venue with City View**: Our venue provides a spectacular backdrop of ${city}'s skyline. Golden hour shots here are simply magical for any ${kw.toLowerCase()}.

**Glass House Interior**: The elegant glass house with its soft lighting creates dreamy, intimate photographs. Perfect for couples who want a sophisticated ${kw.toLowerCase()} look.

**Fairy Light Backdrop**: A dedicated wall of fairy lights creates a sparkling background that photographs beautifully, especially for evening ${kw.toLowerCase()} sessions.

**Balloon Arch Setup**: Our colorful balloon arches make for fun, vibrant photographs. Great for couples who want playful ${kw.toLowerCase()} images.

**Candle-Lit Pathway**: A romantic pathway lined with candles and rose petals creates stunning leading-line compositions for your ${kw.toLowerCase()}.

**Table Setup**: The beautifully decorated table with flowers, candles, and elegant settings offers great lifestyle-style ${kw.toLowerCase()} shots.

**Multiple Themes in One Visit**: Unlike outdoor locations, our venue lets you capture multiple looks and themes in a single ${kw.toLowerCase()} session.`
    },
    {
      heading: `${kw} Tips for Best Results`,
      content: `Make the most of your ${kw.toLowerCase()} at ${venue} with these tips:

**Best Time Slots**: For outdoor private venue shots, book the evening slot (5-8 PM) for golden hour magic. For indoor glass house ${kw.toLowerCase()}, any slot works beautifully.

**What to Wear**: Coordinated outfits work best. Avoid busy patterns and neon colors. Solid colors in complementary shades photograph beautifully for ${kw.toLowerCase()}.

**Bring Your Photographer**: While we provide an Instagram-worthy setup, bringing a professional photographer ensures you capture every moment of your ${kw.toLowerCase()}.

**Communicate Preferences**: Let us know the dominant colors you'll be wearing so we can adjust the ${kw.toLowerCase()} decorations accordingly.

**Arrive Early**: Come 15-20 minutes before your slot starts. This gives you time to settle in, see the setup, and mentally prepare for your ${kw.toLowerCase()}.

**Natural Interactions**: The best ${kw.toLowerCase()} photos capture genuine moments. Don't just pose – interact with your partner, laugh, and let natural emotions show.

**Use All Spaces**: Our team can guide you to different spots within the venue for variety in your ${kw.toLowerCase()} album.`
    }
  ]
};

// ==================== MAIN CONTENT GENERATOR ====================

export function generateKeywordPageContent(
  service: ServiceCategory,
  keyword: ServiceKeyword
): FFCKeywordContent {
  const kw = keyword.title;
  const kwLower = kw.toLowerCase();
  const city = "Surat";
  const venue = "HIVY - Place for Celebrations";
  
  // Determine keyword type for content variation
  const slug = keyword.slug.toLowerCase();
  
  // Generate unique opening based on slug hash for variety
  const hashCode = slug.split('').reduce((a, b) => ((a << 5) - a + b.charCodeAt(0)) | 0, 0);
  const openingIndex = Math.abs(hashCode) % openingStyles.length;
  
  // First paragraph from opening styles
  const uniqueOpening = openingStyles[openingIndex](kw, city, venue);
  
  // Build introduction
  let introduction = `${uniqueOpening}

`;

  // Add service-specific second paragraph
  if (service.slug === 'birthday-surprise') {
    introduction += `Birthdays mark new beginnings, and what better way to welcome a new year of your loved one's life than with a stunning ${kwLower}? Our venue transforms into a celebration wonderland with balloons, flowers, candles, and your partner's favorite music playing softly. Every ${kwLower} we create is unique because every love story is unique.

At ${venue}, we understand that a ${kwLower} is more than decorations – it's about creating a moment that takes their breath away. From the first glimpse of the setup to the last slice of cake, we ensure every second of your ${kwLower} is magical.`;
  } else if (service.slug === 'anniversary-celebration') {
    introduction += `Anniversaries are milestones that celebrate the beautiful journey of togetherness. At ${venue}, we help you honor this journey with an exquisite ${kwLower} that reflects the depth of your love. From your first anniversary to your silver jubilee, we make every year feel special.

Our ${kwLower} setups are designed to rekindle romance and create new beautiful memories. As you sit together under the starlit private venue or in our elegant glass house, surrounded by flowers and soft candlelight, you'll remember why you fell in love in the first place.`;
  } else if (service.slug === 'proposal') {
    introduction += `The moment you pop the question will be etched in your memories forever. At ${venue}, we ensure this moment is nothing short of perfect. Our ${kwLower} setups have witnessed hundreds of "Yes!" moments, each one as magical as the last.

From hidden ring boxes to dramatic reveals, our team has seen it all when it comes to ${kwLower} planning. We coordinate every detail – the timing, the music, the lighting – to ensure your partner is swept off their feet when you ask that life-changing question.`;
  } else if (service.slug === 'candlelight-dinner') {
    introduction += `There's something timelessly romantic about a ${kwLower}. The soft glow of candles, the aroma of delicious food, and the person you love sitting across from you – it's a recipe for the perfect romantic evening. ${venue} elevates this experience with stunning views and impeccable service.

Our ${kwLower} offerings are designed for couples who appreciate the finer things in life without the pretentiousness of fine dining. Comfortable ambiance, delicious food, and complete privacy – that's our ${kwLower} promise.`;
  } else if (service.slug === 'surprise-date') {
    introduction += `Surprises add sparkle to relationships, and a ${kwLower} is the ultimate expression of thoughtfulness. At ${venue}, we help you create surprise moments that leave your partner speechless with joy. The look on their face when they see the setup? Priceless!

Our ${kwLower} experiences are meticulously planned to maintain the element of surprise until the very last moment. We help you with cover stories, timing coordination, and that dramatic reveal that makes all the planning worth it.`;
  } else if (service.slug === 'pre-wedding-shoot') {
    introduction += `Before the wedding day arrives, couples seek to capture their love story through beautiful photographs. ${venue} provides the perfect backdrop for your ${kwLower}, with multiple setups, stunning lighting, and romantic ambiance all in one location.

Unlike outdoor locations where you battle weather and crowds, our ${kwLower} venue offers controlled conditions, privacy, and multiple looks without traveling. From private venue golden hour shots to intimate indoor portraits, your ${kwLower} at our venue will be diverse and stunning.`;
  } else if (service.slug === 'baby-moments') {
    introduction += `The news of a baby is a moment of pure joy, and celebrating it deserves a special setting. ${venue} provides the perfect venue for your ${kwLower}, whether it's announcing the pregnancy, revealing the gender, or simply celebrating the miracle of new life.

Our ${kwLower} setups are designed to be both Instagram-worthy and genuinely heartwarming. From cute balloon arrangements to elegant flower decorations, we create a space that captures the joy and anticipation of your growing family.`;
  } else if (service.slug === 'valentines-week') {
    introduction += `Valentine's Week is the most romantic time of the year, and at ${venue}, we go all out to make your ${kwLower} extraordinary. From Rose Day to Valentine's Day, each day of the week deserves its own special celebration.

Our ${kwLower} packages are designed specifically for this romantic season, featuring themed decorations, special menu items, and that extra dose of romance that the occasion demands. Book early as Valentine's Week slots fill up fast!`;
  }
  
  // Determine which section variation to use
  let sections: FFCContentSection[] = [];
  
  if (slug.includes('boyfriend') || slug.includes('girlfriend')) {
    const target = slug.includes('boyfriend') ? 'Boyfriend' : 'Girlfriend';
    sections = sectionVariations.forPartner(kw, target, venue);
  } else if (slug.includes('husband') || slug.includes('wife')) {
    const spouse = slug.includes('husband') ? 'Husband' : 'Wife';
    sections = sectionVariations.forSpouse(kw, spouse, venue);
  } else if (slug.includes('venues') || slug.includes('places') || slug.includes('restaurants') || slug.includes('location')) {
    sections = sectionVariations.forVenue(kw, venue, city);
  } else if (slug.includes('decoration') || slug.includes('balloon') || slug.includes('room')) {
    sections = sectionVariations.forDecoration(kw, venue, 'general');
  } else if (slug.includes('planner') || slug.includes('ideas')) {
    sections = sectionVariations.forPlanner(kw, venue, city);
  } else if (slug.includes('photoshoot') || slug.includes('photography') || slug.includes('shoot')) {
    sections = sectionVariations.forPhotoshoot(kw, venue, city);
  } else {
    // Default sections
    sections = [
      {
        heading: `What Makes Our ${kw} Services Special`,
        content: `At ${venue}, we've perfected the art of ${kwLower} celebrations. Here's what sets us apart:

**Exclusive Private Venue**: When you book a ${kwLower} with us, the entire space is exclusively yours. No other guests, no interruptions – just you, your loved one, and the romantic ambiance we create.

**Stunning elegant indoor**: Choose between our breathtaking venue with panoramic city views or our elegant glass house for an intimate ${kwLower} experience. Both options are equally magical!

**Professional Setup**: Our experienced team arrives hours before your ${kwLower} to set up everything perfectly. From balloon arrangements to candle placement, every detail is handled professionally.

**Delicious Cuisine**: Our cafe-style menu features delicious offerings including cheese fondue, paneer tortilla, mac & cheese, and desserts. Your ${kwLower} includes carefully selected food items.

**Flexible Customization**: Want something special for your ${kwLower}? We accommodate custom requests for colors, themes, special messages, and personalized elements.`
      },
      {
        heading: `Planning Your ${kw} Step by Step`,
        content: `Creating the perfect ${kwLower} doesn't have to be complicated. Here's how we make it easy:

**Step 1: Contact Us**
Reach out via WhatsApp at ${siteConfig.phone}. Share what you're celebrating and any initial ideas for your ${kwLower}.

**Step 2: Choose Your Package**
We have 6 unique ${kwLower} packages ranging from ₹4,700 to ₹6,900. Each offers different themes and inclusions. We'll help you pick the perfect one.

**Step 3: Select Date & Time**
Pick your preferred date and choose from our time slots: Lunch (12-3 PM), Evening (4-7 PM), Dinner (7-10 PM), or Late Night (10 PM-1 AM).

**Step 4: Personalize (Optional)**
Want specific colors, a custom cake message, or particular songs? Share your ${kwLower} preferences and we'll incorporate them.

**Step 5: Confirm with Advance**
A small advance payment confirms your ${kwLower} booking. We'll send you all the details including venue address and what to expect.

**Step 6: Arrive & Enjoy**
On the day, simply arrive at your scheduled time. Everything is ready – decorations, food, music – and you just focus on celebrating!`
      },
      {
        heading: `${kw} Packages Available`,
        content: `We offer 8 thoughtfully designed packages for your ${kwLower}:

**Premium private venue Packages (₹4,700 - ₹6,900)**
• Forever Us LoveFrame private venue - Elegant photo frame setup with city views
• Eternal Love private venue - Canopy style with romantic curtains
• Cupid's Dreamscape private venue - Classic romantic setup with premium decorations

**Elegant Glass House Packages**
• Pure Love Glass House - Intimate indoor setting with white theme
• Whispered Wishes Glass House - Cozy celebration space
• Dreamy Duo Glass House - Elegant couple-focused setup
• Moonlit Memories Glass House - Magical lighting focus
• Starlit Serenity Glass House - Peaceful, romantic ambiance

Each ${kwLower} package includes 3 hours of exclusive access, welcome drinks, delicious food menu, decorations, and soft music. Packages 1-3 include complimentary cake; others have cake available at ₹500.`
      }
    ];
  }
  
  // Add a final section common to all
  sections.push({
    heading: `Why ${city} Couples Choose ${venue} for ${kw}`,
    content: `Over 3,000 couples in ${city} have celebrated their special moments with us. Here's why they consistently choose ${venue} for ${kwLower}:

**Consistency**: Every ${kwLower} we organize maintains our high standards. Our team follows detailed checklists ensuring nothing is missed.

**Transparency**: No hidden charges. The price quoted for your ${kwLower} is the final price – no surprises at the end.

**Responsive Service**: Our WhatsApp-first approach ensures quick responses. Questions about your ${kwLower}? We reply within hours.

**Couples-Only Environment**: We maintain a strict couples-only policy, ensuring privacy and comfort for everyone celebrating their ${kwLower}.

**Perfect Location**: Situated in Gotri, our venue is easily accessible from all major ${city} areas including Alkapuri, Akota, Fatehgunj, and more.

**Repeat Customers**: Many couples return for multiple celebrations – anniversaries, birthdays, special dates. That's the highest endorsement for our ${kwLower} services.`
  });

  // Generate unique why choose us points based on service
  const whyChooseUsBase = [
    `100% private ${kwLower} venue – no other guests`,
    `6 unique ${kwLower} themes available`,
    `Stunning private venue views & elegant glass house options`,
    `All-inclusive packages with food, decorations, music`,
    `Professional setup handled by our team`,
    `Trusted by 3,000+ ${city} couples`,
    `Easy accessibility from all ${city} areas`,
    `Quick WhatsApp booking with instant confirmation`
  ];
  
  // Add service-specific points
  const whyChooseUs = [...whyChooseUsBase];
  if (service.slug === 'birthday-surprise') {
    whyChooseUs.push(`Complimentary celebration cake included`);
    whyChooseUs.push(`Surprise coordination expertise`);
  } else if (service.slug === 'proposal') {
    whyChooseUs.push(`Ring reveal coordination assistance`);
    whyChooseUs.push(`Backup plans for unexpected situations`);
  } else if (service.slug === 'valentines-week') {
    whyChooseUs.push(`Special Valentine's Week themed decorations`);
    whyChooseUs.push(`Priority booking for repeat customers`);
  }

  const process = [
    { step: "Inquiry", description: `Reach out via WhatsApp to discuss your ${kwLower} requirements` },
    { step: "Package Selection", description: `Choose from our 8 ${kwLower} packages based on preferences` },
    { step: "Date Confirmation", description: "Pick your date and time, confirm with advance payment" },
    { step: "Personalization", description: `Share any custom requests for your ${kwLower}` },
    { step: "Celebration Day", description: "Arrive at scheduled time and enjoy your magical experience" }
  ];

  // Generate unique testimonials based on keyword type
  let testimonialContent = '';
  if (slug.includes('birthday')) {
    testimonialContent = `"My husband's ${kwLower} at ${venue} was beyond amazing! The private setup exceeded all expectations. He was genuinely surprised!" – Priya M., ${city}

"Planned my girlfriend's ${kwLower} here and she couldn't stop smiling. The decorations were gorgeous and the food was delicious!" – Rahul P., Alkapuri

"Best ${kwLower} venue in ${city}! The team was so helpful with surprise coordination." – Sneha & Amit, Gotri`;
  } else if (slug.includes('anniversary')) {
    testimonialContent = `"Our 5th anniversary ${kwLower} was magical! The candlelight setup at the venue was so romantic." – Kavita & Raj, ${city}

"We've celebrated our last 3 anniversaries here. ${venue} never disappoints with their ${kwLower}!" – Meera & Karan, Subhanpura

"Thank you for making our ${kwLower} so special. The personalized touches made us feel so valued." – Anonymous Couple`;
  } else if (slug.includes('proposal') || slug.includes('propose')) {
    testimonialContent = `"She said YES! The ${kwLower} setup was exactly what I envisioned. Thank you, team!" – Arjun D., ${city}

"My girlfriend was completely surprised! The coordination for the ${kwLower} was perfect." – Vivek S., Akota

"The most beautiful moment of my life happened at ${venue}. The ${kwLower} arrangements were stunning!" – Happy Groom-to-be`;
  } else {
    testimonialContent = `"Our ${kwLower} at ${venue} was absolutely perfect! The ambiance, food, everything was wonderful." – Priya & Rahul, ${city}

"The team went above and beyond to make our ${kwLower} special. Highly recommend!" – Meera K., Alkapuri

"Best ${kwLower} experience in ${city}! Will definitely come back for our anniversary." – Riya & Arjun, Gotri`;
  }

  const pricingIntro = `Our ${kwLower} packages offer exceptional value with prices starting from ₹4,700. Every package includes venue access, decorations, food, and music for a complete 3-hour celebration experience.`;

  // Generate 10 unique FAQs based on keyword using hash for variation
  const faqPool: { question: string; answer: string }[][] = [
    // Pool A
    [
      { question: `How early should I book my ${kwLower}?`, answer: `We recommend booking your ${kwLower} at least 3-5 days in advance. For weekends, special occasions like Valentine's Week, and festivals, book 1-2 weeks ahead to secure your preferred slot at ${venue}.` },
      { question: `Can I customize the ${kwLower} decorations?`, answer: `Yes, absolutely! You can specify colour themes, add personalised banners, request specific flowers, neon signs, or include props for your ${kwLower}. Our team will match any vision you have. Additional charges may apply for extensive customisations.` },
      { question: `Is the ${kwLower} venue completely private?`, answer: `Yes, 100% private! No other guests will be present during your 3-hour ${kwLower} slot. The entire space — whether a private tent or glass house — is exclusively reserved for you and your partner.` },
      { question: `What food is included in the ${kwLower} package?`, answer: `Our ${kwLower} packages include welcome drinks, a three-course meal (starters, main course, desserts), a celebration cake, and premium mocktails. All items are freshly prepared. Veg, Jain, and custom dietary options are available.` },
      { question: `Can I bring my own cake for the ${kwLower}?`, answer: `Absolutely. You can bring your own cake at no extra charge. Note that most packages already include a complimentary celebration cake, so bringing your own is optional.` },
      { question: `What is the cancellation or rescheduling policy for ${kwLower} bookings?`, answer: `Rescheduling is free if informed at least 24 hours before your ${kwLower} slot. The new date must fall within one month. Please note that a no-refund policy applies to all bookings.` },
      { question: `How long is each ${kwLower} session at HIVY?`, answer: `Each ${kwLower} session at ${venue} is 3 hours long. This includes setup time, your dining experience, photography, celebration, and cake cutting — everything fits comfortably within the 3-hour window.` },
      { question: `What time slots are available for ${kwLower}?`, answer: `We offer Lunch (12 PM–5 PM), Evening (4 PM–9 PM), and Dinner (7 PM–11 PM) sessions. Evening and dinner slots are most popular for ${kwLower} as the candle and fairy-light ambiance is at its peak.` },
      { question: `Is a photographer included in the ${kwLower} package?`, answer: `Select packages include complimentary photography. For other packages, you can add a professional photographer at a nominal cost, or bring your own. Our venue is designed to be highly photogenic for your ${kwLower}.` },
      { question: `Where is ${venue} located and how do I reach it for my ${kwLower}?`, answer: `${venue} is located on Sevasi-Canal Road, Gotri, ${city}. It is easily accessible from all major areas of ${city} within 15-30 minutes. Ample free parking is available. Search "HIVY Place for Celebrations" on Google Maps for exact directions.` },
    ],
    // Pool B (rotated questions for variety)
    [
      { question: `What makes HIVY the best venue for ${kwLower} in ${city}?`, answer: `${venue} is ${city}'s only dedicated romantic celebration venue. We offer complete privacy, themed tent decorations, professional photography, a curated three-course meal, and a 4.9★ Google rating from 500+ couples who celebrated here.` },
      { question: `How many people can attend a ${kwLower} celebration?`, answer: `Our ${kwLower} packages are designed for couples (2 people). For small group celebrations of up to 4 guests, we offer our Royal Celebration setup. Contact us to discuss your specific requirements.` },
      { question: `Can I plan a surprise ${kwLower} for my partner?`, answer: `Absolutely! Surprise coordination is one of our specialities. Our team helps with timing, cover stories, and ensures the setup is picture-perfect before your partner arrives. We have executed 500+ successful surprise celebrations.` },
      { question: `Do you offer special packages for ${kwLower} on Valentine's Day?`, answer: `Yes, we have exclusive Valentine's Week packages running from Rose Day to Valentine's Day. These include enhanced decorations, special menu items, and romantic add-ons. Book early as Valentine's slots fill up weeks in advance.` },
      { question: `What decorations are included in the standard ${kwLower} package?`, answer: `Every ${kwLower} package includes a themed tent setup with fairy lights, candles, flower arrangements, balloon decorations, a personalised welcome board, and background music. Premium packages add neon signs, rose petal pathways, and extra photo props.` },
      { question: `Is the food at HIVY vegetarian for ${kwLower} celebrations?`, answer: `Yes, ${venue} is a pure vegetarian café. All dishes are freshly prepared on-site using premium ingredients. Jain options (no onion/garlic) and custom dietary requirements are accommodated at no extra charge.` },
      { question: `Can I bring music or a playlist for my ${kwLower}?`, answer: `Definitely! A Bluetooth speaker is provided in every tent. You can connect your phone and play your own romantic playlist throughout your ${kwLower} session. We also have curated playlists if you prefer.` },
      { question: `What is included in the ${kwLower} pricing — are there hidden charges?`, answer: `There are zero hidden charges at HIVY. The package price includes venue, decorations, food, cake, mocktails, music, and 3 hours of private access. The price listed on our website is the exact amount you pay.` },
      { question: `How do I make a booking for ${kwLower} at HIVY?`, answer: `You can book via phone call at ${siteConfig.phone}, WhatsApp message, or the online booking form on our website. Share your preferred date, occasion, and package choice. Our team confirms availability within minutes.` },
      { question: `Can I visit ${venue} before booking my ${kwLower}?`, answer: `Yes, walk-in venue previews are available on weekday afternoons. Call ${siteConfig.phone} to schedule a quick tour. You can see the tent setups, choose your preferred style, and discuss customisations in person.` },
    ],
    // Pool C
    [
      { question: `What occasions can I celebrate with a ${kwLower} at HIVY?`, answer: `Beyond ${kwLower}, you can celebrate birthdays, anniversaries, proposals, engagement reveals, pre-wedding shoots, baby showers, pregnancy announcements, Valentine's Day, and any romantic milestone at ${venue}.` },
      { question: `Is ${venue} safe and secure for a late-night ${kwLower}?`, answer: `Absolutely. Our venue has well-lit parking, CCTV coverage, and a dedicated team present throughout your session. The last dinner slot runs until 11 PM, and our staff ensures a safe departure for all couples.` },
      { question: `Do you provide a cake with the ${kwLower} package?`, answer: `Yes, most packages include a complimentary celebration cake. You can choose from chocolate, butterscotch, red velvet, or vanilla. Custom cake flavours or designs can be arranged with advance notice at a nominal cost.` },
      { question: `What payment methods are accepted for ${kwLower} bookings?`, answer: `We accept UPI (Google Pay, PhonePe, Paytm), bank transfers, cash, and all major credit/debit cards. A small advance (₹500–₹1,000) secures your slot, with the balance due on celebration day.` },
      { question: `Can I add extra decorations or upgrades to my ${kwLower}?`, answer: `Yes, popular add-ons include neon message signs, extra balloon arches, rose petal pathways, fog machines, personalised photo frames, and additional cake tiers. Discuss your wishlist with our team when booking.` },
      { question: `How is ${kwLower} at HIVY different from a restaurant dinner?`, answer: `Unlike restaurants, HIVY provides a completely private, decorated tent exclusively for your couple. There are no other diners, no interruptions, no shared spaces. Every sensory detail — lighting, music, fragrance, decorations — is crafted specifically for your ${kwLower} experience.` },
      { question: `What if it rains on the day of my ${kwLower}?`, answer: `All our celebration setups are indoor tent structures, fully protected from weather. Rain, heat, or cold — your ${kwLower} experience remains perfect regardless of weather conditions.` },
      { question: `Are there age restrictions for ${kwLower} bookings?`, answer: `Guests should be 18 years or older to book a ${kwLower} celebration. For special family celebrations like milestone birthdays, please call us to discuss arrangements.` },
      { question: `Can I extend my ${kwLower} session beyond 3 hours?`, answer: `Extensions are possible subject to availability and are charged on an hourly basis. Inform our team during your session if you'd like to extend, and we'll accommodate if no following booking exists.` },
      { question: `Does HIVY offer any loyalty or repeat-customer discounts for ${kwLower}?`, answer: `Regular couples and returning customers receive priority booking and occasional loyalty perks. Follow us on Instagram @hivy_placeforcelebration for exclusive offers and seasonal discount announcements.` },
    ],
  ];

  // Select FAQ pool based on hash, then pick 10
  const faqContent = faqPool[Math.abs(hashCode) % faqPool.length];

  const closingCta = `Ready to create your perfect ${kwLower} moment in ${city}? Don't wait – special dates fill up quickly! Contact us today on WhatsApp at ${siteConfig.phone} to check availability and book your slot.

Remember, the best gifts aren't things – they're experiences. Give your loved one the gift of an unforgettable ${kwLower} at ${venue}. We're excited to be part of your celebration!`;

  return {
    introduction,
    sections,
    whyChooseUs,
    process,
    testimonialContent,
    pricingIntro,
    faqContent,
    closingCta
  };
}

// ==================== AREA PAGE CONTENT GENERATOR ====================

export function generateAreaPageContent(area: AreaConfig): FFCAreaContent {
  const areaName = area.name;
  const city = "Surat";
  const venue = "HIVY - Place for Celebrations";
  
  // Calculate unique hash for area to determine variation
  const hashCode = area.slug.split('').reduce((a, b) => ((a << 5) - a + b.charCodeAt(0)) | 0, 0);
  const variationIndex = Math.abs(hashCode) % 5;
  
  // Different area types get different content angles
  let areaDescription = '';
  let areaCharacter = '';
  
  // Categorize areas
  const poshAreas = ['Alkapuri', 'Akota', 'Race Course', 'Ellora Park', 'Fatehgunj'];
  const residentialAreas = ['Subhanpura', 'Karelibaug', 'Nizampura', 'Sama', 'Diwalipura'];
  const developingAreas = ['Bhayli', 'Sevasi', 'Gotri', 'Tandalja', 'Harni'];
  const industrialAreas = ['Makarpura', 'Gorwa', 'Koyali', 'GIDC'];
  
  if (poshAreas.includes(areaName)) {
    areaCharacter = 'upscale';
    areaDescription = `${areaName} is one of ${city}'s most prestigious neighborhoods, known for its beautiful homes, high-end shopping, and discerning residents who appreciate quality experiences.`;
  } else if (residentialAreas.includes(areaName)) {
    areaCharacter = 'family';
    areaDescription = `${areaName} is a well-established residential area in ${city}, home to many families who value tradition while embracing modern celebrations.`;
  } else if (developingAreas.includes(areaName)) {
    areaCharacter = 'modern';
    areaDescription = `${areaName} represents ${city}'s new growth, attracting young professionals and couples who seek contemporary experiences and modern amenities.`;
  } else {
    areaCharacter = 'diverse';
    areaDescription = `${areaName} is a vibrant part of ${city} with a diverse community of residents who enjoy celebrating life's special moments in style.`;
  }
  
  // Opening variations
  const openings = [
    `Couples from ${areaName} – your perfect romantic celebration is just a short drive away! ${venue} has been serving ${areaName} residents with premium celebration experiences, and we'd love to welcome you too. ${areaDescription}`,
    
    `Looking for a romantic celebration venue if you're from ${areaName}? ${venue} is proud to be the preferred choice for couples from ${areaName} seeking unforgettable experiences. ${areaDescription}`,
    
    `${areaName} residents, discover ${city}'s most romantic celebration venue! ${venue} has hosted countless celebrations for couples living in ${areaName}, and each one has been magical. ${areaDescription}`,
    
    `From ${areaName} to Our venue – the journey to romance is short but the memories last forever! ${venue} welcomes couples from ${areaName} to experience premium celebrations. ${areaDescription}`,
    
    `Attention ${areaName} lovebirds! The perfect celebration venue awaits you at ${venue}. We've designed our experiences keeping couples from ${areaName} in mind. ${areaDescription}`
  ];
  
  const introduction = `${openings[variationIndex]}

For years, ${venue} has been the go-to destination for ${areaName} couples looking to celebrate birthdays, anniversaries, proposals, candlelight dinners, and other romantic occasions. Our convenient location in Gotri makes us easily accessible from ${areaName}, and our premium services ensure every celebration is memorable.

Whether you're planning a surprise for your partner or want to celebrate together, ${areaName} residents can count on ${venue} for an experience that exceeds expectations. Join the thousands of happy couples from ${areaName} and across ${city} who have celebrated with us!`;

  const sections: FFCContentSection[] = [
    {
      heading: `Romantic Celebration Services for ${areaName} Couples`,
      content: `Living in ${areaName} gives you easy access to one of ${city}'s finest romantic venues. Here's what couples from ${areaName} love about celebrating at ${venue}:

**Birthday Surprises**: Plan the perfect birthday surprise for your partner. ${areaName} residents have loved our themed birthday setups with balloons, cake, and romantic decorations.

**Anniversary Celebrations**: From first anniversaries to silver jubilees, couples from ${areaName} celebrate their love milestones with us. Elegant setups, romantic ambiance, and delicious food await.

**Proposal & Ring Ceremonies**: Several ${areaName} couples have gotten engaged at our venue! Our romantic private venue provides the perfect backdrop for the most important question.

**Candlelight Dinners**: Escape the routine and enjoy an intimate candlelight dinner. ${areaName} couples appreciate our private setting and stunning views.

**Surprise Date Nights**: Transform an ordinary evening into something extraordinary. Many ${areaName} residents plan surprise dates here to keep the romance alive.

**Pre-Wedding Shoots**: ${areaName} couples getting married choose our venue for beautiful pre-wedding photographs with multiple setups in one location.

Every service is fully customizable to match the preferences of ${areaName} couples – from decoration colors to special requests, we accommodate it all.`
    },
    {
      heading: `Why ${areaName} Couples Love Celebrating With Us`,
      content: `Residents of ${areaName} have specific expectations when it comes to quality and experience. Here's why we consistently meet and exceed those expectations:

**Convenient Distance**: The drive from ${areaName} to our Gotri venue typically takes just 15-25 minutes. Close enough for a spontaneous date, yet far enough to feel like an escape.

**Complete Privacy**: Unlike restaurants in ${areaName} where you might run into neighbors or colleagues, our venue is 100% private. Your celebration is exclusively yours.

**Professional Service**: ${areaName} couples appreciate our attention to detail. From setup to service, everything is handled with professionalism and care.

**Premium Yet Affordable**: We offer premium experiences at reasonable prices. ${areaName} residents get excellent value without compromising on quality.

**Instagram-Worthy Setups**: Our decorations are designed to photograph beautifully. Couples from ${areaName} love sharing their celebration moments on social media.

**Trusted Reputation**: Word-of-mouth from happy ${areaName} couples has made us the trusted choice in the area. Many bookings come from recommendations.

**Multiple Options**: Whether you prefer an Open-air venue or cozy glass house, we offer options that suit different preferences of ${areaName} couples.`
    },
    {
      heading: `Getting Here from ${areaName}`,
      content: `Planning your visit from ${areaName}? Here's everything you need to know:

**Distance & Travel Time**: The journey from ${areaName} to our Gotri venue takes approximately 15-25 minutes depending on traffic. We recommend Google Maps for real-time directions.

**Best Route**: Most ${areaName} residents take the main road through the city. Specific directions can be provided upon booking confirmation.

**Parking**: Ample parking space is available at our venue. ${areaName} couples driving here won't face any parking difficulties.

**Recommended Time Slots**:
- For ${areaName} couples who work: Evening (5-8 PM) or Dinner (7-10 PM) slots work best
- For relaxed daytime celebrations: Lunch slot (12-3 PM) is perfect
- For late-night romance: Late Night slot (10 PM-1 AM) is available

**Surprise Planning**: If you're from ${areaName} and planning a surprise, we can help coordinate. Share your partner's expected location and we'll suggest the best timing.

**Weather Considerations**: For romantic celebrations, ${areaName} residents should check weather forecasts. Our glass house is perfect for any weather!`
    },
    {
      heading: `Book Your ${areaName} to ${venue} Experience`,
      content: `Ready to create magical memories? Here's how ${areaName} couples can book:

**Step 1: WhatsApp Us**
Send a message to ${siteConfig.phone}. Mention you're from ${areaName} and share what you're celebrating.

**Step 2: Discuss Requirements**
Our team will understand your preferences, suggest suitable packages, and answer all questions about your celebration.

**Step 3: Choose Package & Date**
Select from our 8 packages (₹4,700 - ₹6,900) and pick your preferred date and time slot. We'll check availability instantly.

**Step 4: Confirm Booking**
A small advance payment confirms your booking. We'll send detailed instructions including venue address and what to expect.

**Step 5: Arrive & Celebrate**
On your celebration day, drive from ${areaName} to our venue. Everything will be ready – decorations, food, music, and our team to serve you.

**${areaName} Special**: Mention this page when booking for priority service! We love our ${areaName} couples!`
    }
  ];

  // Get nearby areas for this area
  const allAreas = suratAreas.map(a => a.name);
  const currentIndex = allAreas.indexOf(areaName);
  const nearbyAreasList = allAreas.filter((a, i) => a !== areaName && Math.abs(i - currentIndex) <= 5).slice(0, 5);
  
  const localTips = [
    `Quick 15-25 minute drive from ${areaName} to our Gotri venue`,
    `Evening slots popular among working couples from ${areaName}`,
    `Weekend bookings fill fast – book early if you're from ${areaName}`,
    `Surprise planners: We help ${areaName} residents coordinate perfectly`,
    `Google Maps works great for ${areaName} to ${venue} navigation`
  ];

  const servicesList = [
    "Birthday Surprise Celebrations",
    "Anniversary Dinners & Parties",
    "Marriage Proposals & Ring Ceremonies",
    "Candlelight Dinners for Two",
    "Surprise Date Night Experiences",
    "Pre-Wedding Photoshoots",
    "Baby Moment Celebrations",
    "Valentine's Week Specials"
  ];

  const nearbyAreas = `While we especially love hosting ${areaName} couples, we welcome everyone from across ${city}! Couples from ${nearbyAreasList.join(', ')} and other areas also regularly celebrate with us. Wherever you're from, ${venue} is your destination for romance.`;

  const testimonialContent = `"We're from ${areaName} and have celebrated three occasions at ${venue}. Each time has been wonderful!" – Happy ${areaName} Couple

"The drive from ${areaName} is totally worth it. This place is magical!" – Celebrating Couple from ${areaName}

"As ${areaName} residents, we appreciate the privacy and quality. Highly recommend!" – Satisfied Customer`;

  // Hash for selecting unique FAQ sets per area
  const areaHash = areaName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);

  const areaFaqPools: { question: string; answer: string }[][] = [
    // Pool A
    [
      { question: `How long does it take to reach ${venue} from ${areaName}?`, answer: `The drive from ${areaName} to ${venue} on Sevasi-Canal Road typically takes 15-25 minutes depending on traffic and route. We recommend searching "HIVY Place for Celebrations" on Google Maps for real-time turn-by-turn navigation.` },
      { question: `Do you offer any special deals for ${areaName} residents?`, answer: `Our packages and pricing are the same for all ${city} areas, ensuring fairness. However, ${areaName} couples mentioning this page receive priority booking assistance and our team will ensure the best available slot for you.` },
      { question: `Can you help plan a surprise for my partner who lives in ${areaName}?`, answer: `Absolutely! Surprise coordination is our speciality. We've helped many ${areaName} residents plan surprises — our team guides you on cover stories, timing, blindfold arrival logistics, and ensures every decoration is camera-ready before your partner walks in.` },
      { question: `What's the best time slot for couples coming from ${areaName}?`, answer: `Evening (4 PM–9 PM) and Dinner (7 PM–11 PM) slots are most popular with ${areaName} couples as they allow comfortable post-work travel. Weekend lunch slots (12 PM–3 PM) are ideal for relaxed daytime celebrations with natural lighting for photographs.` },
      { question: `Is parking available for visitors from ${areaName}?`, answer: `Yes! Ample free parking is available for both cars and two-wheelers at our venue. ${areaName} couples driving to us will find clearly marked parking right at the entrance — no walking distance or street parking needed.` },
      { question: `What celebrations can ${areaName} couples book at ${venue}?`, answer: `We offer candlelight dinners, birthday surprises (for boyfriend, girlfriend, husband, wife), anniversary celebrations, marriage proposals, engagement reveals, pre-wedding photoshoots, baby shower events, pregnancy announcements, Valentine's Day specials, and romantic date nights.` },
      { question: `Are the celebration setups at HIVY fully private for ${areaName} couples?`, answer: `100% private. Each tent setup is enclosed and reserved exclusively for your booking. No other couples or guests are present in your space during the 3-hour session. This complete privacy is why ${areaName} residents choose us over restaurants.` },
      { question: `What does a typical celebration package include for couples from ${areaName}?`, answer: `Every package includes 3 hours of private access, themed tent decoration (fairy lights, candles, balloons, flowers), a three-course meal, celebration cake, mocktails, background music via Bluetooth speaker, and a personalised welcome board. Photography is included in select packages.` },
      { question: `How far in advance should ${areaName} couples book at HIVY?`, answer: `We recommend booking 3-5 days in advance for weekday slots and 7-10 days for weekends. For special dates like Valentine's Day, anniversaries, or birthdays falling on weekends, book 2 weeks ahead to guarantee your preferred date and time.` },
      { question: `Is HIVY accessible by public transport from ${areaName}?`, answer: `While most ${areaName} couples drive or use ride-hailing apps (Ola, Uber), the venue is also reachable via auto-rickshaw. Share the Google Maps location with your driver. For surprise celebrations, we suggest driving personally for better timing control.` },
    ],
    // Pool B
    [
      { question: `Why do ${areaName} couples prefer HIVY over local restaurants?`, answer: `Unlike ${areaName} restaurants, ${venue} provides fully private, pre-decorated celebration tents with professional-level ambiance. No shared dining halls, no eavesdropping neighbours, no time pressure. Just 3 uninterrupted hours of romance, food, and celebration — exclusively for you.` },
      { question: `Can ${areaName} residents visit HIVY before booking?`, answer: `Yes! Walk-in venue previews are available on weekday afternoons. Call ${siteConfig.phone} to schedule a visit. You can see the tent setups, choose your preferred decoration style, taste sample items, and discuss customisations before committing.` },
      { question: `What's the easiest route from ${areaName} to ${venue}?`, answer: `Most ${areaName} residents take Ring Road towards Gotri, then exit onto Sevasi-Canal Road. The journey is straightforward with minimal turns. Search "HIVY Place for Celebrations" on Google Maps and follow the live navigation for the fastest route based on current traffic.` },
      { question: `Are there veg and Jain food options for ${areaName} couples at HIVY?`, answer: `Absolutely. ${venue} is a 100% vegetarian café. All dishes are freshly prepared on-site. Jain options (no onion, no garlic) are available at no additional charge — simply mention your preference while booking and our kitchen team handles the rest.` },
      { question: `What payment methods does HIVY accept for ${areaName} bookings?`, answer: `We accept all modern payment methods: UPI (Google Pay, PhonePe, Paytm), bank transfers, credit and debit cards, and cash. A small advance of ₹500–₹1,000 secures your slot, with the remaining balance due on celebration day.` },
      { question: `Can ${areaName} couples bring their own cake or decorations?`, answer: `You can bring your own cake at no extra charge (most packages already include a complimentary cake). For decorations, we recommend using our professional setups, but you're welcome to bring small personal items like photo frames, letters, or specific props.` },
      { question: `Is HIVY safe for late-night celebrations booked by ${areaName} couples?`, answer: `Completely safe. The venue has CCTV surveillance, well-lit parking, and staff present until the last guest departs. Our final dinner slot runs until 11 PM, and the drive back to ${areaName} is typically smooth at that hour with lighter traffic.` },
      { question: `How many packages does HIVY offer for ${areaName} couples?`, answer: `We offer 5-6 distinct celebration packages ranging from ₹4,700 to premium options. Each features a unique tent style — Swing of Love, Garden of Dreams, Boho Chic, Royal Celebration, and more. The best package depends on your occasion, budget, and aesthetic preference.` },
      { question: `Can ${areaName} couples reschedule their HIVY booking?`, answer: `Yes, rescheduling is free if you inform us at least 24 hours before your booked slot. The new date must fall within one month of the original booking, subject to availability. Call or WhatsApp ${siteConfig.phone} to reschedule.` },
      { question: `Do many couples from ${areaName} celebrate at HIVY?`, answer: `Yes! ${areaName} is one of our top customer localities. We regularly host couples from ${areaName} for candlelight dinners, birthday surprises, proposals, and anniversaries. Many return multiple times for different milestones — which we consider the highest compliment.` },
    ],
    // Pool C
    [
      { question: `What makes ${venue} the top celebration venue for ${areaName} residents?`, answer: `Three things: complete privacy (no shared spaces), turnkey celebrations (we handle every detail from décor to food to photography), and unmatched ambiance (hand-placed candles, fairy lights, fresh flowers). ${areaName} couples don't need to plan anything — just show up and celebrate.` },
      { question: `Can ${areaName} couples book a same-day celebration at HIVY?`, answer: `Same-day bookings are possible on weekdays if slots are available. Call ${siteConfig.phone} to check real-time availability. For weekends and special occasions, advance booking is strongly recommended to avoid disappointment.` },
      { question: `What's the price range for celebrations at HIVY for ${areaName} couples?`, answer: `Packages start from ₹4,700 and include venue access, themed decorations, food, cake, mocktails, and music for 3 hours. There are no hidden charges — the listed price is the exact amount you pay. Premium packages with photography and extras are also available.` },
      { question: `Does HIVY accommodate small groups from ${areaName} or couples only?`, answer: `Our primary focus is couples (2 people), but we offer the Royal Celebration setup for small groups of up to 4 guests. This works well for double dates, intimate family celebrations, or birthday surprises with a close friend present.` },
      { question: `How does HIVY ensure unique experiences for ${areaName} couples who visit multiple times?`, answer: `Each of our 5+ tent styles has a completely different aesthetic, and decorations are customised per booking. Returning ${areaName} couples often try a different setup and theme each visit. Our menu also rotates seasonal specials to keep the dining experience fresh.` },
      { question: `What should ${areaName} couples wear to a HIVY celebration?`, answer: `There's no strict dress code, but most couples dress in smart-casual or semi-formal attire to match the elegant ambiance. For pre-wedding photoshoots, coordinated outfits are recommended. Our setups photograph beautifully with any attire.` },
      { question: `Can ${areaName} couples request specific music for their celebration?`, answer: `Absolutely! Every tent is equipped with a Bluetooth speaker. Connect your phone and play your own romantic playlist or favourite songs throughout the 3-hour session. If you prefer, we also have curated playlists for different occasions.` },
      { question: `Is HIVY suitable for proposal celebrations by ${areaName} residents?`, answer: `HIVY is ${city}'s most popular proposal venue! We set up rose petal pathways, "Marry Me" signs, ring boxes hidden in desserts, and our photographers capture the exact moment. We've helped coordinate over 500 successful proposals for couples across ${city}.` },
      { question: `What happens if I'm running late from ${areaName} to HIVY?`, answer: `Traffic from ${areaName} is usually predictable, but if you're running late, simply call us. We hold your setup for up to 30 minutes past the booked time at no extra charge. Your 3-hour session starts from when you actually arrive.` },
      { question: `How do I book a celebration at HIVY from ${areaName}?`, answer: `Call ${siteConfig.phone}, send a WhatsApp message, or fill out the booking form on our website. Share your occasion, preferred date and time slot, and package preference. Our team confirms availability and sends booking details within minutes.` },
    ],
  ];

  const faqContent = areaFaqPools[areaHash % areaFaqPools.length];

  const closingCta = `${areaName} couples, your perfect celebration awaits! Whether it's a birthday, anniversary, proposal, or just a special date night, ${venue} is here to make it magical.

Contact us today on WhatsApp (${siteConfig.phone}) to check availability and book your slot. The drive from ${areaName} is short, but the memories will last forever!

We look forward to welcoming you from ${areaName} and being part of your beautiful love story!`;

  return {
    introduction,
    sections,
    localTips,
    servicesList,
    nearbyAreas,
    testimonialContent,
    faqContent,
    closingCta
  };
}

// ==================== HELPER FUNCTIONS ====================

export function countKeywordMentions(content: string, keyword: string): number {
  const regex = new RegExp(keyword, 'gi');
  return (content.match(regex) || []).length;
}

// ==================== SERVICE PAGE CONTENT GENERATOR ====================

export interface ServicePageContent {
  introduction: string;
  sections: FFCContentSection[];
  inclusions: string[];
  testimonials: string;
  faqs: { question: string; answer: string }[];
}

export function generateServicePageContent(service: ServiceCategory): ServicePageContent {
  const name = service.name;
  const nameLower = name.toLowerCase();
  const venue = "HIVY - Place for Celebrations";
  const city = "Surat";

  const hashCode = service.slug.split('').reduce((a, b) => ((a << 5) - a + b.charCodeAt(0)) | 0, 0);
  const variation = Math.abs(hashCode) % 4;

  const introVariations = [
    `${city} has always been a city that celebrates love with fervour, and when it comes to ${nameLower}, ${venue} has emerged as the undisputed favourite among couples. Since our inception, we have hosted over 3,000 ${nameLower} events, each one meticulously crafted to reflect the unique love story of every couple who walks through our doors.\n\nWhat sets our ${nameLower} services apart is the combination of premium private setups, delicious cuisine, and an unwavering commitment to making your celebration absolutely perfect. Whether you are a young couple planning your first ${nameLower} together or a seasoned pair celebrating decades of togetherness, our venue adapts to your vision and delivers beyond expectations.`,
    `There is something magical about celebrating love in a setting designed exclusively for romance. At ${venue} in ${city}, our ${nameLower} services transform ordinary occasions into extraordinary memories that couples treasure for a lifetime.\n\nEvery ${nameLower} we organise begins with understanding your story. Our dedicated team takes the time to learn about your preferences, your partner's personality, and the emotions you want to capture. This personalised approach has earned us the trust of thousands of ${city} couples and a consistent 4.9-star rating across all platforms.`,
    `Love deserves to be celebrated in spectacular fashion, and ${venue} provides the perfect canvas for your ${nameLower} dreams in ${city}. Our venue, perched with stunning city views, offers both intimate glass house settings and elegant private setups that create the ideal atmosphere for romance.\n\nFrom the moment you contact us to the final goodbye after your ${nameLower}, every interaction is designed to exceed your expectations. Our team coordinates decorations, food, music, lighting, and special touches so that you can simply arrive and immerse yourself in the joy of celebrating with your loved one.`,
    `In a city brimming with restaurants and event spaces, ${venue} stands alone as ${city}'s premier destination for ${nameLower}. The reason is simple — we do not just host events, we create experiences. Each ${nameLower} at our venue is a carefully orchestrated symphony of ambiance, flavour, and emotion.\n\nOur philosophy centres on three pillars: absolute privacy, stunning aesthetics, and impeccable service. When you book a ${nameLower} with us, you are not sharing the space with anyone else. The entire setup — from the twinkling fairy lights to the last rose petal — exists solely for you and your partner.`
  ];

  const sections: FFCContentSection[] = [];

  if (service.slug === 'birthday-surprise') {
    sections.push(
      {
        heading: `The Art of Planning the Perfect Birthday Surprise in ${city}`,
        content: `A birthday surprise is more than balloons and cake — it is an expression of how deeply you know and cherish your partner. At ${venue}, we have perfected this art over thousands of celebrations.\n\nOur birthday surprise process begins with a detailed consultation where we learn about the birthday person's favourite colours, music preferences, food choices, and what would genuinely make them feel special. Do they love classic elegance with roses and candles, or would they prefer a vibrant party atmosphere with colourful balloons and upbeat music? We adapt our setups accordingly.\n\nOne of the most popular elements is the surprise entrance. We help coordinate the timing so that your partner walks into a fully decorated venue without any suspicion. Many couples from ${city} have shared videos of the exact moment their partner's jaw dropped — and those reactions are priceless. Our team remains discreetly available throughout, serving food and drinks while you enjoy three uninterrupted hours of private celebration.`
      },
      {
        heading: `Birthday Celebration Ideas That Work Every Time`,
        content: `Over the years, we have seen what works and what creates the most memorable birthday celebrations. Here are ideas that consistently delight:\n\n**Memory Lane Setup**: Display photos from your journey together alongside the decorations. We provide elegant frames and display areas for this personal touch.\n\n**Custom Cake Messages**: Go beyond "Happy Birthday." Write a heartfelt message, an inside joke, or a meaningful quote on the cake. Our cake comes beautifully decorated and ready for your message.\n\n**Music Playlist**: Share your partner's favourite songs, and we will play them throughout the evening. That one song from your first date? It will be playing when they walk in.\n\n**Letter Reading**: Write a letter expressing what they mean to you. The intimate private setting creates the perfect moment to share those words.\n\n**Time Capsule**: Bring items that represent your relationship — tickets from your first movie, a photo from your first trip — and create a time capsule together during the celebration.\n\n**Social Media Surprise**: If your partner loves social media, our setups are designed to be Instagram-worthy. The lighting, angles, and decoration placement all consider how they will look in photographs and reels.\n\nEvery birthday celebration at ${venue} in ${city} starts from ₹4,700 and includes decorations, food, welcome drinks, music, and three hours of exclusive venue access.`
      }
    );
  } else if (service.slug === 'candlelight-dinner') {
    sections.push(
      {
        heading: `What Makes a Candlelight Dinner Truly Special in ${city}`,
        content: `A candlelight dinner is the quintessential romantic experience, and at ${venue}, we elevate this timeless tradition to new heights. The soft flicker of candles, carefully curated music, and the aroma of freshly prepared food create an atmosphere where conversations flow effortlessly and connections deepen.\n\nOur candlelight dinner experience in ${city} goes beyond what any restaurant can offer because of one critical element — complete privacy. There are no other diners, no waiting staff hovering nearby, and no distractions. It is just two people, surrounded by romance, sharing food and conversation in a space designed exclusively for them.\n\nThe evening begins with a welcome drink as you take in the beautifully decorated setup. Whether you choose our open-air venue with panoramic views of ${city}'s skyline or the intimate glass house with fairy lights, the ambiance is designed to make you forget the world outside. As the evening progresses through cheese fondue, paneer tortilla, peri peri fries with mac & cheese, and a rich chocolate dessert, every course is served at your pace — no rushing, no interruptions.`
      },
      {
        heading: `Planning the Perfect Candlelight Dinner Date`,
        content: `Whether you are celebrating a specific occasion or simply want to rekindle the spark, here is how to make the most of your candlelight dinner at ${venue}:\n\n**Choose the Right Time Slot**: For the most romantic experience, we recommend the Evening slot (4-7 PM for golden hour beauty) or the Dinner slot (7-10 PM for classic nighttime romance). Late Night slots (10 PM-1 AM) are perfect for couples who love staying up.\n\n**Personalise the Experience**: Share any special requests — a particular song for your entrance, a custom message displayed in the decorations, or a specific colour theme. Our team incorporates these details seamlessly.\n\n**Dress the Part**: While there is no formal dress code, many couples enjoy dressing up for their candlelight dinner. Coordinated outfits photograph beautifully in our setup.\n\n**Be Present**: Leave your phones aside for at least the first hour. The beauty of a private candlelight dinner is the opportunity to truly connect without digital distractions.\n\n**Capture the Moments**: Do remember to take photographs, though! Our setups are designed with photo-friendly lighting and backdrops. Many couples from ${city} have told us their candlelight dinner photos are among their favourite pictures together.\n\nOur candlelight dinner packages start from ₹4,700 inclusive of everything — no hidden charges, no surprises on the bill, just pure romantic indulgence.`
      }
    );
  } else if (service.slug === 'anniversary-celebration') {
    sections.push(
      {
        heading: `Celebrating Every Milestone of Your Love Story`,
        content: `Anniversaries are sacred landmarks in a couple's journey together. Whether it is your 1st anniversary filled with the freshness of new love, your 10th anniversary celebrating a decade of partnership, or your 25th anniversary honouring a silver streak of commitment — each milestone deserves a celebration that matches its significance.\n\nAt ${venue} in ${city}, we understand that every anniversary carries different emotions. The excitement of early years, the comfort of established love, and the deep gratitude of long-standing partnerships — our team tailors each anniversary celebration to resonate with where you are in your journey.\n\nWhat makes our anniversary celebrations special is the attention to personalisation. Share your love story with our team, and we will weave elements of it into your celebration. Perhaps recreating something from your wedding, incorporating your favourite flowers, or setting up the space in colours that are meaningful to your relationship. It is these thoughtful touches that transform a good celebration into an unforgettable one.`
      },
      {
        heading: `Anniversary Gift Ideas Beyond the Traditional`,
        content: `While jewellery and flowers are classic anniversary gifts, an experience at ${venue} adds a dimension of memory-making that material gifts cannot replicate. Here are ways to elevate your anniversary celebration:\n\n**Renewal of Feelings**: Use the intimate setting to express what your partner means to you. Our private setup gives you the space and ambiance for heartfelt conversations without inhibition.\n\n**Photo Documentation**: Many ${city} couples use their anniversary celebration at our venue for a mini photoshoot with their personal photographer. Our setups provide multiple photo-worthy backdrops.\n\n**Surprise Element**: Even if both partners know about the celebration, add a surprise within it — a handwritten letter, a video message from friends and family played on your phone, or a gift revealed during the evening.\n\n**Recipe for Every Year**: First anniversaries are often passionate and exciting — we can match that with vibrant colours and upbeat music. Longer anniversaries benefit from understated elegance and soft candlelight.\n\n**Create Traditions**: Many couples from ${city} make HIVY their annual anniversary tradition. Coming back each year to the same venue but with a fresh setup creates a beautiful continuity in your love story.\n\nAnniversary packages at ${venue} start from ₹4,700 with full decorations, food, welcome drinks, cake (complimentary in select packages), and three hours of private celebration.`
      }
    );
  } else if (service.slug === 'proposal') {
    sections.push(
      {
        heading: `Planning the Proposal They Will Never Forget`,
        content: `A marriage proposal is one of life's most significant moments, and at ${venue}, we take the responsibility of being part of this moment very seriously. Our team has witnessed hundreds of proposals, and each time, the joy and emotion feel brand new.\n\nSuccessful proposals require careful planning, and our team guides you through every step. From the initial consultation where we understand your vision, to the day-of coordination where we manage every detail, our goal is to ensure the only thing you need to worry about is saying the right words.\n\nThe venue itself sets the stage beautifully. Imagine your partner walking into a candlelit space adorned with rose petals, fairy lights, and a path leading to where you stand with the ring. The city lights of ${city} twinkle in the background, soft music plays their favourite song, and the moment is absolutely perfect. That is what we create for every proposal at ${venue}.\n\nWe also assist with the practical aspects — timing the arrival so decorations are perfect, creating a believable cover story, and even helping with ring concealment if needed. Several couples have shared that our coordination made an inherently stressful event feel completely smooth.`
      },
      {
        heading: `Proposal Setup Ideas for Every Personality`,
        content: `Not every proposal needs to be a grand spectacle. At ${venue}, we create setups that match your partner's personality:\n\n**The Classic Romantic**: Rose petals, candles everywhere, soft instrumental music, and an elegant ring presentation. Timeless and always breathtaking.\n\n**The Fun-Loving Proposal**: Colourful balloons, playful decorations, upbeat music transitioning to a romantic song at the key moment. Perfect for couples who love to laugh together.\n\n**The Intimate Whisper**: Minimalist setup with warm lighting, a cosy corner, and the focus entirely on the two of you. Sometimes less truly is more.\n\n**The Grand Gesture**: Full venue decorations with a thematic setup — from fairy tale to bohemian to modern chic. For partners who love going all out.\n\n**The Photo Proposal**: A setup designed specifically for the moment to be captured on camera, with a photographer hidden and ready. We have coordinated many of these in ${city}.\n\nEvery proposal package includes coordination assistance, decoration setup, food and welcome drinks, background music, and three hours of private venue access. Our most popular packages for proposals range from ₹5,100 to ₹6,900. The investment in this once-in-a-lifetime moment is well worth it.`
      }
    );
  } else if (service.slug === 'surprise-date') {
    sections.push(
      {
        heading: `Why Surprise Dates Keep Relationships Alive`,
        content: `Routine is the silent adversary of romance. When days blend into each other, and date nights become predictable dinner-and-movie outings, relationships lose their spark. A surprise date at ${venue} disrupts this pattern in the most beautiful way possible.\n\nThe psychology behind surprise dates is well established — unexpected positive experiences create stronger emotional memories and deeper relational bonds. When your partner realises you have planned something extraordinary without them knowing, it communicates effort, thoughtfulness, and love in a way that words alone cannot.\n\nAt ${venue} in ${city}, we specialise in making surprise dates seamless. Many partners worry about logistics — How do I get them here without raising suspicion? What if they have other plans? What if they guess the surprise? Our team has navigated all these challenges thousands of times. We provide cover story suggestions, timing coordination, and backup plans.\n\nThe look on your partner's face when they walk into a fully decorated private venue, with their favourite music playing and romantic lighting setting the mood, is worth every moment of planning. That genuine, unguarded reaction of joy and surprise — it is what makes our work so rewarding.`
      },
      {
        heading: `Surprise Date Ideas That Create Lasting Memories`,
        content: `Here are proven surprise date ideas that ${city} couples have loved at ${venue}:\n\n**The Midweek Escape**: Who says dates are only for weekends? Surprising your partner on a random Tuesday evening elevates the surprise factor exponentially. Book an evening slot and break the weekday monotony.\n\n**The Anniversary Month Date**: Do not wait for the exact anniversary date — celebrate during the anniversary month with an unexpected date. It shows you remember and care beyond just one day.\n\n**The Just-Because Date**: No occasion, no reason — just love. These are often the most appreciated surprises because they are purely motivated by wanting to make your partner happy.\n\n**The Milestone Celebration**: Did your partner get a promotion, complete a project, or achieve a personal goal? Celebrate their success with a surprise date.\n\n**The Monthly Tradition**: Some ${city} couples book a surprise date every month, alternating who plans it. This creates a wonderful tradition of ongoing romance.\n\nEvery surprise date at ${venue} includes complete setup, food, welcome drinks, music, and three hours of private celebration. Our team handles everything — you just bring your partner and your love.`
      }
    );
  } else if (service.slug === 'pre-wedding-shoot') {
    sections.push(
      {
        heading: `Why Indoor Pre-Wedding Shoots Are Trending in ${city}`,
        content: `The pre-wedding shoot landscape is evolving rapidly, and indoor venue shoots at places like ${venue} are becoming increasingly popular in ${city}. The reasons are practical and aesthetic.\n\nFirst, weather dependence disappears entirely. ${city}'s unpredictable weather — scorching summers, monsoon rains, or winter fog — can derail outdoor shoot plans. Our indoor and covered venue setups guarantee perfect conditions regardless of the season.\n\nSecond, privacy is paramount. Many ${city} couples feel self-conscious posing for intimate photographs in public parks or beaches. At ${venue}, the entire space is yours. There are no onlookers, no interruptions, and no awkward moments. This privacy translates directly into more natural, relaxed, and genuinely intimate photographs.\n\nThird, variety without travel. Our venue offers multiple distinct settings — the city-view terrace, elegant glass house, candlelit pathway, balloon arch, fairy light wall, and rustic tent setups. Capturing diverse looks in a single location saves hours of travel between outdoor locations and keeps energy levels high throughout the shoot.\n\nFourth, lighting control. Professional photographers particularly appreciate our venue because both natural and artificial lighting options are available. Golden hour terrace shots combined with moody indoor portraits create a diverse portfolio from one session.`
      },
      {
        heading: `Making the Most of Your Pre-Wedding Shoot`,
        content: `To get stunning results from your pre-wedding shoot at ${venue} in ${city}, consider these tips from our experience with hundreds of shoots:\n\n**Outfit Changes**: Bring 2-3 outfits. Start with your most formal look for the elegantly decorated main setup, transition to something casual for candid shots, and end with coordinated fun outfits for playful frames.\n\n**Photographer Briefing**: Share reference images with your photographer beforehand, and let them visit the venue (or view our gallery) to plan shots. Photographers who know the space produce significantly better results.\n\n**Timing**: Book the afternoon or evening slot for the best lighting variety. Start with indoor shots during daylight, then move to the terrace during golden hour.\n\n**Props**: While our decorations serve as excellent props, personal items add meaning — your proposal ring, matching accessories, a favourite book, or items from your love story.\n\n**Music**: Request your favourite songs during the shoot. Comfortable backgrounds encourage natural expressions and genuine interactions between couples.\n\n**Duration**: Our 3-hour slot provides ample time for a thorough pre-wedding shoot. Most ${city} photographers recommend at least 2 hours of shooting time, and our slot accommodates this comfortably.\n\nPre-wedding shoot packages at ${venue} include full venue decoration, welcome drinks, background music, and three hours of exclusive access.`
      }
    );
  } else if (service.slug === 'baby-moments') {
    sections.push(
      {
        heading: `Celebrating the Joy of New Beginnings`,
        content: `The journey to parenthood is filled with milestone moments that deserve beautiful celebrations. At ${venue} in ${city}, we have created a specialised baby moments service that helps couples capture and celebrate every step of this incredible journey.\n\nFrom the excitement of announcing the pregnancy to friends and family, to the anticipation of a gender reveal party, to the tenderness of a baby shower — each event carries unique emotions. Our team designs setups that honour these emotions with appropriate themes, colours, and atmospheres.\n\nBaby announcement celebrations at our venue feature charming props, elegant balloon arrangements, and photo-ready backdrops that make for perfect social media announcements. Gender reveals get dramatic decorations in neutral tones with the big colour reveal incorporated into the setup — confetti, balloons, or cake cutting moments that everyone remembers.\n\nFor baby showers and pregnancy photoshoots, our glass house and private venue provide intimate, beautiful settings. The soft lighting and romantic ambiance create photographs that expectant mothers treasure forever. Many ${city} couples have told us that their baby moment celebration at ${venue} produced their favourite pregnancy photographs.`
      },
      {
        heading: `Baby Celebration Ideas at Our Venue`,
        content: `Here are popular baby moment celebrations that ${city} couples love at ${venue}:\n\n**Pregnancy Announcement Date**: Before you tell the world, celebrate the news privately as a couple. A romantic dinner with baby-themed elements makes the moment intimate and special.\n\n**Gender Reveal for Two**: While large gender reveal parties are popular, many couples prefer an intimate reveal with just the two of them. Our private setup ensures this precious moment stays between you.\n\n**Baby Moon Dinner**: A romantic pre-baby dinner celebrating your last months as a couple before becoming parents. This is increasingly popular among ${city} couples.\n\n**Maternity Photoshoot**: Our multiple setup options provide beautiful backdrops for bump photos. The versatility of lighting and themes in one venue means more variety in less time.\n\n**Baby Shower Mini Celebration**: An intimate baby shower with close friends or family in a private, decorated venue. Our food menu and celebration setup handle the details while you enjoy.\n\nAll baby moment packages include venue decoration customised to your theme, welcome drinks, food, background music, and three hours of private celebration time. Packages start from ₹4,700.`
      }
    );
  } else {
    // Valentine's Week or any other service
    sections.push(
      {
        heading: `Making the Most of ${name} in ${city}`,
        content: `${name} at ${venue} is an experience that transcends ordinary celebrations. Our venue has become the most sought-after destination in ${city} for couples who want their special moments to feel truly extraordinary.\n\nWhat distinguishes our ${nameLower} service from others is the holistic approach we take to celebration planning. We do not simply set up decorations and serve food — we create an atmosphere that engages all senses. The visual beauty of carefully arranged flowers and lights, the gentle fragrance of candles, the curated playlist that matches your mood, the comfort of private seating, and the taste of our specially crafted menu all come together to create a multi-sensory romantic experience.\n\nOur team's expertise in ${nameLower} has been built over thousands of successful celebrations. We understand the nuances — the lighting that flatters, the music volume that allows conversation, the food timing that does not interrupt moments, and the decoration placement that creates depth and photographs well. These details may seem small, but they collectively create the difference between a good celebration and a spectacular one.`
      },
      {
        heading: `How We Make Every ${name} Celebration Unique`,
        content: `At ${venue}, no two ${nameLower} celebrations look the same, and that is by design. Here is our approach to ensuring uniqueness:\n\n**Personal Consultation**: Before every ${nameLower} booking, our team has a detailed conversation about your preferences, the occasion, your partner's personality, and any specific vision you have.\n\n**Theme Customisation**: Each of our 6 setup options can be customised with different colour schemes, decoration styles, and prop arrangements. This means even couples who book the same package get visually distinct experiences.\n\n**Occasion-Specific Touches**: A ${nameLower} for a birthday will feel different from one for an anniversary or a just-because date. We adjust everything from the decoration focus to the background music genre to match the occasion.\n\n**Seasonal Adaptation**: Our setups evolve with seasons and trends. We regularly update our decoration inventory, introduce new props, and incorporate current aesthetic trends while maintaining the classic romance our venue is known for.\n\n**Feedback Integration**: After every celebration, we collect feedback and continuously improve. This means our ${nameLower} service today is the culmination of thousands of learnings from previous celebrations.\n\nWhether you are celebrating ${nameLower} for the first time or the fiftieth time, our team ensures the experience feels fresh, personal, and truly special.`
      }
    );
  }

  const inclusions = [
    `3 Mesmerising Hours of Private ${name}`,
    "Welcome Drink for Both Guests",
    `Themed ${name} Decorations & Props`,
    "Cheese Fondue with Accompaniments",
    "Paneer Tortilla & Peri Peri Fries",
    "Mac & Cheese & Tangy Loaf",
    "Chocolate Brownie Dessert",
    "Soft Romantic Background Music",
    "Candle-Lit Romantic Ambiance",
    "Photo-Ready Backdrops & Lighting"
  ];

  const testimonialVariations = [
    `"Our ${nameLower} at ${venue} was beyond anything we imagined. The decorations were stunning, the food was delicious, and the privacy made it so special. We are already planning our next visit!" – Priya & Rahul, ${city}\n\n"I surprised my wife with a ${nameLower} and she was speechless! The team coordinated everything perfectly. From start to finish, the experience was flawless." – Karan S., Adajan\n\n"We have tried other venues in ${city}, but nothing compares to the ${nameLower} experience at HIVY. The attention to detail is remarkable." – Meera & Vivek, Vesu`,
    `"This was our third celebration at ${venue} and they keep getting better. The ${nameLower} setup was beautifully done, the food was excellent, and our three hours flew by!" – Ananya & Arjun, ${city}\n\n"I was nervous about planning a ${nameLower} surprise, but the HIVY team made it so easy. They coordinated everything and it was perfect!" – Sneha P., Althan\n\n"Best ${nameLower} venue in ${city}, hands down. Private, romantic, delicious food, and such a warm team." – A Happy ${city} Couple`,
    `"The ${nameLower} experience exceeded all expectations. From the moment we walked in to the moment we left, everything was magical." – Riya & Drashit, ${city}\n\n"We celebrated our special day with a ${nameLower} at HIVY and it was the best decision ever. The setup was gorgeous and the food was amazing!" – Komal & Neel, Varachha\n\n"What impressed me most was the personalisation. Our ${nameLower} felt truly custom-made for us." – Pooja & Harshit, Pal`
  ];

  // Generate 10 unique FAQs per service
  const serviceFaqs: { question: string; answer: string }[] = [
    { question: `How do I book a ${nameLower} at HIVY in ${city}?`, answer: `Book by calling ${siteConfig.phone}, sending a WhatsApp message, or filling out our online form. Share your preferred date, time slot, and any customisation requests. Our team confirms availability within minutes and guides you through package selection.` },
    { question: `What is included in the ${nameLower} package at HIVY?`, answer: `Every ${nameLower} package includes 3 hours of private venue access, themed decorations (fairy lights, candles, balloons, flowers), a three-course meal with starters, main course and desserts, welcome drinks, mocktails, celebration cake (in select packages), background music, and a personalised welcome board.` },
    { question: `What are the prices for ${nameLower} packages?`, answer: `Our ${nameLower} packages start from ₹4,700 and go up to ₹6,900 for premium setups. Every package is all-inclusive with zero hidden charges — the price on our website is exactly what you pay. No service tax or additional fees.` },
    { question: `Is the venue private during a ${nameLower} celebration?`, answer: `Yes, 100% private. Your celebration tent is exclusively reserved for you and your partner during the entire 3-hour slot. No other guests, no shared spaces, no interruptions. This complete privacy is what sets HIVY apart from restaurants and hotels.` },
    { question: `Can I customise the decorations for my ${nameLower}?`, answer: `Absolutely! You can request specific colour themes, neon message signs, custom banners, particular flower varieties, balloon arrangements, personalised props, and more. Share your vision and our decoration team will bring it to life. Some customisations may carry a small additional charge.` },
    { question: `What time slots are available for ${nameLower} bookings?`, answer: `We offer Lunch (12 PM–5 PM), Evening (4 PM–9 PM), and Dinner (7 PM–11 PM) sessions. Each booking gets a dedicated 3-hour slot. Evening and dinner slots are most popular for ${nameLower} due to the enhanced candlelight ambiance.` },
    { question: `How far in advance should I book a ${nameLower}?`, answer: `We recommend booking 3-5 days ahead for weekdays and 7-10 days for weekends. For special occasions like Valentine's Day, New Year's Eve, and festival dates, book at least 2 weeks in advance as slots fill up quickly.` },
    { question: `Can I plan a surprise ${nameLower} for my partner?`, answer: `Yes — surprise coordination is our speciality! Our team helps with cover stories, timing logistics, and ensures the setup is picture-perfect before your partner arrives. We've successfully executed over 500 surprise celebrations. Just tell us your plan and we'll handle the rest.` },
    { question: `Is the food vegetarian for ${nameLower} celebrations?`, answer: `Yes, HIVY is a pure vegetarian café. All dishes are freshly prepared on-site using premium ingredients. We also accommodate Jain dietary preferences (no onion, no garlic) and other custom requirements at no additional charge — just mention them while booking.` },
    { question: `What is the cancellation and rescheduling policy for ${nameLower}?`, answer: `Rescheduling is free if informed at least 24 hours before your slot. The rescheduled date must fall within one month of the original booking, subject to availability. Please note that a no-refund policy applies to all bookings. Call ${siteConfig.phone} to reschedule.` },
  ];

  return {
    introduction: introVariations[variation],
    sections,
    inclusions,
    testimonials: testimonialVariations[variation % testimonialVariations.length],
    faqs: serviceFaqs
  };
}

// ==================== PACKAGE PAGE CONTENT GENERATOR ====================

export interface PackagePageContent {
  experienceDescription: string;
  idealFor: string;
  bookingGuide: string;
}

export function generatePackagePageContent(pkg: { name: string; slug: string; price: number; perfectFor: string[]; cakeIncluded: boolean }): PackagePageContent {
  const venue = "HIVY - Place for Celebrations";
  const city = "Surat";

  const experienceDescription = `The ${pkg.name} experience at ${venue} is more than a celebration — it is a carefully curated journey through romance, designed to make you and your partner feel like the only two people in the world. From the moment you step onto our venue and see the ${pkg.name} setup waiting for you, a sense of wonder takes over.

Our team begins preparing your ${pkg.name} setup three hours before your arrival, ensuring every element is perfect. Fairy lights are positioned for the ideal warm glow, flowers are freshly arranged, candles are strategically placed for ambient lighting, and your personalised touches are incorporated throughout the space. The result is a visual masterpiece that draws genuine gasps of delight from couples.

Your ${pkg.name} experience unfolds over three uninterrupted hours. It begins with a welcome drink as you soak in the ambiance, followed by a progression of our curated café-style cuisine. The cheese fondue served with cheese balls, wedges, and nachos sets a leisurely tone. The paneer tortilla and peri peri fries with mac & cheese provide hearty satisfaction, while the tangy loaf with cheesy garlic sauce adds a unique flavour note. The evening culminates with a rich chocolate brownie that pairs perfectly with the romantic setting.

Throughout the experience, curated romantic music plays at a volume that enhances the atmosphere without intruding on your conversation. This attention to audio balance is something many ${city} couples specifically appreciate about the ${pkg.name} setup — it creates mood without becoming a distraction.

${pkg.cakeIncluded ? `The ${pkg.name} package also includes a complimentary celebration cake, making it a complete package for birthdays, anniversaries, and other milestone celebrations. The cake-cutting moment in our candlelit setting creates beautiful photographs and unforgettable memories.` : `While cake is not included in the ${pkg.name} base price, it is available at just ₹500 — a small addition that enhances birthday and anniversary celebrations. Many couples also opt for our non-alcoholic fruit champagne (₹500) for a bubbly toast.`}

What truly elevates the ${pkg.name} from a good experience to an extraordinary one is the complete privacy. No other guests, no interference, and no time pressure within your 3-hour window. It is your space, your moment, your celebration.`;

  const idealFor = `The ${pkg.name} at ₹${pkg.price.toLocaleString()} is perfectly designed for ${pkg.perfectFor.join(', ')}. Here is how different celebrations unfold in this setup:

**Birthday Celebrations**: The ${pkg.name} setup creates an incredible birthday atmosphere. With romantic decorations surrounding you, a delicious food spread, and ${pkg.cakeIncluded ? 'a complimentary celebration cake' : 'cake available on request'}, birthday celebrations become intimate affairs that feel personal and special.

**Anniversary Dinners**: For couples marking another year together, the ${pkg.name} provides the romantic ambiance that anniversaries deserve. The candles, flowers, and soft music create a setting where couples naturally reminisce about their journey and dream about the future.

**Surprise Dates**: Planning a surprise? The ${pkg.name} setup is dramatic enough to wow your partner the moment they see it, yet comfortable enough for a relaxed three-hour experience together.

**Proposals**: Several couples have chosen the ${pkg.name} setup for their proposal moment. The romantic atmosphere and private setting create a perfect stage for one of life's most important questions.

**Pre-Wedding Celebrations**: Engaged couples use the ${pkg.name} for pre-wedding photoshoots and intimate celebrations. The setup provides multiple photo-worthy angles and backdrops.

**Just-Because Dates**: You do not need a special occasion to celebrate love. Many ${city} couples book the ${pkg.name} simply to enjoy quality time together away from routine.

Whatever your reason for choosing the ${pkg.name}, our team ensures the experience delivers on every front — visual beauty, culinary delight, emotional resonance, and lasting memories.`;

  const bookingGuide = `Booking the ${pkg.name} is simple and straightforward. Here is everything you need to know:

**How to Book**: Contact us via WhatsApp at ${siteConfig.phone} or use the booking form above. Mention the ${pkg.name} and your preferred date and time slot.

**Available Slots**: Choose from Lunch (12-3 PM), Evening (4-7 PM), Dinner (7-10 PM), or Late Night (10 PM-1 AM). Each slot provides a full 3-hour experience.

**Advance Booking**: We recommend booking 3-5 days ahead for weekdays and 7-10 days for weekends. Holiday seasons and Valentine's Week require earlier booking.

**Payment**: A partial advance payment confirms your ${pkg.name} booking. The remaining balance is due before your celebration begins.

**Customisation**: Want to add personal touches? Share your preferences — colour themes, special messages, specific songs, dietary requirements — and our team will accommodate them.

**Cancellation**: Rescheduling is available up to one day before your slot, subject to availability within one month. No refund policy applies.

**What to Bring**: Just yourselves and your love! Everything else — decorations, food, music, ambiance — is handled by our team. You may bring a photographer if you wish.

**Arrival**: Plan to arrive at the scheduled time. Our team will greet you and guide you to your ${pkg.name} setup. The three-hour clock starts from your arrival time.`;

  return { experienceDescription, idealFor, bookingGuide };
}
