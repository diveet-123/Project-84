canvas=document.getElementById("myCanvas");
 ctx=canvas.getContext("2d");
  var car1_width=100;
   var car1_height=100;
    var car1_y=20;
     var car1_x=30;
      var background_image="img racing.jpg";
       var car1="car1.png";

       var car2_width=100;
        var car2_height=100;
         var car2_y=50;
          var car2_x=30;
           var car1="car1.png";

function add(){
    background_img_Tag=new Image();
    background_img_Tag.onload = uploadBackground;
     background_img_Tag.src=background_image;

    car1_img_Tag=new Image();
    car1_img_Tag.onload = uploadcar1;
    car1_img_Tag.src=car1;
    
    car2_img_Tag=new Image();
    car2_img_Tag.onload = uploadcar2;
    car2_img_Tag.src=car2;
}       

function uploadBackground(){
    ctx.drawImage(background_img_Tag, 0 , 0 ,canvas.width,canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_img_Tag, rover_x , rover_y ,rover_width,rover_height);
}
