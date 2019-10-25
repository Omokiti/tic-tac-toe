let map = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  
  let w;
  
  
  
  function setup() {
    createCanvas(400, 400);
    resetSketch();
    //w = width/3;
    //for (let i = 0; i < 3; i++) {
      //for (let j = 0; j < 3; j++) {
       // rect(i*w,j*w,w,w);
     // }
    //}
    let button = createButton("Reset");
    button.mousePressed(resetSketch);
    
  }
function resetSketch(){
  w = width/3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        rect(i*w,j*w,w,w);
      }
    }
}
  let turn = -1;
  isWinner = false;
  
  function mousePressed(){
    if(isWinner) return;
    let coloum = int(mouseX /w);
    let row= int(mouseY / w);
    turn *= -1;
    if (map[coloum][row] == '' ){
        map[coloum][row] = turn;
        if( turn == 1 ) fill(color(255,0,0));
        if( turn == -1) fill(color(0,0,255));
        rect(coloum * w, row * w,w,w); 
        } else turn *= -1;
        let potentialWinner = checkforWinner();
        if( potentialWinner != 0){
            isWinner = true;
            textSize(32);
            fill(0);
            if(potentialWinner == 1){
              text("Winner is red",width/2-w/2,height/2);
            }
            else{
              text("Winner is blue",width/2-w/2,height/2);
            }
        
        }
  }
  function checkforWinner(){
    for( let i = 0; i < 3; i++){
      let player = map[i][0];
      let found = true;
      if(map[i][1] != player)found = false;
      if(map[i][2] != player)found = false;
       if(found) return player;
    }
    for( let i = 0; i < 3; i++){
     let player = map[0][i];
      let  found = true;
      if(map[1][i] != player)found = false;
      if(map[2][i] != player)found = false;
       if(found) return player;

    }

      let player = map[0][0];
      let found = true;
      if(map[1][1] != player)found = false;
      if(map[2][2] != player)found = false;
      if(found) return player;
       
    
        player = map[2][0];
        found = true;
       if(map[1][1] != player) found = false;
       if(map[0][2] != player) found = false;
       if(found) return player;
        return 0;
    
      }



