

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
  const $minutes = $('#min-1');
  const $seconds = $('#sec-1');

  // add event handlers to activate the Bootstrap validation styles
 
  const validateTimes = function(){
    if($hours.is(':valid')){
      $hours.removeClass('is-invalid').addClass('is-valid');
      console.log(`I validated hours as valid`);
    }else{
      $hours.removeClass('is-valid').addClass('is-invalid');
      console.log(`I validated hours as invalid`);
    }
    if($minutes.is(':valid')){
      $minutes.removeClass('is-invalid').addClass('is-valid');
      console.log(`I validated min`);
    }else{
      $minutes.removeClass('is-valid').addClass('is-invalid');
    }
    if($seconds.is(':valid')){
      $seconds.removeClass('is-invalid').addClass('is-valid');
      console.log(`I validated sec`);
    }else{
      $seconds.removeClass('is-valid').addClass('is-invalid');
    }
    if ($hours.is(':valid') && $minutes.is(':valid')){
      $('#hr-min-feedback').hide();
      return true;
    }
    if ($sec.is(':valid')){
      $('#sec-feedback').hide();
      return true;
    }
  }
    
  // add input handler to the times
  // BUG: the input is triggering before I type
  $hours.on('input',console.log(`poop`));
  $minutes.on('input',validateTimes);
  $seconds.on('input',validateTimes);

  // add a submit handler to the form
  $form.submit(function(){
  window.alert("Your donation was not submitted because this is a dummy form, but thanks all the same, it's the thought that counts :)");
  });
}); // End document ready handler