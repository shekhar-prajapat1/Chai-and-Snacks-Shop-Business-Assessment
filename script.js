document.getElementById('assessment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const email = data.email;

    // Check for duplicates in local storage
    let submittedEmails = JSON.parse(localStorage.getItem('submittedEmails')) || [];

    if (submittedEmails.includes(email)) {
        document.getElementById('duplicate-message').classList.remove('hidden');
        return; // Stop the function if email is already submitted
    }

    // Calculate financial details
    const dailyRevenue = parseFloat(data.dailyRevenue) || 0;
    const averageCustomers = parseFloat(data.averageCustomers) || 0;
    const fixedCosts = parseFloat(data.fixedCosts) || 0;
    const variableCosts = parseFloat(data.variableCosts) || 0;
    const marketingBudget = parseFloat(data.marketingBudget) || 0;

    const totalRevenue = dailyRevenue * averageCustomers;
    const totalExpenses = fixedCosts + variableCosts + marketingBudget;
    const netIncome = totalRevenue - totalExpenses;

    // Display the results
    displayResults(totalRevenue, totalExpenses, netIncome);

    // Store the email to prevent duplicates
    submittedEmails.push(email);
    localStorage.setItem('submittedEmails', JSON.stringify(submittedEmails));

    // Reset the form
    event.target.reset();
});

function displayResults(totalRevenue, totalExpenses, netIncome) {
    const resultDiv = document.getElementById('result');
    resultDiv.classList.remove('hidden');
    resultDiv.innerHTML = `
        <h2>Assessment Results</h2>
        <p><strong>Total Revenue:</strong> ₹${totalRevenue.toFixed(2)}</p>
        <p><strong>Total Expenses:</strong> ₹${totalExpenses.toFixed(2)}</p>
        <p><strong>Net Income:</strong> ₹${netIncome.toFixed(2)}</p>
    `;
}
