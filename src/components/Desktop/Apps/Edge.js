import React, { useState } from 'react';
import '../../../stylesheets/Apps/edge.css';
import rld from '../../../assets/edge/rld.png';
import home from '../../../assets/edge/home.png';

export default function Edge() {
  const [link, setLink] = useState('');
  const [pageLink, setpageLink] = useState('');
  const [isHome, setIsHome] = useState(true);

  const reloadPage = () => {
    const temp = pageLink;
    setpageLink('');
    setTimeout(() => setpageLink(temp), 500);
  };

  const loadPage = (e) => {
    if (e.key === 'Enter') {
      setIsHome(false);
      if (!link.includes('http')) {
        setLink(`http://${link}`);
        setpageLink(`http://${link}`);
      } else setpageLink(link);
    }
  };

  return (
    <>
      <section className="tab-adress-section">
        <div className="browser-navigation d-flex">
          <button onClick={() => setIsHome(true)} type="button" className="browser-navigation-home-button">
            <img src={home} alt="back" />
          </button>
          <button onClick={() => reloadPage()} type="button" className="browser-navigation-rld-button">
            <img src={rld} alt="back" />
          </button>
          <input
            className="adress-bar"
            type="text"
            placeholder="Search or enter address"
            onChange={(e) => setLink(e.target.value)}
            onKeyPress={(e) => loadPage(e)}
          />
        </div>
      </section>
      <section className="tab-content-section">
        {!isHome ? (
          <iframe onContextMenu="return false;" title="website" loading="lazy" src={pageLink}>
            <p>Your browser does not support iframes.</p>
          </iframe>
        ) : (<div className="edge-home-bg" />)}

      </section>
    </>
  );
}
