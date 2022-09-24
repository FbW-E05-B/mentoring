`The purpose of `console.log()` = to provide feedback on what is happening in your script

Operators
+   (numbers): addition
+   (strings): concatenation
-   (numbers only): subtraction
*   (numbers only): multiplication
/   (numbers only): division
%   (numbers only): modulus (remainder after division)
==  (loose) equality:
    - a == b evaluates to true or false
    - Example: 1 == "1" —> true
=== strict equality
    - a == b evaluates to true or false
    - Both operands must be of the same _type_ **and** the same _value_
    - Example: 1 == "1" —> false
    - 0.5 + 0.5 === 1 —> true
    WARNING: JavaScript uses 64-bit floating point numbers which are not 100% accurate
    - 12.3 % 10 === 2.3 -> false
      because 12.3 % 10 —> 2.3000000000000007
<   (numbers): less than
<   (strings): is earlier in the alphabet than
    - Example: "A" < "B" –> true
    - Example: "Polish" < "polish" –> true
    NOTE: A computer uses numbers to represent letters. `String.fromCharCode(65)` –> `'A'`; `String.fromCharCode(97)` —> `'a'`. What is actually compared is the numbers that generate the letters. UPPERCASE letters have lower numbers than lowercase letters.
<=  (numbers and strings): less than or equal to
>=  (numbers and strings): greater than or equal to
++  increment (numbers)
--  decrement (numbers)
    NOTE: -- and ++ will become more useful when you start writing scripts with repeated actions.

Strings
* concatenating strings with the + operator: "abc" + "def" —> "abcdef"
* If a number and a string are concatenated, the number is converted to a string:
  - 1 + "2" —> "12"

* String Templates
  - \`${expression}...\`
  - Strings in backticks can include the new-line character
  - The expression inside `${}` should be JavaScript that evaluates to a string

Numbers
* parseInt(expression): reads `expression` character by character, and stops if it meets an character that is not a number
  - Example: parseInt("123.4") —> 123
  - Example: parseInt("NotANumber") —> NaN