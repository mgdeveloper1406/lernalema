let randomWord;
let wordArray;
let solvedArray = [];
let miniReviewArray = [];
let endReviewArray = [];
let i;
let level = 1;
let round2;
let round3;
let round4;
let round5;

// change the chameleon's color every time submit is clicked
const chameleonColors = () => {
    $('.active').next('img').addClass('active').prev('img').removeClass('active');
    if ($('#four').hasClass('active')) {
        $('#one').addClass('active');
        $('#four').removeClass('active');
    }
};

// wordArray = [
//     {
//         german: 'der Apfelsaft',
//         plural: 'die Apfelsäfte',
//         translation: 'apple juice',
//         category: 'food',
//     },
//     {
//         german: 'das Bier',
//         plural: 'die Biere',
//         translation: 'beer',
//         category: 'food',
//     },
//     {
//         german: 'das Ei',
//         plural: 'die Eier',
//         translation: 'egg',
//         category: 'food',
//     },
//     {
//         german: 'das Fleisch',
//         plural: 'das Fleisch',
//         translation: 'meat',
//         category: 'food',
//     },
//     {
//         german: 'das Gemüse',
//         plural: 'die Gemüse',
//         translation: 'vegetable',
//         category: 'food',
//     },
//     {
//         german: 'die Karotte',
//         plural: 'die Karotten',
//         translation: 'carrot',
//         category: 'food',
//     },
//     {
//         german: 'die Kartoffel',
//         plural: 'die Kartoffeln',
//         translation: 'potato',
//         category: 'food'
//     },
//     {
//         german: 'das Haus',
//         plural: 'die Häuser',
//         translation: 'house',
//         category: 'home'
//     },
//     {
//         german: 'der Schuh',
//         plural: 'die Schuhe',
//         translation: 'shoe',
//         category: 'home'
//     },
//     {
//         german: 'der Bär',
//         plural: 'die Bären',
//         translation: 'bear',
//         category: 'animals'
//     },
//     {
//         german: 'die Biene',
//         plural: 'die Bienen',
//         translation: 'bee',
//         category: 'animals'
//     },
//     {
//         german: 'das Eichhörnchen',
//         plural: 'die Eichhörnchen',
//         translation: 'squirrel',
//         category: 'animals'
//     },
//     {
//         german: 'die Fledermaus',
//         plural: 'die Fledermäuse',
//         translation: 'bat',
//         category: 'animals'
//     },
//     {
//         german: 'der Frosch',
//         plural: 'die Frösche',
//         translation: 'frog',
//         category: 'animals'
//     },
//     {
//         german: 'der Fuchs',
//         plural: 'die Füchse',
//         translation: 'fox',
//         category: 'animals'
//     },
//     {
//         german: 'der Hai',
//         plural: 'die Haie',
//         translation: 'shark',
//         category: 'animals'
//     },
//     {
//         german: 'der Käfer',
//         plural: 'die Käfer',
//         translation: 'beetle',
//         category: 'animals'
//     },
//     {
//         german: 'die Schildkröte',
//         plural: 'die Schildkröten',
//         translation: 'turtle',
//         category: 'animals'
//     },
//     {
//         german: 'die Spinne',
//         plural: 'die Spinnen',
//         translation: 'spider',
//         category: 'animals'
//     },
//     {
//         german: 'der Waschbär',
//         plural: 'die Waschbären',
//         translation: 'raccoon',
//         category: 'animals'
//     },
//     {
//         german: 'das Blatt',
//         plural: 'die Blätter',
//         translation: 'leaf',
//         category: 'nature'
//     },
//     {
//         german: 'das Feuer',
//         plural: 'die Feuer',
//         translation: 'fire',
//         category: 'nature'
//     },
//     {
//         german: 'der Fluss',
//         plural: 'die Flüsse',
//         translation: 'river',
//         category: 'nature'
//     },
//     {
//         german: 'die Luft',
//         plural: 'n/a',
//         translation: 'air',
//         category: 'nature'
//     },
//     {
//         german: 'das Meer',
//         plural: 'die Meere',
//         translation: 'sea',
//         category: 'nature'
//     },
//     {
//         german: 'der Ozean',
//         plural: 'die Ozeane',
//         translation: 'ocean',
//         category: 'nature'
//     },
//     {
//         german: 'der See',
//         plural: 'die Seen',
//         translation: 'lake',
//         category: 'nature'
//     },
//     {
//         german: 'der Stein',
//         plural: 'die Steine',
//         translation: 'rock',
//         category: 'nature'
//     },
//     {
//         german: 'der Wald',
//         plural: 'die Wälder',
//         translation: 'forest',
//         category: 'nature'
//     },
//     {
//         german: 'der Wind',
//         plural: 'die Winde',
//         translation: 'wind',
//         category: 'nature'
//     },
// ];

gameArray = [
    wordArray = [
        {
            german: 'die Frau',
            plural: 'die Frauen',
            translation: 'woman',
            category: 'people',
            hint: 'If not "man," then ___.'
        },
        {
            german: 'der Junge',
            plural: 'die Jungen',
            translation: 'boy',
            category: 'people',
            hint: 'If not "girl," then ___.'
        },
        {
            german: 'das Mädchen',
            plural: 'die Mädchen',
            translation: 'girl',
            category: 'people',
            hint: 'If not "boy," then ___.'
        },
        {
            german: 'der Mann',
            plural: 'die Männer',
            translation: 'man',
            category: 'people',
            hint: 'If not "woman," then ___.'
        },
        {
            german: 'die Person',
            plural: 'die Menschen',
            translation: 'person',
            category: 'people',
            hint: 'A human, an individual.'
        },
        {
            german: 'Bitte!',
            translation: 'please',
            category: 'phrases',
            hint: `What's the magic word?`
        },
        {
            german: 'Danke!',
            translation: ['thank you', 'thanks'],
            category: 'phrases',
            hint: 'A polite way to acknowledge kindness.'
        },
        {
            german: 'Hallo!',
            translation: 'hello',
            category: 'phrases',
            hint: 'A way to greet someone.'
        },
        {
            german: 'Ja!',
            translation: ['yes', 'yeah'],
            category: 'phrases',
            hint: 'A way to agree.'
        },
        {
            german: 'Nein!',
            translation: 'no',
            category: 'phrases',
            hint: 'Nein means nein!'
        },
        {
            german: 'eins',
            translation: 'one',
            category: 'numbers',
            hint: 'The loneliest number.'
        },
        {
            german: 'zwei',
            translation: 'two',
            category: 'numbers',
            hint: 'It takes __ to tango.'
        },
        {
            german: 'drei',
            translation: 'three',
            category: 'numbers',
            hint: 'How many sides does a triangle have?'
        },
        {
            german: 'vier',
            translation: 'four',
            category: 'numbers',
            hint: 'You need this many quarters to make $1.'
        },
        {
            german: 'fünf',
            translation: 'five',
            category: 'numbers',
            hint: 'V, as a Roman numeral.'
        },
    ],
    
    round2 = [
        {
            german: 'das Kind',
            plural: 'die Kinder',
            translation: 'child',
            category: 'people',
            hint: 'A young person, an offspring.'
        },
        {
            german: 'die Mutter',
            plural: 'die Mütter',
            translation: 'mother',
            category: 'people',
            hint: 'A woman with a child.'
        },
        {
            german: 'der Sohn',
            plural: 'die Söhne',
            translation: 'son',
            category: 'people',
            hint: 'A male child.'
        },
        {
            german: 'die Tochter',
            plural: 'die Töchter',
            translation: 'daughter',
            category: 'people',
            hint: 'A female child.'
        },
        {
            german: 'der Vater',
            plural: 'die Väter',
            translation: 'father',
            category: 'people',
            hint: 'A man with a child.'
        },
        {
            german: 'sechs',
            translation: 'six',
            category: 'numbers',
            hint: 'A hexagon has this many sides.'
        },
        {
            german: 'sieben',
            translation: 'seven',
            category: 'numbers',
            hint: 'This number ate nine.'
        },
        {
            german: 'acht',
            translation: 'eight',
            category: 'numbers',
            hint: 'Magic __ ball.'
        },
        {
            german: 'neun',
            translation: 'nine',
            category: 'numbers',
            hint: 'Dial this number first, to call someone outside your office.'
        },
        {
            german: 'zehn',
            translation: 'ten',
            category: 'numbers',
            hint: 'The first two-digit number.'
        },
        {
            german: 'der Apfel',
            plural: 'die Äpfel',
            translation: 'apple',
            category: 'food',
            hint: 'Eat one per day to keep the doctor away.'
        },
        {
            german: 'das Brot',
            plural: 'die Brote',
            translation: 'bread',
            category: 'food',
            hint: 'Focaccia, ciabatta, rye, brioche, sourdough, etc.'
        },
        {
            german: 'der Käse',
            plural: 'die Käse',
            translation: 'cheese',
            category: 'food',
            hint: 'What do you say when you have your picture taken?'
        },
        {
            german: 'die Milch',
            plural: 'die Milche',
            translation: 'milk',
            category: 'food',
            hint: 'Goes well with cookies.'
        },
        {
            german: 'das Wasser',
            plural: 'die Wasser',
            translation: 'water',
            category: 'food',
            hint: 'H₂0—you should probably drink more of this!'
        },
        {
            german: 'das Hemd',
            plural: 'die Hemden',
            translation: 'shirt',
            category: 'apparel',
            hint: 'A garment to clothe the upper body.'
        },
        {
            german: 'die Hose',
            plural: 'die Hosen',
            translation: 'pants',
            category: 'apparel',
            hint: `If you're a liar, these are on fire.`
        },
        {
            german: 'das Kleid',
            plural: 'die Kleider',
            translation: 'dress',
            category: 'apparel',
            hint: 'Brides traditionally wear a white one.'
        },
        {
            german: 'der Rock',
            plural: 'die Röcke',
            translation: 'skirt',
            category: 'apparel',
            hint: 'A lower-body garment that can be mini, midi, or maxi.'
        },
        {
            german: 'die Unterwäsche',
            plural: 'die Unterwäschen',
            translation: 'underwear',
            category: 'apparel',
            hint: `Generally worn under your clothes, unless you're a superhero.` 
        }
    ],
    
    round3 = [
        {
            german: 'Guten Abend!',
            translation: 'good evening',
            category: 'phrases',
            hint: 'A late afternoon greeting.'
        },
        {
            german: 'Guten Morgen!',
            translation: 'good morning',
            category: 'phrases',
            hint: 'A way to greet someone before noon.'
        },
        {
            german: 'Gute Nacht!',
            translation: 'good night',
            category: 'phrases',
            hint: 'A nighttime greeting.'
        },
        {
            german: 'Guten Tag!',
            translation: ['good day', 'good afternoon'],
            category: 'phrases',
            hint: 'A general greeting.'
        },
        {
            german: 'Willkommen',
            translation: 'welcome',
            category: 'phrases',
            hint: 'An invitation.'
        },
        {
            german: 'elf',
            translation: 'eleven',
            category: 'numbers',
            hint: 'This number sounds like "elven."'
        },
        {
            german: 'zwölf',
            translation: 'twelve',
            category: 'numbers',
            hint: 'The top number on a clock face.'
        },
        {
            german: 'dreizehn',
            translation: 'thirteen',
            category: 'numbers',
            hint: `A baker's dozen.`
        },
        {
            german: 'vierzehn',
            translation: 'fourteen',
            category: 'numbers',
            hint: 'The number of days in a fortnight.'
        },
        {
            german: 'fünfzehn',
            translation: 'fifteen',
            category: 'numbers',
            hint: 'Everyone will have this many minutes of fame.'
        },
        {
            german: 'der Honig',
            plural: 'die Honige',
            translation: 'honey',
            category: 'food',
            hint: 'A sweetener made by bees.'
        },
        {
            german: 'der Kaffee',
            plural: 'die Kaffees',
            translation: 'coffee',
            category: 'food',
            hint: 'A drink that wakes you up.'
        },
        {
            german: 'der Keks',
            plural: 'die Kekse',
            translation: 'cookie',
            category: 'food',
            hint: 'A snack you dunk in milk.'
        },
        {
            german: 'der Tee',
            plural: 'die Tees',
            translation: 'tea',
            category: 'food',
            hint: 'The result of steeping leaves in hot water.'
        },
        {
            german: 'der Zucker',
            plural: 'die Zucker',
            translation: 'sugar',
            category: 'food',
            hint: 'Put this in your coffee to make it sweet.'
        },
        {
            german: 'der Fisch',
            plural: 'die Fische',
            translation: 'fish',
            category: 'animals',
            hint: 'They have gills, scales, and fins.'
        },
        {
            german: 'der Hund',
            plural: 'die Hunde',
            translation: 'dog',
            category: 'animals',
            hint: `Man's best friend.`
        },
        {
            german: 'die Katze',
            plural: 'die Katzen',
            translation: 'cat',
            category: 'animals',
            hint: 'They always land on their feet.'
        },
        {
            german: 'die Maus',
            plural: 'die Mäuse',
            translation: 'mouse',
            category: 'animals',
            hint: 'An animal or a computer device.'
        },
        {
            german: 'der Vogel',
            plural: 'die Vögel',
            translation: 'bird',
            category: 'animals',
            hint: 'These feathered animals fly and sing.'
        },
        {
            german: 'die Schüssel',
            plural: 'die Schüsseln',
            translation: 'bowl',
            category: 'home',
            hint: 'A concave dish used for soup.'
        },
        {
            german: 'der Stuhl',
            plural: 'die Stühle',
            translation: 'chair',
            category: 'home',
            hint: 'A seat.'
        },
        {
            german: 'die Tasse',
            plural: 'die Tassen',
            translation: 'cup',
            category: 'home',
            hint: 'You drink out of this.'
        },
        {
            german: 'der Teller',
            plural: 'die Teller',
            translation: 'plate',
            category: 'home',
            hint: 'A flat dish that holds food.'
        },
        {
            german: 'der Tisch',
            plural: 'die Tische',
            translation: 'table',
            category: 'home',
            hint: 'A flat surface; generally has four legs.'
        }
    ],

    round4 = [
        {
            german: 'der Bruder',
            plural: 'die Brüder',
            translation: 'brother',
            category: 'people',
            hint: 'A sibling that identifies as a boy.'
        },
        {
            german: 'das Geshwister',
            plural: 'die Geschwister',
            translation: 'sibling',
            category: 'people',
            hint: 'A brother or a sister.'
        },
        {
            german: 'die Oma',
            plural: 'die Omas',
            translation: 'grandma',
            category: 'people',
            hint: `Your parent's mother.`
        },
        {
            german: 'der Opa',
            plural: 'die Opas',
            translation: 'grandpa',
            category: 'people',
            hint: `Your parent's father.`
        },
        {
            german: 'die Schwester',
            plural: 'die Schwestern',
            translation: 'sister',
            category: 'people',
            hint: 'A sibling that identifies as a girl.'
        },
        {
            german: 'sechzehn',
            translation: 'sixteen',
            category: 'numbers',
            hint: 'This age is said to be sweet.'
        },
        {
            german: 'siebzehn',
            translation: 'seventeen',
            category: 'numbers',
            hint: 'Stevie Nicks, "Edge of ___."'
        },
        {
            german: 'achtzehn',
            translation: 'eighteen',
            category: 'numbers',
            hint: 'Voting age, in the United States.'
        },
        {
            german: 'neunzehn',
            translation: 'nineteen',
            category: 'numbers',
            hint: 'XIX, as a Roman numeral.'
        },
        {
            german: 'zwanzig',
            translation: 'twenty',
            category: 'numbers',
            hint: 'This number sort of looks like a westward-facing swan.'
        },
        {
            german: 'der Becher',
            plural: 'die Bechers',
            translation: 'mug',
            category: 'home',
            hint: 'A cup with a handle, generally associated with coffee.'
        },
        {
            german: 'die Gabel',
            plural: 'die Gabeln',
            translation: 'fork',
            category: 'home',
            hint: 'An eating utensil with tines.'
        },
        {
            german: 'das Glas',
            plural: 'die Gläser',
            translation: 'glass',
            category: 'home',
            hint: 'A vessel used while drinking.'
        },
        {
            german: 'der Löffel',
            plural: 'die Löffel',
            translation: 'spoon',
            category: 'home',
            hint: 'You use this utensil to eat ice cream.'
        },
        {
            german: 'das Messer',
            plural: 'die Messer',
            translation: 'knife',
            category: 'home',
            hint: `Don't "messer" around with this sharp eating utensil.`
        },
        {
            german: 'der Himmel',
            plural: 'die Himmel',
            translation: 'sky',
            category: 'nature',
            hint: 'The blue expanse above us.'
        },
        {
            german: 'der Mond',
            plural: 'die Monde',
            translation: 'moon',
            category: 'nature',
            hint: 'This heavenly body orbits Earth.'
        },
        {
            german: 'die Sonne',
            plural: 'die Sonnen',
            translation: 'sun',
            category: 'nature',
            hint: 'The largest star in our solar system.'
        },
        {
            german: 'der Stern',
            plural: 'die Sterne',
            translation: 'star',
            category: 'nature',
            hint: 'Twinkle, twinkle.'
        },
        {
            german: 'die Wolke',
            plural: 'die Wolken',
            translation: 'cloud',
            category: 'nature',
            hint: 'Every one of these has a silver lining.'
        },
        {
            german: 'der Hut',
            plural: 'die Hüte',
            translation: 'hat',
            category: 'apparel',
            hint: 'Worn on the head.'
        },
        {
            german: 'die Jacke',
            plural: 'die Jacken',
            translation: 'jacket',
            category: 'apparel',
            hint: 'Outerwear that tends to be lightweight.'
        },
        {
            german: 'der Mantel',
            plural: 'die Mäntel',
            translation: 'coat',
            category: 'apparel',
            hint: 'Outerwear that tends to be heavyweight or long.'
        },
        {
            german: 'der Schuh',
            plural: 'die Schuhe',
            translation: 'shoe',
            category: 'apparel',
            hint: 'Protection for your feet.'
        },
        {
            german: 'die Socke',
            plural: 'die Socken',
            translation: 'socks',
            category: 'apparel',
            hint: 'Worn to keep your toesies cozy.'
        },
        {
            german: 'gut',
            translation: 'good',
            category: 'adjectives',
            hint: `__ riddance; __ grief; __ day, sir!`
        },
        {
            german: 'heiß',
            translation: 'hot',
            category: 'adjectives',
            hint: 'The sun is this, but space is not.'
        },
        {
            german: 'kalt',
            translation: 'cold',
            category: 'adjectives',
            hint: 'The way revenge is best served.'
        },
        {
            german: 'perfekt',
            translation: 'perfect',
            category: 'adjectives',
            hint: 'Flawless.'
        },
        {
            german: 'schlecht',
            translation: 'bad',
            category: 'adjectives',
            hint: 'If one apple is this, it spoils the whole bunch.'
        }
    ],

    round5 = [
        {
            german: 'Auf Wiedersehen!',
            translation: 'goodbye',
            category: 'phrases',
            hint: 'A parting phrase.'
        },
        {
            german: 'Bis bald!',
            translation: 'see you soon',
            category: 'phrases',
            hint: 'If "bis später" means "see you later," and "bald" means "soon" . . . you got this!'
        },
        {
            german: 'Bis später!',
            translation: 'see you later',
            category: 'phrases',
            hint: 'Said while leaving: "____, alligator!"'
        },
        {
            german: 'Tschüss!',
            translation: 'bye',
            category: 'phrases',
            hint: 'An informal, three-letter parting phrase.'
        },
        {
            german: 'Viel Glück!',
            translation: 'good luck',
            category: 'phrases',
            hint: 'What does the idiom "break a leg" mean?'
        },
        {
            german: 'einundzwanzig',
            translation: ['twenty-one', 'twenty one'],
            category: 'numbers',
            hint: 'The legal drinking age, in the United States.'
        },
        {
            german: 'zweiundzwanzig',
            translation: ['twenty-two', 'twenty two'],
            category: 'numbers',
            hint: ''
        },
        {
            german: 'dreiundzwanzig',
            translation: ['twenty-three', 'twenty three'],
            category: 'numbers',
            hint: 'This is the number of pairs of chromosomes most humans have.'
        },
        {
            german: 'vierundzwanzig',
            translation: ['twenty-four', 'twenty four'],
            category: 'numbers',
            hint: 'The number of hours in a day.'
        },
        {
            german: 'fünfundzwanzig',
            translation: ['twenty-five', 'twenty five'],
            category: 'numbers',
            hint: 'A quarter of one hundred.'
        },
        {
            german: 'die Ente',
            plural: 'die Enten',
            translation: 'duck',
            category: 'animals',
            hint: 'Quack, quack.'

        },
        {
            german: 'das Huhn',
            plural: 'die Hühner',
            translation: ['hen', 'chicken'],
            category: 'animals',
            hint: 'Cluck, cluck.'

        },
        {
            german: 'die Kuh',
            plural: 'die Kühe',
            translation: 'cow',
            category: 'animals',
            hint: 'Moo.'

        },
        {
            german: 'das Pferd',
            plural: 'die Pferde',
            translation: 'horse',
            category: 'animals',
            hint: 'Neigh.'

        },
        {
            german: 'das Schwein',
            plural: 'die Schweine',
            translation: 'pig',
            category: 'animals',
            hint: 'Oink, oink.'

        },
        {
            german: 'der Baum',
            plural: 'die Bäume',
            translation: 'tree',
            category: 'nature',
            hint: 'What has a trunk and leaves?'
        },
        {
            german: 'die Blume',
            plural: 'die Blumen',
            translation: 'flower',
            category: 'nature',
            hint: 'Something that blooms.'
        },
        {
            german: 'der Berg',
            plural: 'die Berge',
            translation: 'mountain',
            category: 'nature',
            hint: 'Everest is the tallest one.'
        },
        {
            german: 'der Hügel',
            plural: 'die Hügel',
            translation: 'hill',
            category: 'nature',
            hint: 'These can be rolling without ever moving.'
        },
        {
            german: 'das Tal',
            plural: 'die Täler',
            translation: 'valley',
            category: 'nature',
            hint: 'A low area between mountains or hills.'
        },
        {
            german: 'der Gürtel',
            plural: 'die Gürtel',
            translation: 'belt',
            category: 'apparel',
            hint: 'It keeps your pants from falling down.'
        },
        {
            german: 'die Krawatte',
            plural: 'die Krawatten',
            translation: 'tie',
            category: 'apparel',
            hint: 'Knot styles include the half Windsor, the Atlantic, and the Pratt.'
        },
        {
            german: 'der Schal',
            plural: 'die Schals',
            translation: 'scarf',
            category: 'apparel',
            hint: 'Worn for style or to keep the neck warm.'
        },
        {
            german: 'die Tasche',
            plural: 'die Taschen',
            translation: 'bag',
            category: 'apparel',
            hint: 'Something you would use to carry things around.'
        },
        {
            german: 'das Zubehör',
            plural: 'die Zubehöre',
            translation: 'accessory',
            category: 'apparel',
            hint: 'Something that completes an outfit.'
        },
        {
            german: 'Dienstag',
            plural: 'dienstags',
            translation: 'Tuesday',
            category: 'calendar',
            hint: 'Elections fall on this day, in the United States.'
        },
        {
            german: 'Donnerstag',
            plural: 'donnerstags',
            translation: 'Thursday',
            category: 'calendar',
            hint: `Thor's day.`
        },
        {
            german: 'Freitag',
            plural: 'freitags',
            translation: 'Friday',
            category: 'calendar',
            hint: 'This weekday is said to be especially inauspicious when it falls on the thirteenth day of a month.'
        },
        {
            german: 'Mittwoch',
            plural: 'mittwochs',
            translation: 'Wednesday',
            category: 'calendar',
            hint: 'Falls in the middle of the week.'
        },
        {
            german: 'Montag',
            plural: 'montages',
            translation: 'Monday',
            category: 'calendar',
            hint: 'Garfield hates this day.'
        },
        {
            german: 'hässlich',
            translation: 'ugly',
            category: 'adjectives',
            hint: `The word used to describe the titular "duckling" in a Hans Christian Andersen fairy tale.`
        },
        {
            german: 'klar',
            translation: ['clear', 'understood'],
            category: 'adjectives',
            hint: 'Not opaque.'
        },
        {
            german: 'sauber',
            translation: 'clean',
            category: 'adjectives',
            hint: 'You hope this word describes any public bathroom you have to use.'
        },
        {
            german: 'schmutzig',
            translation: 'dirty',
            category: 'adjectives',
            hint: 'The general state of most public bathrooms.'
        },
        {
            german: 'schön',
            translation: ['beautiful', 'pretty'],
            category: 'adjectives',
            hint: 'This word describes people or things that are aesthetically pleasing.'
        }
    ]
];

// getRandom and gimmeWords work in conjunction to pick a random word from wordArray
function getRandom(object) {
    let theKeys = Object.keys(object);
    return theKeys[Math.floor(Math.random() * theKeys.length)];
}

function gimmeWords() {
    wordArray;
    
    if (wordArray.length > 0) {
        // using the getRandom function, this assigns the value of the random word
        randomWord = wordArray[getRandom(wordArray)];
        console.log(randomWord.german);
        console.log(wordArray.length);

        // this populates the flashcard words, when the document loads
        $('#german-word').html(randomWord.german);
        $('#german-plural').html(randomWord.plural);
        
        // this populates the input placeholder
        $('#your-translation').attr('placeholder', `Translate ${randomWord.german}`);

        // this populates the hint message
        $('#hint-message').html(randomWord.hint);
    }
};

gimmeWords();

// this changes the flashcards' colors, based on the given word's category
const categoryColors = () => {
    if (randomWord.category === 'adjectives') {
        $('#german-box').css('backgroundColor', '#9c538d');
        $('#german-word').css('color', '#f0f8ff');
        $('#plural-zone').css('display', 'none');
    } else if (randomWord.category === 'animals') {
        $('#german-box').css('backgroundColor', '#a08181');
        $('#german-word, #german-plural').css('color', '#ffffff');
        $('#plural-zone').css('display', 'block');
    } else if (randomWord.category === 'apparel') {
        $('#german-box').css('backgroundColor', '#0994bd');
        $('#german-word, #german-plural').css('color', '#ffffff');
        $('#plural-zone').css('display', 'block');
    } else if (randomWord.category === 'calendar') {
        $('#german-box').css('backgroundColor', '#cd5c5c');
        $('#german-word, #german-plural').css('color', '#ffffff');
        $('#plural-zone').css('display', 'block');
    } else if (randomWord.category === 'devices') {
        $('#german-box').css('backgroundColor', '#607d8b');
        $('#german-word, #german-plural').css('color', '#ffffff');
        $('#plural-zone').css('display', 'block');
    } else if (randomWord.category === 'food') {
        $('#german-box').css('backgroundColor', '#f44336');
        $('#german-word, #german-plural').css('color', '#f0f8ff');
        $('#plural-zone').css('display', 'block');
    } else if (randomWord.category === 'home') {
        $('#german-box').css('backgroundColor', '#772e53');
        $('#german-word, #german-plural').css('color', '#ffffff');
        $('#plural-zone').css('display', 'block');
    } else if (randomWord.category === 'infinitives') {
        $('#german-box').css('backgroundColor', '#f56a37');
        $('#german-word').css('color', '#ffffff');
        $('#plural-zone').css('display', 'none');
    } else if (randomWord.category === 'nature') {
        $('#german-box').css('backgroundColor', '#2e8b57');
        $('#german-word, #german-plural').css('color', '#ffffff');
        $('#plural-zone').css('display', 'block');
    } else if (randomWord.category === 'numbers') {
        $('#german-box').css('backgroundColor', '#6b6a9e');
        $('#german-word').css('color', '#ffffff');
        $('#plural-zone').css('display', 'none');
    } else if (randomWord.category === 'people') {
        $('#german-box').css('backgroundColor', '#008b8b');
        $('#german-word, #german-plural').css('color', '#f0f8ff');
        $('#plural-zone').css('display', 'block');
    } else if (randomWord.category === 'phrases') {
        $('#german-box').css('backgroundColor', '#ce3c5e');
        $('#german-word').css('color', '#ffffff');
        $('#plural-zone').css('display', 'none');
    } else if (randomWord.category === 'travel') {
        $('#german-box').css('backgroundColor', '#5e93f3');
        $('#german-word, #german-plural').css('color', '#ffffff');
        $('#plural-zone').css('display', 'block');
    }
};

categoryColors();

// a countdown that lets users know how many words are in the round
function updateCountdown() {
    if (wordArray.length == 1) {
        $('#countdown-container').html('<span class="countdown-text">This round has</span> <span id="countdown"></span> <span class="countdown-text">word remaining</span>');
        // $('#countdown').html(`${wordArray.length} word`);
    } else if (wordArray.length >= 2 || wordArray.length == 0) {
        $('#countdown-container').html('<span class="countdown-text">This round has</span> <span id="countdown"></span> <span class="countdown-text">words remaining</span>');
        // $('#countdown').html(`${wordArray.length} words`);
    }
    $('#countdown').html(wordArray.length);
};

updateCountdown();

function revealCountdownText() {
    $('#countdown').mouseenter(function() {
        $('.countdown-text').animate({'opacity': '1'}, 2000);
    });
    $('#countdown').mouseleave(function() {
        $('.countdown-text').animate({'opacity': '0'}, 2000);
    });
};

revealCountdownText();

// get the index of the current random word, splice it from the array, and then push it to the end of the array (so it can be popped out)
function moveWord() {
    i = wordArray.indexOf(randomWord);
    // wordArray.pop(wordArray.push(wordArray.splice(wordArray.indexOf(wordArray[i]), 1)[0]));
    solvedArray.push(wordArray.splice(wordArray.indexOf(wordArray[i]), 1)[0]);
};

// update the modal-box level by one 
function updateLevel() {
    if ($('.modal').css('display') === 'none') {
        level += 1;
        $('#level').html(level);
    }
};

// check that the user's input matches the translation given in the word array. if so, clear the input field and display the next flashcard. else, the console logs the input and the answer, and the input field flashes red while the input value fades. 
function checkAnswer() {
    // convert the user's input to lowercase, to match the answer in the array
    $('#your-translation').val (function() {
        return this.value.toLowerCase();
    });

    let answer = $('#your-translation').val();
    if ((answer === randomWord.translation) || (answer === `the ${randomWord.translation}`) || (answer === `${randomWord.translation}!`) || (answer === randomWord.translation[0]) || (answer === randomWord.translation[1]) || (answer === `${randomWord.translation[0]}!`) || (answer === `${randomWord.translation[1]}!`) || (answer === `${randomWord.translation} `) || (answer === `${randomWord.translation[0]} `) || (answer === `${randomWord.translation[1]} `)) { 
        // reset the input field
        $('#your-translation').val('');
        
        // move the current word to the end of the array
        moveWord();
        
        // randomize wordArray and populate the flashcards 
        gimmeWords();
        
        // assign the flashcards' colors
        categoryColors();
    } else {
        console.log(`Your answer was "${answer}"`);
        console.log(`The correct translation is "${randomWord.translation}"`);
        
        // attach the 2s "bzzt" css animation to the input. this makes the input area flash red and fade back to plum. the timeout function then removes bzzt, so it can be readded if the user's next attempt on the same flashcard is also wrong.
        $('#your-translation').addClass('add-bzzt');
        setTimeout(function() {
            $('#your-translation').removeClass('add-bzzt');
        }, 2000);

        // the animation fades the input text, and then the callback function clears the text value and restores the opacity for the user's next translation attempt
        $('#your-translation').animate({
            'opacity': '0.1',
        }, 2000, function(){
            $('#your-translation').val('').css('opacity', '1');
        });
    }
    
    // when the wordArray is empty, display the next-level modal box and update the level that the user has reached
    if (wordArray.length <= 0 && gameArray.length > 1) {
        updateLevel();
        $('.modal').css('display', 'block');
        $('#modal-body').css('display', 'block');
    } else if (wordArray.length == 0 && gameArray.length == 1) {
        setTimeout(function waitForZero() {
            alert(`Du sprichst Deutsch! Sort of!`);
        }, 200);
    }

    chameleonColors();
    updateCountdown();
    revealCountdownText();

    // reset the hint message's original position
    $('#hint-message').css('right', '-100%');
};

$('#submit').on('click', checkAnswer);

// allow the user to advance with the Enter key, and prevent said key from refreshing the page 
$(document).keypress(function(event) {
    if (event.keyCode === 13) {
        checkAnswer();
        event.preventDefault();
    } 
});

// add (hint bulb and answer key) words to a mini review and remove duplicates 
function buildMiniReview() {
    miniReviewArray.push(randomWord);
    $.uniqueSort(miniReviewArray);
};

// the hint will slide out sideways and bounce back a bit
$('#hint-bulb').on('click', function() {
    $('#hint-message').animate({'right': '145px'}, 600, function() {
        $('#hint-message').animate({'right': '130px'}, 300);
    });

    buildMiniReview();
});

// set the correct translation in the input field, when the answer key is clicked
$('#answer-key').on('click', function() { 
    if (typeof randomWord.translation === 'string') {
        $('input').val(randomWord.translation).addClass('add-sparkle');
    } else {
        $('input').val(randomWord.translation[0]).addClass('add-sparkle');
    }
    setTimeout(function endSparkle() {
        $('input').removeClass('add-sparkle');
    }, 2000);

    buildMiniReview();
});

// open the end-of-round review 
$('#mini-review').on('click', function() {
    $('#modal-body').css('display', 'none');
    $('#modal-review').css('display', 'block');

    if (miniReviewArray.length == 1) {
        $('#review-count').html(`this ${miniReviewArray.length} word`);
        $('#each-it').html('it');
    } else if (miniReviewArray.length >= 2) {
        $('#review-count').html(`these ${miniReviewArray.length} words`);
        $('#each-it').html('each word');
    }

    miniReviewArray.forEach(element => {
        let reviewWords = $('<p class="review-words"></p>');
        let downArrows = $('<img class="down-arrows" src="images/review-arrows.svg" />');
        let reviewAnswers = $('<p class="review-answers"></p>');
        $(reviewWords).text(element.german);
        if (typeof element.translation === 'string') {
            $(reviewAnswers).text(element.translation);
        } else {
            $(reviewAnswers).text(element.translation[0]);
        }
        $('#review-box').append(reviewWords, downArrows, reviewAnswers);

        if (element.category === 'adjectives') {
            $(reviewWords).css('color', '#9c538d');
        } else if (element.category === 'animals') {
            $(reviewWords).css('color', '#a08181');
        } else if (element.category === 'apparel') {
            $(reviewWords).css('color', '#0994bd');
        } else if (element.category === 'calendar') {
            $(reviewWords).css('color', '#cd5c5c');
        } else if (element.category === 'devices') {
            $(reviewWords).css('color', '#607d8b');
        } else if (element.category === 'food') {
            $(reviewWords).css('color', '#f44336');
        } else if (element.category === 'home') {
            $(reviewWords).css('color', '#772e53');
        } else if (element.category === 'infinitives') {
            $(reviewWords).css('color', '#f56a37');
        } else if (element.category === 'nature') {
            $(reviewWords).css('color', '#2e8b57');
        } else if (element.category === 'numbers') {
            $(reviewWords).css('color', '#6b6a9e');
        } else if (element.category === 'people') {
            $(reviewWords).css('color', '#008b8b');
        } else if (element.category === 'phrases') {
            $(reviewWords).css('color', '#ce3c5e');
        } else if (element.category === 'travel') {
            $(reviewWords).css('color', '#5e93f3');
        }

        $(reviewWords).on('click', function() {
            $(downArrows).css('display', 'block');
            $(reviewAnswers).hide().fadeIn(2000);
        });
    });
});

// continue button in modal popup; this progresses users to the next level
$('#continue').on('click', function() {
    endReviewArray.push.apply(endReviewArray, miniReviewArray.splice(0));
    $('#review-box').text('');

    $('#modal-review').css('display', 'none');
    $('.modal').css('display', 'none');

    for (let nextArr = 1; nextArr < 2; nextArr++) {
        if (gameArray.length > 1) {
            wordArray.push.apply(wordArray, gameArray[nextArr]);
            gameArray.splice(gameArray[nextArr], 1);
        }
    }

    gimmeWords();
    categoryColors();
    updateCountdown();
    revealCountdownText();
});

// make the category selection area appear under the header, when the categories link is clicked
$('#open-categories').on('click', function() {
    // update the number of levels remaining
    $('#total-levels').html(gameArray.length);

    // push the lengths of each round into arrLengths, then use the reduce() method to add the lengths and find the total number of game words
    let arrLengths = [];
    gameArray.forEach(arr => {
        arrLengths.push(arr.length);
    });
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    // NB: solvedArray.length added to include words that may have been spliced if the user has already started playing
    const wordTotal = arrLengths.reduce(reducer, solvedArray.length);
    $('#total-words').html(wordTotal);

    // close the category selection, if the link is clicked again
    if ($('#categories-wrapper').css('display') == ('none')) {
        $('header').addClass('header-shadow');
    } else {
        setTimeout(function removeHeaderShadow() {
            $('header').removeClass('header-shadow');
        }, 800);
    }
    $('#categories-wrapper').slideToggle(800);
});

$('#lightning-round').on('click', function() {
    let lightningRound = [];
    // needed to first splice words in wordArray and set them aside in solvedArray, to avoid duplicates. then the remaining rounds can be pushed into the lightningRound. finally, wordArray concatenates lightningRound and solvedArray.
    gameArray.forEach(round => {
        if (round === wordArray) {
            solvedArray.push.apply(solvedArray, wordArray.splice(0));
        } else {
            lightningRound.push.apply(lightningRound, round);
        }
    });
    wordArray = lightningRound.concat(solvedArray);

    gimmeWords();
    categoryColors();
    updateCountdown();
    revealCountdownText();

    if ($('#categories-wrapper').css('display') == ('block')) {
        setTimeout(function removeHeaderShadow() {
            $('header').removeClass('header-shadow');
        }, 800);
    }
    $('#categories-wrapper').slideUp(800);
});

// toggle the visibility of the purple .selection-circle around the category-color label divs, when the corresponding input is checked (i.e., clicked)
$('input[type=checkbox]').on('click', function() {
    $(this).next('label').children('div').children('div').toggle();
});

// select categories and close the selection panel
$('#select-categories').on('click', function() {
    let holderArray = [];
    holderArray = wordArray.concat(round2);
    wordArray.length = 0;
    
    if (($('#select-people').is(':checked') === true)) {
        holderArray.forEach(randomWord => {
            if (randomWord.category === 'people') {
                wordArray.push(randomWord);
            } 
        });
    }

    console.log(holderArray);
    console.log(wordArray);

    gimmeWords();
    categoryColors();
    updateCountdown();
    revealCountdownText();
    
    if ($('#categories-wrapper').css('display') == ('block')) {
        setTimeout(function removeHeaderShadow() {
            $('header').removeClass('header-shadow');
        }, 800);
    }
    $('#categories-wrapper').slideUp(800);
});