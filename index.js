// FULLPAGE

var myFullpage = new fullpage('#fullpage', {
    navigation: true,
    scrollOverflow: true,
    navigationPosition: 'right',
    navigationTooltips: ['Home', 'About Spaceffic', 'The Problem', 'Our Solution', 'Teaser','Our Team'],
    css3: false
});

// LOADER
    
var myVar;
function myFunction() {
   myVar = setTimeout(showPage, 6000);
}

function showPage() {
   document.getElementById("load").style.transform = "translateY(-200vh)";
} 