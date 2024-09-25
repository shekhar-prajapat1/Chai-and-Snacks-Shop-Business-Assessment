document.getElementById('assessment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Gather form data
    const dailyRevenue = parseFloat(event.target.dailyRevenue.value) || 0;
    const averageCustomers = parseFloat(event.target.averageCustomers.value) || 0;
    const averageSpend = parseFloat(event.target.averageSpend.value) || 0;
    const fixedCosts = parseFloat(event.target.fixedCosts.value) || 0;
    const variableCosts = parseFloat(event.target.variableCosts.value) || 0;
    const marketingBudget = parseFloat(event.target.marketingBudget.value) || 0;
    const regularCustomerPercentage = parseFloat(event.target.regularCustomerPercentage.value) || 0;
    const orderFulfillmentTime = parseFloat(event.target.orderFulfillmentTime.value) || 0;

    // Calculate total revenue and expenses
    const totalRevenue = dailyRevenue * averageCustomers;
    const totalExpenses = fixedCosts + variableCosts + marketingBudget;

    // Calculate net income
    const netIncome = totalRevenue - totalExpenses;

    // Display the results
    const resultDiv = document.getElementById('result');
    resultDiv.classList.remove('hidden');
    resultDiv.innerHTML = `
        <h2>Assessment Results</h2>
        <p><strong>Total Revenue:</strong> ₹${totalRevenue.toFixed(2)}</p>
        <p><strong>Total Expenses:</strong> ₹${totalExpenses.toFixed(2)}</p>
        <p><strong>Net Income:</strong> ₹${netIncome.toFixed(2)}</p>
        <p><strong>Average Spend per Customer:</strong> ₹${averageSpend.toFixed(2)}</p>
        <p><strong>Average Order Fulfillment Time:</strong> ${orderFulfillmentTime} minutes</p>
    `;
    
    // Reset the form
    event.target.reset();
});
