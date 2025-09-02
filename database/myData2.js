const sp="                                                                     \n";

const db2 = [



  {
    name: "if, if...else-if statement",
    posts:[{
      title:"1. if statement",
      description:"if statement is the most simple decision making statement. It is used to decide whether a certain statement or block of statements will be executed or not i.e if a certain condition is true then a block of statement is executed otherwise not.",
      syntax:sp+"if condition:           \n" +
                "   # Statements to execute if\n" +
                "   # condition is true",
      explaineSyntax:"",
      exemple:  sp+"i = 10\n" +
                "if (i > 15): \n" +
                "   print (\"10 is less than 15\") \n" +
                "print (\"I am Not in if\") ",
      explaineExemple:"",
      output:sp+"I am Not in if\n",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:1
      },
      {
      title:"2. if..else statements",
      description:"The if statement alone tells us that if a condition is true it will execute a block of statements and if the condition is false it won’t. But what if we want to do something else if the condition is false. Here comes the else statement. We can use the else statement with if statement to execute a block of code when the condition is false.",
      syntax:sp+"if (condition):\n" +
                "    # Executes this block if\n" +
                "    # condition is true\n" +
                "else:\n" +
                "    # Executes this block if\n" +
                "    # condition is false",
      explaineSyntax:"",
      exemple: sp+"i = 20; \n" +
                "if (i < 15): \n" +
                "    print (\"i is smaller than 15\") \n" +
                "    print (\"i'm in if Block\") \n" +
                "else: \n" +
                "    print (\"i is greater than 15\") \n" +
                "    print (\"i'm in else Block\") \n" +
                "print (\"i'm not in if and not in else Block\")",
      explaineExemple:"",
      output:sp+"i is greater than 15\n" +
                "i'm in else Block\n" +
                "i'm not in if and not in else Block",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:2
      },
      {
      title:"3. nested if statements",
      description:"A nested if is an if statement that is the target of another if statement. Nested if statements means an if statement inside another if statement. Yes, Python allows us to nest if statements within if statements. i.e, we can place an if statement inside another if statement.",
      syntax:sp+"if (condition1):\n" +
                "   # Executes when condition1 is true\n" +
                "   if (condition2): \n" +
                "      # Executes when condition2 is true\n" +
                "   # if Block is end here\n" +
                "# if Block is end here",
      explaineSyntax:"",
      exemple: sp+"i = 10\n" +
                "if (i == 10): \n" +
                "    #  First if statement \n" +
                "    if (i < 15): \n" +
                "        print (\"i is smaller than 15\") \n" +
                "    # Nested - if statement \n" +
                "    # Will only be executed if statement above \n" +
                "    # it is true \n" +
                "    if (i < 12): \n" +
                "        print (\"i is smaller than 12 too\") \n" +
                "    else: \n" +
                "        print (\"i is greater than 15\")",
      explaineExemple:"",
      output:sp+"i is smaller than 15\n" +
                "i is smaller than 12 too",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:3
      },
      {
      title:"4. if-elif statements",
      description:"Here, a user can decide among multiple options. The if statements are executed from the top down. As soon as one of the conditions controlling the if is true, the statement associated with that if is executed, and the rest of the ladder is bypassed. If none of the conditions is true, then the final else statement will be executed.",
      syntax:sp+"if (condition):\n" +
                "    statement\n" +
                "elif (condition):\n" +
                "    statement\n" +
                ".\n" +
                ".\n" +
                "else:\n" +
                "    statement",
      explaineSyntax:"",
      exemple: sp+"i = 20\n" +
                "if (i == 10): \n" +
                "    print (\"i is 10\") \n" +
                "elif (i == 15): \n" +
                "    print (\"i is 15\") \n" +
                "elif (i == 20): \n" +
                "    print (\"i is 20\") \n" +
                "else: \n" +
                "    print (\"i is not present\") ",
      explaineExemple:"",
      output:sp+"i is 20\n",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:4
      },
    ],
    key:21
  },  // ############################################################################################




  {
    name: "Python for Loop",
    posts:[{
      title:"for loop",
      description:"The for loop in Python is used to iterate over a sequence (list, tuple, string) or other iterable objects. Iterating over a sequence is called traversal.",
      syntax:sp+"for val in sequence:\n" +
                "\t# Body of for",
      explaineSyntax:"",
      exemple:  sp+"cars = [\"Tesla\", \"Ferrari\", \"mercedes\"]\n" +
                "for x in cars:\n" +
                "  print(x) ",
      explaineExemple:"",
      output:sp+"Tesla\n" +
                "Ferrari\n" +
                "mercedes",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:1
      },
      {
      title:"Example 2",
      description:"",
      syntax:"",
      explaineSyntax:"",
      exemple: sp+"numbers = [6, 5, 3, 8, 4, 2, 5, 4, 10]\n" +
                "sum = 0\n" +
                "\n" +
                "for val in numbers:\n" +
                "\tsum = sum+val\n" +
                "\n" +
                "print(\"The sum is\", sum)\n",
      explaineExemple:"",
      output:sp+"The sum is 47\n",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:2
      },
      {
      title:"range() function",
      description:"To loop through a set of code a specified number of times, we can use the range() function.\n The range() function returns a sequence of numbers, starting from 0 by default, and increments by 1 (by default), and ends at a specified number.",
      syntax:"",
      explaineSyntax:"",
      exemple: sp+"for x in range(10):\n" +
                "  print(x) ",
      explaineExemple:"",
      output:sp+"0\n" +
                "1\n" +
                "2\n" +
                "3\n" +
                "4\n" +
                "5\n" +
                "6\n" +
                "7\n" +
                "8\n" +
                "9",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:3
      },
      {
      title:"",
      description:"The range() function defaults to 0 as a starting value, however it is possible to specify the starting value by adding a parameter: range(3, 10), which means values from 3 to 10 (but not including 10):",
      syntax:"",
      explaineSyntax:"",
      exemple: sp+"for x in range(3, 10):\n" +
                "  print(x) \n",
      explaineExemple:"",
      output:sp+"3\n" +
                "4\n" +
                "5\n" +
                "6\n" +
                "7\n" +
                "8\n" +
                "9",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:4
      },
      {
      title:"Example 3",
      description:"The range() function defaults to increment the sequence by 1, however it is possible to specify the increment value by adding a third parameter: range(2, 50, 4):",
      syntax:"",
      explaineSyntax:"",
      exemple: sp+"for x in range(2, 50, 4):\n" +
                "  print(x) \n",
      explaineExemple:"",
      output:sp+"2\n" +
                "6\n" +
                "10\n" +
                "14\n" +
                "18\n" +
                "22\n" +
                "26\n" +
                "30\n" +
                "34\n" +
                "38\n" +
                "42\n" +
                "46",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:5
      },
    ],
    key:22
  },  // ############################################################################################




  {
    name: "While Loop",
    posts:[{
      title:"While loop",
      description:"In Python, While Loops is used to execute a block of statements repeatedly until a given condition is satisfied. And when the condition becomes false, the line immediately after the loop in the program is executed. While loop falls under the category of indefinite iteration. Indefinite iteration means that the number of times the loop is executed isn’t specified explicitly in advance.",
      syntax:sp+"while test_expression:\n" +
                "    #Body of while",
      explaineSyntax:"",
      exemple:  sp+"a = 1\n" +
                "while a < 10:\n" +
                "  print(a)\n" +
                "  a = a + 1",
      explaineExemple:"",
      output:sp+"1\n" +
                "2\n" +
                "3\n" +
                "4\n" +
                "5\n" +
                "6\n" +
                "7\n" +
                "8\n" +
                "9",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:1
      },
      {
      title:"while Loop with else",
      description:"Same as with for loops, while loops can also have an optional else block. \n The else part is executed if the condition in the while loop evaluates to False.",
      syntax:"",
      explaineSyntax:"",
      exemple: sp+"counter = 0\n" +
                "while counter < 10:\n" +
                "    print(\"Inside loop\")\n" +
                "    counter = counter + 1\n" +
                "else:\n" +
                "    print(\"Inside else\")",
      explaineExemple:"",
      output:sp+"Inside loop\n" +
                "Inside loop\n" +
                "Inside loop\n" +
                "Inside loop\n" +
                "Inside loop\n" +
                "Inside loop\n" +
                "Inside loop\n" +
                "Inside loop\n" +
                "Inside loop\n" +
                "Inside loop\n" +
                "Inside else",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:2
      },
    ],
    key:23
  },  // ############################################################################################




  {
    name: "Break & Continue Statement",
    posts:[{
      title:"Break statement",
      description:"In Python, the break statement provides you with the opportunity to exit out of a loop when an external condition is triggered. You’ll put the break statement within the block of code under your loop statement, usually after a conditional if statement.",
      syntax:"",
      explaineSyntax:"",
      exemple:  sp+"for val in [1,2,4,5,7,81,23,45,56,13]:\n" +
                "    if val == 45:\n" +
                "        break\n" +
                "    print(val)\n" +
                "\n" +
                "print(\"The end\")",
      explaineExemple:"",
      output:sp+"1\n" +
                "2\n" +
                "4\n" +
                "5\n" +
                "7\n" +
                "81\n" +
                "23\n" +
                "The end",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:1
      },
      {
      title:"Continue statement",
      description:"The continue statement gives you the option to skip over the part of a loop where an external condition is triggered, but to go on to complete the rest of the loop. That is, the current iteration of the loop will be disrupted, but the program will return to the top of the loop.\n \n The continue statement will be within the block of code under the loop statement, usually after a conditional if statement.",
      syntax:"",
      explaineSyntax:"",
      exemple: sp+"for val in [1,2,4,5,7,81,23,45,56,13]:\n" +
                "    if val == 45:\n" +
                "        continue\n" +
                "    print(val)\n" +
                "\n" +
                "print(\"The end\")",
      explaineExemple:"",
      output:sp+"1\n" +
                "2\n" +
                "4\n" +
                "5\n" +
                "7\n" +
                "81\n" +
                "23\n" +
                "56\n" +
                "13\n" +
                "The end",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:2
      },
    ],
    key:24
  },  // ############################################################################################




  ]



export default db2
