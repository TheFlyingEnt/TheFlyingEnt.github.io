// Asking User for Name and Feeling using Fields (The ANNOYING popup thingy)
var userName = prompt("Hello There!, Before you continute, I am going to need you name. Please Input your name!");
var userFeeling = prompt("So " + userName + " how are your feeling?");
var companyName = ("EntWorks Design");

// Displaying Time, Day of week, and Date
// Today is 3:53pm on Wednesday, 3 November, 2027

var todayDate = new Date();
var currentTime = (todayDate.getHours() + ":" + todayDate.getMinutes());

// Creating an Array with each of the months
var months = ["January ", "Febuary ", "March ", "April ", "May ", "June ", "July", "August ", "September ", "October ", "November ", "December "];

var introDate = ("<h3>Today is " + currentTime + " on " + todayDate.getDay() + ", " + todayDate.getDate() + " " + months[todayDate.getMonth()] + ", " + todayDate.getFullYear() + "<br>");
var introWelcome = (companyName + " weclome you, " + userName + "! <br> We are glad you are doing " + userFeeling + "!");


function intro() {
    document.getElementById('introDate').innerHTML = introDate;
    document.getElementById('introWelcome').innerHTML = introWelcome;
}

//document.write(introDate);
//document.write(introWelcome);


//five different basic functions [Noice Monkey]

// 1 - Random Meme
// 2 - Bannana Calulator
// 3 - Sign Up for Daily Meme Newsletter

function memeNewsletter() {
    var userEmail = prompt("Please enter your email below to get updated with the newest memes on the market!");
    alert("Thank you for signing up! We will send " + userEmail + " updates from Ent Design");
}

function memePhonenumber() {
    var userPhoneNum = prompt("Please enter your phone number below to get updated with the newest memes on the market!");
    alert("Thank you for signing up! We will send " + userPhoneNum + " text with updates from Ent Design");
}

function bananaCalAdd() {
    var bananaOne = prompt("Please enter an amount of bananas");
    var bananaTwo = prompt("Please enter an amount of bananas again");
    var totalbanana = bananaOne + bananaTwo;
    alert("The Total Number of banana you have is: " + totalbanana);
}

function bananaCalSub() {
    var bananaOne = prompt("Please enter an amount of bananas");
    var bananaTwo = prompt("Please enter an amount of bananas again");
    var totalbanana = bananaOne - bananaTwo;
    alert("The Total Number of banana you have is: " + totalbanana);
}

function memeFax() {
    var userFax = prompt("Please enter your Fax number below to get updated with the newest memes on the market!");
    alert("Thank you for signing up! We will send a " + userFax + " swith updates from Ent Design");
}