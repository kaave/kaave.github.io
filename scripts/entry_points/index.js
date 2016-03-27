(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

window.addEventListener('DOMContentLoaded', function () {
  var nodes = document.querySelectorAll('.service');
  for (var i = 0, c = nodes.length; i < c; i++) {
    nodes[i].addEventListener('click', function (e) {
      var faNode = getFaNode(e.target);
      faNode.classList.remove('fa-github');
      faNode.classList.remove('fa-calendar');
      faNode.classList.remove('fa-twitter');
      faNode.classList.add('fa-spinner');
      faNode.classList.add('fa-pulse');
    });
  }
});

function getFaNode(node) {
  return node.classList.contains('fa') ? node : node.querySelector('i');
}

},{}]},{},[1]);
