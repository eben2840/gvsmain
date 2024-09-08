document.getElementById('packageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var weight = parseFloat(document.getElementById('weight').value);
    
    if (isNaN(weight) || weight <= 0) {
      displayError('Weight should be a positive number.');
      return;
    }
    
    var charges = calculateCharges(weight);
    
    if (charges !== null) {
      displayCharges(charges);
    } else {
      displayError('Weight not in specified range.');
    }
  });
  
  function calculateCharges(weight) {
    if (weight < 1) {
      return 600.00;
    } else if (weight <= 2) {
      return 1800.00;
    } else if (weight <= 50) {
      return (weight - 2) * 300 + 1800.00;
    } else {
      return null; // Indicating weight is above 50kg
    }
  }
  
  function displayCharges(charges) {
    var resultElement = document.getElementById('result');
    resultElement.textContent = 'Shipping Charges: $' + charges.toFixed(2);
  }
  
  function displayError(message) {
    var resultElement = document.getElementById('result');
    resultElement.textContent = message;
    resultElement.style.backgroundColor = '#dc3545'; // Bootstrap danger color
    resultElement.style.color = '#fff';
    resultElement.style.padding = '10px';
    resultElement.style.borderRadius = '4px';
  }
  