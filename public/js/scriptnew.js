$(document).ready(function(){

    $("input.buttonf").click(function(){

        name=$("#name").val();
        $("div.welcome-text").text(`Welcome  ${name}...Please Enter Your Login Credentials`);
        $("div.slide").slideDown('slow', function(){
            $("div.slide").css('display', 'inline');

      
    });

});
    var user="admin";
    var pass="12345";
    var count=2;
    $("#username","#password").on("click",function(){
        $("#errormail").slideUp();
    });
    $("#target-form").submit(function(actiononsubmit){
        var usr=$("#username").val();
        var pss=$("#password").val();
        if(usr==user && pss==pass){
            // $("#errormail").text("pass");
            $("#errormail").slideUp();
            count=2;
            window.location.href = "/admin/books";

        }else{
            
            if(count<1){
                $("#username").attr("disabled", "true");
                $("#password").attr("disabled", "true");
                $("button.button-signup").attr("disabled", "true");
                $("#errormail").text("No more chances left..Try after some time");

            }else{
                $("#errormail").text(`You have ${count} more chances left`);
                
            }

            count--;
        }
        actiononsubmit.preventDefault();
    });
});
