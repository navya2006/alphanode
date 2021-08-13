// FULLPAGE

var myFullpage = new fullpage('#fullpage', {
    navigation: true,
    scrollOverflow: true,
    navigationPosition: 'right',
    navigationTooltips: ['Home', 'About Spaceffic', 'The Problem', 'Our Solution', 'Our Team'],
    css3: false
});

// LOADER
    
var myVar;
function myFunction() {
   myVar = setTimeout(showPage, 7000);
}

function showPage() {
   document.getElementById("load").style.display = "none";
   document.getElementById("mainBod").style.display = "block";
} 