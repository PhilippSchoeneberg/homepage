var main = document.getElementById("main0");
var footer = document.getElementById("footer0");

if(window.innerWidth < 800){
    main.id = "main1";
    footer.id = "footer1"
}
else{
    main.id = "main0";
    footer.id = "footer0"
}