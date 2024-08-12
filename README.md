<div align="center">
<img src="./files/logo/suey256.png" alt="Suey"/>
</div>

# Suey

The Onsight UI Library. A lightweight, customizable, modular UI library based on native HTML5 components.

<br />

Also includes an easy to use property inspector similar to [dat.gui](https://github.com/dataarts/dat.gui) or [lil-gui](https://github.com/georgealways/lil-gui).

<br />

<br>

## Install

- Option 1: Copy build file `suey.module.js`, import from file...

```javascript
// Import property inspector only
import { Gooey } from 'suey.module.js';

// Or, import entire library
import * as SUEY from 'suey.module.js';
```

- Option 2: Install from [npm](https://www.npmjs.com/package/suey), import from 'suey'...
```
npm install suey
```
```javascript
import * as SUEY from 'suey';
```

- Option 3: Import directly from CDN...
```javascript
import * as SUEY from 'https://unpkg.com/suey/dist/suey.module.js';
```

<br>

## Creation

```javascript
const params = {
    myBoolean: true,
    myFunction: () => console.log('hello world'),
    myListInt: 0,
    myListString: 'b',
    myNumber: 75.54,
    myNumber2: 50,
    myString: 'California',
    myArray: [ 1, 0, 0 ],

    myColorString: '#ffffff',
    myColorInt: 0xffffff,
    myColorObject: { r: 1, g: 1, b: 1 },
    myColorArray: [ 1, 1, 1 ],
    myColorAlpha: 1.0,
};

const myList = [ 'a', 'b', 'c', 'd', 'e' ];

const gui = new SUEY.Gooey('Title');
const folder = gui.addFolder('Folder Name');

// Add Property
folder.add(params, 'myBoolean');                            // checkbox
folder.add(params, 'myFunction');                           // button
folder.add(params, 'myListInt', myList);                    // list by number
folder.add(params, 'myListString', myList);                 // list by value
folder.add(params, 'myNumber', min, max, step, precision);  // slider
folder.add(params, 'myNumber2');                            // if no min / max, number only
folder.add(params, 'myString');                             // text box
folder.add(params, 'myVector');                             // any length array of numbers
folder.addColor(params, 'myColor______');                   // string / int / object / array
folder.addColor(params, 'myColor______', 'myColorAlpha');   // color with transparency

// Expand / Collapse Folder
folder.toggle();
```

<br>

## Properties

- Property functions can be chained together

```javascript
// Add Property
folder.add(params, 'myNumber').name('Width').min(0).max(90).step(5).precision(1).unit('°');

// Custom Property Title
const controller = folder.add(params, 'myNumber');
controller.name('Custom Title');

// Hide / Show Property
controller.hide();
controller.show();
```

<br>

## On Change

```javascript
// Fires constantly when slider is being changed
folder.add(params, 'myNumber').onChange(() => width = params.myNumber);

// Fires only when slider is done being changed
folder.add(params, 'myNumber').onFinishChange(() => width = params.myNumber);
```

<br>

## Updating

- Keep reference to `controller` if gui needs to be updated externally.

```javascript
params = { myNumber: 5.0 };

const gui = new SUEY.Gooey();
const folder = gui.addFolder('Folder Name');
const controller = folder.add(params, 'myNumber');

// ...somwhere later params changes...
params.myNumber += 2.0;

// ...tells element to update itself from new value
controller.updateDisplay();
```

<br>

## Styling

```javascript
gui.color('#bb0000');       // Sets gui color
gui.opacity(0.5);           // Set background opacity
gui.scale(1.0);             // Scale multiplier
gui.width(200);             // Set panel width
```

<br>

## License

Suey is released under the terms of the MIT license, so it is free to use in your free or commercial projects.

Copyright (c) 2024 Stephens Nunnally and Scidian Studios
