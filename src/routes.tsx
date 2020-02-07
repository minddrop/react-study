import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import App from './App'
import { Book } from './Book'
import { Layout } from './Layout'

export const Path = {
  app: '/',
  book: '/book'
}

const routes = (
  <Layout>
    <Switch>
      <Route exact path={Path.app} component={App} />
      <Route exact path={Path.book} component={Book} />
      <Redirect to={Path.app} />
    </Switch>
  </Layout>
)

export default routes
