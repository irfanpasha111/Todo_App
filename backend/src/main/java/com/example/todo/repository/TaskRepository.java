// src/main/java/com/example/todo/repository/TaskRepository.java
package com.example.todo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.todo.model.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {
}
