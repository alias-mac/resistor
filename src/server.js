/*
 * Copyright (c) 2016 Filipe Guerra
 * https://github.com/alias-mac/resistor
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import Debug from 'debug';
import fs from 'fs';
import PropTypes from 'prop-types';
import React from 'react';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';

import App from 'containers/App';

const debug = Debug('resistor');

function Index({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Resistor,Calculator,Resistor Calculator" />
        <meta
          name="description"
          content={
            'Graphical Resistance Calculator decodes and identifies a value ' +
            'and tolerance of several band resistors.'
          }
        />
        <meta name="author" content="Filipe Guerra" />
        <title>Graphical Resistance Calculator</title>
        <link rel="stylesheet" href="assets/app.css" />
      </head>
      <body>
        <div id="container" dangerouslySetInnerHTML={{ __html: children }} />
        <script src="assets/app.js" />
        <script
          dangerouslySetInnerHTML={{ __html: `
(function (i, s, o, g, r, a, m) {
i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
  (i[r].q = i[r].q || []).push(arguments)
}, i[r].l = 1 * new Date(); a = s.createElement(o),
  m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-33717220-2', 'auto');
ga('send', 'pageview');
` }}
        />
      </body>
    </html>
  );
}

Index.propTypes = {
  children: PropTypes.string,
};

Index.defaultProps = {
  children: '',
};

debug('rendering index page');
const renderedApp = renderToString(<App />);
const renderedLayout = renderToStaticMarkup(<Index>{renderedApp}</Index>);
const page = `<!DOCTYPE html>
${renderedLayout}
`;

debug('writting rendered page to \'public/index.html\'');
fs.writeFile('public/index.html', page, { encoding: 'utf8', flag: 'w', mode: 0o644 }, (err) => {
  if (err) {
    throw err;
  }
  debug('\'public/index.html\' ready');
});
