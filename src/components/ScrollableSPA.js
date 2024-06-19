// src/components/ScrollableSPA.js
import React from 'react';
import './ScrollableSPA.css';

const ScrollableSPA = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="scrollable-spa">
      <h2>Scrollable SPA</h2>
      <p>
        This is a scrollable Single Page Application (SPA) component. You can scroll down to see more content.
      </p>
      <div className="navigation">
        <button onClick={() => scrollToSection('section1')}>Section 1</button>
        <button onClick={() => scrollToSection('section2')}>Section 2</button>
        <button onClick={() => scrollToSection('section3')}>Section 3</button>
      </div>
      <div className="content">
        <section id="section1">
          <h3>Section 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna vel faucibus bibendum, nulla nulla tincidunt nulla, vel faucibus enim mauris vel eros. Sed vel mauris vel mauris bibendum tincidunt.</p>
          <p>Fusce vel mauris vel mauris bibendum tincidunt. Sed tincidunt, nunc vel faucibus bibendum, nulla nulla tincidunt nulla, vel faucibus enim mauris vel eros. Sed vel mauris vel mauris bibendum tincidunt.</p>
                  <p>Donec vel mauris vel mauris bibendum tincidunt. Sed tincidunt, nunc vel faucibus bibendum, nulla nulla tincidunt nulla, vel faucibus enim mauris vel eros. Sed vel mauris vel mauris bibendum tincidunt.</p>
            <br /><br /><br /><br /><br />
        </section>
        <section id="section2">
          <h3>Section 2</h3>
          <p>Sed auctor, magna vel faucibus bibendum, nulla nulla tincidunt nulla, vel faucibus enim mauris vel eros. Sed vel mauris vel mauris bibendum tincidunt.</p>
          <p>Fusce vel mauris vel mauris bibendum tincidunt. Sed tincidunt, nunc vel faucibus bibendum, nulla nulla tincidunt nulla, vel faucibus enim mauris vel eros. Sed vel mauris vel mauris bibendum tincidunt.</p>
            <p>Donec vel mauris vel mauris bibendum tincidunt. Sed tincidunt, nunc vel faucibus bibendum, nulla nulla tincidunt nulla, vel faucibus enim mauris vel eros. Sed vel mauris vel mauris bibendum tincidunt.</p>
                  <br /><br /><br /><br /><br />
        </section>
        <section id="section3">
          <h3>Section 3</h3>
          <p>Vel faucibus enim mauris vel eros. Sed vel mauris vel mauris bibendum tincidunt. Sed tincidunt, nunc vel faucibus bibendum, nulla nulla tincidunt nulla, vel faucibus enim mauris vel eros.</p>
          <p>Fusce vel mauris vel mauris bibendum tincidunt. Sed tincidunt, nunc vel faucibus bibendum, nulla nulla tincidunt nulla, vel faucibus enim mauris vel eros. Sed vel mauris vel mauris bibendum tincidunt.</p>
          <p>Donec vel mauris vel mauris bibendum tincidunt. Sed tincidunt, nunc vel faucibus bibendum, nulla nulla tincidunt nulla, vel faucibus enim mauris vel eros. Sed vel mauris vel mauris bibendum tincidunt.</p>
            <br /><br /><br /><br /><br />
        </section>
      </div>
    </div>
  );
};

export default ScrollableSPA;
