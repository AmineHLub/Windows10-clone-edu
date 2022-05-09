import React from 'react';
import '../../../stylesheets/Apps/notepad.css';

export default function NotePad() {
  return (
    <div className="frameapp-container">
      <textarea className="notepad-text-editor" />
    </div>
  );
}
