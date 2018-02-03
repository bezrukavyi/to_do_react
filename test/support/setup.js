import 'jest-localstorage-mock'
import dotenv from 'dotenv'

dotenv.config()

import React from "react";
import expect from 'expect';
import ReactDOM from 'react-dom'
import toJson from 'enzyme-to-json'
import renderer from 'react-test-renderer'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'

global.React = React;
global.expect = expect;
global.ReactDOM = ReactDOM;
global.toJson = toJson;
global.renderer = renderer;
global.thunk = thunk;
global.fetchMock = fetchMock;
