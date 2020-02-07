import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import App from './App'
import { Book } from './components/Book'
import { Weather } from './components/Weather'
import { Layout } from './Layout'

export const Path = {
  app: '/',
  book: '/book',
  weather: '/weather'
}

const routes = (
  <Layout>
    <Switch>
      <Route exact path={Path.app} component={App} />
      <Route exact path={Path.book} component={Book} />
      <Route exact path={Path.weather} component={Weather} />
      <Redirect to={Path.app} />
    </Switch>
  </Layout>
)

export default routes
