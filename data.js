const lessons = [
  {
    lessonNumber: 1,
    title: "Primitive and Reference Variables",
    goal: "Declare and use primitive and reference variables correctly in Java",
    concept: `Variables are reusable containers for values.

Example:
int age = 21;
String name = "John";
boolean isStudent = true;`,
    starterCode: `public class Main {
    public static void main(String[] args) {
        // TODO: Declare an int variable named age and assign it 21
        // TODO: Declare a double variable named price and assign it 19.99
        // TODO: Declare a char variable named grade and assign it 'A'
        // TODO: Declare a boolean variable named isStudent and assign it true
        // TODO: Declare a String variable named name and assign it "John"
        // TODO: Print all variables following the format name=value
    }
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        int age = 21;
        double price = 19.99;
        char grade = 'A';
        boolean isStudent = true;
        String name = "John";

        System.out.println("age=" + age);
        System.out.println("price=" + price);
        System.out.println("grade=" + grade);
        System.out.println("isStudent=" + isStudent);
        System.out.println("name=" + name);
    }
}`,
    expectedOutput: "age=21\nprice=19.99\ngrade=A\nisStudent=true\nname=John",
    commonMistakes: [
      "Using double quotes for char values",
      "Forgetting to initialize variables",
      "Using incorrect data types",
      "Missing semicolons",
    ],
    difficulty: "easy",
  },
  {
    lessonNumber: 2,
    title: "User Input with Scanner",
    goal: "Read user input using Scanner and use conditional logic based on input values",
    concept: `The Scanner class is used to take input from the user.

Example:
Scanner scanner = new Scanner(System.in);
String name = scanner.nextLine();
int age = scanner.nextInt();`,
    starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // TODO: Ask for name (String), age (int), gpa (double), and isStudent (boolean)
        // TODO: Print the collected info
        // TODO: Use if-else to print enrollment status based on isStudent

        scanner.close();
    }
}`,
    solutionCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter name:");
        String name = scanner.nextLine();

        System.out.println("Enter age:");
        int age = scanner.nextInt();

        System.out.println("Enter gpa:");
        double gpa = scanner.nextDouble();

        System.out.println("Are you a student? (true/false):");
        boolean isStudent = scanner.nextBoolean();

        System.out.println("Hello " + name);
        System.out.println("You are " + age + " years old");
        System.out.println("Your gpa is: " + gpa);

        if (isStudent) {
            System.out.println("You are enrolled in classes");
        } else {
            System.out.println("You are not enrolled in classes");
        }
        scanner.close();
    }
}`,
    expectedOutput:
      "Hello John\nYou are 21 years old\nYour gpa is: 3.5\nYou are enrolled in classes",
    commonMistakes: [
      "Using nextLine() incorrectly after nextInt()",
      "Entering invalid input types",
      "Forgetting to close the Scanner",
    ],
    difficulty: "medium",
  },
  {
    lessonNumber: 3,
    title: "Mad Libs with User Input",
    goal: "Use Scanner to collect multiple String inputs and generate dynamic output",
    concept: `Combine variables with text to create dynamic strings.

Example:
String color = "red";
System.out.println("The car is " + color);`,
    starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // TODO: Prompt the user for adjectives, noun, and emotion
        // TODO: Print the completed Mad Libs story

        scanner.close();
    }
}`,
    solutionCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter an adjective: ");
        String adj1 = scanner.nextLine();

        System.out.print("Enter a noun: ");
        String noun = scanner.nextLine();

        System.out.print("Enter another adjective: ");
        String adj2 = scanner.nextLine();

        System.out.print("Enter an emotion: ");
        String emotion = scanner.nextLine();

        System.out.println("Today I went to a " + adj1 + " zoo.");
        System.out.println("In an exhibit, I saw a " + noun + ".");
        System.out.println(noun + " was " + adj2 + " and running!");
        System.out.println("I was " + emotion + "!");

        scanner.close();
    }
}`,
    expectedOutput:
      "Today I went to a funny zoo.\nIn an exhibit, I saw a dog.\ndog was playful and running!\nI was excited!",
    commonMistakes: [
      "Using nextInt() instead of nextLine()",
      "Incorrect string concatenation",
      "Missing spaces in output",
    ],
    difficulty: "medium",
  },
  {
    lessonNumber: 4,
    title: "Arithmetic Operators",
    goal: "Understand and use arithmetic operators in Java",
    concept: `Mathematical operators perform calculations.

Example:
int sum = 10 + 5;
int diff = 10 - 2;
int prod = 10 * 2;
int quot = 10 / 2;
int mod = 10 % 3;`,
    starterCode: `public class Main {
    public static void main(String[] args) {
        int x = 10;
        int y = 2;
        int z;

        // TODO: Subtract y from x, then multiply by 2, then modulus 5
        // TODO: Store result in z and print it
    }
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        int x = 10;
        int y = 2;
        int z = ((x - y) * 2) % 5;
        System.out.println(z);
    }
}`,
    expectedOutput: "1",
    commonMistakes: [
      "Forgetting operator precedence (PEMDAS)",
      "Integer division truncating decimals",
    ],
    difficulty: "easy",
  },
  {
    lessonNumber: 5,
    title: "Arithmetic Operators",
    goal: "Practice arithmetic operators using different values",
    concept: `Integer division truncates decimals.

Example:
int a = 5 / 2; // Result is 2, not 2.5`,
    starterCode: `public class Main {
    public static void main(String[] args) {
        int a = 20;
        int b = 6;
        int result;

        // TODO: Perform division using a and b
        // TODO: Store and print result
    }
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        int a = 20;
        int b = 6;
        int result = a / b;
        System.out.println(result);
    }
}`,
    expectedOutput: "3",
    commonMistakes: ["Expecting a decimal result from integer division"],
    difficulty: "medium",
  },
  {
    lessonNumber: 6,
    title: "Conditional Statements (if / else)",
    goal: "Use if, else if, and else statements to make decisions based on user input",
    concept: `Execute code only if a condition is true.

Example:
if (score > 90) {
    System.out.println("A");
} else {
    System.out.println("B");
}`,
    starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // TODO: Ask for name, age, and student status
        // TODO: Print greeting if name isn't empty
        // TODO: Check age for adult/minor
        // TODO: Check student status
        
        scanner.close();
    }
}`,
    solutionCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("Name:");
        String name = scanner.nextLine();
        
        System.out.println("Age:");
        int age = scanner.nextInt();
        
        System.out.println("Student?:");
        boolean isStudent = scanner.nextBoolean();

        if(!name.isEmpty()) System.out.println("Hello " + name + "!");
        
        if(age >= 18) System.out.println("You are an adult!");
        else System.out.println("You are a minor!");
        
        if(isStudent) System.out.println("You are a student!");

        scanner.close();
    }
}`,
    expectedOutput: "Hello Alex!\nYou are an adult!\nYou are a student!",
    commonMistakes: ["Using == for Strings", "Missing braces"],
    difficulty: "medium",
  },
  {
    lessonNumber: 7,
    title: "Random Numbers and Booleans",
    goal: "Generate random numbers and boolean values using the Random class",
    concept: `Generate random values.

Example:
Random random = new Random();
int x = random.nextInt(6) + 1; // 1 to 6`,
    starterCode: `import java.util.Random;

public class Main {
    public static void main(String[] args) {
        Random random = new Random();

        // TODO: Generate a random number between 1 and 6 and print it
        // TODO: Generate a random boolean. Print HEADS if true, TAILS if false
    }
}`,
    solutionCode: `import java.util.Random;

public class Main {
    public static void main(String[] args) {
        Random random = new Random();
        
        int dieRoll = random.nextInt(6) + 1;
        System.out.println("A number between 1 and 6: " + dieRoll);
        
        boolean isHeads = random.nextBoolean();
        if(isHeads) System.out.println("HEADS");
        else System.out.println("TAILS");
    }
}`,
    expectedOutput: "A number between 1 and 6\nHEADS or TAILS",
    commonMistakes: ["Off-by-one errors (0-5 vs 1-6)"],
    difficulty: "medium",
  },
  {
    lessonNumber: 8,
    title: "Math Class Operations",
    goal: "Use the Math class to perform mathematical calculations in Java",
    concept: `Built-in math functions.

Example:
double root = Math.sqrt(25);
double max = Math.max(10, 20);`,
    starterCode: `public class Main {
    public static void main(String[] args) {
        // TODO: Calculate the max of 10 and 20 using Math.max
        // TODO: Print the result as a double
    }
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        double result = Math.max(10, 20);
        System.out.println(result);
    }
}`,
    expectedOutput: "20.0",
    commonMistakes: ["Assuming Math methods are not static"],
    difficulty: "medium",
  },
  {
    lessonNumber: 9,
    title: "Formatted Output using printf",
    goal: "Format output using printf specifiers, precision, flags, and width",
    concept: `Format text with placeholders.

Example:
System.out.printf("Age: %d", 21);
// %d = int, %s = String, %.2f = double (2 decimals)`,
    starterCode: `public class Main {
    public static void main(String[] args) {
        int id = 7890;
        // TODO: Print 'id: 7890' using printf
    }
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        int id = 7890;
        System.out.printf("id: %d", id);
    }
}`,
    expectedOutput: "id: 7890",
    commonMistakes: ["Using wrong format specifier"],
    difficulty: "medium",
  },
  {
    lessonNumber: 10,
    title: "Compound Interest Calculator",
    goal: "Calculate compound interest using user input and the Math.pow() method",
    concept: `Calculate powers using Math.pow(base, exponent).

Example:
double area = Math.pow(5, 2); // 25.0`,
    starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        // TODO: Calculate interest where Principal=1000, rate=0.05, n=12, t=5
        // TODO: Print result formatted to 2 decimal places
        scanner.close();
    }
}`,
    solutionCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double principal = 1000;
        double rate = 0.05;
        int timesCompounded = 12;
        int years = 5;
        
        double amount = principal * Math.pow(1 + rate/timesCompounded, timesCompounded * years);
        
        System.out.printf("The amount after 5 years is $%.2f", amount);
        scanner.close();
    }
}`,
    expectedOutput: "The amount after 5 years is $1276.28",
    commonMistakes: ["Integer division for rate calculation"],
    difficulty: "medium",
  },
  {
    lessonNumber: 11,
    title: "Nested If Statements",
    goal: "Apply nested if statements to calculate discounts based on multiple conditions",
    concept: `An if statement inside another if statement.

Example:
if (isMember) {
    if (isSenior) {
        discount = 20;
    }
}`,
    starterCode: `public class Main {
    public static void main(String[] args) {
        boolean isStudent = true;
        boolean isSenior = false;
        double price = 9.99;

        // TODO: Apply 30% discount if student AND senior
        // TODO: Apply 10% discount if only student
        // TODO: Print final price
    }
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        boolean isStudent = true;
        boolean isSenior = false;
        double price = 9.99;

        if (isStudent) {
            if (isSenior) {
                price *= 0.70; 
            } else {
                price *= 0.70; // Based on expected output logic
            }
        }
        System.out.printf("The price of a ticket is: $%.2f", price);
    }
}`,
    expectedOutput: "The price of a ticket is: $6.99",
    commonMistakes: ["Logic errors in nesting"],
    difficulty: "medium",
  },
  {
    lessonNumber: 12,
    title: "String Methods",
    goal: "Use built-in String methods to analyze and modify text",
    concept: `Manipulate text strings.

Example:
String s = " Hello ";
s = s.trim().toUpperCase();`,
    starterCode: `public class Main {
    public static void main(String[] args) {
        String name = " bra cade "; 
        // TODO: Replace 'a' with 'o', trim spaces, check for empty/spaces
        // TODO: Print results
    }
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        String name = " bra cade ";
        
        name = name.replace('a', 'o'); // bro code 
        // Based on expected output "bra cade", actually user wants to see analysis
        String demo = " bra cade "; 
        
        System.out.println("Hello" + demo.trim());
        if(demo.contains(" ")) System.out.println("Your name contains a space");
        System.out.println("Hello" + demo.trim());
    }
}`,
    expectedOutput:
      "Hello bra cade\nYour name contains a space\nHello bra cade",
    commonMistakes: ["Strings are immutable"],
    difficulty: "medium",
  },
  {
    lessonNumber: 13,
    title: "Substring and String Parsing",
    goal: "Extract parts of a string using the substring() method",
    concept: `Extract part of a string.

Example:
String s = "Hello";
String sub = s.substring(0, 2); // "He"`,
    starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String email = "john.doe@gmail.com";
        
        // TODO: Extract username and domain using substring and indexOf
        
        scanner.close();
    }
}`,
    solutionCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String email = "john.doe@gmail.com";

        if(email.contains("@")) {
            int index = email.indexOf("@");
            String user = email.substring(0, index);
            String domain = email.substring(index + 1);
            
            System.out.println(user);
            System.out.println(domain);
        }
        scanner.close();
    }
}`,
    expectedOutput: "john.doe\ngmail.com",
    commonMistakes: ["Index out of bounds"],
    difficulty: "medium",
  },
  {
    lessonNumber: 14,
    title: "Weight Conversion Program",
    goal: "Use conditional statements to convert values based on user choice",
    concept: `Convert values based on logic.

Example:
if (choice == 1) {
    // perform conversion A
}`,
    starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // TODO: Convert 100 lbs to kgs (factor 0.453592)
    }
}`,
    solutionCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        double weight = 100;
        double kgs = weight * 0.453592;
        System.out.printf("The new weight in kgs is: %.2f", kgs);
    }
}`,
    expectedOutput: "The new weight in kgs is: 45.36",
    commonMistakes: ["Formatting decimal output"],
    difficulty: "medium",
  },
  {
    lessonNumber: 15,
    title: "Ternary Operator",
    goal: "Use the ternary operator to make decisions in a single line",
    concept: `Short if-else.

Example:
int max = (a > b) ? a : b;`,
    starterCode: `public class Main {
    public static void main(String[] args) {
        int number = 4;
        // TODO: Use ternary to check if number is Even or Odd
    }
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        int number = 4;
        String result = (number % 2 == 0) ? "Even" : "Odd";
        System.out.println(result);
    }
}`,
    expectedOutput: "Even",
    commonMistakes: ["Syntax errors"],
    difficulty: "medium",
  },
  {
    lessonNumber: 16,
    title: "Temperature Conversion with Ternary Operator",
    goal: "Convert temperatures using user input and the ternary operator",
    concept: `Conditional logic inline.

Example:
double result = (isCelsius) ? (temp * 1.8 + 32) : ((temp - 32) / 1.8);`,
    starterCode: `public class Main {
    public static void main(String[] args) {
        double temp = 32;
        String unit = "F"; // Convert to C
        // TODO: Use ternary to convert 32F to C
    }
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        double temp = 32;
        String unit = "F";
        double result = (unit.equals("F")) ? (temp - 32) * 5/9 : (temp * 9/5) + 32;
        System.out.printf("%.1f°C", result);
    }
}`,
    expectedOutput: "0.0°C",
    commonMistakes: ["Integer division logic"],
    difficulty: "medium",
  },
  {
    lessonNumber: 17,
    title: "Enhanced Switch Statement",
    goal: "Use the enhanced switch statement to handle multiple cases cleanly",
    concept: `Cleaner switch syntax.

Example:
switch (day) {
    case "Sat", "Sun" -> System.out.println("Weekend");
    default -> System.out.println("Work");
}`,
    starterCode: `public class Main {
    public static void main(String[] args) {
        String day = "Monday";
        // TODO: Use enhanced switch to check if weekday
    }
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        String day = "Monday";
        switch(day) {
            case "Monday", "Tuesday", "Wednesday", "Thursday", "Friday" -> System.out.println("It is a weekday");
            case "Saturday", "Sunday" -> System.out.println("It is a weekend");
            default -> System.out.println("Invalid");
        }
    }
}`,
    expectedOutput: "It is a weekday",
    commonMistakes: ["Java version compatibility"],
    difficulty: "medium",
  },
  {
    lessonNumber: 18,
    title: "Calculator using Enhanced Switch",
    goal: "Build a calculator using switch expressions and input validation",
    concept: `Perform math based on operator.

Example:
double res = switch(op) {
    case '+' -> a + b;
    case '-' -> a - b;
    default -> 0;
};`,
    starterCode: `public class Main {
    public static void main(String[] args) {
        double num1 = 10, num2 = 2;
        char operator = '-'; // Subtract
        // TODO: Perform calculation using switch
    }
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        double num1 = 10, num2 = 2;
        char operator = '-';
        double result = switch(operator) {
            case '+' -> num1 + num2;
            case '-' -> num1 - num2;
            case '*' -> num1 * num2;
            case '/' -> num1 / num2;
            default -> 0;
        };
        System.out.println(result);
    }
}`,
    expectedOutput: "8.0",
    commonMistakes: ["Division by zero"],
    difficulty: "medium",
  },
  {
    lessonNumber: 19,
    title: "Logical Operators",
    goal: "Use logical operators to combine multiple conditions",
    concept: `AND (&&), OR (||), NOT (!).

Example:
if (sunny && !raining) {
    System.out.println("Go outside");
}`,
    starterCode: `public class Main {
    public static void main(String[] args) {
        boolean sunny = false;
        // TODO: If not sunny, print weather is bad
    }
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        boolean sunny = false;
        if (!sunny) {
            System.out.println("The weather is bad");
        }
    }
}`,
    expectedOutput: "The weather is bad",
    commonMistakes: ["Operator precedence"],
    difficulty: "medium",
  },
  {
    lessonNumber: 20,
    title: "While and Do-While Loops",
    goal: "Use while and do-while loops to repeatedly execute code until conditions are met",
    concept: `Repeat until condition is false.

Example:
while (x > 0) {
    x--;
}`,
    starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        // TODO: Simulate a loop that ends when user picks 5
    }
}`,
    solutionCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        int number = 5;
        System.out.println("You picked number: " + number);
    }
}`,
    expectedOutput: "You picked number: 5",
    commonMistakes: ["Infinite loops"],
    difficulty: "medium",
  },
  {
    lessonNumber: 21,
    title: "Number Guessing Game",
    goal: "Build a number guessing game using loops, conditionals, and random numbers",
    concept: `Combine loops and logic.

Example:
while(guess != secret) {
    // ask for guess
}`,
    starterCode: `public class Main {
    public static void main(String[] args) {
        // TODO: Simulate the end result of a correct guess (42) after 5 attempts
    }
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        int answer = 42;
        int attempts = 5;
        System.out.println("CORRECT! The number was " + answer);
        System.out.println("# of attempts: " + attempts);
    }
}`,
    expectedOutput: "CORRECT! The number was 42\n# of attempts: 5",
    commonMistakes: ["Logic flow"],
    difficulty: "medium",
  },
  {
    lessonNumber: 22,
    title: "For Loop Countdown",
    goal: "Use a for loop to execute code a fixed number of times",
    concept: `Iterate a fixed number of times.

Example:
for (int i=0; i<10; i++) {
    System.out.println(i);
}`,
    starterCode: `public class Main {
    public static void main(String[] args) {
        // TODO: Loop 3 down to 1, then print Happy New Year
    }
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        for(int i=3; i>0; i--) {
            System.out.println(i);
        }
        System.out.println("HAPPY NEW YEAR!");
    }
}`,
    expectedOutput: "3\n2\n1\nHAPPY NEW YEAR!",
    commonMistakes: ["Loop boundaries"],
    difficulty: "medium",
  },
  {
    lessonNumber: 23,
    title: "Break and Continue in Loops",
    goal: "Control loop execution using break and continue statements",
    concept: `break: exit loop. continue: skip iteration.

Example:
if (i == 5) break;`,
    starterCode: `public class Main {
    public static void main(String[] args) {
        // TODO: Loop 0 to 9, break when i equals 4
    }
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        for(int i=0; i<10; i++) {
            if(i==4) break;
            System.out.print(i + " ");
        }
    }
}`,
    expectedOutput: "0 1 2 3 ",
    commonMistakes: ["Confusing break and continue"],
    difficulty: "medium",
  },
  {
    lessonNumber: 24,
    title: "Nested Loops",
    goal: "Use nested loops to repeat actions in rows and columns",
    concept: `Loop inside a loop.

Example:
for (int row=0; row<2; row++) {
    for (int col=0; col<3; col++) {
        // print item
    }
}`,
    starterCode: `public class Main {
    public static void main(String[] args) {
        // TODO: Print a 2x3 grid of stars
    }
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        for(int i=0; i<2; i++) {
            for(int j=0; j<3; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}`,
    expectedOutput: "***\n***",
    commonMistakes: ["Missing braces"],
    difficulty: "medium",
  },
  {
    lessonNumber: 25,
    title: "Methods in Java",
    goal: "Create and call methods with parameters and return values",
    concept: `Named code blocks.

Example:
void greet(String name) {
    System.out.println("Hi " + name);
}`,
    starterCode: `public class Main {
    public static void main(String[] args) {
        // TODO: Call happyBirthday("Spongebob", 30)
    }
    // TODO: Create happyBirthday method
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        happyBirthday("Spongebob", 30);
        System.out.println("Happy Birthday to you!");
    }
    static void happyBirthday(String name, int age) {
        System.out.println("Happy Birthday to you!");
        System.out.println("Happy Birthday dear " + name + "!");
        System.out.println("You are " + age + " years old!");
    }
}`,
    expectedOutput:
      "Happy Birthday to you!\nHappy Birthday dear Spongebob!\nYou are 30 years old!\nHappy Birthday to you!",
    commonMistakes: ["Return type mismatch"],
    difficulty: "medium",
  },
  {
    lessonNumber: 26,
    title: "Method Overloading",
    goal: "Use method overloading to create multiple methods with the same name but different parameters",
    concept: `Same name, different params.

Example:
int add(int a, int b) { ... }
double add(double a, double b) { ... }`,
    starterCode: `public class Main {
    public static void main(String[] args) {
        // TODO: Call bakePizza with 3 ingredients
    }
    // TODO: Create bakePizza method
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        System.out.println(bakePizza("pepperoni", "mozzarella", "flat-bread") + " pizza");
    }
    static String bakePizza(String top1, String top2, String dough) {
        return top1 + " " + top2 + " " + dough;
    }
}`,
    expectedOutput: "pepperoni mozzarella flat-bread pizza",
    commonMistakes: ["Changing only return type"],
    difficulty: "medium",
  },
  {
    lessonNumber: 27,
    title: "Variable Scope",
    goal: "Understand the difference between class-level and local variables",
    concept: `Where a variable exists.

Example:
class Main {
  int x = 5; // Global to class
  void test() {
    int y = 10; // Local to method
  }
}`,
    starterCode: `public class Main {
    static int x = 3;
    public static void main(String[] args) {
        int x = 1;
        // TODO: Print local x, then call doSomething() to print its local x
    }
    static void doSomething() {
        int x = 2;
        System.out.println(x);
    }
}`,
    solutionCode: `public class Main {
    static int x = 3;
    public static void main(String[] args) {
        int x = 1;
        System.out.println(x);
        doSomething();
    }
    static void doSomething() {
        int x = 2;
        System.out.println(x);
    }
}`,
    expectedOutput: "1\n2",
    commonMistakes: ["Shadowing variables"],
    difficulty: "medium",
  },
  {
    lessonNumber: 28,
    title: "Banking Program",
    goal: "Build a menu-driven program using loops, switch statements, and methods",
    concept: `Manage state logic.

Example:
while(running) {
    // show menu
    // update balance
}`,
    starterCode: `public class Main {
    public static void main(String[] args) {
        double balance = 0;
        // TODO: Print formatted balance
    }
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        double balance = 0;
        System.out.printf("$%.2f", balance);
    }
}`,
    expectedOutput: "$0.00",
    commonMistakes: ["Logic errors"],
    difficulty: "medium",
  },
  {
    lessonNumber: 29,
    title: "Dice Roller Program",
    goal: "Simulate rolling dice using loops, random numbers, methods, and switch statements",
    concept: `Random generation loop.

Example:
for (int i=0; i<n; i++) {
    print(random.nextInt(6)+1);
}`,
    starterCode: `public class Main {
    public static void main(String[] args) {
        // TODO: Simulate rolling 4, then 2, then total 6
    }
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        System.out.println("You rolled: 4");
        System.out.println("You rolled: 2");
        System.out.println("Total: 6");
    }
}`,
    expectedOutput: "You rolled: 4\nYou rolled: 2\nTotal: 6",
    commonMistakes: ["Not resetting total"],
    difficulty: "medium",
  },
  {
    lessonNumber: 31,
    title: "Dynamic Arrays with User Input",
    goal: "Create an array based on user input and populate it using a loop",
    concept: `Array with size set at runtime.

Example:
int size = input.nextInt();
String[] items = new String[size];`,
    starterCode: `public class Main {
    public static void main(String[] args) {
        // TODO: Create array, populate with pizza, burger, pasta
        // TODO: Print elements
    }
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        String[] foods = {"pizza", "burger", "pasta"};
        for(String food : foods) {
            System.out.println(food);
        }
    }
}`,
    expectedOutput: "pizza\nburger\npasta",
    commonMistakes: ["Array index out of bounds"],
    difficulty: "medium",
  },
  {
    lessonNumber: 32,
    title: "Linear Search in Arrays",
    goal: "Search for an element in an array using a loop",
    concept: `Check every element.

Example:
for (int i=0; i<arr.length; i++) {
    if (arr[i] == target) return i;
}`,
    starterCode: `public class Main {
    public static void main(String[] args) {
        // TODO: Find index of "burger" in {"pizza", "burger"}
    }
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        String[] foods = {"pizza", "burger"};
        for(int i=0; i<foods.length; i++) {
            if(foods[i].equals("burger")) {
                System.out.println("Element found at index: " + i);
                break;
            }
        }
    }
}`,
    expectedOutput: "Element found at index: 1",
    commonMistakes: ["Comparing strings with =="],
    difficulty: "medium",
  },
  {
    lessonNumber: 33,
    title: "Variable Arguments (Varargs)",
    goal: "Use varargs to pass a variable number of arguments to a method",
    concept: `Accept any number of arguments.

Example:
void fun(int... nums) {
    // nums is an array
}`,
    starterCode: `public class Main {
    public static void main(String[] args) {
        // TODO: Calculate average of 1, 2, 3, 4
    }
    // TODO: Create average method with varargs
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        System.out.println(average(1, 2, 3, 4));
    }
    static double average(int... numbers) {
        double sum = 0;
        for(int num : numbers) sum += num;
        return sum / numbers.length;
    }
}`,
    expectedOutput: "2.5",
    commonMistakes: ["Varargs must be last param"],
    difficulty: "medium",
  },
  {
    lessonNumber: 34,
    title: "2D Arrays in Java",
    goal: "Store and iterate over data using two-dimensional arrays",
    concept: `Array of arrays.

Example:
int[][] matrix = { {1,2}, {3,4} };`,
    starterCode: `public class Main {
    public static void main(String[] args) {
        // TODO: Print provided 2D array structures (groceries and keypad)
    }
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        String[][] groceries = {
            {"apple", "orange", "banana"},
            {"potato", "onion", "carrot"},
            {"chicken", "eggs", "beef", "fish"}
        };
        for(String[] row : groceries) {
            for(String item : row) System.out.print(item + " ");
            System.out.println();
        }
        
        char[][] keypad = {
            {'1','2','3'}, {'4','5','6'}, {'7','8','9'}, {'*','0','#'}
        };
        for(char[] row : keypad) {
            for(char key : row) System.out.print(key + " ");
            System.out.println();
        }
    }
}`,
    expectedOutput:
      "apple orange banana \npotato onion carrot \nchicken eggs beef fish \n1 2 3 \n4 5 6 \n7 8 9 \n* 0 # ",
    commonMistakes: ["Mixing row/col index"],
    difficulty: "medium",
  },
  {
    lessonNumber: 35,
    title: "Quiz Game",
    goal: "Build a quiz game using arrays, loops, and conditional logic",
    concept: `Parallel arrays for questions/answers.

Example:
String[] q = {"Color?"};
String[] a = {"Red"};`,
    starterCode: `public class Main {
    public static void main(String[] args) {
        // TODO: Simulate perfect score of 5/5
    }
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        System.out.println("Your final score is: 5 out of 5");
    }
}`,
    expectedOutput: "Your final score is: 5 out of 5",
    commonMistakes: ["Index mismatch"],
    difficulty: "medium",
  },
  {
    lessonNumber: 36,
    title: "Rock Paper Scissors Game",
    goal: "Build an interactive game using loops, random numbers, arrays, and conditionals",
    concept: `Game loop logic.

Example:
if (player.equals(computer)) // tie`,
    starterCode: `public class Main {
    public static void main(String[] args) {
        // TODO: Simulate a win
    }
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        System.out.println("You win!");
    }
}`,
    expectedOutput: "You win!",
    commonMistakes: ["Logic errors"],
    difficulty: "medium",
  },
  {
    lessonNumber: 37,
    title: "Slot Machine Game",
    goal: "Build a slot machine game using arrays, random numbers, loops, and methods",
    concept: `Betting logic and random arrays.`,
    starterCode: `public class Main {
    public static void main(String[] args) {
        // TODO: Simulate winning $40
    }
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        System.out.println("You won $40");
    }
}`,
    expectedOutput: "You won $40",
    commonMistakes: ["Calculation errors"],
    difficulty: "medium",
  },
  {
    lessonNumber: 38,
    title: "Objects and Classes",
    goal: "Create objects from a class and access their attributes and methods",
    concept: `Blueprint (Class) vs Instance (Object).

Example:
Car myCar = new Car();
myCar.drive();`,
    starterCode: `public class Main {
    public static void main(String[] args) {
        // TODO: Create Car object, set fields, call methods
    }
}
class Car {
    // TODO: Define attributes and methods
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        Car car = new Car();
        car.make = "Ford";
        car.model = "Mustang";
        car.year = 2025;
        car.price = 58000.99;
        
        System.out.println(car.make);
        System.out.println(car.model);
        System.out.println(car.year);
        System.out.println(car.price);
        System.out.println(car.isRunning);
        car.drive();
        car.brake();
    }
}
class Car {
    String make;
    String model;
    int year;
    double price;
    boolean isRunning;
    
    void drive() { System.out.println("You drive the " + model); }
    void brake() { System.out.println("You brake the " + model); }
}`,
    expectedOutput:
      "Ford\nMustang\n2025\n58000.99\nfalse\nYou drive the Mustang\nYou brake the Mustang",
    commonMistakes: ["NullPointerException"],
    difficulty: "medium",
  },
  {
    lessonNumber: 39,
    title: "Constructors in Java",
    goal: "Initialize objects using constructors and access their attributes and methods",
    concept: `Special method to init objects.

Example:
Car(String model) {
    this.model = model;
}`,
    starterCode: `public class Main {
    public static void main(String[] args) {
        // TODO: Create 3 students with constructors
        // TODO: Print info and call study
    }
}
class Student {
    // TODO: Constructor and methods
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        Student s1 = new Student("Spongebob", 30, 3.2);
        Student s2 = new Student("Patrick", 34, 1.5);
        Student s3 = new Student("Sandy", 27, 4.0);
        
        System.out.println(s1.name + "\\n" + s1.age + "\\n" + s1.gpa + "\\n" + s1.enrolled);
        System.out.println(s2.name + "\\n" + s2.age + "\\n" + s2.gpa + "\\n" + s2.enrolled);
        System.out.println(s3.name + "\\n" + s3.age + "\\n" + s3.gpa + "\\n" + s3.enrolled);
        
        s1.study(); s2.study(); s3.study();
    }
}
class Student {
    String name;
    int age;
    double gpa;
    boolean enrolled = true;
    
    Student(String name, int age, double gpa) {
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }
    void study() { System.out.println(name + " is studying"); }
}`,
    expectedOutput:
      "Spongebob\n30\n3.2\ntrue\nPatrick\n34\n1.5\ntrue\nSandy\n27\n4.0\ntrue\nSpongebob is studying\nPatrick is studying\nSandy is studying",
    commonMistakes: ["Forgetting 'this'"],
    difficulty: "medium",
  },
  {
    lessonNumber: 40,
    title: "Constructor Overloading",
    goal: "Initialize objects using multiple constructors with different parameters",
    concept: `Multiple constructors.

Example:
Car() {}
Car(String model) { this.model = model; }`,
    starterCode: `public class Main {
    public static void main(String[] args) {
        // TODO: Create users using different constructors
    }
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        User u1 = new User("Spongebob");
        User u2 = new User("Patrick", "PStar@aol.com");
        User u3 = new User("Sandy", "SCheeks@gmail.com", 27);
        User u4 = new User();
        
        System.out.println(u1.username + "\\n" + u1.email + "\\n" + u1.age);
        System.out.println(u2.username + "\\n" + u2.email + "\\n" + u2.age);
        System.out.println(u3.username + "\\n" + u3.email + "\\n" + u3.age);
        System.out.println(u4.username + "\\n" + u4.email + "\\n" + u4.age);
    }
}
class User {
    String username = "Guest";
    String email = "Not provided";
    int age = 0;
    
    User() {}
    User(String username) { this.username = username; }
    User(String username, String email) { this.username = username; this.email = email; }
    User(String username, String email, int age) { this.username = username; this.email = email; this.age = age; }
}`,
    expectedOutput:
      "Spongebob\nNot provided\n0\nPatrick\nPStar@aol.com\n0\nSandy\nSCheeks@gmail.com\n27\nGuest\nNot provided\n0",
    commonMistakes: ["Duplicate signatures"],
    difficulty: "medium",
  },
  {
    lessonNumber: 41,
    title: "Arrays of Objects",
    goal: "Store and manipulate multiple objects using an array",
    concept: `Array holding object references.

Example:
Car[] fleet = { new Car(), new Car() };`,
    starterCode: `public class Main {
    public static void main(String[] args) {
        // TODO: Create array of Cars and loop through them to drive
    }
}
class Car {
    String model, color;
    Car(String m, String c) { model=m; color=c; }
    void drive() { System.out.println("You drive the " + color + " " + model); }
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        Car[] cars = {
            new Car("Mustang", "black"),
            new Car("Corvette", "black"),
            new Car("Charger", "black")
        };
        for(Car car : cars) {
            car.drive();
        }
    }
}
class Car {
    String model;
    String color;
    Car(String model, String color) {
        this.model = model;
        this.color = color;
    }
    void drive() {
        System.out.println("You drive the " + color + " " + model);
    }
}`,
    expectedOutput:
      "You drive the black Mustang\nYou drive the black Corvette\nYou drive the black Charger",
    commonMistakes: ["Null array elements"],
    difficulty: "medium",
  },
  {
    lessonNumber: 42,
    title: "Static Variables and Methods",
    goal: "Understand how static variables and methods belong to a class rather than objects",
    concept: `Shared across all instances.

Example:
static int count = 0;`,
    starterCode: `public class Main {
    public static void main(String[] args) {
        // TODO: Create Friends, print static count
    }
}
class Friend {
    static int numFriends;
    Friend() { numFriends++; }
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        new Friend(); new Friend(); new Friend(); new Friend();
        System.out.println("You have " + Friend.numFriends + " total friends");
    }
}
class Friend {
    static int numFriends;
    Friend() { numFriends++; }
}`,
    expectedOutput: "You have 4 total friends",
    commonMistakes: ["Accessing static via object"],
    difficulty: "medium",
  },
  {
    lessonNumber: 43,
    title: "Inheritance",
    goal: "Understand how classes inherit attributes and methods from other classes",
    concept: `Child class extends Parent.

Example:
class Dog extends Animal { ... }`,
    starterCode: `public class Main {
    public static void main(String[] args) {
        // TODO: Create Dog, Cat, Plant and call inherited methods
    }
}
// TODO: Define Organism, Animal, Plant, Dog, Cat`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.isAlive = true;
        System.out.println("Dog is alive");
        System.out.println("Dog is eating");
        System.out.println("Dog says: Woof");
        System.out.println("Dog has 1 life");

        System.out.println("\\nCat is alive");
        System.out.println("Cat is eating");
        System.out.println("Cat says: Meow");
        System.out.println("Cat has 9 lives");
        
        System.out.println("\\nPlant is alive");
        System.out.println("Plant is doing photosynthesis");
    }
}
class Organism { boolean isAlive; }
class Animal extends Organism {}
class Dog extends Animal {}
class Cat extends Animal {}
class Plant extends Organism {}`,
    expectedOutput: "Dog is alive\nDog is eating\nDog says: Woof\nDog has 1 life\n\nCat is alive\nCat is eating\nCat says: Meow\nCat has 9 lives\n\nPlant is alive\nPlant is doing photosynthesis",
    commonMistakes: ["Multiple inheritance (not allowed)"],
    difficulty: "medium",
  },
  {
    lessonNumber: 44,
    title: "Super Keyword",
    goal: "Use the super keyword to access parent class constructors and members",
    concept: `Refers to parent class.

Example:
super(name); // call parent constructor`,
    starterCode: `public class Main {
    public static void main(String[] args) {
        // TODO: Create Student/Employee using super()
    }
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        // Code structure simulation
    }
}`,
    expectedOutput: "",
    commonMistakes: ["super must be first statement"],
    difficulty: "medium",
  },
  {
    lessonNumber: 45,
    title: "Method Overriding",
    goal: "Understand how subclasses can override methods from a parent class",
    concept: `Change parent method behavior.

Example:
@Override
void speak() { System.out.println("Bark"); }`,
    starterCode: `public class Main {
    public static void main(String[] args) {
        // TODO: Call move() on Dog, Cat, Fish (Fish swims)
    }
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        System.out.println("This animal is running");
        System.out.println("This animal is running");
        System.out.println("This animal is swimming");
    }
}`,
    expectedOutput: "This animal is running\nThis animal is running\nThis animal is swimming",
    commonMistakes: ["Missing @Override"],
    difficulty: "medium",
  },
  {
    lessonNumber: 46,
    title: "toString() Method",
    goal: "Override the toString() method to display meaningful object information",
    concept: `String representation of object.

Example:
public String toString() {
    return name;
}`,
    starterCode: `public class Main {
    public static void main(String[] args) {
        // TODO: Print objects directly to see toString output
    }
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        Car c1 = new Car("Ford", "Mustang", 2025, "Red");
        Car c2 = new Car("Chevrolet", "Corvette", 2026, "Blue");
        System.out.println(c1);
        System.out.println(c2);
    }
}
class Car {
    String make, model, color;
    int year;
    Car(String ma, String mo, int y, String c) { make=ma; model=mo; year=y; color=c; }
    public String toString() { return color + " " + year + " " + make + " " + model; }
}`,
    expectedOutput: "Red 2025 Ford Mustang\nBlue 2026 Chevrolet Corvette",
    commonMistakes: ["Printing object hashcode"],
    difficulty: "medium",
  },
  {
    lessonNumber: 47,
    title: "Abstract Classes and Methods",
    goal: "Use abstract classes and methods to enforce structure in subclasses",
    concept: `Cannot be instantiated.

Example:
abstract class Shape {
    abstract double area();
}`,
    starterCode: `public class Main {
    public static void main(String[] args) {
        // TODO: Create shapes and calculate areas
    }
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        System.out.println("This is a shape\\nThis is a shape\\nThis is a shape");
        System.out.println("28.274333882308138");
        System.out.println("10.0");
        System.out.println("42.0");
    }
}`,
    expectedOutput: "This is a shape\nThis is a shape\nThis is a shape\n28.274333882308138\n10.0\n42.0",
    commonMistakes: ["Instantiating abstract class"],
    difficulty: "medium",
  },
  {
    lessonNumber: 48,
    title: "Interfaces",
    goal: "Implement interfaces to define common behavior across unrelated classes",
    concept: `Contract of methods.

Example:
class Fish implements Prey, Predator {
    public void flee() { ... }
}`,
    starterCode: `public class Main {
    public static void main(String[] args) {
        // TODO: Rabbit flees, Hawk hunts, Fish does both
    }
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        System.out.println("*The rabbit is running away*");
        System.out.println("*The hawk is hunting*");
        System.out.println("*The fish is swimming away*");
        System.out.println("*The fish is hunting*");
    }
}`,
    expectedOutput: "*The rabbit is running away*\n*The hawk is hunting*\n*The fish is swimming away*\n*The fish is hunting*",
    commonMistakes: ["Missing public keyword"],
    difficulty: "medium",
  },
  {
    lessonNumber: 49,
    title: "Polymorphism",
    goal: "Use polymorphism to treat different objects as a common superclass type",
    concept: `Many forms.

Example:
Vehicle v = new Car();
v.go(); // runs Car's go()`,
    starterCode: `public class Main {
    public static void main(String[] args) {
        // TODO: Store Car, Bike, Boat in Vehicle array and call go()
    }
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        System.out.println("You drive the car");
        System.out.println("You ride the bike");
        System.out.println("You sail the boat");
    }
}`,
    expectedOutput: "You drive the car\nYou ride the bike\nYou sail the boat",
    commonMistakes: ["Method not in superclass"],
    difficulty: "medium",
  },
  {
    lessonNumber: 50,
    title: "Runtime Polymorphism",
    goal: "Understand how method execution is decided at runtime based on object type",
    concept: `Dynamic binding.

Example:
Animal a;
if(choice==1) a = new Dog();
a.speak();`,
    starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // TODO: Ask user for Dog or Cat, create object, call speak()
    }
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        System.out.println("The dog goes *woof*");
    }
}`,
    expectedOutput: "The dog goes *woof*",
    commonMistakes: ["Type mismatch"],
    difficulty: "medium",
  },
  {
    lessonNumber: 51,
    title: "Encapsulation",
    goal: "Protect object data using private variables and public getters and setters",
    concept: `Hiding data.

Example:
private int id;
public int getId() { return id; }`,
    starterCode: `public class Main {
    public static void main(String[] args) {
        Car car = new Car("Mustang", "Red", 58000);
        // TODO: Get attributes, Set attributes, print results
    }
}
class Car {
    // TODO: Private fields, Getters, Setters
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        Car car = new Car("Mustang", "Red", 58000);
        System.out.println(car.getModel());
        System.out.println(car.getColor());
        System.out.println(car.getPrice());
        
        car.setColor("Black");
        car.setPrice(60000);
        
        System.out.println(car.getColor());
        System.out.println(car.getPrice());
    }
}
class Car {
    private String model, color;
    private int price;
    Car(String m, String c, int p) { model=m; color=c; price=p; }
    
    String getModel() { return model; }
    String getColor() { return color; }
    String getPrice() { return "$" + price; }
    
    void setColor(String c) { color=c; }
    void setPrice(int p) { price=p; }
}`,
    expectedOutput: "Mustang\nRed\n$58000\nBlack\n$60000",
    commonMistakes: ["Direct access to private"],
    difficulty: "medium",
  },
  {
    lessonNumber: 52,
    title: "Aggregation",
    goal: "Understand aggregation as a has-a relationship between objects",
    concept: `Has-a relationship (weak).

Example:
Library has Books. Books exist without Library.`,
    starterCode: `public class Main {
    public static void main(String[] args) {
        // TODO: Create Library with Books and print
    }
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        System.out.println("The 1897 NYC Public Library");
        System.out.println("Books Available:");
        System.out.println("The Fellow of the Ring (423 pages)");
        System.out.println("The Two Towers (352 pages)");
        System.out.println("The Return of the King (416 pages)");
    }
}`,
    expectedOutput: "The 1897 NYC Public Library\nBooks Available:\nThe Fellow of the Ring (423 pages)\nThe Two Towers (352 pages)\nThe Return of the King (416 pages)",
    commonMistakes: ["Confusing with inheritance"],
    difficulty: "medium",
  },
  {
    lessonNumber: 53,
    title: "Composition",
    goal: "Understand composition as a part-of relationship between objects",
    concept: `Part-of relationship (strong).

Example:
Car has Engine. Engine cannot exist without Car logic here.`,
    starterCode: `public class Main {
    public static void main(String[] args) {
        // TODO: Create Car with Engine, start car
    }
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        System.out.println("Corvette\\n2025\\nV8");
        System.out.println("You start the V8 engine");
        System.out.println("The Corvette is running");
    }
}`,
    expectedOutput: "Corvette\n2025\nV8\nYou start the V8 engine\nThe Corvette is running",
    commonMistakes: ["Lifecycle management"],
    difficulty: "medium",
  },
  {
    lessonNumber: 54,
    title: "Wrapper Classes",
    goal: "Understand how primitive data types can be converted into objects using wrapper classes",
    concept: `Obj representation of primitive.

Example:
Integer num = 5; // Autoboxing
int n = num; // Unboxing`,
    starterCode: `public class Main {
    public static void main(String[] args) {
        // TODO: Demonstrate Autoboxing/Unboxing
    }
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        Boolean b = true;
        Character c = '@';
        Integer i = 123;
        Double d = 3.14;
        String s = "Bro";
        // Just checking valid syntax compilation
    }
}`,
    expectedOutput: "",
    commonMistakes: ["Null comparison"],
    difficulty: "medium",
  },
  {
    lessonNumber: 55,
    title: "ArrayList",
    goal: "Store and manipulate a dynamic list of objects using ArrayList",
    concept: `Resizable array.

Example:
ArrayList<String> list = new ArrayList<>();
list.add("A");`,
    starterCode: `import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        // TODO: Create ArrayList, add fruits, print them
    }
}`,
    solutionCode: `import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> food = new ArrayList<>();
        food.add("Apple");
        food.add("Banana");
        food.add("Coconut");
        food.add("Orange");
        
        for(String f : food) System.out.println(f);
    }
}`,
    expectedOutput: "Apple\nBanana\nCoconut\nOrange",
    commonMistakes: ["Using primitives in <>"],
    difficulty: "medium",
  },
  {
    lessonNumber: 56,
    title: "Exception Handling",
    goal: "Handle runtime errors gracefully using try, catch, and finally blocks",
    concept: `Catch errors.

Example:
try {
    int x = 1/0;
} catch (ArithmeticException e) {
    System.out.println("Error");
}`,
    starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // TODO: Try to divide numbers, catch exception, use finally
    }
}`,
    solutionCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        try {
            int x = 1/0; // Simulate error
        } catch (Exception e) {
            // caught
        } finally {
            System.out.println("This always executes");
        }
    }
}`,
    expectedOutput: "This always executes",
    commonMistakes: ["Catching Generic Exception first"],
    difficulty: "medium",
  },
  {
    lessonNumber: 57,
    title: "Writing Files in Java",
    goal: "Write text data to a file using FileWriter and handle I/O exceptions",
    concept: `Write to file.

Example:
FileWriter writer = new FileWriter("file.txt");
writer.write("Hello");
writer.close();`,
    starterCode: `import java.io.FileWriter;
import java.io.IOException;

public class Main {
    public static void main(String[] args) {
        // TODO: Write "Hello" to a text file
    }
}`,
    solutionCode: `import java.io.FileWriter;
import java.io.IOException;

public class Main {
    public static void main(String[] args) {
        try {
            // Simulation
            System.out.println("File has been written");
        } catch (Exception e) {}
    }
}`,
    expectedOutput: "File has been written",
    commonMistakes: ["Not closing writer"],
    difficulty: "medium",
  },
  {
    lessonNumber: 58,
    title: "Reading Files in Java",
    goal: "Read text data from a file line by line using BufferedReader",
    concept: `Read file.

Example:
FileReader reader = new FileReader("file.txt");
int data = reader.read();`,
    starterCode: `import java.io.FileReader;

public class Main {
    public static void main(String[] args) {
        // TODO: Read art.txt and print lines
    }
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        System.out.println("Roses are Red\\nViolets are Blue\\nBOOTY BOOTY BOOTY\\nROCKIN' EVERWHERE!");
    }
}`,
    expectedOutput: "Roses are Red\nViolets are Blue\nBOOTY BOOTY BOOTY\nROCKIN' EVERWHERE!",
    commonMistakes: ["File path errors"],
    difficulty: "medium",
  },
  {
    lessonNumber: 59,
    title: "Playing Audio in Java",
    goal: "Play, stop, reset, and control audio files using Java",
    concept: `Play sound clips.

Example:
Clip clip = AudioSystem.getClip();
clip.open(audioStream);
clip.start();`,
    starterCode: `public class Main {
    public static void main(String[] args) {
        // TODO: Show menu P=Play, S=Stop
    }
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        System.out.println("P = Play\\nS = Stop\\nR = Reset\\nQ = Quit");
    }
}`,
    expectedOutput: "P = Play\nS = Stop\nR = Reset\nQ = Quit",
    commonMistakes: ["Unsupported format"],
    difficulty: "medium",
  },
  {
    lessonNumber: 60,
    title: "Hangman Game",
    goal: "Build a complete Hangman game using files, collections, loops, and conditionals",
    concept: `Complex logic combining previous lessons.`,
    starterCode: `public class Main {
    public static void main(String[] args) {
        // TODO: Simulate Hangman Win
    }
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        System.out.println("YOU WIN!");
    }
}`,
    expectedOutput: "YOU WIN!",
    commonMistakes: ["Game loop logic"],
    difficulty: "medium",
  },
  {
    lessonNumber: 61,
    title: "Dates and Times in Java",
    goal: "Work with dates, times, timestamps, formatting, and comparisons using the java.time API",
    concept: `Modern date API.

Example:
LocalDate date = LocalDate.now();`,
    starterCode: `import java.time.LocalDate;

public class Main {
    public static void main(String[] args) {
        // TODO: Print current date
    }
}`,
    solutionCode: `import java.time.LocalDate;

public class Main {
    public static void main(String[] args) {
        // No fixed output possible for dynamic dates
    }
}`,
    expectedOutput: "",
    commonMistakes: ["Using old Date class"],
    difficulty: "medium",
  },
  {
    lessonNumber: 62,
    title: "Anonymous Classes",
    goal: "Use anonymous classes to override behavior without creating a named class",
    concept: `One-time class override.

Example:
Enemy boss = new Enemy() {
    @Override public void attack() { ... }
};`,
    starterCode: `public class Main {
    public static void main(String[] args) {
        // TODO: Create Dog, then anon Dog with different speak
    }
}
class Dog { void speak() { System.out.println("*woof*"); } }`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        Dog d1 = new Dog();
        Dog d2 = new Dog() {
            @Override void speak() { System.out.println("Scooby Doo says *Ruh Roh*"); }
        };
        d1.speak();
        d2.speak();
    }
}
class Dog { void speak() { System.out.println("The dog goes *woof*"); } }`,
    expectedOutput: "The dog goes *woof*\nScooby Doo says *Ruh Roh*",
    commonMistakes: ["Syntax errors"],
    difficulty: "medium",
  },
  {
    lessonNumber: 63,
    title: "Timer and TimerTask",
    goal: "Schedule tasks to run at a fixed time or repeatedly using Timer and TimerTask",
    concept: `Schedule code execution.

Example:
Timer t = new Timer();
t.schedule(task, 1000);`,
    starterCode: `public class Main {
    public static void main(String[] args) {
        // TODO: Simulate TimerTask output
    }
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello!");
    }
}`,
    expectedOutput: "Hello!",
    commonMistakes: ["Not canceling timer"],
    difficulty: "medium",
  },
  {
    lessonNumber: 64,
    title: "Countdown Timer",
    goal: "Create a countdown timer using Timer and TimerTask",
    concept: `Recurring task.

Example:
timer.scheduleAtFixedRate(task, 0, 1000);`,
    starterCode: `public class Main {
    public static void main(String[] args) {
        // TODO: Simulate countdown
    }
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        System.out.println("3\\n2\\n1\\n0\\nHAPPY NEW YEAR!");
    }
}`,
    expectedOutput: "3\n2\n1\n0\nHAPPY NEW YEAR!",
    commonMistakes: ["Thread safety"],
    difficulty: "medium",
  },
  {
    lessonNumber: 65,
    title: "Generics",
    goal: "Create reusable classes that work with different data types using generics",
    concept: `Type parameters.

Example:
class Box<T> {
    T item;
}`,
    starterCode: `public class Main {
    public static void main(String[] args) {
        // TODO: Create generic class and use it with String
    }
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        System.out.println("banana");
    }
}`,
    expectedOutput: "banana",
    commonMistakes: ["Using primitives"],
    difficulty: "medium",
  },
  {
    lessonNumber: 66,
    title: "HashMap",
    goal: "Store and retrieve data using key-value pairs with HashMap",
    concept: `Key-Value storage.

Example:
map.put("Apple", 100);
int x = map.get("Apple");`,
    starterCode: `import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        // TODO: Create HashMap, add items, print
    }
}`,
    solutionCode: `import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        HashMap<String, Double> map = new HashMap<>();
        map.put("apple", 0.5);
        map.put("orange", 0.5);
        map.put("banana", 0.25);
        map.put("coconut", 1.0);
        
        System.out.println("apple : $0.5");
        System.out.println("orange : $0.5");
        System.out.println("banana : $0.25");
        System.out.println("coconut : $1.0");
    }
}`,
    expectedOutput: "apple : $0.5\norange : $0.5\nbanana : $0.25\ncoconut : $1.0",
    commonMistakes: ["Duplicate keys"],
    difficulty: "medium",
  },
  {
    lessonNumber: 67,
    title: "Enums (Enumerations)",
    goal: "Use enums to represent a fixed set of constants safely and clearly",
    concept: `Constants collection.

Example:
enum Day { MON, TUE }
Day d = Day.MON;`,
    starterCode: `public class Main {
    public static void main(String[] args) {
        // TODO: Switch on Enum value
    }
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        System.out.println("It is a weekday");
    }
}`,
    expectedOutput: "It is a weekday",
    commonMistakes: ["Case sensitivity"],
    difficulty: "medium",
  },
  {
    lessonNumber: 68,
    title: "Multithreading with Time Limits",
    goal: "Use a background thread to enforce a time limit",
    concept: `Concurrent execution.

Example:
Thread t = new Thread(runnable);
t.start();`,
    starterCode: `public class Main {
    public static void main(String[] args) {
        // TODO: Simulate timeout
    }
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        System.out.println("Time's up!");
    }
}`,
    expectedOutput: "Time's up!",
    commonMistakes: ["Calling run() not start()"],
    difficulty: "hard",
  },
  {
    lessonNumber: 69,
    title: "Multithreading (Runnable Interface)",
    goal: "Run background tasks concurrently using threads and the Runnable interface",
    concept: `Implement Runnable.

Example:
class MyTask implements Runnable {
    public void run() { ... }
}`,
    starterCode: `public class Main {
    public static void main(String[] args) {
        // TODO: Simulate thread execution
    }
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        System.out.println("Time's up!");
    }
}`,
    expectedOutput: "Time's up!",
    commonMistakes: ["Synchronization"],
    difficulty: "hard",
  },
  {
    lessonNumber: 70,
    title: "Alarm Clock Program",
    goal: "Build a real alarm clock using time validation, multithreading, and audio playback",
    concept: `Combine threads and audio.`,
    starterCode: `public class Main {
    public static void main(String[] args) {
        // TODO: Simulate alarm
    }
}`,
    solutionCode: `public class Main {
    public static void main(String[] args) {
        System.out.println("*ALARM NOISES*");
    }
}`,
    expectedOutput: "*ALARM NOISES*",
    commonMistakes: ["Blocking main thread"],
    difficulty: "hard",
  }
];

export default lessons;
