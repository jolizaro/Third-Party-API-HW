$(function(){
    var currentDate = moment().format("dddd,MMMM Do");
    $("#currentDay").text (currentDate)
    colorCode();
    console.log("random text")
    function colorCode(){
        $(".hour").each(function(){
            var hour= $(".hour").text();
            hour= $.trim(hour)
            hour = hour.slice(0,1)
            var currentTime = moment();
            
            
            if (hour === "9"){ 
                
                if(9 === currentTime.hour()){
                    console.log("present");
                    $(this).parent().addClass("row time-block present")

                }else if(9 < currentTime.hour()){
                console.log("past");
                    $(this).parent().addClass("row time-block past")

                }else if(9 > currentTime.hour()){
                    console.log("future");
                    $(this).parent().addClass("row time-block future")

                }
            }else if (hour === "10"){ 
                
                if(10 === currentTime.hour()){
                    console.log("present");
                    $(this).parent().addClass("row time-block present")

                }else if(10 < currentTime.hour()){
                console.log("past");
                    $(this).parent().addClass("row time-block past")

                }else if(10 > currentTime.hour()){
                    console.log("future");
                    $(this).parent().addClass("row time-block future")

                }
            }else if (hour === "11"){ 
                
                if(11 === currentTime.hour()){
                    console.log("present");
                    $(this).parent().addClass("row time-block present")

                }else if(11 < currentTime.hour()){
                console.log("past");
                    $(this).parent().addClass("row time-block past")

                }else if(11 > currentTime.hour()){
                    console.log("future");
                    $(this).parent().addClass("row time-block future")

                }
            }else if (hour === "12"){ 
                
                if(12 === currentTime.hour()){
                    console.log("present");
                    $(this).parent().addClass("row time-block present")

                }else if(12 < currentTime.hour()){
                console.log("past");
                    $(this).parent().addClass("row time-block past")

                }else if(12 > currentTime.hour()){
                    console.log("future");
                    $(this).parent().addClass("row time-block future")

                }
            }else if (hour === "1"){ 
                
                if(13 === currentTime.hour()){
                    console.log("present");
                    $(this).parent().addClass("row time-block present")

                }else if(13 < currentTime.hour()){
                console.log("past");
                    $(this).parent().addClass("row time-block past")

                }else if(13 > currentTime.hour()){
                    console.log("future");
                    $(this).parent().addClass("row time-block future")

                }
            }else if (hour === "2"){ 
                
                if(14 === currentTime.hour()){
                    console.log("present");
                    $(this).parent().addClass("row time-block present")

                }else if(14 < currentTime.hour()){
                console.log("past");
                    $(this).parent().addClass("row time-block past")

                }else if(14 > currentTime.hour()){
                    console.log("future");
                    $(this).parent().addClass("row time-block future")

                }
            }else if (hour === "3"){ 
                
                if(15 === currentTime.hour()){
                    console.log("present");
                    $(this).parent().addClass("row time-block present")

                }else if(15 < currentTime.hour()){
                console.log("past");
                    $(this).parent().addClass("row time-block past")

                }else if(15 > currentTime.hour()){
                    console.log("future");
                    $(this).parent().addClass("row time-block future")

                }
            }else if (hour === "4"){ 
                
                if(16 === currentTime.hour()){
                    console.log("present");
                    $(this).parent().addClass("row time-block present")

                }else if(16 < currentTime.hour()){
                console.log("past");
                    $(this).parent().addClass("row time-block past")

                }else if(16 > currentTime.hour()){
                    console.log("future");
                    $(this).parent().addClass("row time-block future")

                }
            }else if (hour === "5"){ 
                console.log("5")
                if(17 === currentTime.hour()){
                    console.log("present");
                    $(this).parent().addClass("row time-block present")

                }else if(17 < currentTime.hour()){
                console.log("past");
                    $(this).parent().addClass("row time-block past")

                }else if(17 > currentTime.hour()){
                    console.log("future");
                    $(this).parent().addClass("row time-block future")

                }
            }
            
        })
    }
})