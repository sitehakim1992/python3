const sp="                                                                     \n";
import React from 'react'
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'











const data = [



  {
    name: "What is Python?",
    posts:[{
      title:"Introduction",
      description:`
Python is a general-purpose coding language—which means that, unlike HTML, CSS, and JavaScript, it can be used for other types of programming and software development besides web development.\n
Python can be used for things like: \n
\u25BA Back end (or server-side) web and mobile app development \n
\u25BA Desktop app and software development. \n
\u25BA Processing big data and performing mathematical computations. \n
\u25BA Writing system scripts (creating instructions that tell a computer system to “do” something).      
      `,
      syntax:"",
      explaineSyntax:"",
      exemple:  "",
      explaineExemple:"",
      output:"",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:1
      },
      {
      title:"Why You Should Learn Python?",
      description:"",
      syntax:"",
      explaineSyntax:"",
      exemple: "",
      explaineExemple:"",
      output:"",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:2
      },
      {
      title:"1. Python’s popularity & high salary",
      description:"\u25BA The primary reason associated with the popularity of Python is, it is a great and easy way to learn to code. It has a feature of quickly writing complicated tasks. Many significant applications only support Python language.",
      syntax:"",
      explaineSyntax:"",
      exemple: "",
      explaineExemple:"",
      output:"",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:3
      },
      {
      title:"2. Python is simple & easy to learn",
      description:"\u25BA The aspirants looking to learn Python should never assume that this language is quite tough to learn and use. The fact, it is the simplest and easy to learn programming language as of having simple syntax and readability. Even this language is shorter as opposed to other programming languages like C, C++.",
      syntax:"",
      explaineSyntax:"",
      exemple: "",
      explaineExemple:"",
      output:"",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:4
      },
      {
      title:"3. Python is portable & extensible",
      description:"\u25BA This programming language is also the best portable language. For instance: In a case, the users have a python code for windows, and they want to execute it on a platform like Mac, Unix, or Linus. They can do it without any amendment. Even they can run this code on any platform flawlessly and uninterruptedly.",
      syntax:"",
      explaineSyntax:"",
      exemple: "",
      explaineExemple:"",
      output:"",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:5
      },
      {
      title:"4. Python is used in Data Science",
      description:"\u25BA Python is a high-level programming language that is fast, open, friendly, and simple to learn. It plays flawlessly with others and even runs anywhere seamlessly.",
      syntax:"",
      explaineSyntax:"",
      exemple: "",
      explaineExemple:"",
      output:"",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:6
      },
      {
      title:"5. Python’s scripting & automation",
      description:"\u25BA Being an open-source scripting language, we can easily automate anything on Python. A python learner as a beginner can quickly learn its basics and gradually able to write its scripts to automate data or stuff available around.",
      syntax:"",
      explaineSyntax:"",
      exemple: "",
      explaineExemple:"",
      output:"",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:7
      },
      {
      title:"6. Python used with Big Data",
      description:"\u25BA To complete the big data job accurately, Python is considered the best data science tool. When there is a need to integrate web application and data analysis with the production database, then big data and Python is the best solution.",
      syntax:"",
      explaineSyntax:"",
      exemple: "",
      explaineExemple:"",
      output:"",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:8
      },
      {
      title:"7. Python supports Testing",
      description:"\u25BA Python is a valuable programming language that supports testing flawlessly.",
      syntax:"",
      explaineSyntax:"",
      exemple: "",
      explaineExemple:"",
      output:"",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:9
      },
      {
      title:"8. Computer Graphics in Python",
      description:"\u25BA The Python Computer Graphics is used in any domain wherein the users have to deal with 3D data, be it of any sort or kind. Thus for visualization, Virtual Reality, photorealistic images, or even games, Python high language is highly used.",
      syntax:"",
      explaineSyntax:"",
      exemple: "",
      explaineExemple:"",
      output:"",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:10
      },
      {
      title:"9. Python used in Artificial Intelligence",
      description:"\u25BA This programming language offers the least code as compared to others. It is highly used in AI (Artificial Intelligence) as opposed to other programming languages",
      syntax:"",
      explaineSyntax:"",
      exemple: "",
      explaineExemple:"",
      output:"",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:11
      },
      {
      title:"10. Python in Web Development",
      description:"\u25BA There is no secret to say that Python becomes the most common language and has been hiking its demand tremendously for the last five years. To build up a website with Python means the users produce code that is responsive to execute the server instead of in the browser. The fact, establishing the server side of a website is imperative for storing user information.",
      syntax:"",
      explaineSyntax:"",
      exemple: "",
      explaineExemple:"",
      output:"",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:12
      },
    ],
    key:1
  },  // ############################################################################################




  {
    name: "Python 3 Installation",
    posts:[{
      title:"Installing Python 3 on Linux",
      description:"Most factory versions of Ubuntu 18.04 or Ubuntu 20.04 come with Python pre-installed. Check your version of Python by entering the following:",
      syntax:sp+"python --version\n",
      explaineSyntax:"If the revision level is lower than 3.7.x, or if Python is not installed, continue to the next step.",
      exemple:  "",
      explaineExemple:"",
      output:"",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:1
      },
      {
      title:"",
      description:"Open a terminal window, and enter the following:",
      syntax:sp+"sudo apt update\n"+
                "sudo apt install software-properties-common\n"+
                "sudo add-apt-repository ppa:deadsnakes/ppa\n",
      explaineSyntax:"The system will prompt you to press enter to continue. Do so, and allow it to finish. Refresh the package lists again:",
      exemple: "",
      explaineExemple:"",
      output:"",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:2
      },
      {
      title:"",
      description:"",
      syntax:sp+"sudo apt update\n",
      explaineSyntax:"Now you can start the installation of Python 3.8 with the command:",
      exemple: "",
      explaineExemple:"",
      output:"",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:3
      },
      {
      title:"",
      description:"",
      syntax:sp+"sudo apt install python3.8\n",
      explaineSyntax:"Allow the process to complete and verify the Python version was installed sucessfully:",
      exemple: "",
      explaineExemple:"",
      output:"",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:4
      },
      {
      title:"",
      description:"",
      syntax:sp+"python --version\n",
      explaineSyntax:"",
      exemple: "",
      explaineExemple:"",
      output:sp+"Python 3.x.y\n",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:5
      },
    ],
    key:2
  },  // ############################################################################################




  {
    name: "Your First Program",
    posts:[{
      title:"Program to Print Hello world!",
      description:"A simple program that displays “Hello, World!”. It's often used to illustrate the syntax of the language.",
      syntax:"",
      explaineSyntax:"",
      exemple:  sp+"# This program prints Hello, world!\n" +
                "\n" +
                "print('Hello, world!')",
      explaineExemple:"",
      output:sp+"Hello, world!\n",
      explaineOutput:`
In this program, we have used the built-in <code>print()</code> function to print the string <code>Hello, world!</code> on our screen.\n  `,
      componentID:0,
      isHaveComponent:false,
      key:1
      },
    ],
    key:3
  },  // ############################################################################################




  {
    name: "Execute Python scripts",
    posts:[{
      title:"1. Create a python file",
      description:`
Execute Python scripts in the terminal or an IDE. Python files have the .py extension. Whenever you make a Python script, save it as name.py \n
A simple program (hello.py) is shown below. The first line indicates that we want to use the Python interpreter. The 3rd line outputs a line of text “hello wlrd” to the screen. \n
The text below can be copied into a text editor and save as hello.py. Python works with files that end in .py.      
      `,
      syntax:"",
      explaineSyntax:"",
      exemple:  sp+"#!/usr/bin/env python3\n" +
                "\n" +
                "print('hello world')",
      explaineExemple:"You can use any text editor to create a Python program.",
      output:"",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:1
      },
      {
      title:"2. Run python file",
      description:`
You can start a Python program with the terminal or command line. This works on all platforms (Mac OS, Windows, Linux).\n

To open a terminal on Windows: press the windows key + r key (run program), type cmd or command and press enter.\n

On Mac OS use finder to start a terminal. You can hit command+space and type terminal, then hit enter. \n

To start the program, we have to open the command line and type:      
      `,
      syntax:"",
      explaineSyntax:"",
      exemple: sp+"python hello.py\n",
      explaineExemple:`
For this to work you need to be in the correct directory. That means, the directory where your python program is located.\n
You should see a line of text showing “hello world”.      
      `,
      output:sp+"hello world\n",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:2
      },
    ],
    key:4
  },  // ############################################################################################




  {
    name: "Variables",
    posts:[{
      title:"Variables",
      description:`
Python is completely object oriented, and not \"statically typed\". You do not need to declare variables before using them, or declare their type. Every variable in Python is an object.\n
Variables are used to store data, they take memory space based on the type of value we assigning to them. Creating variables in Python is simple, you just have write the variable name on the left side of = and the value on the right side, as shown below. You do not have to explicitly mention the type of the variable, python infer the type based on the value we are assigning.      
      `,
      syntax:sp+"Variable_Name = Variable_Value\n",
      explaineSyntax:"",
      exemple:  sp+"age = 30      #age is of type int\n" +
                "myName = \"Mark\"      #myName is of type string\n"+
                "miles   = 1000.0       # miles is of type float\n"+
                "test = True           #test is of type boolean",
      explaineExemple:"",
      output:"",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:1
      },
    ],
    key:5
  },  // ############################################################################################




  {
    name: "Simple Input & Output",
    posts:[{
      title:"1. Python Output Using print()",
      description:"We use the print() function to output data to the standard output device (screen). We can also output data to a file.",
      syntax:"",
      explaineSyntax:"",
      exemple:  sp+"print('output this to the screen')",
      explaineExemple:"",
      output:sp+"output this to the screen\n",
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
      exemple: sp+"age = 30\n" +
                "print(age)\n"+
                "name = \"Mark\" \n" +
                "print(name)",
      explaineExemple:"",
      output:sp+"30\n"+
                "Mark",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:2
      },
      {
      title:"Example 3",
      description:"",
      syntax:"",
      explaineSyntax:"",
      exemple: sp+"number_A = 45\\n\" +\n" +
                "                \"print('The value of number_A is: ', age)",
      explaineExemple:"",
      output:sp+"The value of number_A is: 45",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:3
      },
      {
      title:"2. Output formatting",
      description:"Sometimes we would like to format our output to make it look attractive. This can be done by using the str.format() method. This method is visible to any string object.",
      syntax:"",
      explaineSyntax:"",
      exemple: sp+"A = 5; B = 10\n" +
                "print('The value of A is {} and B is {}'.format(A,B))",
      explaineExemple:"",
      output:sp+"The value of A is 5 and B is 10\n",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:4
      },
      {
      title:"3. Python Input",
      description:"To give your code more flexibility, we might want to take the input from the user. In Python, we have the input() function to allow this.",
      syntax:sp+"input([prompt])\n",
      explaineSyntax:"where prompt is the string we wish to display on the screen. It is optional.",
      exemple: sp+"age = input('Enter your age: ')\n"+
                "print(age)",
      explaineExemple:"",
      output:"",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:5
      },
    ],
    key:6
  },  // ############################################################################################




  {
    name: "Comments",
    posts:[{
      title:"Comments",
      description:"When writing code in Python, it’s important to make sure that your code can be easily understood by others. Giving variables obvious names, defining explicit functions, and organizing your code are all great ways to do this. \n Another awesome and easy way to increase the readability of your code is by using comments.",
      syntax:"",
      explaineSyntax:"",
      exemple:  "",
      explaineExemple:"",
      output:"",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:1
      },
      {
      title:"1. How to Write Comments in Python",
      description:"Comments are for developers. They describe parts of the code where necessary to facilitate the understanding of programmers, including yourself. \n To write a comment in Python, simply put the hash mark # before your desired comment:",
      syntax:sp+"# This is a comment\n",
      explaineSyntax:"Python ignores everything after the hash mark and up to the end of the line. You can insert them anywhere in your code, even inline with other code:",
      exemple: sp+"print(\"This will run.\")  # This won't run\n",
      explaineExemple:"When you run the above code, you will only see the output This will run. Everything else is ignored.",
      output:"",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:2
      },
      {
      title:"2. Python Multiline Comments",
      description:"Unfortunately, Python doesn’t have a way to write multiline comments as you can in languages such as C, Java.",
      syntax:"",
      explaineSyntax:"",
      exemple: sp+"# So you can't\n" +
                "just do this\n" +
                "in python",
      explaineExemple:"In the above example, the first line will be ignored by the program, but the other lines will raise a Syntax Error.\n While Python doesn’t have native multiline commenting functionality, you can create multiline comments in Python. There are two simple ways to do so.\nThe first way is simply by pressing the return key after each line, adding a new hash mark and continuing your comment from there:",
      output:"",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:3
      },
      {
      title:"",
      description:"",
      syntax:"",
      explaineSyntax:"",
      exemple: sp+"# This is a pretty good example\n" +
                "# of how you can spread comments\n" +
                "# over multiple lines in Python",
      explaineExemple:"Each line that starts with a hash mark will be ignored by the program.\n ",
      output:"",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:4
      },
      {
      title:"",
      description:"Another thing you can do is use multiline strings by wrapping your comment inside a set of triple quotes:",
      syntax:"",
      explaineSyntax:"",
      exemple: sp+"\"\"\"\n" +
                "If I really hate pressing `enter` and\n" +
                "typing all those hash marks, I could\n" +
                "just do this instead\n" +
                "\"\"\"",
      explaineExemple:"",
      output:"",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:5
      },
    ],
    key:7
  },  // ############################################################################################




  {
    name: "Simple Operations",
    posts:[{
      title:"Operators in Python",
      description:`
An operator is a symbol that tells the compiler to perform specific mathematical or logical manipulations.\n Python divides the operators in the following groups:\n     
\u25BA Arithmetic operators.\n
\u25BA Assignment operators.\n
\u25BA Comparison operators.\n
\u25BA Logical operators.\n
\u25BA Identity operators.\n
\u25BA Membership operator.\n
\u25BA Bitwise operators. 
      `,
      syntax:"",
      explaineSyntax:"",
      exemple:  "",
      explaineExemple:"",
      output:"",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:1
      },
      {
      title:"1. Arithmetic Operators",
      description:"Arithmetic operators are used to perform common mathematical operations.",
      syntax:"",
      explaineSyntax:"",
      exemple: sp+"x = 2\n" +
                "y = 5\n" +
                "print(x + y)\n" +
                "print(x * y)\n" +
                "print(x - y)\n" +
                "\n" +
                "a = 12\n" +
                "b = 4\n" +
                "print(a / b)\n" +
                "\n" +
                "c = 20\n" +
                "d = 3\n" +
                "print(c % d)\n" +
                "\n" +
                "e=10\n" +
                "print(e ** 5)",
      explaineExemple:"",
      output:sp+"7\n" +
                "10\n" +
                "-3\n" +
                "3.0\n" +
                "2\n" +
                "100000",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:true,
      key:2
      },
      {
      title:"2. Comparison Operators",
      description:"These operators compare the values on either side of them and decide the relation among them. They are also called Relational operators.",
      syntax:"",
      explaineSyntax:"",
      exemple: sp+"x = 5\n" +
                "y = 3\n" +
                "\n" +
                "print(x == y)\n" +
                "\n" +
                "print(x != y)\n" +
                "\n" +
                "print(x > y)\n" +
                "\n" +
                "print(x < y)\n",
      explaineExemple:"",
      output:sp+"False\n" +
                "True\n" +
                "True\n" +
                "False",
      explaineOutput:"",
      componentID:1,
      isHaveComponent:true,
      key:3
      },
      {
      title:"3. Logical Operators",
      description:"Logical operators are used to combine conditional statements:",
      syntax:"",
      explaineSyntax:"",
      exemple: sp+"print(x > 3 and x < 10)\n" +
                "print(x > 3 or x < 4)\n" +
                "print(not(x > 3 and x < 10))",
      explaineExemple:"",
      output:sp+"True\n" +
                "True\n" +
                "False",
      explaineOutput:"",
      componentID:2,
      isHaveComponent:true,
      key:4
      },
      {
      title:"4. Assignment Operators",
      description:"There are following assignment operators supported by Python language.",
      syntax:"",
      explaineSyntax:"",
      exemple: sp+"x = 5\n" +
                "print(x)\n" +
                "\n" +
                "a = 2\n" +
                "a += 3\n" +
                "print(a)\n" +
                "\n" +
                "b = 5\n" +
                "b -= 3\n" +
                "print(b)\n" +
                "\n" +
                "c = 5\n" +
                "c *= 3\n" +
                "print(c)\n" +
                "\n" +
                "d = 5\n" +
                "d /= 3\n" +
                "print(d)\n" +
                "\n" +
                "i = 5\n" +
                "i%=3\n" +
                "print(i)\n",
      explaineExemple:"",
      output:sp+"5\n" +
                "5\n" +
                "2\n" +
                "15\n" +
                "1.6666666666666667\n" +
                "2",
      explaineOutput:"",
      componentID:3,
      isHaveComponent:true,
      key:5
      },
      {
      title:"5. Membership Operators",
      description:"Membership operators are used to test if a sequence is presented in an object:",
      syntax:"",
      explaineSyntax:"",
      exemple: sp+"Car = [\"Tesla\", \"Ferrari\"]\n" +
                "\n" +
                "print(\"Ferrari\" in Car)\n" +
                "print(\"Mercedes\" in Car)\n" +
                "\n" +
                "\n" +
                "Car2 = [\"Tesla\", \"Ferrari\"]\n" +
                "\n" +
                "print(\"Ferrari\" not in Car2)\n" +
                "print(\"Mercedes\" not in Car2)",
      explaineExemple:"",
      output:sp+"True\n" +
                "False\n" +
                "False\n" +
                "True",
      explaineOutput:"",
      componentID:4,
      isHaveComponent:true,
      key:6
      },
      {
      title:"6. Identity Operators",
      description:"Identity operators compare the memory locations of two objects.",
      syntax:"",
      explaineSyntax:"",
      exemple: sp+"x = [\"Ferrari\", \"Tesla\"]\n" +
                "y = [\"Ferrari\", \"Tesla\"]\n" +
                "z = x\n" +
                "\n" +
                "print(x is z)\n" +
                "print(x is y)\n" +
                "print(x == y)\n" +
                "print(x is not z)\n" +
                "print(x is not y)\n" +
                "print(x != y)\n",
      explaineExemple:"",
      output:sp+"True\n" +
                "False\n" +
                "True\n" +
                "False\n" +
                "True\n" +
                "False",
      explaineOutput:"",
      componentID:5,
      isHaveComponent:true,
      key:7
      },
    ],
    key:8
  },  // ############################################################################################




  {
    name: "Data Types",
    posts:[{
      title:"Data Types",
      description:"Every value in Python has a datatype. Since everything is an object in Python programming, data types are actually classes and variables are instance (object) of these classes.\n \n There are various data types in Python. Some of the important types are listed below.",
      syntax:"",
      explaineSyntax:"",
      exemple:  "",
      explaineExemple:"",
      output:"",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:1
      },
      {
      title:"1. Numeric Types",
      description:"Number data types store numeric values. They are immutable data types. This means, changing the value of a number data type results in a newly allocated object.",
      syntax:"",
      explaineSyntax:"",
      exemple: sp+"var1 = 1\n" +
                "var2 = 10",
      explaineExemple:"",
      output:"",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:2
      },
      {
      title:"2. String Types:",
      description:"Strings are amongst the most popular types in Python. We can create them simply by enclosing characters in quotes. Python treats single quotes the same as double quotes. Creating strings is as simple as assigning a value to a variable.",
      syntax:"",
      explaineSyntax:"",
      exemple: sp+"First_name = 'Marks'\n" +
                "Email = \"blablablabla@python.com\"",
      explaineExemple:"",
      output:"",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:3
      },
      {
      title:"3. Python List",
      description:"List is an ordered sequence of items. It is one of the most used datatype in Python and is very flexible. All the items in a list do not need to be of the same type.\n Declaring a list is pretty straight forward. Items separated by commas are enclosed within brackets [ ].",
      syntax:"",
      explaineSyntax:"",
      exemple: sp+"list1 = [1, 2, 3, 4, 5, 6, 7, 8, 9 ]\n"+
                "list2 = [\"a\", \"b\", \"c\", \"d\"]",
      explaineExemple:"",
      output:"",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:4
      },
      {
      title:"",
      description:"To access values in lists, use the square brackets for slicing along with the index or indices to obtain value available at that index.",
      syntax:"",
      explaineSyntax:"",
      exemple: sp+"list1 = [1, 2, 3, 4, 5, 6, 7, 8, 9 ]\n"+
                "list2 = [\"a\", \"b\", \"c\", \"d\"]\n"+
                "print (\"list1[0]: \", list1[0])\n" +
                "print (\"list2[2]: \", list2[2])",
      explaineExemple:"",
      output:sp+"list1[0]:  1\n" +
                "list2[1:5]:  c",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:5
      },
      {
      title:"4. Python Tuples",
      description:"A tuple is a collection of objects which ordered and immutable. Tuples are sequences, just like lists. The main difference between the tuples and the lists is that the tuples cannot be changed unlike lists. Tuples use parentheses, whereas lists use square brackets.",
      syntax:"",
      explaineSyntax:"",
      exemple: sp+"tup1 = (129, 20, 309, 439, 500 )\n" +
                "print (\"tup1[0]: \", tup1[0])\n" +
                "print (\"tup1[2]: \", tup1[2])",
      explaineExemple:"",
      output:sp+"tup1[0]: 129\n"+
                "tup1[2]: 309",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:6
      },
      {
      title:"5. Python Dictionary",
      description:"Dictionary is an unordered collection of key-value pairs. \n It is generally used when we have a huge amount of data. Dictionaries are optimized for retrieving data. We must know the key to retrieve the value. \n In Python, dictionaries are defined within braces {} with each item being a pair in the form key:value. Key and value can be of any type.",
      syntax:"",
      explaineSyntax:"",
      exemple: sp+"dict = {'Name': 'Mark', 'Age': 30}\n" +
                "print (\"dict['Name']: \", dict['Name'])\n" +
                "print (\"dict['Age']: \", dict['Age'])\n",
      explaineExemple:"",
      output:sp+"dict['Name']:  Mark\n" +
                "dict['Age']:  30",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:7
      },
    ],
    key:9
  },  // ############################################################################################





]


export default data

/*



    {
      title:"",
      description:"",
      syntax:"",
      explaineSyntax:"",
      exemple: "",
      explaineExemple:"",
      output:"",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:1
      } 



| Operator | Name           | Example |
|----------|----------------|---------|
| +        | Addition       | a+b     |
| -        | Substraction   | a-b     |
| *        | Multiplication | a*b     |
| /        | Division       | a/b     |
| %        | Modulus        | a%b     |
| ++       | Increment      | a++     |
| --       | Decrement      | a--     |

<TableComponent HeadTable={HeadTable2} DataTable={DataTable2} widthArr={widthArr2} />
*/

