// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(function () {
   //event listener
    $(document).ready(function() {
        $(".saveBtn").on("click", function() {
            var userInput = $(this).siblings(".description").val();
            var timeBlockId = $(this).closest(".time-block").attr("id");
    
            localStorage.setItem(timeBlockId, userInput);
            console.log("Saved user input for time-block with id: " + timeBlockId); //to check if function works
        });
    
        $(".time-block").each(function() {
            var timeBlockId = $(this).attr("id")
            var currentTime = parseInt(timeBlockId.split("-")[1])
            var savedUserInput = localStorage.getItem(timeBlockId);
    
            if (savedUserInput !== null) {
                $(this).find(".description").val(savedUserInput);
            }
            console.log("Retrieved user input for time-block id: " + timeBlockId); //to check if function works

            //added classes according to dayjs
            if (currentTime < dayjs().hour()) {
                $(this).addClass('past')
            } else if (currentTime > dayjs().hour()) {
                $(this).addClass('future')
            } else {
                $(this).addClass('present')
            }
        });
    });
    
    document.getElementById("currentDay").textContent = dayjs().format("dddd, MMMM DD")
  });

