console.log('hi from the javascript file');
// Arrays are mutable, so we can use const
// Const is used for all reference types
const numbers = [1, 2, 3]

// object called roe, 3 properties

const roe = {
    class: "web design 2",
    start: 10,
    end: 2,
};

// console.log(roe.class);

// if there was a space in the key 'class name'
// console.log(roe['class name']);

// indices start from 0 in programming languages

// This will print out the first number of the array
console.log(numbers[0]);

// To change a value in an array
numbers[0] = 10

roe.class = 'web design 1'


// FUNCTIONS
// This adds two functions and take two parameters and adds them together

// const add = (a, b) => {
//     console.log(a + b);
// }
// add(1,2)

// if you print:
// add('hello', 'world')
// this will concatinate the strings


const add = (a, b) => {
    let sum  = a + b;
    return sum
};

// if this is presented, this will give an error as we should be passing 2 parameters as already dictated in the function
add(1)



function add2(a, b) {
    let sum = a + b
    return sum
}

let result = add(1234, 4321)
console.log(result);

function add3() {
    return numbers[0] + numbers[1];
}

console.log(add3());


// this will print out 21 as b currently doesn't exist so the default value is not overwritten 
const add = (a = 10, b = 20) => {
    let sum  = a + b;
    return sum
    // anything that comes after a return will be ignored
    // the return statement is the last thing in a code block with javascript
    console.log('something')
};

console.log(add(1))



// CONDITIONALS

function number_check(x) {
    if (x > 0 || x <= 10) {
        let isBetween = 'yes it is on between 0 and 10'
        console.log(isBetween);
    } else if ( x >= 10 && x < 20) {
        console.log("the number is between 10 and 20")
    }
    else {
        console.log('this is an invalid number')
    }

    console.log(isBetween)


}


number_check(10); // will print the first statement

|| - this is 'and OR'

function does_exist(a) {
    if (a) {
        console.log('a exists');
    } else  {
        console.log('a doesn't exist')
    }

    does_exist(roe);
}


// LOOPS


for let(i = 0; i < numbers.length; i++) {
    console.log(i)
}

// This is a callback function - calling a function within a function
numbers.forEach((n) => {
    if (n % 2 == 0) {
        console.log(` ${n} is even`);
    } else {
        console.log( `${n} is odd`);
    }
    console.log('hello')
});

const odd_numbers = numbers.filter((n) => {
    if (n % 2 == 1) {
        return n;
    }
});

const squared_values = numbers.map((n) => {
    return n ** 2
})


// for each function does not produce a new array


