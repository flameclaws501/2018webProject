var data18 = "https://api.myjson.com/bins/129zdc";
var data15 = "https://api.myjson.com/bins/1abeco";

$(document).ready(function(){
    $.getJSON(data15, function(data15){
        console.log(data15);

        var output = "";
        for(var idx in data15)
        {
            if(idx % 3 == 0)
                output += "<div class = 'row' id = 'row'>";

            output += "<div class = 'col-sm-4'>" + 
                      "<h4>" + data15[idx].Chinese + "</h4>" +
                      "<h5>" + data15[idx].English + "</h5><br>" +
                      "<a href = '" + data15[idx].Name + ".html'><img src = 'Image/main/" + data15[idx].Name + ".png' alt = 'pagePicture' id = 'pic' align = 'middle'></a>" + 
                      "</div>";
            
            if(idx % 3 == 2)
                output += "</div><br><br><br>";
        }

        $('#update').append(output);
    });
});