var currentTime = moment().format('MMMM Do YYYY, h:mm a');

var timeNow = moment().hour();

$("#currentDay").html(currentTime);

$(document).ready(function(){
    $(".saveBtn").on('click', function(){
        var textValue = $(this).siblings(".description").val();
        var timeNow = $(this).parent().attr("id");
        localStorage.setItem(timeNow, textValue);
    });

    $("#8hr .description").val(localStorage.getItem("8hr"));
    $("#9hr .description").val(localStorage.getItem("9hr"));
    $("#10hr .description").val(localStorage.getItem("10hr"));
    $("#11hr .description").val(localStorage.getItem("11hr"));
    $("#12hr .description").val(localStorage.getItem("12hr"));
    $("#13hr .description").val(localStorage.getItem("13hr"));
    $("#14hr .description").val(localStorage.getItem("14hr"));
    $("#15hr .description").val(localStorage.getItem("15hr"));
    $("#16hr .description").val(localStorage.getItem("16hr"));
    $("#17hr .description").val(localStorage.getItem("17hr"));
    
})

$(".time-block").each(function() {
    var hours = parseInt($(this).attr("id"));
    console.log($(this).attr("id"));
    
    if (hours < timeNow) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
    }
    else if (hours === timeNow) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
    }
    else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
    
    }
    console.log(timeNow);
    console.log(hours);
})
