# Find Element In Array [![Build Status](https://travis-ci.org/miladezzat/find_el_in_array.svg?branch=master)](https://travis-ci.org/miladezzat/find_el_in_array) [![npm version](https://badge.fury.io/js/find_el_in_array.svg)](https://badge.fury.io/js/find_el_in_array)

search in array

## Getting Started

This is an npm package for search in array

### Prerequisites

you should have node.js in your local machine

### Installing

``` bash
    npm i find_el_in_array
    
    //OR

    yarn add find_el_in_array
```

### How To Use it
After install package

1. Examples for simple array:
```js

const FindElementInArray = require('find_el_in_array');

//OR

import FindElementInArray from 'find_el_in_array';


const findElementInArray = new FindElementInArray();

//simple array
    const testArray = [
      'milad', 'ezzat', 'fahmy', 1, 5, 8,
    ];
    const searchItem = 8;

const result = findElementInArray.searchInSimpleArray(testArray, searchItem);
// return 8

// complex array

  const testArray = [
    { id: 1, name: 'milad', age: 24 },
    { id: 2, name: 'ezzat', age: 24 },
    { id: 4, name: 'Milad', age: 24 },
    { id: 3, name: 'Fahym', age: 24 },
  ];
const result = searchInArray.searchInComplexArray(testArray, 'id', 4);
// return { id: 4, name: 'Milad', age: 24 }
```
## Authors

* **Milad E. Fahmy** - *Initial work* - [Milad E. Fahmy](https://github.com/miladezzat/)


## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/miladezzat/find_el_in_array/blob/development/LICENCE) file for details

