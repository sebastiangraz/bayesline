import { useState, useEffect } from 'react';
const getRandomChar = () => {
  const chars = 'XxYyZzR0@#$%&/[';
  return chars[Math.floor(Math.random() * chars.length)];
};

export const ScrambleText = ({ inputText }: { inputText: string }) => {
  const randomChars = getRandomChar();
  const [chars, setChars] = useState<Array<{ char: string; key: string; isScrambled: boolean }>>([]);

  // Split input text into characters and wrap them in objects
  useEffect(() => {
    setChars(
      inputText.split('').map((char, index) => ({
        char,
        key: `${char}-${index}`,
        isScrambled: false
      }))
    );
  }, [inputText]);

  useEffect(() => {
    const scrambleChar = (index: number, count: number = 0) => {
      if (count >= 3) {
        return; // Stop scrambling after 9 changes
      }

      // Use a slightly longer interval for the scramble effect
      setTimeout(() => {
        setChars((currentChars) =>
          currentChars.map((item, idx) => {
            if (idx === index) {
              return { ...item, char: getRandomChar() };
            }
            return item;
          })
        );

        if (count === 2) {
          // Last iteration sets original char
          setTimeout(() => {
            setChars((currentChars) =>
              currentChars.map((item, idx) => {
                if (idx === index) {
                  return { ...item, char: inputText.charAt(idx), isScrambled: true };
                }
                return item;
              })
            );
          }, 320); // Set the final character after the last random character
        } else {
          scrambleChar(index, count + 1);
        }
      }, 320); // Increase the interval to slow down the scrambling
    };

    // Start scrambling each char at random intervals
    chars.forEach((_, index) => {
      setTimeout(() => scrambleChar(index), Math.random() * 1000);
    });
  }, [chars.length, inputText]); // Rerun effect if number of characters in inputText changes

  return (
    <span>
      {chars.map((item) => (
        <span key={item.key} className="char" style={{ opacity: item.isScrambled ? 1 : 0.7 }}>
          {item.char}
        </span>
      ))}
    </span>
  );
};
