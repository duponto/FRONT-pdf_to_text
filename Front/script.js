$(document).ready(function() {
    $("#submit").click(async function(){
        if(!isFileAppended()){
            errorMessage = "Nenhum arquivo foi encontrado no campo.";
            changeFieldContent(errorMessage);
            return;
        }
        changeFieldContent("");
        const file = document.getElementById("file").files[0];
        const formData = new FormData();
        formData.append('doc', file);

        const request = await fetch('https://localhost:7557/PDF/ConvertPDF', {
            method: 'POST',
            body: formData
        });
        let returnString;
        if (request.ok) {
            returnString = await request.text();
        } else {
            returnString = await Promise.reject("file not found");
        }
        changeFieldContent(returnString);
    });

    
    $('#file').on('change', function() {
        var fileName = $(this).val().split('\\').pop();
        $('#file_name').text(fileName);
    });

    isFileAppended = () => {
        return !!document.getElementById("file").files[0];
    }
    changeFieldContent = (content) => {
        document.getElementById("response_text").innerHTML = content;
        document.getElementById("response_text").value = content;
    }
});
