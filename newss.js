$(document).ready(function(){
    
        
        $.ajax({
            type:"GET",
            url:" https://newsapi.org/v2/top-headlines?country=in&category=&apiKey=9a0c9c59c6924616a49779ffe081d1b4",
            
            success:function(news){
               
                var nws=news['articles'];
              
                var output=" "
            
               for(i in nws)
               {
              
                    output+="<div class='col col-12 col-sm-4'>"
                  output+="<div class='card' style='width:18rem'>";
                  output+="<img class='card-img-top' src='"+nws[i].urlToImage+"'width:'50px' height:'200px'>";
                    output+="<div class='card-body'>";
                    output+="<h4 class='card-title'>"+nws[i].title+"</h4>";
                    output+="<p class='card-text'>"+nws[i].description+"</p>";
                    output+="<a href="+nws[i].url+" class='btn btn-primary'>readmore</a>  </div></div>";
                  output+="<div></div></div>";
                 
                
               }
               $("#d1").html(output);
            }
        });
    });
   
