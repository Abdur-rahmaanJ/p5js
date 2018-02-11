

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
    this.xs = 1;
    this.y = y;
    this.ys = 1;
    this.h = [];
    
    this.display = function(){
        if(this.h.length > 100){
            this.h.splice(0,1);
        }
        for(var i=0;i<this.h.length;i++){
            var c = this.h[i];
            p5point(c[0],c[1],"");
        }
        p5point(this.x, this.y, '');
    };
    
    this.move = function(){
        this.x += this.xs;
        this.y += this.ys;
        this.h.push([this.x, this.y]);
        if(this.x<20||this.x>200){
            this.xs*=-1;
        }
        if(this.y<20||this.y>200){
            this.ys*=-1;
        }
    }
    
    this.run =function(){
        this.move();
        this.display();
    };
}

var x;
function setup() {
  createCanvas(windowWidth, windowHeight);
  x = new C(random(0,100),random(0,200));
}

function draw() {
  background(255);
  x.run();
}

