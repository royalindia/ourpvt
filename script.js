// Admin access control
const ADMIN_KEY = "admin123"; // Change this to your preferred admin key

function checkAdminAccess() {
    const enteredKey = document.getElementById('adminKey').value;
    const errorElement = document.getElementById('accessError');
    
    if (enteredKey === ADMIN_KEY) {
        document.getElementById('adminGate').style.display = 'none';
        document.getElementById('adminPanel').style.display = 'block';
    } else {
        errorElement.textContent = "Invalid admin key. Access denied.";
        errorElement.style.display = 'block';
    }
}

// Customer search functionality
function searchCustomer() {
    const cardNumber = document.getElementById('cardNumberSearch').value.trim();
    const resultsContainer = document.getElementById('resultsContainer');
    const noResults = document.getElementById('noResults');
    const customerCard = document.getElementById('customerCard');
    
    if (!cardNumber) {
        noResults.textContent = "Please enter a card number to search";
        noResults.style.display = 'block';
        customerCard.style.display = 'none';
        return;
    }
    
    // Find customer in the data array
    const customer = customerData.find(c => c.cardNumber === cardNumber);
    
    if (customer) {
        displayCustomer(customer);
        noResults.style.display = 'none';
        customerCard.style.display = 'block';
    } else {
        noResults.textContent = "No customer found with that card number";
        noResults.style.display = 'block';
        customerCard.style.display = 'none';
    }
}

function displayCustomer(customer) {
    const customerCard = document.getElementById('customerCard');
    
    customerCard.innerHTML = `
        <div class="customer-field">
            <label>SL. NO</label>
            <span>${customer.slNo || 'N/A'}</span>
        </div>
        <div class="customer-field">
            <label>CARD NO</label>
            <span>${customer.cardNumber || 'N/A'}</span>
        </div>
        <div class="customer-field">
            <label>NAME</label>
            <span>${customer.name || 'N/A'}</span>
        </div>
        <div class="customer-field">
            <label>ADDRESS</label>
            <span>${customer.address || 'N/A'}</span>
        </div>
        <div class="customer-field">
            <label>CONTACT NO</label>
            <span>
                <a href="tel:${customer.contactNo || ''}" class="contact-link">
                    ${customer.contactNo || 'N/A'}
                </a>
            </span>
        </div>
        <div class="customer-field">
            <label>AGENTS</label>
            <span>${customer.agents || 'N/A'}</span>
        </div>
        <div class="customer-field">
            <label>RESPOND</label>
            <span>${customer.respond || 'N/A'}</span>
        </div>
        <div class="customer-field total-cards">
            <label>TOTAL CARDS</label>
            <span>${customer.totalCards || '0'}</span>
        </div>
    `;
}

// Allow search on Enter key
document.getElementById('cardNumberSearch').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchCustomer();
    }
});