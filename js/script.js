// change the chameleon's color every time submit is clicked
const chameleonColors = () => {
    $('#chameleon').attr('src', 'images/german-flash-03.svg');
};

// this picks a random word from the word array
function getRandom(object) {
    let theKeys = Object.keys(object);
    return theKeys[Math.floor(Math.random() * theKeys.length)];
}

// let randomWord = wordArray[getRandom(wordArray)];
let randomWord;
let wordArray;
let i;
// let chameleonArray;
// let flashIndex;
// let usedWords = [];
// let usedWords;

function gimmeWords() {
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
        },
        // {}
    ];

    randomWord = wordArray[getRandom(wordArray)];
    console.log(randomWord.german);

    // console.log(wordArray.indexOf(randomWord));

    // this populates the flashcard words, when the document loads
    $('#german-word').html(randomWord.german);
    $('#german-plural').html(randomWord.plural);

    // wordArray = wordArray.length - 1;

    // console.log(i);
    // wordArray.splice(i);
    // console.log(wordArray);
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

// function removeWord() {
//     const i = wordArray.indexOf(randomWord);
//     wordArray.splice(i, 1);
//     wordArray.push(wordArray[i]);
//     wordArray.pop();
//     console.log(wordArray); 
// };

function moveWord() {
    i = wordArray.indexOf(randomWord);
    wordArray.push(wordArray.splice(wordArray.indexOf(wordArray[i]), 1)[0]);
    // wordArray.pop(wordArray.push(wordArray.splice(wordArray.indexOf(wordArray[i]), 1)[0]));
    // console.log(wordArray); 
};

// on clicking the submit button, the code below should check that the user's input matches the correct translation given in the word array. if so, the input field should clear, and the flashcard should progress on to the next random word. else, the console logs the input and the answer, to help move the user on, if needed. (NOTE: I also want to add a skip button.)
$('#submit').on('click', function() {
    let answer = $('#your-translation').val();
    if (answer === randomWord.translation) { 
        $('#your-translation').val('');
        // usedWords.push(randomWord);
        // console.log(usedWords);
       
        // wordArray.push(randomWord);
        // wordArray.pop();

        moveWord();
        console.log(wordArray);

        gimmeWords();
        categoryColors();

        // let usedIndex = wordArray.indexOf(this.randomWord);

        // usedWords = wordArray.splice(usedIndex, 1);
        // randomWord = wordArray.splice(0, 1)[getRandom(wordArray)];
        // usedWords = wordArray.splice(0, 1);
        // $('#german-word').html(randomWord.german);
        // $('#german-plural').html(randomWord.plural);
    } else {
        console.log(`Your answer was "${answer}"`);
        console.log(`The correct translation is "${randomWord.translation}"`);
    }
    
    if (wordArray.length <= 0) {
        alert(`You're done!`);
    } 

    chameleonColors();
});

//--------------------------------------------------------------------

// On document ready, a random German word (and its plural form) will load in the German box. The German box color will correspond to the word's category.
// $(document).ready(function() {
//     function getRandom(object) {
//         let theKeys = Object.keys(object);
//         return theKeys[Math.floor(Math.random() * theKeys.length)];
//     }




//     let wordArray = [
//         {
//             german: 'die Kartoffel',
//             plural: 'die Kartoffeln',
//             translation: 'potato',
//             category: 'food'
//         },
//         {
//             german: 'das Mädchen',
//             plural: 'die Mädchen',
//             translation: 'girl',
//             category: 'people'
//         },
//         {
//             german: 'der Junge',
//             plural: 'die Jungen',
//             translation: 'boy',
//             category: 'people'
//         },
//         {
//             german: 'der Apfel',
//             plural: 'die Äpfel',
//             translation: 'apple',
//             category: 'food'
//         },
//         {
//             german: 'das Haus',
//             plural: 'die Häuser',
//             translation: 'house',
//             category: 'home'
//         }
//     ];
    
//     let randomWord = wordArray[getRandom(wordArray)];
//     console.log(randomWord.german);
//     $('#german-word').html(randomWord.german);
//     $('#german-plural').html(randomWord.plural);

//     const categoryColors = () => {
//         if (randomWord.category === 'people') {
//             $('#german-box').css('backgroundColor', '#008b8b');
//             $('#german-word, #german-plural').css('color', '#f0f8ff');
//             $('#line').css('backgroundColor', '#ffd700');
//             $('.curly-braces').css('color', '#ffd700');
//         } else if (randomWord.category === 'food') {
//             $('#german-box').css('backgroundColor', '#f44336');
//             $('#german-word, #german-plural').css('color', '#f0f8ff');
//             $('#line').css('backgroundColor', '#ffd700');
//             $('.curly-braces').css('color', '#ffd700');
//         } else {

//         }
//     };
//     categoryColors();

//     // $('#your-translation').change(function() {
//     //     if ($('#your-translation').val() = this.randomWord.translation) {
//     //         $('#german-word').html(randomWord.german);
//     //         $('#german-plural').html(randomWord.plural);
//     //     } 
//     // });
// }); 

// the array of words
// let wordArray = [
//     {
//         german: 'die Kartoffel',
//         plural: 'die Kartoffeln',
//         translation: 'potato',
//         category: 'food'
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
//         german: 'der Apfel',
//         plural: 'die Äpfel',
//         translation: 'apple',
//         category: 'food'
//     },
//     {
//         german: 'das Haus',
//         plural: 'die Häuser',
//         translation: 'house',
//         category: 'home'
//     }
// ];



// $(document).keypress(function(event) {
//     if (event.key === 'Enter') {
//         let answer = $('#your-translation').val();
//         let prompt = $('#german-word').val();
//         console.log(prompt.translation);
//         if (answer === prompt.translation) {
//             $('#german-word').html(randomWord.german);
//             $('#german-plural').html(randomWord.plural);
//         } 
//     }
// });


// let answer = $('#your-translation').val();
// console.log(randomWord.translation);
// console.log(answer);
// if (answer === randomWord.translation) {
//     $('#german-word').html(randomWord.german);
//     $('#german-plural').html(randomWord.plural);
// } 