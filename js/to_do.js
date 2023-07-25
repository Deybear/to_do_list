
/* - - - - - - - - - - || CALLING ELEMENTS || - - - - - - - - - - */

// Calling task container . . .
var taskContainer = document.getElementById("task_container");
//var taskContainer = Array.from(document.getElementById("task_container"));

// Calling task input . . .
var addInput = document.getElementById("add_input");

// Calling add button . . .
var addBtn = document.getElementById("add_btn");

/* - - - - - - - - - - || CLICK EVENT || - - - - - - - - - - */
function addTask()
{
    // Validation . . .
    if(addInput.value === '')
    {
        // Calling an alert . . .
        alert("CHINGUE A SU MADRE!!");
    }
    else
    {
        /* - - - - - - - - - - || DIV ELEMENTS || - - - - - - - - - - */

        // Creating task (div) . . .
        const createDiv = document.createElement("div");
        
        // Adding (i) to (div) . . .
        createDiv.innerHTML = '<i id="delete_btn" class="material-icons">remove_circle</i>';

        /* - - - - - - - - - - || SPAN ELEMENTS || - - - - - - - - - - */

        // Creating task (span) . . .
        const createSpan = document.createElement("span");

        // Adding (span) to (div) . . .
        createDiv.appendChild(createSpan);

        // Adding (i) to (span) . . .
        createSpan.innerHTML = '<i id="task_checker" class="material-icons">radio_button_unchecked</i>';

        /* - - - - - - - - - - || P ELEMENTS || - - - - - - - - - - */

        // Creating task (p) . . .
        const createP = document.createElement("p");

        // Adding (p) to (span) . . .
        createSpan.appendChild(createP);

        // Adding text to paragraph . . .
        createP.innerHTML = addInput.value;
        
        /* - - - - - - - - - - || CONTAINER || - - - - - - - - - - */

        // Adding task to container . . .
        taskContainer.appendChild(createDiv);
        //taskContainer.push(createDiv);

        // Adding syle to task . . .
        createDiv.classList.add("task");
    }

    addInput.value = "";
}

/* - - - - - - - - - - || ENTER EVENT || - - - - - - - - - - */
addInput.addEventListener("keyup", (event) => 
{
    if (event.key === "Enter") 
    {
        // Print message on console . . .
        console.log('I´m pressing ENTER!!');

        // Execute function . . .
        addTask();
    }

});
