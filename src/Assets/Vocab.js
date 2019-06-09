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
    set present(arr) {
        // the array will list the present tense in order [first, you, he, we, you2, they]
        if (arr.length === 6) {
            this._present = Array.from(arr)
        } else {/*need to throw an error */}
    }
    // this is untidy, but you get present tense 
    // you get the whole array of 6
    // first person is zero-th element of array
    get present() {
        return this._present;
    }

    set presentForeign(arr) {
        if (arr.length === 6) {
            this._presentForeign = Array.from(arr)
        } else {/*need to throw an error */}
    }

    get presentForeign() {
        return this._presentForeign
    }
}

class Adjective {
    constructor(eng) {
        this.english = eng
    }

    set foreign(arr) {
        // at the moment, this array will be [stem, group]
        // This will allow calculation of the foreign adjective for regular adjectives
        this._foreign = Array.from(arr)
    }

    get foreign() {
        return this._foreign
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