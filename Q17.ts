/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program. */



let guestlist3: Array <string>=
[
    'zeeshan usmani',
    'Sir Zia Khan',
    'Irfan Malik',
    'Sajid Khan',
    'Osama Khan',
    'Saqib Azhar'
  ]

//   step 1

console.log("I can only Two people Invited To Dinner.")

//  step 2

while(guestlist3.length > 2 )
{
    let removeGuest = guestlist3.pop()
    console.log(`Sorry ${removeGuest}, We Cant Invited To dinner.`)
}

//  step 4
 for(let guest of guestlist3)
{
console.log(`Hello ${guest}, You are Still Invited To Dinner`)
}

// step 5

guestlist3.pop()
guestlist3.pop()
console.log(`Guest List after Dinner`,guestlist3)



