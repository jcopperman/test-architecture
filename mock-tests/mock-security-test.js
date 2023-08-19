// Security Test for Authentication
pm.test("Response contains security headers", function () {
    pm.response.to.have.header("X-Frame-Options");
    pm.response.to.have.header("X-XSS-Protection");
    pm.response.to.have.header("Content-Security-Policy");
});

pm.test("Response body doesn't contain sensitive data", function () {
    pm.expect(pm.response.text()).to.not.include("password");
});

// Add more security-related tests as needed
// For example, testing for secure headers, input validation, etc.
