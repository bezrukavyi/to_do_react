const PROJECTS = {
  "data": [
    {
      "id": "1",
      "type": "projects",
      "attributes": {
        "title": "Project 1",
      },
      "relationships": {
        "tasks": {
          "data": [
            {
              "id": "1",
              "type": "tasks"
            }
          ]
        }
      }
    },
    {
      "id": "2",
      "type": "projects",
      "attributes": {
        "title": "Project 2",
      },
      "relationships": {
        "tasks": {
          "data": [
            {
              "id": "2",
              "type": "tasks"
            }
          ]
        }
      }
    }
  ],
  "included": [
    {
      "id": "1",
      "type": "tasks",
      "attributes": {
        "title": "Task 1.1",
        "project-id": 1
      }
    },
    {
      "id": "2",
      "type": "tasks",
      "attributes": {
        "title": "Task 2.1",
        "project-id": 2
      }
    }
  ]
}

import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import { store } from 'store'
import Project from 'store/Entities/Project'
import sinon from 'sinon'
import axios from 'axios'
import moxios from 'moxios'
import MockAdapter from 'axios-mock-adapter'

const mockStore = configureMockStore([thunk])
const stubStore = mockStore({});
const axiosMock = new MockAdapter(axios)

describe('Moxios', () => {
  beforeEach(() => {
    moxios.install();
  })

  afterEach(() => {
    moxios.uninstall();
  })

  it('Test 1', (done) => {
    moxios.wait(() => {
      const stubedRequest = moxios.requests.__items.find((request) => request.config.url == 'http://localhost:3000/api/v1/projects')
      stubedRequest.respondWith({ status: 200, response: PROJECTS })
    });

    const expectedActions = [
      { type: Project.types.PROJECT_LIST + '_REQUEST', payload: { params: {} } },
      { type: Project.types.PROJECT_LIST + '_SUCCESS', body: PROJECTS },
    ]

    return stubStore.dispatch(Project.actions.getList({})).then(() => {
      console.log(stubStore.getActions())
      done()
    })
  })
})

describe('MockAdapter', () => {
  afterEach(() => {
    axiosMock.reset()
  })

  it('Mock store', (done) => {
    const PROJECTS = { test: 'test' }

    axiosMock.onGet('/projects').reply(200, PROJECTS)

    const expectedActions = [
      { type: Project.types.PROJECT_LIST + '_REQUEST', payload: { params: {} } },
      { type: Project.types.PROJECT_LIST + '_SUCCESS', body: PROJECTS },
    ]

    return stubStore.dispatch(Project.actions.getList({})).then(() => {
      console.log(stubStore.getActions())
      done()
    })
  })

  it('Real store', (done) => {
    axiosMock.onGet('/projects').reply(200, PROJECTS)

    const expectedActions = [
      { type: Project.types.PROJECT_LIST + '_REQUEST', payload: { params: {} } },
      { type: Project.types.PROJECT_LIST + '_SUCCESS', body: PROJECTS },
    ]

    return store.dispatch(Project.actions.getList({})).then(() => {
      console.log(store.getState())
      done()
    })
  })
})
