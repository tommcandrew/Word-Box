const rndNoun = (arr) => {
    var i = Math.floor(Math.random()*arr.length);
    return {english:arr[i].english, foreign:arr[i].foreign, gender:arr[i].gender}
}

// so far only tense in vocab.js is 'present'
// nb: person is zero-indexed [1stSing, 2ndSing, 3rdSing, 1stPlur, 2ndPlur, 3rdPlur]

const rndVerb = (arr, tense, person) => {
    var i = Math.floor(Math.random()*arr.length);
    return {english:arr[i][tense][person], foreign: arr[i][tense+'Foreign'][person]}
}


// gender is stored as an array [male, female, neuter]
const rndAdj = (arr, gender) => {
    var i = Math.floor(Math.random()*arr.length);
    return {english:arr[i].english, foreign:arr[i].foreign[gender]}  
}

// make a random sentence using a noun and adjective
const theNounIsAdj = (defArt, noun, adj) => {    
    var englishSentence = 'The '+noun.english +' is '+ adj.english;
    //NB: 'the' needs to match gender too
    var theThe = defArt.foreign[noun.gender].replace(/^\w/, (c) => c.toUpperCase());
    var foreignSentence = theThe +' '+noun.foreign +' je '+ adj.foreign;

    return {english:englishSentence, foreign:foreignSentence}
}

export const rndSentence = (wList) => {
    var noun1 = rndNoun(wList.nouns);   
    var verb1 = rndVerb(wList.verbs, 'present', 2);
    var adj1 = rndAdj(wList.adjectives, noun1.gender); 

    return theNounIsAdj(wList.defArticle, noun1, adj1);
}