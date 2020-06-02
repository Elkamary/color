// $("body").css("background", $("body").localStorage.getItem('customColor'))

    //  $("h2").click(function(){
    //     //  "use strict";
    //     $(this).css("color","red")
    // });
    // Function to change webpage background color
    function changeCor(color){
        document.body.style.background = color;
    }
    
    // Function to change heading background color
    // $(".head").click(function(){
    //     $(".head").css('background-color', 'red');
    //          var status = $(".head");
    //          localStorage.setItem(".head", status);
    //      });
    //      var  test= localStorage.setItem(".head", status);
    // localStorage.setItem("pagecolor", $(".test").getAttribute("data-color"))
    // console.log(status);
    // $(".head").on("click", function (){
    //     $(this).css("background",'red');
    // });
   
    

    var color_elements_background = ".nodeList .categoryStrip, .breadcrumb";

    var color_elements_text = "a:link, a:visited";
    
    $(".colorPicker span").on("click", function()
    {
        // $("body").css("background", $(this).attr("custom_color"));


        var customColor = $(this).attr("custom_color");
        $('body').css("background-color", customColor);
        $("span").next().css("color", customColor);
        localStorage.setItem("body", customColor);
    });

    
    // });
    // (localStorage.bgColor) $('.btn-secondmenu').css('background-color', localStorage.bgColor);