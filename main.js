function hideResult(button) {
    // Get the parent element of the button
    var parent = button.parentElement;

    // Hide the parent div
    parent.style.visibility = 'hidden';
}

function showResult(itemId) {
    // Find the div with the given id
    var item = document.getElementById(itemId);

    // Show the div
    item.style.visibility = 'visible';
}