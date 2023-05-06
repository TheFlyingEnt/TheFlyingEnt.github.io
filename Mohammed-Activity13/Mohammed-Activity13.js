$(document).ready(function() {
    $.ajax({
        type: "get",
        url: "team.json",
        beforeSend: function() {
            $("#team").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $("#team").html("");
            let jsonArray = data.teammembers;
            jsonArray.forEach(element => {
                $("#team").append(
                    "<h3>" + element.name + "</h3>" + 
                    element.title + "<br>",
                    element.bio + "<br>"
                );
            });
        }
    });
});