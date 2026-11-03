
//Logical AND (&&) operator
// Returens TRUE if both operands are TRUE
//console.log(true && false); // Output: false

// let highIncome = true;
// let goodCreditScore = true;
// let eligibleForLoan = highIncome && goodCreditScore;
// console.log(eligibleForLoan); // Output: true

// Returns TRUE if at least one operand is TRUE
let highIncome = false;
let goodCreditScore = false;
let eligibleForLoan = highIncome || goodCreditScore;
console.log('Eligible', eligibleForLoan); // Output: false

//Not operator (!)
let isNotEligibleForLoan = !eligibleForLoan;
console.log('Application Refused', isNotEligibleForLoan); // Output: true

