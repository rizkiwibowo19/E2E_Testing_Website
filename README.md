Here is an example of an automation testing project on the website demowebshop.tricentis.com using Cypress, with reporting done using Mochawesome.
This testing suite includes five test cases:

1.  Responsive Testing,
    this test verifies the website's display when accessed through different devices: desktop, tablet, and smartphone.

2.  Login and Logout Testing,
    this test checks the functionality of the login and logout features. It includes the following stages: login with valid credentials, login with an incorrect username,          login with an incorrect password, login with case-sensitive username, and login with case-sensitive password.

3.  Login with Multiple Tasks,
    similar to the second test case, this one verifies the login process using valid credentials, incorrect username, incorrect password, case-sensitive username, and case-        sensitive password. The difference lies in the code steps implemented for this test.

4.  Registering a New Account,
    this test ensures that the registration feature works properly by creating a new account and validating it with assertions.

5.  Add Product to Cart and Checkout,
    this test evaluates the functionality of adding a product to the shopping cart and testing the checkout process from the cart.

Components
- Cypress: End-to-end testing framework for web applications.
- Node.js: JavaScript runtime used for running Cypress and other development tools.
- Visual Studio Code: Code editor used for writing and managing code.
- Mochawesome: Reporting tool used with Cypress for generating test reports.
