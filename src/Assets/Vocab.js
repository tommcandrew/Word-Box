/*
!!!!!!!!!!!!!!!!!!!!!!!! IMPORTANT
When you add properties for plurals/other tenses/accusative etc
Update the modals to include that data when a word is clicked in the wordlist
*/

class Noun {
    constructor(eng) {
        this.english = eng;
    }
    wordType= 'noun';
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
    wordType= 'verb';
    
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
    wordType= 'adjective';

    set foreign(arr) {
        // abandoning the idea that this would be [stem, group]
        // the structure is [male, female, neuter]
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
var wine = new Noun('wine');
wine.foreign = 'vino';
wine.gender = 'neuter';
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
var woman = new Noun('woman');
woman.foreign = 'zena';
woman.gender = 'female';
var man = new Noun('man');
man.foreign = 'muz';
man.gender = 'male';
var car = new Noun('car');
car.foreign = 'auto';
car.gender = 'neuter';
var gift = new Noun('gift');
gift.foreign = 'darek';
gift.gender = 'male';
var hospital = new Noun('hospital');
hospital.foreign = 'nemocnice';
hospital.gender = 'female';
var night = new Noun('night');
night.foreign = 'noc';
night.gender = 'female';
var dandelion = new Noun('dandelion');
dandelion.foreign = 'pampeliska';
dandelion.gender = 'female'

var toBe = new Verb('to be');
toBe.infinitive = 'byt';
toBe.present = ['am', 'are', 'is', 'are', 'are', 'are'];
toBe.presentForeign = ['jsem', 'jsi', 'je', 'jsme', 'jste', 'jsou'];
var toDo = new Verb('to do');
toDo.infinitive = 'delat';
toDo.present = ['do', 'do', 'does','do','do','do'];
toDo.presentForeign = ['delam', 'delas', 'dela', 'delame', 'delate', 'delaji']

// remember: foreign adjectives don't stay as arrays
// they are accessed by property name, eg: old.foreign.male
var young = new Adjective('young');
young.foreign = ['mlady', 'mlada', 'mlade'];
var old = new Adjective('old');
old.foreign = ['stary', 'stara', 'stare'];
var small = new Adjective('small');
small.foreign = ['maly', 'mala', 'male'];
var large = new Adjective('large');
large.foreign = ['velky', 'velka', 'velke']; 
var blue = new Adjective('blue');
blue.foreign = ['modry', 'modra', 'modre'];
var green = new Adjective('green');
green.foreign = ['zeleny', 'zelena', 'zelene'];
var beautiful = new Adjective('beautiful');
beautiful.foreign = ['krasny', 'krasna', 'krasne'];
var healthy = new Adjective('healthy');
healthy.foreign = ['zdravy', 'zdrava', 'zdrave'];
var strong = new Adjective('strong');
strong.foreign = ['silny', 'silna', 'silne'];
var cold = new Adjective('cold');
cold.foreign = ['studeny', 'studena', 'studene'];
var hot = new Adjective('hot');
hot.foreign = ['horky', 'horka', 'horke'];


export var wordList = {
    foreignLang : 'Czech',
    defArticle : {
        english: 'the', 
        foreign: {male:'ten', female:'ta', neuter:'to'}, 
        wordType:'definite article'},
    pronouns : {
        english: ['I', 'you', 'he', 'she', 'it', 'we','you','they'],
        foreign: ['ja', 'ty', 'on', 'ona', 'ono', 'my', 'vy', 'oni']
    },
    nouns : [beer, wine, dog, table, banana, woman, man, tree, bed, car, gift, hospital, night, dandelion],
    verbs : [toBe, toDo],
    adjectives : [young, old, small, large, blue, green, beautiful, healthy, strong, cold, hot] 
}