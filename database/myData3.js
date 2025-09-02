const sp="                                                                     \n";

const db3 = [




  {
    name: "Python Function",
    posts:[{
      title:"1. Create python Function",
      description:"A function is a block of code which only runs when it is called.\n Functions help break our program into smaller and modular chunks. As our program grows larger and larger, functions make it more organized and manageable.",
      syntax:sp+"def function_name():\n" +
                "  # code inside function\")",
      explaineSyntax:"",
      exemple:  sp+"#create a function called sayHello()\n" +
                "def sayHello():\n" +
                "    print(\"Hello everyone\")",
      explaineExemple:"",
      output:"",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:1
      },
      {
      title:"2. Call a function in python",
      description:"To call a function, use the function name followed by parenthesis:",
      syntax:"",
      explaineSyntax:"",
      exemple: sp+"#create a function called sayHello()\n" +
                "def sayHello():\n" +
                "    print(\"Hello everyone\")\n" +
                "\n" +
                "#call the function sayHello()\n" +
                "sayHello()",
      explaineExemple:"",
      output:sp+"Hello everyone\n",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:2
      },
      {
      title:"3. Return statement in a function",
      description:"A return statement is used to end the execution of the function call and “returns” the result (value of the expression following the return keyword) to the caller. The statements after the return statements are not executed. If the return statement is without any expression, then the special value None is returned.",
      syntax:sp+"def function_name():\n" +
                "    #code inside function\n" +
                "\n" +
                "    return [expression]",
      explaineSyntax:"",
      exemple: sp+"def my_Fun(x):\n" +
                "  return 6 * x\n" +
                "\n" +
                "print(my_Fun(3))\n" +
                "print(my_Fun(4))\n" +
                "print(my_Fun(10))",
      explaineExemple:"",
      output:sp+"18\n" +
                "24\n" +
                "60",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:3
      },
    ],
    key:41
  },  // ############################################################################################




  {
    name: "Function With Arguments",
    posts:[{
      title:"Function With Arguments",
      description:"The arguments of a function are defined within the def statement. Like all other variables in Python, there is no explicit type associated with the function arguments. This fact is important to consider when making assumptions about the types of data that your function will receive.",
      syntax:sp+"def function_name(parameters):\n" +
                "\t\n" +
                "\t#code inside function",
      explaineSyntax:"",
      exemple: sp+"def SayHello(name):\n" +
                "  print(\"How are you \" + name)\n" +
                "\n" +
                "SayHello(\"Mark\")\n" +
                "SayHello(\"Mohammed\")\n" +
                "SayHello(\"Admin\")",
      explaineExemple:"",
      output:sp+"How are you Mark\n" +
                "How are you Mohammed\n" +
                "How are you Admin",
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
      exemple: sp+"def change_list(x): \n" +
                "   x[0] = 20\n" +
                "  \n" +
                " \n" +
                "lst = [100, 11, 123, 13, 145, 15]  \n" +
                "print(lst)\n" +
                "change_list(lst); \n" +
                "print(lst)",
      explaineExemple:"",
      output:sp+"[100, 11, 123, 13, 145, 15]\n" +
                "[20, 11, 123, 13, 145, 15]",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:2
      },
    ],
    key:42
  },  // ############################################################################################




  {
    name: "Recursive Function",
    posts:[{
      title:"Recursive Function",
      description:"Recursion is a way of programming or coding a problem, in which a function calls itself one or more times in its body. Usually, it is returning the return value of this function call. If a function definition fulfils the condition of recursion, we call this function a recursive function.",
      syntax:"",
      explaineSyntax:"",
      exemple: sp+"def factorial(n):\n" +
                "    print(\"factorial has been called with n = \" + str(n))\n" +
                "    if n == 1:\n" +
                "        return 1\n" +
                "    else:\n" +
                "        res = n * factorial(n-1)\n" +
                "        print(\"intermediate result for \", n, \" * factorial(\" ,n-1, \"): \",res)\n" +
                "        return res\t\n" +
                "\n" +
                "print(factorial(5))",
      explaineExemple:"",
      output:sp+"factorial has been called with n = 5\n" +
                "factorial has been called with n = 4\n" +
                "factorial has been called with n = 3\n" +
                "factorial has been called with n = 2\n" +
                "factorial has been called with n = 1\n" +
                "intermediate result for  2  * factorial( 1 ):  2\n" +
                "intermediate result for  3  * factorial( 2 ):  6\n" +
                "intermediate result for  4  * factorial( 3 ):  24\n" +
                "intermediate result for  5  * factorial( 4 ):  120\n" +
                "120",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:1
      },
    ],
    key:43
  },  // ############################################################################################




  {
    name: "Anonymous Function",
    posts:[{
      title:"Anonymous Function",
      description:"An anonymous function is a function that is defined without a name.\n While normal functions are defined using the def keyword in Python, anonymous functions are defined using the lambda keyword.",
      syntax:sp+"lambda arguments: expression\n",
      explaineSyntax:"",
      exemple:  sp+"double = lambda x: x * 5\n" +
                "\n" +
                "print(double(7))",
      explaineExemple:"",
      output:sp+"35\n",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:1
      },
    ],
    key:44
  },  // ############################################################################################




  {
    name: "Python Global Keyword",
    posts:[{
      title:"Global Keyword",
      description:"Different variables in a python program have different scope. Depending on where it is declared, the variable may or may not be accessible inside a function. Sometimes we will need to modify a variable that is present inside a function from outside its current scope. In such a scenario we use the global keyword with the variable name.",
      syntax:"",
      explaineSyntax:"",
      exemple: sp+"x = 30\n" +
                "# function to modify the variable\n" +
                "def show_variable():\n" +
                "   x = x * 2\n" +
                "   print(x)\n" +
                "# calling the function\n" +
                "show_variable()",
      explaineExemple:"",
      output:sp+"UnboundLocalError: local variable 'x' referenced before assignment",
      explaineOutput:"The output shows an error because Python treats x as a local variable and x is also not defined inside show_variable().",
      componentID:0,
      isHaveComponent:false,
      key:1
      },
      {
      title:"To make this work, we use the global keyword.",
      description:"Introduction",
      syntax:"",
      explaineSyntax:"",
      exemple: sp+"x = 100\n" +
                "# function to modify the variable\n" +
                "def show_variable():\n" +
                "   global x\n" +
                "   x = x * 2\n" +
                "   print(x)\n" +
                "# calling the function\n" +
                "show_variable()",
      explaineExemple:"",
      output:sp+"200\n",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:2
      },
    ],
    key:45
  },  // ############################################################################################




  {
    name: "Global, Local and Nonlocal variables",
    posts:[{
      title:"1. Global variables",
      description:"Variables that are declared outside a function are known as global variables in Python. These variables have a greater scope and are available to all the functions that are defined after the declaration of global variable.",
      syntax:"",
      explaineSyntax:"",
      exemple:  sp+"#global variable\n" +
                "x = 100\n" +
                "def fun_test_1():\n" +
                "    y = 700\n" +
                "    print(\"x in fun_test_1=\", x)\n" +
                "    print(\"y in fun_test_1=\", y)\n" +
                "\n" +
                "def fun_test_2():\n" +
                "    print(\"x in fun_test_2=\", x)\n" +
                "\n" +
                "fun_test_1()\n" +
                "fun_test_2()\n" +
                "#scope here too\n" +
                "print('x=', x)",
      explaineExemple:"",
      output:sp+"x in fun_test_1= 100\n" +
                "y in fun_test_1= 700\n" +
                "x in fun_test_2= 100\n" +
                "x= 100",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:1
      },
      {
      title:"2. Local variables",
      description:"When a variable is declared inside a function then it is a local variable. A local variable’s scope is limited with in the function where it is created which means it is available with in the function where it is declared not outside that function.",
      syntax:"",
      explaineSyntax:"",
      exemple: sp+"def func_test_1():\n" +
                "    x = 100\n" +
                "    y = 700\n" +
                "    print(\"x in func_test_1=\", x)\n" +
                "    print(\"y in func_test_1=\", y)\n" +
                "\n" +
                "def func_test_2():\n" +
                "    print(\"x in func_test_2=\", x)\n" +
                "\n" +
                "func_test_1()\n" +
                "func_test_2()\n" +
                "# no scope here\n" +
                "print('x=', x)",
      explaineExemple:"",
      output:sp+"x in func_test_1= 100\n" +
                "y in func_test_1= 700\n" +
                "Traceback (most recent call last):\n" +
                "  File \"test.py\", line 11, in <module>\n" +
                "    func_test_2()\n" +
                "  File \"test.py\", line 8, in func_test_2\n" +
                "    print(\"x in func_test_2=\", x)\n" +
                "NameError: name 'x' is not defined\n",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:2
      },
      {
      title:"3. Non-local variables",
      description:"Non-local variables are created using nonlocal keyword in Python. The nonlocal keyword causes the variable to refer to previously bound variables in the nearest enclosing scope excluding globals.\n nonlocal keyword is used with variables in nested functions where the variable is in outer scope, by making variable nonlocal it can be accessed in nested function.",
      syntax:"",
      explaineSyntax:"",
      exemple: sp+"def my_function():\n" +
                "    count = 0\n" +
                "    #nested function\n" +
                "    def increment():\n" +
                "        count += 1\n" +
                "        return count\n" +
                "    # calling nested function\n" +
                "    print('count is-', increment())\n" +
                "    print('count is-', increment())\n" +
                "    print('count is-', increment())\n" +
                "\n" +
                "my_function()",
      explaineExemple:"",
      output:sp+"Traceback (most recent call last):\n" +
                "  File \"test.py\", line 12, in <module>\n" +
                "    my_function()\n" +
                "  File \"test.py\", line 8, in my_function\n" +
                "    print('count is-', increment())\n" +
                "  File \"test.py\", line 5, in increment\n" +
                "    count += 1\n" +
                "UnboundLocalError: local variable 'count' referenced before assignment\n",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:3
      },
      {
      title:"",
      description:"To ensure that nested function has access to the variable in the enclosing scope, you can use nonlocal keyword with variable in the body of nested function.",
      syntax:"",
      explaineSyntax:"",
      exemple: sp+"def my_function():\n" +
                "    count = 0\n" +
                "    #nested function\n" +
                "    def increment():\n" +
                "        nonlocal count\n" +
                "        count += 1\n" +
                "        return count\n" +
                "    # calling nested function\n" +
                "    print('count is-', increment())\n" +
                "    print('count is-', increment())\n" +
                "    print('count is-', increment())\n" +
                "\n" +
                "my_function()",
      explaineExemple:"",
      output:sp+"count is- 1\n" +
                "count is- 2\n" +
                "count is- 3",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:4
      },
    ],
    key:46
  },  // ############################################################################################




  {
    name: "File Handling",
    posts:[{
      title:"File Handling",
      description:"Files are named locations on disk to store related information. They are used to permanently store data in a non-volatile memory.\n The key function for working with files in Python is the open() function.\n The open() function takes two parameters; filename, and mode.",
      syntax:sp+"f = open(\"testfile.txt\")\n",
      explaineSyntax:"Here is a list of the different modes of opening a file:",
      exemple:  sp+"f = open(\"testfile.txt\", \"rt\")\n",
      explaineExemple:"Because \"r\" for read, and \"t\" for text are the default values, you do not need to specify them.",
      output:"",
      explaineOutput:"",
      componentID:6,
      isHaveComponent:true,
      key:1
      },
    ],
    key:47
  },  // ############################################################################################




  {
    name: "Read Files",
    posts:[{
      title:"1. Read all content of a File",
      description:"There are actually a number of ways to read a text file in Python, not just one.\n Assume we have the following file, located in the same folder as Python and named testfile.txt:",
      syntax:"",
      explaineSyntax:"",
      exemple:  sp+"Hello! this line 1\n" +
                "this line 2\n" +
                "this line 3\n" +
                "this line 4\n" +
                "this line 5\n" +
                "this line 6\n" +
                "this line 7\n" +
                "this line 8\n" +
                "this is the end of file",
      explaineExemple:"",
      output:"",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:1
      },
      {
      title:"",
      description:"If you need to extract a string that contains all characters in the file, you can use the following code:",
      syntax:"",
      explaineSyntax:"",
      exemple: sp+"myfile = open(“testfile.text”, “r”) \n" +
                "print myfile.read() ",
      explaineExemple:"",
      output:sp+"Hello! this line 1\n" +
                "this line 2\n" +
                "this line 3\n" +
                "this line 4\n" +
                "this line 5\n" +
                "this line 6\n" +
                "this line 7\n" +
                "this line 8\n" +
                "this is the end of file",
      explaineOutput:"The output of the above code display all the text inside the file.",
      componentID:0,
      isHaveComponent:false,
      key:2
      },
      {
      title:"2. Read Only Parts of the File",
      description:"Another way to read a file is to call a certain number of characters.",
      syntax:"",
      explaineSyntax:"",
      exemple: sp+"myfile = open(\"testfile.txt\",\"r\")\n" +
                "print(myfile.read(10))\n",
      explaineExemple:"",
      output:sp+"Hello! thi\n",
      explaineOutput:"Notice how we’re using the same file.read() method, only this time we specify the number of characters to process.",
      componentID:0,
      isHaveComponent:false,
      key:3
      },
      {
      title:"3. Read Line by line",
      description:"If we want to see the first line of the file – or the third. You would execute the readline() function as many times as possible to get the data you were looking for.",
      syntax:"",
      explaineSyntax:"",
      exemple: sp+"file = open(\"testfile.txt\", \"r\") \n" +
                "print(file.readline())",
      explaineExemple:"This would return the first line of the file, like so:",
      output:sp+"Hello! this line 1\n",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:4
      },
      {
      title:"",
      description:"By calling readline() two times, you can read the two first lines:",
      syntax:"",
      explaineSyntax:"",
      exemple: sp+"file = open(\\\"testfile.txt\\\", \\\"r\\\") \\n\" +\n" +
                "                \"print(file.readline())\\n\" +\n" +
                "                \"print(file.readline())",
      explaineExemple:"",
      output:sp+"Hello! this line 1\n" +
                "\n" +
                "this line ",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:5
      },
      {
      title:"4. Use for Loop to read a file",
      description:"",
      syntax:"",
      explaineSyntax:"",
      exemple: sp+"file = open(\"testfile.txt\", \"r\") \n" +
                "for line in file:\n" +
                "        print(line)",
      explaineExemple:"",
      output:sp+"Hello! this line 1\n" +
                "\n" +
                "this line 2\n" +
                "\n" +
                "this line 3\n" +
                "\n" +
                "this line 4\n" +
                "\n" +
                "this line 5\n" +
                "\n" +
                "this line 6\n" +
                "\n" +
                "this line 7\n" +
                "\n" +
                "this line 8\n" +
                "\n" +
                "this is the end of file\n",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:6
      },
    ],
    key:48
  },  // ############################################################################################




  {
    name: "Writing to Files",
    posts:[{
      title:"Writing to a file",
      description:"In order to write into a file in Python, we need to open it in write w, append a or exclusive creation x mode.\n \nWe need to be careful with the w mode, as it will overwrite into the file if it already exists. Due to this, all the previous data are erased.",
      syntax:"",
      explaineSyntax:"",
      exemple:  sp+"file = open(\"testfile.txt\", \"w\")\n" +
                "file.write(\"add this line to our text file\")\n" +
                "\n",
      explaineExemple:"the \"w\" method will overwrite the entire file. If we take a look a testfile.txt file we will find:",
      output:sp+"add this line to our text file\n",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:1
      },
    ],
    key:49
  },  // ############################################################################################






  {
    name: "Closing a File",
    posts:[{
      title:"Close a file",
      description:"When we are done with performing operations on the file, we need to properly close the file.\n Closing a file will free up the resources that were tied with the file. It is done using the close() method available in Python.",
      syntax:"",
      explaineSyntax:"",
      exemple:  sp+"#open file in write mode\n" +
                "file = open(\"testfile.txt\", \"w\")\n" +
                "\n" +
                "#add text to your file\n" +
                "file.write(\"add this line to our text file\")\n" +
                "#manipulate your file as you want\n" +
                "\n" +
                "#close file\n" +
                "file.close()",
      explaineExemple:"",
      output:"",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:1
      },
    ],
    key:50
  },  // ############################################################################################



  ]



export default db3
