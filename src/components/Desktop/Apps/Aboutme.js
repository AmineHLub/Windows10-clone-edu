/* eslint-disable react/prop-types */
import React from 'react';
import '../../../stylesheets/Apps/aboutme.css';

export default function Aboutme({ setAboutMePopup }) {
  return (
    <div className="about-me-popup d-flex">
      <button type="button" className="close-aboutme-popup" onClick={() => setAboutMePopup(false)}>
        <span aria-hidden="true">&times;</span>
      </button>
      <section className="my-name">
        <h2>Mohamed Amine Hajltaief</h2>
      </section>
      <section className="my-info d-flex">
        <p>
          Hey, You can call me Moe. I&apos;m from Tunisia and I&apos;m a
          full stack web developper. I&apos;m also a tech enthusiast
          with good knowledge about low level computer functionalities.
        </p>
        <img src="https://moehajltaief.netlify.app/static/media/photo_nobg.74001913c1a83e7324e8.png" alt="myphoto" />
      </section>
      <section className="social-media">
        <ul className="social-media-header d-flex">
          <li>
            <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/Amino47612441">
              <img src="https://i.ibb.co/H4sRCFV/twitter.png" alt="twitter" />
            </a>
          </li>
          <li>
            <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/mohamedamine-hajltaief/">
              <img src="https://i.ibb.co/jyK9T0x/linkedin.png" alt="linkedin" />
            </a>
          </li>
          <li>
            <a rel="noopener noreferrer" target="_blank" href="https://github.com/AmineHLub">
              <img src="https://i.ibb.co/QcXZL1d/github.png" alt="github" />
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
