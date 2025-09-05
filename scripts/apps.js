function generateTestCases() {
  const input = document.getElementById('userStory').value.trim();
  const output = document.getElementById('output');
  output.innerHTML = '';

  if (!input) {
    output.innerHTML = '<p>Please enter a feature description.</p>';
    return;
  }

  // Mock test case generation
  const cases = [
    `Verify user can log in with valid email and password.`,
    `Check error message for invalid credentials.`,
    `Ensure password field is masked.`,
    `Test login with empty fields.`,
    `Validate login rate limiting after multiple failed attempts.`
  ];

  cases.forEach((tc, i) => {
    const div = document.createElement('div');
    div.className = 'test-case';
    div.innerHTML = `<strong>TC-${i + 1}:</strong> ${tc}`;
    output.appendChild(div);
  });
}
