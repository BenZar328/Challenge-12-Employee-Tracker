const connection = require('./connection');

class Employee {}
    function viewEmployees() {
        try {
          db.query(`
          SELECT 
      e.first_name AS employee_first_name,
      e.last_name AS employee_last_name,
      m.first_name AS manager_first_name,
      m.last_name AS manager_last_name,
      r.name AS title,
      r.salary AS salary,
      d.name AS department_name
      FROM employee AS e
      LEFT JOIN employee AS m ON e.manager_id = m.id
      JOIN role AS r ON e.role_id = r.id
      JOIN department AS d ON r.department_id = d.id;`, (error, results) => {
            if (error) {
              console.error(error);
              return;
            }
            console.table(results);
          })  
        } catch (error) {
          console.error(error)
        }
    

}

module.exports = Employee;
const connection = require('./connection');

class Role {}
    function viewRoles() {
        try {
          db.query(`
          SELECT  role.name AS role_name, role.id AS role_id, department.name AS department_name, role.salary AS salary
          FROM department
          JOIN role ON department.id = role.department_id
        `, (error, results) => {
            if (error) {
              console.error(error);
              return;
            }
            console.table(results);
          });
        } catch (error) {
          console.error(error);
        }
      }
      

module.exports = Role;
const connection = require('./connection');

class Department {}
    function viewDepartment() {
        try {
          db.query('SELECT * FROM department', (error, results) => {
            if (error) {
              console.error(error);
              return;
            }
            console.log(results);
          });
        } catch (error) {
          console.error(error);
        }
      }

module.exports = Department;
const inquirer = require('inquirer');
const Employee = require('./employee');
const Role = require('./role');
const Department = require('./department');
const connection = require('./connection');

const employee = new Employee(connection);
const role = new Role(connection);
const department = new Department(connection);

