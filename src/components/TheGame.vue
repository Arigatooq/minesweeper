<template>
    <div class="main">
          <div class="complexity" v-show="showChooseCom">
              <div class="container">
                  <div class="complexity__choose">
                      <div class="complexity__buttons">
                        <p class="complexity__easy"
                        @click="openEasyGame"
                        >Easy</p>
                        <p class="complexity__normal"
                        @click="openNormalGame"
                        >Normal</p>
                        <p class="complexity__hard"
                        @click="openHardGame"
                        >Hard</p>
                        <p class="complexity__hard"
                        @click="openCustomGame"
                        >Custom</p>
                        <router-link to="/" class="complexity__back">Back</router-link>
                  </div>
              </div>
          </div>
      </div>
      <div class="game" 
          :class="state"
          v-show="showEasyGame"
          >
          <div class="container" >
              <div class="navbar">
                  <div class="counter"></div>
                  <div class="title">Test task -  sapper</div>
                  <div class="buttons">
                      <button class="button" @click="restartGameEasy">Restart</button>
                      <div class="timer">
                           <p class="minesCounter">Mines: {{ mines }}</p>
                           {{minutes}}:{{seconds}}
                      </div>
                  </div>
              </div>
                  <div class="square">
                      <div   v-for="map_row of map" :key="map_row" class="row">
                        <div v-for="cell of map_row" 
                        :key="cell"
                        class="cell"
                        @mousedown.left="clickCell(cell)"
                        @mousedown.right="setFlag(cell)"
                        @contextmenu.prevent
                        :style="{width: (100/width) + '%'}"
                        :class="cellClass(cell, cell.count)"
                        >
                        <div v-if="cell.is_open && !cell.is_mine && cell.val" class="cellCenter"
                        :class="getNumberClass(cell.val)"
                        >
                          {{cell.val}}
                        </div>
                      </div>
                  </div>
              </div>
            </div>
            <div class="def">
                <button class="back" @click="closeEasy">Back</button>
            </div>
          </div>
          <div class="game" 
          :class="state"
          v-show="showNormalGame"
          >
          <div class="container" >
              <div class="navbar">
                  <div class="counter"></div>
                  <div class="title">Test task -  sapper</div>
                  <div class="buttons">
                      <button class="button" @click="restartGameNormal">Restart</button>
                      <div class="timer">
                        <p class="minesCounter">Mines: {{ mines }}</p>
                           {{minutes}}:{{seconds}}
                      </div>
                  </div>
              </div>
                  <div class="square">
                      <div   v-for="map_row of map" :key="map_row" class="row">
                        <div v-for="cell of map_row" 
                        :key="cell"
                        class="cell"
                        @mousedown.left="clickCell(cell)"
                        @mousedown.right="setFlag(cell)"
                        @contextmenu.prevent
                        :style="{width: (100/width) + '%'}"
                        :class="cellClass(cell, cell.count)"
                        >
                        <div v-if="cell.is_open && !cell.is_mine && cell.val" class="cellCenter"
                        :class="getNumberClass(cell.val)"
                        >
                          {{cell.val}}
                        </div>
                      </div>
                  </div>
              </div>
            </div>
            <div class="def">
              <button class="back" @click="closeNormal">Back</button>
            </div>
          </div>
          <div class="game" 
          :class="state"
          v-show="showHardGame"
          >
          <div class="container" >
              <div class="navbar">
                  <div class="counter"></div>
                  <div class="title">Test task -  sapper</div>
                  <div class="buttons">
                      <button class="button" @click="restartGameHard">Restart</button>
                      <div class="timer">
                        <p class="minesCounter">Mines: {{ mines }}</p>
                           {{minutes}}:{{seconds}}
                      </div>
                  </div>
              </div>
                  <div class="square">
                      <div   v-for="map_row of map" :key="map_row" class="row">
                        <div v-for="cell of map_row" 
                        :key="cell"
                        class="cell"
                        @mousedown.left="clickCell(cell)"
                        @mousedown.right="setFlag(cell)"
                        @contextmenu.prevent
                        :style="{width: (100/width) + '%'}"
                        :class="cellClass(cell, cell.count)"
                        >
                        <div v-if="cell.is_open && !cell.is_mine && cell.val" class="cellCenter"
                        :class="getNumberClass(cell.val)"
                        >
                          {{cell.val}}
                        </div>
                      </div>
                  </div>
              </div>
            </div>
            <div class="def">
              <button class="back" @click="closeHard">Back</button>
            </div>
          </div>
          <div class="game" 
          :class="state"
          v-show="showCustomGame"
          >
          <div class="container" >
            <div class="navbar options">
                          <div>Number of bombs:</div>
                          <div class="mines">
                              <input type="text" v-model="options.mines">
                          </div>
                          <div>Width:</div>
                          <div class="width">
                              <input type="text" v-model="options.width">
                          </div>
                          <div>Height:</div>
                          <div class="height">
                              <input type="text" v-model="options.height">
                          </div>
                          <p class="minesCounter">Mines: {{ mines }}</p>
                          <div class="buttons_custom">
                              <button class="apply" @click="applyOptions">Apply</button>
                              <button class="button" @click="restartGame">Restart</button>
                          </div>
                          
                      </div>
                  <div class="square">
                      <div   v-for="map_row of map" :key="map_row" class="row">
                        <div v-for="cell of map_row" 
                        :key="cell"
                        class="cell"
                        @mousedown.left="clickCell(cell)"
                        @mousedown.right="setFlag(cell)"
                        @mousedown.middle="setQuastion(cell)"
                        @contextmenu.prevent
                        :style="{width: (100/width) + '%'}"
                        :class="cellClass(cell, cell.count)"
                        >
                        <div v-if="cell.is_open && !cell.is_mine && cell.val" class="cellCenter"
                        :class="getNumberClass(cell.val)"
                        >
                          {{cell.val}}
                        </div>
                      </div>
                  </div>
              </div>
            </div>
            <div class="def">
              <button class="back" @click="closeCustom">Back</button>
            </div>

          </div>
    </div>
    <router-view></router-view>
  </template>
  
  <script>
  class Game{
      constructor(x ,y){
          this.x = x;
          this.y = y;
          this.val = 0;
          this.is_mine = false;
          this.is_open  = false;
          this.flag = false;
      }
  }
  
    export default{
      data: function(){
          return {
  
              mines: 10,
              width: 0,
              height: 0,
              map: [],
              options:{
                  width: 0,
                  height: 0,
                  mines:  10,
              },
              state: "init",
              // state: "lost",
              cells_opened: 0,
              flag_count: 0,
              flags: 0,
              diff: "",
              
          
              showChooseCom: true,
              showPlayEasy: false,
              showPlayNormal: false,
              showPlayHard: false,
              showPlayCustom: false,
              showEasyGame: false,
              showNormalGame: false,
              showHardGame: false,
              showCustomGame: false,
              intervalId: null,
  
              minutes: 0,
              seconds: 0,
              timerRunning: false,
              timer: null,
  
  
          }
      },
     
      computed:{
          cells_closed(){
              return this.width * this.height - this.cells_opened;
          },
          

      },
      
      created(){
          this.applyOptions();
      },
     methods: {
      updateParentData(newData) {
             this.showChooseCom = newData;
      },
      closeEasy(){
        this.showEasyGame = false;
        this.showChooseCom = true;
      },
      closeCustom(){
        this.showCustomGame = false;
        this.showChooseCom = true;
      },
      closeHard(){
        this.showHardGame = false;
        this.showChooseCom = true;
      },
      closeNormal(){
        this.showNormalGame = false;
        this.showChooseCom = true;
      },
      openComplexity(){
          this.showChooseCom = true;
          this.showMain = false;
      },
      openEasyGame(){
          this.flags = 3;
          this.width = 8;
          this.height = 8;
          this.mines = 3;
          this.minutes = 10;
          this.seconds = 0;
          this.resetGame();
          this.showEasyGame = true;
          this.showChooseCom = false;

      },
      openNormalGame(){
          this.width = 16;
          this.height = 16;
          this.mines = 40;
          this.minutes = 40;
          this.seconds = 0;
          this.resetGame();
          this.showNormalGame = true;
          this.showChooseCom = false;
      },
      openHardGame(){
          this.width = 32;
          this.height = 16;
          this.mines = 60;
          this.minutes = 100;
          this.seconds = 0;
          this.resetGame();
          this.showHardGame = true;
          this.showChooseCom = false;
      },
      openCustomGame(){
          this.resetGame();
          this.showCustomGame = true;
          this.showChooseCom = false;
      },
    
      goToBack(){
          this.showMain = true;
          this.showChooseCom = false;
      },
      applyOptions(){
          for(let opt in this.options)
              this[opt] = this.options[opt];
              this.resetGame();
      },
      resetGame(){
          this.flag_count = 0;
          this.cells_opened = 0;
          this.state = 'init';
          this.clearSquare();
         
         
      },
      clearSquare(){
          this.map = [];
          for(let y = 0; y < this.height; y++){
                  this.map.push([]);
              for(let x = 0; x < this.width; x++){
                  this.map[y].push(new Game(x, y));
              }
          }
  
      },
      restartGameEasy(){
        this.state = "init";
          this.flags = 3;
          this.width = 8;
          this.height = 8;
          this.mines = 3;
          this.minutes = 10;
          this.seconds = 0;
        this.resetGame();
        this.startTimer();
      },
      restartGameNormal(){
        this.width = 16;
          this.height = 16;
          this.mines = 40;
          this.minutes = 40;
          this.seconds = 0;
          this.resetGame();
          this.showNormalGame = true;
          this.showChooseCom = false;
        this.resetGame();
        this.startTimer();
      },
      restartGameHard(){
        this.width = 32;
          this.height = 16;
          this.mines = 60;
          this.minutes = 100;
          this.seconds = 0;
          this.resetGame();
          this.showHardGame = true;
          this.showChooseCom = false;
        this.resetGame();
        this.startTimer();
      },
    
      pushMines(except_cell){
          const cells_num = this.width * this.height;
          const except_n = except_cell.y * this.width + except_cell.x;
          for(let i = 0; i < this.mines; ++i)
              if(i !== except_n)
                   this.cellLine(i).is_mine = true;
  
                  for ( let i = 0; i < cells_num - 1; ++i){
                      if(i !== except_n){
                          const exception = i < except_n;
                          let target = i +
                          Math.floor(
                            Math.random() * (cells_num - i)
                              + (exception ? -1 : 0)
                            );
                        if (exception && target >= except_n)
                              target++;
                        const cellN = this.cellLine(i);
                        const cellTarget = this.cellLine(target);
    
                        const val = cellN.is_mine;
                        cellN.is_mine = cellTarget.is_mine;
                        cellTarget.is_mine = val;
    
                      }
                  }
      },
      cellLine(i){
          return this.cell(i % this.width, Math.floor(i/this.width));
      },
      cell(x, y){
          return (x >= 0 && y >= 0 && x < this.width && y < this.height)
            ? this.map[y][x]
            : null;
      },
      lostGame(){
          this.state = "lost";
          this.openAllCells();
          this.stopTimer();
      },
    
      saveResult() {
         const result = {
         score: this.seconds,
      };
      this.$store.dispatch("saveResult", result);
    },
      winGame(){
          this.state = "win";
          this.openAllCells();
          this.stopTimer();
          this.saveResult();
      },
     
      openAllCells(){
          for (let y = 0; y < this.map.length; ++y)
             for (let x = 0; x < this.map[y].length; ++x){
              let cell = this.cell(x,y);
              this.setCellOpen(cell)
              if (!cell.is_mine){
                  cell.val = this.countMinesAround(cell);
              }
          }
      },
      countMinesAround(cell){
          return this.countCellAround(cell, friend => friend.is_mine)
      },
      countCellAround(cell, filter){
          let num = 0;
          this.searhAround(cell,
               friend => num += filter(friend) ? 1 : 0
          );
          return num;
      },
  
      searhAround(cell, callback){
          let friend;
  
          for (let dx = -1; dx < 2; ++dx)
               for (let dy = -1; dy < 2; ++dy){
                   if((dx || dy) && (friend = this.cell(cell.x+dx, cell.y+dy)))
                       callback(friend);
              }
  
      },
    
      clickCell(cell){
        this.saveResult()
        
          this.init(cell);
          if(this.state === "play" && !cell.is_open){
              if (cell.is_mine){
                  this.lostGame();
              } else {
                  try{
                      this.openCell(cell);
                      if(parseInt(this.cells_closed) === parseInt(this.mines)){
                          this.winGame();
                      }
                  }
                  catch(e){
                      this.lostGame();
                  }
                  
              }
          }
      },
      setFlag(cell){
          this.init(cell);
          if(this.state === "play"){
              if(!cell.is_open){
                  this.setCellFlag(cell, !cell.flag);
              }
          }
      },
      setCellFlag(cell, flag){
     
          if(flag !== cell.flag){
               cell.flag = flag;  
               this.flag_count += flag ? 1 : -1;
               this.mines += flag ? -1 : 1;
          }
        },
          
      setQuastion(cell, quasiton){
            cell.quasiton = quasiton
            quasiton ? 1 : -1
          },
      openCell(cell){
          if (cell && !cell.is_open){
              this.setCellOpen(cell);
              if(cell.is_mine){
                  throw "Boom"
              }
              if(cell.val === 0){
                  this.searhAround(cell,
                       friend => this.openCell((friend))
                  )
              }
          }
      },
      getNumberClass(val) {
          return {
            blue: val === 1,
            green: val === 2,
            red: val === 3,
            darkBlue: val === 4,
            brown: val === 5,
            turquoise: val === 6,
            black: val === 7,
            white: val === 8,
          }
      },
      setCellOpen(cell){
          if(!cell.is_open){
               cell.is_open = true; 
               this.cells_opened++;
               this.setCellFlag(cell, false);
               if(!cell.is_mine){
                   cell.val = this.countMinesAround(cell);
                  }
          }
      },
      init(cell){
          if (this.state === "init"){
              this.state = "play";
              this.startTimer();
              this.pushMines(cell);
          }
      },
       cellClass(cell){
              return cell.is_open 
             ? ([cell.is_mine ? "mine" : "digit-" + cell.val ])
             : ["closed", cell.flag ? "flag" : "quasiton" ];
      },
        startTimer(){
          if (this.state === "play"){
            this.timerRunning = true;
              this.intervalId = setInterval(() => {
                if (this.seconds > 0) {
                  this.seconds--;
                } else {
                  if (this.minutes > 0) {
                    this.minutes--;
                    this.seconds = 59;
                  } else {
                    clearInterval(this.intervalId);
                    this.timerRunning = false;
                  }
                }
          }, 1000)}
          },
      stopTimer() {
          clearInterval(this.intervalId);
          this.timerRunning = false;
        }
    }
}
  </script>
  
  <style>
    *{
      margin: 0;
      padding: 0;
  }
  @media (max-width: 500px)  {
    .buttons_custom{
      position: absolute;
      margin-top: 23px;
      margin-left: 130px;
    }
   
  }
  .complexity__back:visited{
   color: black;
   text-decoration: none;
 }
  .container{
      max-width: 1080px;
      margin: 0 auto;
  }
  .game{
      border: 1px solid antiquewhite;
      border-radius: 20px;
      max-width: 1080px;
      margin: 0 auto;
      max-width: auto;
      background-color: antiquewhite;
      height: 200px;
  }
  .navbar{
      display: flex;
      justify-content: space-between;
      padding: 10px 15px;
      font-size: 20px;
  }
 
  .title{
      text-align: center;
      font-size: 25px;
      margin-bottom: 25px;
  }
  .navbar .buttons{
      min-width: 70px;
      min-height: 15px;
  }
  
  .navbar .options{
      font-size: 15px;
      margin-top: 10px;
  }
  .square{
      margin-top: 15px;
     background-color: rgb(248, 241, 241);
     border: 2px solid wheat;
  }
  .navbar input{
     width: 40px;
     text-align: center;
  }
  .cell{
      box-sizing: border-box;
      text-align: center;
      border: 1px solid pink;
      position: relative;
      cursor: pointer;
      background-position: center;
      background-repeat: no-repeat;
      background-size: 100%;
      transition: 0.2;
      font-weight: bold;
  }
  .row{
      display: flex;
  
  }
  .cell::after{
      content: "";
      display: block;
      padding-bottom: 100%;
  }
  .cellCenter{
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
  }
  .fall{
      background: red;
  }
  .cell.mine{
    background-image: url(../image/mine.png);
  }
  
  .cell.closed{
      background-color: rgb(197, 190, 190);
      box-shadow: inset  -1px 1px rgb(197, 190, 190);
  }
  .cell.flag{
      background-image: url(../image/flag.png);
  }

  .cell.closed:hover{
      background-color: pink;
  }
  .blue {
      color: blue;
    }
    
    .green {
      color: green;
    }
    
    .red {
      color: red;
    }
    
    .darkBlue {
      color: darkblue;
    }
    
    .brown {
      color: brown;
    }
    
    .turquoise {
      color: turquoise;
    }
    
    .black {
      color: black;
    }
    
    .white {
      color: white;
    }
    
    .menu__choose{
      margin-top: 1cm;
      height: 770px;
      width: 100%;
     
    }
    .menu__buttons{ 
      height: 400px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items:center;
    }
    .menu__play{
      font-family: Arial, Helvetica, sans-serif;
      cursor: pointer;
      margin-top: 60%;
      text-align: center;
      font-size: 45px;
      border: 1px solid gray;
      width: 450px;
  
    }
    .menu__leader{
      font-family: Arial, Helvetica, sans-serif;
      cursor: pointer;
      margin-top: 5%;
      text-align: center;
      font-size: 45px;
      border: 1px solid gray;
      width: 450px;
    }
    .complexity__choose{
      margin-top: 1cm;
      height: 770px;
      width: 100%;
     
    }
    .complexity__buttons{ 
      height: 400px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items:center;
    }
    .complexity__easy{
      font-family: Arial, Helvetica, sans-serif;
      cursor: pointer;
      margin-top: 60%;
      text-align: center;
      font-size: 45px;
      border: 1px solid gray;
      width: 450px;
  
    }
    .complexity__back{
      font-family: Arial, Helvetica, sans-serif;
      cursor: pointer;
      margin-top: 15%;
      text-align: center;
      font-size: 45px;
      border: 1px solid gray;
      width: 450px;
    }
    .complexity__normal{
      font-family: Arial, Helvetica, sans-serif;
      cursor: pointer;
      margin-top: 5%;
      text-align: center;
      font-size: 45px;
      border: 1px solid gray;
      width: 450px;
    }
    .complexity__hard{
      font-family: Arial, Helvetica, sans-serif;
      cursor: pointer;
      margin-top: 5%;
      text-align: center;
      font-size: 45px;
      border: 1px solid gray;
      width: 450px;
    }
    .title{
        font-family: Arial, Helvetica, sans-serif;
        font-size: 45px;
        text-align: center;
        padding: 15px 0px;
    }
    .timer{
    font-size: 45px;
    color: brown;
    display: flex;
    align-items: center;
    }
    .quasiton{
      background-color: blueviolet;
    }
  
    .button{
    position: relative;
    background: rgb(233, 214, 214);
    width: 120px;
    height: 40px;
    border: 1px solid black;
    font-family: Arial, Helvetica, sans-serif;
    cursor: pointer;
    border-radius: 7px;
    font-size: 15px;
    }
   .minesCounter{
    margin-right: 75px;
    color: red;
    font-size: 35px;
   }
   .width{
    font-size: 25px;
   }
   .mines{
    font-size: 25px;
   }
   .height{
    font-size: 25px;
   }
   .back{
    margin-top: 25px;
    font-family: Arial, Helvetica, sans-serif;
    cursor: pointer;
    font-size: 45px;
    border: 1px solid gray;
    width: 450px;
    text-align: center;
   }
   .def{
    display: flex;
    justify-content: center;
   }
   .back:visited{
   color: black;
   text-decoration: none;
   }
   .apply{
    position: relative;
    background: rgb(233, 214, 214);
    width: 120px;
    height: 40px;
    border: 1px solid black;
    font-family: Arial, Helvetica, sans-serif;
    cursor: pointer;
    border-radius: 7px;
    margin-right: 15px;
    font-size: 15px;
   }
  </style>
  