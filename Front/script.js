$(document).ready(function() {
    $("#submit").click(async function(){
        const file = document.getElementById("file").files[0];
        const formData = new FormData();
        formData.append('file', file);

        const request = await fetch('https://localhost:7014/PDF/ConvertPDF', {
            method: 'POST',
            body: formData
        });

        if (request.ok) {
            const returnString = await request.text(); // Get JSON value from the response body
            console.log(Promise.resolve(returnString));
        } else {
            console.log(Promise.reject("file not found"));
        }
    });
});