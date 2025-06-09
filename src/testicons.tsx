import React from 'react';
import { FaGithub, FaInstagram } from 'react-icons/fa';

const TestIcons: React.FC = () => {
  return (
    <div className="flex gap-4 text-4xl text-yellow-600">
      <FaGithub />
      <FaInstagram />
    </div>
  );
};

export default TestIcons;
