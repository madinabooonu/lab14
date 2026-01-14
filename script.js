const deployTimeElement = document.getElementById("deploy-time");

// GitHub Actions har safar build paytini shu joyga yozadi
deployTimeElement.textContent = new Date().toLocaleString();
