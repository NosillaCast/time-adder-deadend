

let timeInputArray = [
  {
    hours: "hours-1",
    min: "min-1",
    sec: "sec-1"
  },
  {
    hours: "hours-2",
    min: "min-2",
    sec: "sec-2"
  }
]

// Document ready handler
$(function(){
  // get a reference to the form for quick access
  const $form = $('#form-1');
  const $hours  = $('#hours-1');
  const $min = $('#min-1');
  const $sec = $('#sec-1');
  const $btn1 = $('#addBtn-1');
  const $btn2 = $('#subBtn-1');

  // add event handlers to activate the Bootstrap validation styles
 
  const validateHrsMin = function(){
    if($hours.is(':valid')){
      $hours.removeClass('is-invalid').addClass('is-valid');
    }else{
      $hours.removeClass('is-valid').addClass('is-invalid');
    }
    if($min.is(':valid')){
      $min.removeClass('is-invalid').addClass('is-valid');
    }else{
      $min.removeClass('is-valid').addClass('is-invalid');
    }
    if ($hours.is(':valid') && $min.is(':valid')){
      $('#hr-min-feedback-1').hide();
      return true;
    }
    $('#hr-min-feedback-1').show();
    return false;
  }
  const validateSec = function(){
    if($sec.is(':valid')){
      $sec.removeClass('is-invalid').addClass('is-valid');
    }else{
      $sec.removeClass('is-valid').addClass('is-invalid');
    }
    if ($sec.is(':valid')){
      $('#sec-feedback-1').hide();
      return true;
    }
    $('#sec-feedback-1').show();
    return false;
  }
    
  // add input handler to the times
  $hours.on('input', validateHrsMin);
  $min.on('input',validateHrsMin);
  $sec.on('input',validateSec);

  // click handlers for add/subtract/moreTime buttons
  $btn1.click(function(){
    window.alert(`You clicked add`);
  });
  $btn2.click(function(){
    window.alert(`You clicked subtract`);
  });
  $('#moreTimes').click(function(){
    window.alert(`You asked for more times`)
  })

}); // End document ready handler