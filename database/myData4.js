const sp="                                                                     \n";

const db4 = [





  {
    name: "Python Object Oriented Programming",
    posts:[{
      title:"1. Object Oriented Programming (OOP)",
      description:"Object-oriented Programming, or OOP for short, is a programming paradigm which provides a means of structuring programs so that properties and behaviors are bundled into individual objects.\n For instance, an object could represent a person with a name property, age, address, etc., with behaviors like walking, talking, breathing, and running. Or an email with properties like recipient list, subject, body, etc., and behaviors like adding attachments and sending.\n Put another way, object-oriented programming is an approach for modeling concrete, real-world things like cars as well as relations between things like companies and employees, students and teachers, etc. OOP models real-world entities as software objects, which have some data associated with them and can perform certain functions.",
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
      title:"2. OOP Example",
      description:"An example of a class is the class Dog. Don't think of it as a specific dog, or your own dog. We're describing what a dog is and can do, in general. Dogs usually have a name and age; these are instance attributes. Dogs can also bark; this is a method.\n When you talk about a specific dog, you would have an object in programming: an object is an instantiation of a class. This is the basic principle on which object-oriented programming is based. So my dog Ozzy, for example, belongs to the class Dog. His attributes are name = 'Ozzy' and age = '2'. A different dog will have different attributes.",
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
      title:"3. OOP in Python",
      description:"Python is a great programming language that supports OOP. You will use it to define a class with attributes and methods, which you will then call. Python offers a number of benefits compared to other programming languages like Java, C++ or R. It's a dynamic language, with high-level data types. This means that development happens much faster than with Java or C++. It does not require the programmer to declare types of variables and arguments. This also makes Python easier to understand and learn for beginners, its code being more readable and intuitive.",
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
    ],
    key:61
  },  // ############################################################################################




  {
    name: "Python Classes",
    posts:[{
      title:"1. What is Classes",
      description:"Classes provide a means of bundling data and functionality together. Creating a new class creates a new type of object, allowing new instances of that type to be made. Each class instance can have attributes attached to it for maintaining its state. Class instances can also have methods (defined by its class) for modifying its state.\n Like function definitions begin with the def keyword in Python, class definitions begin with a class keyword.",
      syntax:"",
      explaineSyntax:"Create a class named Car, with a property named speed:",
      exemple:  sp+"class Car:\n" +
                "   speed = 300\n",
      explaineExemple:"",
      output:"",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:1
      },
      {
      title:"2. Attributes and Methods in class",
      description:"Attributes: A class by itself is of no use unless there is some functionality associated with it. Functionalities are defined by setting attributes, which act as containers for data and functions related to those attributes. Those functions are called methods.\n\n Methods: Once there are attributes that “belong” to the class, you can define functions that will access the class attribute. These functions are called methods. When you define methods, you will need to always provide the first argument to the method with a self keyword.",
      syntax:"",
      explaineSyntax:"Let's take the previous example and try to add some interesting things.",
      exemple: sp+"class Car:\n" +
                "        speed = 300\n" +
                "\n" +
                "print(Car)\n" +
                "\n",
      explaineExemple:"",
      output:sp+"<class '__main__.Car'>\n",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:2
      },
      {
      title:"",
      description:"Create a class named Car, with a property named speed and movement method.",
      syntax:"",
      explaineSyntax:"",
      exemple: sp+"class Car:\n" +
                "        speed = 300\n" +
                "        def movement():\n" +
                "                print(\"This car is parked\")\n" +
                "print(Car.speed)\n" +
                "print(Car.movement())\n" +
                "\n",
      explaineExemple:"",
      output:sp+"300\n" +
                "This car is parked\n",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:3
      },
    ],
    key:62
  },  // ############################################################################################




  {
    name: "Python Objects",
    posts:[{
      title:"Python objects",
      description:"An Object is an instance of a Class. A class is like a blueprint while an instance is a copy of the class with actual values.\n we can use the the name of our class to create objects:",
      syntax:"",
      explaineSyntax:"",
      exemple: sp+"class Car:\n" +
                "        speed = 300\n" +
                "        color = \"red\"\n" +
                "        def movement():\n" +
                "                print(\"This car is parked\")\n" +
                "\n" +
                "# create an object\n" +
                "Tesla = Car()\n" +
                "\n" +
                "# create a second object\n" +
                "Ferrari = Car()\n" +
                "\n" +
                "print(Tesla.speed)\n" +
                "print(Ferrari.speed)\n" +
                "print(Tesla.color)\n" +
                "print(Ferrari.color)\n" +
                "\n",
      explaineExemple:"",
      output:sp+"300\n" +
                "300\n" +
                "red\n" +
                "red\n",
      explaineOutput:"In the above example we create two objects instance named Tesla and Ferrari. We can access the attributes of objects using the object name prefix. \n Attributes may be data or method. Methods of an object are corresponding functions of that class.",
      componentID:0,
      isHaveComponent:false,
      key:1
      },
    ],
    key:63
  },  // ############################################################################################




  {
    name: "Constructors in Python",
    posts:[{
      title:"Constructors",
      description:"A constructor can simply be defined as a special type of method or function which can be used to initialize instances of various members in a class. \n In Python, there are two different types of constructors.\n \u25BA Non-parameterized Constructor: The constructors in Python which have no parametres present is known as a non parameterized constructor.\n \n \u25BA Parameterized Constructor: A constructor that has a parametre pre defined is known as a parameterized constructor.\n \n Constructors are generally used for instantiating an object.The task of constructors is to initialize(assign values) to the data members of the class when an object of class is created.In Python the __init__() method is called the constructor and is always called when an object is created.",
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
      title:"Constructor declaration",
      description:"All classes have a function called __init__(), which is always executed when the class is being initiated.\n Use the __init__() function to assign values to object properties, or other operations that are necessary to do when the object is being created:",
      syntax:"",
      explaineSyntax:"",
      exemple: sp+"\n" +
                "class Car:\n" +
                "        def __init__(self):\n" +
                "                print(\"constructors called\")\n" +
                "\n" +
                "car_1 = Car()",
      explaineExemple:"",
      output:sp+"constructors called\n",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:2
      },
      {
      title:"",
      description:"The __init__() function is called automatically every time the class is being used to create a new object.",
      syntax:"",
      explaineSyntax:"",
      exemple: sp+"class Car:\n" +
                "        def __init__(self):\n" +
                "                print(\"constructors called\")\n" +
                "\n" +
                "car_1 = Car()\n" +
                "car_2 = Car()     \n" +
                "car_3 = Car()\n" +
                "car_4 = Car()\n" +
                "car_4 = Car()",
      explaineExemple:"",
      output:sp+"constructors called\n" +
                "constructors called\n" +
                "constructors called\n" +
                "constructors called\n" +
                "constructors called",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:3
      },
      {
      title:"Parameterized Constructor",
      description:"Constructor with parameters is known as parameterized constructor.The parameterized constructor take its first argument as a reference to the instance being constructed known as self and the rest of the arguments are provided by the programmer.",
      syntax:"",
      explaineSyntax:"",
      exemple: sp+"class Car:\n" +
                "        name = \"\"\n" +
                "        color = \"\"\n" +
                "        speed = 0\n" +
                "        def __init__(self, name, color, speed):\n" +
                "                self.name = name\n" +
                "                self.color = color\n" +
                "                self.speed = speed\n" +
                "\n" +
                "        def show_car(self):\n" +
                "                print(\"name = \"+self.name+\" color = \"+self.color+\" speed = \"+str(self.spe$\n" +
                "\n" +
                "\n" +
                "Tesla = Car(\"Tesla\",\"red\",300)\n" +
                "Tesla.show_car()\n",
      explaineExemple:"",
      output:sp+"name = Tesla color = red speed = 300\n",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:4
      },
      {
      title:"An other example",
      description:"",
      syntax:"",
      explaineSyntax:"",
      exemple: sp+"class Car:\n" +
                "        name = \"\"\n" +
                "        color = \"\"\n" +
                "        speed = 0\n" +
                "        def __init__(self, name, color, speed):\n" +
                "                self.name = name\n" +
                "                self.color = color\n" +
                "                self.speed = speed\n" +
                "\n" +
                "        def show_car(self):\n" +
                "                print(\"name = \"+self.name+\" color = \"+self.color+\" speed = \"+str(self.spe$\n" +
                "\n" +
                "#create a first car object\n" +
                "Tesla = Car(\"Tesla\",\"red\",300)\n" +
                "Tesla.show_car()\n" +
                "\n" +
                "#create second car object\n" +
                "Ferrari = Car(\"Ferrari\",\"black\",400)\n" +
                "Ferrari.show_car()",
      explaineExemple:"",
      output:sp+"name = Tesla color = red speed = 300\n" +
                "name = Ferrari color = black speed = 400",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:5
      },
    ],
    key:64
  },  // ############################################################################################




  {
    name: "Inheritance in Python",
    posts:[{
      title:"Inheritance",
      description:"Inheritance is one of the most important aspects of Object Oriented Programming. While programming, many a times, situations arise where we have to write a few classes with some common features and some unique, class-specific features, which include both variables and methods.\n Inheritance allow one class to derive or inherit the properties from another class.",
      syntax:sp+"class DerivedClassName(BaseClassName):\n" +
                "    # your code \n"+
                "    pass",
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
      title:"",
      description:"Create a class named Vehicle, with name, color and speed properties, and a showInformation method. We are also Created a class named Car, which will inherit the properties and methods from the Vehicle class:",
      syntax:"",
      explaineSyntax:"",
      exemple: sp+"class Vehicle:\n" +
                "  def __init__(self, name, color, speed):\n" +
                "    self.name = name\n" +
                "    self.color = color\n" +
                "    self.speed = speed\n" +
                "\n" +
                "  def showInformation(self):\n" +
                "    print(self.name, self.color, self.speed)\n" +
                "\n" +
                "class Car(Vehicle):\n" +
                "  pass\n" +
                "\n" +
                "x = Car(\"Tesla\", \"red\", 300)\n" +
                "x.showInformation()",
      explaineExemple:"",
      output:sp+"Tesla red 300\n",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:2
      },
    ],
    key:65
  },  // ############################################################################################




  {
    name: "Multiple Inheritance",
    posts:[{
      title:"Multiple Inheritance",
      description:"A class can inherit from multiple super classes. Multiple inheritance is an extension of standard or single inheritance. The principle remains the same: a class inherits from another class.\n Multiple inheritance is the idea of inheriting from more parent classes. A class can inherit from 2,3 or a multiple of classes.",
      syntax:sp+"class DerivedClassName(BaseClassName1, BaseClassName2, BaseClassName3, ...):\\n\" +\n" +
                "       # your code\n" +
                "       pass",
      explaineSyntax:"",
      exemple:  sp+"class B:\n" +
                "    def b(self):\n" +
                "        print('B class')\n" +
                "\n" +
                "\n" +
                "class C:\n" +
                "    def c(self):\n" +
                "        print('C class')\n" +
                "\n" +
                "\n" +
                "class D(B, C):\n" +
                "    def d(self):\n" +
                "        print('D class')\n" +
                "\n" +
                "\n" +
                "d = D()\n" +
                "d.b()\n" +
                "d.c()\n" +
                "d.d()",
      explaineExemple:"",
      output:sp+"B class\n" +
                "C class\n" +
                "D class",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:1
      },
    ],
    key:66
  },  // ############################################################################################




  {
    name: "Method Overloading",
    posts:[{
      title:"Method Overloading",
      description:"Overloading, in the context of programming, refers to the ability of a function or an operator to behave in different ways depending on the parameters that are passed to the function, or the operands that the operator acts on.\n \n In Python, you can create a method that can be called in different ways. So, you can have a method that has zero, one or more number of parameters. Depending on the method definition, we can call it with zero, one or more arguments.\n",
      syntax:"",
      explaineSyntax:"",
      exemple:  sp+"class Person:\n" +
                "\tdef Hello(self, name=None):\n" +
                "\t\tif name is not None:\n" +
                "\t\t\tprint('Hello ' + name)\n" +
                "\t\telse:\n" +
                "\t\t\tprint('Hello ')\n" +
                "# Create instance\n" +
                "obj = Person()\n" +
                "# Call the method\n" +
                "obj.Hello()\n" +
                "# Call the method with a parameter\n" +
                "obj.Hello('Mark')",
      explaineExemple:"",
      output:sp+"Hello \n" +
                "Hello Mark",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:1
      },
    ],
    key:67
  },  // ############################################################################################




  {
    name: "Method Overriding",
    posts:[{
      title:"",
      description:"Method overriding is a concept of object oriented programming that allows us to change the implementation of a function in the child class that is defined in the parent class. It is the ability of a child class to change the implementation of any method which is already provided by one of its parent class.",
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
      title:"",
      description:"Create a parent class Vehicle. Then a class that inherits from the class Vehicle. We add a method action that we override:",
      syntax:"",
      explaineSyntax:"",
      exemple: sp+"class Vehicle:\n" +
                "    def showHello(self):\n" +
                "        print('Hello to Vehicle')\n" +
                "\n" +
                "class Car(Vehicle):\n" +
                "    def showHello(self):\n" +
                "        print('Hello to Car')\n" +
                "\n" +
                "car1 = Car()\n" +
                "car1.showHello()",
      explaineExemple:"",
      output:sp+"Hello to Car\n",
      explaineOutput:"In the above example an instance car1 is created using the class Car, that inherits from parent class Vehicle.\n The Vehicle class inherits the method action from its parent class, but its overridden in the class itself.",
      componentID:0,
      isHaveComponent:false,
      key:2
      },
    ],
    key:68
  },  // ############################################################################################




  {
    name: "Import module in Python",
    posts:[{
      title:"Create a module in python",
      description:"Modules refer to a file containing Python statements and definitions. \n A file containing Python code, for example: myModule.py, is called a module, and its module name would be myModule.\n \n Let us create a module. Type the following and save it as myModule.py.",
      syntax:"",
      explaineSyntax:"",
      exemple: sp+"# Python Module example save as (myModule.py)\n" +
                "\n" +
                "def sum(a, b):\n" +
                "\n" +
                "   return a + b\n" +
                "  \n" +
                "  \n" +
                "   \n",
      explaineExemple:"",
      output:"",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:1
      },
      {
      title:"Import module in python",
      description:"We use the import keyword to do this. To import our previously defined module myModule, we type the following code.",
      syntax:"",
      explaineSyntax:"",
      exemple: sp+"   \n" +
                "import myModule\n" +
                "print(myModule.sum(10,20))",
      explaineExemple:"",
      output:sp+"30\n",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:2
      },
      {
      title:"Import with renaming",
      description:"We can import a module by renaming it as follows:",
      syntax:"",
      explaineSyntax:"",
      exemple: sp+"import myModule as otherName\n" +
                "print(otherName.sum(10,20))",
      explaineExemple:"",
      output:"",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:3
      },
      {
      title:"Python from...import statement",
      description:"We can import specific names from a module without importing the module as a whole.",
      syntax:"",
      explaineSyntax:"",
      exemple: sp+"from myModule import sum\n" +
                "print(sum(10,20))",
      explaineExemple:"",
      output:sp+"30\n",
      explaineOutput:"",
      componentID:0,
      isHaveComponent:false,
      key:4
      },
    ],
    key:69
  },  // ############################################################################################






  ]



export default db4
