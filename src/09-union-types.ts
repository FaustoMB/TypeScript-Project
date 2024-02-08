(() => {
  let userId: String | number;
  userId = 1212;
  userId = 'pass';

  function greeting (myText: string | number) {
    if(typeof myText === 'string'){
      console.log(`string ${myText.toLowerCase()}`)
    } else {
      console.log(`string ${myText.toFixed(1)}`)
    }
  }

  greeting('pass');
  greeting(12.121212);
})();