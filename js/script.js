import {underline, gameArray} from './german-deck.js';

let wordArray = gameArray[0];
let flash = 0;
let randomWord;
let solvedArray = [];
let miniReviewArray = [];
let endReviewArray = [];
let customRoundArray = [];
let deselectedArray = [];
let i;
let level = 1;
let infoCountdown;
let selectionConfirmed = false;

// merge all the rounds in gameArray
let consolidatedArray = [].concat.apply([], gameArray);

const chameleonColors = () => {
    // store the three versions of flash, the chameleon
    let chameleonArray = [
        // green flash
        'images/nav-images/flash-chameleon.svg',
        // orange flash 
        'images/nav-images/flash-german.png', 
        // white flash
        'images/nav-images/flash-american.png'
    ];

    // increase the index, each time the function is called
    flash += 1;

    // at the end of the array
    if (flash == chameleonArray.length) {
        // return to the beginning
        flash = 0;
    }

    // update the chameleon image in the header
    $('#chameleon').attr('src', chameleonArray[flash]);
};

// getRandom and gimmeWords work in conjunction to pick a random word from wordArray
function getRandom(object) {
    // assign a number to each object (in wordArray), by listing each object as a key
    let theKeys = Object.keys(object);

    // return a randomly selected number (i.e., object)
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
        // the result of getRandom(wordArray), a random "number" (object), creates a random wordArray index 
        randomWord = wordArray[getRandom(wordArray)];

        console.log(`WORD NUMBER: ${wordArray.length}`);
        console.log(`TRANSLATE: ${randomWord.german}`);

        // this populates the flashcard words, when the document loads
        $('#german-word').html(randomWord.german);
        $('#german-plural').html(randomWord.plural);
        
        // this populates the input placeholder
        $('#your-translation').attr('placeholder', `Translate ${randomWord.german}`);

        // this populates the hint message
        $('#hint-message').html(randomWord.hint);
    }

    // on the der, die, das quiz page
    if ($('body').hasClass('quiz-page')) {
        // split randomWord at the space, so the article is at index 0 and the noun is at index 1
        let nounSansArticle = randomWord.german.split(' ')[1];
    
        // display only the noun
        $('#german-word').html(nounSansArticle);
    }
};

gimmeWords();

// set flashcard bg color, plural-zone display, category, and icon
function colorDisplayCategoryIcon(hex, visibility, group, symbol) {
    $('#german-box').css('backgroundColor', hex);
    $('#plural-zone').css('display', visibility);
    $('#insert-category').html(group);
    $('#card-icon').attr('src', symbol);
};

const categoryColors = () => {
    // update each flashcard's color and icon, based on the current word's category
    switch (randomWord.category) {
        case 'adjectives':
            colorDisplayCategoryIcon('#9c538d', 'none', 'Adjectives', 'images/category-icons/category-icons-adjectives.svg');
            break;
        case 'animals':
            colorDisplayCategoryIcon('#a08181', 'block', 'Animals', 'images/category-icons/category-icons-animals.svg');
            break;
        case 'arts':
            colorDisplayCategoryIcon('#4682b4', 'block', 'Arts', 'images/category-icons/category-icons-arts.svg');
            break;
        case 'body':
            $('#german-box').css('backgroundColor', '#f56a37');
            $('#plural-zone').css('display', 'block');
            $('#insert-category').html('Body');
            $('#card-icon').attr('src', 'images/category-icons/category-icons-body.svg');
            break;
        case 'calendar':
            $('#german-box').css('backgroundColor', '#cd5c5c');
            $('#plural-zone').css('display', 'block');
            $('#insert-category').html('Calendar');
            $('#card-icon').attr('src', 'images/category-icons/category-icons-calendar.svg');
            break;
        case 'catastrophe':
            $('#german-box').css('backgroundColor', '#759475');
            $('#plural-zone').css('display', 'block');
            $('#insert-category').html('Catastrophe');
            $('#card-icon').attr('src', 'images/category-icons/category-icons-catastrophe.svg');
            break;
        case 'clothes':
            $('#german-box').css('backgroundColor', '#0994bd');
            $('#plural-zone').css('display', 'block');
            $('#insert-category').html('Clothes');
            $('#card-icon').attr('src', 'images/category-icons/category-icons-clothes.svg');
            break;
        case 'food':
            $('#german-box').css('backgroundColor', '#f44336');
            $('#plural-zone').css('display', 'block');
            $('#insert-category').html('Food');
            $('#card-icon').attr('src', 'images/category-icons/category-icon-food.svg');
            break;
        case 'home':
            $('#german-box').css('backgroundColor', '#772e53');
            $('#plural-zone').css('display', 'block');
            $('#insert-category').html('Home');
            $('#card-icon').attr('src', 'images/category-icons/category-icons-home.svg');
            break;
        case 'nature':
            $('#german-box').css('backgroundColor', '#2e8b57');
            $('#plural-zone').css('display', 'block');
            $('#insert-category').html('Nature');
            $('#card-icon').attr('src', 'images/category-icons/category-icons-nature.svg');
            break;
        case 'numbers':
            $('#german-box').css('backgroundColor', '#6b6a9e');
            $('#plural-zone').css('display', 'none');
            $('#insert-category').html('Numbers');
            $('#card-icon').attr('src', 'images/category-icons/category-icons-numbers.svg');
            break;
        case 'people':
            $('#german-box').css('backgroundColor', '#008b8b');
            $('#plural-zone').css('display', 'block');
            $('#insert-category').html('People');
            $('#card-icon').attr('src', 'images/category-icons/category-icons-people.svg');
            break;
        case 'phrases':
            $('#german-box').css('backgroundColor', '#ce3c5e');
            $('#plural-zone').css('display', 'none');
            $('#insert-category').html('Phrases');
            $('#card-icon').attr('src', 'images/category-icons/category-icons-phrases.svg');
            break;
        case 'tech':
            $('#german-box').css('backgroundColor', '#607d8b');
            $('#plural-zone').css('display', 'block');
            $('#insert-category').html('Tech');
            $('#card-icon').attr('src', 'images/category-icons/category-icons-technology.svg');
            break;
        case 'travel':
            $('#german-box').css('backgroundColor', '#5e93f3');
            $('#plural-zone').css('display', 'block');
            $('#insert-category').html('Travel');
            $('#card-icon').attr('src', 'images/category-icons/category-icons-travel.svg');
            break;
    }
};

categoryColors();

function updateCountdown() {
    // if there's only one word in wordArray
    if (wordArray.length == 1) {
        // 'word' should be singular in the countdown text 
        $('#update-remaining').html('word remaining');
    } else if (wordArray.length >= 2 || wordArray.length == 0) {
        // otherwise, use the plural: 'words'
        $('#update-remaining').html('words remaining');
    }

    // display the correct number of words in the round
    $('#countdown').html(wordArray.length);
};

updateCountdown();

function revealCountdownText() {
    // when the user mouses over the countdown number
    $('#countdown').mouseenter(function() {
        // reveal the hidden countdown message
        $('#countdown-container p').animate({'opacity': '1'}, 2000);
    });

    // when the user's mouse leaves the countdown number
    $('#countdown').mouseleave(function() {
        // make the countdown message fade away
        $('#countdown-container p').animate({'opacity': '0'}, 2000);
    });
};

revealCountdownText();

function moveWord() {
    // get the index of the current random word
    i = wordArray.indexOf(randomWord);
    
    // move the word (at that index position in wordArray) from wordArray to solvedArray
    solvedArray.push(wordArray.splice(wordArray.indexOf(wordArray[i]), 1)[0]);
};

function updateLevel() {
    // every time the level box is closed
    if ($('#level-box').css('display') === 'none') {
        // increase level by 1
        level += 1;
        
        // update the level number in the purple circle
        $('#level').html(level);
    }
};
 
function buildMiniReview() {
    // add randomWord to miniReviewArray (each time the hint bulb and answer key icons are clicked)
    miniReviewArray.push(randomWord);

    // scan for, and remove, duplicate words
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
    // if endReviewArray is empty
    if ($('#modal-body').css('display') === 'block' && endReviewArray.length == 0) {
        // hide the mini-review button
        $('#mini-review-container').css('display', 'none');
    } else if ($('#modal-body').css('display') === 'block' && endReviewArray.length >= 1) {
        // ensure that the final round is included in the end review
        endReviewArray.push.apply(endReviewArray, miniReviewArray.splice(0));

        // hide the mini-review button
        $('#mini-review-container').css('display', 'none');

        // reveal the final-review button, when the array has content
        $('#end-review-container').css('display', 'block');
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
        $('#modal-image').css({'backgroundImage': 'url("images/level-images/review-fireworks.png")', 'filter': 'saturate(1.5)'});
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
    if ($('#label-switch').attr('src') == 'images/help-icons/three-bent-labels-outline.svg') {
        $('#label-switch').attr('src', 'images/help-icons/three-bent-labels.svg')
    } else {
        $('#label-switch').attr('src', 'images/help-icons/three-bent-labels-outline.svg');
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
        let downArrows = $('<img class="down-arrows" src="images/arrows/review-arrows.svg" />');
        let reviewAnswers = $('<p class="review-answers"></p>');

        // insert each review word into its own paragraph element
        $(reviewWords).text(element.german);

        // if the review word's translation is a string
        if (typeof element.translation === 'string') {
            // insert it into its own paragraph element
            $(reviewAnswers).text(element.translation);
        } else {
            // if the translation is an array, choose the first option
            $(reviewAnswers).text(element.translation[0]);
        }

        // add the review words, arrows, and translations to the review
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
        let finalDownArrows = $('<img class="down-arrows" src="images/arrows/review-arrows.svg" />');
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

// the modal-popup continue button progresses users to the next level
$('#continue').on('click', function() {
    // move the current mini-review words into endReviewArray
    endReviewArray.push.apply(endReviewArray, miniReviewArray.splice(0));
    
    // clear the current mini-review words from the review box 
    $('#review-box').text('');

    // hide the review area until the user reopens it
    $('#modal-review').css('display', 'none');

    // close the level box
    $('#level-box').css('display', 'none');

    for (let nextArr = 1; nextArr < 2; nextArr++) {
        // if there is more than one round in gameArray
        if (gameArray.length > 1) {
            // send a copy of the round at index 1 to wordArray
            wordArray.push.apply(wordArray, gameArray[nextArr]);
            
            // excise the index 1 round, so the remaining rounds move forward
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

    // make an exception on the quiz page
    if ($('body').hasClass('quiz-page')) {
        // to filter out any words without articles
        consolidatedArray = consolidatedArray.filter(item => 
            (item.category !== 'numbers') && 
            (item.category !== 'phrases') &&
            (item.category !== 'adjectives') &&
            (item.subcategory !== 'quiz exempt')
        );
    }
    
    // display the lightning round flashcard total
    $('#lightning-total').html(consolidatedArray.length);

    // display the total number of flashcard words 
    $('#total-words').html(consolidatedArray.length);

    // on narrow devices
    if ($('nav').css('right') == '0px' && $(window).width() < 616) {
        // close the mobile nav, to reveal the categories
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
    // if the categories panel is being closed
    if ($('#categories-wrapper').css('display') == ('block')) {
        // remove the shadow under the header
        setTimeout(function removeHeaderShadow() {
            $('header').removeClass('header-shadow');
        }, 800);
    }

    // slide the categories panel up, to close it
    $('#categories-wrapper').slideUp(800);
};

// the mobile x reduces the num of clicks to close the categories panel
$('#categories-x-bg').on('click', function() {
    closeCategories();

    // reveal the info switch, which gets hidden when the categories panel is open
    $('#info-switch-container').css('display', 'flex');
});

$('.lightning-round').on('click', function() {
    checkForArticles();

    // create the lightningRound array
    let lightningRound = [];
    
    // for each round in gameArray
    gameArray.forEach(round => {
        // take the current wordArray words
        if (round === wordArray) {
            // and combine them with solvedArray, so nothing gets missed
            solvedArray.push.apply(solvedArray, wordArray.splice(0));
        } else {
            // add the remaining rounds to lightningRound
            lightningRound.push.apply(lightningRound, round);
        }
    });

    // reassign wordArray, so it combines solvedArray and lightningRound
    wordArray = lightningRound.concat(solvedArray);
    
    // remove all gameArray rounds after wordArray
    gameArray.splice(1);

    gimmeWords();
    categoryColors();
    updateCountdown();
    revealCountdownText();
    modalDisplay();
    closeCategories();    
});

$('.hidden-checkbox').on('click keydown', function() {
    // if a category button is selected
    if ($(this).is(':checked') === true) {
        // loop through the words in consolidatedArray
        consolidatedArray.forEach(randomWord => {
            // and if those words' categories match the button's ID
            if (randomWord.category == $(this).attr('id')) {
                // push the words into customRoundArray 
                customRoundArray.push(randomWord);

                // display the customized round flashcard total
                $('#customized-total').html(customRoundArray.length);
            }
        });
    }

    // if a category button is deselected BEFORE .select-categories is clicked
    if ($(this).is(':checked') == false) {
        // loop backward through customRoundArray
        for (let x = customRoundArray.length - 1; x >= 0; --x) {
            // and if a word's category matches the deselected button's ID  
            if (customRoundArray[x].category == $(this).attr('id')) {
                // splice it, and push it into deselectedArray
                deselectedArray.push(customRoundArray.splice(x, 1));

                // display the customized round flashcard total
                $('#customized-total').html(customRoundArray.length);
            }
        }
    }

    // if a category button is deselected AFTER .select-categories is clicked
    if ($(this).is(':checked') == false && selectionConfirmed == true) {
        // loop backward through wordArray
        for (let xx = wordArray.length - 1; xx >= 0; xx--) {
            // and if a word's category matches the deselected button's ID 
            if (wordArray[xx].category == $(this).attr('id')) {
                // splice it, and push it into deselectedArray
                deselectedArray.push(wordArray.splice(xx, 1));

                // display the customized round flashcard total
                $('#customized-total').html(wordArray.length);
            }
        }
    }
});

// confirm category selection 
$('.select-categories').on('click', function() {
    // if any category is selected
    if ($('.hidden-checkbox').is(':checked') === true && selectionConfirmed == false) {
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
    } else if ($('.hidden-checkbox').is(':checked') === true && selectionConfirmed == true) {
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