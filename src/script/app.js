let counter=5;
let arrWin0=[0,1,2]
let arrWin1=[3,4,5]
let arrWin2=[6,7,8]
let arrWin3=[0,4,8]
let arrWin4=[6,4,2]
let arrPlayer=[];
let arrBot=[];
let tmp=0;
function selectItem(index){
        if(!arrPlayer.includes(index) && !arrBot.includes(index))
        {document.querySelector('#item'+index).classList.add('cross')
        document.querySelector('#item'+index).ariaDisabled
        arrPlayer.push(index);
         counter--;
         if(checkWinPlayer())
         {
           console.log("Закончили упражнение win player")
           document.getElementById('gamepool').style.pointerEvents="none";
          return 
         }
        }
       
        else
        {
          return
        }

  do
  {
    if(counter==0) 
    {
           return
    }
        tmp = getRandomInt(9);
        
       if(!arrPlayer.includes(tmp) && !arrBot.includes(tmp))
       {

          arrBot.push(tmp);
          // console.log("arrbot= "+arrBot)
          document.querySelector('#item'+tmp).classList.add('circle')
          if(checkWinBot()){
            console.log("Закончили упражнение win bot")
            document.getElementById('gamepool').style.pointerEvents="none";
            return
          }
          return
       }
       
  }
  while (counter != 0 )
        
  }

  function getRandomInt(max) 
  {
    return Math.floor(Math.random() * max);
  }
function checkWinPlayer(){
  if(arrPlayer.length!=0){
    if(checker(arrPlayer, arrWin0))
    {
      return true
    }
    else if(checker(arrPlayer, arrWin1))
    {
      return true
    }
    else if(checker(arrPlayer, arrWin2))
    {
      return true
    }
    else if (checker(arrPlayer, arrWin3))
    {
      return true
    }
    else if(checker(arrPlayer, arrWin4))
    {
      return true
    }
    else {return false;}
  }
}

function checkWinBot(){
  {
    if(checker(arrBot, arrWin0))
    {
      return true
    }
    else if(checker(arrBot, arrWin1))
    {
      return true
    }
    else if(checker(arrBot, arrWin2))
    {
      return true
    }
    else if (checker(arrBot, arrWin3))
    {
      return true
    }
    else if(checker(arrBot, arrWin4))
    {
      return true
    }
    else {return false;}
  }
}
let checker = (arr, target) =>target.every(v => arr.includes(v));
