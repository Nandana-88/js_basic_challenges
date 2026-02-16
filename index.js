home_score=document.getElementsByClassName("score")[0]
guest_score=document.getElementsByClassName("score")[1]

function increment_score(team,points){
    if(team=="home"){
        home_score.textContent=Number(home_score.textContent)+points
    }
    else if(team=="guest"){
        guest_score.textContent=Number(guest_score.textContent)+points
    }
}

function announce_winner(){
    let home_points=Number(home_score.textContent)
    let guest_points=Number(guest_score.textContent)
    let message=""
    if(home_points>guest_points){
        message="HOME TEAM WINS!"
    }
    else if(guest_points>home_points){
        message="GUEST TEAM WINS!"
    }
    else{
        message="IT'S A TIE!"
    }
    alert(message)
}
let time = 60  // seconds
const timer = document.getElementsByClassName("timer")[0]
function start_timer(){
  const interval = setInterval(() => {
    if (time > 0) {
      time--
      timer.textContent = "00:" + time
    }
    else {
        window.alert("Time's up!")
      announce_winner()
      window.alert("Click New Game to reset the game.")
      clearInterval(interval)
      timer.textContent="01:00"

    }
  }, 1000)
}


function reset_scores(){
    home_score.textContent=0
    guest_score.textContent=0
    time=60
    timer.textContent="01:00"
    window.alert("Click START to play.")
}
window.alert("Click START")

