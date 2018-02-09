

function p5point(x, y, t){
    noStroke();
    fill(0);
    text(t, x, y);
    ellipse(x, y, 5, 5);
    fill(139,229,234,70);
    ellipse(x, y, 20, 20);
}

function C(x,y){
    this.x = x;
    this.y = y;
    
    this.display = function(){
        p5point(this.x, this.y, '');
    };
    
    this.run =function(){
        this.display();
    };
}

var vertices, button, button2;
function setup() {
  createCanvas(windowWidth, windowHeight);
  vertices = [];
    button = createButton('RESET');
  button.position(19, 19);
  button.mousePressed(game_reset);
  button2 = createButton('UNDO');
  button2.position(19, 40);
  button2.mousePressed(game_undo);
  //button.mousePressed(game_reset);
}

function draw() {
  background(255);
  if(vertices.length > 0){
    for(var i=0; i<vertices.length;i++){
        //console.log(vertices[i]);
      var x = vertices[i][0];
      var y = vertices[i][1];
      p5point(x,y,'');
      if(i+1 < vertices.length){
          var x2 = vertices[i+1][0];
          var y2 = vertices[i+1][1];
          stroke(0);
          line(x,y,x2,y2);
      }
    }   
  }
  
}

function game_reset(){
    vertices = [];
}
function game_undo(){
    if(vertices.length > 0){
        vertices.pop();
    }
}

function mouseClicked() {
    if(mouseY>50){
        vertices.push([mouseX, mouseY]);
    }
  
}
