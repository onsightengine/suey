<div align="center">
<img src="./files/logo/osui256.png" alt="Onsight UI Library"/>
</div>

# Osui

The Onsight UI Library. A lightweight, customizable, modular UI library based on native HTML5 components.

<br />

Also includes an easy to use property inspector similar to [dat.gui](https://github.com/dataarts/dat.gui) or [lil-gui](https://github.com/georgealways/lil-gui).

<br />

<br>

## Install

- Option 1: Copy build file `osui.module.js`, import from file...

```javascript
// Import property inspector only
import { Gooey } from 'osui.module.js';

// Or, import entire library
import * as OSUI from 'osui.module.js';
```

- Option 2: Install from [npm](https://www.npmjs.com/package/@scidian/osui), import from '@scidian/osui'...
```
npm install @scidian/osui
```
```javascript
import * as OSUI from '@scidian/osui';
```

- Option 3: Import directly from CDN...
```javascript
import * as OSUI from 'https://unpkg.com/@scidian/osui/build/osui.module.js';
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
};

const myList = [ 'a', 'b', 'c', 'd', 'e' ];

const gui = new OSUI.Gooey('Title');
const folder = gui.addFolder('Folder Name');

folder.add(params, 'myBoolean');                            // checkbox
folder.add(params, 'myFunction');                           // button
folder.add(params, 'myListInt', myList);                    // list by number
folder.add(params, 'myListString', myList);                 // list by value
folder.add(params, 'myNumber', min, max, step, precision);  // slider
folder.add(params, 'myNumber2');                            // if no min / max, number only
folder.add(params, 'myString');                             // text box
folder.add(params, 'myVector');                             // any length array of numbers
folder.addColor(params, 'myColor______');                   // string / int / object / array
```

<br>

## Properties

- Property functions can be chained together

```javascript
folder.add(params, 'myNumber').name('Width').min(0).max(100).step(5).precision(1);
```

<br>

## On Change

```javascript
// Fires constantly when slider is being changed
folder.add(params, 'myNumber').onChange(() => width = params.myNumber);

// Fire when slider is done being changed
folder.add(params, 'myNumber').onFinishChange(() => width = params.myNumber);
```

<br>

## Updating

- Keep reference to `controller` if gui needs to be updated externally.

```javascript
params = { myNumber: 5.0 };

const gui = new OSUI.Gooey();
const folder = gui.addFolder('Folder Name');
const controller = folder.add(params, 'myNumber');

// ...somwhere later, params changes...
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

Osui is released under the terms of the MIT license, so it is free to use in your free or commercial projects.

Copyright (c) 2022-2023 Stephens Nunnally and Scidian Studios
