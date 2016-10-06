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

function findLargest(numArray){

var max = numArray[0];
	for (count=1; count<numArray.length; count++){
		if (numArray[count]>max){
			max = numArray[count];
		}

	}
	return max;
}
console.log(findLargest(numbers));



// ---------------------------
// 2. Find longest string
// ---------------------------

function findLongest(strArray){
	var strMax = strArray[0];
	var strLength = strArray[0].length;
	for (count=1; count<strArray.length; count++){
		if (strArray[count].length>strLength){
			strMax= strings[count];
			strLength=strings[count].length;
		}

	}
	return strMax;
}
console.log(findLongest(strings));

// ---------------------------
// 3. Find even numbers
// ---------------------------


function findEven(numArray){
	var newArrayEven=[];
	for (count=0; count<numArray.length; count++){
		if (numArray[count]%2===0){
			newArrayEven.push(numArray[count]);
		}
	}
	return newArrayEven;
}
console.log(findEven(numbers));

// ---------------------------
// 4. Find odd numbers
// ---------------------------

function findOdd(numArray){
	var newArrayOdd=[];
	for (count=0; count<numArray.length; count++){
		if (numArray[count]%2===1){
			newArrayOdd.push(numArray[count]);
		}
	}
	return newArrayOdd;
}
console.log(findOdd(numbers));

// ---------------------------
// 5. Find words that contain `is`
// ---------------------------

function findIs(strArray){
	var newArrayIs=[];
	for (count=0; count<strArray.length; count++){
		if (strArray[count].includes("is")){
			newArrayIs.push(strArray[count]);
		}
	}
	return newArrayIs;
}
console.log(findIs(strings));


// ---------------------------
// 5. Join Both Arrays Together
// ---------------------------

function joinArrays(array1, array2){
	return array1.concat(array2);
}
console.log(joinArrays(numbers, strings));


// ---------------------------
// 6. Use the Instructors array and find all that teach JavaScript, 
//    then sort them alphabetically
// ---------------------------



function sortInstructors(instructorsInit){

	var arrayInstruct=[];
	for (count=0; count<instructorsInit.length; count++){
		if (instructorsInit[count].teaches==="JavaScript"){
			arrayInstruct.push(instructorsInit[count].firstname);
		}
	}

	var lcArrayInstruct = arrayInstruct.slice();
	for (var count=0; count<lcArrayInstruct.length; count++){
		lcArrayInstruct[count]=lcArrayInstruct[count].toLowerCase();
	}

	var lcSortArray = lcArrayInstruct.slice();
	lcSortArray.sort();
	var indexes = [];
	var sortedArray=[];

	var indexFinder = function(element, index, array){
		indexes[index] = array.indexOf(lcSortArray[index]);
	}

	var arrayShuffle = function(element, index, array){
		sortedArray[index]=arrayInstruct[indexes[index]];
	}

	lcArrayInstruct.forEach(indexFinder);
	arrayInstruct.forEach(arrayShuffle);


	console.log(sortedArray);
	return sortedArray;

}

console.log(sortInstructors(instructors));


