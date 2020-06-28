import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Loader } from './components'

const Sellers = lazy(() => import('./pages/Sellers'))
const SellerAppointment = lazy(() => import('./pages/SellerAppointment'))
const NotFound = lazy(() => import('./pages/NotFound'))

const App = () => (
  <Suspense fallback={<Loader />}>
    <Router>
      <Switch>
        <Route exact path={['/', '/seller']} component={Sellers} />
        <Route
          exact
          path='/appointment/:sellerId'
          component={SellerAppointment}
        />
        <Route path='*' component={NotFound} />
      </Switch>
    </Router>
  </Suspense>
)

export default App
