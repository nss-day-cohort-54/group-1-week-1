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
    {
        firstName: "William",
        lastName: "Johnson",
        id: 1,
        yearBorn: 1970,
        monthBorn: "June"
    }
]


// Define a function to calculate a customer's age
const calculateAge = (customerObject, currentYear) => {
    const age = currentYear - customerObject.yearBorn
    return age
}


/*
        2022
        "April"
        ---------------
        Lisa Jackson is n years old
        Michael Weathersby is n years old
*/

// Iterate the years array
for (const year of years) {
    // Within the year iteration, iterate the months array
    for (const month of months) {
        // Display current year
        // Display current month
        // Display dashes


        // Within the month array iteration, iterate the customers object array
        for (const customer of customers) {
            // Compare the `monthBorn` property of the customer and `month`

            // If they are equal, print customer name and age (use calculateAge function here)
        }

    }

}





