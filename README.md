# Employee-Registration
- This application is used to save the details of the employees in postgresql database and exposes REST APIs for all CRUD operations on employee table.
- The back-end is implemented using Spring boot framework (v2.2.1) with spring web and spring data JPA dependencies. It also includes devtools and postgresql dependencies. Devtools is used for development purpose which helps in auto restarting the spring application whenever new changes are made. 
- Apache derby embedded database can also be used in place of postgresql for in memory store for testing purpose in place of postgres DB.

### REST APIs available in this application are as follows. These APIs can be tested using any REST clients like postman.
```
1. GET /employees - To get the details of all the employees.
2. POST /employees - To save the details of an employee.
3. GET /employees/{empId} - To get an employee details by ID.
4. PUT /employees/{empId} - To update the details of an exisitng employee.
5. DELETE /employees/{empId} - To delete the details of an employee using ID.
```
