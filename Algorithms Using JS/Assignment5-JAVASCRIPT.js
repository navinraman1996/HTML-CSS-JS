console.log('BINARY SEARCH ALGORITHM\n');

/**
 * @desc this array contains unsorted numbers
 * @type {number[]} unsorted_array
 */
let unsorted_array = [98,3,75,16,84,29,65,91,4,55,44,123];

/**
 * @desc sorting the unsorted_array using default sort function
 * @param {number} a - This is the first number passed into the sort function as an argument
 * @param {number} b - This is the second number passed into the sort function as an argument
 * @type {number[]} sorted_array
 */
let sorted_array = unsorted_array.sort( function(a,b) {return a-b} );

console.log('The sorted array is : '+sorted_array+'\n');

/**
 * @desc This function does the binary searching and accepts an array and the value to be found 
 * @param {number[]} arr 
 * @param {number} numberToFind 
 */
function binary_search(arr,numberToFind) {

    /**
    * @desc Assigning higher_index to total length of the array
    * @type {number} higher_index
    */
    let higher_index = arr.length - 1;

    /**
    * @desc Assigning lower_index to 0
    * @type {number} lower_index
    */
    let lower_index = 0; 

    /**
    * @desc Assigning middle_index to 0
    * @type {number} middle_index
    */
    let middle_index = 0;

    /** @desc Math.floor is used to round up the decimal value. */
    while(lower_index <= higher_index) 
    {
        /**
        * @desc Assigning middle_index is addition of higher_index and lower_index and dividing it by 2.
        */
        middle_index = Math.floor ((higher_index + lower_index) / 2)
    
        if(arr[middle_index] == numberToFind) {
            /** @return {number[]} with a string */  
            return arr[middle_index] + ' is present in the array';
        }     
        else if(numberToFind > arr[middle_index]) {
            /** @desc increasing the position of lower_index by 1. */
            lower_index = middle_index + 1;
        }
        else {
            /** @desc decreasing the position of higher_index by 1. */
            higher_index = middle_index - 1;
        }
    } 
    /** @return {number[]} with a string */
    return -1 + ' : Number is not in the array'; 
}

/** @desc Calling the binary_search function using a variable called searching, and passing the sorted array and the number to be searched. */
let searching = binary_search(sorted_array, 123);

console.log(searching);
console.log('\n***************************************************************************\n');

/** Bubble sort Algorithm */
console.log('BUBBLE SORT ALGORITHM\n');

/**
 * @desc this array contains unsorted numbers
 * @type {number[]} unsorted_array
 */
let unsorted_array1 = [1,91,43,2,74,45,6,65,9];

/**
 * @desc bubble_sort function
 * @type {number[]} bubble_sort
 */
var bubble_sort = function(array)
{
    do
    {
        /**
        * @desc initially setting the swap_happend flag to false
        * @type {boolean} swap_happend
        */  
        var swap_happend = false;

        /** @desc forEach() executes the provided callback once for each element present in the array in ascending order.*/
        array.forEach ((number, i) => 
        {  
            if(number > array[i + 1]) 
            {  
                /**
                * @desc putting the number which satisfied the if condition to a variable called "temp", thus array[i] is empty.
                * @type {number} temp
                */  
                var temp = number;

                /** transferring the value from array[i+1] to array[i]. */
                array[i] = array[i+1];      

                /** thus, the higher number is moved to next index in the array with respect to the number or array[i]. */
                array[i+1] = temp;

                /**Setting this flag to true, so that this loop gets initiated again */
                swap_happend = true;
            }
        })
    } while (swap_happend === true)
  
    /** @return {number[]} returns the array */
    return array;
}

console.log('Before sorting:       ' + unsorted_array1 + '\n');
console.log('After Bubble sorting: ' + bubble_sort(unsorted_array1));
console.log('\n***************************************************************************\n');

/** Palindrome Algorithm */
console.log('PALINDROME ALGORITHM\n');

/**
 * @desc This function takes string as an argument to check whether it is a palindrome or not 
 * @param {string} String_to_check 
 */
function palindrome (String_to_check)
{
    /**
    * @desc it replace the String_to_check string to a lower case string
    * @type {string} lowerCaseString
    */  
    var lowerCaseString = String_to_check.replace(/[^A-Z0-9]/ig, "").toLowerCase();

    /**
    * @desc it splits the characters present in the lower case string and reverse it and again join it
    * @type {string} palindromeCheck
    */
    var palindromeCheck = lowerCaseString.split('').reverse().join('');
  
    if(lowerCaseString === palindromeCheck)
    {
        console.log(String_to_check + " is a palindrome \n");
    }  
    else
    {
        console.log(String_to_check + " is not a palindrome \n")
    }
}
palindrome('madam');
palindrome('Racecar');
palindrome('123321');
palindrome('navin');
palindrome('987987');

