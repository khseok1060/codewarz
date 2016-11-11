function persistence(num) {

   var numStr = String(num);
   var count = 0;

   while(numStr.length !== 1) {
     var result = 1;
     for(var i = 0; i< numStr.length; i++) {
       result = result * Number(numStr[i]);
     }
     numStr = String(result);
     count++;
   }

   return count;

}

module.exports = persistence;
