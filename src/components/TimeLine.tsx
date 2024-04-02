import React from "react";

// components/RoadMap.tsx

const TimeLine: React.FC = () => {
  const steps = [
    { title: 'What to Learn?' },
    { title: 'Choose a Project' },
    { title: 'Get a Mentor' },
    { title: 'Work on Project' },
    { title: 'New Skill Acquired' },
  ];

  return (
    <section>
      <h2>Road Map</h2>
      <div className="steps">
        {steps.map((step, index) => (
          <div key={index} className="step">
            <div className="icon-placeholder"></div>
            <p>{step.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TimeLine;