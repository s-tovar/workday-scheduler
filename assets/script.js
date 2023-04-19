// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var timeIndex = 0;

const time = [ 
    {
        hour: 9,
        ampm: 'AM',
        id: 'hour-9',
        hr: 9
    },
    {
        hour: 10,
        ampm: 'AM',
        id: 'hour-10',
        hr: 10
    },
    {
        hour: 11,
        ampm: 'AM',
        id: 'hour-11',
        hr: 11
    },
    {
        hour: 12,
        ampm: 'PM',
        id: 'hour-12',
        hr: 12
    },
    {
        hour: 1,
        ampm: 'PM',
        id: 'hour-13',
        hr: 13
    },
    {
        hour: 2,
        ampm: 'PM',
        id: 'hour-14',
        hr: 14
    },
    {
        hour: 3,
        ampm: 'PM',
        id: 'hour-15',
        hr: 15
    },
    {
        hour: 4,
        ampm: 'PM',
        id: 'hour-16',
        hr: 16
    },
    {
        hour: 5,
        ampm: 'PM',
        id: 'hour-17',
        hr: 17
    },
]



$(function () {
   
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    $(document).ready(function() {
        $(".saveBtn").on("click", function() {
            var userInput = $(this).siblings(".description").val();
            var timeBlockId = $(this).closest(".time-block").attr("id");
    
            localStorage.setItem(timeBlockId, userInput);
            console.log("Saved user input for time-block with id: " + timeBlockId); //to check if function works
            if (time[i].hr < dayjs().hour()) {
                timeBlockId.addClass('past')
            } else if (time[i].hr > daysj().hour()) {
                timeBlockId.addClass('future')
            } else {
                timeBlockId.addClass('present')
            }
        });
    
        $(".time-block").each(function() {
            var timeBlockId = $(this).attr("id");
            var savedUserInput = localStorage.getItem(timeBlockId);
    
            if (savedUserInput !== null) {
                $(this).find(".description").val(savedUserInput);
            }
            console.log("Retrieved user input for time-block id: " + timeBlockId); //to check if function works
        });
    });
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
    document.getElementById("currentDay").textContent = dayjs().format("dddd, MMMM DD")
  });

  //id=currentDay