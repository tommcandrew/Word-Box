# Word Box
A vocabulary builder, to help learn a new language.
The app will maintain a list of words known to the user and, when a new piece of text is pasted in, the app will highlight known words in green and new words in red. You can save these texts (currently in local storage). 

There is also a tab where you can look through the known words and click them to see a translation. And finally: there is a test page where the computer will generate random sentences from the words it knows and ask you for the translation.

Please note: while there is no wish to recreate [Monty's Hungarian phrase book](http://www.montypython.net/scripts/phrasebk.php), I don't speak Czech that well. I have been as accurate as I can. The grammar may come up wrong, especially as we aim for harder sentences.

## Made by 
geckos-team-09, on Chingu's voyage 9

Team members: [TomMac](https://github.com/tommcandrew) and [Samir70](https://github.com/Samir70)

## Technology
HTML, CSS, React (via [Create React App](https://github.com/facebook/create-react-app)), React Bootstrap and JavaScript

(eventually) we will need some way to save data someplace other than local storage.There is no database or backend, though we plan to look at this in the future.

## Deploying your own Word Box
[This version](https://chingu-voyages.github.io/v9-geckos-team-09/) is currently hosted on github, via gh-pages.
If you want to deploy one of your own, you can:
- fork this repo
- open a command line and change to a directory with the repo name
- clone your fork of the repo
- type this on the command line to install all the dependencies:
> npm install

(In case you don't know: you have to have installed node for that to work)
- then, to use the App from your local copy:
> npm start

Make changes, push them to your repo and keep in touch. We would especially like help getting a backend to this project, so that the user can save new words. Or even switch languages.

## Adding words to vocab.js
The wordList object has several properties. 

### foreignLang
This allows the app to use the name of the language in the placeholder for the answer sentence. And in the modals which provide the translations in the known words tab when a word is clicked.

### defArticle
This itself has the properties of male, female, neuter. If one or more of these is undefined, the modal will display --- for it. It also has the property of wordType, which returns 'definite article'.

### nouns
Make a noun object for the word 'beer':
> var beer = new Noun('beer');

> beer.foreign = 'pivo';

> beer.gender = 'neuter';

Provide the english when first creating your noun. It is then accessed with
> beer.english //returns the string 'beer'

The word then also gets the property:
> beer.wordType // returns 'noun'

Gender needs to be: 'male', 'female' or 'neuter'.

Though Czech, and other languages, use noun cases (such as nominative and accusative) this has not been implemented yet.

### verbs
These have the wordType 'verb'.

Currently only the present tense is defined in vocab. Example definition:
> var toBe = new Verb('to be');

> toBe.infinitive = 'byt';

> toBe.present = ['am', 'are', 'is', 'are', 'are', 'are'];

> toBe.presentForeign = ['jsem', 'jsi', 'je', 'jsme', 'jste', 'jsou'];

The getter toBe.present also returns an array. Adjectives do not behave this way.

### adjectives
The setter for the translation of an adjective requires an array, of up to 3 elements. If the array is smaller, then the later genders will be undefined and appear as --- in the modal. The setter creates an object with properties: male, female and neuter. Example:
> var blue = new Adjective('blue');

> blue.foreign = ['modry', 'modra', 'modre'];

And the data is retrieved via:
> blue.english //returns 'blue'

> blue.foreign.neuter // returns 'modre'

## Using Word-Box
Starting on the the 'analyse' tab, you can paste some text and click save. If you don't give a title, saving will create a default title from your text.
![Some edited text](/screenshots/velky-strom-text.PNG)

Then click on 'study' and Word-Box will analyse your text:
![Analysed text](/screenshots/velky-strom-analysed.PNG)

The green words are the ones Word-Box has recognised. 'pampeliska' is mis-spelt, so appears red -- like the other words which are not recognised. 

Currently: your text is saved in local storage, so should be accessable when you return to the page. (But not all browsers allow this). You can see your catalogue on the 'saved texts' tab. 

### Known Words tab
You can search for words here by looking through the alphabetical list or typing in the search box. If you want to see the translation of a word: click on it in the list. Verbs are conjugated, and all gender forms of adjectives are given.

### Test Your Knowledge
Word-Box will use its vocab to make up a sentence. (Apologies for any rudeness: Word-Box knows not the meaning of what it says). Type your answer where prompted. As you type, each word is compared to the translation Word-Box has in mind. Obviously: there are many ways to say the same thing. But Word-Box is only thinking of one of these. Words gets marked according to their position and spelling (case insensitive). eg:
![cold hospital translation](/screenshots/cold-hospital-test-eg.PNG)

'nemocnice' is correct and in green. Why are the other words wrong? (hint: what gender is a hospital?) If you don't know how to translate the sentence: there is a hack! Click the 'Translate the other way' button. This swaps question and answer. You will now be given the same sentence in Czech, and be asked for the English translation. You can copy and paste, but you will learn more slowly if you do! (Teacher voice: 'You're only cheating yourself!'). Once you've read the answer, click the button again and type in the translation.

Word-Box will toast every correct answer and keep count of your successes, but this count is reset every time you restart.
