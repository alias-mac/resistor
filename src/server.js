/*
 * Copyright (c) 2016 Filipe Guerra
 * https://github.com/alias-mac/resistor
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React from 'react';
import { renderToString } from 'react-dom/server';

import ResistorCalculator from './components/ResistorCalculator';

console.log(renderToString(<ResistorCalculator />));
