// Show/hide dropdown
document.addEventListener("click", function (event) {
    // Find the closest ancestor with a `data-trigger` attribute (if any)
    const triggerElement = event.target.closest("[data-toggle]");

    if (triggerElement) {
        // Get the target ID from the `data-trigger` attribute
        const targetId = triggerElement.getAttribute("data-toggle");
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            console.log(targetElement.style.display);
            // Toggle element
            if (targetElement.style.display === "none" || !targetElement.style.display || targetElement.hasAttribute('hidden')) {
                targetElement.style.display = "block"; // Show the dropdown
                targetElement.removeAttribute('hidden');
            } else {
                targetElement.style.display = "none"; // Hide the dropdown
                targetElement.setAttribute('hidden', '');
            }
        }
        // Prevent default action for links (optional)
        event.preventDefault();
        return; // Exit, since we handled the trigger click
    }
    // Close dropdowns if clicked outside
    const openedDropdowns = document.querySelectorAll('.dropdown[style*="display: block"]');
    openedDropdowns.forEach(dropdown => {
        // Check if the click is inside the dropdown
        if (!dropdown.contains(event.target)) {
            dropdown.style.display = "none"; // Close the dropdown
        }
    });
});