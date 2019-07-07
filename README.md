# Word Box
A vocabulary builder, to help learn a new language.
The app will maintain a list of words known to the user and, when a new piece of text is pasted in, the app will highlight known words in green and new words in red. You can save these texts (currently in local storage). 

There is also a tab where you can look through the known words and click them to see a translation. And finally: there is a test page where the computer will generate random sentences from the words it knows and ask you for the translation.

Please note: while there is no wish to recreate [Monty's Hungarian phrase book](http://www.montypython.net/scripts/phrasebk.php), I don't speak Czech that well. I have been as accurate as I can. The grammar may come up wrong, especially as we aim for harder sentences.

## Made by 
geckos-team-09, on Chingu's voyage 9
Team members: TomMac and [Samir70](https://github.com/Samir70)

## Technology
HTML, CSS, React, React Bootstrap and JavaScript
(eventually) some way to save data someplace other than local storage.
There is no database or backend, though we plan to look at this in the future.

## Deploying your own Word Box
[This version](https://chingu-voyages.github.io/v9-geckos-team-09/) is currently hosted on github, via gh-pages.
If you want to deploy one of your own, you can:
- fork this repo
- open a command line and change to a directory with the repo name
- clone the repo
- type this on the command line to install all the dependencies:
> npm install

(In case you don't know: you have to have installed node for that to work)
- then, to use the App from your local copy:
> npm start

Make changes, push them to your repo and keep in touch. We would especially like help getting a backend to this project, so that the user can save new words. Or even switch languages.

## initial user story:
* as a learner I should be able to see a list of the words I can translate between English and (Czech)
* as a learner I should be able to paste some text into the app and have it hightlight the words I know in green and the words I don't know in red
* as a learner I should be able to click on a green word and be asked for the translation. And then have my response graded
* as a learner I should be able to click on a red word and see a list of words with a similar root from my  known words lists
* as a learner I should be able to click on a red word and have the option to look the word up in a dictionary
* as a learner I should be able to add words to my known list when I provide a translation
* as a learner I should be tested on my ability to translate model sentences between languages. These sentences can be randomly generated with words from my known list.



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
