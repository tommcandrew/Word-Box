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
