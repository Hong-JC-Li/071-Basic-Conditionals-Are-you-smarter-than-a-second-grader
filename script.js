

// 1. English Section:
$(".englishButton").click(function(){
    var englishInput = $(".english").val();
if (englishInput === "Mon") {

    $(".englishMessage").text("Correct!");
} else {

    $(".englishMessage").text("Wrong! Try again."); 
}});


// 2. Social Studies section
$(".ssButton").click(function(){
    var ssInput = $(".socialStudies").val();
    if (ssInput === "Albany") {
        $(".Message").text("A+");
    } else {
        $(".Message").show();
        $(".Message").text("Try again!");
}
    

    
});


// 3. Math section
$(".mathButton").click(function() {
    var mathInput = $(".math").val();
    mathInput = parseInt(mathInput);
    if (mathInput === 30) {
        $(".p").text("Good work.");
}   else {
        $(".p").text("WRONG!");
    
    // below, we are using the parseInt() function to convert the input value (a string) into a number

}
});


// 4. Science section



$(".button").click(function() {
    var scienceInput = $(".no").val();
    if (scienceInput === "solid") {
        $(".hel").text("you are clever!");
}   else {
    $(".hel").text("Stop it");
}
});
    