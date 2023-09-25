// Imported dependencies
const inquirer = require('inquirer')
const mysql = require('mysql2')

// Main menu options
const menu = [
    {
        type: 'list',
        name: 'menu',
        message: 'Welcome to Team Tracker 1.0 ☆ What would you like to do today?',
        choices: [
            'View all departments',
            'View all roles',
            'View all employees', 
            'Add a department',
            'Add a role', 
            'Add an employee', 
            'Update an employee role',
            'Exit Program']
    }
]

// Function to initialize program
    // --Launches prompt. upon recieving answer, does work then displays prompt again (unless exit is chosen)
function init() {}