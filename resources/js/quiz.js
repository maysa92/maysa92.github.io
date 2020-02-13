var counter = 3;
start = document.getElementById('control');
timer = document.getElementById('mytimer');
containerqz.style.display='none';
start.style.display='none';
timer.style.display='none';
start.addEventListener("click", changeState);

setInterval(function(){
  counter--;
  if(counter >=0){
    id = document.getElementById("count");
    id.innerHTML = counter;
    
  }
  if(counter ===0){
    start.style.display='block';
    id.style.display='none';
    timer.style.display='block';
  } 
}, 1000);

  var active = false;
  function starttimer(){
    if(active){
      var innertimer = document.getElementById("mytimer").innerHTML;
      var arr = innertimer.split(":");
      var min = arr[0];
      var sec = arr[1];
      
      if(sec == 59){
        min++;
      if(min < 10)min = "0" + min;
        sec = 0;
      }
      else{
        sec++;
        if(sec < 10)sec = "0" + sec;
      }
    document.getElementById('mytimer').innerHTML = min + ":" + sec;
    setTimeout(starttimer, 1000);
    }
  }

  function changeState(){
    if(active ==false){
      active = true;
      starttimer();
      containerqz.style.display='block';
      start.style.display='none';
    }
  }


(function() 
 {
  var allQuestions = [{
    question: "Who was the first president of the United States?",
    options: ["George Washington", "John Tyler", "William McKinley", "James Madison"],
    answer: 0
  }, {
    question: "Electric bulb filament is made of",
    options: ["Copper", "Alum", "lead", "Tungsten"],
    answer: 3
  }, {
    question: "2000 x 5 - 18 =",
    options: ["9982", "-80", "1982","9822"],
    answer: 0
  },{
    question: "Which of the following is used in Pencils ?",
    options: ["Graphite", "Silicon", "Charcoal", "Bromine"],
    answer: 0
  }, {
    question: "Which is not one of American federal holidays?",
    options: ["Kansas Day", "New Year Day", "Labor Day", "National Day"],
    answer: 0
  },{
    question: "The gas filled in electric bulb is ?",
    options: ["Nitrogen", "Hydro", "Carbon", "Oxygen"],
    answer: 0
  },];
  
  var quesCounter = 0;
  var selectOptions = [];
  var quizSpace = $('#quiz');
    
  nextQuestion();
    
  $('#next').click(function () 
    {
        chooseOption();
        if (isNaN(selectOptions[quesCounter])) 
        {
            alert('Please select an option !');
        } 
        else 
        {
          quesCounter++;
          nextQuestion();
        }
    });
  
  $('#prev').click(function () 
    {
        chooseOption();
        quesCounter--;
        nextQuestion();
    });
  
  function createElement(index) 
    {
        var element = $('<div>',{id: 'question'});
        var header = $('<h2>Question ' + (index + 1) + ' :</h2>');
        element.append(header);

        var question = $('<h2>').append(allQuestions[index].question);
        element.append(question);

        var radio = radioButtons(index);
        element.append(radio);

        return element;
    }
  
  function radioButtons(index) 
    {
        var radioItems = $('<ul>');
        var item;
        var input = '';
        for (var i = 0; i < allQuestions[index].options.length; i++) {
          item = $('<li>');
          input = '<input type="radio" name="answer" value=' + i + ' />';
          input += allQuestions[index].options[i];
          item.append(input);
          radioItems.append(item);
        }
        return radioItems;
  }
  
  function chooseOption() 
    {
        selectOptions[quesCounter] = +$('input[name="answer"]:checked').val();
    }
   
  function nextQuestion() 
    {
        quizSpace.fadeOut(function() 
            {
              $('#question').remove();
              if(quesCounter < allQuestions.length)
                {
                    var nextQuestion = createElement(quesCounter);
                    quizSpace.append(nextQuestion).fadeIn();
                    if (!(isNaN(selectOptions[quesCounter]))) 
                    {
                      $('input[value='+selectOptions[quesCounter]+']').prop('checked', true);
                    }
                    if(quesCounter === 1)
                    {
                      $('#prev').show();
                    } 
                    else if(quesCounter === 0)
                    {
                      $('#prev').hide();
                      $('#next').show();
                    }
                }
              else 
                {
                    var scoreRslt = displayResult();
                    quizSpace.append(scoreRslt).fadeIn();
                    $('#next').hide();
                    $('#prev').hide();
                }
        });
    }
  
  function displayResult() 
    {      
        var score = $('<h2>',{id: 'question'});
        var correct = 0;
        for (var i = 0; i < selectOptions.length; i++) 
        {
          if (selectOptions[i] === allQuestions[i].answer) 
          {
            correct++;
          }
        }
        active = false;
        score.append('Your score: ' + correct + ' out of ' +allQuestions.length+' !');
        return score;
  }
})();