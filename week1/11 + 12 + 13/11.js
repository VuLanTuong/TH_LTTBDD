
// 1. Create one player array for each team
const players1 = ['Neuer', 'Pavard', 'Sule', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Muller', 'Gnabry', 'Lewandowski', 'Coman'];
const players2 = ['Oblak', 'Trippier', 'Gimenez', 'Hermoso', 'Lodi', 'Correa', 'Koke', 'Saul', 'Lemar', 'Felix', 'Suarez'];

// 2. Create variables for the goalkeeper and field players of team 1 (Bayern Munich)
const [gk, ...fieldPlayers] = players1;

// 3. Create an array 'allPlayers' containing all players of both teams
const allPlayers = [...players1, ...players2];

// 4. Create a new array 'players1Final' with the original team1 players plus 3 substitute players
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

//Vu Lan Tuong - 20020761
// 6. Write a function 'printGoals' to print player names and the total number of goals
function printGoals(...playerNames) {
    console.log(`${playerNames.length} goals were scored.`);
    for (const playerName of playerNames) {
        console.log(playerName);
    }
}

// 7. Determine which team is more likely to win based on the odds
// console.log(team1 < team2 && 'Team 1 is more likely to win.' || 'Team 2 is more likely to win.');

// Test data for 6: Davies, Muller, Lewandowski, Kimmich
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');