// 
// Define globally-scoped variables
//
  
// Create an array holding the div IDs for two rows of times + buttons
let timeInputArray = [
  {
    hours: "hours-0",
    min: "min-0",
    sec: "sec-0",
    btnA: "addBtn-0",
    btnS: "subBtn-0",
  },
  {
    hours: "hours-1",
    min: "min-1",
    sec: "sec-1",
    btnA: "addBtn-1",
    btnS: "subBtn-1",
  },
]

// Document ready handler
$(function () {
  
  /********************************************* 
  * A class to create the time input rows
  **********************************************
  *
  * @param {integer} hours - the hours input
  * @param {integer} min - the minutes input
  * @param {decimal} sec - the seconds input
  * @param {button} btnA - adds all of the values in the row to the total
  * @param {button} btnS - subtracts all of the values in the row from the total
  * 
  * Instance functions:
  * 
  * Errors thrown e.g. @throws {RangeError} and why
  * Errors thrown e.g. @throws {TypeError} and why
  * 
  */

  class timeInputRow {

  // define the constructor 
    constructor(details) {
      this.hours = details.hours;
      this.minutes = details.minutes;
      this.seconds = details.seconds;
      this.addBtn = details.addBtn;
      this.subtBtn = details.subtBtn;
    };
 
    // Define instance functions
    putTimesUp(){
      let rowTemplate = $('#timeInputRow').html();
      // render the html for the row
      $(this.timeRowPlaceholder).append(Mustache.render(rowTemplate, this));
    };
  };
  // Finished class definition

  // Create a function to make the first two time input rows
  function makeTimeInputRows(){
    for (i = 0; i < timeInputArray.length; i++){
      let x = new timeInputRow(timeInputArray[i]);
      // arrayOfTimes.push(x); // do I need this? Haven't created it yet
      x.putTimesUp();
    };
  };
  makeTimeInputRows();

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
      for (i=1; i<=2; i++) {
      timeInputArray[i] = new Array ($('#hours-i').val(), $('#min-i').val(), $('#sec-i').val());
      console.log(`DEBUG: timeInputArray[i] is ${timeInputArray[i]}`)
      }
      console.log(timeInputArray);



    });
    $btnS.click(function(){
      window.alert(`You clicked subtract`);
    });
    $('#moreTimes').click(function(){
      window.alert(`You asked for more times`)
    })

  

 

}); // End document ready handler