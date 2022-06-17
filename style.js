



function get(max) {
    return Math.floor(Math.random() * max);
  }

  let a = get(3)

  console.log (a)
  // 0 камень, 1 ножницы, 2 бумага 

  let  game = (prompt ("Rock, Paper, Scissors. What do you choose?"))

console.log (game)

if (game == "Rock" && a == 0 ||game == "Paper" && a == 2 || game == "Scissors" && a == 1 ) { alert ("no one's")}

else if ( game == "Rock" && a == 1 ||game == "Paper" && a == 0 || game == "Scissors" && a == 2 ) { alert ("You win")}

else if ( game == "Rock" && a == 2 ||game == "Paper" && a == 1 || game == "Scissors" && a == 0 ) { alert ("You lose")}

else alert ("error")

