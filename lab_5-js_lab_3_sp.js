"use strict";
var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
var table = {
  cell1: null,
  cell2: null,
  cell3: null,
  cell4: null,
  cell5: null,
  cell6: null,
  cell7: null,
  cell8: null,
  cell9: null
}

var cellMouseOver = null;
var cellClicked = null;
var emptyCell = "cell5";


var cellNeihbors = {}


function suffleNumbers() {
  let temp = 0;
  for (let i = 0; i < numbers.length; i++) {
    let randomNumber = Math.trunc(Math.random() * 7)
    temp = numbers[randomNumber];
    numbers[randomNumber] = numbers[i];
    numbers[i] = temp;
  }
}

//when pages open
suffleNumbers();
fillCells();
determineNeighbours();
var time = new Date();
var startTime = time.toLocaleTimeString();
document.getElementById("start").innerHTML = startTime;

function determineNeighbours() {
  cellNeihbors = {
    cell1: {
      n1: table.cell2,
      n2: table.cell4
    },
    cell2: {
      n1: table.cell1,
      n2: table.cell3,
      n3: table.cell5
    },
    cell3: {
      n1: table.cell2,
      n2: table.cell6,
    },
    cell4: {
      n1: table.cell1,
      n2: table.cell5,
      n3: table.cell7
    },
    cell5: {
      n1: table.cell2,
      n2: table.cell4,
      n3: table.cell6,
      n4: table.cell8
    },
    cell6: {
      n1: table.cell3,
      n2: table.cell5,
      n3: table.cell9
    },
    cell7: {
      n1: table.cell4,
      n2: table.cell8,
    },
    cell8: {
      n1: table.cell5,
      n2: table.cell7,
      n3: table.cell9
    },
    cell9: {
      n1: table.cell6,
      n2: table.cell8,
    }
  }
}

function fillCells() {
    table = {
      cell1: numbers[0],
      cell2: numbers[1],
      cell3: numbers[2],
      cell4: numbers[3],
      cell5: null,
      cell6: numbers[4],
      cell7: numbers[5],
      cell8: numbers[6],
      cell9: numbers[7]
    }

/*
  table = {
    cell1: 1,
    cell2: 2,
    cell3: 3,
    cell4: 4,
    cell5: null,
    cell6: 6,
    cell7: 7,
    cell8: 5,
    cell9: 8
  } */



  document.getElementById("cell1").innerHTML = table.cell1;
  document.getElementById("cell2").innerHTML = table.cell2;
  document.getElementById("cell3").innerHTML = table.cell3;
  document.getElementById("cell4").innerHTML = table.cell4;
  document.getElementById("cell5").innerHTML = table.cell5;
  document.getElementById("cell6").innerHTML = table.cell6;
  document.getElementById("cell7").innerHTML = table.cell7;
  document.getElementById("cell8").innerHTML = table.cell8;
  document.getElementById("cell9").innerHTML = table.cell9;
};


//restart game
document.getElementById("restart").addEventListener("click", function () {
  for (let i = 0; i < userSelection.length; i++) {
  userSelection[i].addEventListener("click", clickFunction);
} //for
  
  for (let i = 0; i < userSelection.length; i++) {
  userSelection[i].addEventListener("mouseover", mouseOverFunction);
}
  cellMouseOver = null;
  cellClicked = null;
  emptyCell = "cell5";

  suffleNumbers();
  fillCells();
  determineNeighbours();

  time = new Date();
  startTime = time.toLocaleTimeString();
  console.log(startTime);
  document.getElementById("start").innerHTML = startTime;
  moveCount = null;
  document.getElementById("move-count").innerHTML = moveCount;
  document.getElementById("end").style.display = "none";
  

});
//console.log(emptyCell);
//console.log(cellNeihbors[emptyCell]);

//counts moves
var moveCount = 0;

var userSelection = document.getElementsByClassName("table-cell");
/*for (let i = 0; i < userSelection.length; i++) {
  userSelection[i].addEventListener("click", function (event) {
    cellClicked = event.target.id;
    if (isCellMovable(cellClicked)) {
      moveCount += 1;
      document.getElementById("move-count").innerHTML = moveCount;
      //console.log(table[emptyCell] + " x");
      // console.log(table[cellClicked] + " y");
      table[emptyCell] = table[cellClicked];
      table[cellClicked] = null;
      document.getElementById(cellClicked).innerHTML = null;
      document.getElementById(emptyCell).innerHTML = table[emptyCell];
      emptyCell = cellClicked;
      // console.log(emptyCell + " z");
      determineNeighbours();
      // console.log(cellNeihbors[emptyCell] + " q");
      if (isSolved()) {
        time = new Date();
        startTime = time.toLocaleTimeString();
        document.getElementById("end").style.display = "block";
        document.getElementById("end-time").innerHTML = startTime;
        document.getElementById("move-count").innerHTML = moveCount + "--Done!!";
      }
    }
  })
}*/

for (let i = 0; i < userSelection.length; i++) {
  userSelection[i].addEventListener("click", clickFunction);
} //for

function clickFunction() {
  cellClicked = event.target.id;
  console.log(cellClicked);
  if (isCellMovable(cellClicked)) {
    moveCount += 1;
    document.getElementById("move-count").innerHTML = moveCount;
    //console.log(table[emptyCell] + " x");
    // console.log(table[cellClicked] + " y");
    table[emptyCell] = table[cellClicked];
    table[cellClicked] = null;
    document.getElementById(cellClicked).innerHTML = null;
    document.getElementById(emptyCell).innerHTML = table[emptyCell];
    emptyCell = cellClicked;
    // console.log(emptyCell + " z");
    determineNeighbours();
    // console.log(cellNeihbors[emptyCell] + " q");
    if (isSolved()) {
      time = new Date();
      startTime = time.toLocaleTimeString();
      document.getElementById("end").style.display = "block";
      document.getElementById("end-time").innerHTML = startTime;
      document.getElementById("move-count").innerHTML = moveCount + "--Done!!";
      for (let i = 0; i < userSelection.length; i++) {
        userSelection[i].removeEventListener("click", clickFunction);

        userSelection[i].removeEventListener("mouseover", mouseOverFunction);

      } //for
    }
  }
}

//function to determine is cell moveable or not!!
function isCellMovable(cellId) {
  var myCell = cellNeihbors[cellId];
  if (table[cellId] == null)
    return false;
  for (let i in myCell) {
    if (myCell[i] == null)
      return true;
  }
  return false;
}

//mouseover && mouseout action
for (let i = 0; i < userSelection.length; i++) {
  userSelection[i].addEventListener("mouseover", mouseOverFunction);
}

function mouseOverFunction() {
  cellMouseOver = event.target.id;
  if (isCellMovable(cellMouseOver)) {
    event.target.style.backgroundColor = "green";
  } else {
    event.target.style.backgroundColor = "red";
  }
}

for (let i = 0; i < userSelection.length; i++) {
  userSelection[i].addEventListener("mouseout", mouseOutFunction);
}

function mouseOutFunction() {
  event.target.style.backgroundColor = "";
}

//success ceheck
function isSolved() {
  if (table.cell9 == null) {
    let counter = 1;
    for (let cell in table) {
      //console.log(table[cell]);
      if (table[cell] != counter && cell != "cell9") {
        return false
      } else {
        counter++;
      }
    }
    return true;
  }

  return false;
}


/*if(JSON.stringify(table) === JSON.stringify(resultTable) ) {
  document.getElementById("move-count").innerHTML = moveCount +" -- Done!!!";
}*/
