import React from "react";
import expect from 'expect';
import ReactDOM from 'react-dom'
import toJson from 'enzyme-to-json'
import renderer from 'react-test-renderer'

global.React = React;
global.expect = expect;
global.ReactDOM = ReactDOM;
global.toJson = toJson;
global.renderer = renderer;
