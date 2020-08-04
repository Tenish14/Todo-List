$('label').css('font-size', '1.3rem')
$("i#plus").css("font-size", '1.3rem')
$("i#close").css("font-size", '1.5rem')
$("h5:even").css("backgroundColor", "pink")
$("h5:odd").css("backgroundColor", "skyblue")



$("input").hide()
$("i#close").hide()
$("i#plus").click(function(){
    $("input").toggle();
  })

$("input#task").on('keydown ', function(e){
    if (e.keyCode == 13) {
        e.preventDefault();
         let task = $("input#task").val()
        if (task === "") {
            $(".message").html('<h5 class ="bg-warning text-center text-white py-3">Please fill up the fields</h5>')
            $(".message").show()
            setTimeout(() => { 
                $(".message").hide()
            }, 2000);
            
        } 

        else{
           
           
            $("#todo").append(`<h5 class = "tasks font-italic py-2 px-2 my-0">${task}</h5>`)   
            $("h5:even").css("backgroundColor", "pink")
            $("h5:odd").css("backgroundColor", "skyblue")
            $("input#task").val('')
            $(".message").html('<h5 class ="bg-success text-center text-white py-3">Your task successfully added !</h5>')
            $(".message").show()
            setTimeout(() => { 
                $(".message").hide()
            }, 2000);
        }
    
    }
})

$('#todo').on('click',"h5", function(e) {
    
    console.log($(this).html())

    if(confirm("Are you sure you want to delete this Todo list")) {
        $(e.target).remove()
        $(".message").html('<h5 class ="bg-danger text-center text-white py-3">Your task successfully deleted!</h5>')
        
        setTimeout(() => { 
            $(".message").hide()
        }, 2000);
    } else{
        $(".message").show()
    }
    

})

