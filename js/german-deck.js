let underline = `<span class="underline">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>`;

let gameArray = [
    // level 1: wordArray
    [
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
    
    // level 2
    [
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
    
    // level 3
    [
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

    // level 4
    [
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

    // level 5
    [
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

    // level 6
    [
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

    // level 7
    [
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

    // level 8
    [
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

    // level 9
    [
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

    // level 10
    [
        {
            german: 'sechsundvierzig',
            translation: ['forty-six', 'forty six'],
            category: 'numbers',
            hint: 'The number of human chromosomes.'
        },
        {
            german: 'siebenundvierzig',
            translation: ['forty-seven', 'forty seven'],
            category: 'numbers',
            hint: 'The number of prefectures in Japan.'
        },
        {
            german: 'achtundvierzig',
            translation: ['forty-eight', 'forty eight'],
            category: 'numbers',
            hint: 'The number of contiguous states in the US.'
        },
        {
            german: 'neunundvierzig',
            translation: ['forty-nine', 'forty nine'],
            category: 'numbers',
            hint: 'Often associated with the California Gold Rush.'
        },
        {
            german: 'fünfzig',
            translation: 'fifty',
            category: 'numbers',
            hint: 'Half of one hundred.'
        },
        {
            german: 'das Auge',
            plural: 'die Augen',
            translation: 'eye',
            category: 'body',
            hint: 'A cyclops has only one.'
        },
        {
            german: 'das Kinn',
            plural: 'die Kinns',
            translation: 'chin',
            category: 'body',
            hint: 'Rhymes with shin.'
        },
        {
            german: 'der Mund',
            plural: 'die Münder',
            translation: 'mouth',
            category: 'body',
            hint: 'Where your tongue lives.'
        },
        {
            german: 'die Nase',
            plural: 'die Nasen',
            translation: 'nose',
            category: 'body',
            hint: `<span class="ital">Sniff, sniff.</span>`
        },
        {
            german: 'das Ohr',
            plural: 'die Ohren',
            translation: 'ear',
            category: 'body',
            hint: 'This has a lobe and a canal.'
        }
    ]
];

export {underline, gameArray};