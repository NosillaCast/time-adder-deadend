

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
  const $form = $('#support_fm');

  // add event handlers to activate the Bootstrap validation styles
  // when the form is first interacted with
  const enableBootstrapValiationStyles = function(){
    $form.addClass('was-validated');
  };
  $form.submit(enableBootstrapValiationStyles);
  $('input', $form).on('invalid', enableBootstrapValiationStyles);

  // add a submit handler to the form
  $form.submit(function(){
  window.alert("Your donation was not submitted because this is a dummy form, but thanks all the same, it's the thought that counts :)");
  });
}); // End document ready handler