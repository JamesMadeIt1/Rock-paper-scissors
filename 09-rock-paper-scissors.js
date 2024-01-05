
 /* WINDOW Object in JavaScript
      wondow.document
      window.console.log();
      window.alert();
      window.console.warn();
      */

      //Convert numbers to string
     /*(let s = String(50000);
     console.log(s);
     */

     let score = JSON.parse(localStorage.getItem('score')) || {
        wins: 0,
        losses: 0,
        ties: 0
      };

      updateScoreElement();

      /*
      if (!score) {
        score = {
          wins: 0,
          losses: 0,
          ties: 0
        };
      }
      */

      
      function playGame(playerMove) {
        const computerMove = pickComputerMove();

        let result = '';

        if (playerMove === 'scissors') {
          if (computerMove === 'rock') {
            result = 'You lose.';
          } else if (computerMove === 'paper') {
            result = 'You win.';
          } else if (computerMove === 'scissors') {
            result = 'Tie.';
          }

          
        } else if (playerMove === 'paper') {
          if (computerMove === 'rock') {
            result = 'You win.';
          } else if (computerMove === 'paper') {
            result = 'Tie.';
          } else if (computerMove === 'scissors') {
            result = 'You lose.';
          }
          
        } else if (playerMove === 'rock') {
          if (computerMove === 'rock') {
            result = 'Tie.';
          } else if (computerMove === 'paper') {
            result = 'You lose.';
          } else if (computerMove === 'scissors') {
            result = 'You win.';
          }
        }

        if (result === 'You win.') {
          score.wins += 1;
        } else if (result === 'You lose.') {
          score.losses += 1;
        } else if (result === 'Tie.') {
          score.ties += 1;
        }

      localStorage.setItem('score', JSON.stringify(score));

       document.querySelector('.js-result').innerHTML = result ;

        document.querySelector('.js-result').innerHTML = result;

        document.querySelector('.js-moves').innerHTML = `You 
        <img src ="Images/${playerMove}.png"  class="move-button" class ="move-icon"> 
        <img src ="Images/${computerMove}.png" class="move-button" class ="move-icon"> Computer`;
      }

      function updateScoreElement() {
        document.querySelector('.js-score')
          .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
      } 


      function pickComputerMove() {
        const randomNumber = Math.random();

        let computerMove = '';

        if (randomNumber >= 0 && randomNumber < 1 / 3) {
          computerMove = 'rock';
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
          computerMove = 'paper';
        } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
          computerMove = 'scissors';
        }

        return computerMove;
      }
     
        /*invokes or displays the total cost(CalculateTotal() function 
          when you press the key 'Enter'on your keyboard) */     
          /*
           DisplayCostKeydown
          function DisplayCostKeydown(event){
            if (event.key === 'Enter'){CalculateTotal();}
          }
          */

      /*Shipping and cost calculation function
      function CalculateTotal(){
     
          const inputElement = document.querySelector('.js-cost-input');
          let cost = Number(inputElement.value);
          if(cost > 40 && cost <200){
            cost  =  cost ;}
          if(cost < 40){
            cost  =  cost + 10 ;
          }if(cost > 200){

            cost  =  `${cost - 20} .You got a $20 discount !`;
      }
      document.querySelector('.js-total-cost').innerHTML = `Your total cost is $ ${cost}`;
    }
    
      /*Gets HTML <p class = "js-total-cost"> tag ,equals it to 
        the calculation function and displays it on the webpage.


         <input placeholder = "Cost of order"
        class = "js-cost-input"
        onkeydown="DisplayCostKeydown(event);
        ">
        
          <button onclick="
          CalculateTotal();
          ">Calculate</button>

      */
      
