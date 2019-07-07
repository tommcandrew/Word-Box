// use this so much, it is just needed for easier access:
const randInt = (n) => Math.floor(Math.random()*n);
const capitalise = (w) => w.replace(/^\w/, (c) => c.toUpperCase())
const rndElement = (arr) => arr[randInt(arr.length)];

// make a random sentence "The noun is adjective"
// this is Czech specific at the moment. Change it to find the verb to be.
const theNounIsAdj = (defArt, noun, adj) => {    
    var englishSentence = 'The '+noun.english +' is '+ adj.english;
    //NB: 'the' needs to match gender too
    var foreignSentence = capitalise(defArt.foreign[noun.gender]) 
        +' '+noun.foreign +' je '+ adj.foreign[noun.gender];

    return {english:englishSentence, foreign:foreignSentence}
}

// make a random sentence "Pronoun verbing"
// remember prounouns are listed ['I', 'you', 'he', 'she', 'it', 'we','you','they']
// while present tense is given as [1stSing, 2ndSing, 3rdSing, 1stPlur, 2ndPlur, 3rdPlur]
const pronounVerb = (pronouns, verb) => {
    var person = randInt(8);
    var verbPerson = [0, 1, 2, 2, 2, 3, 4, 5][person]

    var englishSentence = capitalise(pronouns.english[person]) + ' ' + verb.present[verbPerson];
    var foreignSentence = capitalise(pronouns.foreign[person]) + ' ' + verb.presentForeign[verbPerson];
    return {english: englishSentence, foreign:foreignSentence }
}

export const rndSentence = (wList) => {
    var noun1 = rndElement(wList.nouns);   
    var verb1 = rndElement(wList.verbs);
    var adj1 = rndElement(wList.adjectives);

    var sentenceType = randInt(2); // change this to constant while developing new sentence test
    switch (sentenceType) {
        case 0 : return theNounIsAdj(wList.defArticle, noun1, adj1);
        case 1 : return pronounVerb(wList.pronouns, verb1);
        default : return {english:"I don't have a sentence for this", foreign:'Ja blazen'}
    }
    
}