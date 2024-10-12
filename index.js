
// // ============================================Chapter 1======================================
// // 1.Alert Chapter
// // What does the alert function do in JavaScript?
// // Write the code to display an alert with the message "Welcome to my website!".
// // What happens if you capitalize the alert keyword?
// // Write the correct JavaScript syntax to display "Hello, world!" in an alert box.
// // Write a JavaScript alert statement with proper formatting and explain each part of the
// // code.

// alert("Welcome to my website!");
// alert("Hello, world!");
// alert("This is an alert box!");


// // ===================================Chapter 2======================================
// // 2.Variables for Strings
// // Write code that declares a variable message, assigns the value "Hello, world!" to
// // it, and then displays an alert with that message
// // Declare a variable named age, leave it undefined, then assign the value 25 to it in a
// // later statement. Display an alert showing the value of age.
// // Declare a variable named greeting, assign it the value "Good morning!", and then
// // display it in an alert. Afterwards, change the value of greeting to "Good evening!"
// // and display the new value in another alert.
// // Create a variable called favoriteColor and assign it the value "blue". Then display
// // an alert that says "My favorite color is blue" using the variable.
// // Declare a variable named age, leave it undefined, then assign the value 25 to it in a
// // later statement. Display an alert showing the value of age.
// var message = "Hello, world!";
// alert(message);

// var age;  // Declare the variable but don't assign a value (undefined)
// age = 25; // Assign the value 25 later
// alert(age);

// var greeting = "Good morning!";
// alert(greeting);

// greeting = "Good evening!";
// alert(greeting);

// var favoriteColor = "blue";
// alert("My favorite color is " + favoriteColor);

// var age;
// age = 25;
// alert(age);

// // ===================================Chapter 3======================================
// // 3.Variables for Numbers
// // Declare a variable height and assign the value 170 to it. Then, add 10 to height and
// // store the result in a new variable newHeight. Display an alert with the new value.
// // Declare two variables, num1 and num2, and assign them values of 50 and 30, respectively.
// // Create a new variable sum that stores the sum of num1 and num2, and display the sum in an
// // alert.
// // Declare a variable numToBeAdded with the value 20. Then use the following code:Display
// // total in an alert. What is the value of total?
// // Declare a variable price with the value 120. Now add tax (10%) to price and display the total
// // price in an alert

// var height = 170;
// var newHeight = height + 10;
// alert(newHeight);

// var num1 = 50;
// var num2 = 30;
// var sum = num1 + num2;
// alert(sum);

// var total = numToBeAdded + 30;

// var numToBeAdded = 20;
// var total = numToBeAdded + 30;
// alert(total);

// var price = 120;
// var tax = price * 0.10; // 10% tax
// var totalPrice = price + tax;
// alert(totalPrice);


// // ===================================Chapter 4======================================
// // 4.Variables for Numbers
// // Write code to create a variable myAddress and assign it your city name. Ensure your variable
// // name follows camelCase naming convention, and then display the value in an alert.
// // Write code to declare three variables using camelCase: userName, userEmail, and
// // userPassword. Assign them appropriate string values and display them together in an alert.
// // Declare a variable userAddress that contains spaces (i.e., try naming it like user address)
// // and observe what happens. Then correct the name using camelCase and display the value in
// // an alert.
// // Create a variable rose and assign it a value "Floribundas". Then, try accessing the variable
// // using Rose (uppercase) and see what happens. Display both results.

// var myAddress = "YourCityName";
// alert(myAddress);

// var userName = "John Doe";
// var userEmail = "john.doe@example.com";
// var userPassword = "securePassword123";

// alert("Name: " + userName + "\nEmail: " + userEmail + "\nPassword: " + userPassword);


// var user address = "123 Main St";  // This will throw an error!

// var userAddress = "123 Main St";
// alert(userAddress);

// var rose = "Floribundas";
// alert(rose);  // This will display "Floribundas"

// alert(Rose);  // This will throw a ReferenceError because 'Rose' is undefined


// // ===================================Chapter 5======================================
// // 5.Math expressions: Familiar operators
// // Write a JavaScript statement that adds two numbers, 25 and 30, and assigns the result
// // to a variable called sum. Then display the value in an alert.
// // Create a variable num1 and assign it the value 25. Create another variable num2 and assign it
// // the value 5. Add both variables and store the result in a new variable called sum. Display the
// // result in an alert.
// // Write a statement that assigns the remainder of 27 divided by 4 to a variable called
// // modulusResult. Then display the value in an alert.

// var sum = 25 + 30;
// alert(sum);

// var num1 = 25;
// var num2 = 5;
// var sum = num1 + num2;
// alert(sum);

// var modulusResult = 27 % 4;
// alert(modulusResult);

// // ===================================Chapter 6======================================
// // 6.Math expressions: Unfamiliar operators
// // Initialize a variable num with the value 3. Use the post-increment (num++) operator and
// // assign the result to a new variable newNum. Display both num and newNum in alerts.
// // Write a program that initializes a variable counter with the value 10. Use counter++
// // twice in your code, then display the final value of counter in an alert.
// // Initialize a variable points with the value 20. Use the post-decrement operator
// // (points--) and the pre-increment operator (++points) in separate statements.
// // Display the final value of points in an alert.
// // Write a program that initializes a variable number with the value 0, uses ++number
// // three times in your code, and then displays the final value of number in an alert.

// var num = 3;
// var newNum = num++; // Post-increment: newNum gets the original value of num (3), then num becomes 4

// alert(num);    // Displays 4
// alert(newNum); // Displays 3

// var counter = 10;
// counter++; // counter becomes 11
// counter++; // counter becomes 12

// alert(counter); // Displays 12

// var points = 20;

// points--;    // Post-decrement: points becomes 19
// ++points;    // Pre-increment: points becomes 20

// alert(points); // Displays 20

// var number = 0;

// ++number; // number becomes 1
// ++number; // number becomes 2
// ++number; // number becomes 3

// alert(number); // Displays 3

// // ===================================Chapter 7======================================
// // 7.Math expressions: Eliminating ambiguity
// // Combine parentheses and the modulus operator % to first calculate the remainder of 20 % 6
// // before performing the other arithmetic operations. What is the value of calculation?
// // Write an expression that calculates (6 + 2) * (5 - 3), and determine the value of
// // expressionValue.
// // What is the value of finalTotal in the following expression, and how does operator
// // precedence apply here?
// // Evaluate the value of answer and determine how JavaScript processes the following
// // expression:

// var calculation = (20 % 6) + 4 * 2; // Here, 20 % 6 is calculated first

// var expressionValue = (6 + 2) * (5 - 3);

// var finalTotal = 5 + 10 * 2 - 4 / 2;

// var answer = 4 + 3 * (2 - 1) + 5;


// // ===================================Chapter 8======================================
// // 8.Prompts
// // Write a script that asks the user, "What is your name?" and stores the answer in a
// // variable userName. Then, display an alert that says "Hello, [userName]!".
// // Create a prompt that asks the user, "How old are you?" and assigns the response to a variable
// // age. Display an alert that says "You are [age] years old." Handle the case where the user clicks
// // "Cancel" by displaying "No age provided" in the alert.
// // Write a prompt asking, "How many pets do you have?" and assign the response to a variable
// // pets. If the user enters nothing and clicks "OK", display an alert saying "You didn't enter
// // anything."
// // Write a script that asks the user "Enter a number between 1 and 10". Convert the user input to a
// // number, then multiply it by 2 and display the result in an alert.
// // Write a prompt that asks the user, "What is your favorite number?" and assigns the response to
// // a variable favNum. If the user does not provide a response and clicks "OK", assign a default
// // value of 7 to favNum and display it in an alert.

// var userName = prompt("What is your name?");
// alert("Hello, " + userName + "!");

// var age = prompt("How old are you?");
// if (age === null) {
//     alert("No age provided");
// } else {
//     alert("You are " + age + " years old.");
// }

// var pets = prompt("How many pets do you have?");
// if (pets === "") {
//     alert("You didn't enter anything.");
// } else {
//     alert("You have " + pets + " pets.");
// }

// var input = prompt("Enter a number between 1 and 10");
// var number = Number(input); // Convert user input to a number
// var result = number * 2;
// alert("The result is " + result);

// var favNum = prompt("What is your favorite number?");
// if (favNum === "") {
//     favNum = 7; // Assign default value if input is empty
// }
// alert("Your favorite number is " + favNum + ".");


// // ===================================Chapter 9======================================   
// // 9.if statements
// // Prompt and If Statement: Write a script that asks the user "What is the capital of France?" If
// // the user answers "Paris", display an alert with "Correct!" Otherwise, display an alert with "Try
// // again!"
// // If-Else Statement: Modify the previous script to use an else statement. If the user's answer is
// // correct, display "Correct!", otherwise display "Incorrect, the correct answer is Paris."
// // Multiple Correct Answers: Write a program that asks the user, "What is the capital of the
// // United Kingdom?" If they answer "London" or "The United Kingdom", display "Correct!". Use an
// // if-else condition to check both possible answers.
// // Incrementing a Score: Modify a script to keep track of a score. Start with a score of 0. Every
// // time the user answers a question correctly, increment the score by 1 and display the updated
// // score.
// // Testing Multiple Variables: Write a script that asks the user two questions: "What is the capital
// // of Germany?" and "What is 10 + 10?" If both answers are correct ("Berlin" and 20), display "You
// // got both right!". If only one answer is correct, display "You got one correct!".

// var capitalFrance = prompt("What is the capital of France?");
// if (capitalFrance === "Paris") {
//     alert("Correct!");
// } else {
//     alert("Try again!");
// }

// var capitalFrance = prompt("What is the capital of France?");
// if (capitalFrance === "Paris") {
//     alert("Correct!");
// } else {
//     alert("Incorrect, the correct answer is Paris.");
// }

// var capitalUK = prompt("What is the capital of the United Kingdom?");
// if (capitalUK === "London" || capitalUK === "The United Kingdom") {
//     alert("Correct!");
// } else {
//     alert("Incorrect. The correct answer is London.");
// }

// var score = 0; // Initialize score

// var capitalUK = prompt("What is the capital of the United Kingdom?");
// if (capitalUK === "London" || capitalUK === "The United Kingdom") {
//     score++; // Increment score by 1
//     alert("Correct! Your score is: " + score);
// } else {
//     alert("Incorrect. The correct answer is London. Your score is: " + score);
// }

// var capitalGermany = prompt("What is the capital of Germany?");
// var mathQuestion = prompt("What is 10 + 10?");

// var correctCapital = (capitalGermany === "Berlin");
// var correctMath = (Number(mathQuestion) === 20);

// if (correctCapital && correctMath) {
//     alert("You got both right!");
// } else if (correctCapital || correctMath) {
//     alert("You got one correct!");
// } else {
//     alert("You got both wrong. The correct answers are Berlin and 20.");
// }

