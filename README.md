# generator-rockets-react-component [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> A react component generator

## Installation

First, install [Yeoman](http://yeoman.io) and generator-rockets-react-component using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-rockets-react-component
```
<br>

## Generating Components

To generate a new component in your current directiory, run:
```bash
yo rockets-react-component
```
You will be prompted to specify some information about your new component:
- Component Name: string
- Connect to Redux: Y/n

A basic component with have the following directory structure:
```bash
└───NewComponent/
    ├───NewComponentContainer.js
    ├───NewComponentView.js
    └───index.js
```

A component with redux enabled:
```bash
└───NewComponent/
    ├───NewComponentContainer.js
    ├───NewComponentView.js
    ├───actions.js
    ├───actionTypes.js
    ├───reducer.js
    └───index.js
```

<br>

## License

MIT © [Fergus Farrell]()


[npm-image]: https://badge.fury.io/js/generator-rockets-react-component.svg
[npm-url]: https://npmjs.org/package/generator-rockets-react-component
[travis-image]: https://travis-ci.com/fergusfrl/generator-rockets-react-component.svg?branch=master
[travis-url]: https://travis-ci.com/fergusfrl/generator-rockets-react-component
[daviddm-image]: https://david-dm.org/fergusfrl/generator-rockets-react-component.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/fergusfrl/generator-rockets-react-component
