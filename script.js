function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3) + 1
  return computerChoice
}

function playerSelection() {
  let choice = prompt("Enter Your Selection")
  choice = choice.toUpperCase()
  if (choice === "ROCK") {
    return 1
  } else if (choice === "PAPER") {
    return 2
  } else if (choice === "SCISSOR") {
    return 3
  } else {
    console.error("Wrong Choice Entered")
    return -1
  }
}

function playRound(playerChoice, computerSelection) {
  let computerScore = 0
  let playerScore = 0

  if (playerChoice === computerSelection) {
    console.log("It's a draw!")
  } else if (playerChoice === 1 && computerSelection === 2) {
    console.log("You lose! Paper beats Rock.")
    computerScore++
  } else if (playerChoice === 1 && computerSelection === 3) {
    console.log("You win! Rock beats Scissors.")
    playerScore++
  } else if (playerChoice === 2 && computerSelection === 1) {
    console.log("You win! Paper beats Rock.")
    playerScore++
  } else if (playerChoice === 2 && computerSelection === 3) {
    console.log("You lose! Scissors beats Paper.")
    computerScore++
  } else if (playerChoice === 3 && computerSelection === 1) {
    console.log("You lose! Rock beats Scissors.")
    computerScore++
  } else if (playerChoice === 3 && computerSelection === 2) {
    console.log("You win! Scissors beats Paper.")
    playerScore++
  } else {
    console.error("Invalid choices. Please choose Rock, Paper, or Scissors.")
  }

  return { computerScore, playerScore }
}

function game() {
  let computerTotalScore = 0
  let playerTotalScore = 0

  for (let round = 1; round <= 5; round++) {
    console.log(`Round ${round}:`)

    let computerSelection = getComputerChoice()
    let playerChoice = playerSelection()

    console.log(`Player chose: ${playerChoice}`)
    console.log(`Computer chose: ${computerSelection}`)

    const scores = playRound(playerChoice, computerSelection)

    computerTotalScore += scores.computerScore
    playerTotalScore += scores.playerScore

    console.log(`Player Score: ${playerTotalScore}`)
    console.log(`Computer Score: ${computerTotalScore}`)
  }

  if (playerTotalScore > computerTotalScore) {
    console.log("You win the game!")
  } else if (playerTotalScore < computerTotalScore) {
    console.log("You lose the game!")
  } else {
    console.log("It's a tie!")
  }
}

game()
