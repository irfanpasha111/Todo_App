

# Todo_App

[![Repository](https://img.shields.io/badge/Repo-Todo_App-blue)](https://github.com/irfanpasha111/Todo_App)

A simple ToDo application built with React and Spring Boot.

## ✅ Completed User Stories

### 🟢 User Story 1: Create New Task

**Description:**  
The user shall be able to create a new task with title, description, due date, and priority.

**Tasks Completed:**
- Implemented a task form component with required fields.
- Added POST request functionality to store the new task.
- Task list auto-refreshes on new task addition.

**Acceptance Criteria Met:**
- Users can input task details and click “Add Task”.
- Task appears in the list and persists in the backend.

---

### 🟢 User Story 2: Edit Existing Task

**Description:**  
The user shall be able to edit an existing task's details (title, description, due date, priority).

**Tasks Completed:**
- Provided "Edit" button for each task.
- Pre-populated task form with selected task details.
- Updated task info via PUT request to backend.
- Task list refreshes after updates.

**Acceptance Criteria Met:**
- Users can modify any task field and save changes.
- Updates are persisted in the backend and visible in the UI.

## User Story 3: Delete Task

**Description:**  
The user shall be able to delete a task from the list.

**Features Implemented:**
- "Delete" button added for each task.
- Confirmation prompt before deleting.
- Task is removed from the backend and UI.
- Deletion persists across app restarts.

## User Story 4: Mark Task as Completed/Uncompleted

**Description:**  
The user shall be able to mark a task as completed or uncompleted.

**Features Implemented:**
- Checkbox to toggle task completion.
- Backend is updated with new completion status.
- Completed tasks show with a strikethrough.
- Changes persist after restarting the app.

## User Story 5: View All Tasks on App Launch

**Description:**  
The user shall see a list of all current tasks upon opening the app.

**Features Implemented:**
- Tasks load automatically on app startup.
- Each task displays title, due date, priority, and completion status.
- The list updates immediately after adding, editing, or deleting tasks.
- The task list view supports scrolling for overflow.

## User Story 6: Search Tasks

- The user can search tasks by entering keywords.
- The task list filters dynamically based on matching keywords in the task title or description.
- Clearing the search term restores the full task list.

