// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------


function max(x,y){
	if (x>y){
		return x;
	} else {
		return y;
	}
}

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(x, y, z){
    if (z >= max(x,y)){
    	return z;
    } else if (y >=
     max(x,z)){
    	return y;
    } else {
    	return x;
    }
}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){

	var vowels = ["a", "e", "i", "o", "u"];
	return vowels.includes(char.toLowerCase());
}

function strComp(charA, charB){
	if (charA===charB){
		return true;
	} else {
		return false;
	}
}

// ---------------------
// Write a function translate() that will translate a text into "Rovarspraket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function translate(phrase){
	var newPhrase = "";
	for (count=0; count<phrase.length; count++){
		newPhrase = newPhrase + phrase[count];
		if (!isVowel(phrase[count]) && phrase[count] !== " "){
			newPhrase = newPhrase + "o" + phrase[count];
		}
	}
	return newPhrase;
}


// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(phrase){
    var newPhrase = "";
	for (count=(phrase.length-1); count>=0; count--){
		newPhrase = newPhrase + phrase[count];
	}
	return newPhrase;
}



//////////    TEST      //////////////

var x=3;
var y=5;
var z=10;

var max2 = max(x,y);
var max3 = maxOfThree(x, y, z);

console.log(max2 + " is the max of " + x + " and " + y);
console.log(max3 + " is the max of " + x + ", " + y + " and " + z);

var phrase = "goat man";

var Rovar = translate(phrase);
console.log("New phrase is " + Rovar);

var reversePhrase = reverse(phrase);
console.log("New phrase is " + reversePhrase);