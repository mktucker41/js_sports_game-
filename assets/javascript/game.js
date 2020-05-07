// Clicking either "SHOOT" button represents a shot for that team.
// Shots should have a random chance of succeeding or failing. (Sounds like Internet research time! How do you determine a random chance in JavaScript?)
// The number of shots taken should increase for every click of the "SHOOT" button.
// The number of goals should only increase when the shot is successful.
// Clicking the "RESET" button should reset all the shot and goal counters and add 1 to the number of resets.

// Team 1
const teamOneShots = document.querySelector ("#teamone-numshots")
const teamOneButton = document.querySelector ("#teamone-shoot-button")
const teamOneGoals = document.querySelector ("#teamone-numgoals")
teamOneButton.addEventListener("click", function() {
    console.log("+ button clicked");
    Math.random(); 
    let teamOneShotsTaken = Number (teamOneShots.innerHTML) + 1;
    teamOneShots.innerHTML = teamOneShotsTaken
    if (Math.random() < .5 ) {
        let   teamOneGoalsMade = Number (teamOneGoals.innerHTML) + 1;
        teamOneGoals.innerHTML = teamOneGoalsMade
        console.log("+ team scored")
    }
})
// Team 2
const teamTwoShots = document.querySelector ("#teamtwo-numshots")
const teamTwoButton = document.querySelector ("#teamtwo-shoot-button")
const teamTwoGoals = document.querySelector ("#teamtwo-numgoals")
teamTwoButton.addEventListener("click", function() {
    console.log("+ button clicked");
    Math.random(); 
    let teamTwoShotsTaken = Number (teamTwoShots.innerHTML) + 1;
    teamTwoShots.innerHTML = teamTwoShotsTaken
    if (Math.random() < .5 ) {
        let   teamTwoGoalsMade = Number (teamTwoGoals.innerHTML) + 1;
        teamTwoGoals.innerHTML = teamTwoGoalsMade
        console.log("+ team scored")
    }
})
// Resets
const resetButton = document.querySelector ("#reset-button")
const numberResets = document.querySelector ("#num-resets")
resetButton.addEventListener("click", function() {
    console.log("+button clicked");
    let resetsTaken = Number (numberResets.innerHTML) + 1;
    numberResets.innerHTML = resetsTaken
    teamOneShots.innerHTML = 0
    teamTwoShots.innerHTML = 0
    teamOneGoals.innerHTML = 0
    teamTwoGoals.innerHTML = 0
})