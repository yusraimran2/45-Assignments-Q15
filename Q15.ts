//Q15:CHANGING GUEST LIST:You just heard that one of your guest can't make the dinner,so you need to send out a new set of invitations. you'll have to think of someone else to invite.

//. Start with your program from exercise 14 add a print statement at the end of your program stating the name of the guest who can't make it.

// .Modify your list,replacing the name of the guest who can't make it with the name of the new person you are inviting.

// Print a second set of invitations messages ,one for each person who is still in yor list
let myGuests:string[] = ["Nazia","Sadaf","Sana","Bushra","Faryal","Afshan"]
console.log(myGuests);

let guest:string = "Afshan";
console.log(`${guest} is busy due to some personal issue so she's not able to attend the dinner`);

//  Modifying the list by replacing the name of the guest who can't make it with the name of new person.

myGuests.pop();
myGuests.push("Sumera")
console.log(myGuests);

// Printing a second set of invitation for each person who is still  in my list.

console.log("Hey dear I invited you to dinner",myGuests[0]);
console.log("Hey dear I invited you to dinner",myGuests[1]);
console.log("Hey dear I invited you to dinner",myGuests[2]);
console.log("Hey dear I invited you to dinner",myGuests[3]);
console.log("Hey dear I invited you to dinner",myGuests[4]);
console.log("Hey dear I invited you to dinner",myGuests[5]);