// your code here
document.getElementById('urlForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form values
    var name = document.getElementById('name').value;
    var year = document.getElementById('year').value;
    
    // Generate query string
    var queryString = '?name=' + encodeURIComponent(name) + '&year=' + encodeURIComponent(year);
    
    // Update URL display
    document.getElementById('url').textContent = 'URL: https://localhost:8080/' + queryString;
});
