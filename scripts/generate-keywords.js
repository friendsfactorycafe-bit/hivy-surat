#!/usr/bin/env node
/**
 * Generate 2400+ additional keywords for HIVY expanded keywords system.
 * Run: node scripts/generate-keywords.js
 * This outputs TypeScript code to paste into lib/expanded-keywords.ts
 */

const fs = require('fs');
const path = require('path');

// Read existing slugs to avoid duplicates
const existingFile = fs.readFileSync(
  path.join(__dirname, '../lib/expanded-keywords.ts'),
  'utf-8'
);
const existingSlugs = new Set();
const slugRegex = /createKeyword\("([^"]+)"/g;
let match;
while ((match = slugRegex.exec(existingFile)) !== null) {
  existingSlugs.add(match[1]);
}
console.error(`Found ${existingSlugs.size} existing slugs`);

function toSlug(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function addKeyword(arr, basePhrase, category) {
  const slug = toSlug(basePhrase) + '-in-surat';
  if (!existingSlugs.has(slug) && slug.length < 80) {
    existingSlugs.add(slug);
    arr.push(`  createKeyword("${slug}", "${category}"),`);
  }
}

// ============================================================================
// BIRTHDAY KEYWORDS - Generate massive long-tail variants
// ============================================================================
const extraBirthday = [];

// Age-specific birthdays
for (let age = 18; age <= 60; age++) {
  addKeyword(extraBirthday, `${age}th-birthday-celebration`, 'birthday-surprise');
  if (age <= 35) {
    addKeyword(extraBirthday, `${age}th-birthday-surprise-ideas`, 'birthday-surprise');
  }
}

// Milestone birthdays
['sweet-16', 'turning-18', 'turning-21', 'turning-25', 'turning-30', 
 'turning-40', 'turning-50', '30th-birthday', '40th-birthday', '50th-birthday',
 '60th-birthday'].forEach(m => {
  addKeyword(extraBirthday, `${m}-celebration`, 'birthday-surprise');
  addKeyword(extraBirthday, `${m}-party`, 'birthday-surprise');
});

// Birthday + relationship combos  
const bRelations = ['boyfriend', 'girlfriend', 'husband', 'wife', 'partner', 'fiance', 'fiancee',
  'best-friend', 'bestie', 'soulmate', 'bae', 'crush', 'lover'];
const bActions = ['surprise', 'celebration', 'party', 'gift-ideas', 'decoration',
  'surprise-ideas', 'party-ideas', 'venue', 'dinner', 'treat'];
bRelations.forEach(rel => {
  bActions.forEach(act => {
    addKeyword(extraBirthday, `birthday-${act}-for-${rel}`, 'birthday-surprise');
  });
});

// Birthday themes
const bThemes = ['gold-theme', 'black-gold-theme', 'rose-gold-theme', 'red-theme', 
  'pink-theme', 'white-theme', 'neon-theme', 'retro-theme', 'bollywood-theme',
  'filmy-theme', 'royal-theme', 'garden-theme', 'floral-theme', 'star-theme',
  'fairy-theme', 'princess-theme', 'vintage-theme', 'luxury-theme',
  'minimalist-theme', 'bohemian-theme', 'rustic-theme'];
bThemes.forEach(theme => {
  addKeyword(extraBirthday, `${theme}-birthday-party`, 'birthday-surprise');
  addKeyword(extraBirthday, `${theme}-birthday-decoration`, 'birthday-surprise');
});

// Birthday extras
['midnight-birthday-surprise', 'surprise-birthday-party-planner',
 'birthday-room-decoration-with-balloons', 'birthday-room-decoration-with-candles',
 'birthday-room-decoration-with-flowers', 'birthday-party-hall-for-couples',
 'birthday-celebration-at-restaurant', 'birthday-celebration-at-cafe',
 'last-minute-birthday-surprise', 'budget-birthday-celebration',
 'luxury-birthday-celebration', 'premium-birthday-surprise',
 'unique-birthday-celebration', 'creative-birthday-surprise',
 'memorable-birthday-celebration', 'best-birthday-gift-experience',
 'birthday-surprise-with-cake', 'birthday-surprise-with-flowers',
 'birthday-surprise-with-candles', 'birthday-dinner-date',
 'birthday-lunch-date', 'birthday-brunch', 'birthday-evening-party',
 'birthday-night-celebration', 'private-birthday-dinner',
 'intimate-birthday-celebration', 'couple-birthday-celebration',
 'romantic-birthday-setup', 'birthday-photoshoot-setup',
 'instagram-worthy-birthday-setup', 'birthday-decoration-at-home',
 'birthday-balloon-bouquet', 'birthday-flower-decoration',
 'birthday-led-decoration', 'birthday-fairy-light-decoration',
 'birthday-candlelight-setup', 'birthday-rose-petal-decoration',
 'happy-birthday-decoration', 'birthday-banner-decoration'].forEach(kw => {
  addKeyword(extraBirthday, kw, 'birthday-surprise');
});

// ============================================================================
// CANDLELIGHT KEYWORDS
// ============================================================================
const extraCandlelight = [];

const clModifiers = ['romantic', 'best', 'private', 'luxury', 'affordable', 'budget',
  'premium', 'intimate', 'special', 'beautiful', 'perfect', 'cozy',
  'exclusive', 'top-rated', 'popular', 'famous', 'unique', 'memorable'];
clModifiers.forEach(mod => {
  addKeyword(extraCandlelight, `${mod}-candlelight-dinner`, 'candlelight-dinner');
  addKeyword(extraCandlelight, `${mod}-candle-light-dinner`, 'candlelight-dinner');
});

const clRelations = ['him', 'her', 'boyfriend', 'girlfriend', 'husband', 'wife',
  'partner', 'couple', 'couples', 'two', 'lovers', 'fiance', 'fiancee'];
clRelations.forEach(rel => {
  addKeyword(extraCandlelight, `candlelight-dinner-for-${rel}`, 'candlelight-dinner');
  addKeyword(extraCandlelight, `romantic-dinner-for-${rel}`, 'candlelight-dinner');
  addKeyword(extraCandlelight, `candle-light-dinner-for-${rel}`, 'candlelight-dinner');
});

// Candlelight occasion combos
['birthday', 'anniversary', 'proposal', 'valentine', 'valentines-day', 
 'date-night', 'engagement', 'celebration', 'surprise', 'honeymoon',
 'wedding-anniversary', 'first-date', 'special-occasion'].forEach(occ => {
  addKeyword(extraCandlelight, `candlelight-dinner-for-${occ}`, 'candlelight-dinner');
  addKeyword(extraCandlelight, `candlelight-${occ}-dinner`, 'candlelight-dinner');
});

// Candlelight location/type
['outdoor', 'indoor', 'rooftop', 'garden', 'poolside', 'terrace',
 'restaurant', 'cafe', 'hotel', 'resort', 'private-room', 'home'].forEach(loc => {
  addKeyword(extraCandlelight, `${loc}-candlelight-dinner`, 'candlelight-dinner');
  addKeyword(extraCandlelight, `candlelight-dinner-at-${loc}`, 'candlelight-dinner');
});

// Additional candlelight
['candlelight-dinner-booking', 'candlelight-dinner-reservation',
 'candlelight-dinner-setup-at-home', 'candlelight-dinner-experience',
 'candlelight-dinner-with-music', 'candlelight-dinner-with-decoration',
 'candlelight-dinner-with-cake', 'candlelight-dinner-with-flowers',
 'candlelight-dinner-with-wine', 'candlelight-dinner-menu',
 'candlelight-dinner-cost', 'candlelight-dinner-price',
 'candlelight-dinner-deals', 'candlelight-dinner-offers',
 'candlelight-dinner-discount', 'candlelight-dinner-package-deals',
 'candlelight-dinner-under-5000', 'candlelight-dinner-under-3000',
 'cheap-candlelight-dinner', 'best-place-for-candlelight-dinner',
 'candlelight-dinner-ideas', 'candlelight-dinner-outfit',
 'candlelight-dinner-decoration-ideas', 'candle-light-dinner-date',
 'romantic-candle-night-dinner', 'candlelit-dinner',
 'dinner-by-candlelight', 'dinner-with-candles'].forEach(kw => {
  addKeyword(extraCandlelight, kw, 'candlelight-dinner');
});

// ============================================================================
// PROPOSAL KEYWORDS
// ============================================================================
const extraProposal = [];

const propTypes = ['marriage-proposal', 'wedding-proposal', 'surprise-proposal',
  'romantic-proposal', 'private-proposal', 'engagement-proposal',
  'ring-ceremony', 'proposal-setup', 'proposal-decoration',
  'proposal-ideas', 'proposal-venue', 'proposal-planner',
  'proposal-planning', 'proposal-arrangement', 'proposal-place',
  'proposal-restaurant', 'proposal-location'];
propTypes.forEach(typ => {
  addKeyword(extraProposal, typ, 'proposal-setup');
});

['best-proposal-ideas', 'creative-proposal-ideas', 'unique-proposal-ideas',
 'simple-proposal-ideas', 'romantic-proposal-ideas', 'surprise-proposal-ideas',
 'outdoor-proposal-ideas', 'indoor-proposal-ideas', 'private-proposal-ideas',
 'beach-proposal-ideas', 'restaurant-proposal-ideas', 'rooftop-proposal-ideas',
 'proposal-with-ring', 'proposal-with-flowers', 'proposal-with-balloons',
 'proposal-with-candles', 'proposal-with-rose-petals', 'proposal-with-music',
 'proposal-with-fairy-lights', 'proposal-with-photographer',
 'proposal-decoration-ideas', 'proposal-backdrop', 'proposal-setup-ideas',
 'will-you-marry-me-setup', 'marry-me-decoration', 'say-yes-setup',
 'proposal-for-boyfriend', 'proposal-for-girlfriend',
 'how-to-propose', 'best-way-to-propose', 'where-to-propose',
 'perfect-proposal-setup', 'dream-proposal-setup', 'fairytale-proposal',
 'grand-proposal', 'intimate-proposal', 'flash-mob-proposal',
 'surprise-engagement', 'engagement-setup', 'engagement-decoration',
 'engagement-party-for-two', 'engagement-dinner', 'engagement-celebration',
 'engagement-venue', 'engagement-party-venue', 'engagement-party-ideas',
 'engagement-surprise', 'engagement-ring-ceremony',
 'couple-engagement-celebration', 'private-engagement-party'].forEach(kw => {
  addKeyword(extraProposal, kw, 'proposal-setup');
});

// ============================================================================
// ANNIVERSARY KEYWORDS
// ============================================================================
const extraAnniversary = [];

// Specific anniversaries 1-50
for (let yr = 1; yr <= 50; yr++) {
  const suffix = yr === 1 ? 'st' : yr === 2 ? 'nd' : yr === 3 ? 'rd' : 'th';
  addKeyword(extraAnniversary, `${yr}${suffix}-anniversary-celebration`, 'anniversary-celebration');
  if (yr <= 25 || yr % 5 === 0) {
    addKeyword(extraAnniversary, `${yr}${suffix}-anniversary-surprise`, 'anniversary-celebration');
    addKeyword(extraAnniversary, `${yr}${suffix}-anniversary-dinner`, 'anniversary-celebration');
    addKeyword(extraAnniversary, `${yr}${suffix}-anniversary-ideas`, 'anniversary-celebration');
  }
  if (yr <= 10 || yr % 5 === 0) {
    addKeyword(extraAnniversary, `${yr}${suffix}-wedding-anniversary`, 'anniversary-celebration');
  }
}

// Anniversary types
['wedding-anniversary', 'marriage-anniversary', 'dating-anniversary',
 'love-anniversary', 'relationship-anniversary', 'couple-anniversary',
 'engagement-anniversary', 'first-meeting-anniversary'].forEach(typ => {
  addKeyword(extraAnniversary, `${typ}-celebration`, 'anniversary-celebration');
  addKeyword(extraAnniversary, `${typ}-surprise`, 'anniversary-celebration');
  addKeyword(extraAnniversary, `${typ}-dinner`, 'anniversary-celebration');
  addKeyword(extraAnniversary, `${typ}-ideas`, 'anniversary-celebration');
  addKeyword(extraAnniversary, `${typ}-venue`, 'anniversary-celebration');
  addKeyword(extraAnniversary, `${typ}-decoration`, 'anniversary-celebration');
});

// Anniversary extras
['romantic-anniversary-celebration', 'surprise-anniversary-dinner',
 'anniversary-candlelight-dinner', 'anniversary-room-decoration',
 'anniversary-balloon-decoration', 'anniversary-flower-decoration',
 'anniversary-cake-and-dinner', 'anniversary-party-for-two',
 'simple-anniversary-celebration', 'budget-anniversary-ideas',
 'luxury-anniversary-celebration', 'premium-anniversary-dinner',
 'milestone-anniversary-celebration', 'golden-anniversary-celebration',
 'silver-anniversary-celebration', 'anniversary-photoshoot',
 'anniversary-gift-experience', 'best-anniversary-surprise',
 'unique-anniversary-ideas', 'creative-anniversary-celebration',
 'unforgettable-anniversary', 'special-anniversary-dinner',
 'intimate-anniversary-dinner', 'private-anniversary-celebration',
 'anniversary-celebration-at-restaurant', 'anniversary-celebration-at-cafe',
 'anniversary-night-out', 'anniversary-date-ideas',
 'anniversary-party-ideas', 'anniversary-setup-ideas',
 'anniversary-decoration-at-home', 'anniversary-celebration-for-parents',
 'happy-anniversary-celebration', 'monthly-anniversary-celebration',
 'one-month-anniversary', '6-month-anniversary-celebration',
 'half-year-anniversary'].forEach(kw => {
  addKeyword(extraAnniversary, kw, 'anniversary-celebration');
});

// ============================================================================
// DATE NIGHT / ROMANTIC DATE KEYWORDS
// ============================================================================
const extraDateNight = [];

const dateTypes = ['date-night', 'romantic-date', 'dinner-date', 'surprise-date',
  'perfect-date', 'special-date', 'couple-date', 'first-date',
  'second-date', 'double-date', 'indoor-date', 'evening-date',
  'night-date', 'weekend-date', 'weekday-date'];
dateTypes.forEach(dt => {
  addKeyword(extraDateNight, `${dt}-ideas`, 'date-night-ideas');
  addKeyword(extraDateNight, `${dt}-places`, 'date-night-ideas');
  addKeyword(extraDateNight, `${dt}-restaurant`, 'date-night-ideas');
  addKeyword(extraDateNight, `best-${dt}`, 'date-night-ideas');
});

const dateActivities = ['dinner-and-movie', 'dinner-and-music',
  'romantic-evening', 'romantic-night', 'couple-night-out',
  'date-night-dinner', 'couples-dinner', 'romantic-outing',
  'love-date', 'intimate-dinner-date', 'private-dinner-date',
  'candlelit-date', 'moonlight-dinner', 'starlight-dinner',
  'twilight-dinner', 'sunset-dinner', 'wine-and-dine',
  'dine-in-style', 'fine-dining-for-couples', 'romantic-dining',
  'private-dining', 'exclusive-dining', 'couple-dining-experience',
  'couples-only-restaurant', 'couples-only-dinner',
  'couples-only-venue', 'couple-friendly-restaurant',
  'couple-friendly-cafe', 'best-restaurant-for-couples',
  'best-cafe-for-couples', 'best-place-for-date',
  'best-place-for-couples', 'romantic-place-for-couples',
  'romantic-restaurant-for-couples', 'private-restaurant-for-couples',
  'cozy-restaurant-for-date', 'romantic-cafe-for-date',
  'date-night-at-cafe', 'date-night-at-restaurant',
  'couple-outing-ideas', 'things-to-do-for-couples',
  'fun-things-for-couples', 'romantic-things-to-do',
  'romantic-activities-for-couples', 'couple-activities',
  'couple-experience', 'couple-adventure'].forEach(kw => {
  addKeyword(extraDateNight, kw, 'date-night-ideas');
});

// ============================================================================
// VALENTINE'S DAY KEYWORDS
// ============================================================================
const extraValentines = [];

const vDays = ['valentines-day', 'valentine-day', 'valentine', 'valentines',
  'rose-day', 'propose-day', 'chocolate-day', 'teddy-day',
  'promise-day', 'hug-day', 'kiss-day', 'valentines-week',
  'valentine-week'];
vDays.forEach(day => {
  addKeyword(extraValentines, `${day}-celebration`, 'valentines-day');
  addKeyword(extraValentines, `${day}-dinner`, 'valentines-day');
  addKeyword(extraValentines, `${day}-surprise`, 'valentines-day');
  addKeyword(extraValentines, `${day}-ideas`, 'valentines-day');
  addKeyword(extraValentines, `${day}-date`, 'valentines-day');
  addKeyword(extraValentines, `${day}-gift`, 'valentines-day');
  addKeyword(extraValentines, `${day}-special`, 'valentines-day');
});

['best-valentine-gift-for-boyfriend', 'best-valentine-gift-for-girlfriend',
 'best-valentine-gift-for-husband', 'best-valentine-gift-for-wife',
 'valentines-day-candlelight-dinner', 'valentines-day-romantic-dinner',
 'valentines-day-restaurant', 'valentines-day-venue',
 'valentines-day-party', 'valentines-day-decoration',
 'valentines-day-surprise-for-him', 'valentines-day-surprise-for-her',
 'valentines-day-outing', 'valentines-day-experience',
 'valentines-day-couple-celebration', 'valentine-dinner-booking',
 'valentine-dinner-reservation', 'valentine-dinner-deals',
 'valentine-dinner-offers', 'valentine-special-dinner',
 'valentine-special-package', 'february-14-celebration',
 'february-14-dinner', 'feb-14-surprise',
 'anti-valentines-day-celebration', 'valentines-day-proposal',
 'valentines-day-engagement', 'romantic-february-celebration',
 'love-month-celebration', 'february-romance-dinner'].forEach(kw => {
  addKeyword(extraValentines, kw, 'valentines-day');
});

// ============================================================================
// PHOTOGRAPHY / SHOOT KEYWORDS
// ============================================================================
const extraPhotography = [];

const shootTypes = ['photoshoot', 'photo-shoot', 'photography', 'photo-session'];
const shootOccasions = ['couple', 'pre-wedding', 'engagement', 'anniversary',
  'birthday', 'proposal', 'maternity', 'baby-shower', 'pregnancy',
  'romantic', 'love', 'valentine', 'candlelight'];
shootTypes.forEach(st => {
  shootOccasions.forEach(occ => {
    addKeyword(extraPhotography, `${occ}-${st}`, 'couple-photoshoot');
  });
});

['pre-wedding-shoot-venue', 'pre-wedding-shoot-location',
 'pre-wedding-shoot-ideas', 'pre-wedding-shoot-places',
 'pre-wedding-shoot-cost', 'pre-wedding-shoot-packages',
 'couple-photoshoot-ideas', 'couple-photoshoot-venue',
 'couple-photoshoot-location', 'couple-photoshoot-places',
 'couple-photoshoot-packages', 'romantic-photoshoot-ideas',
 'engagement-photoshoot-ideas', 'engagement-photoshoot-venue',
 'indoor-photoshoot-for-couples', 'studio-photoshoot-for-couples',
 'candlelight-photoshoot', 'romantic-photo-session',
 'love-photoshoot', 'best-photoshoot-location-for-couples',
 'instagram-photoshoot-for-couples', 'aesthetic-couple-photoshoot',
 'professional-couple-photography', 'couple-portrait-photography',
 'couple-photo-studio', 'best-photographer-for-couples',
 'couple-photography-packages', 'wedding-photography-venue',
 'pre-wedding-photography-studio', 'couple-shoot-studio',
 'romantic-backdrop-for-photoshoot', 'fairy-light-photoshoot',
 'floral-photoshoot-setup', 'bohemian-photoshoot-setup',
 'vintage-photoshoot-for-couples'].forEach(kw => {
  addKeyword(extraPhotography, kw, 'couple-photoshoot');
});

// ============================================================================
// BABY / PREGNANCY KEYWORDS
// ============================================================================
const extraBaby = [];

['baby-shower-celebration', 'baby-shower-party', 'baby-shower-decoration',
 'baby-shower-ideas', 'baby-shower-venue', 'baby-shower-setup',
 'baby-shower-surprise', 'baby-shower-for-couples',
 'gender-reveal-party', 'gender-reveal-celebration', 'gender-reveal-ideas',
 'gender-reveal-decoration', 'gender-reveal-venue', 'gender-reveal-surprise',
 'pregnancy-announcement', 'pregnancy-announcement-ideas',
 'pregnancy-announcement-photoshoot', 'pregnancy-announcement-party',
 'pregnancy-announcement-surprise', 'pregnancy-celebration',
 'expecting-celebration', 'expecting-announcement',
 'baby-announcement-party', 'baby-announcement-ideas',
 'baby-announcement-celebration', 'baby-bump-photoshoot',
 'baby-bump-celebration', 'maternity-photoshoot',
 'maternity-photoshoot-venue', 'maternity-celebration',
 'we-are-expecting-celebration', 'we-are-pregnant-announcement',
 'mom-to-be-celebration', 'dad-to-be-celebration',
 'parents-to-be-celebration', 'baby-coming-soon-celebration',
 'baby-on-the-way-celebration', 'godh-bharai-celebration',
 'godh-bharai-decoration', 'godh-bharai-venue',
 'seemant-celebration', 'baby-welcome-celebration',
 'cradle-ceremony-celebration', 'naming-ceremony-celebration',
 'baby-first-birthday', 'baby-milestone-celebration',
 'newborn-celebration', 'couple-pregnancy-photoshoot',
 'pregnancy-reveal-to-husband', 'pregnancy-reveal-to-family',
 'surprise-pregnancy-announcement', 'creative-pregnancy-announcement',
 'best-baby-shower-venue', 'luxury-baby-shower',
 'intimate-baby-shower', 'small-baby-shower-party',
 'pink-baby-shower-decoration', 'blue-baby-shower-decoration',
 'gender-neutral-baby-shower', 'bohemian-baby-shower',
 'floral-baby-shower-decoration'].forEach(kw => {
  addKeyword(extraBaby, kw, 'baby-celebrations');
});

// ============================================================================
// VENUE / PLACE KEYWORDS
// ============================================================================
const extraVenue = [];

const venueAdjs = ['best', 'top', 'famous', 'popular', 'affordable',
  'luxury', 'premium', 'budget', 'private', 'romantic',
  'beautiful', 'unique', 'exclusive', 'intimate', 'cozy'];
const venueTypes = ['restaurant', 'cafe', 'venue', 'place', 'hotel',
  'resort', 'banquet', 'hall', 'lounge', 'space'];
const venueFor = ['candlelight-dinner', 'birthday-party', 'anniversary',
  'celebration', 'couples', 'date-night', 'proposal',
  'romantic-dinner', 'private-dining', 'party'];

venueAdjs.forEach(adj => {
  venueFor.forEach(purpose => {
    addKeyword(extraVenue, `${adj}-${purpose}-venue`, 'venue-decoration');
    if (venueTypes.length) {
      addKeyword(extraVenue, `${adj}-${purpose}-restaurant`, 'venue-decoration');
    }
  });
});

['celebration-venue', 'party-venue', 'event-venue', 'private-venue',
 'romantic-venue', 'couples-venue', 'intimate-venue', 'date-venue',
 'dinner-venue', 'special-occasion-venue', 'surprise-venue',
 'decoration-venue', 'photoshoot-venue', 'celebration-hall',
 'party-hall-for-couples', 'banquet-for-small-party',
 'small-party-venue', 'micro-event-venue', 'couple-party-venue',
 'private-party-room', 'private-dining-room', 'private-celebration-room',
 'rooftop-venue-for-couples', 'garden-venue-for-couples',
 'indoor-venue-for-celebration', 'ac-venue-for-celebration',
 'best-celebration-venue', 'top-rated-celebration-venue',
 'most-popular-celebration-venue', 'highest-rated-venue-for-couples',
 'venue-with-decoration', 'venue-with-food', 'venue-with-cake',
 'venue-with-music', 'venue-with-fairy-lights',
 'venue-for-2-people', 'venue-for-two',
 'restaurant-for-two', 'table-for-two',
 'romantic-table-for-two', 'private-table-for-two',
 'candlelight-dinner-venue', 'birthday-surprise-venue',
 'anniversary-dinner-venue', 'proposal-venue',
 'engagement-party-venue', 'valentines-day-venue',
 'date-night-venue', 'couple-friendly-venue',
 'peaceful-venue-for-couples', 'quiet-restaurant-for-couples',
 'noise-free-dining', 'distraction-free-dining'].forEach(kw => {
  addKeyword(extraVenue, kw, 'venue-decoration');
});

// ============================================================================
// SEASONAL / OCCASION KEYWORDS
// ============================================================================
const extraSeasonal = [];

// Month-based keywords
const months = ['january', 'february', 'march', 'april', 'may', 'june',
  'july', 'august', 'september', 'october', 'november', 'december'];
months.forEach(month => {
  addKeyword(extraSeasonal, `romantic-celebration-in-${month}`, 'seasonal');
  addKeyword(extraSeasonal, `candlelight-dinner-in-${month}`, 'seasonal');
  addKeyword(extraSeasonal, `birthday-celebration-in-${month}`, 'seasonal');
  addKeyword(extraSeasonal, `best-date-night-in-${month}`, 'seasonal');
});

// Festival/special day keywords
['new-year-eve-celebration', 'new-year-celebration', 'new-year-dinner',
 'new-year-party-for-couples', 'new-year-candlelight-dinner',
 'christmas-celebration-for-couples', 'christmas-dinner-date',
 'christmas-eve-celebration', 'christmas-romantic-dinner',
 'diwali-celebration-for-couples', 'diwali-dinner-date',
 'diwali-romantic-dinner', 'diwali-surprise',
 'navratri-celebration-for-couples', 'holi-celebration-for-couples',
 'eid-celebration-for-couples', 'eid-romantic-dinner',
 'karwa-chauth-celebration', 'karwa-chauth-dinner',
 'karwa-chauth-surprise', 'karwa-chauth-gift-experience',
 'raksha-bandhan-celebration', 'friendship-day-celebration',
 'friendship-day-dinner', 'womens-day-celebration',
 'womens-day-surprise', 'womens-day-dinner',
 'mothers-day-celebration', 'mothers-day-dinner',
 'fathers-day-celebration', 'fathers-day-dinner',
 'teachers-day-celebration', 'monsoon-date-ideas',
 'rainy-day-date', 'winter-date-ideas', 'summer-date-ideas',
 'weekend-getaway-for-couples', 'weekend-celebration',
 'weekend-dinner-date', 'friday-night-date',
 'saturday-date-night', 'sunday-brunch-for-couples',
 'long-weekend-celebration', 'holiday-celebration-for-couples',
 'festive-dinner-for-couples', 'special-day-celebration',
 'couples-day-celebration', 'love-day-celebration',
 'happy-anniversary-month-celebration'].forEach(kw => {
  addKeyword(extraSeasonal, kw, 'seasonal');
});

// ============================================================================
// THEME DECORATION KEYWORDS
// ============================================================================
const extraTheme = [];

const themes = ['bollywood', 'filmy', 'royal', 'vintage', 'retro',
  'rustic', 'bohemian', 'boho', 'minimalist', 'modern',
  'traditional', 'classic', 'fairy-tale', 'fairytale',
  'garden', 'floral', 'tropical', 'beach', 'starry-night',
  'moonlight', 'gold', 'rose-gold', 'black-and-gold',
  'red-and-white', 'pink', 'pastel', 'neon', 'led',
  'luxury', 'premium', 'elegant', 'grand', 'simple',
  'budget', 'diy', 'creative', 'unique', 'aesthetic',
  'instagram-worthy', 'pinterest-worthy', 'dreamy',
  'magical', 'enchanted', 'whimsical', 'cozy'];
themes.forEach(theme => {
  addKeyword(extraTheme, `${theme}-decoration`, 'theme-decoration');
  addKeyword(extraTheme, `${theme}-setup`, 'theme-decoration');
  addKeyword(extraTheme, `${theme}-theme-celebration`, 'theme-decoration');
  addKeyword(extraTheme, `${theme}-party-decoration`, 'theme-decoration');
});

// Decoration elements
['balloon-decoration', 'flower-decoration', 'fairy-light-decoration',
 'led-light-decoration', 'candle-decoration', 'rose-petal-decoration',
 'ribbon-decoration', 'paper-decoration', 'streamer-decoration',
 'confetti-decoration', 'glitter-decoration', 'backdrop-decoration',
 'arch-decoration', 'heart-arch-decoration', 'balloon-arch',
 'balloon-bouquet', 'flower-bouquet-decoration', 'flower-wall',
 'photo-wall-decoration', 'letter-decoration',
 'name-decoration', 'custom-name-setup', 'personalized-decoration',
 'customized-decoration', 'heart-shaped-decoration',
 'star-shaped-decoration', 'ring-shaped-decoration',
 'couple-name-board', 'love-letter-setup', 'love-note-decoration',
 'romantic-wall-decoration', 'ceiling-decoration',
 'floor-decoration', 'table-decoration', 'table-setting',
 'romantic-table-setting', 'candlelight-table-setup',
 'dinner-table-decoration', 'party-table-decoration',
 'centerpiece-decoration', 'romantic-centerpiece'].forEach(kw => {
  addKeyword(extraTheme, kw, 'theme-decoration');
});

// ============================================================================
// NEAR ME / LOCATION KEYWORDS
// ============================================================================
const extraNearMe = [];

const nearMeServices = ['candlelight-dinner', 'birthday-surprise',
  'anniversary-celebration', 'romantic-dinner', 'date-night',
  'couple-restaurant', 'birthday-decoration', 'surprise-planner',
  'couple-cafe', 'romantic-restaurant', 'private-dining',
  'party-venue', 'celebration-venue', 'proposal-venue',
  'romantic-venue', 'date-venue', 'birthday-venue',
  'anniversary-venue', 'dinner-date', 'couple-dinner',
  'romantic-place', 'private-restaurant', 'intimate-restaurant',
  'candlelight-restaurant', 'decoration-service', 'event-planner',
  'birthday-planner', 'anniversary-planner', 'wedding-proposal-venue',
  'couple-photoshoot-studio'];
nearMeServices.forEach(svc => {
  addKeyword(extraNearMe, `${svc}-near-me`, 'near-me');
  addKeyword(extraNearMe, `best-${svc}-near-me`, 'near-me');
});

// ============================================================================
// BUDGET / PRICE KEYWORDS
// ============================================================================
const extraBudget = [];

const priceRanges = ['under-1000', 'under-2000', 'under-3000', 'under-5000',
  'under-7000', 'under-10000', '1000-to-3000', '3000-to-5000',
  '5000-to-7000', '5000-to-10000'];
const budgetServices = ['candlelight-dinner', 'birthday-celebration',
  'anniversary-celebration', 'romantic-dinner', 'surprise-decoration',
  'couple-dinner', 'date-night-dinner', 'birthday-surprise',
  'proposal-setup', 'celebration'];
priceRanges.forEach(range => {
  budgetServices.forEach(svc => {
    addKeyword(extraBudget, `${svc}-${range}`, 'budget');
  });
});

['cheap-candlelight-dinner', 'affordable-romantic-dinner',
 'budget-celebration', 'low-cost-birthday-surprise',
 'pocket-friendly-celebration', 'economical-celebration-venue',
 'value-for-money-venue', 'best-price-celebration-venue',
 'cheapest-candlelight-dinner', 'most-affordable-venue',
 'free-birthday-celebration-ideas', 'low-budget-anniversary',
 'budget-proposal-ideas', 'budget-date-night-ideas',
 'affordable-couple-dinner', 'cheap-couple-restaurant',
 'budget-romantic-restaurant', 'pocket-friendly-romantic-dinner',
 'student-budget-date', 'college-budget-date-night'].forEach(kw => {
  addKeyword(extraBudget, kw, 'budget');
});

// ============================================================================
// MISCELLANEOUS / LONG-TAIL KEYWORDS
// ============================================================================
const extraMisc = [];

// "Best X in Surat" patterns
['best-romantic-restaurant', 'best-cafe-for-couples', 'best-restaurant-for-anniversary',
 'best-restaurant-for-birthday', 'best-restaurant-for-candlelight-dinner',
 'best-restaurant-for-proposal', 'best-restaurant-for-date-night',
 'best-private-dining', 'best-couple-restaurant', 'best-couple-cafe',
 'best-romantic-place', 'best-romantic-venue', 'best-celebration-venue',
 'best-birthday-venue', 'best-anniversary-venue', 'best-proposal-venue',
 'best-honeymoon-venue', 'best-date-night-venue', 'best-dinner-date-venue',
 'most-romantic-restaurant', 'most-romantic-place', 'most-romantic-cafe',
 'top-10-romantic-restaurants', 'top-5-couple-restaurants',
 'top-rated-romantic-venue', 'highest-rated-couple-restaurant',
 '5-star-romantic-dinner', '5-star-celebration-venue'].forEach(kw => {
  addKeyword(extraMisc, kw, 'misc');
});

// Surprise keywords
['surprise-planning', 'surprise-planner', 'surprise-organizer',
 'surprise-decorator', 'surprise-ideas-for-boyfriend',
 'surprise-ideas-for-girlfriend', 'surprise-ideas-for-husband',
 'surprise-ideas-for-wife', 'surprise-ideas-for-partner',
 'midnight-surprise', 'midnight-surprise-for-boyfriend',
 'midnight-surprise-for-girlfriend', 'midnight-surprise-for-husband',
 'midnight-surprise-for-wife', 'surprise-room-decoration',
 'surprise-room-setup', 'surprise-candlelight-dinner',
 'surprise-romantic-dinner', 'surprise-date-night',
 'surprise-dinner-setup', 'surprise-birthday-setup',
 'surprise-anniversary-setup', 'surprise-proposal-setup',
 'how-to-plan-a-surprise', 'best-surprise-ideas',
 'creative-surprise-ideas', 'unique-surprise-ideas',
 'romantic-surprise-ideas', 'last-minute-surprise-ideas',
 'weekend-surprise-ideas', 'morning-surprise-ideas',
 'evening-surprise-ideas', 'surprise-celebration'].forEach(kw => {
  addKeyword(extraMisc, kw, 'misc');
});

// Gift experience keywords
['romantic-gift-experience', 'couple-gift-experience',
 'experience-gift-for-couples', 'gift-experience-for-boyfriend',
 'gift-experience-for-girlfriend', 'gift-experience-for-husband',
 'gift-experience-for-wife', 'unique-gift-for-boyfriend',
 'unique-gift-for-girlfriend', 'unique-gift-for-husband',
 'unique-gift-for-wife', 'best-gift-for-couples',
 'best-romantic-gift', 'memorable-gift-for-partner',
 'experiential-gift-for-couples', 'dinner-date-gift-card',
 'romantic-dinner-gift-voucher', 'couple-celebration-gift',
 'anniversary-gift-idea', 'birthday-gift-experience',
 'personalized-couple-gift', 'custom-couple-experience',
 'gift-a-candlelight-dinner', 'gift-a-romantic-dinner',
 'gift-a-birthday-surprise', 'gift-voucher-for-couples'].forEach(kw => {
  addKeyword(extraMisc, kw, 'misc');
});

// Planner/service keywords
['celebration-planner', 'event-planner-for-couples',
 'birthday-party-planner', 'surprise-party-planner',
 'romantic-event-planner', 'anniversary-planner',
 'proposal-planner', 'date-night-planner',
 'couple-celebration-planner', 'decoration-service',
 'birthday-decoration-service', 'anniversary-decoration-service',
 'balloon-decoration-service', 'flower-decoration-service',
 'romantic-decoration-service', 'party-decoration-service',
 'event-decoration-service', 'celebration-organizer',
 'party-organizer-for-couples', 'surprise-organizer-for-couples'].forEach(kw => {
  addKeyword(extraMisc, kw, 'misc');
});

// Private dining / experience keywords
['private-dining-experience', 'private-dinner-experience',
 'private-celebration-experience', 'exclusive-dining-experience',
 'exclusive-couple-experience', 'vip-dining-experience',
 'premium-dining-experience', 'luxury-dining-experience',
 'romantic-dining-experience', 'fine-dining-experience',
 'couple-only-dining', 'couple-only-venue', 'couple-only-restaurant',
 'couple-only-cafe', 'adults-only-venue', 'no-kids-venue',
 'quiet-dining-for-couples', 'peaceful-dinner-for-couples',
 'noise-free-dining-for-couples', '3-hour-private-dinner',
 '3-hour-celebration', '3-hour-date-night',
 '3-hour-romantic-experience', 'private-room-dining',
 'private-room-for-couples', 'private-room-for-celebration',
 'private-room-for-party', 'private-room-for-birthday',
 'private-room-for-anniversary', 'private-room-for-proposal'].forEach(kw => {
  addKeyword(extraMisc, kw, 'misc');
});

// Food + romance combos
['romantic-dinner-with-cake', 'romantic-dinner-with-flowers',
 'romantic-dinner-with-wine', 'romantic-dinner-with-music',
 'dinner-with-decoration', 'dinner-with-cake',
 'dinner-with-candlelight', 'dinner-with-live-music',
 'dinner-with-surprise', 'dinner-with-balloon-decoration',
 'dinner-with-flower-decoration', 'cake-cutting-celebration',
 'celebration-with-cake', 'celebration-with-champagne',
 'celebration-with-mojito', 'celebration-with-food',
 'celebration-with-decorations', 'food-and-celebration',
 'cake-and-decoration', 'dinner-and-decoration',
 'cheese-fondue-dinner', 'romantic-fondue-dinner',
 'couple-fondue-experience', 'dessert-and-dinner-date'].forEach(kw => {
  addKeyword(extraMisc, kw, 'misc');
});

// Emotion/feeling keywords
['make-partner-feel-special', 'make-wife-feel-special',
 'make-husband-feel-special', 'make-girlfriend-feel-special',
 'make-boyfriend-feel-special', 'impress-partner',
 'impress-girlfriend', 'impress-boyfriend', 'impress-wife',
 'impress-husband', 'rekindle-romance', 'reignite-spark',
 'couples-bonding-ideas', 'quality-time-for-couples',
 'unforgettable-experience-for-couples', 'memorable-night-for-couples',
 'magical-evening-for-couples', 'dream-date-for-couples',
 'perfect-night-for-couples', 'special-evening-for-couples',
 'romantic-getaway-for-couples', 'love-celebration',
 'celebrate-love', 'celebrate-togetherness',
 'celebrate-relationship', 'celebrate-us'].forEach(kw => {
  addKeyword(extraMisc, kw, 'misc');
});

// ============================================================================
// HONEYMOON / NEWLY WED KEYWORDS
// ============================================================================
const extraHoneymoon = [];

['honeymoon-dinner', 'honeymoon-celebration', 'honeymoon-candlelight-dinner',
 'honeymoon-romantic-dinner', 'honeymoon-surprise-dinner', 'honeymoon-venue',
 'honeymoon-restaurant', 'honeymoon-date-night', 'honeymoon-place',
 'best-honeymoon-dinner', 'couple-honeymoon-dinner', 'honeymoon-ideas',
 'newlywed-celebration', 'newlywed-dinner', 'newlywed-romantic-dinner',
 'newlywed-candlelight-dinner', 'newlywed-date-ideas',
 'just-married-celebration', 'just-married-dinner',
 'newly-married-couple-dinner', 'newly-married-date-night',
 'post-wedding-celebration', 'post-wedding-dinner',
 'wedding-night-celebration', 'reception-dinner-for-couple',
 'first-night-celebration', 'couple-staycation-dinner',
 'romantic-staycation', 'staycation-for-couples',
 'mini-honeymoon', 'mini-honeymoon-dinner',
 'local-honeymoon-ideas', 'city-honeymoon-ideas'].forEach(kw => {
  addKeyword(extraHoneymoon, kw, 'misc');
});

// ============================================================================
// SERVICE AREA COMBO KEYWORDS (keyword + area without area page)
// ============================================================================
const extraAreaCombos = [];

const topServices = ['candlelight-dinner', 'birthday-surprise', 'romantic-dinner',
  'anniversary-celebration', 'proposal', 'couple-dinner',
  'date-night', 'private-dining', 'birthday-party',
  'birthday-decoration', 'romantic-restaurant', 'couple-cafe'];
const microAreas = ['vesu', 'adajan', 'athwa', 'piplod', 'varachha', 'pal',
  'althan', 'city-light', 'katargam', 'udhna', 'ring-road',
  'new-city-light', 'dumas', 'olpad', 'magdalla'];

topServices.forEach(svc => {
  microAreas.forEach(area => {
    addKeyword(extraAreaCombos, `${svc}-near-${area}`, 'near-me');
    addKeyword(extraAreaCombos, `best-${svc}-in-${area}`, 'near-me');
  });
});

// ============================================================================
// COMPARISON / ALTERNATIVE KEYWORDS
// ============================================================================
const extraComparison = [];

['best-alternative-to-restaurant-dinner', 'better-than-restaurant-dinner',
 'beyond-restaurant-dinner', 'private-dinner-vs-restaurant',
 'hotel-vs-private-venue', 'cafe-vs-private-celebration-venue',
 'why-choose-private-venue', 'private-venue-benefits',
 'home-celebration-vs-venue', 'restaurant-birthday-vs-private',
 'restaurant-anniversary-vs-private', 'unique-dinner-experience',
 'different-kind-of-date', 'something-different-for-couples',
 'non-traditional-date-ideas', 'outside-the-box-date-ideas',
 'unconventional-date-night', 'offbeat-couple-experience',
 'experiential-date-night', 'adventure-date-for-couples',
 'luxury-date-experience', 'vip-date-experience',
 'premium-date-experience', 'exclusive-date-experience',
 'once-in-a-lifetime-experience', 'bucket-list-date-ideas',
 'bucket-list-couple-experience', 'things-to-do-before-marriage',
 'must-do-couple-activities', 'top-couple-experiences',
 'trending-couple-experiences', 'viral-date-ideas',
 'tiktok-worthy-date', 'reels-worthy-date-experience',
 'social-media-worthy-celebration', 'photo-worthy-celebration',
 'picture-perfect-dinner', 'aesthetic-dinner-date'].forEach(kw => {
  addKeyword(extraComparison, kw, 'misc');
});

// ============================================================================
// COUPLE ACTIVITY / BONDING KEYWORDS
// ============================================================================
const extraCoupleActivity = [];

['couple-bonding-activities', 'romantic-things-to-do-at-night',
 'romantic-things-to-do-in-evening', 'things-to-do-on-anniversary',
 'things-to-do-on-birthday', 'things-to-do-on-valentines-day',
 'things-to-do-on-date-night', 'things-to-do-for-partner',
 'couple-quality-time', 'couple-evening-plans',
 'couple-weekend-plans', 'couple-night-plans',
 'fun-couple-ideas', 'creative-couple-ideas',
 'best-couple-ideas', 'trending-couple-ideas',
 'creative-date-ideas', 'fun-date-ideas',
 'indoor-date-ideas', 'outdoor-date-ideas',
 'cheap-date-ideas', 'free-date-ideas',
 'expensive-date-ideas', 'luxury-date-ideas',
 'simple-date-ideas', 'unique-date-ideas',
 'memorable-date-ideas', 'unforgettable-date-ideas',
 'romantic-evening-ideas', 'romantic-night-ideas',
 'romantic-morning-ideas', 'romantic-afternoon-ideas',
 'couple-dining-experience',
 'couple-celebration-ideas', 'how-to-celebrate-anniversary',
 'how-to-celebrate-birthday', 'how-to-celebrate-valentines',
 'how-to-plan-date-night', 'how-to-plan-romantic-dinner',
 'how-to-plan-birthday-surprise', 'how-to-plan-proposal',
 'how-to-plan-anniversary-surprise', 'how-to-impress-partner',
 'ways-to-celebrate-anniversary', 'ways-to-celebrate-birthday',
 'ways-to-surprise-partner', 'ways-to-make-partner-happy',
 'romantic-gesture-ideas', 'grand-gesture-ideas',
 'small-romantic-gestures', 'thoughtful-gesture-for-partner'].forEach(kw => {
  addKeyword(extraCoupleActivity, kw, 'misc');
});

// ============================================================================
// OUTPUT ALL NEW KEYWORDS PER CATEGORY
// ============================================================================

const categories = {
  birthday: extraBirthday,
  candlelight: extraCandlelight,
  proposal: extraProposal,
  anniversary: extraAnniversary,
  dateNight: extraDateNight,
  valentines: extraValentines,
  photography: extraPhotography,
  baby: extraBaby,
  venue: extraVenue,
  seasonal: extraSeasonal,
  theme: extraTheme,
  nearMe: [...extraNearMe, ...extraAreaCombos],
  budget: extraBudget,
  misc: [...extraMisc, ...extraHoneymoon, ...extraComparison, ...extraCoupleActivity],
};

let totalNew = 0;
const output = {};
for (const [cat, keywords] of Object.entries(categories)) {
  output[cat] = keywords;
  totalNew += keywords.length;
}

console.error(`\nTotal new keywords to add: ${totalNew}`);
console.error(`Previous: ${existingSlugs.size - totalNew}`);
console.error(`Grand total: ${existingSlugs.size}`);

// Output JSON for the next script to consume
console.log(JSON.stringify(output, null, 0));
