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
    set gender(g) {
        this._gender = g;
    }
    get gender() {
        return this._gender;
    }
}

class Verb {
    constructor(eng) {
        this.english = eng;
    }
    
    set infinitive(f) {
        this._infinitive = f
    }
    get infinitive() {
        return this._infinitive
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
        // eventually: I would like this to be [stem, group]
        // This will allow calculation of the foreign adjective for regular adjectives
        // but currently it is [male, female, neuter]
        // actually: using the same structure as the defArticle will simplify the creation of 
        // a test sentence. So send an array to this method, it will create an object
        this._foreign = {male:arr[0], female:arr[1], neuter:arr[2]}
    }

    get foreign() {
        return this._foreign
    }
}

var beer = new Noun('beer');
beer.foreign = 'pivo';
beer.gender = 'neuter';
var dog = new Noun('dog');
dog.foreign = 'pes';
dog.gender = 'male';
var table = new Noun('table');
table.foreign = 'stul';
table.gender = 'male';
var banana = new Noun('banana');
banana.foreign = 'banan';
banana.gender = 'male';
var tree = new Noun('tree');
tree.foreign = 'strom';
tree.gender = 'male'
var bed = new Noun('bed');
bed.foreign = 'postel';
bed.gender = 'female';

var toBe = new Verb('to be');
toBe.infinitive = 'byt';
toBe.present = ['am', 'are', 'is', 'are', 'are', 'are'];
toBe.presentForeign = ['jsem', 'jsi', 'je', 'jsme', 'jste', 'jsou'];
var toDo = new Verb('to do');
toDo.infinitive = 'delat';
toDo.present = ['do', 'do', 'does','do','do','do'];
toDo.presentForeign = ['delam', 'delas', 'dela', 'delame', 'delate', 'delaji']


var young = new Adjective('young');
young.foreign = ['mlady', 'mlada', 'mlade'];
var old = new Adjective('old');
old.foreign = ['stary', 'stara', 'stare'];
var small = new Adjective('small');
small.foreign = ['maly', 'mala', 'male'];


export var wordList = {
    defArticle : {english: 'The', foreign: {male:'Ten', female:'Ta', neuter:'To'}},
    nouns : [beer, dog, table, banana, tree, bed],
    verbs : [toBe, toDo],
    adjectives : [young, old, small] 
}