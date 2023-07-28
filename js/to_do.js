
/* - - - - - - - - - - || CALLING ELEMENTS || - - - - - - - - - - */

// Calling task container . . .
var taskContainer = document.getElementById("task_container");

// Calling task input . . .
var addInput = document.getElementById("add_input");

// Calling add button . . .
var addBtn = document.getElementById("add_btn");

// Calling clean button . . .
var cleanBtn = document.getElementById("clean_btn");

// Calling counter . . .
var madeCounter = document.getElementById("made_counter");
var doneCounter = document.getElementById("done_counter");

var madetask = 0;
var doneTask = 0;

checkTask();

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
        const createText = document.createElement("p");
        const createHour = document.createElement("p");

        // Adding (p) to (span) . . .
        createSpan.appendChild(createText);
        createSpan.appendChild(createHour);

        // Adding text to paragraph . . .
        createText.innerHTML = addInput.value;
        createHour.innerHTML = moment().format('LT');
        
        /* - - - - - - - - - - || CONTAINER || - - - - - - - - - - */

        // Adding task to container . . .
        taskContainer.appendChild(createDiv);

        // Adding syle to task . . .
        createDiv.classList.add("task");
        createHour.classList.add("task_time");

        // Hide background image . . .
        taskContainer.style.background = "none";

        // Increase counter . . .
        increaseMadeCounter();

        // Delete task function . . .
        deleteTask();
    }

    addInput.value = "";
}

/* - - - - - - - - - - || COUNTER EVENT || - - - - - - - - - - */
function increaseMadeCounter()
{
    // Increase counter . . .
    madetask++;

    // Add counter to HTML . . .
    madeCounter.textContent = madetask;
}

function increaseDoneCounter()
{
    // Increase counter . . .
    doneTask++;

    // Add counter to HTML . . .
    doneCounter.textContent = doneTask;
}

function decreseDoneCounter()
{
    // Decrease counter . . .
    doneTask--;

    //Fix zero issue . . .
    if(doneTask <= 0)
    {
        doneTask = 0;
    }

    // Add counter to HTML . . .
    doneCounter.textContent = doneTask;
}

/* - - - - - - - - - - || CHECK EVENT || - - - - - - - - - - */
function checkTask() 
{
    taskContainer.addEventListener("click", function (event) 
    {
        const target = event.target;

        // Check if the click is on the checkbox icon . . .
        if (target.classList.contains("task_checker"))
        {
            const checkbox = target;
            const value = parseInt(checkbox.getAttribute("value"));
            console.log(value);

            // First and second click validation . . .
            if (value === 0)
            {
                increaseDoneCounter();
                checkbox.textContent = "radio_button_checked";
                checkbox.setAttribute("value", "1");
                checkbox.closest(".task").classList.add("checked_task");
            }
            else
            {
                decreseDoneCounter();
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

/* - - - - - - - - - - || CLEAN EVENT || - - - - - - - - - - */
cleanBtn.addEventListener("click", function()
{
    // While there's a child . . .
    while (taskContainer.firstChild)
    {
        // Delete it . . .
        taskContainer.removeChild(taskContainer.firstChild);
    }
});

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