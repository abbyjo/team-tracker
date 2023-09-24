const inquirer = require('inquirer')
const mysql = require('mysql2')

const questions = [
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
            'Update an employee role']
    }
]