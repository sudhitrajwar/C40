class Game{
    constructor(){

    }

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("vale", function(data){
            gameState = data.val();
        })
    }

    update(state){
        database.ref('/').update({
            gameState: state
        });
    }

    async start(){
        if(gameState === 0){
            player = new Player();
            var playerCountRef = await database.ref('playerCount')
            if(playerCount.exists()){
                playerCount = playerCount.val();
                player.getCount();
            }
            form = new Form()
            form.display();
        }

        runner1 = createSprite(100, 200);
        runner2 = createSprite(300, 200);
        runner3 = createSprite(500, 200);
        runner4 = createSprite(700, 200);

        runners = [runner1, runner2, runner3, runner4];
    }

    play(){
        form.hide();

        Player.getInfo();
        player.runnerRank();

        if(allPlayers !== undefined){
            background(rgb(200, 130, 100))

            //image

            var index = 0;

            var x = 175;
            var y;

            for(var run in allPlayers){
                index += 1;

                x += 200;

                y = displayHeight - allPlayers[run].distance;
                runners[index-1].x = x;
                runners[index-1].x = y;

                if (index === player.index){
                    stroke(10);
                    fill("red");
                    ellipse(x,y,60,60);
                    runners[index - 1].shapeColor = "red";
                    camera.position.x = displayWidth/2;
                    camera.position.y = runners[index-1].y;
                  }
                 
                  //textSize(15);
                  //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
                }
          
              }
          
              if(keyIsDown(UP_ARROW) && player.index !== null){
                player.distance +=10
                player.update();
              }
          
              if(player.distance > 3860){
                gameState = 2;
                player.rank +=1
                Player.updateCarsAtEnd(player.rank)
              }
             
              drawSprites();
            }
          
            end(){
              console.log("Game Ended");
              console.log(player.rank);
            }


    }