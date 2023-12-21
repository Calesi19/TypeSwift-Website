import React, { useState, useEffect } from 'react';

const TypingAnimation = ({typingSpeed = 300, deletingSpeed = 50 }) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
    const shortcut = "tsdemo ";
    const phrase = "This is how a shortcut expands into a phrase."

    
  useEffect(() => {
      let timeout;
      
      if (isDeleting && text === '') {
        timeout = setTimeout(() => {
            setIsDeleting(!isDeleting);
        }, 2000);
      }

    // Typing Effect
    if (!isDeleting && text.length < shortcut.length) {
      timeout = setTimeout(() => {
        setText(shortcut.substring(0, text.length + 1));
      }, typingSpeed);
    }
    // Deleting Effect
    else if (isDeleting && text.length > 0) {
      timeout = setTimeout(() => {
        setText(text.substring(0, text.length - 1));
      }, deletingSpeed);
    }
    // Switch to next text or loop back
    else if (text === shortcut) {
        timeout = setTimeout(() => {
            setText(phrase);
        }, 400);
        // pause for two seconds

        timeout = setTimeout(() => {
            setIsDeleting(!isDeleting);
        }, 4000);

        // Restart typing
        timeout = setTimeout(() => {
            setText('');
        }, 2000);
      
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, typingSpeed, deletingSpeed]);

  return (
    <div>
      {text}
      <span className="cursor" />
    </div>
  );
};

export default TypingAnimation;
