'use strict';

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var ReactAppDispatcher = require('../dispatcher/ReactAppDispatcher');

var LouisianaStore = assign({}, EventEmitter.prototype, {

});

LouisianaStore.dispatchToken = ReactAppDispatcher.register(function(action) {

  switch(action.type) {
    default:
  }

});

module.exports = LouisianaStore; 
