
// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) { 
  // return str.split("").reverse().join("")

  ////////////////////////////
  // let i;
  // let array = ""
  // for (i = 0; i < str.length; i++) {
  //   array = array + str[i]
  // } 
  // return array

  /////////////////////////////
  // let array = ""
  // for (let i = str.length - 1; i >= 0; i--) {
  //   array = array + str[i]
  // } 
  // return array

  /////////////////////////////
  // let array = ""
  // str.split("").forEach(value => {
  //   array = value + array
  // });
  // return array

  /////////////////////////////
  // let array = ""
  // str.split("").map(value => {
  //   array = value + array
  // });
  // return array

  /////////////////////////////
  // let arr = [...str];
  // let array = arr.map((_, i, arr) => {
  //     return arr[arr.length - 1 - i];
  //   });
  //   return array.join("")

  /////////////////////////////
  return str.split("").reduce((array, value) => value + array, "" )
}



// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
  // const array = str.split("").reverse().join("")
  // if (array === str){
  //   return true
  // } else {
  //   return false
  // }

  ///////////////////////////////
  // let array = ""
  // str.split("").forEach(element => {
  //   array = element + array
  // });
  //   return array === str

  ///////////////////////////////
  // let array = ""
  // str.split("").map(element => {
  //   array = element + array
  // });
  //   return array === str
}



// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  // const reverseArray = int.toString().split("").reverse().join("")
  // let integer = parseInt(reverseArray)
  // return integer

  /////////////////////////////////
  // const string = int.toString(10)
  // let result = ""
  // string.split("").forEach(element => {
  //   result = element + result
  // });
  // return parseInt(result)

  //////////////////////////////////
  // const string = int.toString(10)
  // let result = ""
  // string.split("").map(element => {
  //   result = element + result
  // });
  // return parseInt(result)

  /////////////////////////////
  // let array = int.toString(10)
  // let integer = [...array];
  // let intearray = integer.map((_, i, value) => {
  //     return value[value.length - 1 - i];
  //   });
  //   return parseInt(intearray.join(""))
}



// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'

////////////////////////////////////////
function capitalizeLetters(str) {
//   const lower = str.toLowerCase().split(" ")
//   for (i = 0; i < lower.length; i++) {
//     lower[i] = lower[i].substring(0,1).toUpperCase() + lower[i].substring(1)
//   }
//   return lower.join(" ")

//////////////////////////////////////////
// return str.toLowerCase().split(" ").map(function(word){
//   return word[0].toUpperCase() + word.substring(1)
// }.join(""))

}



// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
  // let charmap = {}
  // let maxNum  = 0;
  // let maxChar = '';
  // str.split('').forEach(element => {
  //   if (charmap[element]) {
  //     charmap[element]++
  //   } else {
  //     charmap[element] = 1
  //   }
  // });
  // for (char in charmap) {
  //   if (charmap[char] > maxNum) {
  //     maxNum = charmap[char]
  //     maxChar = char
  //   }
  // }
  // return maxChar
}



// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log('FizzBuzz')
    } else if (i % 3 == 0) {
      console.log('Fizz')
    } else if (i % 5 == 0) {
      console.log('Buzz')
    } else {
      console.log(i)
    }
  }
}



// Call Function
const output = fizzBuzz();

console.log(output);