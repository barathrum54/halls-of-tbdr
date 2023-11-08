const typewriterDirective = {
  beforeMount(el: any, binding: any) {
    const totalDuration = binding.value || 2000;
    const text = el.textContent;
    el.textContent = ""; // Clear the content

    let charIndex = 0;

    function typeCharacter() {
      if (charIndex < text.length) {
        const char = text.charAt(charIndex);

        // Calculate character duration to make the entire text appear in totalDuration
        const charDuration = (totalDuration * char.length) / text.length;

        // Initial opacity
        let opacity = 0;
        const opacityStep = 1 / char.length; // Calculate step based on character length

        // Create a text node for the character
        const charNode = document.createTextNode(char);

        // Set the font-family for the charNode

        // Append the charNode to the element
        el.appendChild(charNode);

        const charTimer = setInterval(() => {
          opacity += opacityStep;

          if (opacity >= 1) {
            clearInterval(charTimer);
            charIndex++;
            if (char === "<") {
              const endIndex = text.indexOf(">", charIndex);
              if (endIndex !== -1) {
                charNode.textContent = text.substring(charIndex, endIndex + 1);
                charIndex = endIndex + 1;
              }
            }
            typeCharacter();
          }
        }, charDuration);
      }
    }

    typeCharacter();
  },
};

export default typewriterDirective;
