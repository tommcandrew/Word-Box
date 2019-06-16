const rndNoun = (arr) => {
    var i = Math.floor(Math.random()*arr.length);
    return {english:arr[i].english, foreign:arr[i].foreign}
}

// so far only tense in vocab.js is 'present'
// nb: person is zero-indexed [1stSing, 2ndSing, 3rdSing, 1stPlur, 2ndPlur, 3rdPlur]

// ********************
// currently no use for rndVerb, so commented out
// const rndVerb = (arr, tense, person) => {
//     var i = Math.floor(Math.random()*arr.length);
//     return {english:arr[i][tense][person], foreign: arr[i][tense+'Foreign'][person]}
// }


// gender is stored as an array [male, female, neuter]
// not fully implemented, because the gender of nouns is not currently stored
const rndAdj = (arr, gender) => {
    var i = Math.floor(Math.random()*arr.length);
    return {english:arr[i].english, foreign:arr[i].foreign[gender]}  
}


export const rndSentence = (wList) => {
    var noun1 = rndNoun(wList.nouns);      
    //currently no use for verb in sentence
    //var verb1 = rndVerb(wList.verbs, 'present', 2);
    var adj1 = rndAdj(wList.adjectives, 0); //masculine because gender not currently defined
    var englishSentence = 'The '+noun1.english +' is '+ adj1.english;
    //NB: 'the' needs to match gender too
    var foreignSentence = 'Ten '+noun1.foreign +' je '+ adj1.foreign;

    return {english:englishSentence, foreign:foreignSentence}
}