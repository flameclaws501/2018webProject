var data18 = "https://api.myjson.com/bins/129zdc";
var data12 = "https://api.myjson.com/bins/s5m34";

$(document).ready(function(){
    $.getJSON(data12, function(data12){
        console.log(data12);

        var output = "";
        for(var idx in data12)
        {
            if(idx % 3 == 0)
                output += "<div class = 'row' id = 'row'>";

            output += "<div class = 'col-sm-4'>" + 
                      "<h4>" + data12[idx].Chinese + "</h4>" +
                      "<h5>" + data12[idx].English + "</h5><br>" +
                      "<a href = 'map/" + data12[idx].Name + ".html'><img src = 'map/Image/main/" + data12[idx].Name + ".png' alt = 'pagePicture' id = 'pic' align = 'middle'></a>" + 
                      "</div>";
            
            if(idx % 3 == 2)
                output += "</div><br><br><br>";
        }

        $('#update').append(output);
    });
});