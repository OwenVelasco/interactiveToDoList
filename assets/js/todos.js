
$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
})
//Click X to fade out li element 
$("ul").on("click","span",function(event){
   $(this).parent().fadeOut(500,function(){
       //removes li from ul all together 
        $(this).remove();
   });
    //stops event from bubbling up to parent elements
    event.stopPropagation();
})

$("input[type = 'text'").keypress(function(event){
    //checks for enter keypress
    if(event.which === 13){
        //grabbing new to do text from input 
        var toDoText = $(this).val();
        //Changes input text to an empty string 
        $(this).val("");
        //create new li and add to ul
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> "+ toDoText+ "</li>")
    }
})
//Toggles the input[type = 'text' to display
$("#plus").click(function(){
    $("input[type = 'text'").fadeToggle();
})