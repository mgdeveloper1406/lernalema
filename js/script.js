let randomWord;
let wordArray;
let holderArray;
let i;
let level = 1;
let round2;

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
//         german: 'die Person',
//         plural: 'die Menschen',
//         translation: 'person',
//         category: 'people',
//     },
//     {
//         german: 'die Frau',
//         plural: 'die Frauen',
//         translation: 'woman',
//         category: 'people',
//     },
//     {
//         german: 'der Mann',
//         plural: 'die Männer',
//         translation: 'man',
//         category: 'people',
//     },
//     {
//         german: 'das Mädchen',
//         plural: 'die Mädchen',
//         translation: 'girl',
//         category: 'people'
//     },
//     {
//         german: 'der Junge',
//         plural: 'die Jungen',
//         translation: 'boy',
//         category: 'people'
//     },
//     {
//         german: 'die Tochter',
//         plural: 'die Töchter',
//         translation: 'daughter',
//         category: 'people',
//     },
//     {
//         german: 'der Sohn',
//         plural: 'die Söhne',
//         translation: 'son',
//         category: 'people',
//     },
//     {
//         german: 'die Mutter',
//         plural: 'die Mütter',
//         translation: 'mother',
//         category: 'people',
//     },
//     {
//         german: 'der Vater',
//         plural: 'die Väter',
//         translation: 'father',
//         category: 'people',
//     },
//     {
//         german: 'der Apfel',
//         plural: 'die Äpfel',
//         translation: 'apple',
//         category: 'food'
//     },
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
//         german: 'das Brot',
//         plural: 'die Brote',
//         translation: 'bread',
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
//         german: 'der Kaffee',
//         plural: 'die Kaffees',
//         translation: 'coffee',
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
//         german: 'der Käse',
//         plural: 'die Käse',
//         translation: 'cheese',
//         category: 'food'
//     },
//     {
//         german: 'der Tee',
//         plural: 'die Tees',
//         translation: 'tea',
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
//         german: 'die Ente',
//         plural: 'die Enten',
//         translation: 'duck',
//         category: 'animals'
//     },
//     {
//         german: 'der Fisch',
//         plural: 'die Fische',
//         translation: 'fish',
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
//         german: 'der Hund',
//         plural: 'die Hunde',
//         translation: 'dog',
//         category: 'animals'
//     },
//     {
//         german: 'der Käfer',
//         plural: 'die Käfer',
//         translation: 'beetle',
//         category: 'animals'
//     },
//     {
//         german: 'die Katze',
//         plural: 'die Katzen',
//         translation: 'cat',
//         category: 'animals'
//     },
//     {
//         german: 'die Kuh',
//         plural: 'due Kühe',
//         translation: 'cow',
//         category: 'animals'
//     },
//     {
//         german: 'die Maus',
//         plural: 'die Mäuse',
//         translation: 'mouse',
//         category: 'animals'
//     },
//     {
//         german: 'das Pferd',
//         plural: 'die Pferde',
//         translation: 'horse',
//         category: 'animals'
//     },
//     {
//         german: 'die Schildkröte',
//         plural: 'die Schildkröten',
//         translation: 'turtle',
//         category: 'animals'
//     },
//     {
//         german: 'das Schwein',
//         plural: 'die Schweine',
//         translation: 'pig',
//         category: 'animals'
//     },
//     {
//         german: 'die Spinne',
//         plural: 'die Spinnen',
//         translation: 'spider',
//         category: 'animals'
//     },
//     {
//         german: 'der Vogel',
//         plural: 'die Vögel',
//         translation: 'bird',
//         category: 'animals'
//     },
//     {
//         german: 'der Waschbär',
//         plural: 'die Waschbären',
//         translation: 'raccoon',
//         category: 'animals'
//     },
//     {
//         german: 'der Baum',
//         plural: 'die Bäume',
//         translation: 'tree',
//         category: 'nature'
//     },
//     {
//         german: 'der Berg',
//         plural: 'die Berge',
//         translation: 'mountain',
//         category: 'nature'
//     },
//     {
//         german: 'das Blatt',
//         plural: 'die Blätter',
//         translation: 'leaf',
//         category: 'nature'
//     },
//     {
//         german: 'die Blume',
//         plural: 'die Blumen',
//         translation: 'flower',
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
//         german: 'der Himmel',
//         plural: 'die Himmel',
//         translation: 'sky',
//         category: 'nature'
//     },
//     {
//         german: 'der Hügel',
//         plural: 'die Hügel',
//         translation: 'hill',
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
//         german: 'der Mond',
//         plural: 'die Monde',
//         translation: 'moon',
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
//         german: 'die Sonne',
//         plural: 'die Sonnen',
//         translation: 'sun',
//         category: 'nature'
//     },
//     {
//         german: 'der Stein',
//         plural: 'die Steine',
//         translation: 'rock',
//         category: 'nature'
//     },
//     {
//         german: 'der Stern',
//         plural: 'die Sterne',
//         translation: 'star',
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
//     {
//         german: 'die Wolke',
//         plural: 'die Wolken',
//         translation: 'cloud',
//         category: 'nature'
//     },
//     {
//         german: 'Auf Wiedersehen!',
//         translation: 'goodbye',
//         category: 'phrases'
//     },
//     {
//         german: 'Bis bald!',
//         translation: 'see you soon',
//         category: 'phrases'
//     },
//     {
//         german: 'Bis später!',
//         translation: 'see you later',
//         category: 'phrases'
//     },
//     {
//         german: 'Bitte!',
//         translation: 'please',
//         category: 'phrases'
//     },
//     {
//         german: 'Danke!',
//         translation: ['thank you', 'thanks'],
//         category: 'phrases'
//     },
//     {
//         german: 'Entschuldigung!',
//         translation: ['sorry', 'pardon'],
//         category: 'phrases'
//     },
//     {
//         german: 'Guten Abend!',
//         translation: 'good evening',
//         category: 'phrases'
//     },
//     {
//         german: 'Guten Morgen!',
//         translation: 'good morning',
//         category: 'phrases'
//     },
//     {
//         german: 'Gute Nacht!',
//         translation: 'good night',
//         category: 'phrases'
//     },
//     {
//         german: 'Guten Tag!',
//         translation: ['good day', 'good afternoon'],
//         category: 'phrases'
//     },
//     {
//         german: 'Hallo!',
//         translation: 'hello',
//         category: 'phrases'
//     },
//     {
//         german: 'Ja!',
//         translation: ['yes', 'yeah'],
//         category: 'phrases'
//     },
//     {
//         german: 'Nein!',
//         translation: 'no',
//         category: 'phrases'
//     }
// ];

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
    }
];

holderArray = [];

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
    }
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
        $('input').attr('placeholder', `Translate ${randomWord.german}`);

        // this populates the hint message
        $('#hint-message').html(randomWord.hint);
    }
};

gimmeWords();

// this changes the flashcards' colors, based on the given word's category
const categoryColors = () => {
    if (randomWord.category === 'people') {
        $('#german-box').css('backgroundColor', '#008b8b');
        $('#german-word, #german-plural').css('color', '#f0f8ff');
        $('#line').css('backgroundColor', '#ffd700');
        $('#plural-zone').css('display', 'block');
        $('.curly-braces').css('color', '#ffd700');
    } else if (randomWord.category === 'food') {
        $('#german-box').css('backgroundColor', '#f44336');
        $('#german-word, #german-plural').css('color', '#f0f8ff');
        $('#line').css('backgroundColor', '#ffd700');
        $('#plural-zone').css('display', 'block');
        $('.curly-braces').css('color', '#ffd700');
    } else if (randomWord.category === 'home') {
        $('#german-box').css('backgroundColor', '#5c2842');
        $('#german-word, #german-plural').css('color', '#ffd700');
        $('#line').css('backgroundColor', '#f0f8ff');
        $('#plural-zone').css('display', 'block');
        $('.curly-braces').css('color', '#f0f8ff');
    } else if (randomWord.category === 'animals') {
        $('#german-box').css('backgroundColor', '#0994bd');
        $('#german-word, #german-plural').css('color', '#ffffff');
        $('#line').css('backgroundColor', '#ffd700');
        $('#plural-zone').css('display', 'block');
        $('.curly-braces').css('color', '#ffd700');
    } else if (randomWord.category === 'nature') {
        $('#german-box').css('backgroundColor', '#2e8b57');
        $('#german-word, #german-plural').css('color', '#ffffff');
        $('#line').css('backgroundColor', '#ffd700');
        $('#plural-zone').css('display', 'block');
        $('.curly-braces').css('color', '#ffd700');
    } else if (randomWord.category === 'phrases') {
        $('#german-box').css('backgroundColor', '#ce3c5e');
        $('#german-word').css('color', '#ffffff');
        $('#plural-zone').css('display', 'none');
        $('#line').css('backgroundColor', '#ffd700');
    } 
};

categoryColors();

// get the index of the current random word, splice it from the array, and then push it to the end of the array (so it can be popped out)
function moveWord() {
    i = wordArray.indexOf(randomWord);
    // wordArray.pop(wordArray.push(wordArray.splice(wordArray.indexOf(wordArray[i]), 1)[0]));
    holderArray.push(wordArray.splice(wordArray.indexOf(wordArray[i]), 1)[0]);
};

// update the modal-box level by one 
function updateLevel() {
    level += 1;
    $('#level').html(level);
}

// check that the user's input matches the translation given in the word array. if so, clear the input field and display the next flashcard. else, the console logs the input and the answer, and the input field flashes red while the input value fades. 
function checkAnswer() {
    // convert the user's input to lowercase, to match the answer in the array
    $('#your-translation').val (function() {
        return this.value.toLowerCase();
    });

    let answer = $('#your-translation').val();
    if ((answer === randomWord.translation) || (answer === `the ${randomWord.translation}`) || (answer === `${randomWord.translation}!`) || (answer === randomWord.translation[0]) || (answer === randomWord.translation[1]) || (answer === `${randomWord.translation[0]}!`) || (answer === `${randomWord.translation[1]}!`)) { 
        // reset the input field
        $('#your-translation').val('');
        
        // move the current word to the end of the array
        moveWord();
        
        // pop (i.e., remove) the last word in the array
        // wordArray.pop();
        
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
    if (wordArray.length <= 0) {
        updateLevel();
        $('.modal').css('display', 'block');
    } 

    chameleonColors();

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

// the hint will slide out sideways and bounce back a bit
$('#hint-bulb').on('click', function() {
    $('#hint-message').animate({'right': '145px'}, 600, function() {
        $('#hint-message').animate({'right': '130px'}, 300);
    });
});

// set the correct translation in the input field, when the answer key is clicked
$('#answer-key').on('click', function() { 
    $('input').val(randomWord.translation).addClass('add-sparkle');
    setTimeout(function endSparkle() {
        $('input').removeClass('add-sparkle');
    }, 2000);
});

$('#continue').on('click', function() {
    $('.modal').css('display', 'none');
    wordArray.push.apply(wordArray, round2);
    gimmeWords();
    categoryColors();
    console.info(wordArray);
});