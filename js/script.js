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
let wordArray = [
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
    }
];

// this picks a random word from the word array
function getRandom(object) {
    let theKeys = Object.keys(object);
    return theKeys[Math.floor(Math.random() * theKeys.length)];
}

let randomWord = wordArray[getRandom(wordArray)];
console.log(randomWord.german);

// this populates the flashcard words, when the document loads
$('#german-word').html(randomWord.german);
$('#german-plural').html(randomWord.plural);

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
    } 
};

categoryColors();

// on clicking the submit button, the code below should check that the user's input matches the correct translation given in the word array. if so, the input field should clear, and the flashcard should progress on to the next random word. else, the console logs the input and the answer, to help move the user on, if needed. (NOTE: I also want to add a skip button.)
$('#submit').on('click', function() {
    let answer = $('#your-translation').val();
    if (answer === randomWord.translation) { 
        $('#your-translation').val('');
        // randomWord = wordArray.splice(0, 1)[getRandom(wordArray)];
        $('#german-word').html(randomWord.german);
        $('#german-plural').html(randomWord.plural);
    } else {
        console.log(`Your answer was "${answer}"`);
        console.log(`The correct translation is "${randomWord.translation}"`);
    }
});

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