const lesson = [
{
lessonNumber: 1,
title: "Primitive and Reference Variables",
goal: "Declare and use primitive and reference variables correctly in Java",
concept: "A variable is a reusable container for a value. In Java, variables are divided into primitive and reference types.\n\nPrimitive types store simple values directly in memory, while reference types store memory addresses that point to objects.\n\nPrimitive examples:\nint age = 21;\ndouble price = 19.99;\nchar grade = 'A';\nboolean isStudent = true;\n\nReference example:\nString car = \"Mustang\";\n\nExample Output:\nYour choice is a red 2025 Mustang\nThe price is: $19.99",
starterCode: "public class Main {\n    public static void main(String[] args) {\n        // TODO: Declare an int variable named year and assign a value\n\n        // TODO: Declare a double variable named price and assign a value\n\n        // TODO: Declare a char variable named currency and assign a value\n\n        // TODO: Declare a boolean variable named forSale and assign a value\n\n        // TODO: Declare String variables named car and color\n\n        // TODO: Print car details and price\n\n        // TODO: Use if-else to check if the car is for sale\n    }\n}",
expectedOutput: "Your choice is a red 2025 Mustang\nThe price is: $19.99\nThe Mustang is not for sale",
commonMistakes: [
"Using double quotes instead of single quotes for char values",
"Forgetting to initialize variables",
"Using incorrect data types",
"Missing semicolons"
],
difficulty: "easy"
},
{
lessonNumber: 2,
title: "User Input with Scanner",
goal: "Read different types of user input using the Scanner class in Java",
concept: "The Scanner class in Java is used to take input from the user through the console. It can read different data types such as String, int, double, and boolean.\n\nCommon Scanner methods:\nnextLine() → reads a String\nnextInt() → reads an integer\nnextDouble() → reads a decimal number\nnextBoolean() → reads true or false\n\nExample:\nScanner scanner = new Scanner(System.in);\nString name = scanner.nextLine();\nint age = scanner.nextInt();\ndouble gpa = scanner.nextDouble();\nboolean isStudent = scanner.nextBoolean();\n\nUsing conditional statements, programs can respond differently based on user input.",
starterCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n\n        Scanner scanner = new Scanner(System.in);\n\n        // TODO: Ask the user to enter their name and store it in a String\n\n        // TODO: Ask the user to enter their age and store it in an int\n\n        // TODO: Ask the user to enter their gpa and store it in a double\n\n        // TODO: Ask the user if they are a student and store it in a boolean\n\n        // TODO: Print the collected information\n\n        // TODO: Use an if-else statement to check if the user is a student\n\n        scanner.close();\n    }\n}",
expectedOutput: "Enter your name:\nJohn\nEnter your age:\n21\nWhat is your gpa:\n3.5\nAre you a student? (true/false):\ntrue\nHello John\nYou are 21 years old\nYour gpa is: 3.5\nYou are enrolled in classes",
commonMistakes: [
"Forgetting to import java.util.Scanner",
"Using nextLine() after nextInt() without clearing the buffer",
"Entering the wrong data type for input",
"Forgetting to close the Scanner",
"Missing semicolons"
  ],
  difficulty: "easy"
},
{
lessonNumber: 3,
title: "Arithmetic Operators in Java",
goal: "Use arithmetic operators to perform mathematical calculations in Java",
concept: "Arithmetic operators are used to perform basic mathematical operations on numeric variables in Java.\n\nCommon arithmetic operators:\n+  Addition\n-  Subtraction\n*  Multiplication\n/  Division\n%  Modulus (remainder)\n\nExample:\nint x = 10;\nint y = 2;\nint z;\n\nz = x + y;\nz = x - y;\nz = x * y;\nz = x / y;\nz = x % y;\n\nThe final value assigned to z is printed to the console.",
starterCode: "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Declare two integer variables x and y\n\n        // TODO: Declare an integer variable z\n\n        // TODO: Perform addition, subtraction, multiplication, division, and modulus using x and y\n\n        // TODO: Print the value of z\n\n    }\n}",
expectedOutput: "0",
commonMistakes: [
"Forgetting that division between integers removes the decimal part",
"Overwriting variable values without printing intermediate results",
"Using the wrong operator for the calculation",
"Missing semicolons"
],
difficulty: "easy"
},
{
lessonNumber: 4,
title: "Basic User Input and Conditions",
goal: "Take simple user input and use basic conditional statements in Java",
concept: "In Java, the Scanner class is used to take input from the user. Conditional statements help the program make decisions based on that input.\n\nThis lesson focuses on simple input handling and basic if-else logic.\n\nKey ideas:\n- nextLine() is used to read text\n- nextInt() is used to read numbers\n- nextBoolean() is used to read true or false\n- if and else statements help control program flow\n\nExample:\nString name = scanner.nextLine();\nint age = scanner.nextInt();\nboolean isStudent = scanner.nextBoolean();\n\nThe program can respond differently depending on the values entered by the user.",
starterCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n\n        Scanner scanner = new Scanner(System.in);\n\n        // TODO: Ask the user for their name\n\n        // TODO: Ask the user for their age\n\n        // TODO: Ask the user if they are a student (true/false)\n\n        // TODO: Check if the name is empty and respond accordingly\n\n        // TODO: Use if-else to check if age is 18 or above\n\n        // TODO: Check if the user is a student\n\n        scanner.close();\n    }\n}",
expectedOutput: "Enter your name:\nJohn\nEnter your age:\n20\nAre you a student? (true/false):\ntrue\nHello John\nYou are an adult\nYou are a student",
commonMistakes: [
"Forgetting to import java.util.Scanner",
"Entering the wrong input type",
"Not handling empty input",
"Forgetting to close the Scanner",
"Missing semicolons"
],
difficulty: "easy"
},
{
lessonNumber: 5,
title: "Random Numbers and Booleans",
goal: "Generate random numbers and boolean values using the Random class in Java",
concept: "The Random class in Java is used to generate random values. It can produce random integers, booleans, and other data types.\n\nTo use it, you must import java.util.Random and create a Random object.\n\nCommon Random methods:\nnextInt(min, max) → generates a random integer between min (inclusive) and max (exclusive)\nnextBoolean() → generates either true or false randomly\n\nExample:\nRandom random = new Random();\nint number = random.nextInt(1, 7);\nboolean isHeads = random.nextBoolean();\n\nThis allows programs to simulate things like dice rolls or coin flips.\n\nIf the boolean value is true, the program prints HEADS, otherwise it prints TAILS.",
starterCode: "import java.util.Random;\n\npublic class Main {\n    public static void main(String[] args) {\n\n        Random random = new Random();\n\n        // TODO: Declare an int variable named number\n\n        // TODO: Declare a boolean variable named isHeads\n\n        // TODO: Generate a random number between 1 and 6\n\n        // TODO: Generate a random true or false value\n\n        // TODO: Print the random number\n\n        // TODO: Use if-else to print HEADS or TAILS\n\n    }\n}",
expectedOutput: "4\nHEADS",
commonMistakes: [
"Forgetting to import java.util.Random",
"Using incorrect bounds in nextInt()",
"Assuming nextInt(max) includes the max value",
"Confusing random booleans with user input",
"Missing semicolons"
],
difficulty: "easy"
},
{
lessonNumber: 6,
title: "Math Class Methods in Java",
goal: "Use the Math class to perform calculations such as powers, roots, rounding, and geometry formulas",
concept: "The Math class in Java provides built-in methods for performing common mathematical operations. These methods are static, so they can be used directly with the Math class name.\n\nCommon Math constants:\nMath.PI → value of π\nMath.E → Euler’s number\n\nCommon Math methods:\nMath.pow(a, b) → raises a to the power of b\nMath.abs(x) → absolute value\nMath.sqrt(x) → square root\nMath.round(x) → rounds to nearest integer\nMath.ceil(x) → rounds up\nMath.floor(x) → rounds down\nMath.max(a, b) → larger value\nMath.min(a, b) → smaller value\n\nThe Math class can also be used in real-world problems such as calculating a triangle’s hypotenuse and finding the circumference, area, and volume of a circle or sphere.",
starterCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n\n        // TODO: Print the values of Math.PI and Math.E\n\n        // TODO: Declare a double variable named result\n\n        // TODO: Use Math methods (pow, abs, sqrt, round, ceil, floor, max, min)\n\n        Scanner scanner = new Scanner(System.in);\n\n        // TODO: Ask the user for side A and side B of a right triangle\n\n        // TODO: Calculate the hypotenuse using Math.sqrt and Math.pow\n\n        // TODO: Ask the user for a radius\n\n        // TODO: Calculate circumference, area, and volume using Math.PI\n\n        // TODO: Print all results\n\n        scanner.close();\n    }\n}",
expectedOutput: "3.141592653589793\n2.718281828459045\n20.0\nEnter the length of side A:\n3\nEnter the length of side B:\n4\nThe hypotenuse is: 5.0cm\nEnter the radius:\n5\nThe circumference is: 31.4cm\nThe area is: 78.5cm²\nThe volume is: 523.6cm³",
commonMistakes: [
"Forgetting that Math methods are static",
"Using integer division instead of double division",
"Forgetting to import java.util.Scanner",
"Overwriting variable values without printing them",
"Incorrect use of Math.pow or Math.sqrt"
],
difficulty: "easy"
},
{
lessonNumber: 7,
title: "Formatted Output using printf()",
goal: "Format output using printf() with specifiers, precision, flags, and width in Java",
concept: "The printf() method in Java is used to display formatted output. It allows precise control over how values are displayed using format specifiers.\n\nFormat structure:\n%[flags][width][.precision][specifier]\n\nCommon specifiers:\n%s → String\n%c → char\n%d → integer\n%f → floating-point number\n%b → boolean\n\nPrecision:\nControls the number of digits after the decimal point for floating numbers.\nExample: %.2f\n\nFlags:\n+  shows plus sign for positive numbers\n,  adds comma separators\n(  encloses negative numbers in parentheses\n(space) adds space for positive numbers\n\nWidth:\nControls spacing and alignment.\n0 pads with zeros\npositive number → right justified\nnegative number → left justified\n\nUsing printf() makes console output cleaner and more readable.",
starterCode: "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Declare variables for name, firstLetter, age, height, and isEmployed\n\n        // TODO: Print the values using printf() with correct format specifiers\n\n        // TODO: Declare three double variables for prices\n\n        // TODO: Print prices using precision formatting\n\n        // TODO: Declare integer variables for IDs\n\n        // TODO: Print IDs using width and zero padding\n\n    }\n}",
expectedOutput: "Hello Spongebob\nYour name starts with a S\nYou are 30 years old\nYou are 60.500000 inches tall\nEmployed: true\nSpongebob is 30 years old\n9.990\n100.150\n-54.010\n9.990000\n100.150000\n-54.010000\nid: 0001\nid: 0023\nid: 0456\nid: 7890",
commonMistakes: [
"Using the wrong format specifier",
"Forgetting the % symbol",
"Mismatch between specifiers and variables",
"Incorrect precision values",
"Forgetting new line characters"
],
difficulty: "easy"
},
{
lessonNumber: 8,
title: "Nested If Statements",
goal: "Use nested if statements to apply simple discount logic in Java",
concept: "Nested if statements are used when one condition depends on another condition. This allows programs to make more detailed decisions step by step.\n\nIn this lesson, discounts are applied based on whether a person is a student, a senior, or both.\n\nIf the user is a student and a senior, both discounts are applied.\nIf the user is only a student, a student discount is applied.\nIf the user is only a senior, a senior discount is applied.\nIf the user is neither, no discount is applied.\n\nThis helps demonstrate how conditions can be checked inside other conditions.",
starterCode: "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Declare boolean variables isStudent and isSenior\n\n        // TODO: Declare a double variable price and assign a value\n\n        // TODO: Use nested if statements to apply discounts\n\n        // TODO: Print the final ticket price using printf()\n\n    }\n}",
expectedOutput: "You get a senior discount of 20%\nYou get a student discount of 10%\nThe price of a ticket is: $6.99",
commonMistakes: [
"Confusing nested if statements with else-if",
"Forgetting to update the price after applying a discount",
"Incorrect discount percentage calculations",
"Missing curly braces",
"Incorrect use of printf formatting"
],
difficulty: "easy"
},
{
  lessonNumber: 9,
  title: "String Methods in Java",
  goal: "Use basic String methods to manipulate and check text in Java",
  concept: "Strings in Java come with many built-in methods that help manipulate and examine text.\n\nCommon String methods:\nlength() → returns the number of characters\ncharAt(index) → returns the character at a position\nindexOf(text) → finds the position of text\nlastIndexOf(text) → finds the last occurrence\ntoUpperCase() → converts text to uppercase\ntoLowerCase() → converts text to lowercase\ntrim() → removes extra spaces\nreplace(old, new) → replaces characters\nisEmpty() → checks if the string is empty\ncontains(text) → checks if text exists\nequalsIgnoreCase(text) → compares text ignoring case\n\nThese methods help programs validate input and format text properly.",
  starterCode: "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Declare a String variable named name\n\n        // TODO: Use String methods like length(), charAt(), and indexOf()\n\n        // TODO: Modify the string using toUpperCase(), toLowerCase(), trim(), and replace()\n\n        // TODO: Check if the string is empty\n\n        // TODO: Check if the string contains a space\n\n        // TODO: Check if the string matches a restricted word\n\n    }\n}",
  expectedOutput: "Hello bra cade\nYour name DOESN'T contain any spaces\nHello bra cade",
  commonMistakes: [
    "Forgetting that String methods return new values",
    "Using == instead of equals() for comparison",
    "Incorrect index values in charAt()",
    "Not storing the updated string after modification",
    "Ignoring case sensitivity when comparing strings"
  ],
  difficulty: "easy"
},
{
  lessonNumber: 10,
  title: "Extracting Text using substring()",
  goal: "Use substring() and indexOf() to split an email into username and domain",
  concept: "The substring() method is used to extract part of a string.\n\nSyntax:\nsubstring(startIndex, endIndex)\nsubstring(startIndex)\n\nThe indexOf() method is used to find the position of a character or text inside a string.\n\nIn this lesson, the email is split into two parts:\n- Username → before the @ symbol\n- Domain → after the @ symbol\n\nBefore splitting, the program checks if the email contains @ to avoid errors.",
  starterCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n\n        Scanner scanner = new Scanner(System.in);\n\n        // TODO: Declare String variables email, username, and domain\n\n        // TODO: Ask the user to enter an email address\n\n        // TODO: Check if the email contains '@'\n\n        // TODO: Use substring() and indexOf() to extract username and domain\n\n        // TODO: Print the username and domain\n\n        scanner.close();\n    }\n}",
  expectedOutput: "Enter your email:\njohn@gmail.com\njohn\ngmail.com",
  commonMistakes: [
    "Forgetting to check if '@' exists before using substring",
    "Using wrong index values in substring",
    "Off-by-one error when extracting the domain",
    "Forgetting to import Scanner",
    "Not closing the Scanner"
  ],
  difficulty: "easy"
},
{
  lessonNumber: 11,
  title: "Weight Conversion Program",
  goal: "Use conditional statements to convert weight between pounds and kilograms",
  concept: "Conditional statements allow a program to make decisions based on user input. In this lesson, the user chooses how they want to convert weight.\n\nThe program gives two options:\n1 → Convert pounds (lbs) to kilograms (kgs)\n2 → Convert kilograms (kgs) to pounds (lbs)\n\nBased on the user's choice, the appropriate formula is applied:\n1 lb = 0.453592 kg\n1 kg = 2.20462 lbs\n\nIf the user enters an invalid option, an error message is displayed.",
  starterCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n\n        Scanner scanner = new Scanner(System.in);\n\n        // TODO: Declare variables for weight, newWeight, and choice\n\n        // TODO: Display conversion options to the user\n\n        // TODO: Ask the user to choose an option\n\n        // TODO: Use if-else-if to perform the correct conversion\n\n        // TODO: Handle invalid choices\n\n        scanner.close();\n    }\n}",
  expectedOutput: "Weight Conversion Program\n1: Convert lbs to kgs\n2: Convert kgs to lbs\nChoose an option:\n1\nEnter the weight in lbs:\n150\nThe new weight in kgs is: 68.04",
  commonMistakes: [
    "Using the wrong conversion formula",
    "Forgetting to read user input with Scanner",
    "Not handling invalid menu choices",
    "Incorrect use of printf formatting",
    "Forgetting to close the Scanner"
  ],
  difficulty: "easy"
},
{
  lessonNumber: 12,
  title: "Ternary Operator",
  goal: "Use the ternary operator to choose between two values in Java",
  concept: "The ternary operator is a short way to write simple if-else statements. It checks a condition and returns one of two values.\n\nSyntax:\nvariable = (condition) ? valueIfTrue : valueIfFalse;\n\nIn this lesson, the ternary operator is used to check whether a number is even or odd.\n\nIf the number is divisible by 2, the result is EVEN. Otherwise, the result is ODD.",
  starterCode: "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Declare an int variable named number\n\n        // TODO: Use the ternary operator to check if the number is even or odd\n\n        // TODO: Store the result in a String variable\n\n        // TODO: Print the result\n\n    }\n}",
  expectedOutput: "EVEN",
  commonMistakes: [
    "Forgetting to store the result of the ternary operator",
    "Using assignment instead of comparison in the condition",
    "Making the condition too complex",
    "Forgetting to print the result",
    "Missing semicolons"
  ],
  difficulty: "easy"
},
{
  lessonNumber: 13,
  title: "Temperature Converter using Ternary Operator",
  goal: "Convert temperatures between Celsius and Fahrenheit using user input and the ternary operator",
  concept: "This program converts temperature values using simple formulas and the ternary operator.\n\nThe user enters a temperature and chooses the unit to convert to:\nC → Celsius\nF → Fahrenheit\n\nThe ternary operator is used to decide which formula to apply:\n(condition) ? valueIfTrue : valueIfFalse\n\nFormulas used:\nF to C → (temp - 32) × 5 / 9\nC to F → (temp × 9 / 5) + 32\n\nUsing toUpperCase() ensures the program works even if the user enters lowercase letters.",
  starterCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n\n        Scanner scanner = new Scanner(System.in);\n\n        // TODO: Declare variables for temperature, new temperature, and unit\n\n        // TODO: Ask the user to enter a temperature\n\n        // TODO: Ask the user to choose C or F\n\n        // TODO: Use the ternary operator to convert the temperature\n\n        // TODO: Print the converted temperature\n\n        scanner.close();\n    }\n}",
  expectedOutput: "Enter the temperature:\n100\nConvert to Celsius or Fahrenheit? (C or F):\nC\n37.8°C",
  commonMistakes: [
    "Using the wrong conversion formula",
    "Forgetting to convert unit input to uppercase",
    "Confusing Celsius and Fahrenheit calculations",
    "Incorrect use of the ternary operator",
    "Forgetting to close the Scanner"
  ],
  difficulty: "easy"
},
{
  lessonNumber: 14,
  title: "Switch Statement with Days of the Week",
  goal: "Use a switch statement to check whether a day is a weekday or weekend",
  concept: "The switch statement is used to compare one value against multiple possible cases. It is a clean alternative to using many if-else statements.\n\nIn this lesson, the user enters a day of the week. The program checks whether the day is a weekday or a weekend.\n\nWeekdays:\nMonday, Tuesday, Wednesday, Thursday, Friday\n\nWeekend:\nSaturday, Sunday\n\nThe default case is used to handle invalid input.",
  starterCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n\n        Scanner scanner = new Scanner(System.in);\n\n        // TODO: Ask the user to enter a day of the week\n\n        // TODO: Use a switch statement to check weekday or weekend\n\n        // TODO: Handle invalid day input using default case\n\n        scanner.close();\n    }\n}",
  expectedOutput: "Enter a day of the week:\nSaturday\nIt is the weekend",
  commonMistakes: [
    "Forgetting to use break statements in switch cases",
    "Not converting input to lowercase or uppercase",
    "Misspelling day names",
    "Forgetting the default case",
    "Forgetting to close the Scanner"
  ],
  difficulty: "easy"
},
{
  lessonNumber: 15,
  title: "Logical Operators in Java",
  goal: "Use logical operators to evaluate simple weather conditions",
  concept: "Logical operators are used to combine or modify conditions in Java.\n\nCommon logical operators:\n&&  AND → true if both conditions are true\n||  OR → true if at least one condition is true\n!   NOT → reverses the condition\n\nIn this lesson, temperature and weather conditions are checked using logical operators to decide what message to display.\n\nLogical operators are commonly used in decision-making scenarios such as weather checks, user validation, and game logic.",
  starterCode: "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Declare a double variable for temperature\n\n        // TODO: Declare a boolean variable to indicate if it is sunny\n\n        // TODO: Use logical operators (&&, ||, !) to evaluate weather conditions\n\n        // TODO: Print appropriate weather messages\n\n    }\n}",
  expectedOutput: "It is warm and sunny\nGreat day to go outside",
  commonMistakes: [
    "Confusing && with ||",
    "Forgetting to use parentheses in conditions",
    "Using = instead of == in comparisons",
    "Not handling all possible conditions",
    "Missing semicolons"
  ],
  difficulty: "easy"
},
{
  lessonNumber: 16,
  title: "While Loops in Java",
  goal: "Use while loops to repeat actions until a condition is met",
  concept: "A while loop is used when you want to repeat code as long as a condition remains true.\n\nSyntax:\nwhile(condition){\n    // code runs repeatedly\n}\n\nIn this lesson, while loops are used in two simple examples:\n\nExample 1:\nThe program keeps asking the user to enter their name until the input is not empty.\n\nExample 2:\nThe program keeps running until the user enters the letter Q to quit.\n\nWhile loops are useful when the number of repetitions is not known in advance.",
  starterCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n\n        Scanner scanner = new Scanner(System.in);\n\n        // TODO: Create a String variable for name\n\n        // TODO: Use a while loop to keep asking for the name until it is not empty\n\n        // TODO: Print a greeting with the name\n\n        // TODO: Create a String variable for response\n\n        // TODO: Use a while loop to keep asking the user to press Q to quit\n\n        scanner.close();\n    }\n}",
  expectedOutput: "Enter your name:\nAlex\nHello Alex\nPress Q to quit:\nQ\nYou have quit",
  commonMistakes: [
    "Forgetting to update the variable inside the while loop",
    "Creating an infinite loop by mistake",
    "Using == instead of equals() for String comparison",
    "Forgetting to convert input to uppercase",
    "Not closing the Scanner"
  ],
  difficulty: "easy"
},
{
  lessonNumber: 17,
  title: "Number Guessing Game with do-while Loop",
  goal: "Use a do-while loop to build a simple number guessing game in Java",
  concept: "A do-while loop is similar to a while loop, but it always runs at least once.\n\nSyntax:\ndo{\n    // code runs\n}while(condition);\n\nIn this lesson, a random number is generated within a range. The user keeps guessing until the correct number is entered.\n\nAfter each guess, the program tells the user if the guess is too high or too low. When the correct number is guessed, the total number of attempts is displayed.",
  starterCode: "import java.util.Random;\nimport java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args){\n\n        Random random = new Random();\n        Scanner scanner = new Scanner(System.in);\n\n        // TODO: Declare variables for guess, attempts, min, and max\n\n        // TODO: Generate a random number within the range\n\n        // TODO: Use a do-while loop to keep asking for guesses\n\n        // TODO: Give feedback for too low, too high, or correct guesses\n\n        // TODO: Display total number of attempts when guessed correctly\n\n        scanner.close();\n    }\n}",
  expectedOutput: "Guess a number between 1 and 10:\n5\nToo low\nGuess a number between 1 and 10:\n8\nToo high\nGuess a number between 1 and 10:\n7\nCorrect!\nAttempts: 3",
  commonMistakes: [
    "Forgetting to increment the attempts counter",
    "Not using a do-while loop correctly",
    "Giving incorrect feedback for guesses",
    "Using wrong random number bounds",
    "Forgetting to close the Scanner"
  ],
  difficulty: "easy"
},
{
  lessonNumber: 18,
  title: "Countdown Timer using for Loop",
  goal: "Use a for loop to create a simple countdown timer",
  concept: "A for loop is used when the number of repetitions is known. In this lesson, the program counts down from a number entered by the user.\n\nThread.sleep() is used to pause the program for a short time so the countdown feels realistic.\n\nThe countdown starts from the given number, decreases by 1 each time, and ends with a final message.",
  starterCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n\n        Scanner scanner = new Scanner(System.in);\n\n        int seconds;\n\n        // TODO: Ask the user how many seconds to count down from\n\n        // TODO: Use a for loop to count down from seconds to 1\n\n        // TODO: Inside the loop, print the current number\n\n        // TODO: Use Thread.sleep(1000) inside a try-catch block\n\n        // TODO: Print a message when the countdown finishes\n\n        scanner.close();\n    }\n}",
  expectedOutput: "Enter the countdown time:\n3\n3\n2\n1\nTime's up!",
  commonMistakes: [
    "Forgetting to use a try-catch block with Thread.sleep()",
    "Incorrect for loop condition",
    "Counting in the wrong direction",
    "Placing Thread.sleep() outside the loop",
    "Forgetting to close the Scanner"
  ],
  difficulty: "easy"
},
{
  lessonNumber: 19,
  title: "Break and Continue Statements",
  goal: "Use break and continue to control loop execution in Java",
  concept: "The break and continue statements are used to control the flow of loops in Java.\n\nbreak:\nStops the loop completely and exits it.\n\ncontinue:\nSkips the current loop iteration and moves to the next one.\n\nThese statements are useful when you want to stop a loop early or skip certain values without ending the loop.\n\nIn this lesson, break is used to stop a loop when a specific number is reached, and continue is used to skip a number.",
  starterCode: "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Use a for loop from 1 to 10\n\n        // TODO: Use continue to skip printing number 5\n\n        // TODO: Use break to stop the loop when number reaches 8\n\n        // TODO: Print each number\n\n    }\n}",
  expectedOutput: "1\n2\n3\n4\n6\n7",
  commonMistakes: [
    "Using break when continue is needed",
    "Placing break or continue outside a loop",
    "Forgetting to update loop variables",
    "Misunderstanding loop flow",
    "Missing curly braces"
  ],
  difficulty: "easy"
},
{
  lessonNumber: 20,
  title: "Printing a Rectangle using Nested Loops",
  goal: "Use nested loops to print a simple rectangle pattern in Java",
  concept: "Nested loops are loops inside another loop. The outer loop controls the rows, and the inner loop controls the columns.\n\nIn this lesson, a rectangle pattern is printed using a symbol. Each row prints the same number of symbols, and the process repeats for the required number of rows.\n\nNested loops are commonly used for pattern printing and working with grids.",
  starterCode: "public class Main {\n    public static void main(String[] args){\n\n        int rows = 3;\n        int columns = 5;\n        char symbol = '*';\n\n        // TODO: Use a nested loop to print a rectangle\n\n    }\n}",
  expectedOutput: "*****\n*****\n*****",
  commonMistakes: [
    "Forgetting to reset the inner loop",
    "Using the wrong loop conditions",
    "Printing on a new line inside the inner loop",
    "Confusing rows and columns",
    "Missing curly braces"
  ],
  difficulty: "easy"
},
{
  lessonNumber: 21,
  title: "Methods in Java",
  goal: "Create and call simple methods in Java",
  concept: "A method is a block of reusable code that runs only when it is called. Methods help keep programs organized and avoid repeating code.\n\nA method can:\n- Take input using parameters\n- Perform an action\n- Return a value (optional)\n\nIn this lesson:\n- A method prints a birthday message\n- Other methods show how values can be returned\n\nSyntax:\nreturnType methodName(parameters) {\n    // code\n}",
  starterCode: "public class Main {\n    public static void main(String[] args){\n\n        // TODO: Call the happyBirthday method\n\n    }\n\n    // TODO: Create a method named happyBirthday\n\n    // TODO: Create a method that returns the square of a number\n\n}",
  expectedOutput: "Happy Birthday to you!\nHappy Birthday dear Spongebob!\nYou are 30 years old!\nHappy Birthday to you!",
  commonMistakes: [
    "Forgetting to call the method",
    "Using the wrong parameter types",
    "Forgetting the return keyword in value-returning methods",
    "Calling methods with the wrong number of arguments",
    "Missing parentheses when calling a method"
  ],
  difficulty: "easy"
},
{
  lessonNumber: 22,
  title: "Method Overloading in Java",
  goal: "Use method overloading to call methods with the same name but different parameters",
  concept: "Method overloading means creating multiple methods with the same name but different parameters. Java decides which method to run based on the number or type of arguments passed.\n\nMethod signature = method name + parameters\n\nIn this lesson, the same method name is used to bake a pizza in different ways:\n- With only bread\n- With bread and cheese\n- With bread, cheese, and topping\n\nThis makes code easier to read and reuse.",
  starterCode: "public class Main {\n    public static void main(String[] args){\n\n        // TODO: Call the bakePizza method with three arguments\n\n        // TODO: Print the returned pizza description\n\n    }\n\n    // TODO: Create a bakePizza method with one parameter\n\n    // TODO: Create a bakePizza method with two parameters\n\n    // TODO: Create a bakePizza method with three parameters\n\n}",
  expectedOutput: "pepperoni mozzarella flat-bread pizza",
  commonMistakes: [
    "Creating methods with the same parameters by mistake",
    "Changing only the return type instead of parameters",
    "Calling a method with the wrong number of arguments",
    "Forgetting to return a value",
    "Misspelling method names"
  ],
  difficulty: "easy"
},
{
  lessonNumber: 23,
  title: "Variable Scope in Java",
  goal: "Understand the difference between class variables and local variables",
  concept: "Variable scope defines where a variable can be accessed in a program.\n\nThere are two common types of scope in Java:\n\nClass variables:\n- Declared outside methods\n- Accessible by all methods in the class\n\nLocal variables:\n- Declared inside a method\n- Only accessible within that method\n\nIf a local variable has the same name as a class variable, the local variable is used inside that method.\n\nIn this lesson, the same variable name is used in different scopes to show how Java chooses which one to use.",
  starterCode: "public class Main {\n\n    static int x = 3; // class variable\n\n    public static void main(String[] args){\n\n        // TODO: Declare a local variable named x inside main\n\n        // TODO: Print the value of x\n\n        // TODO: Call the doSomething method\n\n    }\n\n    static void doSomething(){\n\n        // TODO: Declare a local variable named x inside this method\n\n        // TODO: Print the value of x\n\n    }\n}",
  expectedOutput: "1\n2",
  commonMistakes: [
    "Assuming the class variable is always used",
    "Confusing local variables with class variables",
    "Thinking variables with the same name share values",
    "Forgetting where a variable is declared",
    "Misunderstanding variable scope"
  ],
  difficulty: "easy"
},
{
  lessonNumber: 24,
  title: "Simple Banking Program",
  goal: "Use loops, switch statements, and methods to build a simple banking menu",
  concept: "This lesson combines several basic Java concepts to build a simple banking program.\n\nThe program uses:\n- A loop to keep the menu running\n- A switch statement to handle user choices\n- Methods to organize code for balance checking, deposit, and withdrawal\n\nThe program continues running until the user chooses to exit. This is a common structure used in real-world console applications like ATM systems.",
  starterCode: "import java.util.Scanner;\n\npublic class Main {\n\n    static Scanner scanner = new Scanner(System.in);\n\n    public static void main(String[] args) {\n\n        double balance = 0;\n        boolean isRunning = true;\n\n        while(isRunning){\n            System.out.println(\"1. Show Balance\");\n            System.out.println(\"2. Deposit Money\");\n            System.out.println(\"3. Withdraw Money\");\n            System.out.println(\"4. Exit\");\n\n            System.out.print(\"Choose an option: \");\n            int choice = scanner.nextInt();\n\n            switch(choice){\n                case 1:\n                    showBalance(balance);\n                    break;\n                case 2:\n                    balance += deposit();\n                    break;\n                case 3:\n                    balance -= withdraw(balance);\n                    break;\n                case 4:\n                    isRunning = false;\n                    break;\n                default:\n                    System.out.println(\"Invalid choice\");\n            }\n        }\n\n        System.out.println(\"Thank you for using the bank!\");\n        scanner.close();\n    }\n\n    static void showBalance(double balance){\n        System.out.println(\"Balance: $\" + balance);\n    }\n\n    static double deposit(){\n        System.out.print(\"Enter amount to deposit: \");\n        double amount = scanner.nextDouble();\n        return amount > 0 ? amount : 0;\n    }\n\n    static double withdraw(double balance){\n        System.out.print(\"Enter amount to withdraw: \");\n        double amount = scanner.nextDouble();\n        return (amount > 0 && amount <= balance) ? amount : 0;\n    }\n}",
  expectedOutput: "1. Show Balance\n2. Deposit Money\n3. Withdraw Money\n4. Exit\nChoose an option:\n1\nBalance: $0.0\nChoose an option:\n4\nThank you for using the bank!",
  commonMistakes: [
    "Forgetting to update the balance",
    "Not using a loop for the menu",
    "Missing break statements in switch",
    "Allowing negative deposits or withdrawals",
    "Forgetting to close the Scanner"
  ],
  difficulty: "easy"
},
{
  lessonNumber: 25,
  title: "Rolling Dice with Random",
  goal: "Use loops and the Random class to simulate rolling dice",
  concept: "The Random class is used to generate random numbers in Java. In this lesson, it is used to simulate rolling dice.\n\nThe program asks the user how many dice they want to roll. Each die produces a random number between 1 and 6.\n\nA loop is used to roll multiple dice, print each result, and calculate the total value.\n\nMethods are used to keep the code clean and reusable, such as printing the face of a die based on its value.",
  starterCode: "import java.util.Random;\nimport java.util.Scanner;\n\npublic class Main {\n\n    public static void main(String[] args) {\n\n        Scanner scanner = new Scanner(System.in);\n        Random random = new Random();\n\n        System.out.print(\"How many dice do you want to roll? \");\n        int dice = scanner.nextInt();\n\n        int total = 0;\n\n        if(dice > 0){\n            for(int i = 1; i <= dice; i++){\n                int roll = random.nextInt(1, 7);\n                printDieFace(roll);\n                System.out.println(\"Die \" + i + \": \" + roll);\n                total += roll;\n            }\n            System.out.println(\"Total: \" + total);\n        }\n        else{\n            System.out.println(\"Number of dice must be greater than 0\");\n        }\n\n        scanner.close();\n    }\n\n    static void printDieFace(int roll){\n        System.out.println(\"[ \" + roll + \" ]\");\n    }\n}",
  expectedOutput: "How many dice do you want to roll?\n2\n[ 4 ]\nDie 1: 4\n[ 6 ]\nDie 2: 6\nTotal: 10",
  commonMistakes: [
    "Using incorrect random number bounds",
    "Forgetting to reset or update the total",
    "Not validating the number of dice",
    "Confusing loop counters",
    "Forgetting to close the Scanner"
  ],
  difficulty: "easy"
},
{
  lessonNumber: 26,
  title: "Arrays in Java",
  goal: "Store and access multiple values using arrays in Java",
  concept: "An array is a collection of values of the same data type. It allows a program to store multiple values inside a single variable.\n\nArrays are useful when working with lists of data such as names, numbers, or items.\n\nKey points:\n- Array indexes start at 0\n- Arrays have a fixed size\n- length gives the number of elements\n\nIn this lesson, a String array is used to store fruit names and print them using a loop.",
  starterCode: "public class Main {\n    public static void main(String[] args){\n\n        // TODO: Create a String array with fruit names\n\n        // TODO: Use a loop to print each fruit\n\n    }\n}",
  expectedOutput: "apple\norange\nbanana\ncoconut",
  commonMistakes: [
    "Accessing an index that does not exist",
    "Forgetting that array indexes start at 0",
    "Using the wrong data type in the array",
    "Confusing arrays with ArrayList",
    "Forgetting to loop through the array"
  ],
  difficulty: "easy"
},
{
  lessonNumber: 27,
  title: "User Input with Arrays",
  goal: "Store user input in an array and display the values",
  concept: "Arrays can be filled with values entered by the user. This allows programs to store multiple inputs and work with them later.\n\nIn this lesson:\n- The user chooses how many elements to store\n- A String array is created with that size\n- A loop is used to fill the array\n- A for-each loop is used to print all elements\n\nThis is a common pattern when collecting multiple inputs such as names, items, or responses.",
  starterCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args){\n\n        Scanner scanner = new Scanner(System.in);\n\n        System.out.print(\"How many items do you want to enter? \");\n        int size = scanner.nextInt();\n        scanner.nextLine();\n\n        String[] items = new String[size];\n\n        for(int i = 0; i < items.length; i++){\n            System.out.print(\"Enter item \" + (i + 1) + \": \");\n            items[i] = scanner.nextLine();\n        }\n\n        System.out.println(\"You entered:\");\n        for(String item : items){\n            System.out.println(item);\n        }\n\n        scanner.close();\n    }\n}",
  expectedOutput: "How many items do you want to enter?\n3\nEnter item 1:\nApple\nEnter item 2:\nBanana\nEnter item 3:\nOrange\nYou entered:\nApple\nBanana\nOrange",
  commonMistakes: [
    "Forgetting to use scanner.nextLine() after nextInt()",
    "Creating the array before knowing its size",
    "Using the wrong loop condition",
    "Accessing array indexes incorrectly",
    "Forgetting to close the Scanner"
  ],
  difficulty: "easy"
},
{
  lessonNumber: 28,
  title: "Searching in an Array",
  goal: "Search for a value in an array and display its index",
  concept: "Searching in an array means checking each element to see if it matches a value. This is commonly done using a loop.\n\nIn this lesson, a String array is searched to find a specific value entered by the user.\n\nIf the value is found, its index is printed. If it is not found, a message is displayed.\n\nArray indexes start from 0, so the first element has index 0.",
  starterCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args){\n\n        Scanner scanner = new Scanner(System.in);\n\n        String[] names = {\"Alice\", \"Bob\", \"Charlie\", \"Diana\"};\n\n        System.out.print(\"Enter a name to search: \");\n        String target = scanner.nextLine();\n\n        boolean found = false;\n\n        for(int i = 0; i < names.length; i++){\n            if(names[i].equalsIgnoreCase(target)){\n                System.out.println(\"Found at index: \" + i);\n                found = true;\n                break;\n            }\n        }\n\n        if(!found){\n            System.out.println(\"Not found\");\n        }\n\n        scanner.close();\n    }\n}",
  expectedOutput: "Enter a name to search:\nBob\nFound at index: 1",
  commonMistakes: [
    "Using == instead of equals() for String comparison",
    "Forgetting to set the found flag",
    "Not breaking the loop after finding the value",
    "Confusing index values",
    "Forgetting to close the Scanner"
  ],
  difficulty: "easy"
},
{
  lessonNumber: 29,
  title: "Variable Arguments (Varargs)",
  goal: "Use varargs to pass a flexible number of values to a method",
  concept: "Varargs allow a method to accept a variable number of arguments. This makes methods more flexible and avoids creating multiple overloaded methods.\n\nSyntax:\nmethodName(type... values)\n\nJava automatically stores the arguments passed to a varargs method inside an array.\n\nIn this lesson, varargs are used to calculate the average of numbers. The method works whether you pass many numbers or none at all.",
  starterCode: "public class Main {\n    public static void main(String[] args){\n\n        // TODO: Call the average method with multiple numbers\n\n    }\n\n    // TODO: Create a method named average using varargs\n\n}",
  expectedOutput: "2.5",
  commonMistakes: [
    "Forgetting that varargs are treated as an array",
    "Trying to use more than one varargs parameter",
    "Not handling the case when no arguments are passed",
    "Confusing varargs with method overloading",
    "Forgetting the ellipsis (...) syntax"
  ],
  difficulty: "easy"
},
{
  lessonNumber: 30,
  title: "2D Arrays in Java",
  goal: "Store and display data using two-dimensional arrays in Java",
  concept: "A 2D array is an array where each element is itself an array. It is useful for representing tables, grids, or matrices of data.\n\nYou can think of a 2D array as rows and columns.\n\nSyntax:\ndataType[][] arrayName = new dataType[rows][columns];\n\nIn this lesson:\n- A 2D String array is used to store grocery items\n- A 2D char array is used to represent a telephone keypad\n- Nested loops are used to print all values\n\n2D arrays are commonly used in games, menus, and grid-based programs.",
  starterCode: "public class Main {\n    public static void main(String[] args){\n\n        // TODO: Create a 2D String array for groceries\n\n        // TODO: Change one value inside the 2D array\n\n        // TODO: Use nested loops to print all grocery items\n\n        // TODO: Create a 2D char array for a keypad\n\n        // TODO: Use nested loops to print the keypad\n\n    }\n}",
  expectedOutput: "apple orange banana\npotato onion carrot\nchicken eggs beef fish\n1 2 3\n4 5 6\n7 8 9\n* 0 #",
  commonMistakes: [
    "Forgetting that each row can have a different length",
    "Mixing up row and column indexes",
    "Using the wrong data type in the array",
    "Forgetting to use nested loops",
    "Accessing invalid indexes"
  ],
  difficulty: "easy"
},
{
  lessonNumber: 31,
  title: "Simple Quiz Program",
  goal: "Create a simple quiz using arrays and loops in Java",
  concept: "Arrays can be used to store related data such as questions, options, and answers. Loops help display questions and check user input.\n\nIn this lesson:\n- An array stores quiz questions\n- A 2D array stores multiple-choice options\n- Another array stores the correct answers\n- A loop is used to show questions and options\n- The user's answers are checked and a score is calculated\n\nThis is a common beginner project that combines arrays, loops, and user input.",
  starterCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n\n        Scanner scanner = new Scanner(System.in);\n\n        String[] questions = {\n            \"What is the capital of France?\",\n            \"Which language is used for Android development?\"\n        };\n\n        String[][] options = {\n            {\"A. Berlin\", \"B. Paris\", \"C. Rome\"},\n            {\"A. Python\", \"B. Java\", \"C. Swift\"}\n        };\n\n        char[] answers = {'B', 'B'};\n\n        int score = 0;\n\n        for(int i = 0; i < questions.length; i++){\n            System.out.println(questions[i]);\n            for(String option : options[i]){\n                System.out.println(option);\n            }\n            System.out.print(\"Your answer: \");\n            char guess = scanner.next().toUpperCase().charAt(0);\n\n            if(guess == answers[i]){\n                score++;\n            }\n            System.out.println();\n        }\n\n        System.out.println(\"Your score: \" + score + \"/\" + questions.length);\n\n        scanner.close();\n    }\n}",
  expectedOutput: "What is the capital of France?\nA. Berlin\nB. Paris\nC. Rome\nYour answer:\nB\n\nWhich language is used for Android development?\nA. Python\nB. Java\nC. Swift\nYour answer:\nB\n\nYour score: 2/2",
  commonMistakes: [
    "Mismatching questions and answers",
    "Using the wrong index in the loop",
    "Not converting input to uppercase",
    "Forgetting to increment the score",
    "Forgetting to close the Scanner"
  ],
  difficulty: "easy"
},
{
  lessonNumber: 32,
  title: "Rock Paper Scissors Game",
  goal: "Build a simple Rock Paper Scissors game using loops, arrays, and conditionals",
  concept: "This lesson combines several basic Java concepts to create a simple game.\n\nThe program uses:\n- An array to store possible choices\n- Random to generate the computer's move\n- User input to get the player's move\n- if-else statements to decide the winner\n- A do-while loop to allow replaying the game\n\nThe game continues until the player chooses not to play again. This structure is commonly used in small console games.",
  starterCode: "import java.util.Random;\nimport java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args){\n\n        Scanner scanner = new Scanner(System.in);\n        Random random = new Random();\n\n        String[] choices = {\"rock\", \"paper\", \"scissors\"};\n        String playAgain = \"yes\";\n\n        do{\n            System.out.print(\"Enter your move (rock, paper, scissors): \");\n            String player = scanner.nextLine().toLowerCase();\n\n            String computer = choices[random.nextInt(3)];\n            System.out.println(\"Computer chose: \" + computer);\n\n            if(player.equals(computer)){\n                System.out.println(\"It's a tie!\");\n            }\n            else if((player.equals(\"rock\") && computer.equals(\"scissors\")) ||\n                    (player.equals(\"paper\") && computer.equals(\"rock\")) ||\n                    (player.equals(\"scissors\") && computer.equals(\"paper\"))){\n                System.out.println(\"You win!\");\n            }\n            else{\n                System.out.println(\"You lose!\");\n            }\n\n            System.out.print(\"Play again (yes/no): \");\n            playAgain = scanner.nextLine().toLowerCase();\n\n        }while(playAgain.equals(\"yes\"));\n\n        System.out.println(\"Thanks for playing!\");\n        scanner.close();\n    }\n}",
  expectedOutput: "Enter your move (rock, paper, scissors):\nrock\nComputer chose: scissors\nYou win!\nPlay again (yes/no):\nno\nThanks for playing!",
  commonMistakes: [
    "Not converting user input to lowercase",
    "Using == instead of equals() for strings",
    "Forgetting to use a loop for replaying the game",
    "Incorrect win-condition logic",
    "Forgetting to close the Scanner"
  ],
  difficulty: "easy"
},
{
  lessonNumber: 33,
  title: "Objects and Classes in Java",
  goal: "Create objects from a class and access their attributes and methods",
  concept: "An object is an entity that holds data (attributes) and can perform actions (methods). Objects are created from classes, which act as blueprints.\n\nIn this lesson:\n- A class defines what a car has and what it can do\n- An object is created using the class\n- Object attributes are accessed using dot notation\n- Object methods are called to perform actions\n\nObjects are reference data types and are a core concept in object-oriented programming.",
  starterCode: "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Create a Car object\n\n        // TODO: Print the car's attributes\n\n        // TODO: Call methods to drive and brake the car\n\n    }\n}\n\nclass Car {\n\n    // TODO: Declare attributes for make, model, year, price, and isRunning\n\n    // TODO: Create methods for start, stop, drive, and brake\n\n}",
  expectedOutput: "Ford\nMustang\n2025\n58000.99\nfalse\nYou drive the Mustang\nYou brake the Mustang",
  commonMistakes: [
    "Forgetting to create an object using new",
    "Trying to access attributes without an object",
    "Confusing classes with objects",
    "Misspelling method or variable names",
    "Forgetting that objects are reference types"
  ],
  difficulty: "easy"
},
{
  lessonNumber: 34,
  title: "Constructors in Java",
  goal: "Use constructors to initialize objects with starting values",
  concept: "A constructor is a special method that runs automatically when an object is created. It is used to set initial values for an object’s attributes.\n\nKey points about constructors:\n- A constructor has the same name as the class\n- It does not have a return type\n- It can take parameters\n- The keyword this is used to refer to the current object\n\nIn this lesson, a Student class uses a constructor to set name, age, GPA, and enrollment status when a Student object is created.",
  starterCode: "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Create multiple Student objects using the constructor\n\n        // TODO: Print each student's details\n\n        // TODO: Call the study method for each student\n\n    }\n}\n\nclass Student {\n\n    // TODO: Declare variables for name, age, gpa, and isEnrolled\n\n    // TODO: Create a constructor that accepts name, age, and gpa\n\n    // TODO: Create a study method\n\n}",
  expectedOutput: "Spongebob\n30\n3.2\ntrue\nPatrick\n34\n1.5\ntrue\nSandy\n27\n4.0\ntrue\nSpongebob is studying\nPatrick is studying\nSandy is studying",
  commonMistakes: [
    "Forgetting to use this keyword inside the constructor",
    "Mismatch between constructor parameters and arguments",
    "Trying to give a return type to a constructor",
    "Not initializing all variables",
    "Confusing constructors with regular methods"
  ],
  difficulty: "easy"
},
{
  lessonNumber: 35,
  title: "Overloaded Constructors",
  goal: "Create objects using different constructors with varying parameters",
  concept: "Overloaded constructors allow a class to have multiple constructors with different parameter lists. This lets objects be created in different ways depending on the information available.\n\nKey points:\n- Constructors have the same name as the class\n- Constructors differ by the number or type of parameters\n- Java chooses the correct constructor based on the arguments passed\n\nIn this lesson, a User class has multiple constructors so a user can be created with:\n- No information\n- Only a username\n- A username and email\n- A username, email, and age\n\nThis makes object creation flexible and beginner-friendly.",
  starterCode: "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Create User objects using different constructors\n\n        // TODO: Print the details of each user\n\n    }\n}\n\nclass User {\n\n    // TODO: Declare variables for username, email, and age\n\n    // TODO: Create a default constructor\n\n    // TODO: Create a constructor with username\n\n    // TODO: Create a constructor with username and email\n\n    // TODO: Create a constructor with username, email, and age\n\n}",
  expectedOutput: "Spongebob\nNot provided\n0\nPatrick\nPStar@aol.com\n0\nSandy\nSCheeks@gmail.com\n27\nGuest\nNot provided\n0",
  commonMistakes: [
    "Creating constructors with identical parameter lists",
    "Forgetting to initialize all variables in each constructor",
    "Confusing overloaded constructors with overloaded methods",
    "Passing arguments in the wrong order",
    "Forgetting the default constructor"
  ],
  difficulty: "easy"
},
{
  lessonNumber: 36,
  title: "Arrays of Objects in Java",
  goal: "Store and work with multiple objects using an array",
  concept: "An array of objects allows you to store multiple objects of the same class in a single array. Each element in the array holds a reference to an object.\n\nIn this lesson:\n- A Car class is used to create multiple car objects\n- An array stores several Car objects\n- A loop updates an attribute for each object\n- Another loop calls a method on each object\n\nArrays of objects are commonly used in games, simulations, and real-world applications where multiple similar objects are needed.",
  starterCode: "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Create an array of Car objects\n\n        // TODO: Use a loop to change the color of each car\n\n        // TODO: Use another loop to call the drive method\n\n    }\n}\n\nclass Car {\n\n    // TODO: Declare variables for model and color\n\n    // TODO: Create a constructor to set model and color\n\n    // TODO: Create a drive method to print car details\n\n}",
  expectedOutput: "You drive the black Mustang\nYou drive the black Corvette\nYou drive the black Charger",
  commonMistakes: [
    "Forgetting to use new when creating objects",
    "Trying to access object properties without a reference",
    "Confusing arrays of objects with normal arrays",
    "Forgetting to loop through the array",
    "Not updating object attributes correctly"
  ],
  difficulty: "easy"
},
{
  lessonNumber: 37,
  title: "Static Variables and Methods",
  goal: "Understand how static variables and methods belong to a class rather than objects",
  concept: "The keyword static is used to make a variable or method belong to the class instead of a specific object.\n\nStatic variables:\n- Shared by all objects of the class\n- Only one copy exists\n\nStatic methods:\n- Can be called using the class name\n- Cannot directly access non-static variables\n\nIn this lesson:\n- A static variable keeps track of the total number of friends\n- Each time a Friend object is created, the count increases\n- A static method displays the total number of friends\n\nStatic members are commonly used for counters, utilities, and shared data.",
  starterCode: "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Create several Friend objects\n\n        // TODO: Call the static method to show total friends\n\n    }\n}\n\nclass Friend {\n\n    // TODO: Create a static variable to count friends\n\n    // TODO: Create a non-static variable for name\n\n    // TODO: Create a constructor that increases the friend count\n\n    // TODO: Create a static method to display total friends\n\n}",
  expectedOutput: "You have 4 total friends",
  commonMistakes: [
    "Trying to access non-static variables inside a static method",
    "Calling static methods using an object instead of the class name",
    "Assuming each object has its own copy of a static variable",
    "Forgetting that static variables are shared",
    "Not incrementing the static counter correctly"
  ],
  difficulty: "easy"
},
{
  lessonNumber: 38,
  title: "Inheritance in Java",
  goal: "Understand how one class can inherit properties and methods from another class",
  concept: "Inheritance allows one class to reuse the attributes and methods of another class. The class being inherited from is called the parent (or superclass), and the class that inherits is called the child (or subclass).\n\nIn this lesson:\n- An Organism class is the base class\n- Plant and Animal inherit from Organism\n- Dog and Cat inherit from Animal\n\nThis creates a hierarchy where child classes automatically get access to parent class properties and methods.\n\nInheritance helps reduce code duplication and makes programs easier to maintain.",
  starterCode: "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Create Dog, Cat, and Plant objects\n\n        // TODO: Call methods inherited from parent classes\n\n    }\n}\n\nclass Organism {\n\n    // TODO: Create a variable to track if the organism is alive\n\n    // TODO: Create a constructor to set isAlive to true\n\n}\n\nclass Plant extends Organism {\n\n    // TODO: Create a method for photosynthesis\n\n}\n\nclass Animal extends Organism {\n\n    // TODO: Create a method for eating\n\n}\n\nclass Dog extends Animal {\n\n    // TODO: Create a variable for lives\n\n    // TODO: Create a speak method\n\n}\n\nclass Cat extends Animal {\n\n    // TODO: Create a variable for lives\n\n    // TODO: Create a speak method\n\n}",
  expectedOutput: "The dog goes *woof*\nThe cat goes *meow*\nThe plant absorbs sunlight",
  commonMistakes: [
    "Forgetting to use the extends keyword",
    "Assuming child classes do not inherit parent variables",
    "Creating duplicate code instead of using inheritance",
    "Misunderstanding the class hierarchy",
    "Trying to access child-specific methods from a parent reference"
  ],
  difficulty: "easy"
},
{
  lessonNumber: 39,
  title: "Using the super Keyword",
  goal: "Use the super keyword to call parent class constructors and methods",
  concept: "The super keyword is used to refer to the parent (superclass) of a class. It is commonly used inside constructors and methods.\n\nKey uses of super:\n- Call the parent class constructor\n- Access parent class methods or variables\n\nIn this lesson:\n- Person is the parent class\n- Student and Employee extend Person\n- The super keyword is used to pass name values to the Person constructor\n\nThis ensures that shared attributes are initialized correctly in the parent class.",
  starterCode: "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Create a Person object\n\n        // TODO: Create a Student object using super\n\n        // TODO: Create an Employee object using super\n\n    }\n}\n\nclass Person {\n\n    // TODO: Declare first and last name variables\n\n    // TODO: Create a constructor to initialize names\n\n    // TODO: Create a method to show full name\n\n}\n\nclass Student extends Person {\n\n    // TODO: Declare a gpa variable\n\n    // TODO: Create a constructor that uses super\n\n    // TODO: Create a method to display GPA\n\n}\n\nclass Employee extends Person {\n\n    // TODO: Declare a salary variable\n\n    // TODO: Create a constructor that uses super\n\n    // TODO: Create a method to display salary\n\n}",
  expectedOutput: "Tom Riddle\nHarry's gpa is: 3.25\nRubeus's salary is $50000",
  commonMistakes: [
    "Forgetting to call super in the child constructor",
    "Calling super after using this",
    "Passing arguments in the wrong order",
    "Trying to access parent variables without inheritance",
    "Confusing super with this"
  ],
  difficulty: "easy"
},
{
  lessonNumber: 40,
  title: "Method Overriding in Java",
  goal: "Override a method in a subclass to change its behavior",
  concept: "Method overriding happens when a subclass provides its own implementation of a method that already exists in the parent class.\n\nKey points:\n- The method name must be the same\n- The parameters must be the same\n- The child class decides how the method behaves\n\nThe @Override annotation helps ensure the method is correctly overridden.\n\nIn this lesson:\n- Animal has a move() method\n- Dog and Cat use the inherited behavior\n- Fish overrides move() to swim instead of run\n\nThis allows different objects to respond differently to the same method call.",
  starterCode: "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Create Dog, Cat, and Fish objects\n\n        // TODO: Call the move method on each object\n\n    }\n}\n\nclass Animal {\n\n    // TODO: Create a move method\n\n}\n\nclass Dog extends Animal {\n\n    // Inherits move() from Animal\n\n}\n\nclass Cat extends Animal {\n\n    // Inherits move() from Animal\n\n}\n\nclass Fish extends Animal {\n\n    // TODO: Override the move method\n\n}",
  expectedOutput: "This animal is running\nThis animal is running\nThis animal is swimming",
  commonMistakes: [
    "Changing the method signature when overriding",
    "Forgetting the @Override annotation",
    "Thinking overriding replaces the parent method everywhere",
    "Using different parameter types by mistake",
    "Confusing method overriding with method overloading"
  ],
  difficulty: "easy"
},
{
  lessonNumber: 41,
  title: "toString() Method in Java",
  goal: "Override the toString() method to display meaningful object information",
  concept: "The toString() method is inherited from the Object class. It is used to return a string representation of an object.\n\nBy default, toString() returns a class name and hash code, which is not very useful.\n\nBy overriding toString(), you can control what information is shown when an object is printed.\n\nIn this lesson:\n- A Car class overrides the toString() method\n- Printing the object directly shows readable car details\n\nThis makes debugging and displaying object data much easier.",
  starterCode: "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Create two Car objects\n\n        // TODO: Print the Car objects directly\n\n    }\n}\n\nclass Car {\n\n    // TODO: Declare variables for make, model, year, and color\n\n    // TODO: Create a constructor to initialize variables\n\n    // TODO: Override the toString() method\n\n}",
  expectedOutput: "Red 2025 Ford Mustang\nBlue 2026 Chevrolet Corvette",
  commonMistakes: [
    "Forgetting to override toString()",
    "Returning null from toString()",
    "Printing object references instead of readable text",
    "Misspelling the toString() method signature",
    "Forgetting the @Override annotation"
  ],
  difficulty: "easy"
},
{
  lessonNumber: 42,
  title: "Abstract Classes and Methods",
  goal: "Use abstract classes to define a common structure for related classes",
  concept: "Abstraction is the process of hiding implementation details and showing only essential features. In Java, abstraction is achieved using abstract classes and abstract methods.\n\nKey points:\n- Abstract classes cannot be instantiated\n- Abstract methods do not have a body\n- Child classes must implement abstract methods\n- Abstract classes can also have normal (concrete) methods\n\nIn this lesson:\n- Shape is an abstract class\n- area() is an abstract method\n- Circle, Triangle, and Rectangle extend Shape\n- Each class provides its own implementation of area()\n\nThis allows different shapes to share a common structure while having their own behavior.",
  starterCode: "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Create Circle, Triangle, and Rectangle objects\n\n        // TODO: Call display() on each shape\n\n        // TODO: Print the area of each shape\n\n    }\n}\n\nabstract class Shape {\n\n    // TODO: Create an abstract method named area\n\n    // TODO: Create a concrete method named display\n\n}\n\nclass Circle extends Shape {\n\n    // TODO: Declare radius\n\n    // TODO: Create constructor\n\n    // TODO: Implement the area method\n\n}\n\nclass Triangle extends Shape {\n\n    // TODO: Declare base and height\n\n    // TODO: Create constructor\n\n    // TODO: Implement the area method\n\n}\n\nclass Rectangle extends Shape {\n\n    // TODO: Declare length and width\n\n    // TODO: Create constructor\n\n    // TODO: Implement the area method\n\n}",
  expectedOutput: "This is a shape\nThis is a shape\nThis is a shape\n28.274333882308138\n10.0\n42.0",
  commonMistakes: [
    "Trying to create an object of an abstract class",
    "Forgetting to implement abstract methods",
    "Not using the override annotation",
    "Confusing abstract methods with normal methods",
    "Forgetting that abstract classes can have concrete methods"
  ],
  difficulty: "easy"
},
{
  lessonNumber: 43,
  title: "Interfaces in Java",
  goal: "Use interfaces to define behaviors that classes must implement",
  concept: "An interface is a blueprint that defines methods without implementations. Classes that implement an interface must provide their own method implementations.\n\nKey points:\n- Interfaces contain abstract methods by default\n- A class can implement multiple interfaces\n- Interfaces support multiple inheritance-like behavior\n\nIn this lesson:\n- Prey defines fleeing behavior\n- Predator defines hunting behavior\n- Rabbit implements Prey\n- Hawk implements Predator\n- Fish implements both Prey and Predator\n\nThis allows different classes to share behaviors without being part of the same class hierarchy.",
  starterCode: "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Create Rabbit, Hawk, and Fish objects\n\n        // TODO: Call flee() and hunt() methods\n\n    }\n}\n\ninterface Prey {\n\n    // TODO: Declare flee method\n\n}\n\ninterface Predator {\n\n    // TODO: Declare hunt method\n\n}\n\nclass Rabbit implements Prey {\n\n    // TODO: Implement flee method\n\n}\n\nclass Hawk implements Predator {\n\n    // TODO: Implement hunt method\n\n}\n\nclass Fish implements Prey, Predator {\n\n    // TODO: Implement flee method\n\n    // TODO: Implement hunt method\n\n}",
  expectedOutput: "*The rabbit is running away*\n*The hawk is hunting*\n*The fish is swimming away*\n*The fish is hunting*",
  commonMistakes: [
    "Forgetting to implement all interface methods",
    "Using extends instead of implements",
    "Trying to create objects of an interface",
    "Forgetting that interfaces support multiple implementation",
    "Misspelling method names when implementing"
  ],
  difficulty: "easy"
},
{
  lessonNumber: 44,
  title: "Polymorphism in Java",
  goal: "Use polymorphism to treat different objects as a common type",
  concept: "Polymorphism means \"many forms\". In Java, it allows objects of different classes to be treated as objects of a common parent class.\n\nKey points:\n- Polymorphism works with inheritance\n- A parent class reference can refer to child class objects\n- The overridden method in the child class is called at runtime\n\nIn this lesson:\n- Vehicle is an abstract parent class\n- Car, Bike, and Boat extend Vehicle\n- All objects are stored in a Vehicle array\n- The go() method behaves differently for each object\n\nThis allows one loop to control many different object behaviors.",
  starterCode: "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Create Car, Bike, and Boat objects\n\n        // TODO: Store them in a Vehicle array\n\n        // TODO: Use a loop to call go() on each vehicle\n\n    }\n}\n\nabstract class Vehicle {\n\n    // TODO: Create an abstract go method\n\n}\n\nclass Car extends Vehicle {\n\n    // TODO: Override the go method\n\n}\n\nclass Bike extends Vehicle {\n\n    // TODO: Override the go method\n\n}\n\nclass Boat extends Vehicle {\n\n    // TODO: Override the go method\n\n}",
  expectedOutput: "You drive the car\nYou ride the bike\nYou sail the boat",
  commonMistakes: [
    "Trying to create an object of an abstract class",
    "Forgetting to override abstract methods",
    "Using child class references instead of parent class references",
    "Not understanding runtime method selection",
    "Confusing polymorphism with inheritance"
  ],
  difficulty: "easy"
},
{
  lessonNumber: 45,
  title: "Runtime Polymorphism in Java",
  goal: "Understand how Java decides which method to run at runtime",
  concept: "Runtime polymorphism happens when the method that runs is chosen at runtime based on the actual object type, not the reference type.\n\nKey points:\n- A parent class reference can point to different child objects\n- The overridden method of the actual object is executed\n- The decision is made at runtime\n\nIn this lesson:\n- Animal is the parent type\n- Dog and Cat are child classes\n- The user chooses which animal to create\n- The speak() method behaves differently based on the choice\n\nThis makes programs flexible and interactive.",
  starterCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n\n        Scanner scanner = new Scanner(System.in);\n\n        Animal animal;\n\n        System.out.print(\"Would you like a dog or a cat? (1 = dog, 2 = cat): \");\n        int choice = scanner.nextInt();\n\n        if(choice == 1){\n            animal = new Dog();\n        }\n        else{\n            animal = new Cat();\n        }\n\n        animal.speak();\n        scanner.close();\n    }\n}\n\nclass Animal {\n    void speak(){\n        System.out.println(\"The animal makes a sound\");\n    }\n}\n\nclass Dog extends Animal {\n    @Override\n    void speak(){\n        System.out.println(\"The dog barks\");\n    }\n}\n\nclass Cat extends Animal {\n    @Override\n    void speak(){\n        System.out.println(\"The cat meows\");\n    }\n}",
  expectedOutput: "Would you like a dog or a cat? (1 = dog, 2 = cat):\n1\nThe dog barks",
  commonMistakes: [
    "Forgetting to override the method in child classes",
    "Calling methods before assigning the object",
    "Confusing reference type with object type",
    "Not handling invalid user input",
    "Forgetting to close the Scanner"
  ],
  difficulty: "easy"
},
{
  lessonNumber: 46,
  title: "Getters and Setters in Java",
  goal: "Protect object data using private variables with getters and setters",
  concept: "Getters and setters are used to control access to an object's data. This concept is called encapsulation.\n\nKey ideas:\n- private variables cannot be accessed directly outside the class\n- getters make variables readable\n- setters make variables writable\n- rules or formatting can be added inside getters and setters\n\nIn this lesson:\n- Car fields are marked private\n- Getter methods are used to read values\n- Setter methods are used to update values\n- Data is accessed safely through methods instead of directly",
  starterCode: "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Create a Car object\n\n        // TODO: Change color and price using setters\n\n        // TODO: Print car details using getters\n\n    }\n}\n\nclass Car {\n\n    // TODO: Declare private variables for model, color, and price\n\n    // TODO: Create a constructor to initialize variables\n\n    // TODO: Create getter methods\n\n    // TODO: Create setter methods\n\n}",
  expectedOutput: "Blue Charger $5000",
  commonMistakes: [
    "Trying to access private variables directly",
    "Forgetting to use getters instead of variables",
    "Not using setters to update values",
    "Returning the wrong data type from a getter",
    "Confusing encapsulation with inheritance"
  ],
  difficulty: "easy"
},
{
  lessonNumber: 47,
  title: "Aggregation in Java",
  goal: "Understand aggregation using objects that contain other objects",
  concept: "Aggregation represents a \"has-a\" relationship between objects. One object contains another object as part of its structure, but the contained object can exist independently.\n\nKey points:\n- Aggregation is a weak relationship\n- Objects can exist without each other\n- It is commonly implemented using arrays or collections of objects\n\nIn this lesson:\n- A Book object represents individual books\n- A Library object contains multiple Book objects\n- The Library uses the Book objects but does not own their lifecycle\n\nAggregation helps model real-world relationships such as libraries and books, schools and students, or teams and players.",
  starterCode: "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Create multiple Book objects\n\n        // TODO: Store the books in an array\n\n        // TODO: Create a Library object using the books\n\n        // TODO: Display library information\n\n    }\n}\n\nclass Book {\n\n    // TODO: Declare variables for title and pages\n\n    // TODO: Create a constructor\n\n    // TODO: Create a method to display book information\n\n}\n\nclass Library {\n\n    // TODO: Declare variables for name, year, and books array\n\n    // TODO: Create a constructor\n\n    // TODO: Create a method to display library details\n\n}",
  expectedOutput: "The 1897 NYC Public Library\nBooks Available:\nThe Fellow of the Ring (423 pages)\nThe Two Towers (352 pages)\nThe Return of the King (416 pages)",
  commonMistakes: [
    "Confusing aggregation with inheritance",
    "Forgetting to pass objects into the constructor",
    "Trying to access object data without a reference",
    "Not looping through the object array",
    "Misunderstanding has-a vs is-a relationships"
  ],
  difficulty: "easy"
},
{
  lessonNumber: 48,
  title: "Composition in Java",
  goal: "Understand composition by building objects from other objects",
  concept: "Composition represents a \"part-of\" relationship between objects. One object is made up of other objects and controls their lifecycle.\n\nKey points:\n- Composition is a strong relationship\n- The contained object cannot exist without the parent object\n- It is commonly used to build complex objects from simpler ones\n\nIn this lesson:\n- A Car object contains an Engine object\n- The Engine is created inside the Car constructor\n- The Car uses the Engine to perform actions\n\nComposition is often preferred over inheritance when modeling real-world objects.",
  starterCode: "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Create a Car object\n\n        // TODO: Print car and engine details\n\n        // TODO: Call the start method on the car\n\n    }\n}\n\nclass Car {\n\n    // TODO: Declare model, year, and Engine variables\n\n    // TODO: Create a constructor that creates an Engine object\n\n    // TODO: Create a start method\n\n}\n\nclass Engine {\n\n    // TODO: Declare engine type variable\n\n    // TODO: Create a constructor\n\n    // TODO: Create a start method\n\n}",
  expectedOutput: "Corvette\n2025\nV8\nYou start the V8 engine\nThe Corvette is running",
  commonMistakes: [
    "Confusing composition with aggregation",
    "Trying to create the Engine outside the Car",
    "Not initializing the Engine inside the constructor",
    "Accessing object parts without proper references",
    "Misunderstanding part-of vs has-a relationships"
  ],
  difficulty: "easy"
},
{
  lessonNumber: 49,
  title: "Wrapper Classes in Java",
  goal: "Understand wrapper classes and how autoboxing and unboxing work",
  concept: "Wrapper classes allow primitive data types to be used as objects. Each primitive type has a corresponding wrapper class.\n\nPrimitive → Wrapper\nint → Integer\ndouble → Double\nchar → Character\nboolean → Boolean\n\nWrapper classes are useful when working with objects, collections, and utility methods.\n\nAutoboxing:\nAutomatically converts a primitive value into its wrapper object.\n\nUnboxing:\nAutomatically converts a wrapper object back into a primitive value.\n\nIn this lesson, primitive values are wrapped into objects and then unwrapped back into primitives.",
  starterCode: "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Create wrapper objects using autoboxing\n\n        // TODO: Convert a wrapper object back to a primitive using unboxing\n\n        // TODO: Print the values\n\n    }\n}",
  expectedOutput: "123\n3.14\n$\ntrue\n123",
  commonMistakes: [
    "Confusing primitives with wrapper classes",
    "Forgetting that wrapper classes are objects",
    "Trying to use primitive methods on wrapper objects",
    "Unboxing a null wrapper value",
    "Wrapping primitives unnecessarily"
  ],
  difficulty: "easy"
},
{
  lessonNumber: 50,
  title: "ArrayList in Java",
  goal: "Use ArrayList to store and manage a dynamic list of values",
  concept: "An ArrayList is a resizable array that stores objects. Unlike normal arrays, an ArrayList can grow or shrink in size.\n\nKey points:\n- ArrayList stores objects (uses wrapper classes for primitives)\n- Size can change dynamically\n- Part of the Collections Framework\n\nCommon ArrayList methods:\nadd() → add an element\nremove() → remove an element\nget() → access an element\nset() → update an element\nsize() → get number of elements\nCollections.sort() → sort the list\n\nIn this lesson, an ArrayList is used to store and manipulate a list of values easily.",
  starterCode: "import java.util.ArrayList;\nimport java.util.Collections;\n\npublic class Main {\n    public static void main(String[] args) {\n\n        ArrayList<String> fruits = new ArrayList<>();\n\n        // TODO: Add elements to the ArrayList\n\n        // TODO: Print the ArrayList\n\n        // TODO: Remove an element\n\n        // TODO: Sort the ArrayList\n\n        // TODO: Print the updated ArrayList\n\n    }\n}",
  expectedOutput: "[apple, banana, orange]\n[banana, orange]",
  commonMistakes: [
    "Forgetting to import ArrayList",
    "Trying to use primitive types instead of wrapper classes",
    "Using array syntax instead of ArrayList methods",
    "Confusing size() with length",
    "Accessing invalid indexes"
  ],
  difficulty: "easy"
},
{
  lessonNumber: 51,
  title: "Exception Handling in Java",
  goal: "Handle runtime errors using try, catch, and finally blocks",
  concept: "An exception is an event that interrupts the normal flow of a program. Exceptions can occur due to invalid input, arithmetic errors, or unexpected situations.\n\nJava uses try, catch, and finally blocks to handle exceptions safely.\n\ntry:\nContains code that may cause an exception\n\ncatch:\nHandles specific exceptions\n\nfinally:\nAlways executes, whether an exception occurs or not\n\nIn this lesson:\n- The program asks the user for a number\n- InputMismatchException is handled for invalid input\n- A general Exception catch acts as a safety net\n- The finally block always runs",
  starterCode: "import java.util.InputMismatchException;\nimport java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n\n        // TODO: Use try block to take integer input\n\n        // TODO: Catch InputMismatchException for invalid input\n\n        // TODO: Add a general catch block\n\n        // TODO: Add a finally block\n\n    }\n}",
  expectedOutput: "Enter a number:\nabc\nThat wasn't a number!\nThis always executes",
  commonMistakes: [
    "Not placing risky code inside try block",
    "Catching Exception before specific exceptions",
    "Forgetting that finally always runs",
    "Not handling input mismatch properly",
    "Confusing compile-time and runtime errors"
  ],
  difficulty: "easy"
},
{
  lessonNumber: 52,
  title: "Writing to a File in Java",
  goal: "Write text data to a file using FileWriter",
  concept: "Java allows programs to write data to files so information can be stored permanently. One common way to write text files is by using FileWriter.\n\nKey points:\n- FileWriter is used for writing text files\n- try-with-resources automatically closes the file\n- IOException handles writing errors\n- FileNotFoundException handles invalid file paths\n\nIn this lesson:\n- A text file is created\n- Multiple lines of text are written to the file\n- Exceptions are handled safely\n\nFile writing is commonly used for saving logs, reports, and user data.",
  starterCode: "import java.io.FileWriter;\nimport java.io.IOException;\n\npublic class Main {\n    public static void main(String[] args) {\n\n        String filePath = \"test.txt\";\n        String content = \"Hello World!\";\n\n        // TODO: Use FileWriter inside a try block\n\n        // TODO: Write text to the file\n\n        // TODO: Handle IOException\n\n    }\n}",
  expectedOutput: "File has been written",
  commonMistakes: [
    "Forgetting to handle IOException",
    "Not closing the FileWriter properly",
    "Using an invalid file path",
    "Overwriting files unintentionally",
    "Confusing FileWriter with reading files"
  ],
  difficulty: "easy"
},
{
  lessonNumber: 53,
  title: "Reading a File in Java",
  goal: "Read text from a file line by line using BufferedReader",
  concept: "Java allows programs to read data from files so stored information can be used later. One common way to read text files is using BufferedReader with FileReader.\n\nKey points:\n- FileReader connects to the file\n- BufferedReader improves reading performance\n- readLine() reads one line at a time\n- The loop continues until readLine() returns null\n\nIn this lesson:\n- A text file is opened using its file path\n- Each line is read and printed to the console\n- Exceptions are handled safely\n\nReading files is commonly used for loading saved data, logs, and configuration files.",
  starterCode: "import java.io.BufferedReader;\nimport java.io.FileReader;\nimport java.io.IOException;\n\npublic class Main {\n    public static void main(String[] args) {\n\n        String filePath = \"test.txt\";\n\n        // TODO: Use BufferedReader and FileReader in a try block\n\n        // TODO: Read the file line by line using a loop\n\n        // TODO: Print each line\n\n        // TODO: Handle IOException\n\n    }\n}",
  expectedOutput: "Roses are Red\nViolets are Blue\nBOOTY BOOTY BOOTY\nROCKIN' EVERWHERE!",
  commonMistakes: [
    "Using the wrong file path",
    "Forgetting to handle IOException",
    "Not checking for null when reading lines",
    "Forgetting to close the reader",
    "Confusing file reading with file writing"
  ],
  difficulty: "easy"
},
{
  lessonNumber: 54,
  title: "Playing Audio in Java",
  goal: "Play and control an audio file using Clip and AudioInputStream",
  concept: "Java can play audio files using the javax.sound.sampled package. This is commonly used for sound effects, music, and alerts.\n\nKey components:\n- File → represents the audio file\n- AudioInputStream → reads the audio data\n- Clip → plays, stops, and resets audio\n\nIn this lesson:\n- An audio file is loaded from the computer\n- A Clip is used to play the sound\n- A simple menu controls playback (play, stop, reset, quit)\n\nThis is often used in games and interactive applications.",
  starterCode: "import javax.sound.sampled.*;\nimport java.io.File;\nimport java.io.IOException;\nimport java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n\n        try{\n            File file = new File(\"sound.wav\");\n            AudioInputStream audioStream = AudioSystem.getAudioInputStream(file);\n            Clip clip = AudioSystem.getClip();\n            clip.open(audioStream);\n\n            Scanner scanner = new Scanner(System.in);\n            String choice = \"\";\n\n            while(!choice.equals(\"Q\")){\n                System.out.println(\"P = Play, S = Stop, R = Reset, Q = Quit\");\n                choice = scanner.next().toUpperCase();\n\n                if(choice.equals(\"P\")){\n                    clip.start();\n                }\n                else if(choice.equals(\"S\")){\n                    clip.stop();\n                }\n                else if(choice.equals(\"R\")){\n                    clip.setMicrosecondPosition(0);\n                }\n                else if(choice.equals(\"Q\")){\n                    clip.close();\n                }\n            }\n            scanner.close();\n        }\n        catch(Exception e){\n            System.out.println(\"Error playing audio\");\n        }\n    }\n}",
  expectedOutput: "P = Play, S = Stop, R = Reset, Q = Quit",
  commonMistakes: [
    "Using an unsupported audio format (must be .wav)",
    "Providing an incorrect file path",
    "Forgetting to open the Clip",
    "Not resetting audio position before replaying",
    "Not closing the Clip properly"
  ],
  difficulty: "easy"
},
{
  lessonNumber: 55,
  title: "Hangman Game using File and ArrayList",
  goal: "Build a simple Hangman game using files, ArrayList, loops, and conditions",
  concept: "This lesson combines multiple Java concepts into a small game project.\n\nIn this program:\n- Words are read from a file into an ArrayList\n- A random word is selected for the game\n- The player guesses letters\n- Wrong guesses are counted\n- Hangman ASCII art shows progress\n- The game ends when the player wins or loses\n\nThis project helps practice file handling, collections, loops, conditionals, and methods together.",
  starterCode: "import java.io.BufferedReader;\nimport java.io.FileReader;\nimport java.io.IOException;\nimport java.util.ArrayList;\nimport java.util.Random;\nimport java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n\n        ArrayList<String> words = new ArrayList<>();\n\n        try(BufferedReader reader = new BufferedReader(new FileReader(\"words.txt\"))){\n            String line;\n            while((line = reader.readLine()) != null){\n                words.add(line);\n            }\n        }\n        catch(IOException e){\n            System.out.println(\"Could not read file\");\n            return;\n        }\n\n        Random random = new Random();\n        String word = words.get(random.nextInt(words.size()));\n\n        Scanner scanner = new Scanner(System.in);\n        ArrayList<Character> guessedLetters = new ArrayList<>();\n        int wrongGuesses = 0;\n\n        // TODO: Use a loop to keep the game running\n\n        // TODO: Display the word with guessed letters\n\n        // TODO: Ask the user to guess a letter\n\n        // TODO: Check if the guess is correct\n\n        // TODO: Increase wrongGuesses if incorrect\n\n        // TODO: End game when player wins or loses\n\n        scanner.close();\n    }\n\n    // TODO: Create a method that returns hangman ASCII art based on wrong guesses\n\n}",
  expectedOutput: "_ _ _ _\nGuess a letter:\na\nCorrect!\n\n_ a _ _\nGuess a letter:\nz\nWrong!\n\nYou lost!\nThe word was: java",
  commonMistakes: [
    "Forgetting to read the file before starting the game",
    "Not handling empty word lists",
    "Allowing repeated guesses without checking",
    "Incorrect loop conditions causing infinite loops",
    "Forgetting to close the Scanner"
  ],
  difficulty: "easy"
},
{
  lessonNumber: 56,
  title: "Working with Dates and Times in Java",
  goal: "Use Java date and time classes to get, format, and compare dates",
  concept: "Java provides built-in classes to work with dates and times in a clean and safe way.\n\nCommonly used classes:\n- LocalDate → date only (year, month, day)\n- LocalTime → time only (hour, minute, second)\n- LocalDateTime → date and time together\n- Instant → UTC timestamp\n\nDateTimeFormatter is used to format dates into readable strings.\n\nIn this lesson:\n- The current date and time are displayed\n- A custom date format is created\n- Two dates are compared using isBefore(), isAfter(), and isEqual()\n\nThese classes are widely used in real-world applications like logging, scheduling, and timestamps.",
  starterCode: "import java.time.LocalDate;\nimport java.time.LocalDateTime;\nimport java.time.format.DateTimeFormatter;\n\npublic class Main {\n    public static void main(String[] args) {\n\n        // TODO: Get the current date\n\n        // TODO: Get the current date and time\n\n        // TODO: Format the date and time using DateTimeFormatter\n\n        // TODO: Create two dates and compare them\n\n    }\n}",
  expectedOutput: "2025-01-01\n01-01-2025 12:00:00\n2024-12-25T12:00 is earlier than 2025-01-01T00:00",
  commonMistakes: [
    "Using old Date and Calendar classes instead of java.time",
    "Using incorrect date format patterns",
    "Forgetting to import DateTimeFormatter",
    "Comparing dates using == instead of methods",
    "Confusing LocalDate with LocalDateTime"
  ],
  difficulty: "easy"
},
{
  lessonNumber: 57,
  title: "Anonymous Classes in Java",
  goal: "Use anonymous classes to override methods for one-time use",
  concept: "An anonymous class is a class without a name. It is used when you need to change or add behavior only once, without creating a separate class.\n\nKey points:\n- Anonymous classes cannot be reused\n- They are created at the same time as the object\n- Often used for quick overrides, callbacks, or event handling\n\nIn this lesson:\n- A Dog class has a speak() method\n- One Dog object uses the normal behavior\n- Another Dog object uses an anonymous class to override speak()\n\nThis allows custom behavior without creating a new named class.",
  starterCode: "public class Main {\n    public static void main(String[] args) {\n\n        Dog dog1 = new Dog();\n\n        // TODO: Create a Dog object using an anonymous class\n\n        // TODO: Call speak() on both objects\n\n    }\n}\n\nclass Dog {\n\n    void speak(){\n        System.out.println(\"The dog goes *woof*\");\n    }\n\n}",
  expectedOutput: "The dog goes *woof*\nScooby Doo says *Ruh Roh*",
  commonMistakes: [
    "Forgetting to override the method correctly",
    "Trying to reuse an anonymous class",
    "Missing curly braces after new ClassName()",
    "Confusing anonymous classes with lambda expressions",
    "Overusing anonymous classes when a normal class is clearer"
  ],
  difficulty: "easy"
},
{
  lessonNumber: 58,
  title: "Timer and TimerTask in Java",
  goal: "Schedule a task to run automatically using Timer and TimerTask",
  concept: "The Timer class is used to schedule tasks to run at a specific time or repeatedly at fixed intervals.\n\nTimerTask represents the task that will be executed by the Timer. To use it, you create a class (or anonymous class) that extends TimerTask and override the run() method.\n\nKey points:\n- Timer controls when tasks run\n- TimerTask defines what code runs\n- schedule(task, delay, period) runs a task repeatedly\n\nIn this lesson:\n- A Timer is created\n- An anonymous TimerTask prints a message\n- The task runs every second automatically\n\nTimers are useful for reminders, updates, and background tasks.",
  starterCode: "import java.util.Timer;\nimport java.util.TimerTask;\n\npublic class Main {\n    public static void main(String[] args) {\n\n        // TODO: Create a Timer object\n\n        // TODO: Create a TimerTask using an anonymous class\n\n        // TODO: Override the run() method\n\n        // TODO: Schedule the task to run every second\n\n    }\n}",
  expectedOutput: "Hello!\nHello!\nHello!",
  commonMistakes: [
    "Forgetting to override the run() method",
    "Using the wrong delay or period values",
    "Forgetting that time is in milliseconds",
    "Not cancelling the timer when no longer needed",
    "Confusing Timer with Thread"
  ],
  difficulty: "easy"
},
{
  lessonNumber: 59,
  title: "Countdown Timer using Timer",
  goal: "Create a simple countdown timer using Timer and TimerTask",
  concept: "A countdown timer runs a task repeatedly while decreasing a counter until it reaches zero.\n\nIn Java:\n- Timer schedules tasks\n- TimerTask defines the code that runs\n- cancel() stops the timer when finished\n\nIn this lesson:\n- The user enters the number of seconds\n- A TimerTask runs every second\n- The counter decreases each time\n- The timer stops automatically at zero\n\nThis pattern is commonly used for timers, delays, and scheduled events.",
  starterCode: "import java.util.Scanner;\nimport java.util.Timer;\nimport java.util.TimerTask;\n\npublic class Main {\n    public static void main(String[] args) {\n\n        Scanner scanner = new Scanner(System.in);\n\n        System.out.print(\"Enter countdown seconds: \");\n        int seconds = scanner.nextInt();\n\n        Timer timer = new Timer();\n\n        TimerTask task = new TimerTask() {\n            int timeLeft = seconds;\n\n            @Override\n            public void run() {\n                if(timeLeft > 0){\n                    System.out.println(timeLeft);\n                    timeLeft--;\n                }\n                else{\n                    System.out.println(\"Time's up!\");\n                    timer.cancel();\n                }\n            }\n        };\n\n        timer.scheduleAtFixedRate(task, 0, 1000);\n        scanner.close();\n    }\n}",
  expectedOutput: "Enter countdown seconds:\n3\n3\n2\n1\nTime's up!",
  commonMistakes: [
    "Forgetting to cancel the timer",
    "Using seconds instead of milliseconds",
    "Not checking when the counter reaches zero",
    "Trying to reuse a cancelled Timer",
    "Closing Scanner too early"
  ],
  difficulty: "easy"
},
{
  lessonNumber: 60,
  title: "Generics in Java",
  goal: "Use generics to create flexible and reusable classes",
  concept: "Generics allow classes and methods to work with different data types while providing type safety.\n\nKey points:\n- <T> represents a generic type\n- Generics avoid unnecessary casting\n- One class can work with many data types\n- Multiple generic types can be used (e.g., <T, U>)\n\nIn this lesson:\n- A Box class stores any type of value\n- A Product class stores two different types (item and price)\n- Values are stored and retrieved safely using generics\n\nGenerics are widely used in collections like ArrayList and HashMap.",
  starterCode: "public class Main {\n    public static void main(String[] args) {\n\n        Box<String> box = new Box<>();\n        box.setValue(\"Hello Generics\");\n\n        System.out.println(box.getValue());\n\n        Product<String, Integer> product = new Product<>(\"Laptop\", 50000);\n        System.out.println(product.getItem() + \" costs \" + product.getPrice());\n\n    }\n}\n\nclass Box<T> {\n\n    private T value;\n\n    void setValue(T value){\n        this.value = value;\n    }\n\n    T getValue(){\n        return value;\n    }\n}\n\nclass Product<T, U> {\n\n    private T item;\n    private U price;\n\n    Product(T item, U price){\n        this.item = item;\n        this.price = price;\n    }\n\n    T getItem(){\n        return item;\n    }\n\n    U getPrice(){\n        return price;\n    }\n}",
  expectedOutput: "Hello Generics\nLaptop costs 50000",
  commonMistakes: [
    "Forgetting to specify the generic type",
    "Using primitive types instead of wrapper classes",
    "Confusing generic type names",
    "Trying to use generics with static variables",
    "Overcomplicating simple use cases"
  ],
  difficulty: "easy"
},
{
  lessonNumber: 61,
  title: "HashMap in Java",
  goal: "Store and access data using key-value pairs with HashMap",
  concept: "A HashMap stores data as key-value pairs. Each key is unique and is used to retrieve its corresponding value.\n\nKey points:\n- HashMap does not maintain order\n- Keys must be unique\n- Values can be duplicated\n- Very fast for lookups using keys\n\nCommon methods:\nput() → add a key-value pair\nget() → get value using key\ncontainsKey() → check if key exists\nkeySet() → get all keys\n\nIn this lesson:\n- A HashMap stores item names and prices\n- Multiple entries are added\n- A loop prints each key with its value\n\nHashMaps are widely used for dictionaries, settings, and lookup tables.",
  starterCode: "import java.util.HashMap;\n\npublic class Main {\n    public static void main(String[] args) {\n\n        HashMap<String, Double> prices = new HashMap<>();\n\n        // TODO: Add items and prices to the map\n\n        // TODO: Loop through the map and print each item and price\n\n    }\n}",
  expectedOutput: "Apple: 1.99\nBanana: 0.99\nOrange: 1.49",
  commonMistakes: [
    "Using duplicate keys unintentionally",
    "Trying to access values without a key",
    "Assuming HashMap maintains insertion order",
    "Forgetting to import HashMap",
    "Confusing HashMap with ArrayList"
  ],
  difficulty: "easy"
},
{
  lessonNumber: 62,
  title: "Enums in Java",
  goal: "Use enums to represent fixed sets of constant values",
  concept: "An enum (short for enumeration) is a special data type that represents a fixed set of constants.\n\nEnums are useful when a variable should only have a limited number of possible values, such as days of the week.\n\nKey points:\n- Enum values are constants\n- valueOf() converts a String into an enum value\n- Enums work perfectly with switch statements\n- Enums can have fields, constructors, and methods\n\nIn this lesson:\n- An enum represents days of the week\n- User input is converted into an enum\n- A switch statement reacts based on the selected day\n- Invalid input is handled safely",
  starterCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n\n        Scanner scanner = new Scanner(System.in);\n\n        System.out.print(\"Enter a day of the week: \");\n        String input = scanner.nextLine().toUpperCase();\n\n        try{\n            Day day = Day.valueOf(input);\n\n            switch(day){\n                case MONDAY:\n                case TUESDAY:\n                case WEDNESDAY:\n                case THURSDAY:\n                case FRIDAY:\n                    System.out.println(\"It's a weekday\");\n                    break;\n                case SATURDAY:\n                case SUNDAY:\n                    System.out.println(\"It's the weekend\");\n                    break;\n            }\n        }\n        catch(IllegalArgumentException e){\n            System.out.println(\"Invalid day entered\");\n        }\n\n        scanner.close();\n    }\n}\n\nenum Day {\n\n    MONDAY(\"Weekday\"),\n    TUESDAY(\"Weekday\"),\n    WEDNESDAY(\"Weekday\"),\n    THURSDAY(\"Weekday\"),\n    FRIDAY(\"Weekday\"),\n    SATURDAY(\"Weekend\"),\n    SUNDAY(\"Weekend\");\n\n    private final String type;\n\n    Day(String type){\n        this.type = type;\n    }\n\n    String getType(){\n        return type;\n    }\n}",
  expectedOutput: "Enter a day of the week:\nSaturday\nIt's the weekend",
  commonMistakes: [
    "Not converting input to uppercase before valueOf()",
    "Forgetting to handle IllegalArgumentException",
    "Using strings instead of enums in switch statements",
    "Misspelling enum constants",
    "Trying to create enum objects using new"
  ],
  difficulty: "easy"
},
{
  lessonNumber: 63,
  title: "Basic Threading in Java",
  goal: "Create and run a background thread using the Runnable interface",
  concept: "Threading allows a Java program to perform multiple tasks at the same time. This is useful for tasks that take time, such as user input, file operations, or background processes.\n\nThere are two common ways to create threads:\n- Extending the Thread class\n- Implementing the Runnable interface (recommended)\n\nIn this lesson:\n- A Runnable class defines background work\n- A Thread runs alongside the main program\n- The thread is set as a daemon thread\n- The main thread continues running independently\n\nDaemon threads automatically stop when the main program ends.",
  starterCode: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n\n        Scanner scanner = new Scanner(System.in);\n\n        MyRunnable myRunnable = new MyRunnable();\n        Thread thread = new Thread(myRunnable);\n        thread.setDaemon(true);\n        thread.start();\n\n        System.out.println(\"You have 10 seconds to enter your name\");\n        System.out.print(\"Enter your name: \");\n        String name = scanner.nextLine();\n        System.out.println(\"Hello \" + name);\n\n        scanner.close();\n    }\n}\n\nclass MyRunnable implements Runnable {\n\n    @Override\n    public void run() {\n        for(int i = 10; i > 0; i--){\n            System.out.println(\"Time left: \" + i);\n            try{\n                Thread.sleep(1000);\n            }\n            catch(InterruptedException e){\n                System.out.println(\"Thread interrupted\");\n            }\n        }\n    }\n}",
  expectedOutput: "Time left: 10\nTime left: 9\n...\nYou have 10 seconds to enter your name\nEnter your name:\nHello Alex",
  commonMistakes: [
    "Forgetting to call start() instead of run()",
    "Not handling InterruptedException",
    "Confusing daemon threads with normal threads",
    "Blocking the main thread unintentionally",
    "Assuming threads run in a fixed order"
  ],
  difficulty: "easy"
},
{
  lessonNumber: 64,
  title: "Multithreading in Java",
  goal: "Run multiple threads at the same time and wait for them to finish",
  concept: "Multithreading allows a Java program to run multiple threads concurrently. Each thread runs independently and can perform its own task.\n\nKey points:\n- A Thread runs a set of instructions independently\n- Multiple threads can run at the same time\n- join() makes one thread wait until another thread finishes\n\nIn this lesson:\n- Two threads are created using the Runnable interface\n- Each thread prints a message repeatedly\n- The main thread waits for both threads to finish using join()\n- The program ends only after all threads complete\n\nThis pattern is commonly used in games, background processing, and parallel tasks.",
  starterCode: "public class Main {\n    public static void main(String[] args) {\n\n        Thread thread1 = new Thread(new MyRunnable(\"PING\"));\n        Thread thread2 = new Thread(new MyRunnable(\"PONG\"));\n\n        System.out.println(\"GAME START!\");\n\n        // TODO: Start both threads\n\n        // TODO: Use join() to wait for threads to finish\n\n        // TODO: Print GAME OVER when done\n\n    }\n}\n\nclass MyRunnable implements Runnable {\n\n    private String message;\n\n    MyRunnable(String message){\n        this.message = message;\n    }\n\n    @Override\n    public void run() {\n        for(int i = 1; i <= 5; i++){\n            System.out.println(message);\n            try{\n                Thread.sleep(500);\n            }\n            catch(InterruptedException e){\n                System.out.println(\"Thread interrupted\");\n            }\n        }\n    }\n}",
  expectedOutput: "GAME START!\nPING\nPONG\nPING\nPONG\nPING\nPONG\nPING\nPONG\nPING\nPONG\nGAME OVER!",
  commonMistakes: [
    "Calling run() instead of start()",
    "Forgetting to use join()",
    "Assuming threads run in a fixed order",
    "Not handling InterruptedException",
    "Blocking the main thread unintentionally"
  ],
  difficulty: "medium"
},
{
  lessonNumber: 65,
  title: "Alarm Clock using Threads and Time",
  goal: "Create a simple alarm clock using LocalTime and a background thread",
  concept: "An alarm clock program continuously checks the current time and triggers an action when a specific time is reached.\n\nIn Java:\n- LocalTime represents time without a date\n- DateTimeFormatter is used to validate time format\n- A background thread allows time checking without blocking the main program\n\nIn this lesson:\n- The user enters an alarm time\n- The input is validated using DateTimeFormatter\n- A background thread checks the time every second\n- When the alarm time is reached, a message is displayed\n\nThis pattern is commonly used for reminders, alarms, and scheduled events.",
  starterCode: "import java.time.LocalTime;\nimport java.time.format.DateTimeFormatter;\nimport java.time.format.DateTimeParseException;\nimport java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n\n        Scanner scanner = new Scanner(System.in);\n        DateTimeFormatter formatter = DateTimeFormatter.ofPattern(\"HH:mm:ss\");\n        LocalTime alarmTime;\n\n        while(true){\n            try{\n                System.out.print(\"Enter alarm time (HH:mm:ss): \");\n                String input = scanner.nextLine();\n                alarmTime = LocalTime.parse(input, formatter);\n                break;\n            }\n            catch(DateTimeParseException e){\n                System.out.println(\"Invalid time format. Try again.\");\n            }\n        }\n\n        Thread alarmThread = new Thread(new AlarmClock(alarmTime));\n        alarmThread.start();\n\n        scanner.close();\n    }\n}\n\nclass AlarmClock implements Runnable {\n\n    private LocalTime alarmTime;\n\n    AlarmClock(LocalTime alarmTime){\n        this.alarmTime = alarmTime;\n    }\n\n    @Override\n    public void run() {\n        while(true){\n            LocalTime now = LocalTime.now().withNano(0);\n\n            if(now.equals(alarmTime)){\n                System.out.println(\"⏰ ALARM! Time reached: \" + alarmTime);\n                break;\n            }\n\n            try{\n                Thread.sleep(1000);\n            }\n            catch(InterruptedException e){\n                System.out.println(\"Alarm interrupted\");\n                break;\n            }\n        }\n    }\n}",
  expectedOutput: "Enter alarm time (HH:mm:ss):\n14:30:00\n⏰ ALARM! Time reached: 14:30:00",
  commonMistakes: [
    "Using the wrong time format",
    "Comparing LocalTime with nanoseconds included",
    "Blocking the main thread instead of using a background thread",
    "Not handling DateTimeParseException",
    "Forgetting to sleep inside the loop"
  ],
  difficulty: "medium"
}


]