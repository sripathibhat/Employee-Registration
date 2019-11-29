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
The API documentation can be accessed at swagger-ui.html once the application is started. By default the GET /employees returns all the employee details sorted in ascending order of their firstname field. The APIs can be even tested using swagger-ui.html as well.

To run the back-end spring boot application, follow the following steps.
```
1. Download the source code of this project from Back-End folder.
2. Import the project in eclipse.
3. The project import may take some time to download all the dependencies.
4. Start the application either by running the project as a spring boot app or running the main class as java application.
5. The application starts at port 8080 and APIs can be accessed using localhost:8080 from the same system or using <IP-ADDRESS>:8080 from other systems.
```
