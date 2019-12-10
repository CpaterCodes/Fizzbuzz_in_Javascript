function fizzBuzz(n){
  //The following code uses a method of adding all keywords into an empty
  //string variable, returning the contents of this variable or the integer the
  //function is called on depending on if the variable remains empty.
  //It remains commented out, however, because it does not yet function as intended.

  // var fzBz = '';
  // n%3 === 0 ? fzBz += 'fizz';
  // n%5 === 0 ? fzBz += 'buzz';
  // return fzBz === '' ? n : fzBz;

  //The following code is less elegant and harder to change in my view, but functions to specification.
  return ((n%3 == 0) && (n%5 == 0) ? 'fizzbuzz' : (n % 3 === 0 ? 'fizz' : (n % 5 === 0 ? 'buzz' : n)));
};
