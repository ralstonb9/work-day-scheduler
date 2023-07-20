$(document).ready(function() {
  $(function () {
    //Added a listener for click events on the save button.
    $('.saveBtn').click(function() {
      var task = $(this).siblings(".description").val();
      var time = $(this).parent().attr('id')
      localStorage.setItem(time, task)
    })
    
    //Added code to apply the past, present, or future class to each time block
   $('.time-block').each(function() {
    var time = $(this).attr('id');
    var currentTime = dayjs().hour();

    $(this).removeClass('past present future');
    if (currentTime > time) {
      $(this).addClass('past');
    } else if (currentTime < time) {
      $(this).addClass('future');
    } else {
      $(this).addClass('present');
    }
   });
    
    //Added code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements.
    $('.time-block').each( function() {
      
      var time = $(this).attr('id')
      var storageItem = localStorage.getItem(time)
      if (!storageItem) {
        storageItem = ''
      }
      console.log(storageItem)
      console.log($(`#${time} .description`))
      $(`#${time} .description`).val(storageItem)
    })
    
    //Added code to display the current date in the header of the page.
    var currentDate = dayjs().format('dddd, MMMM D, YYYY');
    console.log(currentDate);
    document.querySelector('#currentDay').append(currentDate)
  });
});
