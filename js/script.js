let randomWord;
let wordArray;
let underline = `<span class="underline">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>`;
let solvedArray = [];
let miniReviewArray = [];
let endReviewArray = [];
let customRoundArray = [];
let deselectedArray = [];
let i;
let level = 1;
let infoCountdown;
let selectionConfirmed = false;

// change the chameleon's color every time submit is clicked
const chameleonColors = () => {
    $('.active').next('img').addClass('active').prev('img').removeClass('active');
    if ($('#four').hasClass('active')) {
        $('#one').addClass('active');
        $('#four').removeClass('active');
    }
};

let gameArray = [
    wordArray = [
        {
            german: 'die Frau',
            plural: 'die Frauen',
            translation: 'woman',
            category: 'people',
            hint: (`If not <span class="ital">man</span>, then ${underline}.`)
        },
        {
            german: 'der Junge',
            plural: 'die Jungen',
            translation: 'boy',
            category: 'people',
            hint: (`If not <span class="ital">girl</span>, then ${underline}.`)
        },
        {
            german: 'das Mädchen',
            plural: 'die Mädchen',
            translation: 'girl',
            category: 'people',
            hint: (`If not <span class="ital">boy</span>, then ${underline}.`)
        },
        {
            german: 'der Mann',
            plural: 'die Männer',
            translation: 'man',
            category: 'people',
            hint: (`If not <span class="ital">woman</span>, then ${underline}.`)
        },
        {
            german: 'die Person',
            plural: 'die Personen',
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
            hint: (`A refusal. <span class="ital">Nein</span> means <span class="ital">nein</span>!`)
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
            hint: `It takes ${underline} to tango.`
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
            hint: 'How many sides does a pentagon have?'
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
            hint: `Magic ${underline} ball.`
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
            category: 'clothes',
            hint: 'A garment to clothe the upper body.'
        },
        {
            german: 'die Hose',
            plural: 'die Hosen',
            translation: 'pants',
            category: 'clothes',
            hint: `If you're a liar, these are on fire.`
        },
        {
            german: 'das Kleid',
            plural: 'die Kleider',
            translation: 'dress',
            category: 'clothes',
            hint: 'Brides traditionally wear a white one.'
        },
        {
            german: 'der Rock',
            plural: 'die Röcke',
            translation: 'skirt',
            category: 'clothes',
            hint: 'A lower-body garment that can be mini, midi, or maxi.'
        },
        {
            german: 'die Unterwäsche',
            plural: 'die Unterwäschen',
            translation: 'underwear',
            category: 'clothes',
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
            german: 'Willkommen!',
            translation: 'welcome',
            category: 'phrases',
            hint: 'An invitation.'
        },
        {
            german: 'elf',
            translation: 'eleven',
            category: 'numbers',
            hint: (`This number sounds like <span class="ital">elven</span>.`)
        },
        {
            german: 'zwölf',
            translation: 'twelve',
            category: 'numbers',
            hint: 'The top number on a clockface.'
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
            hint: 'This animal always lands on its feet.'
        },
        {
            german: 'die Maus',
            plural: 'die Mäuse',
            translation: 'mouse',
            category: 'animals',
            hint: 'An animal, or a computer device.'
        },
        {
            german: 'der Vogel',
            plural: 'die Vögel',
            translation: 'bird',
            category: 'animals',
            hint: 'A feathered animal that flies and sings.'
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
            hint: 'A brother, or a sister.'
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
            hint: `Stevie Nicks, "Edge of ${underline}."`
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
            hint: 'The last year of your teens.'
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
            hint: 'A cup, with a handle, that is generally associated with coffee.'
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
            hint: (`Don't <span class="ital">messer</span> around with this sharp eating utensil.`)
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
            category: 'clothes',
            hint: 'Worn on the head.'
        },
        {
            german: 'die Jacke',
            plural: 'die Jacken',
            translation: 'jacket',
            category: 'clothes',
            hint: 'Outerwear that tends to be lightweight.'
        },
        {
            german: 'der Mantel',
            plural: 'die Mäntel',
            translation: 'coat',
            category: 'clothes',
            hint: 'Outerwear that tends to be heavyweight or long.'
        },
        {
            german: 'der Schuh',
            plural: 'die Schuhe',
            translation: 'shoe',
            category: 'clothes',
            hint: 'Protection for your feet.'
        },
        {
            german: 'die Socke',
            plural: 'die Socken',
            translation: 'sock',
            category: 'clothes',
            hint: 'Worn to keep your toesies cozy.'
        },
        {
            german: 'gut',
            translation: 'good',
            category: 'adjectives',
            hint: `${underline} riddance; ${underline} grief; ${underline} day, sir!`
        },
        {
            german: 'heiß',
            translation: 'hot',
            category: 'adjectives',
            hint: (`The sun is ${underline}, but space is <span class="ital">not</span>.`)
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
            hint: 'Said when one expects to see someone again.'
        },
        {
            german: 'Bis später!',
            translation: 'see you later',
            category: 'phrases',
            hint: `Said while leaving: "${underline}, alligator!"`
        },
        {
            german: 'Tschüss!',
            translation: 'bye',
            category: 'phrases',
            hint: 'An informal, three-letter parting word.'
        },
        {
            german: 'Viel Glück!',
            translation: 'good luck',
            category: 'phrases',
            hint: (`What does the idiom <span class="ital">break a leg</span> mean?`)
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
            hint: `You're damned if you don't, and also damned if you do, when you find yourself in a catch-${underline}.`
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
            hint: (`<span class="ital">Quack, quack.</span>`)

        },
        {
            german: 'das Huhn',
            plural: 'die Hühner',
            translation: ['hen', 'chicken'],
            category: 'animals',
            hint: (`<span class="ital">Cluck, cluck.</span>`)

        },
        {
            german: 'die Kuh',
            plural: 'die Kühe',
            translation: 'cow',
            category: 'animals',
            hint: (`<span class="ital">Moo.</span>`)

        },
        {
            german: 'das Pferd',
            plural: 'die Pferde',
            translation: 'horse',
            category: 'animals',
            hint: (`<span class="ital">Neigh.</span>`)

        },
        {
            german: 'das Schwein',
            plural: 'die Schweine',
            translation: 'pig',
            category: 'animals',
            hint: (`<span class="ital">Oink, oink.</span>`)

        },
        {
            german: 'der Baum',
            plural: 'die Bäume',
            translation: 'tree',
            category: 'nature',
            hint: 'What has a trunk and leaves?'
        },
        {
            german: 'das Blatt',
            plural: 'die Blätter',
            translation: 'leaf',
            category: 'nature',
            hint: 'When your houseplant drops one, you know true despair.'
        },
        {
            german: 'die Blume',
            plural: 'die Blumen',
            translation: 'flower',
            category: 'nature',
            hint: 'Something that blooms.'
        },
        {
            german: 'die Frucht',
            plural: 'die Früchte',
            translation: 'fruit',
            category: 'nature',
            hint: 'Sometimes edible, sometimes poisonous, and they usually contain seeds.'
        },
        {
            german: 'der Zweig',
            plural: 'die Zweige',
            translation: 'branch',
            category: 'nature',
            hint: `An olive ${underline} is a symbol of peace.`
        },
        {
            german: 'der Gürtel',
            plural: 'die Gürtel',
            translation: 'belt',
            category: 'clothes',
            hint: 'It keeps your pants from falling down.'
        },
        {
            german: 'die Krawatte',
            plural: 'die Krawatten',
            translation: ['necktie', 'tie'],
            category: 'clothes',
            hint: 'Knot styles include the half Windsor, the Atlantic, and the Pratt.'
        },
        {
            german: 'der Strumpf',
            plural: 'die Strümpfe',
            translation: ['stocking', 'stockings'],
            category: 'clothes',
            hint: 'Keeps legs warm under skirts.'
        },
        {
            german: 'die Tasche',
            plural: 'die Taschen',
            translation: 'bag',
            category: 'clothes',
            hint: 'Something you would use to carry things around.'
        },
        {
            german: 'das Zubehör',
            plural: 'die Zubehöre',
            translation: 'accessory',
            category: 'clothes',
            hint: 'Something that completes an outfit.'
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
        },
        {
            german: 'Dienstag',
            plural: 'dienstags',
            translation: ['Tuesday', 'tuesday'],
            category: 'calendar',
            subcategory: 'quiz exempt',
            hint: 'Elections fall on this day, in the United States.'
        },
        {
            german: 'Donnerstag',
            plural: 'donnerstags',
            translation: ['Thursday', 'thursday'],
            category: 'calendar',
            subcategory: 'quiz exempt',
            hint: `Thor's day.`
        },
        {
            german: 'Freitag',
            plural: 'freitags',
            translation: ['Friday', 'friday'],
            category: 'calendar',
            subcategory: 'quiz exempt',
            hint: 'It is especially inauspicious when this falls on the thirteenth day of a month.'
        },
        {
            german: 'Mittwoch',
            plural: 'mittwochs',
            translation: ['Wednesday', 'wednesday'],
            category: 'calendar',
            subcategory: 'quiz exempt',
            hint: 'Falls in the middle of the week.'
        },
        {
            german: 'Montag',
            plural: 'montages',
            translation: ['Monday', 'monday'],
            category: 'calendar',
            subcategory: 'quiz exempt',
            hint: 'Garfield hates this day.'
        }
    ],

    round6 = [
        {
            german: 'sechsundzwanzig',
            translation: ['twenty-six', 'twenty six'],
            category: 'numbers',
            hint: 'The number of letters in the modern English alphabet.'
        },
        {
            german: 'siebenundzwanzig',
            translation: ['twenty-seven', 'twenty seven'],
            category: 'numbers',
            hint: 'Janis Joplin, Kurt Cobain, and Amy Winehouse all died at this age.'
        },
        {
            german: 'achtundzwanzig',
            translation: ['twenty-eight', 'twenty eight'],
            category: 'numbers',
            hint: 'Cillian Murphy wakes up this many "days later" after a viral outbreak, in a Danny Boyle movie.'
        },
        {
            german: 'neunundzwanzig',
            translation: ['twenty-nine', 'twenty nine'],
            category: 'numbers',
            hint: 'The last year of being a twentysomething.'
        },
        {
            german: 'dreißig',
            translation: 'thirty',
            category: 'numbers',
            hint: `Jenna Rink wants to be "${underline}, flirty, and thriving."`
        },
        {
            german: 'die Banane',
            plural: 'die Bananen',
            translation: 'banana',
            category: 'food',
            hint: 'Try not to slip on its peel.'
        },
        {
            german: 'das Ei',
            plural: 'die Eier',
            translation: 'egg',
            category: 'food',
            hint: 'Did this come before the chicken?'
        },
        {
            german: 'das Frühstück',
            plural: 'die Frühstücke',
            translation: 'breakfast',
            category: 'food',
            hint: 'The most important meal of the day!'
        },
        {
            german: 'das Obst',
            translation: 'fruit',
            category: 'food',
            hint: (`A collective noun for <span class="ital">Frucht</span> that is considered edible.`)
        },
        {
            german: 'der Saft',
            plural: 'die Säfte',
            translation: 'juice',
            category: 'food',
            hint: 'A drink made from fruits.'
        },
        {
            german: 'die Biene',
            plural: 'die Bienen',
            translation: 'bee',
            category: 'animals',
            hint: 'Stripy pollinators. Save them!'
        },
        {
            german: 'die Fliege',
            plural: 'die Fliegen',
            translation: 'fly',
            category: 'animals',
            hint: 'Jeff Goldblum let one into his teleportation device.'
        },
        {
            german: 'das Insekt',
            plural: 'die Insekten',
            translation: 'insect',
            category: 'animals',
            hint: 'A creepy-crawly.'
        },
        {
            german: 'der Käfer',
            plural: 'die Käfer',
            translation: 'beetle',
            category: 'animals',
            hint: 'A type of insect that has a car named after it.'
        },
        {
            german: 'die Spinne',
            plural: 'die Spinnen',
            translation: 'spider',
            category: 'animals',
            hint: `It's itsy, bitsy and has eight legs.`
        },
        {
            german: 'der Boden',
            plural: 'die Böden',
            translation: 'floor',
            category: 'home',
            hint: 'A surface for walking.'
        },
        {
            german: 'das Fenster',
            plural: 'die Fenster',
            translation: 'window',
            category: 'home',
            hint: 'A portal to the outside world.'
        },
        {
            german: 'die Tür',
            plural: 'die Türen',
            translation: 'door',
            category: 'home',
            hint: `Don't let it hit you on your way out!`
        },
        {
            german: 'die Wand',
            plural: 'die Wände',
            translation: 'wall',
            category: 'home',
            hint: 'A solid, immovable barrier between rooms.'
        },
        {
            german: 'das Zimmer',
            plural: 'die Zimmer',
            translation: 'room',
            category: 'home',
            hint: 'A space in your home (e.g., the kitchen).'
        },
        {
            german: 'der Berg',
            plural: 'die Berge',
            translation: 'mountain',
            category: 'nature',
            hint: 'Everest is the tallest one.'
        },
        {
            german: 'der Fels',
            plural: 'die Felsen',
            translation: 'rock',
            category: 'nature',
            hint: `Solid as a ${underline}.`
        },
        {
            german: 'der Hügel',
            plural: 'die Hügel',
            translation: 'hill',
            category: 'nature',
            hint: 'These can be rolling without ever moving.'
        },
        {
            german: 'der Stein',
            plural: 'die Steine',
            translation: 'stone',
            category: 'nature',
            hint: 'Excalibur was pulled from one.'
        },
        {
            german: 'das Tal',
            plural: 'die Täler',
            translation: 'valley',
            category: 'nature',
            hint: 'A low area between mountains or hills.'
        },
        {
            german: 'Samstag',
            plural: 'samstags',
            translation: ['Saturday', 'saturday'],
            category: 'calendar',
            subcategory: 'quiz exempt',
            hint: `This night's alright for fighting, according to Elton John.`
        },
        {
            german: 'Sonntag',
            plural: 'sonntags',
            translation: ['Sunday', 'sunday'],
            category: 'calendar',
            subcategory: 'quiz exempt',
            hint: 'The day of the Sun.'
        },
        {
            german: 'die Woche',
            plural: 'die Wochen',
            translation: 'week',
            category: 'calendar',
            hint: 'Seven days in a row.'
        },
        {
            german: 'das Wochenende',
            plural: 'die Wochenenden',
            translation: 'weekend',
            category: 'calendar',
            hint: 'Saturday and Sunday.'
        },
        {
            german: 'der Wochentag',
            plural: 'die Wochentage',
            translation: 'weekday',
            category: 'calendar',
            hint: `Any day that isn't Saturday or Sunday.`
        },
        {
            german: 'das Auto',
            plural: 'die Autos',
            translation: 'car',
            category: 'travel',
            hint: (`<span class="ital">Vroom, vroom.</span>`)
        },
        {
            german: 'die Brücke',
            plural: 'die Brücken',
            translation: 'bridge',
            category: 'travel',
            hint: 'A structure that spans a body of water.'
        },
        {
            german: 'die Karte',
            plural: 'die Karten',
            translation: 'map',
            category: 'travel',
            hint: (`<span class="ital">&sung; If there's a place you gotta go, I'm the one you need to know &mldr; &sung;</span>`)
        },
        {
            german: 'die Reise',
            plural: 'die Reisen',
            translation: ['trip', 'journey'],
            category: 'travel',
            hint: 'Traveling from one place to another.'
        },
        {
            german: 'die Straße',
            plural: 'die Straßen',
            translation: ['road', 'street'],
            category: 'travel',
            hint: 'Look both ways before crossing this.'
        },
        {
            german: 'der Absturz',
            plural: 'die Abstürze',
            translation: 'crash',
            category: 'catastrophe',
            hint: 'When things collide.'
        },
        {
            german: 'die Schnittwunde',
            plural: 'die Schnittwunden',
            translation: ['cut', 'laceration'],
            category: 'catastrophe',
            hint: 'The result of being sliced by something sharp.'
        },
        {
            german: 'der Unfall',
            plural: 'die Unfälle',
            translation: 'accident',
            category: 'catastrophe',
            hint: 'A mistake; something not done on purpose.'
        },
        {
            german: 'die Verletzung',
            plural: 'die Verletzungen',
            translation: 'injury',
            category: 'catastrophe',
            hint: `You shouldn't add insult to this.`
        },
        {
            german: 'die Wunde',
            plural: 'die Wunden',
            translation: 'wound',
            category: 'catastrophe',
            hint: 'Something that is healed by time.'
        }
    ],

    round7 = [
        {
            german: 'der Bäcker',
            plural: 'die Bäcker',
            translation: 'baker',
            category: 'people',
            hint: 'This person makes the best breads, cakes, and pies.'
        },
        {
            german: 'der Barista',
            plural: 'die Baristas',
            translation: 'barista',
            category: 'people',
            hint: 'This person can explain the difference between a cappuccino and a latte.'
        },
        {
            german: 'der Barkeeper',
            plural: 'die Barkeeper',
            translation: ['bartender', 'barkeeper'],
            category: 'people',
            hint: 'A shaker, a stirrer, a listener.'
        },
        {
            german: 'der Kellner',
            plural: 'die Kellner',
            translation: ['waiter', 'server'],
            category: 'people',
            hint: 'If you eat at a restaurant in the US, you should tip this person.'
        },
        {
            german: 'der Koch',
            plural: 'die Köche',
            translation: ['cook', 'chef'],
            category: 'people',
            hint: `This person's uniform usually includes a toque blanche.`
        },
        {
            german: 'einunddreißig',
            translation: ['thirty-one', 'thirty one'],
            category: 'numbers',
            hint: 'The number of days in December.'
        },
        {
            german: 'zweiunddreißig',
            translation: ['thirty-two', 'thirty two'],
            category: 'numbers',
            hint: `Water freezes at ${underline}°F.`
        },
        {
            german: 'dreiunddreißig',
            translation: ['thirty-three', 'thirty three'],
            category: 'numbers',
            hint: 'Another name for an LP record.'
        },
        {
            german: 'vierunddreißig',
            translation: ['thirty-four', 'thirty four'],
            category: 'numbers',
            hint: (`<span class="ital">Miracle on ${underline}th Street.</span>`)
        },
        {
            german: 'fünfunddreißig',
            translation: ['thirty-five', 'thirty five'],
            category: 'numbers',
            hint: 'Presidential candidates must be at least this old, in the United States.'
        },
        {
            german: 'die Karotte',
            plural: 'die Karotten',
            translation: 'carrot',
            category: 'food',
            hint: `A rabbit's favorite snack.`
        },
        {
            german: 'die Kartoffel',
            plural: 'die Kartoffeln',
            translation: 'potato',
            category: 'food',
            hint: (`Mr. <span class="ital">Kartoffel</span> Head.`)
        },
        {
            german: 'der Knoblauch',
            plural: 'n/a',
            translation: 'garlic',
            category: 'food',
            hint: 'These bulbous food items split into segments called cloves.'
        },
        {
            german: 'das Salz',
            plural: 'die Salze',
            translation: 'salt',
            category: 'food',
            hint: 'Often paired with pepper.'
        },
        {
            german: 'die Zwiebel',
            plural: 'die Zwiebeln',
            translation: 'onion',
            category: 'food',
            hint: 'Like Shrek, this food has layers.'
        },
        {
            german: 'der Bär',
            plural: 'die Bären',
            translation: 'bear',
            category: 'animals',
            hint: 'A grizzly one could create a grisly scene.'
        },
        {
            german: 'die Eule',
            plural: 'die Eulen',
            translation: 'owl',
            category: 'animals',
            hint: (`<span class="ital">Who? Who?</span>`)
        },
        {
            german: 'der Fuchs',
            plural: 'die Füchse',
            translation: 'fox',
            category: 'animals',
            hint: 'Known for being cunning and clever.'
        },
        {
            german: 'der Hirsch',
            plural: 'die Hirsche',
            translation: 'deer',
            category: 'animals',
            hint: 'They freeze when they see headlights.'
        },
        {
            german: 'der Waschbär',
            plural: 'die Waschbären',
            translation: 'raccoon',
            category: 'animals',
            hint: 'A little bandit with a ringed tail.'
        },
        {
            german: 'das Badezimmer',
            plural: 'die Badezimmer',
            translation: 'bathroom',
            category: 'home',
            hint: 'Where the tub lives.'
        },
        {
            german: 'das Haus',
            plural: 'die Häuser',
            translation: 'house',
            category: 'home',
            hint: 'A residence.'
        },
        {
            german: 'die Küche',
            plural: 'die Küchen',
            translation: 'kitchen',
            category: 'home',
            hint: 'The room where you might cook (or microwave) food.'
        },
        {
            german: 'das Schlafzimmer',
            plural: 'die Schlafzimmer',
            translation: 'bedroom',
            category: 'home',
            hint: 'Where you might sleep.'
        },
        {
            german: 'das Wohnzimmer',
            plural: 'die Wohnzimmer',
            translation: 'living room',
            category: 'home',
            hint: 'Sometimes called the front room.'
        },
        {
            german: 'das Element',
            plural: 'die Elemente',
            translation: 'element',
            category: 'nature',
            hint: 'Each square on the periodic table contains one.'
        },
        {
            german: 'die Erde',
            plural: 'die Erden',
            translation: 'earth',
            category: 'nature',
            hint: 'Our planet, and another word for soil.'
        },
        {
            german: 'das Feuer',
            plural: 'die Feuer',
            translation: 'fire',
            category: 'nature',
            hint: 'What Prometheus gave mankind, in Greek mythology.'
        },
        {
            german: 'das Gewässer',
            plural: 'die Gewässer',
            translation: ['water', 'body of water'],
            category: 'nature',
            hint: 'A large reservoir, like lakes, oceans, or rivers.'
        },
        {
            german: 'die Luft',
            plural: 'die Lüfte',
            translation: 'air',
            category: 'nature',
            hint: `That mixture of mainly oxygen and nitrogen you're currently breathing.`
        },
        {
            german: 'der Flughafen',
            plural: 'die Flughäfen',
            translation: 'airport',
            category: 'travel',
            hint: 'A place full of gates, arrivals, and destinations.'
        },
        {
            german: 'das Flugzeug',
            plural: 'die Flugzeuge',
            translation: ['airplane', 'plane'],
            category: 'travel',
            hint: 'It can fly without flapping its wings.'
        },
        {
            german: 'der Koffer',
            plural: 'die Koffer',
            translation: 'suitcase',
            category: 'travel',
            hint: `People in the last boarding group might have to check this.`
        },
        {
            german: 'der Pass',
            plural: 'die Pässe',
            translation: 'passport',
            category: 'travel',
            hint: `Don't lose this while you're abroad. Seriously.`
        },
        {
            german: 'der Urlaub',
            plural: 'die Urlaube',
            translation: ['vacation', 'holiday'],
            category: 'travel',
            hint: 'A getaway, a time to relax.'
        },
        {
            german: 'der Brand',
            plural: 'die Brände',
            translation: 'fire',
            category: 'catastrophe',
            hint: 'A conflagration.'
        },
        {
            german: 'die Brandwunde',
            plural: 'die Brandwunden',
            translation: 'burn',
            category: 'catastrophe',
            hint: 'The result of an interation with fire.'
        },
        {
            german: 'die Krankheit',
            plural: 'die Krankheiten',
            translation: ['illness', 'disease'],
            category: 'catastrophe',
            hint: 'A period, or permanent state, of being unwell.'
        },
        {
            german: 'der Notfall',
            plural: 'die Notfälle',
            translation: 'emergency',
            category: 'catastrophe',
            hint: `Call 911, it's an ${underline}.`
        },
        {
            german: 'der Schneesturm',
            plural: 'die Schneestürme',
            translation: ['snowstorm', 'blizzard'],
            category: 'catastrophe',
            hint: 'A heavy snowfall.'
        },
        {
            german: 'der Computer',
            plural: 'die Computer',
            translation: 'computer',
            category: 'tech',
            hint: `You're using one right now.`
        },
        {
            german: 'der Fernseher',
            plural: 'die Fernseher',
            translation: ['television', 'tv'],
            category: 'tech',
            hint: 'Sometimes called the "small screen" or "idiot box."'
        },
        {
            german: 'die Kamera',
            plural: 'die Kameras',
            translation: 'camera',
            category: 'tech',
            hint: 'Use this to capture a moment.'
        },
        {
            german: 'das Radio',
            plural: 'die Radios',
            translation: 'radio',
            category: 'tech',
            hint: 'AM/FM.'
        },
        {
            german: 'das Telefon',
            plural: 'die Telefone',
            translation: ['telephone', 'phone'],
            category: 'tech',
            hint: (`<span class="ital">Ring, ring!</span>`)
        },
    ],

    round8 = [
        {
            german: 'Das stimmt!',
            translation: [`that's true`, `that's right`],
            category: 'phrases',
            hint: 'A way to agree with someone.'
        },
        {
            german: 'Genau!',
            translation: 'exactly',
            category: 'phrases',
            hint: (`Another word for <span class="ital">precisely</span>.`)
        },
        {
            german: 'Keine Ahnung!',
            translation: 'no idea',
            category: 'phrases',
            hint: `A way to express that you don't know something.`
        },
        {
            german: 'Leider!',
            translation: 'unfortunately',
            category: 'phrases',
            hint: 'A way to soften the blow, when you have bad news.'
        },
        {
            german: 'Übrigens . . .',
            translation: 'by the way',
            category: 'phrases',
            hint: 'A way to change the subject.'
        },
        {
            german: 'sechsunddreißig',
            translation: ['thirty-six', 'thirty six'],
            category: 'numbers',
            hint: `Krypton's atomic number.`
        },
        {
            german: 'siebenunddreißig',
            translation: ['thirty-seven', 'thirty seven'],
            category: 'numbers',
            hint: 'Comes after thirty-six.'
        },
        {
            german: 'achtunddreißig',
            translation: ['thirty-eight', 'thirty eight'],
            category: 'numbers',
            hint: `19 ✕ 2 = ${underline}`
        },
        {
            german: 'neununddreißig',
            translation: ['thirty-nine', 'thirty nine'],
            category: 'numbers',
            hint: 'Almost forty.'
        },
        {
            german: 'vierzig',
            translation: 'forty',
            category: 'numbers',
            hint: (`A nap is sometimes called ${underline} <span class="ital">winks</span>.`) 
        },
        {
            german: 'die Armbanduhr',
            plural: 'die Armbanduhren',
            translation: ['wristwatch', 'watch'],
            category: 'clothes',
            hint: 'A wearable timekeeper.'
        },
        {
            german: 'die Brille',
            plural: 'die Brillen',
            translation: ['eyeglasses', 'glasses'],
            category: 'clothes',
            hint: 'These keep you from squinting.'
        },
        {
            german: 'die Halskette',
            plural: 'die Halsketten',
            translation: 'necklace',
            category: 'clothes',
            hint: 'Moana keeps the Heart of Te Fiti in one.'
        },
        {
            german: 'der Ohrring',
            plural: 'die Ohrringe',
            translation: 'earring',
            category: 'clothes',
            hint: (`<span class="ital">Girl with a Pearl ${underline}.</span>`)
        },
        {
            german: 'der Ring',
            plural: 'die Ringe',
            translation: 'ring',
            category: 'clothes',
            hint: (`<span class="ital">&sung; If you liked it then you shoulda put a ${underline} on it &mldr; &sung;</span>`)
        },
        {
            german: 'glücklich',
            translation: 'happy',
            category: 'adjectives',
            hint: (`<span class="ital">&sung; If you're ${underline} and you know it &mldr; &sung;</span>`)
        },
        {
            german: 'müde',
            translation: 'tired',
            category: 'adjectives',
            hint: 'How you feel when you want to sleep.'
        },
        {
            german: 'schwach',
            translation: 'weak',
            category: 'adjectives',
            hint: 'The opposite of strong.'
        },
        {
            german: 'stark',
            translation: 'strong',
            category: 'adjectives',
            hint: 'Having great physical power.'
        },
        {
            german: 'traurig',
            translation: 'sad',
            category: 'adjectives',
            hint: `You cry when you're ${underline}.`
        },
        {
            german: 'das Datum',
            plural: 'die Daten',
            translation: 'date',
            category: 'calendar',
            hint: 'A specific day.'
        },
        {
            german: 'der Feiertag',
            plural: 'die Feiertage',
            translation: 'holiday',
            category: 'calendar',
            hint: 'An annual day of festivities or remembrance.'
        },
        {
            german: 'das Jahr',
            plural: 'die Jahre',
            translation: 'year',
            category: 'calendar',
            hint: 'A period of twelve months.'
        },
        {
            german: 'der Kalender',
            plural: 'die Kalender',
            translation: 'calendar',
            category: 'calendar',
            hint: 'Something used to chart or schedule days.'
        },
        {
            german: 'der Monat',
            plural: 'die Monate',
            translation: 'month',
            category: 'calendar',
            hint: 'The length of one lunar cycle, roughly.'
        },
        {
            german: 'der Bahnhof',
            plural: 'die Bahnhöfe',
            translation: 'train station',
            category: 'travel',
            hint: 'You might wait at the platform here.'
        },
        {
            german: 'der Geldautomat',
            plural: 'die Geldautomaten',
            translation: ['ATM', 'atm'],
            category: 'travel',
            hint: 'A cash machine.'
        },
        {
            german: 'das Hotel',
            plural: 'die Hotels',
            translation: 'hotel',
            category: 'travel',
            hint: 'Home away from home.'
        },
        {
            german: 'das Ladegerät',
            plural: 'die Ladegeräte',
            translation: 'charger',
            category: 'travel',
            hint: 'This powers up your phone.'
        },
        {
            german: 'der Zug',
            plural: 'die Züge',
            translation: 'train',
            category: 'travel',
            hint: 'The Hogwarts Express is one.'
        },
        {
            german: 'der Angriff',
            plural: 'die Angriffe',
            translation: ['attack', 'assault'],
            category: 'catastrophe',
            hint: (`<span class="ital">${underline} of the 50 Foot Woman.</span>`)
        },
        {
            german: 'die Bombe',
            plural: 'die Bomben',
            translation: 'bomb',
            category: 'catastrophe',
            hint: 'MacGyver can defuse one of these with a paperclip.'
        },
        {
            german: 'der Kampf',
            plural: 'die Kämpfe',
            translation: 'fight',
            category: 'catastrophe',
            hint: (`<span class="ital">&sung; You gotta ${underline} for your right to party &mldr; &sung;</span>`)
        },
        {
            german: 'der Krieg',
            plural: 'die Kriege',
            translation: 'war',
            category: 'catastrophe',
            hint: (`"${underline} is hell." —<span class="ital">General Sherman</span>`)
        },
        {
            german: 'der Tod',
            plural: 'die Todesfälle',
            translation: 'death',
            category: 'catastrophe',
            hint: (`"Because I Could Not Stop for ${underline}" is a poem by Emily Dickinson.`)
        },
        {
            german: 'der Drucker',
            plural: 'die Drucker',
            translation: 'printer',
            category: 'tech',
            hint: 'Always seems to run out of ink at the most inconvenient time.'
        },
        {
            german: 'das Gerät',
            plural: 'die Geräte',
            translation: 'device',
            category: 'tech',
            hint: ('Another word for <span class="ital">gadget</span>; rhymes with <span class="ital">precise</span>.')
        },
        {
            german: 'der Kopfhörer',
            plural: 'die Kopfhörer',
            translation: ['headphone', 'headphones'],
            category: 'tech',
            hint: 'Used to listen to things, without disturbing others.'
        },
        {
            german: 'das Mikrofon',
            plural: 'die Mikrofon',
            translation: 'microphone',
            category: 'tech',
            hint: `Can't do karaoke without one.`
        },
        {
            german: 'die Tastatur',
            plural: 'die Tastaturen',
            translation: 'keyboard',
            category: 'tech',
            hint: (`<span class="ital">Click clack</span>—you type with this.`)
        },
        {
            german: 'das Bild',
            plural: 'die Bilder',
            translation: 'painting',
            category: 'arts',
            hint: 'Artwork created with perhaps acrylics or oil.'
        },
        {
            german: 'das Foto',
            plural: 'die Fotos',
            translation: ['photograph', 'photo'],
            category: 'arts',
            hint: 'A captured moment.'
        },
        {
            german: 'das Lied',
            plural: 'die Lieder',
            translation: 'song',
            category: 'arts',
            hint: 'A melody, with or without lyrics.'
        },
        {
            german: 'die Skulptur',
            plural: 'die Skulpturen',
            translation: 'sculpture',
            category: 'arts',
            hint: 'Artwork, often made of marble or bronze.'
        },
        {
            german: 'die Stickerei',
            plural: 'die Stickereien',
            translation: 'embroidery',
            category: 'arts',
            hint: 'The art of stitchwork.'
        },
        {
            german: 'der Arm',
            plural: 'die Arme',
            translation: 'arm',
            category: 'body',
            hint: 'A "humerus" limb.'
        },
        {
            german: 'das Bein',
            plural: 'die Beine',
            translation: 'leg',
            category: 'body',
            hint: `Put on your pants one ${underline} at a time.` 
        },
        {
            german: 'das Gesicht',
            plural: 'die Gesichter',
            translation: 'face',
            category: 'body',
            hint: 'Your nose is at the center.'
        },
        {
            german: 'der Kopf',
            plural: 'die Köpfe',
            translation: 'head',
            category: 'body',
            hint: `What the <span class="ital">Sleepy Hollow</span> horseman lacks.`
        },
        {
            german: 'der Körper',
            plural: 'die Körper',
            translation: 'body',
            category: 'body',
            hint: 'Your corporeal form.'
        }
    ],

    round9 = [
        {
            german: 'einundvierzig',
            translation: ['forty-one', 'forty one'],
            category: 'numbers',
            hint: `Sum ${underline} is a Canadian pop-punk band.`
        },
        {
            german: 'zweiundvierzig',
            translation: ['forty-two', 'forty two'],
            category: 'numbers',
            hint: `Jackie Robinson's jersey number.`
        },
        {
            german: 'dreiundvierzig',
            translation: ['forty-three', 'forty three'],
            category: 'numbers',
            hint: 'Roman numeral XLIII.'
        },
        {
            german: 'vierundvierzig',
            translation: ['forty-four', 'forty four'],
            category: 'numbers',
            hint: `President Barack Obama, aka Number ${underline}.`
        },
        {
            german: 'fünfundvierzig',
            translation: ['forty-five', 'forty five'],
            category: 'numbers',
            hint: 'The number of degrees in half of a right angle.'
        },
        {
            german: 'das Eichhörnchen',
            plural: 'die Eichhörnchen',
            translation: 'squirrel',
            category: 'animals',
            hint: 'A twitchy rodent that loves acorns.'
        },
        {
            german: 'die Fledermaus',
            plural: 'die Fledermäuse',
            translation: 'bat',
            category: 'animals',
            hint: 'This creature of the night is associated with vampires.'
        },
        {
            german: 'der Frosch',
            plural: 'die Frösche',
            translation: 'frog',
            category: 'animals',
            hint: 'When brightly colored, this amphibian is likely poisonous.'
        },
        {
            german: 'die Schildkröte',
            plural: 'die Schildkröten',
            translation: 'turtle',
            category: 'animals',
            hint: 'This reptile has a built-in shield.'
        },
        {
            german: 'die Schlange',
            plural: 'die Schlangen',
            translation: 'snake',
            category: 'animals',
            hint: `This reptile doesn't need arms, to squeeze you.`
        },
        {
            german: 'das Bauernhaus',
            plural: 'die Bauernhäuser',
            translation: 'farmhouse',
            category: 'home',
            hint: 'A home in a rural setting.'
        },
        {
            german: 'das Herrenhaus',
            plural: 'die Herrenhäuser',
            translation: ['mansion', 'manor'],
            category: 'home',
            hint: 'A large, fancy house.'
        },
        {
            german: 'die Hütte',
            plural: 'die Hütten',
            translation: ['cottage', 'hut'],
            category: 'home',
            hint: 'A quaint, cozy home.'
        },
        {
            german: 'das Stadthaus',
            plural: 'die Stadthäuser',
            translation: 'townhouse',
            category: 'home',
            hint: 'An attached dwelling.'
        },
        {
            german: 'die Wohnung',
            plural: 'die Wohnungen',
            translation: 'apartment',
            category: 'home',
            hint: 'A building with multiple residences.'
        },
        {
            german: 'der Fluss',
            plural: 'die Flüsse',
            translation: 'river',
            category: 'nature',
            hint: 'The Nile is one, the Amazon is another.'
        },
        {
            german: 'das Meer',
            plural: 'die Meere',
            translation: 'sea',
            category: 'nature',
            hint: `The Dead ${underline} Scrolls.`
        },
        {
            german: 'der Ozean',
            plural: 'die Ozeane',
            translation: 'ocean',
            category: 'nature',
            hint: `The Atlantic ${underline}.`
        },
        {
            german: 'der See',
            plural: 'die Seen',
            translation: 'lake',
            category: 'nature',
            hint: 'A deep, large inland body of water.'
        },
        {
            german: 'der Teich',
            plural: 'die Teiche',
            translation: 'pond',
            category: 'nature',
            hint: 'A somewhat shallow body of water.'
        },
        {
            german: 'der Fäustling',
            plural: 'die Fäustlinge',
            translation: 'mitten',
            category: 'clothes',
            hint: 'Handwear that makes you look like a lobster.'
        },
        {
            german: 'der Handschuh',
            plural: 'die Handschuhe',
            translation: 'glove',
            category: 'clothes',
            hint: 'Five-fingered handwear.'
        },
        {
            german: 'die Mütze',
            plural: 'die Mützen',
            translation: ['cap', 'beanie'],
            category: 'clothes',
            hint: 'Warm headwear.'
        },
        {
            german: 'der Schal',
            plural: 'die Schals',
            translation: 'scarf',
            category: 'clothes',
            hint: 'Worn for style or to keep the neck warm.'
        },
        {
            german: 'der Stiefel',
            plural: 'die Stiefel',
            translation: 'boot',
            category: 'clothes',
            hint: `This ${underline} is made for walking.`
        },
        {
            german: 'groß',
            translation: 'big',
            category: 'adjectives',
            hint: 'The opposite of small.'
        },
        {
            german: 'klein',
            translation: 'small',
            category: 'adjectives',
            hint: 'The opposite of big.'
        },
        {
            german: 'laut',
            translation: 'loud',
            category: 'adjectives',
            hint: 'The volume of a scream.'
        },
        {
            german: 'leise',
            translation: 'quiet',
            category: 'adjectives',
            hint: 'The volume of a whisper.'
        },
        {
            german: 'normal',
            translation: 'normal',
            category: 'adjectives',
            hint: 'When something is as expected.'
        },
        {
            german: 'die Minute',
            plural: 'die Minuten',
            translation: 'minute',
            category: 'calendar',
            hint: 'This unit is a sixtieth of an hour.'
        },
        {
            german: 'der Sekunde',
            plural: 'die Sekunden',
            translation: 'second',
            category: 'calendar',
            hint: 'This unit is a sixtieth of a minute.'
        },
        {
            german: 'die Stunde',
            plural: 'die Stunden',
            translation: 'hour',
            category: 'calendar',
            hint: 'A period of sixty minutes.'
        },
        {
            german: 'der Tag',
            plural: 'die Tage',
            translation: 'day',
            category: 'calendar',
            hint: 'A twenty-four-hour period of time.'
        },
        {
            german: 'die Zeit',
            plural: 'die Zeiten',
            translation: 'time',
            category: 'calendar',
            hint: 'This progesses in an endless, linear procession.'
        },
        {
            german: 'das Dorf',
            plural: 'die Dörfer',
            translation: 'village',
            category: 'travel',
            hint: 'Every one of these has its own idiot.'
        },
        {
            german: 'der Kontinent',
            plural: 'die Kontinente',
            translation: 'continent',
            category: 'travel',
            hint: `Australia is a country and a ${underline}.`
        },
        {
            german: 'das Land',
            plural: 'die Länder',
            translation: 'country',
            category: 'travel',
            hint: 'A nation.'
        },
        {
            german: 'der Staat',
            plural: 'die Staaten',
            translation: 'state',
            category: 'travel',
            hint: 'New York is one of fifty.'
        },
        {
            german: 'die Stadt',
            plural: 'die Städte',
            translation: 'city',
            category: 'travel',
            hint: 'A metropolis.'
        },
        {
            german: 'der Bleistift',
            plural: 'die Bleistifte',
            translation: 'pencil',
            category: 'arts',
            hint: 'The yellow Dixon Ticonderoga #2 is a popular one.'
        },
        {
            german: 'der Buntstift',
            plural: 'die Buntstifte',
            translation: ['colored pencil', 'coloring pencil'],
            category: 'arts',
            hint: 'More sophisticated than a crayon.'
        },
        {
            german: 'der Kugelschreiber',
            plural: 'die Kugelschreiber',
            translation: ['ballpoint', 'pen'],
            category: 'arts',
            hint: 'The Bic Cristal is a popular one.'
        },
        {
            german: 'der Radiergummi',
            plural: 'die Radiergummis',
            translation: 'eraser',
            category: 'arts',
            hint: 'Use this to fix mistakes, when writing.'
        },
        {
            german: 'der Stift',
            plural: 'die Stifte',
            translation: ['pen', 'pencil'],
            category: 'arts',
            hint: 'A writing tool.'
        },
        {
            german: 'die Brust',
            plural: 'die Brüste',
            translation: ['chest', 'breast'],
            category: 'body',
            hint: 'The upper torso.'
        },
        {
            german: 'der Fuß',
            plural: 'die Füße',
            translation: 'foot',
            category: 'body',
            hint: 'Goes in a sock.'
        },
        {
            german: 'die Hand',
            plural: 'die Hände',
            translation: 'hand',
            category: 'body',
            hint: 'Goes in a glove.'
        },
        {
            german: 'das Herz',
            plural: 'die Herzen',
            translation: 'heart',
            category: 'body',
            hint: 'A major organ.'
        },
        {
            german: 'der Rücken',
            plural: 'die Rücken',
            translation: 'back',
            category: 'body',
            hint: 'Where you carry a rucksack.'
        },
    ],

    round10 = [
        {
            german: 'sechsundvierzig',
            translation: ['forty-six', 'forty six'],
            category: 'numbers',
            hint: ''
        },
        {
            german: 'siebenundvierzig',
            translation: ['forty-seven', 'forty seven'],
            category: 'numbers',
            hint: ''
        },
        {
            german: 'achtundvierzig',
            translation: ['forty-eight', 'forty eight'],
            category: 'numbers',
            hint: ''
        },
        {
            german: 'neunundvierzig',
            translation: ['forty-nine', 'forty nine'],
            category: 'numbers',
            hint: ''
        },
        {
            german: 'fünfzig',
            translation: 'fifty',
            category: 'numbers',
            hint: ''
        },
    ]
];

// merge all the rounds in gameArray
let consolidatedArray = [].concat.apply([], gameArray);

// getRandom and gimmeWords work in conjunction to pick a random word from wordArray
function getRandom(object) {
    let theKeys = Object.keys(object);
    return theKeys[Math.floor(Math.random() * theKeys.length)];
}

// on the quiz page, filter wordArray to remove all words without definite articles (i.e., without der, die, or das)
function checkForArticles() {
    if ($('body').hasClass('quiz-page')) {
        wordArray = wordArray.filter(item => 
            (item.category !== 'numbers') && 
            (item.category !== 'phrases') &&
            (item.category !== 'adjectives') &&
            (item.subcategory !== 'quiz exempt')
        );
    }
}

function gimmeWords() {
    checkForArticles();
    
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

    // split randomWord, to hide the article and show only the noun
    if ($('body').hasClass('quiz-page')) {
        $('#german-word').html(randomWord.german.split(' ')[0]).css('display', 'none').html(randomWord.german.split(' ')[1]).css('display', 'block');
    }
};

gimmeWords();

// this changes the flashcards' colors, based on the given word's category
const categoryColors = () => {
    switch (randomWord.category) {
        case 'adjectives':
            $('#german-box').css('backgroundColor', '#9c538d');
            $('#plural-zone').css('display', 'none');
            $('#insert-category').html('Adjectives');
            $('#card-icon').attr('src', 'images/category-icons-adjectives.svg');
            break;
        case 'animals':
            $('#german-box').css('backgroundColor', '#a08181');
            $('#plural-zone').css('display', 'block');
            $('#insert-category').html('Animals');
            $('#card-icon').attr('src', 'images/category-icons-animals.svg');
            break;
        case 'arts':
            $('#german-box').css('backgroundColor', '#4682b4');
            $('#plural-zone').css('display', 'block');
            $('#insert-category').html('Arts');
            $('#card-icon').attr('src', 'images/category-icons-arts.svg');
            break;
        case 'body':
            $('#german-box').css('backgroundColor', '#f56a37');
            $('#plural-zone').css('display', 'block');
            $('#insert-category').html('Body');
            $('#card-icon').attr('src', 'images/category-icons-body.svg');
            break;
        case 'calendar':
            $('#german-box').css('backgroundColor', '#cd5c5c');
            $('#plural-zone').css('display', 'block');
            $('#insert-category').html('Calendar');
            $('#card-icon').attr('src', 'images/category-icons-calendar.svg');
            break;
        case 'catastrophe':
            $('#german-box').css('backgroundColor', '#759475');
            $('#plural-zone').css('display', 'block');
            $('#insert-category').html('Catastrophe');
            $('#card-icon').attr('src', 'images/category-icons-catastrophe.svg');
            break;
        case 'clothes':
            $('#german-box').css('backgroundColor', '#0994bd');
            $('#plural-zone').css('display', 'block');
            $('#insert-category').html('Clothes');
            $('#card-icon').attr('src', 'images/category-icons-clothes.svg');
            break;
        case 'food':
            $('#german-box').css('backgroundColor', '#f44336');
            $('#plural-zone').css('display', 'block');
            $('#insert-category').html('Food');
            $('#card-icon').attr('src', 'images/category-icon-food.svg');
            break;
        case 'home':
            $('#german-box').css('backgroundColor', '#772e53');
            $('#plural-zone').css('display', 'block');
            $('#insert-category').html('Home');
            $('#card-icon').attr('src', 'images/category-icons-home.svg');
            break;
        case 'nature':
            $('#german-box').css('backgroundColor', '#2e8b57');
            $('#plural-zone').css('display', 'block');
            $('#insert-category').html('Nature');
            $('#card-icon').attr('src', 'images/category-icons-nature.svg');
            break;
        case 'numbers':
            $('#german-box').css('backgroundColor', '#6b6a9e');
            $('#plural-zone').css('display', 'none');
            $('#insert-category').html('Numbers');
            $('#card-icon').attr('src', 'images/category-icons-numbers.svg');
            break;
        case 'people':
            $('#german-box').css('backgroundColor', '#008b8b');
            $('#plural-zone').css('display', 'block');
            $('#insert-category').html('People');
            $('#card-icon').attr('src', 'images/category-icons-people.svg');
            break;
        case 'phrases':
            $('#german-box').css('backgroundColor', '#ce3c5e');
            $('#plural-zone').css('display', 'none');
            $('#insert-category').html('Phrases');
            $('#card-icon').attr('src', 'images/category-icons-phrases.svg');
            break;
        case 'tech':
            $('#german-box').css('backgroundColor', '#607d8b');
            $('#plural-zone').css('display', 'block');
            $('#insert-category').html('Tech');
            $('#card-icon').attr('src', 'images/category-icons-technology.svg');
            break;
        case 'travel':
            $('#german-box').css('backgroundColor', '#5e93f3');
            $('#plural-zone').css('display', 'block');
            $('#insert-category').html('Travel');
            $('#card-icon').attr('src', 'images/category-icons-travel.svg');
            break;
    }

    if ($('#plural-zone').css('display') == 'none') {
        $('#card-text-wrapper').css('height', 'unset');
    } else if ($('#plural-zone').css('display') == 'block') {
        $('#card-text-wrapper').css('height', 'fit-content');
    }
};

categoryColors();

// a countdown that lets users know how many words are in the round
function updateCountdown() {
    if (wordArray.length == 1) {
        $('#countdown-container').html('<span class="countdown-text">This round has</span> <span id="countdown"></span> <span class="countdown-text">word remaining</span>');
    } else if (wordArray.length >= 2 || wordArray.length == 0) {
        $('#countdown-container').html('<span class="countdown-text">This round has</span> <span id="countdown"></span> <span class="countdown-text">words remaining</span>');
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

function moveWord() {
    // get the index of the current random word
    i = wordArray.indexOf(randomWord);
    
    // move the word (at that index position in wordArray) from wordArray to solvedArray
    solvedArray.push(wordArray.splice(wordArray.indexOf(wordArray[i]), 1)[0]);
};

// update the modal-box level by one 
function updateLevel() {
    if ($('#level-box').css('display') === 'none') {
        level += 1;
        $('#level').html(level);
    }
};

// add (hint bulb and answer key) words to a mini review and remove duplicates 
function buildMiniReview() {
    miniReviewArray.push(randomWord);
    $.uniqueSort(miniReviewArray);
};

function displayMiniReview() {
    // if the level modal is displayed, and miniReviewArray is empty
    if ($('#modal-body').css('display') === 'block' && miniReviewArray.length == 0) {
        // hide the mini-review button
        $('#mini-review-container').css('display', 'none');
    } else if ($('#modal-body').css('display') === 'block' && miniReviewArray.length >= 1) {
        // but display the button, when the array has content
        $('#mini-review-container').css('display', 'block');
    }
};

function displayEndReview() {
    if ($('#modal-body').css('display') === 'block' && endReviewArray.length == 0) {
        $('.review-arrows').css('display', 'none');
        $('#mini-review').css('display', 'none');
    } else if ($('#modal-body').css('display') === 'block' && endReviewArray.length >= 1) {
        // ensure that the final round is included in the end review
        endReviewArray.push.apply(endReviewArray, miniReviewArray.splice(0));
        $('#mini-review-container').css('display', 'none');
        $('#end-review-container').css('display', 'block');
        $('.review-arrows').css('display', 'inline');
        $('#final-review').css('display', 'inline');
    }
};

// reset the hint message's original position
function resetHint() {
    $('#hint-message-container').css('right', '-100%');
};

// when the wordArray is empty, display the next-level modal box and update the level that the user has reached
function modalDisplay() {
    if (wordArray.length <= 0 && gameArray.length > 1) {
        updateLevel();
        $('#level-box').css('display', 'block');
        $('#modal-body').css('display', 'block');
        displayMiniReview();
    } else if (wordArray.length == 0 && gameArray.length == 1) {
        // the lightning round removes all "continue" buttons (which push the mini reviews into the end review), so the end review must be "built" here to be displayed after a lightning round
        endReviewArray.push.apply(endReviewArray, miniReviewArray.splice(0));
        $('#level-box').css('display', 'block');
        $('#modal-body').css('display', 'block');
        displayEndReview();
        $('#congrats-sub').html('You Did It!');
        $('#modal-image').css({'backgroundImage': 'url("images/review-fireworks.png")', 'filter': 'saturate(1.5)'});
        $('#level').css('display', 'none');
        $('#continue').html('Start Over');
        $(document).on('click', '#continue', function() {
            location.reload(true);
        });
    }
};

// check that the user's input matches the translation given in the word array. if so, clear the input field and display the next flashcard. else, the console logs the input and the answer, and the input field flashes red while the input value fades. 
function checkAnswer() {
    // convert the user's input to lowercase, to match the answer in the array
    $('#your-translation').val (function() {
        return this.value.toLowerCase();
    });

    let answer = $('#your-translation').val().trim();
    
    if ((answer === randomWord.translation) || 
        (answer === randomWord.translation[0]) || 
        (answer === randomWord.translation[1]) || 
        (answer === `the ${randomWord.translation}`) || 
        (answer === `the ${randomWord.translation[0]}`) ||
        (answer === `the ${randomWord.translation[1]}`) ||
        (answer === `${randomWord.translation}!`) || 
        (answer === `${randomWord.translation[0]}!`) || 
        (answer === `${randomWord.translation[1]}!`)) { 
        // reset the input field
        $('#your-translation').val('');
        
        // move the current word to the end of the array
        moveWord();
        
        // randomize wordArray and populate the flashcards 
        gimmeWords();
        
        // assign the flashcards' colors
        categoryColors();

        chameleonColors();
    } else {
        console.log(`Your answer was "${answer}"`);
        console.log(`The correct translation is "${randomWord.translation}"`);
        
        // attach the 2s "bzzt" css animation to the input. this makes the input area flash red and fade back to plum. the timeout function then removes bzzt, so it can be readded if the user's next attempt on the same flashcard is also wrong.
        $('#your-translation, #translation-container').addClass('add-bzzt');
        setTimeout(function() {
            $('#your-translation, #translation-container').removeClass('add-bzzt');
        }, 2000);

        // the animation fades the input text, and then the callback function clears the text value and restores the opacity for the user's next translation attempt
        $('#your-translation').animate({
            'opacity': '0.1',
        }, 2000, function(){
            $('#your-translation').val('').css('opacity', '1');
        });

        buildMiniReview();
    }
    
    modalDisplay();
    updateCountdown();
    revealCountdownText();
    resetHint();
};

$('#submit').on('click', checkAnswer);

// allow the user to advance with the Enter key, and prevent said key from refreshing the page 
$(document).keypress(function(event) {
    if (event.keyCode === 13) {
        checkAnswer();
        event.preventDefault();
    } 
});

// turn the flashcard category labels off and on
$('#label-switch').on('click', function() {
    if ($('#label-switch').attr('src') == 'images/three-bent-labels-outline.svg') {
        $('#label-switch').attr('src', 'images/three-bent-labels.svg')
    } else {
        $('#label-switch').attr('src', 'images/three-bent-labels-outline.svg');
    }
    $('#card-category').toggle();
    $('#card-icon').toggle();
});

function closeHintMessage() {
    $('#hint-message-container').animate({'right': '115px'}, 300, function() {
        $('#hint-message-container').animate({'right': '-100%'}, 600);
    });
}

// if the hint is clicked, it will close
$('#hint-message-container').on('click', closeHintMessage);

// the hint bulb opens and closes the hint, and it sends words to the mini review
$('#hint-bulb').on('click', function() {
    if ($('#hint-message-container').css('right') == '130px') {
        closeHintMessage();
    } else {
        $('#hint-message-container').animate({'right': '145px'}, 600, function() {
            $('#hint-message-container').animate({'right': '130px'}, 300);
        });
    }

    buildMiniReview();
});

// remove sparkle styles from the quiz buttons, after answer key is clicked
function removeSparkle() {
    setTimeout(function() {
        $('.quiz-buttons').removeClass('add-sparkle').removeClass('sparkle-text');
    }, 1500);
}

// add the sparkle animation to the correct quiz button
function quizAnswer() {
    if ($('#der-button').html() === randomWord.german.split(' ')[0]) {
        $('#der-button').addClass('add-sparkle').addClass('sparkle-text');
        removeSparkle();
    } else if ($('#die-button').html() === randomWord.german.split(' ')[0]) {
        $('#die-button').addClass('add-sparkle').addClass('sparkle-text');
        removeSparkle();
    } else if ($('#das-button').html() === randomWord.german.split(' ')[0]) {
        $('#das-button').addClass('add-sparkle').addClass('sparkle-text');
        removeSparkle();
    }
};

// set the correct translation in the input field, or apply quizAnswer(), when the answer key is clicked
$('#answer-key').on('click', function() { 
    if (typeof randomWord.translation === 'string') {
        $('#your-translation').val(randomWord.translation).addClass('add-sparkle');
        $('#translation-container').addClass('add-sparkle');
    } else {
        $('#your-translation').val(randomWord.translation[0]).addClass('add-sparkle');
        $('#translation-container').addClass('add-sparkle');
    }
    setTimeout(function endSparkle() {
        $('#your-translation, #translation-container').removeClass('add-sparkle');
    }, 2000);

    if ($('body').hasClass('quiz-page')) {
        quizAnswer();
    }

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
        let reviewWords = $('<p class="review-words" lang="de"></p>');
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
        } else if (element.category === 'arts') {
            $(reviewWords).css('color', '#4682b4');
        } else if (element.category === 'body') {
            $(reviewWords).css('color', '#f56a37');
        } else if (element.category === 'calendar') {
            $(reviewWords).css('color', '#cd5c5c');
        } else if (element.category === 'catastrophe') {
            $(reviewWords).css('color', '#759475');
        } else if (element.category === 'clothes') {
            $(reviewWords).css('color', '#0994bd');
        } else if (element.category === 'food') {
            $(reviewWords).css('color', '#f44336');
        } else if (element.category === 'home') {
            $(reviewWords).css('color', '#772e53');
        } else if (element.category === 'nature') {
            $(reviewWords).css('color', '#2e8b57');
        } else if (element.category === 'numbers') {
            $(reviewWords).css('color', '#6b6a9e');
        } else if (element.category === 'people') {
            $(reviewWords).css('color', '#008b8b');
        } else if (element.category === 'phrases') {
            $(reviewWords).css('color', '#ce3c5e');
        } else if (element.category === 'tech') {
            $(reviewWords).css('color', '#607d8b');
        } else if (element.category === 'travel') {
            $(reviewWords).css('color', '#5e93f3');
        }

        $(reviewWords).on('click', function() {
            if ($(reviewAnswers).css('display') == 'block') {
                $(downArrows).addClass('up-arrows');
                $(reviewAnswers).fadeOut(2000);
                $(downArrows).fadeOut(2000);
            } else {
                $(downArrows).removeClass('up-arrows').css('display', 'block');
                $(reviewAnswers).hide().fadeIn(2000);
            }
        });
    });
});

// open the final review, with weak words from every round
$('#final-review').on('click', function() {
    $('#modal-body').css('display', 'none');
    $('#modal-review').css('display', 'block');
    $('#modal-review h2').html('Final Review');
    $('#remove-round').css('display', 'none');

    if (endReviewArray.length == 1) {
        $('#review-count').html(`this ${endReviewArray.length} word.`);
        $('#each-it').html('it');
    } else if (endReviewArray.length >= 2) {
        $('#review-count').html(`these ${endReviewArray.length} words.`);
        $('#each-it').html('each word');
    }

    endReviewArray.forEach(thing => {
        let finalReviewWords = $('<p class="review-words" lang="de"></p>');
        let finalDownArrows = $('<img class="down-arrows" src="images/review-arrows.svg" />');
        let finalReviewAnswers = $('<p class="review-answers"></p>');

        $(finalReviewWords).text(thing.german);
        if (typeof thing.translation === 'string') {
            $(finalReviewAnswers).text(thing.translation);
        } else {
            $(finalReviewAnswers).text(thing.translation[0]);
        }

        $('#review-box').append(finalReviewWords, finalDownArrows, finalReviewAnswers);

        if (thing.category === 'adjectives') {
            $(finalReviewWords).css('color', '#9c538d');
        } else if (thing.category === 'animals') {
            $(finalReviewWords).css('color', '#a08181');
        } else if (thing.category === 'arts') {
            $(finalReviewWords).css('color', '#4682b4');
        } else if (thing.category === 'body') {
            $(finalReviewWords).css('color', '#f56a37');
        } else if (thing.category === 'calendar') {
            $(finalReviewWords).css('color', '#cd5c5c');
        } else if (thing.category === 'catastrophe') {
            $(finalReviewWords).css('color', '#759475');
        } else if (thing.category === 'clothes') {
            $(finalReviewWords).css('color', '#0994bd');
        } else if (thing.category === 'food') {
            $(finalReviewWords).css('color', '#f44336');
        } else if (thing.category === 'home') {
            $(finalReviewWords).css('color', '#772e53');
        } else if (thing.category === 'nature') {
            $(finalReviewWords).css('color', '#2e8b57');
        } else if (thing.category === 'numbers') {
            $(finalReviewWords).css('color', '#6b6a9e');
        } else if (thing.category === 'people') {
            $(finalReviewWords).css('color', '#008b8b');
        } else if (thing.category === 'phrases') {
            $(finalReviewWords).css('color', '#ce3c5e');
        } else if (thing.category === 'tech') {
            $(finalReviewWords).css('color', '#607d8b');
        } else if (thing.category === 'travel') {
            $(finalReviewWords).css('color', '#5e93f3');
        }
    
        $(finalReviewWords).on('click', function() {
            if ($(finalReviewAnswers).css('display') == 'block') {
                $(finalDownArrows).addClass('up-arrows');
                $(finalReviewAnswers).fadeOut(2000);
                $(finalDownArrows).fadeOut(2000);
            } else {
                $(finalDownArrows).removeClass('up-arrows').css('display', 'block');
                $(finalReviewAnswers).hide().fadeIn(2000);
            }
        });
    });
});

// continue button in modal popup; this progresses users to the next level
$('#continue').on('click', function() {
    endReviewArray.push.apply(endReviewArray, miniReviewArray.splice(0));
    $('#review-box').text('');

    $('#modal-review').css('display', 'none');
    $('#level-box').css('display', 'none');

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
$('#open-categories').on('click keydown', function() {
    // update the number of levels remaining
    $('#total-levels').html(gameArray.length);

    // push the lengths of each round into arrLengths, then use the reduce() method to add the lengths and find the total number of game words
    let arrLengths = [];
    gameArray.forEach(arr => {
        if ($('body').hasClass('quiz-page')) {
            arr = arr.filter(item => 
                (item.category !== 'numbers') && 
                (item.category !== 'phrases') &&
                (item.category !== 'adjectives') &&
                (item.subcategory !== 'quiz exempt')
            );
        }
        arrLengths.push(arr.length);
    });
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    // NB: solvedArray.length added to include words that may have been spliced if the user has already started playing
    const wordTotal = arrLengths.reduce(reducer, solvedArray.length);
    $('#total-words').html(wordTotal);

    // close the mobile nav to reveal the categories
    if ($('nav').css('right') == '0px' && $(window).width() < 616) {
        $('nav').animate({right: '100%'});
    }

    // close the category selection, if the link is clicked again
    if ($('#categories-wrapper').css('display') == ('none')) {
        $('header').addClass('header-shadow');
    } else {
        setTimeout(function removeHeaderShadow() {
            $('header').removeClass('header-shadow');
        }, 800);
    }
    $('#categories-wrapper').slideToggle(800);

    // bring back the info switch, since it's hidden when the hamburger menu is clicked
    $('#info-switch-container').css('display', 'flex');
});

function closeCategories() {
    if ($('#categories-wrapper').css('display') == ('block')) {
        setTimeout(function removeHeaderShadow() {
            $('header').removeClass('header-shadow');
        }, 800);
    }
    $('#categories-wrapper').slideUp(800);
};

// easily close the Categories panel, on mobile devices
$('#categories-x-bg').on('click', function() {
    closeCategories();
    $('#info-switch-container').css('display', 'flex');
});

$('.lightning-round').on('click', function() {
    checkForArticles();

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
    gameArray.splice(1);

    gimmeWords();
    categoryColors();
    updateCountdown();
    revealCountdownText();
    modalDisplay();
    closeCategories();    
});

$('input.category[type=checkbox]').on('click keydown', function() {
    // toggle the visibility of the purple .selection-circle around the category icons, when the corresponding input is clicked
    $(this).next('label').children('div').children('div').toggle();
    // if the circle is visible, make label text bold
    if ($(this).next('label').children('div').children('div').css('display') == ('block')) {
        $(this).next('label').children('p').addClass('bolded');
    } else {
        $(this).next('label').children('p').removeClass('bolded');
    }

    // if a category button is selected
    if ($(this).is(':checked') === true) {
        // loop through the words in consolidatedArray
        consolidatedArray.forEach(randomWord => {
            // and if those words' categories match the button's ID
            if (randomWord.category == $(this).attr('id')) {
                // push the words into customRoundArray 
                customRoundArray.push(randomWord);
            }
        });
    }

    // if a category button is deselected
    if ($(this).is(':checked') == false) {
        // loop backward through customRoundArray
        for (let x = customRoundArray.length - 1; x >= 0; --x) {
            // and if a word's category matches the deselected button's ID  
            if (customRoundArray[x].category == $(this).attr('id')) {
                // splice it, and push it into deselectedArray
                deselectedArray.push(customRoundArray.splice(x, 1));
            }
        }
    }
});

// confirm category selection 
$('.select-categories').on('click', function() {
    // if any category is selected
    if ($('input.category[type=checkbox]').is(':checked') === true && selectionConfirmed == false) {
        // update the selectionConfirmed boolean
        selectionConfirmed = true;

        // empty wordArray, so it can be filled with customRoundArray words when .select-categories is clicked
        wordArray.length = 0;
        
        // remove all but the first round in gameArray
        gameArray.splice(1);
       
        // call the following functions to remove the current flashcard, since it will still be visible on the screen
        gimmeWords();
        categoryColors();
        updateCountdown();
        revealCountdownText();
    } else if ($('input.category[type=checkbox]').is(':checked') === true && selectionConfirmed == true) {
        // wordArray isn't zeroed out, so the confirmed selections aren't removed

        gimmeWords();
        categoryColors();
        updateCountdown();
        revealCountdownText();
    }

    // push the customRoundArray words into wordArray
    wordArray.push.apply(wordArray, customRoundArray.splice(0));

    // populate and style the selected flashcards
    gimmeWords();
    categoryColors();
    updateCountdown();
    revealCountdownText();
    
    // and close the selection panel
    if ($('#categories-wrapper').css('display') == ('block')) {
        setTimeout(function removeHeaderShadow() {
            $('header').removeClass('header-shadow');
        }, 800);
    }
    $('#categories-wrapper').slideUp(800);
});

// add extra padding to offset the fixed header
function headerOffset() {
    let headerHeight = $('header').outerHeight(true);
    $('#categories-wrapper').css('padding-top', headerHeight);
    $('main').css('padding-top', headerHeight);
}
headerOffset();

// add "focus styles" to the container around the input and the button, when the input is clicked
$('#your-translation').on('focus', function() {
    $('#translation-container').css({
        'border': '1px solid rgb(97 183 223)',
        'boxShadow': '0 0 3px 1px rgb(97 183 223)',
        'outline': 'none'
    });

    // since mobile keyboards slide content up, this animation ensures the entire flashcard is visible when the #your-translation input is in focus
    if ($(window).width() < 415) {
        $('html, body').animate({
            scrollTop: $('#mobile-focus').offset().top
        }, 500);
    }
});

// remove the container's focus styles
$('#your-translation').on('focusout', function() {
    $('#translation-container').css({
        'border': 'none',
        'boxShadow': 'none',
        'outline': 'none'
    });
});

//---------------------------------------------------------------

$('.quiz-buttons').on('click', function() {
    if ($(this).html() === randomWord.german.split(' ')[0]) {
        moveWord();
        gimmeWords();
        categoryColors();
        chameleonColors();
        $('.quiz-buttons').removeClass('add-quiz-bzzt').removeClass('red-button');
    } else {
        $(this).addClass('add-quiz-bzzt').delay(500).queue(function(next) {
            $(this).addClass('red-button');
            next();
            buildMiniReview();
        });    
    }

    modalDisplay();
    updateCountdown();
    revealCountdownText();
    resetHint();
});

$('.quiz-buttons').on('touchstart', function() {
    $(this).css({'backgroundColor': 'rgb(255, 215, 0)', 'color': 'rgb(26, 18, 47)'});
});
$('.quiz-buttons').on('touchend', function() {
    $(this).css({'backgroundColor': 'rgb(41, 35, 70)', 'color': 'rgb(255, 215, 0)'});
});

//------------------------------------------------------------------

// slide the highlighters, to make them appear to draw
$('#highlighter-menu').on('mouseenter', function() {
    $('#highlighter-menu').animate({left: '5px'}, {queue: false, duration: 300});
});
$('#highlighter-menu').on('mouseleave', function() {
    $('#highlighter-menu').animate({left: 0}, {queue: false, duration: 500});
});

// open and close the highlighter hamburger menu
$('#hamburger').on('click', function(){
    $('#info-switch-container').css('display', 'none');
    $('nav').animate({right: 0}, 750);
});
$('#nav-x-bg').on('click', function(){
    setTimeout(function() {
        $('#info-switch-container').css('display', 'flex');
    }, 300);
    $('nav').animate({right: '100%'});
});
$(window).on('resize', function(){
    $('nav').removeAttr('style');
    $('#info-switch-container').css('display', 'flex');
});

// use #info-switch to reveal the info overlay
$('#info-switch').on('click', function() {
    if ($(this).is(':checked') === true) {
        closeCategories();
        $('header').css('z-index', '4');
        $('#onion-skin').css('display', 'block');
        // start the countdown in the mobile info modal
        let ci = 20;
        infoCountdown = setInterval(function() {
            $('#info-countdown').html(--ci);
            if (ci == 0) {
                clearInterval(infoCountdown);
            }
        }, 2000);
    } else if ($(this).is(':checked') === false) {
        $('#onion-skin').css('display', 'none');
        $('header').css('z-index', '7');
        // stop the countdown and reset starting position, if the user closes the info modal
        clearInterval(infoCountdown);
        $('#info-countdown').html('20');
    }
});

// toggle display of Mini Review info video
$('.review-preview-container').on('click', function() {
    $('.preview-box').toggle();
});