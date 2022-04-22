// Object is a thing with properties 
// think car 
// think person 
// think employee

const employee = {
    firstName: "Jeff",
    lastName: "Haupt",
    email: "example@email.com",
    phoneNumber: "555-555-1212",
    jobTitle: "App Developer",
    dateOfHire: "05/04/2020"
}

const teacher = {
    firstName: "Jeff",
    lastName: "Haupt",
    classes: [
        "2022-03-24-fesd-central",
        "2022-01-26-fesd-central"
    ]
}

let employeeFirstName = "Jeff";
let employeeLastName = "Haupt";

console.log(`Employee Name: ${employee.firstName} ${employee['lastName']}`);
// so on, so on...

// employee is an object with several properties 
// firstName is a property of the employee object
// same for lastName, email, etc.