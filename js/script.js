// On document ready, a random German word (and its plural form) will load in the German box. The German box color will correspond to the word's category.
$(document).ready(function() {
    function getRandom(object) {
        let theKeys = Object.keys(object);
        return theKeys[Math.floor(Math.random() * theKeys.length)];
    }

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
    
    let randomWord = wordArray[getRandom(wordArray)];
    console.log(randomWord.german);
    $('#german-word').html(randomWord.german);
    $('#german-plural').html(randomWord.plural);

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
        } else {

        }
    };
    categoryColors();
}); 
