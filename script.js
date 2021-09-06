
  
  


// Document ready handler
$(function(){
  

  let timeInputArray = new Array();
  
  // get a reference to the form for quick access
  for (i=1; i<=2; i++) {
    const $form = $('#form-i');
    const $hours = $('#hours-i');
    const $min = $('#min-i');
    const $sec = $('#sec-i');
    const $btnA = $('#addBtn-i');
    const $btnS = $('#subBtn-i');

    // add event handlers to activate the Bootstrap validation styles
    const validateHrsMin = function(){
      if($hours.is(':valid')){
        $hours.removeClass('is-invalid').addClass('is-valid');
        window.alert("Hours is valid");
      }else{
        $hours.removeClass('is-valid').addClass('is-invalid');
      }
      if($min.is(':valid')){
        $min.removeClass('is-invalid').addClass('is-valid');
      }else{
        $min.removeClass('is-valid').addClass('is-invalid');
      }
      if ($hours.is(':valid') && $min.is(':valid')){
        $('#hr-min-feedback-i').hide();
        return true;
      }
      $('#hr-min-feedback-i').show();
      return false;
    }
    const validateSec = function(){
      if($sec.is(':valid')){
        $sec.removeClass('is-invalid').addClass('is-valid');
      }else{
        $sec.removeClass('is-valid').addClass('is-invalid');
      }
      if ($sec.is(':valid')){
        $('#sec-feedback-i').hide();
        return true;
      }
      $('#sec-feedback-i').show();
      return false;
    }
      
    // add input handler to the times to run validation
    $hours.on('input', validateHrsMin);
    $min.on('input',validateHrsMin);
    $sec.on('input',validateSec);

    // click handlers for add/subtract/moreTime buttons
    $btnA.click(function(){
      window.alert($hours.val())
      timeInputArray[0] = new Array ($hours.val(), $min.val(), $sec.val());
      console.log(timeInputArray);



    });
    $btnS.click(function(){
      window.alert(`You clicked subtract`);
    });
    $('#moreTimes').click(function(){
      window.alert(`You asked for more times`)
    })

  } // end of for loop

  class MyClass{
    // define the constructor — the name is not optional
    constructor(){
      // define and initialise the data attributes here
    }
    // define the instance functions — you choose the names
    nameOfAFunction(){
      
    }
    nameOfAnotherFunction(){
      
    }
  }

}); // End document ready handler