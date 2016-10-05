///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
////    ______                _   _                ////
////    |  ___|              | | (_)               ////
////    | |_ _   _ _ __   ___| |_ _  ___  _ __     ////
////    |  _| | | | '_ \ / __| __| |/ _ \| '_ \    ////
////    | | | |_| | | | | (__| |_| | (_) | | | |   ////
////    \_|  \__,_|_| |_|\___|\__|_|\___/|_| |_|   ////
////                                               ////
////                                               ////
////    ______               _   _                 ////
////    | ___ \             | | (_)                ////
////    | |_/ / __ __ _  ___| |_ _  ___ ___        ////
////    |  __/ '__/ _` |/ __| __| |/ __/ _ \       ////
////    | |  | | | (_| | (__| |_| | (_|  __/       ////
////    \_|  |_|  \__,_|\___|\__|_|\___\___|       ////
////                                               ////
////                                               ////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////


// Q1
// Write a function called `sum` that takes two
// parameters and returns the sum of those 2 numbers.

var sum=function(x,y){
	return x+y;
}

// Q2
// Write a function named `avg` that takes 3 parameters
// and returns the average of those 3 numbers.

var avg=function(x,y,z){
	return (x+y+z)/3;
}

// Q3
// Write a function called `getLength` that takes one
// parameter (a string) and returns the length

var getLength = function(string){
	count=0;
	while (string[count]!=null){
		count++;
	}
	return count;
}

// Q4
// Write a function called `greaterThan` that takes
// two parameters and returns `true` if the second
// parameter is greater than the first. Otherwise
// the function should return `false`.

var greaterThan = function(x,y){
	var bool;
	if (y>x){
		bool=true;
	} else {
		bool=false;
	}
	return bool;
}

// Q5
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.

var greet = function (parameter){
	return "Hello, " + parameter;
}

// Q6
// Write a function called `madlib` that takes
// 4 or more parameters (words). The function 
// should insert the words into a pre-defined
// sentence. Finally the function should return
// that sentence.
// Note: When I say words and sentence I mean
// strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"

var madlib = function (stringA, stringB, stringC, stringD){
	newString = "The " + stringA + " " + stringB + " canoodles with the " + stringC + " while the " + stringD + " watches";
	return newString;
}




/////////   TEST  //////////////

var x=3;
var y=5;
var z=10;
var string = "cookie time"

var sum1 = sum(x,y);
console.log("3 + 5 equals "+sum1);

var avg1 = avg(x,y,z);
console.log("The avergae of 3, 5, and 10 is " + avg1);

var length = getLength(string);
console.log("The length of (cookie time) is " + length);

var bool = greaterThan(x,y);
console.log("Is 5 greater than 3? " + bool);

var helloString = greet(5);
console.log(helloString);

var helloString = greet("Charles");
console.log(helloString);

var madString = madlib("Hot", "Fox", "Gopher", "Groundhog");
console.log(madString);



///////////////////////////////////////////////////////
///////////////////////////////////////////////////////