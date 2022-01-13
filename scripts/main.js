/*
    Problem/output:
        Solar Eclipse Bank has a problem. They want to have an automated
        way to display the customer birthdays, for each month, for the
        next 10 years. They would like to see the customer's name, and their
        current age, displayed in the correct month. Here's an example they
        provided of how they would like the data displayed.

        2022
        "February"
        ---------------
        Miles Goodworth is n years old
        Barbara Forsythe is n years old

        2022
        "March"
        ---------------


        2022
        "April"
        ---------------
        Lisa Jackson is n years old
        Michael Weathersby is n years old
*/


// Define an array containing year integers
const years = [ 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031 ]

// Define an array for all month names as strings
const months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

// Define an array of objects representing the customers
const customers = [
    { firstName: "William", lastName: "Johnson", id: 1, yearBorn: 1970, monthBorn: "June" },
    { firstName: "Halle", lastName: "Johnson", id: 2, yearBorn: 1988, monthBorn: "September" },
    { firstName: "Santina", lastName: "Veum", id: 3, yearBorn: 1994, monthBorn: "October" },
    { firstName: "Camylle", lastName: "Ward", id: 4, yearBorn: 1965, monthBorn: "June" },
    { firstName: "Paula", lastName: "Green", id: 5, yearBorn: 1983, monthBorn: "January" },
    { firstName: "Russel", lastName: "Bayer", id: 6, yearBorn: 1977, monthBorn: "July" },
    { firstName: "Jovan", lastName: "Gutmann", id: 7, yearBorn: 1999, monthBorn: "March" },
    { firstName: "Darrel", lastName: "Metz", id: 8, yearBorn: 1993, monthBorn: "December" },
    { firstName: "Eveline", lastName: "Feil", id: 9, yearBorn: 1978, monthBorn: "March" }
]




/*
2022
"April"
---------------
Lisa Jackson is n years old
Michael Weathersby is n years old
*/

// Define a function to calculate a customer's age
const calculateAge = (customerObject, currentYear) => {
    const age = currentYear - customerObject.yearBorn
    return age
}

const displayCustomerString = (customerObject, currentYear) => {
    const customerAge = calculateAge(customerObject, currentYear)
    console.log(`${customerObject.firstName} ${customerObject.lastName} is ${customerAge} years old.`)
}

// Iterate the years array
for (const year of years) {
    // Within the year iteration, iterate the months array
    for (const month of months) {
        // Display current year
        console.log(year)
        // Display current month
        console.log(month)
        // Display dashes
        console.log("---------------")


        // Within the month array iteration, iterate the customers object array
        for (const customer of customers) {
            // Compare the `monthBorn` property of the customer and `month`
            if (customer.monthBorn === month) {
                // If they are equal, print customer name and age (use calculateAge function here)
                displayCustomerString(customer, year)
            }
        }

        console.log("\n\n")
    }
}





