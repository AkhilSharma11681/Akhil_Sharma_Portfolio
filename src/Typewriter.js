import React, { useEffect, useState } from 'react';

const titles = [
  "Frontend Developer",
  "Web Designer",
  "UI/UX Lover",
  "React Enthusiast"
];

function Typewriter() {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = titles[index];
    let timeout;

    if (!deleting && charIndex <= current.length) {
      timeout = setTimeout(() => {
        setDisplayText(current.substring(0, charIndex));
        setCharIndex(prev => prev + 1);
      }, 100);
    } else if (deleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayText(current.substring(0, charIndex));
        setCharIndex(prev => prev - 1);
      }, 50);
    } else {
      timeout = setTimeout(() => {
        setDeleting(!deleting);
        if (!deleting) {
          setCharIndex(current.length);
        } else {
          setIndex((prev) => (prev + 1) % titles.length);
        }
      }, 1000);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, index]);

  return (
    <h2 className="typewriter">{displayText}<span className="cursor">|</span></h2>
  );
}

export default Typewriter;