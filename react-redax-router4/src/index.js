import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxPromise from 'redux-promise'
import { BrowserRouter, Route } from 'react-router-dom'

import PostsIndex from './components/posts_index'
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path='/' component={PostsIndex} />
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'))
