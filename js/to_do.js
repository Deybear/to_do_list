
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

/* - - - - - - - - - - || CLICK EVENT || - - - - - - - - - - */
function checkTask() 
{
    taskContainer.addEventListener("click", function (event) 
    {
        const target = event.target;
        console.log(target);

        // Check if the click is on the checkbox icon
        if (target.classList.contains("task_checker")) 
        {
            const checkbox = target;
            const value = parseInt(checkbox.getAttribute("value"));
            console.log(value);

            if (value === 0) 
            {
                increaseCounter();
                checkbox.textContent = "radio_button_checked";
                checkbox.setAttribute("value", "1");
                checkbox.closest(".task").classList.add("checked_task");
            }
            else
            {
                decreaseCounter();
                checkbox.textContent = "radio_button_unchecked";
                checkbox.setAttribute("value", "0");
                checkbox.closest(".task").classList.remove("checked_task");
            }
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