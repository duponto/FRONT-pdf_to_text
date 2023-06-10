$(document).ready(function() {
    $("#submit").click(async function(){
        const file = document.getElementById("file").files[0];
        const formData = new FormData();
        formData.append('file', file);

        const request = await fetch('https://localhost:7055/PDF/ConvertPDF', {
            method: 'POST',
            body: formData
        });
        let returnString;
        if (request.ok) {
            returnString = await request.text();
        } else {
            returnString = await Promise.reject("file not found");
        }
        document.getElementById("response_text").innerHTML = returnString;
    });

    
    $('#file').on('change', function() {
        var fileName = $(this).val().split('\\').pop();
        $('#file_name').text(fileName);
    });
});