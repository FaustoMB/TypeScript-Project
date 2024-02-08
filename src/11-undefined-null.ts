(() => {
  // let myNumber: number = undefined;
  // let myString: string = null;


  let myNull1 = null;
  let myUndefined1= undefined;

  let myNull2:null  = null;
  let myUndefined2:undefined = undefined;

  let myNumber: Number | null = null;
  myNumber = 12;

  let myString: string | undefined = undefined;
  myString = 'aas'

  function hi(name: string | null) {
    let hello = 'Hola ';

    if (name){
      hello += name;
    } else {
      hello += 'nobody';
    }

    console.log(hello)
  }
  function hiV2(name: string | null) {
    let hello = 'Hola ';
    hello += name?.toLowerCase() || 'nobody';
    console.log(hello)
  }

  hi('Fausto');
  hi(null);
  hiV2('Fausto');
  hiV2(null);
})();