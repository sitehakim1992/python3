import React  from 'react'
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import { Table, Row, Rows } from 'react-native-table-component';







const TableComponent = (props) =>{


//const {HeadTable, DataTable, widthArr} = props;

  const {componentID} = props


const tablesData =[







  {
    HeadTable: ['Operator\t', 'Name\t', 'Description\t', 'Example\t'] ,
    widthArr: [75, 80, 100, 75] ,
    DataTable: [
            ['+', 'Addition',"Adds two values", 'a+b'],
            ['-', 'Substraction', "Subtracts one value from another", 'a-b'],
            ['*', 'Multiplication', "Multiplies two value", 'a*b'],
            ['/', 'Division', "Divides one value by another", 'a/b'],
            ['%', 'Modulus', "Return the division remainder", 'a%b'],
            ['**', 'Exponentiation', "The first value raised to the exponent of second value", 'a**b'],
          ] , 
  },

  {
    HeadTable: ['Operator\t', 'Description\t', 'Example\t'],
    widthArr: [80, 160, 80,],
    DataTable: [
            ['==', 'Checks if the values of two operands are equal or not, if yes then condition becomes true.', 'a==b'],
            ['===', 'Checks if the values of two operands have identical value and identical type.', 'a===b'],
            ['!=', 'Checks if the values of two operands are equal or not, if values are not equal then condition becomes true.', 'a!=b'],
            ['!==', 'Checks if the values of two operands have different value or different type.', 'a!==b'],
            ['>', 'Checks if the value of left operand is greater than the value of another operand, if yes then condition becomes true.', 'a>b'],
            ['<', 'Checks if the value of an operand is less than the value of another operand, if yes then condition becomes true.', 'a<b'],
            ['>=', 'Checks if the value of left operand is greater than or equal the value of another operand, if yes then condition becomes true.', 'a>=b'],
            ['<=', 'Checks if the value of an operand is less than or equal the value of another operand, if yes then condition becomes true.', 'a<=b'],
        ] ,
  },

  {
    HeadTable: ['Operator\t', 'Description\t', 'Example\t'],
    widthArr:[80, 160, 80,] ,
    DataTable: [
            ['&&', 'If both the operands are true then condition becomes true.', 'a && b'],
            ['||', 'If any of the two operands are non-zero then condition becomes true.', 'a || b'],
            ['!', 'Used to reverse the logical state of its operand.', '!a']
          ],
  },

   {
     HeadTable: ['Operator\t', 'Description\t', 'Example\t'],
     widthArr:[80, 160, 80,] ,
     DataTable: [
             ['=', 'Simple assignment operator, Assigns values from right side operands to left side operand.', 'c=a+b will assign value of a+b into c'],
             ['+=', 'Add AND assignment operator, It adds right operand to the left operand and assign the result to left operand.', 'c+=a is equivalent to c=c+a'],
             ['-=', 'Called Logical NOT Operator. Use to reverses the logical state of its operand. If a condition is true, then Logical NOT operator will make false.', 'c-=a is equivalent to c=c-a'],
             ['*=', 'Subtract AND assignment operator, It subtracts right operand from the left operand and assign the result to left operand.', 'c*=a is equivalent to c=c*a'],
             ['/=', 'Divide AND assignment operator, It divides left operand with the right operand and assign the result to left operand.', 'c/=a is equivalent to c=c/a'],
             ['%=', 'Modulus AND assignment operator, It takes modulus using two operands and assign the result to left operand.', 'c%=a is equivalent to c=c%a'],
           ],
   },







// 
//   {
//     HeadTable: ['Data Type\t', 'Size\t', 'Description\t'],
//     widthArr:[80, 90, 150,] ,
//     DataTable: [
//             ['int', '4 bytes', 'Stores whole numbers from -2,147,483,648 to 2,147,483,647'],
//             ['long', '8 bytes', 'Stores whole numbers from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807'],
//             ['float', '4 bytes', 'Stores fractional numbers. Sufficient for storing 6 to 7 decimal digits'],
//             ['double', '8 bytes', 'Stores fractional numbers. Sufficient for storing 15 decimal digits'],
//             ['bool', '1 byte', 'Stores true or false values'],
//             ['char', '2 bytes', 'Stores a single character/letter, surrounded by single quotes'],
//             ['string', '2 bytes per character', 'Stores a sequence of characters, surrounded by double quotes'],
//           ],
//   },
  // {
  //   HeadTable: ['Operator\t', 'Description\t', 'Example\t'],
  //   widthArr:[80, 160, 80,] ,
  //   DataTable: [
  //           ['in', 'Evaluates to true if it finds a variable in the specified sequence and false otherwise.', 'a in b'],
  //           ['not in', 'Evaluates to true if it does not finds a variable in the specified sequence and false otherwise.', 'a not in b'],
  //           
  //         ] , 
  // },


  // {
  //   HeadTable: ['Operator\t', 'Description\t', 'Example\t'],
  //   widthArr:[80, 160, 80,] ,
  //   DataTable: [
  //           ['is', 'Evaluates to true if the variables on either side of the operator point to the same object and false otherwise.', 'a is b'],
  //           ['is not', 'Evaluates to false if the variables on either side of the operator point to the same object and true otherwise.', 'a is not b'],
  //           //['hhhh', 'Bitw', 'ggg'],
  //         ] , 
  // },


// 
//    {
//      HeadTable: ['Method\t', 'Description\t'] ,
//      widthArr: [100, 180,] ,
//      DataTable: [
//              ['AppendText()', 'Appends text at the end of an existing file'],
//              ['Copy()', 'Copies a file'],
//              ['Create()', 'Creates or overwrites a file'],
//              ['Delete()', 'Deletes a file'],
//              ['Exists()', 'Tests whether the file exists'],
//              ['ReadAllText()', 'Reads the contents of a file'],
//              ['WriteAllText()', 'Creates a new file and writes the contents to it. If the file already exists, it will be overwritten'],
//              ['Replace()', 'Replaces the contents of a file with the contents of another file'],
//            ] , 
//    },



// 
//   {
//      HeadTable: ['Method\t', 'Description\t'],
//      widthArr:[90, 220] ,
//      DataTable: [
//              ['new()', 'Creates a new empty String.'],
//              ['to_string()', 'Converts the given value to a String.'],
//              ['replace()', 'Replaces all matches of a pattern with another string.'],
//              ['as_str()', 'Extracts a string slice containing the entire string.'],
//              ['push()', 'Appends the given char to the end of this String.'],
//              ['push_str()', 'Appends a given string slice onto the end of this String.'],
//              ['len()', 'Returns the length of this String, in bytes.'],
//              ['trim()', 'Returns a string slice with leading and trailing whitespace removed.'],
//              ['split_whitespace()', 'Splits a string slice by whitespace and returns an iterator.'],
//              ['split()', 'Returns an iterator over substrings of this string slice, separated by characters matched by a pattern.'],
//              ['chars()', 'Returns an iterator over the chars of a string slice.'],
//            ] , 
//    },

]






  return (
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 1, borderColor: '#ffa1d2'}}>
          <Row data={tablesData[componentID].HeadTable} widthArr={tablesData[componentID].widthArr} style={styles.HeadStyle} textStyle={{margin: 10}}/>
          <Rows data={tablesData[componentID].DataTable} widthArr={tablesData[componentID].widthArr} textStyle={{margin: 10}}/>
        </Table>
      </View>

    )

}


const styles = StyleSheet.create({
  container: { 
    flex: 1,
    padding: 0,
    paddingTop: 5,
    backgroundColor: '#ffffff' 
  },
  HeadStyle: { 
    height: 100,
    alignContent: "center",
    backgroundColor: '#ffe0f0'
  },
  TableText: { 
    margin: 10
  }
});
export default TableComponent;
