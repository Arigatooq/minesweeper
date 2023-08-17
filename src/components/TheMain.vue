<template>
    <div class="menu">
                 <div class="container">
                     <div class="menu__choose">
                         <div class="menu__buttons">
                           <router-link to="/game" class="menu__play">Game options</router-link>
                           <router-link to="/leaderboard" class="menu__leader_board">Leader board</router-link>
                     </div>
                 </div>
             </div>
         </div>
         <router-view></router-view>
 </template>
 
 <script>
 
   export default {
  
   methods: {
    
   }
 };
 </script>
   
 <style>
 *{
   text-decoration: none;
 }
 .menu__play:visited{
   color: black;
   text-decoration: none;
 }
 .menu__leader_board:visited{
   color: black;
   text-decoration: none;
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
     .menu__leader_board{
       margin-top: 1cm;
       height: 770px;
       width: 100%;
      
     }
     .menu__leader_board{ 
       height: 400px;
       display: flex;
       flex-direction: column;
       justify-content: space-around;
       align-items:center;
     }
     .menu__leader_board{
       font-family: Arial, Helvetica, sans-serif;
       cursor: pointer;
       margin-top: 60%;
       text-align: center;
       font-size: 45px;
       border: 1px solid gray;
       width: 450px;
   
     }
     .menu__leader_board{
       font-family: Arial, Helvetica, sans-serif;
       cursor: pointer;
       margin-top: 5%;
       text-align: center;
       font-size: 45px;
       border: 1px solid gray;
       width: 450px;
     }
 </style>