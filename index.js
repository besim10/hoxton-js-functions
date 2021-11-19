
/* WRITE THE CODE FOR THE FOLLOWING FUNCTIONS */

// Input: a (number), b (number)
// Action: Add both numbers together
// Output: The result (number)
function add(a, b) {
    // write your code here
    return a + b
}
 
  // Input: number
  // Action: Check if the number given is even or not
  // Output: The result (boolean)
  function isEven(numberGiven) {
    // write your code here
    if(numberGiven % 2 === 0) return true
    return false

  }

  // Input: name (string)
  // Action: Greet the user by name
  // Output: The greeting (string)
  function greet(name) {
    // write your code here
    return `Hi ${name}, welcome to our nightclub!`
  }

  // Input: age (number)
  // Action: Check if the age is 18 or over
  // Output: The result (boolean)
  function isAnAdult(age) {
    // write your code here
    if(age >= 18) return true
    return false
  }
  
  // Input: age (number)
  // Action: Check how many years are left until adulthood (18)
  // Output: The result (number)
  function yearsToAdulthood(age) {
    // write your code here
    return 18 - age
  }
  
  // Input: person ({ age: number, name: string })
  // Action:
  //   - check if a person is an adult
  //   - if they are, greet them
  //   - if they are not, tell them to come back in X years (when they are)
  // Output: The result (string)
  function admit(person) {
    // write your code here
    // use greet, isAnAdult and yearsToAdulthood to help you!
    if(isAnAdult(person.age)){
        return greet(person.name)
    }
    else{
        const yearsToAdultHood = yearsToAdulthood(person.age)
        return (`Hi ${person.name}, please come back in: ${yearsToAdultHood} years!`)
    }
  }

  let message = admit({name: 'Besim', age: 30})
  console.log(message)