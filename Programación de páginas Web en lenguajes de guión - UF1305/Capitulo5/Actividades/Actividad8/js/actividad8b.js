function openWindow(){
  var myWindow = window.open("","","width=150, height=150");
  myWindow.moveTo(Math.random() * 700,Math.random() * 700);
  resizeWindow(myWindow);
}

function resizeWindow(_window){
  var size = 150;
  var asd = setInterval(function(){
    console.log(_window.innerWidth);
    if(_window.innerWidth > 350){
      clearInterval(asd);
      terremoto(_window);
    }
    _window.resizeTo(++size, ++size);

  }, 20);
}

function terremoto(_window){
  var x = Math.random() * 1000;
  var y = Math.random() * 1000;

  var movement = {
    x: Math.random() * 1000,
    y: Math.random() * 1000,
    bol: true
  };
  setInterval(function(){
    _window.moveTo(x, y);

    if(movement.bol){
      _window.moveBy(-movement.x, (-movement.y)*2);
      _window.moveTo(x + 2*(-movement.x), y + (-movement.y));
      movement.x = Math.random() * 10;
      movement.y = Math.random() * 10;
      movement.bol = false;
    }else{
      movement.bol = true;
      _window.moveBy(movement.x, movement.y);
    }
  }, 30);
}
openWindow();
