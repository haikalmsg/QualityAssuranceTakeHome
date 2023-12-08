function isValidEmail(email) {
    // Regular expression pattern to validate email addresses
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Check if the email matches the pattern
    return emailPattern.test(email);
}

// tests.js
QUnit.test("Valid Email Test", function (assert) {
    assert.ok(isValidEmail("test@example.com"), "Valid email should pass");
    assert.ok(isValidEmail("user@domain.co"), "Valid email should pass");
    assert.ok(isValidEmail("someone@sub.domain.com"), "Valid email should pass");
    assert.ok(isValidEmail("H1k4l@gmail.com"), "Valid email should pass");
    assert.ok(isValidEmail("Haikal_@gmail.com"), "Valid email should pass");
    assert.ok(isValidEmail("alice_smith123@sub.domain.com"), "Valid email should pass");
    assert.ok(isValidEmail("haikal-ghiffari@gmail.com"), "Valid email should pass");
});

QUnit.test("Invalid Email Test", function (assert) {
    assert.notOk(isValidEmail("invalid-email"), "Invalid email should fail");
    assert.notOk(isValidEmail("user@domain"), "Invalid email should fail");
    assert.notOk(isValidEmail("user@.com"), "Invalid email should fail");
    assert.notOk(isValidEmail("@@gmail.com"), "Invalid email should fail");
});

