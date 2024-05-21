document.getElementById('add-task').addEventListener('click', function() {
    const subject = document.getElementById('Subject').value;
    const description = document.querySelector('input[name="Description"]').value;
    const assignTo = document.querySelector('input[name="task-list"]').value;
    const completeBy = document.querySelector('input[name="Complete"]').value;
    const date = document.querySelector('input[type="date"]').value;

    if (subject && description && assignTo && completeBy && date) {
        const taskList = document.getElementById('task-list');
        const taskItem = document.createElement('li');

        const taskContent = document.createElement('span');
        taskContent.textContent = `${subject} - ${description} - ${assignTo} - ${completeBy} - ${date}`;
        taskItem.appendChild(taskContent);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(taskItem);
        });
        taskItem.appendChild(deleteButton);

        taskList.appendChild(taskItem);

        // Clear input fields
        document.getElementById('Subject').value = '';
        document.querySelector('input[name="Description"]').value = '';
        document.querySelector('input[name="task-list"]').value = '';
        document.querySelector('input[name="Complete"]').value = '';
        document.querySelector('input[type="date"]').value = '';
    } else {
        alert('Please fill in all fields.');
    }
});
