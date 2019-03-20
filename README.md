# LeakyAngular

## Table of Contents
1. [Introduction](#Introduction)
2. [Building, running the application](#Build)
3. [Configuring a backend](#Backend)
4. [Exercises](#Exercises)
    1.  [Exercise 1 - XSS](#Exercise_xss)
    1.  [Exercise 2 - Injection](#Exercise_injection)
    1.  [Exercise 3 - CSRF, OSRF](#Exercise_csrf)
    1.  [Exercise 4 - Tabnabbing](#Exercise_tabnab)

<a name="Introduction"></a>
LeakyAngular is a deliberately vulnerable angular application. The project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.4. It uses the [javulna](https://github.com/edu-secmachine/javulna) backend. LeakyAngular (together with the javulna backend) is a movie-related application, where you can log in and out, read information about movies, buy movie-related objects, send messages to other users of the application, etc. The functionalities are far from complete or coherent, they just serve the purpose of demonstrating specific vulnerabilities. This document contains exercises which can be done with LeakyAngular to understand how to exploit and how to fix specific vulnerabilities.

<a name="Build"></a>
## Building, running the application

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.  
  
Or
    
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

<a name="Backend"></a>
## Configuring a backend
LeakyAngular uses by default a backend hosted on Google Cloud. This cloud instance is live only for limited periods. If you want to use it with your own backend, get the [javulna](https://github.com/edu-secmachine/javulna) application and run it. Than configure LeakyAngular to use your local backend by changing the baseUrl attribute in environments/environment.ts, and environments/environment.prod.ts
 
<a name="Exercises"></a>
## Exercises 

<a name="Exercise_xss"></a>
### Exercise 1 – Xss
The application is vulnerable to XSS in the Users page! Find the vulnerability, and exploit it!  
Then check the source-code, and fix it!  
Discuss what could be the developer's reason for choosing the vulnerable solution!

<a name="Exercise_injection"></a>
### Exercise 2 – Injection
The application is vulnerable to a classic client-side script-injection attack. Check the movies page to find it!  
Then check the source-code, and fix it!  
Discuss what kind of other fixes you can imagine!

<a name="Exercise_csrf"></a>
### Exercise 3 – CSRF, OSRF
The application is vulnerable to both CSRF and OSRF! Find the OSRF vulnerability, and exploit it!    
To find the OSRF vulnerability, you should know, that the backend application has a password change functionality.  
A logged in user can change her password by sending a GET request to `{{javulna_host}}/rest/user/changepwd?newpwd={{new password}}`.  
Find where the OSRF vulnerability is, and exploit it!  
Discuss how could you fix this vulnerability!

<a name="Exercise_tabnab"></a>
### Exercise 4 – Tabnabbing
The application is vulnerable to Tabnabbing! Find the vulnerable place, and exploit it!  
Fix the vulnerability!  
