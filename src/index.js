module.exports = function check(str, bracketsConfig) {
  let roundBracket=0, squereBracket=0, braches = 0, strightBracket = 0;
  let isRight = false;
  for(let i = 0; i<str.length; i++){
    if(str.charAt(i) === '('){roundBracket+=1;}
    else if(str.charAt(i)===')'){roundBracket-=1}
    else if(str.charAt(i)==='['){squereBracket+=1}
    else if(str.charAt(i)===']'){squereBracket-=1}
    else if(str.charAt(i)==='{'){braches+=1}
    else if(str.charAt(i)==='}'){braches-=1}
    else if(str.charAt(i)==='|'){strightBracket+=1}
  }
  if(roundBracket === 0 && squereBracket === 0 && braches === 0 && strightBracket%2 === 0){
    isRight = true
  }
  else{
    isRight = false
  }
  return(isRight)
}
