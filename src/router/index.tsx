import * as React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import Signing from '@/auth/signin'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'

const App = () => {
  const token = useSelector((state: RootState) => state.token)

  if (token === null) {
      return <Signing />
  } else {
    return (
      <Switch>
        <Route exact={true} component={require('@/home').default} path="/" />
        <Route exact={true} component={require('@/auth/signin').default} path="/signin" />
        <Route exact={true} component={require('@/auth/callback').default} path="/oauth2/callback" />
      </Switch>
    )
  }
}
export default App
