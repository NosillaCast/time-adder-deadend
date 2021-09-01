

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
      $('#hr-min-feedback').hide();
      return true;
    }
    $('#hr-min-feedback').show();
    return false;
  }
  const validateSec = function(){
    if($sec.is(':valid')){
      $sec.removeClass('is-invalid').addClass('is-valid');
    }else{
      $sec.removeClass('is-valid').addClass('is-invalid');
    }
    if ($sec.is(':valid')){
      $('#sec-feedback').hide();
      return true;
    }
    $('#sec-feedback').show();
    return false;
  }
    
  // add input handler to the times
  $hours.on('input', validateHrsMin);
  $min.on('input',validateHrsMin);
  $sec.on('input',validateSec);

  // add a submit handler to the form
  $form.submit(function(){
  window.alert("Your donation was not submitted because this is a dummy form, but thanks all the same, it's the thought that counts :)");
  });
}); // End document ready handler