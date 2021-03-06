$(function(){
    var currentDate = moment().format("dddd,MMMM Do");
    $("#currentDay").text (currentDate)
    getLocalStorage()
    colorCode();
    
    function colorCode(){
        $(".hour").each(function(){
            var hour= $(this).text();
            //console.log("hourHtml="+hour)
             hour= $.trim(hour)
           
           //var  hourDigit = hourT.substring(0,1)
            //console.log("hourDigit="+hourDigit)
            var currentTime = moment();
            
            //console.log(currentTime.hour())
            if (hour === "9AM"){ 
                
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
            }else if (hour === "10AM"){ 
                
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
            }else if (hour === "11AM"){ 
                
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
            }else if (hour === "12PM"){ 
                
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
            }else if (hour === "1PM"){ 
                
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
            }else if (hour === "2PM"){ 
                
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
            }else if (hour === "3PM"){ 
                
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
            }else if (hour === "4PM"){ 
                
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
            }else if (hour === "5PM"){ 
                
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
    $(".saveBtn").on("click",function(){
        var timeBlock= $(this).parent().attr("id");
        var description= $(this).parent().children("textarea").val()
        localStorage.setItem(timeBlock, description)
    })
    function getLocalStorage(){
        $(".time-block").each(function(){
            var id=$(this).attr("id")
            var description = localStorage.getItem(id)
            if(description!=null){
                $(this).children("textarea").val(description)
            }
        })
    }
})