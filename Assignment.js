// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function() {
    // -------- Change Text Content --------
    const changeTextBtn = document.getElementById('change-text-btn');
    const changeableText = document.getElementById('changeable-text');
    
    // Array of text options to cycle through
    const textOptions = [
        'This text was changed using JavaScript!',
        'JavaScript makes websites interactive.',
        'DOM manipulation is powerful!',
        'You can dynamically update content.',
        'This text will change when you click the button below.'
    ];
    
    let currentTextIndex = 0;
    
    changeTextBtn.addEventListener('click', function() {
        // Move to the next text option (cycling back to the beginning if needed)
        currentTextIndex = (currentTextIndex + 1) % textOptions.length;
        
        // Update the text content
        changeableText.textContent = textOptions[currentTextIndex];
        
        // Add a temporary highlight effect
        changeableText.classList.add('highlight');
        
        // Remove the highlight effect after 500ms
        setTimeout(function() {
            changeableText.classList.remove('highlight');
        }, 500);
    });
    
    // -------- Modify CSS Styles --------
    const colorBtn = document.getElementById('color-btn');
    const sizeBtn = document.getElementById('size-btn');
    const bgBtn = document.getElementById('bg-btn');
    const styleDemo = document.getElementById('style-demo');
    const body = document.body;
    
    // Array of color options to cycle through
    const colorOptions = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6', '#000000'];
    let currentColorIndex = 0;
    
    // Array of font size options to cycle through
    const sizeOptions = ['1em', '1.25em', '1.5em', '1.75em', '2em'];
    let currentSizeIndex = 0;
    
    // Dark mode toggle state
    let darkMode = false;
    
    colorBtn.addEventListener('click', function() {
        // Move to the next color option
        currentColorIndex = (currentColorIndex + 1) % colorOptions.length;
        
        // Update the text color
        styleDemo.style.color = colorOptions[currentColorIndex];
    });
    
    sizeBtn.addEventListener('click', function() {
        // Move to the next size option
        currentSizeIndex = (currentSizeIndex + 1) % sizeOptions.length;
        
        // Update the font size
        styleDemo.style.fontSize = sizeOptions[currentSizeIndex];
    });
    
    bgBtn.addEventListener('click', function() {
        // Toggle dark mode
        darkMode = !darkMode;
        
        if (darkMode) {
            body.style.backgroundColor = '#333';
            body.style.color = '#fff';
        } else {
            body.style.backgroundColor = '#fff';
            body.style.color = '#333';
        }
    });
    
    // -------- Add/Remove Elements --------
    const addBtn = document.getElementById('add-btn');
    const removeBtn = document.getElementById('remove-btn');
    const elementContainer = document.getElementById('element-container');
    
    // Counter to keep track of how many elements have been added
    let elementCounter = 0;
    
    addBtn.addEventListener('click', function() {
        // Create a new element
        const newElement = document.createElement('div');
        elementCounter++;
        
        // Set unique ID and content
        newElement.id = 'dynamicElement-' + elementCounter;
        newElement.className = 'dynamicElement';
        newElement.innerHTML = `
            <p>This is dynamic element #${elementCounter}</p>
            <p>Created at: ${new Date().toLocaleTimeString()}</p>
        `;
        
        // Apply some styles
        newElement.style.backgroundColor = colorOptions[Math.floor(Math.random() * colorOptions.length)];
        newElement.style.color = '#fff';
        newElement.style.padding = '10px';
        newElement.style.margin = '10px 0';
        newElement.style.borderRadius = '4px';
        
        // Add the new element to the container
        elementContainer.appendChild(newElement);
    });
    
    removeBtn.addEventListener('click', function() {
        // Get the last child of the container
        const lastElement = elementContainer.lastElementChild;
        
        // Remove the element if it exists
        if (lastElement) {
            // Add a fade-out effect before removing
            lastElement.style.opacity = '0';
            lastElement.style.transition = 'opacity 0.5s ease';
            
            // Remove the element after the transition completes
            setTimeout(function() {
                elementContainer.removeChild(lastElement);
            }, 500);
        } else {
            alert('No elements to remove!');
        }
    });
});