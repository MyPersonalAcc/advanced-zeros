module.exports = function getZerosCount(number, base){
  pm = getPrimeMultipliers(base);
  ans = 0;
  for(var i=0; i<pm.length; i++){
      if(pm[i] > 0){
          res = 0;
          x = i;
          while(x <= number){
              res += Math.floor(number/x);
              x *= i;
          }
          res = Math.floor(res / pm[i]);
          if(ans == 0 || res < ans){  
              ans = res;
          }
      } 
  }
  return ans;
}

function getPrimeMultipliers(base){
  ans = new Array(Math.floor(base) + 1).fill(0);  
  var x = 2;
  while(base > 1){
      while(base % x == 0){
          ans[x]++;
          base /= x;
      }
      if(x == 2){
        x++;
      }
      else{
        x += 2;
      }
  }
  return ans;
}
