const lessons = [
  {
    lessonNumber: 1,
    title: "Primitive and Reference Variables",
    goal: "Declare and use primitive and reference variables correctly in Java",
    concept:
      "Variables are reusable containers for values. In Java, primitive types store simple values directly, while reference types store memory addresses pointing to objects such as String.\n\nExample:\nint age = 10;\nString name = \"Java\";\nSystem.out.println(name + \" is \" + age);\n\nSolution:\nJava is 10",
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
      "The Scanner class is used to take input from the user in Java. Different methods like nextLine(), nextInt(), nextDouble(), and nextBoolean() are used to read different data types.\n\nExample:\nScanner sc = new Scanner(System.in);\nString name = sc.nextLine(); // User types 'Alice'\nSystem.out.println(\"Hi \" + name);\n\nSolution:\nHi Alice",
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
      "The Scanner class allows a program to take user input at runtime. Multiple String values can be read using nextLine() and combined to create dynamic sentences.\n\nExample:\nString adj = \"Happy\";\nString noun = \"Cat\";\nSystem.out.println(\"The \" + noun + \" is \" + adj);\n\nSolution:\nThe Cat is Happy",
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
      "Arithmetic operators perform basic mathematical operations like addition (+), subtraction (-), multiplication (*), division (/), and modulus (%).\n\nExample:\nint a = 10;\nint b = 3;\nSystem.out.println(a % b); // Remainder of 10/3\n\nSolution:\n1",
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
      "Arithmetic operators perform mathematical operations. Remember that integer division truncates decimals.\n\nExample:\nint a = 5;\nint b = 2;\nSystem.out.println(a / b);\n\nSolution:\n2",
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
      "Conditional statements execute different blocks of code based on a boolean condition.\n\nExample:\nint score = 85;\nif(score >= 50) {\n  System.out.println(\"Passed\");\n} else {\n  System.out.println(\"Failed\");\n}\n\nSolution:\nPassed",
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
      "The Random class generates pseudo-random values. nextInt(n) generates a number from 0 to n-1.\n\nExample:\nRandom rand = new Random();\nint x = rand.nextInt(3); // Generates 0, 1, or 2\nSystem.out.println(x < 3);\n\nSolution:\ntrue",
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
      "The Math class provides static methods for common operations like exponents, square roots, and absolute values.\n\nExample:\ndouble result = Math.pow(2, 3);\nSystem.out.println(result);\n\nSolution:\n8.0",
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
      "The printf() method formats text. %s is for Strings, %d for integers, and %.2f for doubles with 2 decimal places.\n\nExample:\ndouble price = 5.5;\nSystem.out.printf(\"Cost: $%.2f\", price);\n\nSolution:\nCost: $5.50",
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
      "Compound interest uses the formula A = P(1 + r/n)^(n·t). In Java, exponents are calculated using Math.pow(base, exponent).\n\nExample:\ndouble base = 5;\nSystem.out.println(Math.pow(base, 2));\n\nSolution:\n25.0",
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
      "Nested if statements are if statements inside other if statements. They are used to check sub-conditions only if the main condition is true.\n\nExample:\nboolean isMember = true;\nboolean isStudent = true;\nif(isMember) {\n  if(isStudent) {\n     System.out.println(\"Full Discount\");\n  }\n}\n\nSolution:\nFull Discount",
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
      "Java Strings have built-in methods like length(), toUpperCase(), and contains() to manipulate text.\n\nExample:\nString text = \" java \";\nSystem.out.println(text.trim().toUpperCase());\n\nSolution:\nJAVA",
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
      "The substring(start, end) method extracts a portion of a string. The start index is inclusive, the end index is exclusive.\n\nExample:\nString s = \"Hello World\";\nSystem.out.println(s.substring(0, 5));\n\nSolution:\nHello",
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
      "Conditional logic allows programs to perform different calculations, such as converting units, based on a user's menu choice.\n\nExample:\nint choice = 1;\nif(choice == 1) {\n   System.out.println(\"Mode A Selected\");\n}\n\nSolution:\nMode A Selected",
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
      "The ternary operator (condition ? trueValue : falseValue) is a shorthand for if-else.\n\nExample:\nint x = 10;\nString status = (x > 5) ? \"High\" : \"Low\";\nSystem.out.println(status);\n\nSolution:\nHigh",
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
      "The ternary operator can replace simple if-else blocks to select between two formulas based on a condition.\n\nExample:\nboolean isMetric = true;\nString unit = isMetric ? \"C\" : \"F\";\nSystem.out.println(unit);\n\nSolution:\nC",
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
      "The enhanced switch (Java 14+) uses arrow syntax (->) and doesn't require 'break' statements. It allows multiple cases per line.\n\nExample:\nint day = 1;\nswitch(day) {\n  case 1, 7 -> System.out.println(\"Weekend\");\n  default -> System.out.println(\"Weekday\");\n}\n\nSolution:\nWeekend",
    starterCode:
      "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n\n        Scanner scanner = new Scanner(System.in);\n\n        // TODO: Ask the user to enter a day of the week\n\n        // TODO: Use an enhanced switch statement to check weekday or weekend\n\n        // TODO: Handle invalid day input using default case\n\n        scanner.close();\n    }\n}",
    expectedOutput: "It is a weekday",
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
      "Enhanced switch statements can return values directly into a variable, making them perfect for operations like a calculator.\n\nExample:\nchar op = '+';\nint result = switch(op) {\n  case '+' -> 10 + 20;\n  default -> 0;\n};\nSystem.out.println(result);\n\nSolution:\n30",
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
      "Logical operators combine booleans: && (AND) requires both true, || (OR) requires one true, ! (NOT) flips the value.\n\nExample:\nboolean sunny = true;\nboolean warm = false;\nif(sunny && !warm) {\n  System.out.println(\"Sunny but cold\");\n}\n\nSolution:\nSunny but cold",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Declare a double variable for temperature\n        // TODO: Declare a boolean variable to indicate if it is sunny\n\n        // TODO: Use logical operators (&&, ||, !) to evaluate weather conditions\n\n        // TODO: Print appropriate weather messages\n\n    }\n}",
    expectedOutput: "The weather is BAD",
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
      "A while loop checks the condition *before* running. A do-while loop runs *at least once* before checking.\n\nExample:\nint i = 0;\nwhile(i < 3) {\n  System.out.print(i + \" \");\n  i++;\n}\n\nSolution:\n0 1 2",
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
      "Combining loops and conditionals allows for interactive games where the program repeats until the user wins.\n\nExample:\nint target = 5;\nint guess = 0;\ndo {\n  guess++; // simulate guessing\n} while(guess != target);\nSystem.out.println(\"Found: \" + guess);\n\nSolution:\nFound: 5",
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
      "For loops are used when you know exactly how many times to repeat code. Structure: for(initialization; condition; update).\n\nExample:\nfor(int i = 3; i > 0; i--) {\n  System.out.print(i + \" \");\n}\n\nSolution:\n3 2 1",
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
      "'break' exits the loop immediately. 'continue' skips the current iteration and jumps to the next one.\n\nExample:\nfor(int i=0; i<5; i++) {\n  if(i==2) continue; // skip 2\n  System.out.print(i + \" \");\n}\n\nSolution:\n0 1 3 4",
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
      "A nested loop (loop inside a loop) is used for grids. The outer loop handles rows, the inner loop handles columns.\n\nExample:\nfor(int i=0; i<2; i++) {\n  for(int j=0; j<2; j++) {\n    System.out.print(\"*\");\n  }\n  System.out.println();\n}\n\nSolution:\n**\n**",
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
      "Methods are reusable blocks of code. They can accept inputs (parameters) and return an output (return value).\n\nExample:\n// Method definition\nstatic int add(int a, int b) {\n  return a + b;\n}\n// Calling it\nSystem.out.println(add(5, 3));\n\nSolution:\n8",
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
      "Method overloading allows methods to have the same name if their parameter lists (type or number) are different.\n\nExample:\nstatic void print(int i) { System.out.println(\"Int: \" + i); }\nstatic void print(String s) { System.out.println(\"Str: \" + s); }\n\nprint(10);\nprint(\"Hi\");\n\nSolution:\nInt: 10\nStr: Hi",
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
      "Scope is where a variable exists. Local variables exist only inside their method. Class variables exist for the whole class.\n\nExample:\nstatic int x = 10; // Class scope\nvoid test() {\n  int x = 5; // Local scope\n  System.out.println(x);\n}\n\nSolution:\n5",
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
      "A menu-driven program uses a 'while' loop to keep the program running until the user selects 'Exit'. State (like balance) is maintained outside the loop.\n\nExample:\nboolean run = true;\nwhile(run) {\n  // Show Menu\n  // if user chooses exit, run = false;\n}\n\nSolution:\n(Program runs until exit)",
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
      "Simulating dice involves generating a random number (1-6) and using it to display results, often using ASCII art or text.\n\nExample:\nRandom r = new Random();\nint die = r.nextInt(6) + 1;\nSystem.out.println(\"You rolled a \" + die);\n\nSolution:\nYou rolled a 4",
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
    lessonNumber: 30,
    title: "Dynamic Arrays with User Input",
    goal: "Create an array based on user input and populate it using a loop",
    concept:
      "Arrays have a fixed size upon creation. To make them 'dynamic' based on user input, we ask for the size first, then create the array.\n\nExample:\nint size = 3; // Input from user\nString[] foods = new String[size];\nfoods[0] = \"Pizza\";\nSystem.out.println(foods.length);\n\nSolution:\n3",
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
    lessonNumber: 31,
    title: "Linear Search in Arrays",
    goal: "Search for an element in an array using a loop",
    concept:
      "Linear search iterates through an array from start to finish checking each element against a target value.\n\nExample:\nint[] nums = {10, 20, 30};\nint target = 20;\nfor(int n : nums) {\n  if(n == target) System.out.println(\"Found!\");\n}\n\nSolution:\nFound!",
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
    lessonNumber: 32,
    title: "Variable Arguments (Varargs)",
    goal: "Use varargs to pass a variable number of arguments to a method",
    concept:
      "Varargs (Type... name) allow a method to accept zero or more arguments of a type. They are treated as an array inside the method.\n\nExample:\nvoid printAll(String... words) {\n  for(String s : words) System.out.print(s + \" \");\n}\nprintAll(\"A\", \"B\", \"C\");\n\nSolution:\nA B C",
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
    lessonNumber: 33,
    title: "2D Arrays in Java",
    goal: "Store and iterate over data using two-dimensional arrays",
    concept:
      "A 2D array is an array of arrays (like a grid). Access elements using [row][column].\n\nExample:\nint[][] grid = { {1, 2}, {3, 4} };\nSystem.out.println(grid[1][0]); // Row 1, Col 0\n\nSolution:\n3",
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
    lessonNumber: 34,
    title: "Quiz Game",
    goal: "Build a quiz game using arrays, loops, and conditional logic",
    concept:
      "Arrays can store parallel data (questions and answers). A loop asks each question and checks the user's input against the answer array.\n\nExample:\nString[] q = {\"Color of sky?\"};\nString[] a = {\"Blue\"};\n// Ask q[0], check if input equals a[0]\n\nSolution:\n(Interactive Quiz)",
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
    lessonNumber: 35,
    title: "Rock Paper Scissors Game",
    goal: "Build an interactive game using loops, random numbers, arrays, and conditionals",
    concept:
      "Game logic typically involves comparing two inputs (player vs computer). Arrays can store the valid moves {\"Rock\", \"Paper\", \"Scissors\"}.\n\nExample:\nString[] moves = {\"R\", \"P\", \"S\"};\nString comp = moves[new Random().nextInt(3)];\nSystem.out.println(comp);\n\nSolution:\n(Random R, P, or S)",
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
    lessonNumber: 36,
    title: "Slot Machine Game",
    goal: "Build a slot machine game using arrays, random numbers, loops, and methods",
    concept:
      "A slot machine checks for matching patterns. You can represent the slots as a row of random symbols. If row[0] == row[1] && row[1] == row[2], the player wins.\n\nExample:\nString[] s = {\"Cherry\", \"Cherry\", \"Bar\"};\nif(s[0].equals(s[1])) System.out.println(\"Match!\");\n\nSolution:\nMatch!",
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
    lessonNumber: 37,
    title: "Objects and Classes",
    goal: "Create objects from a class and access their attributes and methods",
    concept:
      "A Class is a blueprint; an Object is the actual thing built from it. You access an object's properties using the dot operator (.).\n\nExample:\nCar myCar = new Car();\nmyCar.color = \"Red\";\nSystem.out.println(myCar.color);\n\nSolution:\nRed",
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
    lessonNumber: 38,
    title: "Constructors in Java",
    goal: "Initialize objects using constructors and access their attributes and methods",
    concept:
      "A constructor is a special method with the same name as the class. It runs immediately when you create an object (new ClassName()) to set up initial values.\n\nExample:\nclass Human {\n  String name;\n  Human(String n) { this.name = n; }\n}\nHuman h = new Human(\"Dave\");\nSystem.out.println(h.name);\n\nSolution:\nDave",
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
    lessonNumber: 39,
    title: "Constructor Overloading",
    goal: "Initialize objects using multiple constructors with different parameters",
    concept:
      "You can have multiple constructors for the same class (Overloading) to allow creating objects in different ways (e.g., one with a name, one without).\n\nExample:\nclass Box {\n  Box() { System.out.println(\"Empty Box\"); }\n  Box(int size) { System.out.println(\"Size: \" + size); }\n}\nnew Box(5);\n\nSolution:\nSize: 5",
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
    lessonNumber: 40,
    title: "Arrays of Objects",
    goal: "Store and manipulate multiple objects using an array",
    concept:
      "You can store objects in an array just like primitives. You must initialize the array AND each individual object inside it.\n\nExample:\nDog[] dogs = new Dog[2];\ndogs[0] = new Dog(\"Buddy\");\nSystem.out.println(dogs[0].name);\n\nSolution:\nBuddy",
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
    lessonNumber: 41,
    title: "Static Variables and Methods",
    goal: "Understand how static variables and methods belong to a class rather than objects",
    concept:
      "Static members belong to the Class, not specific objects. They are shared by all instances. A static 'count' variable can track how many objects exist.\n\nExample:\nclass User { static int count = 0; User(){ count++; } }\nnew User();\nnew User();\nSystem.out.println(User.count);\n\nSolution:\n2",
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
    lessonNumber: 42,
    title: "Inheritance",
    goal: "Understand how classes inherit attributes and methods from other classes",
    concept:
      "Inheritance (extends) allows a child class to acquire properties of a parent class. It creates an 'Is-A' relationship (e.g., Dog IS-A Animal).\n\nExample:\nclass Animal { void eat() { System.out.println(\"Yum\"); } }\nclass Dog extends Animal {}\nDog d = new Dog();\nd.eat();\n\nSolution:\nYum",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Create objects of Dog, Cat, and Plant classes\n\n    }\n}\n\nclass Organism {\n\n    // TODO: Declare a variable to represent life status\n\n    // TODO: Initialize the variable using a constructor\n\n}\n\nclass Plant extends Organism {\n\n    // TODO: Create a method for photosynthesis\n\n}\n\nclass Animal extends Organism {\n\n    // TODO: Create a method for eating\n\n}\n\nclass Dog extends Animal {\n\n    // TODO: Declare number of lives\n\n    // TODO: Create a method for dog sound\n\n}\n\nclass Cat extends Animal {\n\n    // TODO: Declare number of lives\n\n    // TODO: Create a method for cat sound\n\n}",
    expectedOutput:
      "The plant is growing\nThe dog eats\nThe dog barks\nThe cat eats\nThe cat meows",
    commonMistakes: [
      "Forgetting to use the extends keyword",
      "Assuming child classes inherit constructors automatically",
      "Confusing inheritance with composition",
      "Accessing child-specific methods through parent references incorrectly",
    ],
    difficulty: "medium",
  },
  {
    lessonNumber: 43,
    title: "Super Keyword",
    goal: "Use the super keyword to access parent class constructors and members",
    concept:
      "'super' refers to the parent class. super() calls the parent's constructor, and super.method() calls a parent's method.\n\nExample:\nclass A { A(){ System.out.println(\"A\"); } }\nclass B extends A { B(){ super(); } }\nnew B();\n\nSolution:\nA",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Create Person, Student, and Employee objects\n\n    }\n}\n\nclass Person {\n\n    // TODO: Declare first and last name variables\n\n    // TODO: Create a constructor to initialize them\n\n    // TODO: Create a method to display the full name\n\n}\n\nclass Student extends Person {\n\n    // TODO: Declare a GPA variable\n\n    // TODO: Use super() to initialize name fields\n\n    // TODO: Create a method to display GPA\n\n}\n\nclass Employee extends Person {\n\n    // TODO: Declare a salary variable\n\n    // TODO: Use super() to initialize name fields\n\n    // TODO: Create a method to display salary\n\n}",
    expectedOutput:
      "John Doe\nJane Doe\nGPA: 3.8\nBob Smith\nSalary: $50000",
    commonMistakes: [
      "Forgetting to call super() in subclass constructors",
      "Trying to access private parent variables directly",
      "Assuming super creates a new object",
      "Confusing super with this keyword",
    ],
    difficulty: "medium",
  },
  {
    lessonNumber: 44,
    title: "Method Overriding",
    goal: "Understand how subclasses can override methods from a parent class",
    concept:
      "Method overriding happens when a child class provides a new implementation for a method that already exists in the parent class.\n\nExample:\nclass Bird { void fly() { System.out.println(\"Flying\"); } }\nclass Penguin extends Bird { @Override void fly() { System.out.println(\"Cannot fly\"); } }\nnew Penguin().fly();\n\nSolution:\nCannot fly",
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
    lessonNumber: 45,
    title: "toString() Method",
    goal: "Override the toString() method to display meaningful object information",
    concept:
      "The toString() method returns the string representation of an object. By default, it prints the memory address, but you can override it to print useful data.\n\nExample:\nclass Item { public String toString() { return \"An Item\"; } }\nSystem.out.println(new Item());\n\nSolution:\nAn Item",
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
    lessonNumber: 46,
    title: "Abstract Classes and Methods",
    goal: "Use abstract classes and methods to enforce structure in subclasses",
    concept:
      "An abstract class cannot be instantiated. It is a template. Abstract methods (methods without a body) MUST be implemented by the child class.\n\nExample:\nabstract class Shape { abstract void draw(); }\nclass Circle extends Shape { void draw() { System.out.println(\"O\"); } }\nnew Circle().draw();\n\nSolution:\nO",
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
    lessonNumber: 47,
    title: "Interfaces",
    goal: "Implement interfaces to define common behavior across unrelated classes",
    concept:
      "An Interface defines WHAT a class must do, but not HOW. A class uses 'implements' and must provide bodies for all interface methods.\n\nExample:\ninterface Switch { void flip(); }\nclass Light implements Switch { public void flip() { System.out.println(\"Light On\"); } }\nnew Light().flip();\n\nSolution:\nLight On",
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
    lessonNumber: 48,
    title: "Polymorphism",
    goal: "Use polymorphism to treat different objects as a common superclass type",
    concept:
      "Polymorphism allows you to treat a Dog as an Animal. You can have an array of 'Animal', but fill it with Cats and Dogs, and call their specific methods.\n\nExample:\nAnimal a = new Dog();\na.sound(); // Calls Dog's sound()\n\nSolution:\nWoof",
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
    lessonNumber: 49,
    title: "Runtime Polymorphism",
    goal: "Understand how method execution is decided at runtime based on object type",
    concept:
      "Runtime polymorphism means Java decides which method to run based on the *actual object* created (new Dog()), not the reference type (Animal).\n\nExample:\nAnimal a;\na = new Cat();\na.speak(); // Meow\na = new Dog();\na.speak(); // Woof\n\nSolution:\nMeow\nWoof",
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
    lessonNumber: 50,
    title: "Encapsulation",
    goal: "Protect object data using private variables and public getters and setters",
    concept:
      "Encapsulation hides data by making variables 'private'. You provide 'public' Getters to read them and Setters to modify them safely.\n\nExample:\nprivate int age;\npublic void setAge(int a) {\n  if(a > 0) this.age = a;\n}\n// setAge(-5) would do nothing\n\nSolution:\n(Data protected)",
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
    lessonNumber: 51,
    title: "Aggregation",
    goal: "Understand aggregation as a has-a relationship between objects",
    concept:
      "Aggregation is a 'Has-A' relationship. A Library HAS Books. The Books can exist even if the Library is destroyed.\n\nExample:\nclass Library { Book[] books; }\n// Books are created separately and added to Library\n\nSolution:\n(Relationship Established)",
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
    lessonNumber: 52,
    title: "Composition",
    goal: "Understand composition as a part-of relationship between objects",
    concept:
      "Composition is a strong 'Part-Of' relationship. A Car HAS an Engine. If the Car is destroyed, the Engine is gone too (conceptually).\n\nExample:\nclass Car {\n  Engine engine = new Engine(); // Engine created inside Car\n}\n\nSolution:\n(Strong Relationship)",
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
    lessonNumber: 53,
    title: "Wrapper Classes",
    goal: "Understand how primitive data types can be converted into objects using wrapper classes",
    concept:
      "Wrapper classes (Integer, Double, Boolean) let you treat primitives like Objects. 'Autoboxing' converts int to Integer automatically.\n\nExample:\nInteger num = 10; // Autoboxing\nint n = num;      // Unboxing\nSystem.out.println(num + n);\n\nSolution:\n20",
    starterCode:
      "public class Main {\n    public static void main(String[] args) {\n\n        // TODO: Demonstrate autoboxing using wrapper classes\n\n        // TODO: Demonstrate unboxing back to primitive types\n\n    }\n}",
    expectedOutput: "100\n100",
    commonMistakes: [
      "Unnecessarily wrapping primitives when objects are not required",
      "Confusing autoboxing with type casting",
      "Assuming wrapper objects behave exactly like primitives",
      "Forgetting that wrapper objects can be null",
    ],
    difficulty: "medium",
  },
  {
    lessonNumber: 54,
    title: "ArrayList",
    goal: "Store and manipulate a dynamic list of objects using ArrayList",
    concept:
      "An ArrayList is a resizeable array. You can add() and remove() items dynamically.\n\nExample:\nArrayList<String> list = new ArrayList<>();\nlist.add(\"Java\");\nlist.add(\"Python\");\nSystem.out.println(list.get(0));\n\nSolution:\nJava",
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
    lessonNumber: 55,
    title: "Exception Handling",
    goal: "Handle runtime errors gracefully using try, catch, and finally blocks",
    concept:
      "Try-Catch blocks prevent your program from crashing when errors occur (like division by zero).\n\nExample:\ntry {\n  int x = 10 / 0;\n} catch (ArithmeticException e) {\n  System.out.println(\"Can't divide by zero\");\n}\n\nSolution:\nCan't divide by zero",
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
    lessonNumber: 56,
    title: "Writing Files in Java",
    goal: "Write text data to a file using FileWriter and handle I/O exceptions",
    concept:
      "FileWriter writes text to a file. Wrapping it in a try-block handles errors like 'Permission Denied'.\n\nExample:\ntry {\n  FileWriter writer = new FileWriter(\"test.txt\");\n  writer.write(\"Hello\");\n  writer.close();\n} catch(Exception e) { e.printStackTrace(); }\n\nSolution:\n(File created)",
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
    lessonNumber: 57,
    title: "Reading Files in Java",
    goal: "Read text data from a file line by line using BufferedReader",
    concept:
      "BufferedReader reads files efficiently line by line.\n\nExample:\nBufferedReader reader = new BufferedReader(new FileReader(\"file.txt\"));\nSystem.out.println(reader.readLine());\nreader.close();\n\nSolution:\n(Prints first line of file)",
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
    lessonNumber: 58,
    title: "Playing Audio in Java",
    goal: "Play, stop, reset, and control audio files using Java",
    concept:
      "Java's Clip class can play .wav files. You need to open an AudioInputStream and start the Clip.\n\nExample:\n// Pseudo-code\nClip clip = AudioSystem.getClip();\nclip.open(audioStream);\nclip.start();\n\nSolution:\n(Sound plays)",
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
    lessonNumber: 59,
    title: "Hangman Game",
    goal: "Build a complete Hangman game using files, collections, loops, and conditionals",
    concept:
      "Hangman combines file I/O (to get words), ArrayLists (to track guesses), and loops (gameplay cycle).\n\nExample:\nArrayList<Character> guesses = new ArrayList<>();\nguesses.add('a');\nif(word.contains(\"a\")) System.out.println(\"Correct!\");\n\nSolution:\nCorrect!",
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
    lessonNumber: 60,
    title: "Dates and Times in Java",
    goal: "Work with dates, times, timestamps, formatting, and comparisons using the java.time API",
    concept:
      "LocalDate and LocalTime represent dates/times. DateTimeFormatter allows custom display formats.\n\nExample:\nLocalDate today = LocalDate.now();\nSystem.out.println(today);\n\nSolution:\n(e.g., 2023-10-27)",
    starterCode:
      "import java.time.Instant;\nimport java.time.LocalDate;\nimport java.time.LocalDateTime;\nimport java.time.LocalTime;\nimport java.time.format.DateTimeFormatter;\n\npublic class Main {\n    public static void main(String[] args) {\n\n        // TODO: Print the current date\n\n        // TODO: Print the current time\n\n        // TODO: Print the current date and time\n\n        // TODO: Print the current UTC timestamp\n\n        // TODO: Format date and time using DateTimeFormatter\n\n        // TODO: Compare two LocalDateTime objects\n\n    }\n}",
    expectedOutput:
      "2025-01-01\n12:00:00\n2025-01-01T12:00:00\n2025-01-01T12:00:00Z\nfalse",
    commonMistakes: [
      "Using the old Date and Calendar classes instead of java.time",
      "Assuming LocalDateTime contains timezone information",
      "Using incorrect date format patterns",
      "Comparing dates using == instead of isBefore/isAfter",
    ],
    difficulty: "medium",
  },
  {
    lessonNumber: 61,
    title: "Anonymous Classes",
    goal: "Use anonymous classes to override behavior without creating a named class",
    concept:
      "An anonymous class lets you modify an object's behavior on the fly without creating a new file.\n\nExample:\nRunnable r = new Runnable() {\n  public void run() { System.out.println(\"Running\"); }\n};\nr.run();\n\nSolution:\nRunning",
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
    lessonNumber: 62,
    title: "Timer and TimerTask",
    goal: "Schedule tasks to run at a fixed time or repeatedly using Timer and TimerTask",
    concept:
      "Timer schedules tasks to run later. TimerTask defines what the task is.\n\nExample:\nTimer t = new Timer();\nt.schedule(new TimerTask() {\n  public void run() { System.out.println(\"Ping\"); }\n}, 1000);\n\nSolution:\n(Wait 1s) Ping",
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
    lessonNumber: 63,
    title: "Countdown Timer",
    goal: "Create a countdown timer using Timer and TimerTask",
    concept:
      "A countdown decreases a variable every second inside a TimerTask. When it hits zero, cancel the timer.\n\nExample:\nint count = 5;\n// Inside TimerTask run():\ncount--;\nif(count == 0) timer.cancel();\n\nSolution:\n(Countdown stops)",
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
    lessonNumber: 64,
    title: "Generics",
    goal: "Create reusable classes that work with different data types using generics",
    concept:
      "Generics <T> allow a Class to handle any data type. Box<Integer> holds ints; Box<String> holds Strings.\n\nExample:\nclass Box<T> { T data; }\nBox<String> b = new Box<>();\nb.data = \"Gift\";\nSystem.out.println(b.data);\n\nSolution:\nGift",
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
    lessonNumber: 65,
    title: "HashMap",
    goal: "Store and retrieve data using key-value pairs with HashMap",
    concept:
      "HashMap stores Key-Value pairs. You look up a value by providing its key. Keys must be unique.\n\nExample:\nHashMap<String, Integer> map = new HashMap<>();\nmap.put(\"Apple\", 5);\nSystem.out.println(map.get(\"Apple\"));\n\nSolution:\n5",
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
    lessonNumber: 66,
    title: "Enums (Enumerations)",
    goal: "Use enums to represent a fixed set of constants safely and clearly",
    concept:
      "Enums restrict variables to a set of predefined constants, like Days of the Week or Card Suits.\n\nExample:\nenum Color { RED, BLUE }\nColor c = Color.RED;\nSystem.out.println(c);\n\nSolution:\nRED",
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
    lessonNumber: 67,
    title: "Multithreading with Time Limits",
    goal: "Use a background thread to enforce a time limit while the main thread handles user input",
    concept:
      "A Daemon thread runs in the background. If the user doesn't answer in time, the Daemon thread can exit the program.\n\nExample:\n// Background thread sleeps 5s then exits\n// Main thread waits for input\n\nSolution:\n(Program exits if no input)",
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
    lessonNumber: 68,
    title: "Multithreading (Runnable Interface)",
    goal: "Run background tasks concurrently using threads and the Runnable interface",
    concept:
      "Multithreading allows doing two things at once. One thread can print symbols while another waits for input.\n\nExample:\nThread t = new Thread(() -> System.out.println(\"Running\"));\nt.start();\n\nSolution:\nRunning",
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
    lessonNumber: 69,
    title: "Alarm Clock Program",
    goal: "Build a real alarm clock using time validation, multithreading, and audio playback",
    concept:
      "An alarm clock continuously checks (in a loop on a background thread) if CurrentTime equals AlarmTime.\n\nExample:\n// Loop\nif(LocalTime.now().equals(alarm)) playSound();\n\nSolution:\n*ALARM NOISES*",
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
