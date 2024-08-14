// Select the button using its ID
const button = document.getElementById('button');

// Initialize a variable to track the toggle state
let isToggled = false;

// Add an event listener to the button
const onClicking = () => {
    // Check the toggle state and change the background color accordingly
    if (isToggled) {
        button.style.backgroundColor = '#fff'; // Default color (off state)
        button.style.color = 'black';
    } else {
        button.style.backgroundColor = '#4CAF50'; // Toggled color (on state)
        button.style.color = 'white'; // Default color (
    }

    // Toggle the state
    isToggled = !isToggled;
};