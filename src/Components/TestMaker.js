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


export const rndSentence = (wList) => {
    var noun1 = rndNoun(wList.nouns);   
    var verb1 = rndVerb(wList.verbs, 'present', 2);
    var adj1 = rndAdj(wList.adjectives, noun1.gender); 
    var englishSentence = 'The '+noun1.english +' is '+ adj1.english;
    //NB: 'the' needs to match gender too
    var defArt = wList.defArticle.foreign[noun1.gender].replace(/^\w/, (c) => c.toUpperCase());
    var foreignSentence = defArt +' '+noun1.foreign +' je '+ adj1.foreign;

    return {english:englishSentence, foreign:foreignSentence}
}