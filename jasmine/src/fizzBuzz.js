function fizzBuzz(n){
  //The following code uses a method of adding all keywords into an empty
  //string variable, returning the contents of this variable or the integer the
  //function is called on depending on if the variable remains empty.
  //It remains commented out, however, because it does not yet function as intended.

  // var fzBz = '';
  // n%3 === 0 ? fzBz += 'fizz';
  // n%5 === 0 ? fzBz += 'buzz';
  // return fzBz === '' ? n : fzBz;

  //The following code works and is short, but is hard to read
  // return ((n%3 == 0) && (n%5 == 0) ? 'fizzbuzz' : (n % 3 === 0 ? 'fizz' : (n % 5 === 0 ? 'buzz' : n)));

  //The following code works and is perhaps the easiest to read

  if(n % 3 == 0 && n % 5 == 0){
    return 'fizzbuzz'

  }else if (n % 3 == 0) {
    return 'fizz'

  }else if(n % 5 == 0){
    return 'buzz'

  }else{
    return n

  };
};
