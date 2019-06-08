class Noun {
    constructor(eng) {
        this.english = eng;
    }
    set foreign(f) {
        this._foreign = f;
    } 
    get foreign() {
        return this._foreign;
    }
}

class Verb {
    constructor(eng) {
        this.english = eng;
    }
    set present([first, you, he, we, you2, they]) {
        this.present1st = first;
        this.presentYou = you;
        this.presentHe = he;
        this.presentWe = we;
        this.presentYou2 = you2;
        this.presentThey = they;
    }
    // this is untidy, but you get present tense 
    // you get the whole array of 6
    // first person is oth element of array
    get present() {
        return this.present;
    }
}

var beer = new Noun('beer');
beer.foreign = 'pivo';
var dog = new Noun('dog');
dog.foreign = 'pes';
var bed = new Noun('bed');
bed.foreign = 'postel';

var toBe = new Verb('to be');
toBe.present = ['am', 'are', 'is', 'are', 'are', 'are'];

export var wordList = {
    nouns : [beer, dog, bed],
    verbs : [toBe] 
}