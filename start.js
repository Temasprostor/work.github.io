class Animal{
  constructor(){
    this.eat=function(f){
      console.log('eat ',f);
    }
  }
}

 class Lion extends Animal{
   constructor(){
     super();
     this.run=function(){
       console.log('running');
     }
   }
 }
 class Rabbit extends Animal{
   constructor(){
     super();
     this.jump=function(){
       console.log('jumping');
     }
   }
 }

function MyMath(){}

MyMath = Math
MyMath.bubbleSort = function(arr){
       var swapp;
       var n = arr.length-1;
       var x=arr;
       do {
           swapp = false;
           for (var i=0; i < n; i++)
           {
               if (x[i] > x[i+1])
               {
                  var temp = x[i];
                  x[i] = x[i+1];
                  x[i+1] = temp;
                  swapp = true;
               }
           }
           n--;
       } while (swapp);
    return x;
   }



   MyMath.insertSort =function(arr){
  for (var i = 1; i < arr.length; i++)
  {
    if (arr[i] < arr[0])
    {
      arr.unshift(arr.splice(i,1)[0]);
    }
    else if (arr[i] > arr[i-1])
    {
      continue;
    }
    else {
      for (var j = 1; j < i; j++) {
        if (arr[i] > arr[j-1] && arr[i] < arr[j])
        {
          arr.splice(j,0,arr.splice(i,1)[0]);
        }
      }
    }
  }
  return arr;
}



MyMath.factorial = function(n) {
    if(n == 0) {
        return 1
    } else if(n<0){
      console.log('error:number must >0');
      return;
    }else{ 
        return n * MyMath.factorial(n - 1);
    }
}
