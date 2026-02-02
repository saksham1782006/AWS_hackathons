const lessons = [
  {
    lessonNumber: 1,
    title: "Primitive and Reference Variables",
    goal: "Declare and use primitive and reference variables correctly in Java",
    concept:
      "Variables are reusable containers for values. In Java, primitive types store simple values directly, while reference types store memory addresses pointing to objects such as String.",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n        // TODO: Declare an int variable named age and assign a value\n\n        // TODO: Declare a double variable named price and assign a value\n\n        // TODO: Declare a char variable named grade and assign a value\n\n        // TODO: Declare a boolean variable named isStudent and assign a value\n\n        // TODO: Declare a String variable named name and assign a value\n\n        // TODO: Print all variables using System.out.println\n    }\n}",
    expectedOutput: "age=21\nprice=19.99\ngrade=A\nisStudent=true\nname=John",
    commonMistakes: [
      "Using double quotes for char values",
      "Forgetting to initialize variables",
      "Using incorrect data types",
      "Missing semicolons",
    ],
    difficulty: "medium",
  },
  {
    lessonNumber: 2,
    title: "User Input with Scanner",
    goal: "Read user input using Scanner and use conditional logic based on input values",
    concept:
      "The Scanner class is used to take input from the user in Java. Different methods like nextLine(), nextInt(), nextDouble(), and nextBoolean() are used to read different data types. Conditional statements can be used to make decisions based on user input.",
    starterCode:
      "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n\n        Scanner scanner = new Scanner(System.in);\n\n        // TODO: Ask the user for their name and store it in a String variable\n\n        // TODO: Ask the user for their age and store it in an int variable\n\n        // TODO: Ask the user for their GPA and store it in a double variable\n\n        // TODO: Ask the user if they are a student and store it in a boolean variable\n\n        // TODO: Print the user's name, age, and GPA\n\n        // TODO: Use an if-else statement to print whether the user is enrolled in classes\n\n        scanner.close();\n    }\n}",
    expectedOutput:
      "Hello John\nYou are 21 years old\nYour gpa is: 3.5\nYou are enrolled in classes",
    commonMistakes: [
      "Using nextLine() incorrectly after nextInt() or nextDouble()",
      "Entering invalid input types",
      "Forgetting to close the Scanner",
      "Incorrect boolean input (not true/false)",
    ],
    difficulty: "medium",
  },
  {
    lessonNumber: 3,
    title: "Mad Libs with User Input",
    goal: "Use Scanner to collect multiple String inputs and generate dynamic output",
    concept:
      "The Scanner class allows a program to take user input at runtime. Multiple String values can be read using nextLine() and combined to create dynamic sentences, such as a Mad Libs game.",
    starterCode:
      "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n\n        // MAD LIBS GAME\n\n        Scanner scanner = new Scanner(System.in);\n\n        // TODO: Declare String variables for adjectives, noun, and verb\n\n        // TODO: Prompt the user for each word using System.out.print\n\n        // TODO: Read input using scanner.nextLine()\n\n        // TODO: Print the completed Mad Libs story using the collected words\n\n        scanner.close();\n    }\n}",
    expectedOutput:
      "Today I went to a funny zoo.\nIn an exhibit, I saw a dog.\ndog was playful and running!\nI was excited!",
    commonMistakes: [
      "Forgetting to declare variables before using them",
      "Using nextInt() instead of nextLine()",
      "Incorrect string concatenation",
      "Missing spaces or punctuation in output",
    ],
    difficulty: "medium",
  },
  {
    lessonNumber: 4,
    title: "Arithmetic Operators",
    goal: "Understand and use arithmetic operators in Java",
    concept:
      "Arithmetic operators are used to perform basic mathematical operations. Java supports addition (+), subtraction (-), multiplication (*), division (/), and modulus (%). These operators work with numeric data types such as int and double.",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        // Arithmetic Operators\n\n        int x = 10;\n        int y = 2;\n        int z;\n\n        // TODO: Use arithmetic operators with x and y\n        // TODO: Store the result in z\n        // TODO: Print the value of z\n\n    }\n}",
    expectedOutput: "0",
    commonMistakes: [
      "Forgetting to assign a value to z before printing",
      "Confusing division with modulus",
      "Using incorrect operators",
      "Division by zero",
    ],
    difficulty: "medium",
  },
  {
    lessonNumber: 5,
    title: "Arithmetic Operators",
    goal: "Practice arithmetic operators using different values",
    concept:
      "Arithmetic operators perform mathematical operations such as addition, subtraction, multiplication, division, and modulus. The result depends on the operands and the operator used.",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        // Arithmetic Operators\n\n        int a = 20;\n        int b = 6;\n        int result;\n\n        // TODO: Perform division using a and b\n        // TODO: Store the result in result\n        // TODO: Print the value of result\n\n    }\n}",
    expectedOutput: "3",
    commonMistakes: [
      "Expecting a decimal result from integer division",
      "Forgetting to assign the result before printing",
      "Using the wrong operator",
      "Division by zero",
    ],
    difficulty: "medium",
  },
  {
    lessonNumber: 6,
    title: "Conditional Statements (if / else)",
    goal: "Use if, else if, and else statements to make decisions based on user input",
    concept:
      "Conditional statements allow a program to execute different blocks of code depending on whether a condition is true or false. Java supports if, else if, and else for multi-condition decision making.",
    starterCode:
      "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n\n        Scanner scanner = new Scanner(System.in);\n\n        // TODO: Ask the user for their name\n        // TODO: Ask the user for their age\n        // TODO: Ask the user if they are a student (true/false)\n\n        // TODO: Check if the name is empty and respond accordingly\n\n        // TODO: Use if-else-if to classify age group\n\n        // TODO: Check if the user is a student\n\n        scanner.close();\n    }\n}",
    expectedOutput: "Hello Alex!\nYou are an adult!\nYou are a student!",
    commonMistakes: [
      "Using == instead of .equals() or isEmpty() for String comparison",
      "Incorrect condition order in else-if ladder",
      "Not handling empty input",
      "Forgetting to close the Scanner",
    ],
    difficulty: "medium",
  },
  {
    lessonNumber: 7,
    title: "Random Numbers and Booleans",
    goal: "Generate random numbers and boolean values using the Random class",
    concept:
      "The Random class in Java is used to generate pseudo-random values. Methods like nextInt(range) generate numbers within a range, while nextBoolean() returns either true or false. Random values are commonly used in games and simulations.",
    starterCode:
      "import java.util.Random;\n\npublic class Main {\n    public static void main(String[] args) {\n\n        Random random = new Random();\n\n        // TODO: Generate a random number between 1 and 6\n\n        // TODO: Generate a random boolean value\n\n        // TODO: Print the number\n\n        // TODO: Print HEADS if true, otherwise print TAILS\n\n    }\n}",
    expectedOutput: "A number between 1 and 6\nHEADS or TAILS",
    commonMistakes: [
      "Using incorrect bounds in nextInt()",
      "Assuming nextInt() includes the upper limit",
      "Forgetting to handle both true and false cases",
      "Not understanding randomness produces different results each run",
    ],
    difficulty: "medium",
  },
  {
    lessonNumber: 8,
    title: "Math Class Operations",
    goal: "Use the Math class to perform mathematical calculations in Java",
    concept:
      "The Math class provides built-in methods and constants such as PI and E to perform common mathematical operations including power, square root, absolute value, rounding, maximum, and minimum.",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Print the value of Math.PI\n        // TODO: Print the value of Math.E\n\n        double result;\n\n        // TODO: Use Math.pow()\n        // TODO: Use Math.abs()\n        // TODO: Use Math.sqrt()\n        // TODO: Use Math.round()\n        // TODO: Use Math.ceil()\n        // TODO: Use Math.floor()\n        // TODO: Use Math.max()\n        // TODO: Use Math.min()\n\n        // TODO: Print the final value of result\n\n    }\n}",
    expectedOutput: "20.0",
    commonMistakes: [
      "Forgetting Math methods are static",
      "Using incorrect parameter types",
      "Expecting Math.round() to return a double",
      "Overwriting result unintentionally",
    ],
    difficulty: "medium",
  },
  {
    lessonNumber: 9,
    title: "Formatted Output using printf",
    goal: "Format output using printf specifiers, precision, flags, and width",
    concept:
      "The printf() method is used to format output in Java. Format specifiers define how values are displayed, including data type, precision, padding, and alignment.",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Declare variables for name, first letter, age, height, and employment status\n\n        // TODO: Use printf to display each variable with the correct format specifier\n\n        // TODO: Display formatted decimal values using precision\n\n        // TODO: Format integer IDs using zero padding and width\n\n    }\n}",
    expectedOutput: "id: 7890",
    commonMistakes: [
      "Using the wrong format specifier",
      "Forgetting newline characters (\\n)",
      "Confusing precision with width",
      "Using printf without matching arguments",
    ],
    difficulty: "medium",
  },
  {
    lessonNumber: 10,
    title: "Compound Interest Calculator",
    goal: "Calculate compound interest using user input and the Math.pow() method",
    concept:
      "Compound interest is calculated using the formula: A = P(1 + r/n)^(n·t), where P is the principal, r is the annual interest rate, n is the number of times interest is compounded per year, and t is the number of years. Java can compute this efficiently using Math.pow().",
    starterCode:
      "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n\n        Scanner scanner = new Scanner(System.in);\n\n        // TODO: Declare variables for principal, rate, times compounded, years, and final amount\n\n        // TODO: Take user input for each value\n\n        // TODO: Convert interest rate percentage to decimal\n\n        // TODO: Calculate compound interest using Math.pow()\n\n        // TODO: Print the final amount using printf with 2 decimal places\n\n        scanner.close();\n    }\n}",
    expectedOutput: "The amount after 5 years is $1276.28",
    commonMistakes: [
      "Forgetting to divide the interest rate by 100",
      "Using incorrect operator precedence in the formula",
      "Not using Math.pow() for exponent calculation",
      "Incorrect formatting of decimal output",
    ],
    difficulty: "medium",
  },
  {
    lessonNumber: 11,
    title: "Nested If Statements",
    goal: "Apply nested if statements to calculate discounts based on multiple conditions",
    concept:
      "Nested if statements allow a program to check multiple related conditions. This is useful when decisions depend on more than one boolean value, such as applying different discounts based on user categories.",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Declare boolean variables isStudent and isSenior\n        // TODO: Declare a double variable price\n\n        // TODO: Use nested if statements to apply discounts\n        // Student + Senior → 30% discount\n        // Student only → 10% discount\n        // Senior only → 20% discount\n        // No discount otherwise\n\n        // TODO: Print the final ticket price using printf\n\n    }\n}",
    expectedOutput: "The price of a ticket is: $6.99",
    commonMistakes: [
      "Applying multiple discounts incorrectly",
      "Incorrect nesting of if statements",
      "Forgetting to update the price variable",
      "Incorrect percentage calculations",
    ],
    difficulty: "medium",
  },
  {
    lessonNumber: 12,
    title: "String Methods",
    goal: "Use built-in String methods to analyze and modify text",
    concept:
      "Java provides many built-in String methods such as length(), charAt(), indexOf(), toUpperCase(), toLowerCase(), trim(), replace(), contains(), and equalsIgnoreCase() to work with and manipulate text data.",
    starterCode:
      'public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Declare a String variable named name\n\n        // TODO: Use String methods to modify the value of name\n\n        // TODO: Check if the name is empty\n\n        // TODO: Check if the name contains a space\n\n        // TODO: Compare the name with "password" ignoring case\n\n    }\n}',
    expectedOutput:
      "Hello bra cade\nYour name contains a space\nHello bra cade",
    commonMistakes: [
      "Forgetting that String methods return new values",
      "Not storing the modified String back into the variable",
      "Using == instead of equals() or equalsIgnoreCase()",
      "Assuming replace() changes only the first match",
    ],
    difficulty: "medium",
  },
  {
    lessonNumber: 13,
    title: "Substring and String Parsing",
    goal: "Extract parts of a string using the substring() method",
    concept:
      "The substring() method is used to extract a portion of a string using starting and ending indexes. It is commonly used to parse structured text such as emails, usernames, and domains.",
    starterCode:
      "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n\n        Scanner scanner = new Scanner(System.in);\n\n        // TODO: Ask the user to enter an email address\n\n        // TODO: Check if the email contains '@'\n\n        // TODO: Extract the username using substring()\n\n        // TODO: Extract the domain using substring()\n\n        // TODO: Print the username and domain\n\n        scanner.close();\n    }\n}",
    expectedOutput: "john.doe\ngmail.com",
    commonMistakes: [
      "Using incorrect substring indexes",
      "Forgetting to check if '@' exists",
      "Off-by-one errors when extracting the domain",
      "Assuming all input strings are valid emails",
    ],
    difficulty: "medium",
  },
  {
    lessonNumber: 14,
    title: "Weight Conversion Program",
    goal: "Use conditional statements to convert values based on user choice",
    concept:
      "Programs can use conditional logic to perform different calculations based on user input. This example converts weight between pounds (lbs) and kilograms (kgs) using standard conversion formulas.",
    starterCode:
      "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n\n        Scanner scanner = new Scanner(System.in);\n\n        // TODO: Display conversion options to the user\n\n        // TODO: Read the user's choice\n\n        // TODO: If choice is 1, convert lbs to kgs\n\n        // TODO: If choice is 2, convert kgs to lbs\n\n        // TODO: Handle invalid choices\n\n        scanner.close();\n    }\n}",
    expectedOutput: "The new weight in kgs is: 45.36",
    commonMistakes: [
      "Using incorrect conversion factors",
      "Not handling invalid menu choices",
      "Forgetting to format output to two decimal places",
      "Reading input in the wrong order",
    ],
    difficulty: "medium",
  },
  {
    lessonNumber: 15,
    title: "Ternary Operator",
    goal: "Use the ternary operator to make decisions in a single line",
    concept:
      "The ternary operator is a shorthand alternative to if-else statements. It evaluates a condition and returns one of two values depending on whether the condition is true or false.",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Declare an integer variable named number\n\n        // TODO: Use the ternary operator to check if the number is even or odd\n\n        // TODO: Store the result in a String variable\n\n        // TODO: Print the result\n\n    }\n}",
    expectedOutput: "EVEN",
    commonMistakes: [
      "Forgetting to store the result of the ternary operator",
      "Confusing the order of true and false values",
      "Using complex logic that reduces readability",
      "Not printing the final result",
    ],
    difficulty: "medium",
  },
  {
    lessonNumber: 16,
    title: "Temperature Conversion with Ternary Operator",
    goal: "Convert temperatures using user input and the ternary operator",
    concept:
      "The ternary operator can be used to choose between two calculations based on a condition. In this lesson, it selects the correct temperature conversion formula depending on the unit chosen by the user.",
    starterCode:
      "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n\n        Scanner scanner = new Scanner(System.in);\n\n        // TODO: Ask the user to enter a temperature value\n\n        // TODO: Ask whether to convert to Celsius or Fahrenheit (C or F)\n\n        // TODO: Use the ternary operator to perform the correct conversion\n\n        // TODO: Print the converted temperature with one decimal place\n\n        scanner.close();\n    }\n}",
    expectedOutput: "0.0°C",
    commonMistakes: [
      "Using equals() instead of equalsIgnoreCase() or toUpperCase()",
      "Applying the wrong conversion formula",
      "Forgetting operator precedence in calculations",
      "Not formatting the output correctly",
    ],
    difficulty: "medium",
  },
  {
    lessonNumber: 17,
    title: "Enhanced Switch Statement",
    goal: "Use the enhanced switch statement to handle multiple cases cleanly",
    concept:
      "The enhanced switch statement (introduced in Java 14) allows multiple values per case and uses arrow syntax (->) to simplify conditional logic. It is a cleaner alternative to long if-else chains.",
    starterCode:
      "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n\n        Scanner scanner = new Scanner(System.in);\n\n        // TODO: Ask the user to enter a day of the week\n\n        // TODO: Use an enhanced switch statement to check weekday or weekend\n\n        // TODO: Handle invalid day input using default case\n\n        scanner.close();\n    }\n}",
    expectedOutput: "It is a weekday 😩",
    commonMistakes: [
      "Using old switch syntax with break",
      "Forgetting that switch is case-sensitive for Strings",
      "Not handling invalid input",
      "Running enhanced switch on Java versions below 14",
    ],
    difficulty: "medium",
  },
  {
    lessonNumber: 18,
    title: "Calculator using Enhanced Switch",
    goal: "Build a calculator using switch expressions and input validation",
    concept:
      "A calculator can use the enhanced switch statement to perform different operations based on a chosen operator. This lesson also demonstrates input validation, division-by-zero handling, and the use of Math.pow() for exponentiation.",
    starterCode:
      "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n\n        Scanner scanner = new Scanner(System.in);\n\n        // TODO: Ask the user for the first number\n\n        // TODO: Ask the user for an operator (+, -, *, /, ^)\n\n        // TODO: Ask the user for the second number\n\n        // TODO: Use an enhanced switch statement to perform the calculation\n\n        // TODO: Handle division by zero and invalid operators\n\n        // TODO: Print the result only if the operation is valid\n\n        scanner.close();\n    }\n}",
    expectedOutput: "8.0",
    commonMistakes: [
      "Forgetting to handle division by zero",
      "Using the wrong operator character",
      "Not validating invalid operators",
      "Printing the result even when the operation is invalid",
    ],
    difficulty: "medium",
  },
  {
    lessonNumber: 19,
    title: "Logical Operators",
    goal: "Use logical operators to combine multiple conditions",
    concept:
      "Logical operators allow programs to evaluate multiple conditions at once. AND (&&) requires all conditions to be true, OR (||) requires at least one condition to be true, and NOT (!) reverses a boolean value.",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Declare a double variable for temperature\n        // TODO: Declare a boolean variable to indicate if it is sunny\n\n        // TODO: Use logical operators (&&, ||, !) to evaluate weather conditions\n\n        // TODO: Print appropriate weather messages\n\n    }\n}",
    expectedOutput: "The weather is BAD 😩",
    commonMistakes: [
      "Mixing up && and || conditions",
      "Forgetting operator precedence",
      "Not using parentheses for clarity",
      "Misunderstanding the NOT (!) operator",
    ],
    difficulty: "medium",
  },
  {
    lessonNumber: 20,
    title: "While and Do-While Loops",
    goal: "Use while and do-while loops to repeatedly execute code until conditions are met",
    concept:
      "Loops allow a program to repeat execution based on a condition. A while loop checks the condition before running, while a do-while loop runs at least once before checking the condition. These loops are useful for input validation and user-controlled repetition.",
    starterCode:
      "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        \n        Scanner scanner = new Scanner(System.in);\n\n        // TODO: Use a while loop to keep asking for a name until it is not empty\n\n        // TODO: Use a while loop to keep asking the user to press Q to quit\n\n        // TODO: Use a do-while loop to prevent negative age input\n\n        // TODO: Use a do-while loop to accept a number between 1 and 10 only\n\n        scanner.close();\n    }\n}",
    expectedOutput: "You picked number: 5",
    commonMistakes: [
      "Creating infinite loops by not updating variables",
      "Using while instead of do-while for input validation",
      "Incorrect loop conditions",
      "Mixing nextLine() with nextInt() incorrectly",
    ],
    difficulty: "medium",
  },
  {
    lessonNumber: 21,
    title: "Number Guessing Game",
    goal: "Build a number guessing game using loops, conditionals, and random numbers",
    concept:
      "A number guessing game combines loops, conditional logic, and random number generation. The program repeatedly asks the user for input until the correct number is guessed, while tracking the number of attempts.",
    starterCode:
      "import java.util.Random;\nimport java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args){\n\n        // NUMBER GUESSING GAME\n\n        Random random = new Random();\n        Scanner scanner = new Scanner(System.in);\n\n        // TODO: Declare variables for guess, attempts, min, and max\n\n        // TODO: Generate a random number within the range\n\n        // TODO: Use a do-while loop to keep asking for guesses\n\n        // TODO: Give feedback for too low, too high, or correct guesses\n\n        // TODO: Display total number of attempts when guessed correctly\n\n        scanner.close();\n    }\n}",
    expectedOutput: "CORRECT! The number was 42\n# of attempts: 5",
    commonMistakes: [
      "Generating a new random number inside the loop",
      "Forgetting to increment the attempts counter",
      "Using the wrong loop condition",
      "Not handling guesses outside the allowed range",
    ],
    difficulty: "medium",
  },
  {
    lessonNumber: 22,
    title: "For Loop Countdown",
    goal: "Use a for loop to execute code a fixed number of times",
    concept:
      "A for loop is used when the number of iterations is known in advance. It consists of initialization, condition, and update expressions. This example uses a countdown timer and pauses execution using Thread.sleep().",
    starterCode:
      "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) throws InterruptedException {\n\n        Scanner scanner = new Scanner(System.in);\n\n        // TODO: Ask the user how many seconds to count down from\n\n        // TODO: Use a for loop to count down to 1\n\n        // TODO: Pause the program for 1 second between each count\n\n        // TODO: Print a final message when the countdown ends\n\n    }\n}",
    expectedOutput: "3\n2\n1\nHAPPY NEW YEAR!",
    commonMistakes: [
      "Using the wrong loop condition",
      "Forgetting to decrement the loop variable",
      "Not handling InterruptedException",
      "Using Thread.sleep() outside the loop",
    ],
    difficulty: "medium",
  },
  {
    lessonNumber: 23,
    title: "Break and Continue in Loops",
    goal: "Control loop execution using break and continue statements",
    concept:
      "The break statement immediately exits a loop, while continue skips the current iteration and moves to the next one. These statements give finer control over loop execution.",
    starterCode:
      "public class Main {\n    public static void main(String[] args){\n        \n        // break = stop the loop completely\n        // continue = skip the current iteration\n\n        // TODO: Use a for loop from 0 to 9\n\n        // TODO: Stop the loop when the value is 4 using break\n\n        // TODO: Print the loop values\n\n    }\n}",
    expectedOutput: "0 1 2 3 ",
    commonMistakes: [
      "Using break when continue is intended",
      "Placing break outside conditional blocks",
      "Assuming continue stops the loop entirely",
      "Forgetting loop update causes infinite loops",
    ],
    difficulty: "medium",
  },
  {
    lessonNumber: 24,
    title: "Nested Loops",
    goal: "Use nested loops to repeat actions in rows and columns",
    concept:
      "A nested loop is a loop inside another loop. The outer loop controls the number of rows, while the inner loop controls the number of columns. Nested loops are commonly used for pattern printing, grids, matrices, and data structures.",
    starterCode:
      "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args){\n\n        Scanner scanner = new Scanner(System.in);\n\n        // TODO: Ask the user for number of rows\n\n        // TODO: Ask the user for number of columns\n\n        // TODO: Ask the user for a symbol\n\n        // TODO: Use nested loops to print a rectangle pattern\n\n        scanner.close();\n    }\n}",
    expectedOutput: "***\n***",
    commonMistakes: [
      "Mixing up rows and columns in loops",
      "Printing a newline in the wrong place",
      "Using only one loop instead of nested loops",
      "Incorrect loop boundaries",
    ],
    difficulty: "medium",
  },
  {
    lessonNumber: 25,
    title: "Methods in Java",
    goal: "Create and call methods with parameters and return values",
    concept:
      "A method is a reusable block of code that runs when it is called. Methods can accept parameters, return values, or perform actions without returning anything. They help organize code, reduce repetition, and improve readability.",
    starterCode:
      "public class Main {\n    public static void main(String[] args){\n\n        // TODO: Call the happyBirthday method with a name and age\n\n    }\n\n    // TODO: Create a method that prints a birthday message\n\n    // TODO: Create a method that returns the square of a number\n\n    // TODO: Create a method that returns the cube of a number\n\n    // TODO: Create a method that returns a full name\n\n    // TODO: Create a method that checks if age is 18 or older\n\n}",
    expectedOutput:
      "Happy Birthday to you!\nHappy Birthday dear Spongebob!\nYou are 30 years old!\nHappy Birthday to you!",
    commonMistakes: [
      "Forgetting to call the method",
      "Using incorrect parameter order or types",
      "Missing return statements in non-void methods",
      "Calling non-static methods from a static context",
    ],
    difficulty: "medium",
  },
  {
    lessonNumber: 26,
    title: "Method Overloading",
    goal: "Use method overloading to create multiple methods with the same name but different parameters",
    concept:
      "Method overloading allows multiple methods to share the same name as long as their parameter lists are different. Java determines which method to call based on the method signature (method name + parameters).",
    starterCode:
      "public class Main {\n    public static void main(String[] args){\n\n        // TODO: Call the bakePizza method with three arguments\n\n        // TODO: Print the returned pizza description\n\n    }\n\n    // TODO: Create an overloaded bakePizza method with one parameter\n\n    // TODO: Create an overloaded bakePizza method with two parameters\n\n    // TODO: Create an overloaded bakePizza method with three parameters\n\n}",
    expectedOutput: "pepperoni mozzarella flat-bread pizza",
    commonMistakes: [
      "Changing only the return type instead of parameters",
      "Using the same parameter order and types",
      "Confusing method overloading with method overriding",
      "Calling the wrong overloaded version unintentionally",
    ],
    difficulty: "medium",
  },
  {
    lessonNumber: 27,
    title: "Variable Scope",
    goal: "Understand the difference between class-level and local variables",
    concept:
      "Variable scope defines where a variable can be accessed. Class variables are declared at the class level and are accessible throughout the class, while local variables are declared inside methods and are only accessible within those methods.",
    starterCode:
      "public class Main {\n\n    static int x = 3; // CLASS SCOPE\n\n    public static void main(String[] args){\n\n        int x = 1; // LOCAL SCOPE\n\n        // TODO: Print the local variable\n\n        // TODO: Call the doSomething method\n\n    }\n\n    static void doSomething(){\n\n        int x = 2; // LOCAL SCOPE\n\n        // TODO: Print the local variable inside this method\n\n    }\n}",
    expectedOutput: "1\n2",
    commonMistakes: [
      "Assuming local variables override class variables everywhere",
      "Trying to access local variables outside their method",
      "Confusing static class variables with instance variables",
      "Reusing variable names without understanding scope",
    ],
    difficulty: "medium",
  },
  {
    lessonNumber: 28,
    title: "Banking Program",
    goal: "Build a menu-driven program using loops, switch statements, and methods",
    concept:
      "A menu-driven program repeatedly shows options to the user until they choose to exit. This lesson combines loops, switch statements, methods, input validation, and shared state to simulate a simple banking system.",
    starterCode:
      "import java.util.Scanner;\n\npublic class Main {\n\n    static Scanner scanner = new Scanner(System.in);\n\n    public static void main(String[] args) {\n\n        double balance = 0;\n        boolean isRunning = true;\n\n        // TODO: Display a menu inside a loop\n\n        // TODO: Ask the user for a choice\n\n        // TODO: Use switch to show balance, deposit, withdraw, or exit\n\n        // TODO: Print a goodbye message when the program exits\n\n        scanner.close();\n    }\n\n    // TODO: Create a method to show the balance\n\n    // TODO: Create a method to deposit money with validation\n\n    // TODO: Create a method to withdraw money with validation\n\n}",
    expectedOutput: "$0.00",
    commonMistakes: [
      "Forgetting to update the balance after deposit or withdrawal",
      "Allowing negative deposits or withdrawals",
      "Not checking for insufficient funds",
      "Not exiting the loop correctly",
    ],
    difficulty: "medium",
  },
  {
    lessonNumber: 29,
    title: "Dice Roller Program",
    goal: "Simulate rolling dice using loops, random numbers, methods, and switch statements",
    concept:
      "This program simulates rolling one or more dice using the Random class. It combines loops, conditionals, switch statements, methods, and text blocks to display dice faces and calculate the total score.",
    starterCode:
      "import java.util.Random;\nimport java.util.Scanner;\n\npublic class Main {\n\n    public static void main(String[] args) {\n\n        Scanner scanner = new Scanner(System.in);\n        Random random = new Random();\n\n        // TODO: Ask the user how many dice to roll\n\n        // TODO: Validate the number of dice\n\n        // TODO: Use a loop to roll each die\n\n        // TODO: Print each die face and its value\n\n        // TODO: Calculate and print the total\n\n        scanner.close();\n    }\n\n    // TODO: Create a method to print the die face based on the roll\n\n}",
    expectedOutput: "You rolled: 4\nYou rolled: 2\nTotal: 6",
    commonMistakes: [
      "Generating random numbers outside the loop",
      "Not validating the number of dice",
      "Forgetting to reset or update the total",
      "Using incorrect bounds in nextInt()",
    ],
    difficulty: "medium",
  },
  {
    lessonNumber: 31,
    title: "Dynamic Arrays with User Input",
    goal: "Create an array based on user input and populate it using a loop",
    concept:
      "Arrays can be created dynamically by taking the size from user input. A loop can then be used to fill the array with values, and a for-each loop can be used to display the stored elements.",
    starterCode:
      "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args){\n\n        Scanner scanner = new Scanner(System.in);\n\n        // TODO: Ask the user for the number of elements\n\n        // TODO: Create a String array of that size\n\n        // TODO: Use a loop to store user input into the array\n\n        // TODO: Use a for-each loop to print all elements\n\n        scanner.close();\n    }\n}",
    expectedOutput: "pizza\nburger\npasta",
    commonMistakes: [
      "Forgetting to call nextLine() after nextInt()",
      "Using an incorrect array size",
      "Accessing indexes outside the array length",
      "Not initializing the array before use",
    ],
    difficulty: "medium",
  },
  {
    lessonNumber: 32,
    title: "Linear Search in Arrays",
    goal: "Search for an element in an array using a loop",
    concept:
      "Linear search checks each element of an array one by one until the target value is found or the array ends. It is simple to implement and works on unsorted arrays.",
    starterCode:
      "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args){\n\n        Scanner scanner = new Scanner(System.in);\n\n        // TODO: Declare an array of strings\n\n        // TODO: Ask the user for a value to search\n\n        // TODO: Use a loop to compare each element with the target\n\n        // TODO: Print the index if found, otherwise print not found\n\n        scanner.close();\n    }\n}",
    expectedOutput: "Element found at index: 1",
    commonMistakes: [
      "Using == instead of equals() for String comparison",
      "Forgetting to break the loop after finding the element",
      "Not handling the case when the element is not found",
      "Assuming the array is sorted",
    ],
    difficulty: "medium",
  },
  {
    lessonNumber: 33,
    title: "Variable Arguments (Varargs)",
    goal: "Use varargs to pass a variable number of arguments to a method",
    concept:
      "Varargs allow a method to accept any number of arguments of the same type. Java automatically packs these arguments into an array, making methods more flexible and reducing the need for overloaded methods.",
    starterCode:
      "public class Main {\n    public static void main(String[] args){\n\n        // TODO: Call the average method with multiple arguments\n\n    }\n\n    // TODO: Create a method using varargs to calculate the average\n\n}",
    expectedOutput: "2.5",
    commonMistakes: [
      "Forgetting that varargs are treated as an array",
      "Placing varargs parameter before other parameters",
      "Not handling the case of zero arguments",
      "Trying to overload methods unnecessarily instead of using varargs",
    ],
    difficulty: "medium",
  },
  {
    lessonNumber: 34,
    title: "2D Arrays in Java",
    goal: "Store and iterate over data using two-dimensional arrays",
    concept:
      "A 2D array is an array of arrays. It is commonly used to represent grids, tables, and matrices. Nested loops or enhanced for-each loops are used to traverse rows and columns.",
    starterCode:
      "public class Main {\n    public static void main(String[] args){\n\n        // TODO: Create a 2D String array to store grocery items\n\n        // TODO: Modify a value inside the 2D array\n\n        // TODO: Use nested loops to print the grocery matrix\n\n        // TODO: Create a 2D char array representing a telephone keypad\n\n        // TODO: Use nested loops to print the keypad\n\n    }\n}",
    expectedOutput:
      "apple orange banana \npotato onion carrot \nchicken eggs beef fish \n1 2 3 \n4 5 6 \n7 8 9 \n* 0 # ",
    commonMistakes: [
      "Mixing up row and column indexes",
      "Forgetting that rows can have different lengths",
      "Using a single loop instead of nested loops",
      "Accessing invalid row or column indexes",
    ],
    difficulty: "medium",
  },
  {
    lessonNumber: 35,
    title: "Quiz Game",
    goal: "Build a quiz game using arrays, loops, and conditional logic",
    concept:
      "A quiz game can be built using arrays to store questions, options, and answers. Loops are used to iterate through the questions, and conditional statements determine whether the user's answer is correct while tracking the final score.",
    starterCode:
      "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n\n        // TODO: Create an array of quiz questions\n\n        // TODO: Create a 2D array for multiple-choice options\n\n        // TODO: Create an array to store correct answers\n\n        // TODO: Use a loop to display questions and options\n\n        // TODO: Take user input and check answers\n\n        // TODO: Display the final score\n\n    }\n}",
    expectedOutput: "Your final score is: 5 out of 5",
    commonMistakes: [
      "Mismatching question, option, and answer indexes",
      "Forgetting that array indexes start at 0",
      "Not validating user input",
      "Using the wrong comparison for answers",
    ],
    difficulty: "medium",
  },
  {
    lessonNumber: 36,
    title: "Rock Paper Scissors Game",
    goal: "Build an interactive game using loops, random numbers, arrays, and conditionals",
    concept:
      "This game uses arrays to store choices, the Random class to simulate computer decisions, and loops to allow repeated gameplay. Conditional logic determines the winner based on the player's and computer's choices.",
    starterCode:
      "import java.util.Random;\nimport java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args){\n\n        Scanner scanner = new Scanner(System.in);\n        Random random = new Random();\n\n        // TODO: Create an array of valid choices\n\n        // TODO: Ask the player for their choice\n\n        // TODO: Generate a random choice for the computer\n\n        // TODO: Compare player and computer choices to determine the result\n\n        // TODO: Ask the player if they want to play again\n\n        scanner.close();\n    }\n}",
    expectedOutput: "You win!",
    commonMistakes: [
      "Not validating player input",
      "Forgetting to convert input to lowercase",
      "Incorrect win-condition logic",
      "Not handling the replay loop correctly",
    ],
    difficulty: "medium",
  },
  {
    lessonNumber: 37,
    title: "Slot Machine Game",
    goal: "Build a slot machine game using arrays, random numbers, loops, and methods",
    concept:
      "This slot machine program combines loops, arrays, methods, random number generation, and conditional logic. It simulates betting, spinning symbols, calculating payouts, and managing a balance until the game ends.",
    starterCode:
      "import java.util.Random;\nimport java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args){\n\n        Scanner scanner = new Scanner(System.in);\n\n        // TODO: Initialize balance and game variables\n\n        // TODO: Display slot machine menu and symbols\n\n        // TODO: Use a loop to keep the game running while balance > 0\n\n        // TODO: Validate bet amount\n\n        // TODO: Spin the slot machine and print results\n\n        // TODO: Calculate payout and update balance\n\n        // TODO: Ask the user if they want to play again\n\n        scanner.close();\n    }\n\n    // TODO: Create a method to spin and return a row of symbols\n\n    // TODO: Create a method to print the slot row\n\n    // TODO: Create a method to calculate payout based on symbols\n\n}",
    expectedOutput: "You won $40",
    commonMistakes: [
      "Not validating bet amount correctly",
      "Incorrect payout calculations",
      "Generating random values outside the spin method",
      "Forgetting to update balance after wins or losses",
    ],
    difficulty: "medium",
  },
  {
    lessonNumber: 38,
    title: "Objects and Classes",
    goal: "Create objects from a class and access their attributes and methods",
    concept:
      "An object is an instance of a class. A class defines attributes (fields) and behaviors (methods). Objects store data and can perform actions, making Object-Oriented Programming a powerful way to structure programs.",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Create an object of the Car class\n\n        // TODO: Print the car's attributes\n\n        // TODO: Call the car's methods\n\n    }\n}\n\nclass Car {\n\n    // TODO: Declare attributes such as make, model, year, price, and isRunning\n\n    // TODO: Create methods to start, stop, drive, and brake the car\n\n}",
    expectedOutput:
      "Ford\nMustang\n2025\n58000.99\nfalse\nYou drive the Mustang\nYou brake the Mustang",
    commonMistakes: [
      "Forgetting to create an object before accessing members",
      "Trying to access non-static fields from a static context incorrectly",
      "Misspelling attribute or method names",
      "Confusing classes with objects",
    ],
    difficulty: "medium",
  },
  {
    lessonNumber: 39,
    title: "Constructors in Java",
    goal: "Initialize objects using constructors and access their attributes and methods",
    concept:
      "A constructor is a special method used to initialize objects when they are created. Constructors can take parameters to set initial values for an object's attributes. The 'this' keyword refers to the current object.",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Create multiple Student objects using a constructor\n\n        // TODO: Print each student's attributes\n\n        // TODO: Call a method on each student object\n\n    }\n}\n\nclass Student {\n\n    // TODO: Declare attributes for name, age, gpa, and enrollment status\n\n    // TODO: Create a constructor to initialize the attributes\n\n    // TODO: Create a study method\n\n}",
    expectedOutput:
      "Spongebob\n30\n3.2\ntrue\nPatrick\n34\n1.5\ntrue\nSandy\n27\n4.0\ntrue\nSpongebob is studying\nPatrick is studying\nSandy is studying",
    commonMistakes: [
      "Forgetting to use the this keyword inside constructors",
      "Not initializing all attributes",
      "Confusing constructors with regular methods",
      "Trying to access fields before creating objects",
    ],
    difficulty: "medium",
  },
  {
    lessonNumber: 40,
    title: "Constructor Overloading",
    goal: "Initialize objects using multiple constructors with different parameters",
    concept:
      "Constructor overloading allows a class to have multiple constructors with different parameter lists. This enables objects to be created in different ways depending on the available data.",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Create User objects using different constructors\n\n        // TODO: Print each user's details\n\n    }\n}\n\nclass User {\n\n    // TODO: Declare attributes for username, email, and age\n\n    // TODO: Create a default constructor\n\n    // TODO: Create overloaded constructors with different parameters\n\n}",
    expectedOutput:
      "Spongebob\nNot provided\n0\nPatrick\nPStar@aol.com\n0\nSandy\nSCheeks@gmail.com\n27\nGuest\nNot provided\n0",
    commonMistakes: [
      "Forgetting to initialize default values",
      "Creating constructors with identical parameter signatures",
      "Not understanding which constructor is called",
      "Duplicating initialization logic instead of reusing it",
    ],
    difficulty: "medium",
  },
  {
    lessonNumber: 41,
    title: "Arrays of Objects",
    goal: "Store and manipulate multiple objects using an array",
    concept:
      "An array of objects allows you to store multiple instances of a class in a single structure. Each object in the array can be accessed, modified, and used to call methods just like any other object.",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Create an array of Car objects\n\n        // TODO: Modify an attribute for each object using a loop\n\n        // TODO: Call a method on each object in the array\n\n    }\n}\n\nclass Car {\n\n    // TODO: Declare attributes for model and color\n\n    // TODO: Create a constructor to initialize the attributes\n\n    // TODO: Create a method to display driving behavior\n\n}",
    expectedOutput:
      "You drive the black Mustang\nYou drive the black Corvette\nYou drive the black Charger",
    commonMistakes: [
      "Forgetting to initialize objects inside the array",
      "Confusing object references with primitive values",
      "Assuming changes to one object affect all objects",
      "Not using loops to process all elements",
    ],
    difficulty: "medium",
  },
  {
    lessonNumber: 42,
    title: "Static Variables and Methods",
    goal: "Understand how static variables and methods belong to a class rather than objects",
    concept:
      "The static keyword makes variables and methods belong to the class itself instead of individual objects. Static members are shared across all instances and are commonly used for counters, utility methods, and shared state.",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Create multiple Friend objects\n\n        // TODO: Call a static method to display total friends\n\n    }\n}\n\nclass Friend {\n\n    // TODO: Declare a static variable to count friends\n\n    // TODO: Declare a non-static variable for name\n\n    // TODO: Create a constructor that updates the static count\n\n    // TODO: Create a static method to display total friends\n\n}",
    expectedOutput: "You have 4 total friends",
    commonMistakes: [
      "Trying to access non-static variables inside static methods",
      "Assuming each object has its own copy of a static variable",
      "Calling static methods using object references",
      "Forgetting that static variables persist across objects",
    ],
    difficulty: "medium",
  },
  {
    lessonNumber: 43,
    title: "Inheritance",
    goal: "Understand how classes inherit attributes and methods from other classes",
    concept:
      "Inheritance allows one class to inherit fields and methods from another class. A child class extends a parent class, forming an IS-A relationship. This promotes code reuse and hierarchical class design.",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Create objects of Dog, Cat, and Plant classes\n\n    }\n}\n\nclass Organism {\n\n    // TODO: Declare a variable to represent life status\n\n    // TODO: Initialize the variable using a constructor\n\n}\n\nclass Plant extends Organism {\n\n    // TODO: Create a method for photosynthesis\n\n}\n\nclass Animal extends Organism {\n\n    // TODO: Create a method for eating\n\n}\n\nclass Dog extends Animal {\n\n    // TODO: Declare number of lives\n\n    // TODO: Create a method for dog sound\n\n}\n\nclass Cat extends Animal {\n\n    // TODO: Declare number of lives\n\n    // TODO: Create a method for cat sound\n\n}",
    expectedOutput: "",
    commonMistakes: [
      "Forgetting to use the extends keyword",
      "Assuming child classes inherit constructors automatically",
      "Confusing inheritance with composition",
      "Accessing child-specific methods through parent references incorrectly",
    ],
    difficulty: "medium",
  },
  {
    lessonNumber: 44,
    title: "Super Keyword",
    goal: "Use the super keyword to access parent class constructors and members",
    concept:
      "The super keyword refers to the parent (superclass) of the current object. It is commonly used in constructors to initialize inherited attributes and can also be used to call parent class methods.",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Create Person, Student, and Employee objects\n\n    }\n}\n\nclass Person {\n\n    // TODO: Declare first and last name variables\n\n    // TODO: Create a constructor to initialize them\n\n    // TODO: Create a method to display the full name\n\n}\n\nclass Student extends Person {\n\n    // TODO: Declare a GPA variable\n\n    // TODO: Use super() to initialize name fields\n\n    // TODO: Create a method to display GPA\n\n}\n\nclass Employee extends Person {\n\n    // TODO: Declare a salary variable\n\n    // TODO: Use super() to initialize name fields\n\n    // TODO: Create a method to display salary\n\n}",
    expectedOutput: "",
    commonMistakes: [
      "Forgetting to call super() in subclass constructors",
      "Trying to access private parent variables directly",
      "Assuming super creates a new object",
      "Confusing super with this keyword",
    ],
    difficulty: "medium",
  },
  {
    lessonNumber: 45,
    title: "Method Overriding",
    goal: "Understand how subclasses can override methods from a parent class",
    concept:
      "Method overriding occurs when a subclass provides its own implementation of a method already defined in its parent class. The method that gets executed depends on the object's actual type at runtime, enabling polymorphic behavior.",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Create Dog, Cat, and Fish objects\n\n        // TODO: Call the move() method on each object\n\n    }\n}\n\nclass Animal {\n\n    // TODO: Create a move() method\n\n}\n\nclass Dog extends Animal {\n\n}\n\nclass Cat extends Animal {\n\n}\n\nclass Fish extends Animal {\n\n    // TODO: Override the move() method\n\n}",
    expectedOutput:
      "This animal is running\nThis animal is running\nThis animal is swimming",
    commonMistakes: [
      "Forgetting the method signature must match exactly",
      "Not using the @Override annotation",
      "Assuming method overriding works with static methods",
      "Confusing method overloading with overriding",
    ],
    difficulty: "medium",
  },
  {
    lessonNumber: 46,
    title: "toString() Method",
    goal: "Override the toString() method to display meaningful object information",
    concept:
      "The toString() method is inherited from the Object class and is used to return a string representation of an object. By overriding this method, developers can control how objects are displayed when printed.",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Create Car objects\n\n        // TODO: Print the Car objects directly\n\n    }\n}\n\nclass Car {\n\n    // TODO: Declare attributes for make, model, year, and color\n\n    // TODO: Create a constructor to initialize the attributes\n\n    // TODO: Override the toString() method\n\n}",
    expectedOutput: "Red 2025 Ford Mustang\nBlue 2026 Chevrolet Corvette",
    commonMistakes: [
      "Forgetting to override toString()",
      "Returning null or incomplete information",
      "Not using @Override annotation",
      "Assuming System.out.println(object) prints fields automatically",
    ],
    difficulty: "medium",
  },
  {
    lessonNumber: 47,
    title: "Abstract Classes and Methods",
    goal: "Use abstract classes and methods to enforce structure in subclasses",
    concept:
      "Abstraction hides implementation details and shows only essential features. An abstract class cannot be instantiated directly and may contain abstract methods that must be implemented by subclasses, as well as concrete methods that are inherited.",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Create objects of Circle, Triangle, and Rectangle\n\n        // TODO: Call display() on each shape\n\n        // TODO: Print the area of each shape\n\n    }\n}\n\nabstract class Shape {\n\n    // TODO: Declare an abstract method area()\n\n    // TODO: Create a concrete display() method\n\n}\n\nclass Circle extends Shape {\n\n    // TODO: Declare radius\n\n    // TODO: Implement area()\n\n}\n\nclass Triangle extends Shape {\n\n    // TODO: Declare base and height\n\n    // TODO: Implement area()\n\n}\n\nclass Rectangle extends Shape {\n\n    // TODO: Declare length and width\n\n    // TODO: Implement area()\n\n}",
    expectedOutput:
      "This is a shape\nThis is a shape\nThis is a shape\n28.274333882308138\n10.0\n42.0",
    commonMistakes: [
      "Trying to instantiate an abstract class",
      "Forgetting to implement abstract methods in subclasses",
      "Using incorrect method signatures when overriding",
      "Confusing abstract methods with concrete methods",
    ],
    difficulty: "medium",
  },

  {
    lessonNumber: 48,
    title: "Interfaces",
    goal: "Implement interfaces to define common behavior across unrelated classes",
    concept:
      "An interface is a blueprint that defines a set of abstract methods. Classes that implement an interface must provide implementations for all its methods. Interfaces support multiple inheritance-like behavior in Java.",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Create Rabbit, Hawk, and Fish objects\n\n        // TODO: Call flee() and hunt() methods based on implemented interfaces\n\n    }\n}\n\ninterface Prey {\n\n    // TODO: Declare flee() method\n\n}\n\ninterface Predator {\n\n    // TODO: Declare hunt() method\n\n}\n\nclass Rabbit implements Prey {\n\n    // TODO: Implement flee()\n\n}\n\nclass Hawk implements Predator {\n\n    // TODO: Implement hunt()\n\n}\n\nclass Fish implements Prey, Predator {\n\n    // TODO: Implement flee()\n\n    // TODO: Implement hunt()\n\n}",
    expectedOutput:
      "*The rabbit is running away*\n*The hawk is hunting*\n*The fish is swimming away*\n*The fish is hunting*",
    commonMistakes: [
      "Forgetting to implement all interface methods",
      "Using extends instead of implements",
      "Trying to create objects of an interface",
      "Confusing abstract classes with interfaces",
    ],
    difficulty: "medium",
  },
  {
    lessonNumber: 49,
    title: "Polymorphism",
    goal: "Use polymorphism to treat different objects as a common superclass type",
    concept:
      "Polymorphism allows objects of different classes to be treated as objects of a common superclass. The method that gets executed is determined at runtime based on the actual object type, enabling flexible and extensible code design.",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Create objects of Car, Bike, and Boat\n\n        // TODO: Store them in an array of Vehicle type\n\n        // TODO: Use a loop to call go() on each Vehicle\n\n    }\n}\n\nabstract class Vehicle {\n\n    // TODO: Declare an abstract method go()\n\n}\n\nclass Car extends Vehicle {\n\n    // TODO: Override go()\n\n}\n\nclass Bike extends Vehicle {\n\n    // TODO: Override go()\n\n}\n\nclass Boat extends Vehicle {\n\n    // TODO: Override go()\n\n}",
    expectedOutput: "You drive the car\nYou ride the bike\nYou sail the boat",
    commonMistakes: [
      "Forgetting to mark methods as abstract in the superclass",
      "Trying to instantiate an abstract class",
      "Assuming method selection happens at compile time",
      "Not overriding methods correctly in subclasses",
    ],
    difficulty: "medium",
  },
  {
    lessonNumber: 50,
    title: "Runtime Polymorphism",
    goal: "Understand how method execution is decided at runtime based on object type",
    concept:
      "Runtime polymorphism occurs when a parent class reference points to a child class object, and the overridden method that gets executed is determined at runtime. This allows flexible and dynamic behavior in object-oriented programs.",
    starterCode:
      "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n\n        Scanner scanner = new Scanner(System.in);\n\n        // TODO: Declare an Animal reference\n\n        // TODO: Ask the user to choose between Dog or Cat\n\n        // TODO: Assign the correct object based on user choice\n\n        // TODO: Call the speak() method\n\n        scanner.close();\n    }\n}\n\nclass Animal {\n\n    // TODO: Create a speak() method\n\n}\n\nclass Dog extends Animal {\n\n    // TODO: Override speak() for Dog\n\n}\n\nclass Cat extends Animal {\n\n    // TODO: Override speak() for Cat\n\n}",
    expectedOutput: "The dog goes *woof*",
    commonMistakes: [
      "Forgetting to override the method in subclasses",
      "Trying to access child-specific methods through parent reference",
      "Assuming method calls are decided at compile time",
      "Not handling invalid user input",
    ],
    difficulty: "medium",
  },
  {
    lessonNumber: 51,
    title: "Encapsulation",
    goal: "Protect object data using private variables and public getters and setters",
    concept:
      "Encapsulation is the practice of hiding an object's internal data by making fields private and accessing them through public methods. This improves security, control, and maintainability of code.",
    starterCode:
      'public class Main {\n    public static void main(String[] args) {\n\n        Car car = new Car("Mustang", "Red", 58000);\n\n        System.out.println(car.getModel());\n        System.out.println(car.getColor());\n        System.out.println(car.getPrice());\n\n        car.setColor("Black");\n        car.setPrice(60000);\n\n        System.out.println(car.getColor());\n        System.out.println(car.getPrice());\n    }\n}\n\nclass Car {\n\n    private String model;\n    private String color;\n    private int price;\n\n    Car(String model, String color, int price){\n        this.model = model;\n        this.color = color;\n        this.price = price;\n    }\n\n    String getModel(){\n        return this.model;\n    }\n    String getColor(){\n        return this.color;\n    }\n    String getPrice(){\n        return "$" + this.price;\n    }\n\n    void setColor(String color){\n        this.color = color;\n    }\n    void setPrice(int price){\n        if(price < 0){\n            System.out.println("Price can\'t be less than zero");\n        }\n        else{\n            this.price = price;\n        }\n    }\n}',
    expectedOutput: "Mustang\nRed\n$58000\nBlack\n$60000",
    commonMistakes: [
      "Making fields public instead of private",
      "Not using getters and setters",
      "Allowing invalid values through setters",
      "Returning raw values without formatting",
    ],
    difficulty: "medium",
  },
  {
    lessonNumber: 52,
    title: "Aggregation",
    goal: "Understand aggregation as a has-a relationship between objects",
    concept:
      "Aggregation represents a has-a relationship where one object contains references to other objects. The contained objects can exist independently of the container object. This is commonly used to model real-world relationships such as libraries and books.",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Create multiple Book objects\n\n        // TODO: Store Book objects inside an array\n\n        // TODO: Create a Library object using the Book array\n\n        // TODO: Call a method to display library information\n\n    }\n}\n\nclass Book {\n\n    // TODO: Declare title and pages\n\n    // TODO: Create a constructor\n\n    // TODO: Create a method to return book details\n\n}\n\nclass Library {\n\n    // TODO: Declare library name, year, and Book array\n\n    // TODO: Create a constructor\n\n    // TODO: Create a method to display library and book information\n\n}",
    expectedOutput:
      "The 1897 NYC Public Library\nBooks Available:\nThe Fellow of the Ring (423 pages)\nThe Two Towers (352 pages)\nThe Return of the King (416 pages)",
    commonMistakes: [
      "Confusing aggregation with inheritance",
      "Assuming contained objects cannot exist independently",
      "Forgetting to initialize the object array",
      "Not iterating properly over aggregated objects",
    ],
    difficulty: "medium",
  },
  {
    lessonNumber: 53,
    title: "Composition",
    goal: "Understand composition as a part-of relationship between objects",
    concept:
      "Composition represents a strong part-of relationship where one object owns another object and controls its lifecycle. Unlike aggregation, the contained object typically cannot exist independently of the container. This is commonly used to build complex objects from simpler components.",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Create a Car object with an Engine\n\n        // TODO: Print car details and engine type\n\n        // TODO: Start the car\n\n    }\n}\n\nclass Car {\n\n    // TODO: Declare model, year, and Engine\n\n    // TODO: Initialize Engine inside the constructor\n\n    // TODO: Create a start() method\n\n}\n\nclass Engine {\n\n    // TODO: Declare engine type\n\n    // TODO: Create a constructor\n\n    // TODO: Create a start() method\n\n}",
    expectedOutput:
      "Corvette\n2025\nV8\nYou start the V8 engine\nThe Corvette is running",
    commonMistakes: [
      "Confusing composition with aggregation",
      "Creating the component object outside the owner class",
      "Assuming the composed object can exist independently",
      "Not initializing the component inside the constructor",
    ],
    difficulty: "medium",
  },
  {
    lessonNumber: 54,
    title: "Wrapper Classes",
    goal: "Understand how primitive data types can be converted into objects using wrapper classes",
    concept:
      "Wrapper classes allow primitive data types to be treated as objects. Autoboxing automatically converts primitives into wrapper objects, while unboxing converts wrapper objects back into primitives. Wrapper classes are commonly used with collections and utility methods.",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Demonstrate autoboxing using wrapper classes\n\n        // TODO: Demonstrate unboxing back to primitive types\n\n    }\n}",
    expectedOutput: "",
    commonMistakes: [
      "Unnecessarily wrapping primitives when objects are not required",
      "Confusing autoboxing with type casting",
      "Assuming wrapper objects behave exactly like primitives",
      "Forgetting that wrapper objects can be null",
    ],
    difficulty: "medium",
  },
  {
    lessonNumber: 55,
    title: "ArrayList",
    goal: "Store and manipulate a dynamic list of objects using ArrayList",
    concept:
      "ArrayList is a resizable array from the Java Collections Framework. Unlike arrays, ArrayLists can grow and shrink dynamically and store objects using autoboxing. They provide useful methods for adding, removing, updating, and sorting elements.",
    starterCode:
      "import java.util.ArrayList;\nimport java.util.Collections;\n\npublic class Main {\n    public static void main(String[] args) {\n\n        // TODO: Create an ArrayList of Strings\n\n        // TODO: Add elements to the ArrayList\n\n        // TODO: Sort the ArrayList\n\n        // TODO: Print all elements using a loop\n\n    }\n}",
    expectedOutput: "Apple\nBanana\nCoconut\nOrange",
    commonMistakes: [
      "Using primitive types instead of wrapper classes",
      "Assuming ArrayList has a fixed size",
      "Forgetting to import java.util.ArrayList",
      "Confusing ArrayList indexes with array indexes",
    ],
    difficulty: "medium",
  },
  {
    lessonNumber: 56,
    title: "Exception Handling",
    goal: "Handle runtime errors gracefully using try, catch, and finally blocks",
    concept:
      "Exceptions are events that disrupt the normal flow of a program. Java provides try, catch, and finally blocks to handle errors safely and prevent program crashes. Multiple catch blocks allow handling specific exceptions, while finally always executes.",
    starterCode:
      "import java.util.InputMismatchException;\nimport java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n\n        // TODO: Use try-with-resources to read user input\n\n        // TODO: Catch input mismatch and arithmetic exceptions\n\n        // TODO: Add a finally block that always executes\n\n    }\n}",
    expectedOutput: "This always executes",
    commonMistakes: [
      "Not wrapping risky code inside a try block",
      "Catching generic Exception before specific ones",
      "Forgetting that finally always runs",
      "Assuming exceptions stop the program permanently",
    ],
    difficulty: "medium",
  },
  {
    lessonNumber: 57,
    title: "Writing Files in Java",
    goal: "Write text data to a file using FileWriter and handle I/O exceptions",
    concept:
      "Java provides multiple ways to write files. FileWriter is commonly used for small to medium-sized text files. Try-with-resources ensures the file is properly closed, and exceptions such as FileNotFoundException and IOException handle file-related errors safely.",
    starterCode:
      "import java.io.FileNotFoundException;\nimport java.io.FileWriter;\nimport java.io.IOException;\n\npublic class Main {\n    public static void main(String[] args) {\n\n        // TODO: Define a file path and text content\n\n        // TODO: Use FileWriter inside a try-with-resources block\n\n        // TODO: Write text to the file\n\n        // TODO: Handle file-related exceptions\n\n    }\n}",
    expectedOutput: "File has been written",
    commonMistakes: [
      "Forgetting to close the FileWriter",
      "Using the wrong file path",
      "Not handling IOException properly",
      "Assuming the file is created automatically in all directories",
    ],
    difficulty: "medium",
  },
  {
    lessonNumber: 58,
    title: "Reading Files in Java",
    goal: "Read text data from a file line by line using BufferedReader",
    concept:
      "Java provides several ways to read files. BufferedReader combined with FileReader is commonly used to read text files efficiently, one line at a time. Try-with-resources ensures the file is closed automatically, and exceptions handle file-related errors safely.",
    starterCode:
      "import java.io.BufferedReader;\nimport java.io.FileNotFoundException;\nimport java.io.FileReader;\nimport java.io.IOException;\n\npublic class Main {\n    public static void main(String[] args) {\n\n        // TODO: Specify the file path\n\n        // TODO: Use BufferedReader with FileReader\n\n        // TODO: Read the file line by line\n\n        // TODO: Handle file-related exceptions\n\n    }\n}",
    expectedOutput:
      "Roses are Red\nViolets are Blue\nBOOTY BOOTY BOOTY\nROCKIN' EVERWHERE!",
    commonMistakes: [
      "Using an incorrect or hard-coded file path",
      "Forgetting to use a loop when reading lines",
      "Not handling FileNotFoundException",
      "Forgetting to close the reader (not using try-with-resources)",
    ],
    difficulty: "medium",
  },
  {
    lessonNumber: 59,
    title: "Playing Audio in Java",
    goal: "Play, stop, reset, and control audio files using Java",
    concept:
      "Java supports audio playback using the javax.sound.sampled package. Audio files such as WAV, AU, and AIFF can be loaded using AudioInputStream and played using Clip. User input can be used to control playback, while exceptions handle unsupported formats and missing files.",
    starterCode:
      "import javax.sound.sampled.*;\nimport java.io.File;\nimport java.io.IOException;\nimport java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n\n        // TODO: Load an audio file using File\n\n        // TODO: Use AudioInputStream and Clip to play audio\n\n        // TODO: Create a menu to control playback (Play, Stop, Reset, Quit)\n\n        // TODO: Handle audio-related exceptions\n\n    }\n}",
    expectedOutput: "P = Play\nS = Stop\nR = Reset\nQ = Quit",
    commonMistakes: [
      "Using unsupported audio formats (e.g., mp3)",
      "Providing an incorrect file path",
      "Forgetting to reset the clip position",
      "Not closing the audio clip properly",
    ],
    difficulty: "medium",
  },
  {
    lessonNumber: 60,
    title: "Hangman Game",
    goal: "Build a complete Hangman game using files, collections, loops, and conditionals",
    concept:
      "This Hangman game combines file reading, random selection, ArrayLists, loops, conditional logic, and methods. Words are loaded from a file, one is chosen randomly, and the player guesses letters while the game tracks incorrect attempts and displays progress.",
    starterCode:
      "import java.io.BufferedReader;\nimport java.io.FileNotFoundException;\nimport java.io.FileReader;\nimport java.io.IOException;\nimport java.util.ArrayList;\nimport java.util.Random;\nimport java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n\n        // TODO: Read words from a file into an ArrayList\n\n        // TODO: Select a random word\n\n        // TODO: Track guessed letters and wrong guesses\n\n        // TODO: Display hangman art and game state\n\n        // TODO: End the game when player wins or loses\n\n    }\n\n    // TODO: Create a method to return hangman ASCII art\n\n}",
    expectedOutput: "YOU WIN!",
    commonMistakes: [
      "Not handling empty or missing word files",
      "Forgetting to trim newline characters from file input",
      "Not updating the word state correctly",
      "Allowing guesses after the game has ended",
    ],
    difficulty: "medium",
  },
  {
    lessonNumber: 61,
    title: "Dates and Times in Java",
    goal: "Work with dates, times, timestamps, formatting, and comparisons using the java.time API",
    concept:
      "Java provides the java.time package to handle dates and times in a safe and immutable way. Classes like LocalDate, LocalTime, LocalDateTime, and Instant represent different time concepts, while DateTimeFormatter allows custom formatting and comparison methods support date-time logic.",
    starterCode:
      "import java.time.Instant;\nimport java.time.LocalDate;\nimport java.time.LocalDateTime;\nimport java.time.LocalTime;\nimport java.time.format.DateTimeFormatter;\n\npublic class Main {\n    public static void main(String[] args) {\n\n        // TODO: Print the current date\n\n        // TODO: Print the current time\n\n        // TODO: Print the current date and time\n\n        // TODO: Print the current UTC timestamp\n\n        // TODO: Format date and time using DateTimeFormatter\n\n        // TODO: Compare two LocalDateTime objects\n\n    }\n}",
    expectedOutput: "",
    commonMistakes: [
      "Using the old Date and Calendar classes instead of java.time",
      "Assuming LocalDateTime contains timezone information",
      "Using incorrect date format patterns",
      "Comparing dates using == instead of isBefore/isAfter",
    ],
    difficulty: "medium",
  },
  {
    lessonNumber: 62,
    title: "Anonymous Classes",
    goal: "Use anonymous classes to override behavior without creating a named class",
    concept:
      "An anonymous class is a one-time-use class without a name. It is often used to override methods or provide custom behavior inline without creating a separate subclass. Anonymous classes are commonly used in callbacks, event handling, and threads.",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Create a normal Dog object\n\n        // TODO: Create an anonymous Dog object with overridden behavior\n\n        // TODO: Call speak() on both objects\n\n    }\n}\n\nclass Dog {\n\n    // TODO: Create a speak() method\n\n}",
    expectedOutput: "The dog goes *woof*\nScooby Doo says *Ruh Roh*",
    commonMistakes: [
      "Trying to reuse an anonymous class",
      "Forgetting to override methods correctly",
      "Confusing anonymous classes with lambda expressions",
      "Using anonymous classes when a named class is more appropriate",
    ],
    difficulty: "medium",
  },
  {
    lessonNumber: 63,
    title: "Timer and TimerTask",
    goal: "Schedule tasks to run at a fixed time or repeatedly using Timer and TimerTask",
    concept:
      "The Timer class schedules tasks to run at a specified time or at fixed intervals. TimerTask represents the task to be executed and must override the run() method. This is commonly used for background jobs, reminders, and repeated actions.",
    starterCode:
      "import java.util.Timer;\nimport java.util.TimerTask;\n\npublic class Main {\n    public static void main(String[] args) {\n\n        // TODO: Create a Timer object\n\n        // TODO: Create a TimerTask and override run()\n\n        // TODO: Schedule the task with a delay and repeat interval\n\n    }\n}",
    expectedOutput: "Hello!",
    commonMistakes: [
      "Forgetting to override the run() method",
      "Not canceling the timer when no longer needed",
      "Confusing delay and period values",
      "Assuming Timer runs on the main thread",
    ],
    difficulty: "medium",
  },
  {
    lessonNumber: 64,
    title: "Countdown Timer",
    goal: "Create a countdown timer using Timer and TimerTask",
    concept:
      "A countdown timer schedules a task to run repeatedly at fixed intervals. Timer manages the scheduling, while TimerTask defines the repeated action. The task can cancel the timer once a condition is met.",
    starterCode:
      "import java.util.Scanner;\nimport java.util.Timer;\nimport java.util.TimerTask;\n\npublic class Main {\n    public static void main(String[] args) {\n\n        // TODO: Ask the user for countdown seconds\n\n        // TODO: Create a Timer and TimerTask\n\n        // TODO: Decrease the counter every second\n\n        // TODO: Cancel the timer when countdown finishes\n\n    }\n}",
    expectedOutput: "3\n2\n1\n0\nHAPPY NEW YEAR!",
    commonMistakes: [
      "Forgetting to cancel the timer",
      "Using schedule() instead of scheduleAtFixedRate() incorrectly",
      "Modifying shared variables unsafely in concurrent code",
      "Closing resources too early",
    ],
    difficulty: "medium",
  },
  {
    lessonNumber: 65,
    title: "Generics",
    goal: "Create reusable classes that work with different data types using generics",
    concept:
      "Generics allow classes, interfaces, and methods to operate on different data types while providing compile-time type safety. Type parameters like <T> and <U> act as placeholders that are replaced with actual types when the class is used.",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Create a generic Box object\n\n        // TODO: Store and retrieve a value from the Box\n\n        // TODO: Create Product objects using multiple generic types\n\n    }\n}\n\nclass Box<T> {\n\n    // TODO: Declare a generic variable\n\n    // TODO: Create setter and getter methods\n\n}\n\nclass Product<T, U> {\n\n    // TODO: Declare item and price using generic types\n\n    // TODO: Create a constructor\n\n    // TODO: Create getter methods\n\n}",
    expectedOutput: "banana",
    commonMistakes: [
      "Using primitives instead of wrapper classes",
      "Confusing type parameters with actual types",
      "Removing generics and relying on Object instead",
      "Assuming generics work with primitive types",
    ],
    difficulty: "medium",
  },
  {
    lessonNumber: 66,
    title: "HashMap",
    goal: "Store and retrieve data using key-value pairs with HashMap",
    concept:
      "A HashMap stores data as key-value pairs. Keys must be unique, while values can be duplicated. HashMaps do not maintain insertion order and provide fast access to data using keys.",
    starterCode:
      "import java.util.HashMap;\n\npublic class Main {\n    public static void main(String[] args) {\n\n        // TODO: Create a HashMap with String keys and Double values\n\n        // TODO: Add multiple key-value pairs to the map\n\n        // TODO: Loop through the map and print each key-value pair\n\n    }\n}",
    expectedOutput:
      "apple : $0.5\norange : $0.5\nbanana : $0.25\ncoconut : $1.0",
    commonMistakes: [
      "Assuming HashMap maintains insertion order",
      "Using duplicate keys unintentionally",
      "Calling get() on a key that does not exist",
      "Forgetting that HashMap does not allow primitive types",
    ],
    difficulty: "medium",
  },
  {
    lessonNumber: 67,
    title: "Enums (Enumerations)",
    goal: "Use enums to represent a fixed set of constants safely and clearly",
    concept:
      "Enums are a special type of class used to represent a fixed set of constant values. They improve readability, prevent invalid values, and work efficiently with switch statements. Enums can also contain fields, constructors, and methods.",
    starterCode:
      "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n\n        // TODO: Ask the user for a day of the week\n\n        // TODO: Convert input to an enum using valueOf()\n\n        // TODO: Use a switch statement with enum values\n\n        // TODO: Handle invalid enum input\n\n    }\n}\n\nenum Day {\n\n    // TODO: Declare enum constants\n\n    // TODO: Add a field and constructor\n\n    // TODO: Create a getter method\n\n}",
    expectedOutput: "It is a weekday",
    commonMistakes: [
      "Using strings instead of enums",
      "Forgetting that enum names are case-sensitive",
      "Not handling IllegalArgumentException from valueOf()",
      "Assuming enums cannot have fields or methods",
    ],
    difficulty: "medium",
  },
  {
    lessonNumber: 68,
    title: "Multithreading with Time Limits",
    goal: "Use a background thread to enforce a time limit while the main thread handles user input",
    concept:
      "Multithreading allows multiple tasks to run concurrently. In this example, a daemon thread runs in the background to track time, while the main thread waits for user input. If the time limit is reached, the program exits automatically.",
    starterCode:
      "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n\n        // TODO: Create a Runnable task\n\n        // TODO: Start a daemon thread to track time\n\n        // TODO: Allow user input in the main thread\n\n    }\n}\n\nclass MyRunnable implements Runnable {\n\n    // TODO: Override the run() method to implement a countdown\n\n}",
    expectedOutput: "Time's up!",
    commonMistakes: [
      "Calling run() instead of start()",
      "Forgetting to set the thread as a daemon",
      "Not handling InterruptedException properly",
      "Assuming threads execute in a fixed order",
    ],
    difficulty: "hard",
  },
  {
    lessonNumber: 69,
    title: "Multithreading (Runnable Interface)",
    goal: "Run background tasks concurrently using threads and the Runnable interface",
    concept:
      "Multithreading allows a program to perform multiple tasks at the same time. Implementing the Runnable interface is the preferred way to create threads in Java because it supports better design and separation of concerns. Daemon threads run in the background and stop automatically when the main thread finishes.",
    starterCode:
      "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n\n        // TODO: Create a Runnable task\n\n        // TODO: Start a background thread\n\n        // TODO: Read user input while the thread runs\n\n    }\n}\n\nclass MyRunnable implements Runnable {\n\n    // TODO: Override the run() method\n\n}",
    expectedOutput: "Time's up!",
    commonMistakes: [
      "Calling run() instead of start()",
      "Not handling InterruptedException",
      "Forgetting that daemon threads stop with the main thread",
      "Accessing shared data without synchronization",
    ],
    difficulty: "hard",
  },
  {
    lessonNumber: 70,
    title: "Alarm Clock Program",
    goal: "Build a real alarm clock using time validation, multithreading, and audio playback",
    concept:
      "This program combines LocalTime for time comparison, DateTimeFormatter for input validation, multithreading for background time tracking, and audio playback for alarms. The alarm continuously checks the current time and triggers sound playback when the alarm time is reached.",
    starterCode:
      "import java.time.LocalTime;\nimport java.time.format.DateTimeFormatter;\nimport java.time.format.DateTimeParseException;\nimport java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n\n        // TODO: Ask the user for an alarm time\n\n        // TODO: Validate time format using DateTimeFormatter\n\n        // TODO: Start a background thread to monitor time\n\n    }\n}\n\nclass AlarmClock implements Runnable {\n\n    // TODO: Store alarm time and audio file path\n\n    // TODO: Continuously compare current time with alarm time\n\n    // TODO: Play alarm sound when time is reached\n\n}",
    expectedOutput: "*ALARM NOISES*",
    commonMistakes: [
      "Using incorrect time format (HH:mm:ss)",
      "Blocking the main thread instead of using a background thread",
      "Not handling DateTimeParseException",
      "Using unsupported audio file formats",
    ],
    difficulty: "hard",
  },
];

export default lessons;
