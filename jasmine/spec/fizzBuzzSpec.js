describe("FizzBuzz", function(){
  it("Should return fizz if divisible by 3",function(){
    expect(fizzBuzz(3)).toEqual('fizz');
    expect(fizzBuzz(2)).toEqual(2);
    expect(fizzBuzz(1)).toEqual(1);
    expect(fizzBuzz(6)).toEqual('fizz');
    expect(fizzBuzz(9)).toEqual('fizz');
    expect(fizzBuzz(27)).toEqual('fizz');
    expect(fizzBuzz(28)).toEqual(28);
  });

  it("Should return buzz if divisible by 5", function(){
    expect(fizzBuzz(5)).toEqual('buzz');
    expect(fizzBuzz(7)).toEqual(7);
    expect(fizzBuzz(8)).toEqual(8);
    expect(fizzBuzz(10)).toEqual('buzz');
    expect(fizzBuzz(55)).toEqual('buzz');
    expect(fizzBuzz(70)).toEqual('buzz');
    expect(fizzBuzz(28)).toEqual(28);
  });

  it("Should return fizzbuzz if both", function(){
    expect(fizzBuzz(15)).toEqual('fizzbuzz');
    expect(fizzBuzz(30)).toEqual('fizzbuzz');
    expect(fizzBuzz(1001)).toEqual(1001);
  });
});
