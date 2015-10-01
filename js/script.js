$('#myTab a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
})

$('#myTab a[href="#profile"]').tab('show') // Select tab by name
$('#myTab a:first').tab('show') // Select first tab
$('#myTab a:last').tab('show') // Select last tab
$('#myTab li:eq(2) a').tab('show') // Select third tab (0-indexed)



function doLightbox(type){ 
    if(type == "sign-up"){
        //close login if opened
        $('#login').trigger('close');
        //does sign up lightbox
        $('#sign_up').lightbox_me({
            centered: true, 
            onLoad: function() { 
                $('#sign_up').find('input:first').focus()
            }
        });
    }
    else if(type == "login"){ 
        // does login light box
        $('#login').lightbox_me({
            centered: true, 
            onLoad: function() { 
                $('#login').find('input:first').focus()
            }
        });
    }

}

function textExpand(){
    $('#txt').animate({
        height: 120
        }, 1000);
} 

function textContract(){
    $('#txt').animate({
        height: 48
        }, 1000);

}

function submitOnEnter(){
    $('form > textarea').on('keydown', function(e){
        if (e.keyCode == 13) {
            // do whatever you want to do, for example submit form
            if (!event.shiftKey)$(this).parent('form').trigger('submit');
        }
    });
}
 ///////////////////////////////////////////////////////////////////////

 $('form > textarea').on('keydown',function(e){
        if (e.keyCode == 13) {
            var post =  $('#txt').val();
            
        }
     
 });

