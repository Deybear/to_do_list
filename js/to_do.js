
/* - - - - - - - - - - || CALLING ELEMENTS || - - - - - - - - - - */

// Calling task container . . .
var taskContainer = document.getElementById("task_container");

// Calling task input . . .
var addInput = document.getElementById("add_input");

// Calling add button . . .
var addBtn = document.getElementById("add_btn");

// Calling add button . . .
var counter = document.getElementById("counter");
var doneTask = 0;

/* - - - - - - - - - - || CLICK EVENT || - - - - - - - - - - */
function addTask()
{
    // Validation . . .
    if(addInput.value === '')
    {
        // Calling an alert . . .
        alert("Ingrese un texto");
    }
    else
    {
        /* - - - - - - - - - - || DIV ELEMENTS || - - - - - - - - - - */

        // Creating task (div) . . .
        const createDiv = document.createElement("div");
        
        // Adding (i) to (div) . . .
        createDiv.innerHTML = '<i class="material-icons delete_btn">remove_circle</i>';

        /* - - - - - - - - - - || SPAN ELEMENTS || - - - - - - - - - - */

        // Creating task (span) . . .
        const createSpan = document.createElement("span");

        // Adding (span) to (div) . . .
        createDiv.appendChild(createSpan);

        // Adding (i) to (span) . . .
        createSpan.innerHTML = '<i class="material-icons task_checker" value="0">radio_button_unchecked</i>';

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

        // Adding syle to task . . .
        createDiv.classList.add("task");

        checkTask(createDiv);
        deleteTask();
    }

    addInput.value = "";
}

/* - - - - - - - - - - || COUNTER EVENT || - - - - - - - - - - */
function increaseCounter()
{
    // Increase counter . . .
    doneTask++;

    // Add counter to HTML . . .
    counter.textContent = doneTask;
}

function decreaseCounter()
{
    // Decrease counter . . .
    doneTask--;

    //Fix zero issue . . .
    if(doneTask <= 0)
    {
        doneTask = 0;
    }

    // Add counter to HTML . . .
    counter.textContent = doneTask;
}

/* - - - - - - - - - - || CHECK EVENT || - - - - - - - - - - */
function checkTask(createDiv)
{
    // Get last element from container . . .
    const getIconCheck = taskContainer.lastElementChild;

    // Get icon by class . . .
    const checkBtn = getIconCheck.querySelector(".task_checker");

    // Check function . . .
    checkBtn.addEventListener("click", function()
    {
        //Change value to int . . .
        var value = parseInt(checkBtn.value);

        //Click checker . . .
        if (value == 0)
        {
            increaseCounter();
            createDiv.classList.remove("task");
            createDiv.classList.add("checked_task");
            checkBtn.textContent = "radio_button_checked";

            //Change value . . .
            checkBtn.value = 1;
        } 
        else
        {
            decreaseCounter();
            createDiv.classList.remove("checked_task");
            createDiv.classList.add("task");
            checkBtn.textContent = "radio_button_unchecked";

            //Change value . . .
            checkBtn.value = 0;
        }
        
    });
}

/* - - - - - - - - - - || DELETE EVENT || - - - - - - - - - - */
function deleteTask()
{
    // Get last element from container . . .
    const newTaskDiv = taskContainer.lastElementChild;

    // Get icon by class . . .
    const deleteBtn = newTaskDiv.querySelector(".delete_btn");

    // Delete function . . .
    deleteBtn.addEventListener("click", function(event)
    {
        const taskDiv = event.target.parentNode;
        taskDiv.remove();
    });
}

/* - - - - - - - - - - || ENTER EVENT || - - - - - - - - - - */
addInput.addEventListener("keyup", (event) => 
{
    // If [ENTER] is pressed so . . .
    if (event.key === "Enter") 
    {
        // Print message on console . . .
        console.log('I´m pressing ENTER!!');

        // Execute function . . .
        addTask();
    }

});