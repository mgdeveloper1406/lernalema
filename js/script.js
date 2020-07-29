// On document ready, a random German word (and its plural form) will load in the German box. The German box color will correspond to the word's category.

$(document).ready(function() {
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
    ];
    
    let randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
    $('german-word').html(randomWord.german);
    $('german-plural').html(this.randomWord.plural);
}); 





// const source = document.getElementById('flashcards').innerHTML;

// const template = Handlebars.compile(source);

// const context = {
//     wordArray: [
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
//     ]
// };

// const compiledHtml = template(context);

// const flashcardText = document.getElementById('');
// flashcardText.innerHTML = compiledHtml;