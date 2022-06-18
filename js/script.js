function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    }
    else if(argMoveId == '2'){
        return 'papier';
    }
    else if(argMoveId == '3'){
        return 'nożyce';
    }
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }

function displayResult(argComputerMove, argPlayerMove){
    console.log('moves:', argComputerMove, argPlayerMove);
    if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
      printMessage('Ty wygrywasz!');
    }
    else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        printMessage('Ty wygrywasz!');
    }
    else if(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
        printMessage('Komputer wygrał! :(');
    }
    else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
        printMessage('Komputer wygrał! :(');
    }
    else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage('Ty wygrywasz!');
    }
    else if(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
        printMessage('Komputer wygrał! :(');
    }
    else if(argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
        printMessage('Remis');
    }
    else if(argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
        printMessage('Remis');
    }
    else if(argComputerMove == 'papier' && argPlayerMove == 'papier'){
        printMessage('Remis');
    }
    else{
        printMessage('Wpisałeś złą liczbę!');
    }
}

let randomNumber = Math.floor(Math.random() * 3 + 1);
let computerMove = getMoveName(randomNumber);
printMessage('Komputera ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
let playerMove = getMoveName(playerInput);
printMessage('Twój ruch to: ' + playerMove);

let winner = displayResult(computerMove, playerMove);