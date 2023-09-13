console.log('hi!');

function sleepIn(weekday, vacation){
  return !weekday || vacation;
}

function monkeyTrouble(aSmile, bSmile){
  if((aSmile && bSmile) || (!aSmile && !bSmile)){
    return true;
  }
  return false;
}

function sumDouble(a, b){
  function sum(a,b){
    return a + b;
  }
  if(a == b){
    return sum(a,b) * 2;
  }else{
    return sum(a,b);
  }
}

function frontBack(str){
  let first = str.charAt(0);
    let last = str.charAt(str.length-1);
    let newStr = str.slice(1, str.length-1);

    if (str.length == 1) {
      return str;
    }
    else {
        return last + newStr + first;
    }
}

function intMax(a, b, c){
  if(a > b && a > c){
    return a;
  }else if(b > a && b > c){
    return b;
  }else {
    return c;
  }
}

function arrayCount9(nums){
  let count = 0;
  for(let i = 0; i < nums.length; i++){
    if(nums[i] == 9){
      count++;
    }
  }
  return count;
}

function array667(nums){
  count = 0;
  for(let i = 0; i < nums.length; i++){
    if(nums[i] == 6 && (nums[i + 1] == 6 || nums[i + 1] == 7)){
      count++;
    }
  }
  return count;
}

function squirrelPlay(temp, isSummer){
  if(isSummer){
    if(temp >= 60 && temp <= 100){
      return true;
    }
  }else{
    if(temp >= 60 && temp <= 90){
      return true;
    }
  }
  return false;
}

function withoutDoubles(die1, die2, noDoubles){
  let sum = die1 + die2;
  if(noDoubles){
    if(die1 == die2){
      sum++;
    }
    if(sum == 13){
      sum = 7;
    }
  }
  return sum;
}

function greenTicket(a, b, c){
  let ret = 0;
  if(a == b && b == c){
    ret = 20;
  }else if(a == b || a == c || b == c){
    ret = 10;
  }
  return ret; 
}

function blackjack(a, b){
  let as = 21 - a;
  let bs = 21 - b;
  if(as < 0 && bs >= 0){
    return b;
  }else if(bs < 0 && as >= 0){
    return a;
  }else if(as <= bs && as >= 0){
    return a;
  }else if(bs <= as && bs >= 0){
    return b;
  }else {
    return 0;
  }
}

