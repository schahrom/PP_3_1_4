package ru.kata.spring.boot_security.demo.controller;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.kata.spring.boot_security.demo.model.Role;
import ru.kata.spring.boot_security.demo.model.User;
import ru.kata.spring.boot_security.demo.repository.UserRepository;
import ru.kata.spring.boot_security.demo.service.RoleService;
import ru.kata.spring.boot_security.demo.service.UserService;
import ru.kata.spring.boot_security.demo.util.exception_handler.NoSuchUserException;
import ru.kata.spring.boot_security.demo.util.exception_handler.UserIncorrectData;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/api")
public class springRestController {
    private final UserService userService;

    private final RoleService roleService;

    public springRestController(UserService userService, RoleService roleService) {
        this.userService = userService;
        this.roleService = roleService;
    }

    @GetMapping("/roles")
    public List<Role> showAllRoles() {
        List<Role> allRole = roleService.findAllRoles();
        return allRole;
    }

    @GetMapping("/users")
    public List<User> showAllUsers() {
        List<User> allUsers = userService.allUser();
        return allUsers;
    }

    @GetMapping("/users/{id}")
    public User getUser(@PathVariable Long id) {
        User user = userService.findUserById(id);
        return user;
    }

//        try {
//
//        } catch (NoSuchElementException e) {
//            throw new NoSuchUserException("There is no user with ID " + id + " in Database");
//        }
//    }

//    Обработчик ошибок
//    @ExceptionHandler
//    public ResponseEntity<UserIncorrectData> handleException(
//            NoSuchUserException exception) {
//        UserIncorrectData data = new UserIncorrectData();
//        data.setInfo(exception.getMessage());
//
//        return new ResponseEntity<>(data, HttpStatus.NOT_FOUND);
//    }


    @PostMapping("/users")
    public User addNewUser(@RequestBody User user) {
        userService.saveUser(user);
        return user;
    }

    @PutMapping("/users")
    public User updateUser(@RequestBody User user) {
        userService.update(user);
        return user;
    }

    @DeleteMapping("/users/{id}")
    public String deleteUser(@PathVariable Long id) {
//        User user = userService.findUserById(id);
//        if (user==null) {
//            throw new NoSuchUserException("There is no User with ID = " + id + " in Database");
//        }

        userService.deleteUser(id);
        return "User with ID = " + id + " was deleted!";
    }
}


