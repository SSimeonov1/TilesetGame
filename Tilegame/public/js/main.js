var context, controller, rectangle, loop;

context = document.getElementById("screen").getContext("2d");

let ground = [
  [235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235],
  [235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235],
  [235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235],
  [235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235],
  [235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235],
  [235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235],
  [235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235],
  [235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235],
  [235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235],
  [235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235],
  [235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235],
  [235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235],
  [235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235],
  [235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235],
  [63, 63, 63, 63, 63, 63, 63, 63, 63, 63, 63, 63, 63, 63, 63, 63, 63, 63, 63, 63, 63, 63, 63, 63, 63, 63, 63, 63, 63, 63, 63, 63],
];

let layer1 = [
  [235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235],
  [235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235],
  [235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235],
  [235, 235, 235, 235, 235, 235, 235, 235, 235, 65, 65, 235, 65, 65, 235, 65, 65, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235],
  [235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 65, 65, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235],
  [235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 65, 65, 235, 235, 235, 235, 235, 235, 235, 235, 235],
  [235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 65, 65, 235, 235, 235, 235, 235, 235],
  [235, 235, 235, 235, 235, 235, 65, 65, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 65, 235, 235, 235, 235],
  [235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 65, 65, 65],
  [235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 65, 65, 235, 235, 235],
  [235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 65, 65, 235, 235, 235, 235, 235, 235],
  [235, 235, 235, 235, 65, 65, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 65, 65, 235, 235, 235, 235, 235, 235, 235, 235, 235],
  [235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 65, 65, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235],
  [235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 65, 65, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235, 235],
  [63, 63, 63, 63, 63, 63, 63, 63, 63, 63, 63, 63, 63, 63, 63, 63, 63, 63, 63, 63, 63, 63, 63, 63, 63, 63, 63, 63, 63, 63, 63, 63],
];


let tilesetImage = new Image();
tilesetImage.src = '/image/tiles.png';
tilesetImage.onload = drawImage;
let tileSize = 32;
let rowTileCount = 15;
let colTileCount = 32;
let imageNumTiles = 23;

function drawImage() {
  for (let r = 0; r < rowTileCount; r++) {
    for (let c = 0; c < colTileCount; c++) {
      let tile = ground[r][c];

      let tileRow = (tile / imageNumTiles) | 0;
      let tileCol = (tile % imageNumTiles) | 0;
      context.drawImage(tilesetImage, (tileCol * tileSize), (tileRow * tileSize), tileSize, tileSize, (c * tileSize), (r * tileSize), tileSize, tileSize);

      tile = layer1[r][c];
      tileRow = (tile / imageNumTiles) | 0;
      tileCol = (tile % imageNumTiles) | 0;
      context.drawImage(tilesetImage, (tileCol * tileSize), (tileRow * tileSize), tileSize, tileSize, (c * tileSize), (r * tileSize), tileSize, tileSize);

    }
  }
}




rectangle = {

  height: 32,
  jumping: true,
  width: 32,
  x: 80, // center of the canvas
  x_velocity: 0,
  y: 0,
  y_velocity: 0

};

controller = {

  left: false,
  right: false,
  up: false,
  keyListener: function (event) {

    var key_state = (event.type == "keydown") ? true : false;

    switch (event.keyCode) {

      case 37:// left key
        controller.left = key_state;
        break;
      case 38:// up key
        controller.up = key_state;
        break;
      case 39:// right key
        controller.right = key_state;
        break;

    }

  }

};

loop = function () {

  if (controller.up && rectangle.jumping == false) {

    rectangle.y_velocity -= 20;
    rectangle.jumping = true;

  }

  if (controller.left) {

    rectangle.x_velocity -= 0.5;

  }

  if (controller.right) {

    rectangle.x_velocity += 0.5;

  }

  rectangle.y_velocity += 1.0;// gravity
  rectangle.x += rectangle.x_velocity;
  rectangle.y += rectangle.y_velocity;
  rectangle.x_velocity *= 0.9;// friction
  rectangle.y_velocity *= 0.9;// friction

  // if rectangle is falling below floor line
  if (rectangle.y > 480 - 32 * 2) {

    rectangle.jumping = false;
    rectangle.y = 480 - 32 * 2;
    rectangle.y_velocity = 0;

  } else {                                                           
     for (let i = 0; i < blocks.length; i++) {                    
        if (rectangle.y > 32*(blocks[i].row-1)-5 && (rectangle.y < 32*(blocks[i].row-1)+2) && ((rectangle.x < 32*(blocks[i].col+1)-2) && (rectangle.x > 32*(blocks[i].col-1)+2))) {
          rectangle.jumping = false;
          rectangle.y = 32*(blocks[i].row-1);
          rectangle.y_velocity = 0;
           } else if (rectangle.y > 32*(blocks[i].row-1)-2 && (rectangle.y < 32*(blocks[i].row+1)+1) && ((rectangle.x < 32*(blocks[i].col+1)-2) && (rectangle.x > 32*(blocks[i].col-1)+2)))  {
          rectangle.y = 32*(blocks[i].row+1);
          rectangle.y_velocity = 0;
        }
     }   
    }                                       
  


  // if rectangle is going off the left of the screen
  if (rectangle.x <= 0) {

    rectangle.x = 0;

  } else if (rectangle.x >= 1024 - 32) {                                               // if rectangle goes past right boundary

    rectangle.x = 1024 - 32;

  } else {
    for (let i = 0; i < blocks.length; i++) {  
      if (((rectangle.x > 32*(blocks[i].col+1)) && (rectangle.x < 32*(blocks[i].col+1)+7))  && rectangle.y >= 32*blocks[i].row + rectangle.y_velocity && rectangle.y < 32*(blocks[i].row+1) + rectangle.y_velocity) {
        rectangle.x = 32*(blocks[i].col+1);
        // rectangle.x_velocity = 0;                          // To Stop From Right Side
       break;
      } else if (((rectangle.x > 32*(blocks[i].col-1)-7) && (rectangle.x < 32*(blocks[i].col-1)))  && rectangle.y >= 32*blocks[i].row + rectangle.y_velocity && rectangle.y < 32*(blocks[i].row+1) + rectangle.y_velocity) {
        rectangle.x = 32*(blocks[i].col-1); 
        // rectangle.x_velocity = 0;
                                                          // To stop From Lеft Side
       break;
      }
    }
  }


  drawImage();
  context.fillStyle = "#ff0000";// hex for red
  context.beginPath();
  context.rect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
  context.fill();
  context.strokeStyle = "#202830";
  context.lineWidth = 4;


  // call update when the browser is ready to draw again
  window.requestAnimationFrame(loop);
};

let blocks = [];
let row = 0;
for ( ;row < 15; row++){
let col = 0;
  for ( ;col < 32; col++) {
    if (layer1[row][col] == 65) {
      blocks.push({ row, col })
    }
  }
};

window.addEventListener("keydown", controller.keyListener)
window.addEventListener("keyup", controller.keyListener);
window.requestAnimationFrame(loop);