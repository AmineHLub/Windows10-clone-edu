import React from 'react';
import { Helmet } from 'react-helmet';

export default function Cmd() {
  return (
    <div className="prompt-app-wrapper">
      <Helmet>
        <script src="https://www.cssscript.com/demo/teminal-style-caret-text-field/caret-js/caret.js" type="text/javascript" />
      </Helmet>
      <p>Microsoft Windows [Version 10.0.14393]</p>
      <p>(c) 2016 Microsoft Corporation. All rights reserved.</p>
      <div className="command-input-container">
        <p>
          C:\Windows\system32
          {'>'}
        </p>
        <textarea className="command-input" />
      </div>

    </div>
  );
}
