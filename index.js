var mcqsMarks = 0;

function mcqs1(){

    var q1 = document.getElementsByName("mcqs1");
    for(var i = 0 ; i < q1.length ; i++){
        if(q1[i].checked){
            if(q1[i].value === "d"){
                mcqsMarks++ ;
                alert("your answer is correct");
            }
            else{
                alert("your answer is incorrect, please try again letter");
            }
            break;
        }
    }

}

function mcqs2(){

    var q2 = document.getElementsByName("mcqs2");
    for(var i = 0 ; i < q2.length ; i++){
        if(q2[i].checked){
            if(q2[i].value === "a"){
                mcqsMarks++ ;
                alert("your answer is correct");
            }
            else{
                alert("your answer is incorrect, please try again letter");
            }
            break;
        }
    }

}

function mcqs3(){

    var q3 = document.getElementsByName("mcqs3");
    for(var i = 0 ; i < q3.length ; i++){
        if(q3[i].checked){
            if(q3[i].value === "d"){
                mcqsMarks++ ;
                alert("your answer is correct");
            }
            else{
                alert("your answer is incorrect, please try again letter");
            }
            break;
        }
    }

}

function mcqs4(){

    var q4 = document.getElementsByName("mcqs4");
    for(var i = 0 ; i < q4.length ; i++){
        if(q4[i].checked){
            if(q4[i].value === "a"){
                mcqsMarks++ ;
                alert("your answer is correct");
            }
            else{
                alert("your answer is incorrect, please try again letter");
            }
            break;
        }
    }

}

function mcqs5(){

    var q5 = document.getElementsByName("mcqs5");
    for(var i = 0 ; i < q5.length ; i++){
        if(q5[i].checked){
            if(q5[i].value === "a"){
                mcqsMarks++ ;
                alert("your answer is correct");
            }
            else{
                alert("your answer is incorrect, please try again letter");
            }
            break;
        }
    }

}


function result(){
    var result = document.createElement("h3");
    var resultNode = document.createTextNode("Your Result:");
    result.appendChild(resultNode);
    var marks = document.createElement("p");
    var marksNode = document.createTextNode(mcqsMarks);
    marks.appendChild(marksNode);
    var resultDiv = document.getElementById("result");
    resultDiv.appendChild(result);
    resultDiv.appendChild(marks);
}



function q2Dispaly(){
    var ques2 = document.getElementById("q2hide").style.display = "block";
  
  }

  function q3Dispaly(){
    var ques3 = document.getElementById("q3hide").style.display = "block";
 
  }

  function q4Dispaly(){
    var ques4 = document.getElementById("q4hide").style.display = "block";

  }

  function q5Dispaly(){
    var ques5 = document.getElementById("q5hide").style.display = "block";

  }