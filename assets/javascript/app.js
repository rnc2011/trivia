$(document).ready(function() {
    //setting the questions, choices and answers into a variable
    var questions = [
    {
    question: "In the year 1900 in the US what was the most popular first names give to boy and girl babies?",
    choices: ["William and Elizabeth", "Joseph and Catherine", "John and Mary", "George and Anne"],
    answer: "John and Mary"},
    {
    question: "When did the Liberty bell get its name?",
    choices: ["when it was made in 1701", "when it rang on July 4 1776", "In the 19th century when it became a symbol of the abolition of slavery", "none of the above"],
    answer: "In the 19th century when it became a symbol of the abolition of slavery"},
    {
    question: "In the Roy Rogers-Dale Evans Museum, you will find Roy and Dale stuffed horses. Roy’s horse was named trigger what was the name of Dales horse?",
    choices: ["Buttermilk", "Daisy", "Scout", "Tulip"],
    answer: "Buttermilk"}
    ];

    $("#strt").click(function() {
        for(var i=0; i<questions.length; i++ ) {
            var quest = questions[i].question;
            $("#questions").append("<p>" + quest + "</p>");

            for(var j=0; j < questions[i].choices.length; j++){
                var ch = (questions[i].choices[j]);
                $("#questions").append(
                "<div class='form-check form-check-inline'>" +
                "<input class='form-check-input' type='radio' name='inlineRadioOptions"+ [i] + "' id='inlineRadio" + [j] + "' value='option" + [j] + "'>" +
                "<label class=‘form-check-label’ for=‘inlineRadio1’>" + ch + "</label></div>")
            }  
        }
        $("#questions").append("<button id='submit'>Submit</button>");

        $("#submit").click(function() {
            for(var k = 0; k < 4; k++){
                var n = document.getElementById('inlineRadio' + [k]);
                if(n.checked==true){
                    console.log(n.value);
                }
                //console.log(n.value);
                //console.log(n);
                //if(document.getElementById("inslineRadio").checked){

                
            }
            //console.log(document.getElementById("").checked);
        })
    
    })



})