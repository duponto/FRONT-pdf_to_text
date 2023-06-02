$(document).ready(function() {
    $("#submit").click(function(){
        $.ajax({
            url: 'https://localhost:7014/PDF/ConvertPDF',
            type: 'POST',
            data: document.getElementById("file").files[0],
            processData: false,
            //contentType: 'application/pdf',
            success: function(response) {
              console.log(response);
            },
            error: function(error) {
              console.log(error);
            }
          });
    });
});