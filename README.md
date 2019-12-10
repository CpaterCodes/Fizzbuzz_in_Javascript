#Basic fizzbuzz build in Javascript#

Fizzbuzz is a well known example of a code kata, and something I wish to
build in order to obtain a firmer grasp of Javascript. My background is in
Ruby and it has been quite a jump, so it's my intention to engage in exercises
of this kind in order to push myself but more importantly to learn more about
how to learn a new programming language.

```
As a user
so I may simulate fizzbuzz
I want a program that will respond with 'fizz' to multiples of 3, and 'buzz'
to multiples of 5

As a user
because it is indeed called 'fizzbuzz'
I want the program to respond with 'fizzbuzz' to multiples of both 3 and 5
```

I've constructed the program in accordance with TDD, and have specced it with
the use of Jasmine. The program passes all tests, but I have also included an
approach which I feel would be easier to change if the user also wanted
responseS to multiples of 7 or 11 to be added for example. However, it remains
commented out as I am still working on how to ensure the output of the function
is always properly defined.
