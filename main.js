var canvas=new fabric.Canvas("myCanvas");
player_x=10;
player_y=10;
blockimagewidth=30;
blockimageheight=30;
var player_object="";
var blockimageobject="";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,left:player_x
        });
        canvas.add(player_object);
    });
}

function new_img(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        blockimageobject=Img;
        blockimageobject.scaleToWidth(blockimagewidth);
        blockimageobject.scaleToHeight(blockimageheight);
        blockimageobject.set({
            top:player_y,left:player_x
        });
        canvas.add(blockimageobject);
    })
}



window.addEventListener("keydown",My_keydown);


function My_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey==true&&keyPressed=="80"){
        console.log("P and Shift pressed together");
        blockimagewidth=blockimagewidth+10;
        blockimageheight=blockimageheight+10;
        document.getElementById("current_width").innerHTML=blockimagewidth;
        document.getElementById("current_height").innerHTML=blockimageheight;
    }
    if(e.shiftKey==true&&keyPressed=="77"){
        console.log("M and Shift pressed together");
        blockimagewidth=blockimagewidth-10;
        blockimageheight=blockimageheight-10;
        document.getElementById("current_width").innerHTML=blockimagewidth;
        document.getElementById("current_height").innerHTML=blockimageheight;
    }
    if(e.shiftKey==true&&keyPressed=="80"){
        console.log("p and Shift pressed together");
        blockimagewidth=blockimagewidth+10;
        blockimageheight=blockimageheight+10;
        document.getElementById("current_width").innerHTML=blockimagewidth;
        document.getElementById("current_height").innerHTML=blockimageheight;
    }
    if(keyPressed=="37"){
        left();
        console.log("left");
    }
    if(keyPressed=="38"){
        up();
        console.log("up");
    }
    if(keyPressed=="39"){
        right();
        console.log("right");
    }
    
    if(keyPressed=="40"){
        down();
        console.log("down");
    }

    if(keyPressed=="87"){
        new_img("W.jpg");
        console.log("W");
    }

    if(keyPressed=="71"){
        new_img("ground.png");
        console.log("G");
    }

    if(keyPressed=="76"){
        new_img("light_green.png");
        console.log("L");
    }

    if(keyPressed=="84"){
        new_img("trunk.jpg");
        console.log("T");
    }
    if(keyPressed=="82"){
        new_img("roof.jpg");
        console.log("R");
    }
    if(keyPressed=="89"){
        new_img("yellow_wall.png");
        console.log("Y");
    }
    if(keyPressed=="68"){
        new_img("dark_green.png");
        console.log("D");
    }
    if(keyPressed=="85"){
        new_img("unique.png");
        console.log("U");
    }

    if(keyPressed=="67"){
        new_img("Cloud.jpg");
        console.log("C");
    }
}

function up(){
    if(player_y>=0){
        player_y=player_y-blockimageheight;
        console.log("blockimageheight="+blockimageheight);
        console.log("when upkey is pressed x="+player_x+"y="+player_y);
        canvas.remove(player_object);player_update();
    }

}

function down(){
    if(player_y<=500){
        player_y=player_y+blockimageheight;
        console.log("blockimageheight="+blockimageheight);
        console.log("when downkey is pressed x="+player_x+"y="+player_y);
        canvas.remove(player_object);player_update();
    }
}


function left(){
    if(player_x>=0){
        player_x=player_x-blockimagewidth;
        console.log("blockimagewidth="+blockimagewidth);
        console.log("when leftkey is pressed x="+player_x+"y="+player_y);
        canvas.remove(player_object);player_update();
    }
    

}


function right(){
    if(player_x<=850){
        player_x=player_x+blockimagewidth;
        console.log("blockimagewidth="+blockimagewidth);
        console.log("when rightkey is pressed x="+player_x+"y="+player_y);
        canvas.remove(player_object);player_update();
    }
    

}