(function(){
    var mynode = document.querySelector(".gallery ul");
    mynode.addEventListener("click" ,(event)=>{
       if(event.target.tagName==="IMG"){
           var overlay = document.createElement('div');
           overlay.id="shade";
           document.body.appendChild(overlay);
        // OVERLAY STYLES BEGIN
        overlay.style.position="absolute";
        overlay.style.top=0;
        overlay.style.backgroundColor="rgba(0, 0, 0, 0.294)";
        overlay.style.cursor="pointer"; 
        // RESIZE AND POSITIONING
        overlay.style.width = window.innerWidth + 'px';
        overlay.style.height = window.innerHeight + 'px';
        overlay.style.top = window.pageYOffset + 'px';
        overlay.style.left = window.pageXOffset + 'px';
        // LARGE IMAGE BEGIN 
        var imageSrc = event.target.src;
        var largeImage = document.createElement('img');
        largeImage.id="largeImage";
        largeImage.src= imageSrc; 
        largeImage.style.display="block"; 
        largeImage.style.position="absolute"; 
        largeImage.style.top=0;
        largeImage.style.left="25%";
        largeImage.style.height="100vh";
        largeImage.style.width="50%";  
        document.body.appendChild(largeImage);
        // WAIT UNTIL THE IMAGE IS LOADED
        largeImage.addEventListener("load",()=>{
            if(this.height > window.innerHeight){
                this.ratio=window.innerHeight / this.height;
                this.height = this.height * this.ratio;
                this.width = this.width * this.ratio;
            } 
            // RESIZE IF WIDER
            
            if(this.width>window.innerWidth){
                this.ratio=window.innerWidth / this.width;
                this.height = this.height * this.ratio;
                this.width = this.width * this.ratio;
            } 
            overlay.appendChild(largeImage);
        });
        largeImage.addEventListener('click',()=>{
            if(overlay){
                overlay.parentNode.removeChild(overlay);
            }
        },false)
        window.addEventListener('scroll',()=>{
            if(overlay){
                overlay.style.top= window.pageYOffset + 'px';
                overlay.style.left= window.pageXOffset + 'px';
            }
        },false)
       }
},false);
})();