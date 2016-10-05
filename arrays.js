// ---------------------------
// The Arrays You Will Work With
// ---------------------------
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];



// ---------------------------
// 1. Find largest number
// ---------------------------

var max;
for (count=0; count<numbers.length; count++){
	if (count===0){
		max=numbers[count];
	} else if (numbers[count]>max){
		max = numbers[count];
	}

}

console.log(max);



// ---------------------------
// 2. Find longest string
// ---------------------------

var strMax;
var strLength;
for (count=0; count<strings.length; count++){
	if (count===0){
		strMax=strings[count];
		strLength=strings[count].length;
	} else if (strings[count].length>strLength){
		strMax= strings[count];
		strLength=strings[count].length;
	}

}

console.log(strMax);

// ---------------------------
// 3. Find even numbers
// ---------------------------

var newArrayEven=[];

for (count=0; count<numbers.length; count++){
	if (numbers[count]%2===0){
		newArrayEven.push(numbers[count]);
	}
}

console.log(newArrayEven);

// ---------------------------
// 4. Find odd numbers
// ---------------------------

var newArrayOdd=[];

for (count=0; count<numbers.length; count++){
	if (numbers[count]%2===1){
		newArrayOdd.push(numbers[count]);
	}
}

console.log(newArrayOdd);

// ---------------------------
// 5. Find words that contain `is`
// ---------------------------

var newArrayIs=[];

for (count=0; count<strings.length; count++){
	if (strings[count].includes("is")){
		newArrayIs.push(strings[count]);
	}
}

console.log(newArrayIs);


// ---------------------------
// 5. Join Both Arrays Together
// ---------------------------

var totalArray = numbers.concat(strings);
console.log(totalArray);


// ---------------------------
// 6. Use the Instructors array and find all that teach JavaScript, 
//    then sort them alphabetically
// ---------------------------

var newArrayInstruct=[];

for (count=0; count<instructors.length; count++){
	if (instructors[count].teaches==="JavaScript"){
		newArrayInstruct.push(instructors[count].firstname);
	}
}

console.log(newArrayInstruct);

newArrayInstruct.sort();

console.log(newArrayInstruct);