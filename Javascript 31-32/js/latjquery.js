$( document ).ready(function() {
    console.log( "siap!" );
});

$(function() {

    $("#isi").html("<H1>Belajar Jquery</H1>");

    $("#klik").click(function (e) { 
        e.preventDefault();
        alert("Belajar Javascript")
    });

    $("#isi").mouseleave(function () { 
        alert("mouse leave");
        console.log("mouse");
    });

});
