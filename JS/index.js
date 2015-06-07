//RANDOM color goes here!!!
    function getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
            }
        return color;
    }

    //Here I declare variables
     var box = document.getElementById("box");
     var clickedTime;
     var createdTime;
     var reactionTime;
    
    //Create new object
    function newBox(){ 
        
        createdTime = Date.now();
        var time = Math.random();
        time=time*4000;
    
        setTimeout(function(){
         
            if (Math.random()>0.5){
            box.style.borderRadius="50px";
            }
            else{
            box.style.borderRadius="0";
            }
            var top = Math.random();
            top = top*800;
            
            var left = Math.random();
            left = left*1000;
            
            box.style.top=top+"px";
            box.style.left=left+"px";
            box.style.backgroundColor = getRandomColor();
            box.style.display = "block";
            
            createdTime = Date.now();
        },time);
    }
    
    //Make the object dissapear
     function dissappear(){
         
         clickedTime = Date.now();
         
         reactionTime = (clickedTime - createdTime)/1000;
         document.getElementById("time").innerHTML=reactionTime;
         
         box.style.display="none";
         
         newBox();
       }
     box.addEventListener("click",dissappear);
     newBox();