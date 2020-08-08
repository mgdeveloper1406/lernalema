let randomWord;
let wordArray;
let i;

// change the chameleon's color every time submit is clicked
const chameleonColors = () => {
    $('#chameleon').attr('src', 'images/german-flash-03.svg');
};

wordArray = [
    {
        german: 'die Kartoffel',
        plural: 'die Kartoffeln',
        translation: 'potato',
        category: 'food'
    },
    {
        german: 'das Mädchen',
        plural: 'die Mädchen',
        translation: 'girl',
        category: 'people'
    },
    {
        german: 'der Junge',
        plural: 'die Jungen',
        translation: 'boy',
        category: 'people'
    },
    {
        german: 'der Apfel',
        plural: 'die Äpfel',
        translation: 'apple',
        category: 'food'
    },
    {
        german: 'das Haus',
        plural: 'die Häuser',
        translation: 'house',
        category: 'home'
    },
    {
        german: 'der Schuh',
        plural: 'die Schuhe',
        translation: 'shoe',
        category: 'home'
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

        // this populates the flashcard words, when the document loads
        $('#german-word').html(randomWord.german);
        $('#german-plural').html(randomWord.plural);
    }
};

gimmeWords();

// this changes the flashcards' colors, based on the given word's category
const categoryColors = () => {
    if (randomWord.category === 'people') {
        $('#german-box').css('backgroundColor', '#008b8b');
        $('#german-word, #german-plural').css('color', '#f0f8ff');
        $('#line').css('backgroundColor', '#ffd700');
        $('.curly-braces').css('color', '#ffd700');
    } else if (randomWord.category === 'food') {
        $('#german-box').css('backgroundColor', '#f44336');
        $('#german-word, #german-plural').css('color', '#f0f8ff');
        $('#line').css('backgroundColor', '#ffd700');
        $('.curly-braces').css('color', '#ffd700');
    } else if (randomWord.category === 'home') {
        $('#german-box').css('backgroundColor', '#5c2842');
        $('#german-word, #german-plural').css('color', '#ffd700');
        $('#line').css('backgroundColor', '#f0f8ff');
        $('.curly-braces').css('color', '#f0f8ff');
    } 
};

categoryColors();

// get the index of the current random word, splice it from the array, and then push it to the end of the array (so it can be popped out)
function moveWord() {
    i = wordArray.indexOf(randomWord);
    wordArray.push(wordArray.splice(wordArray.indexOf(wordArray[i]), 1)[0]);
};

// on submission, check that the user's input matches the correct translation given in the word array. if so, clear the input field and display the next flashcard. else, the console logs the input and the answer, to help move the user on, if needed. 
$('#submit').on('click', function() {
    // convert the user's input to lowercase, to match the answer in the array
    $('#your-translation').val (function() {
        return this.value.toLowerCase();
    });

    let answer = $('#your-translation').val();
    if ((answer === randomWord.translation) || (answer === `the ${randomWord.translation}`)) { 
        // reset the input field
        $('#your-translation').val('');
        
        // move the current word to the end of the array
        moveWord();
        
        // pop (i.e., remove) the last word in the array
        wordArray.pop();
        
        // randomize wordArray and populate the flashcards 
        gimmeWords();
        
        // assign the flashcards' colors
        categoryColors();
    } else {
        console.log(`Your answer was "${answer}"`);
        console.log(`The correct translation is "${randomWord.translation}"`);
    }
    
    if (wordArray.length <= 0) {
        alert(`You're done!`);
    } 

    chameleonColors();
});
