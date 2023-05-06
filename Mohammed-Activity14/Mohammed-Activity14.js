$(document).ready(function() {
    $('a').click(function() {
        let title = $(this).attr("title");
        $.ajax({
            type: "get",
            url: "./json_files/" + title + ".json",
            beforeSend: function() {
                $("#content").append("Loading Speaker...");
            },
            timeout: 10000,
            error: function(xhr, status, error) {
                alert("Error: " + xhr.status + " - " + error);
            },




            dataType: "json",
            success: function(data) {
                $("#content").html("");
                let jsonObj = data.speakers[0];
                console.log(jsonObj);
                $("#content").append(
                    "<h2>" + jsonObj.month + "</h2>" + 
                    "<h3>" + jsonObj.speaker + "</h3>" + 
                    "<img src='" + jsonObj.image + "' alt='"+ title + "_picture'>" + 
                    "<p>" + jsonObj.text + "</p>"
                );
            }
        });
    });
}); // end ready