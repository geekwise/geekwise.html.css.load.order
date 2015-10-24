function random_rgb(){
	rgb = new Array();
	
	for(var i=0;i<3;i++){
		rgb.push(Math.round(Math.random()*255))
	};
	
	return String(rgb);
}


document.addEventListener('DOMContentLoaded',function(event){
    


    
    
    
    document.getElementById('box').onclick = function(event){
        
        
        
        this.textContent = random_rgb();
        this.style.backgroundColor = 'rgb('+this.textContent+')';
        
        
    }
        
    
});