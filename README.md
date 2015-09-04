# mole-redux [![Build Status](https://travis-ci.org/molejs/mole-redux.svg?branch=master)](https://travis-ci.org/molejs/mole-redux)

mole-redux is a tiny helper library that works as a middleware for redux,
allowing easy state-action molejs.
Underneath, it uses the report() method from
[mole-reporter](https://github.com/molejs/mole-reporter) one of the three
independent packages that form the whole molejs service stack.

All the reported logs follow the **mole log specification**.

## Requirements
[mole-reporter](https://github.com/molejs/mole-reporter)

## Install

```bash
npm install --save mole-redux
```

## Configure with redux

When loading your store use `applyMiddleware` and `createStoreWithMiddleware`
[as described by the redux docs](https://rackt.github.io/redux/docs/advanced/Middleware.html).

asdasd


```javascript
import moleMiddleware from 'mole-redux';

/* ... */

let createStoreWithMiddleware = applyMiddleware(moleMiddleware);
let appReducers = combineReducers(reducers);
let store = createStoreWithMiddleware(appReducers);
```

## Error logging

In order to actually do the logging you still need to integrate mole-reporter to
implement the report and config methods.

The first thing is to surround you application's entry point in a try-catch block.
In react this would look something like the following, though YMMV.

```javascript
import Mole from 'mole-reporter';
/* import Component */

Mole.config({url: 'http://api.example.com/mole'});

try {
  React.render(Component, document.body);
} catch (error) {
  Mole.report(error);
}
```