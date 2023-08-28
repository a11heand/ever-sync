/* sophisticated_code.js */

// This code is a complex implementation of a task management system

// Define class Task
class Task {
  constructor(id, description, priority, dueDate, assignee) {
    this.id = id;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
    this.assignee = assignee;
    this.completed = false;
  }

  markCompleted() {
    this.completed = true;
  }

  changePriority(newPriority) {
    this.priority = newPriority;
  }

  rescheduleDueDate(newDueDate) {
    this.dueDate = newDueDate;
  }
}

// Define class TaskList
class TaskList {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  removeTask(taskId) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  getTasksByAssignee(assignee) {
    return this.tasks.filter((task) => task.assignee === assignee);
  }

  getTasksByPriority(priority) {
    return this.tasks.filter((task) => task.priority === priority);
  }
}

// Create an instance of TaskList
const taskList = new TaskList();

// Create sample tasks
const task1 = new Task(1, 'Implement login functionality', 'High', '2022-12-31', 'John Doe');
const task2 = new Task(2, 'Fix bug in data validation', 'Medium', '2022-10-15', 'Jane Smith');
const task3 = new Task(3, 'Refactor database queries', 'Low', '2023-01-15', 'John Doe');

// Add tasks to the task list
taskList.addTask(task1);
taskList.addTask(task2);
taskList.addTask(task3);

// Get tasks by assignee
const johnsTasks = taskList.getTasksByAssignee('John Doe');
console.log('Tasks assigned to John Doe:', johnsTasks);

// Get tasks by priority
const highPriorityTasks = taskList.getTasksByPriority('High');
console.log('High priority tasks:', highPriorityTasks);

// Mark task as completed
task2.markCompleted();
console.log('Task 2 completed:', task2);

// Change task priority
task3.changePriority('Medium');
console.log('Task 3 new priority:', task3);

// Reschedule task due date
task1.rescheduleDueDate('2023-01-31');
console.log('Task 1 rescheduled due date:', task1);

// Remove task
taskList.removeTask(3);
console.log('Task 3 removed from the list:', taskList.tasks);

// ... continued code with more functionality and complex logic ...

// End of the code