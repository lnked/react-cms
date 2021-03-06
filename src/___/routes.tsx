import * as React from 'react'
// import axios from 'axios'

import {
    BrowserRouter as Router,
    // Redirect,
    Route,
    Switch
} from 'react-router-dom'

// Layouts
import { CoreLayout } from 'layouts'

// Containers
import {
    Auth,
    Accounts,
    Assets,
    Dashboard,
    Entities,
    Extensions,
    Globals,
    Locale,
    NoMatch,
    Settings,
    Shop,
    Structure,
    Tasks,
    Updates
} from 'containers'

interface S {
    links: any;
    pages: any;
    pathname: string;
    isOverflow: boolean;
    redirectToPreviousRoute: boolean;
}

const base = '/cp'

const routes: any = [
    {
        path: `${base}`,
        exact: true,
        component: Dashboard
    }, {
        path: `${base}/auth`,
        component: Auth
    }, {
        path: `${base}/accounts`,
        component: Accounts
    }, {
        path: `${base}/shop`,
        component: Shop
    }, {
        path: `${base}/tasks`,
        component: Tasks
    }, {
        path: `${base}/assets`,
        component: Assets
    }, {
        path: `${base}/updates`,
        component: Updates
    }, {
        path: `${base}/locale`,
        component: Locale
    }, {
        path: `${base}/globals`,
        component: Globals
    }, {
        path: `${base}/dashboard`,
        component: Dashboard
    }, {
        path: `${base}/structure`,
        component: Structure
    }, {
        path: `${base}/entities`,
        component: Entities
    }, {
        path: `${base}/extensions`,
        component: Extensions
    }, {
        path: `${base}/settings`,
        component: Settings
    }, {
        status: 404,
        statusCode: 404,
        component: NoMatch
    }
]

// const AuthService = {
//     isAuthenticated: false,
//     authenticate (cb) {
//         this.isAuthenticated = true
//         setTimeout(cb, 100)
//     },
//     logout (cb) {
//         this.isAuthenticated = false
//         setTimeout(cb, 100)
//     }
// }

// // @ts-ignore
// const SecretRoute = ({ component: Component, ...rest }) => (
//     <Route {...rest} render={(props) => (
//         AuthService.isAuthenticated === true
//             ? <Component {...props} />
//             : <Redirect to={{
//                 pathname: '/login',
//                 state: { from: props.location }
//             }} />
//     )} />
// )

// <AuthStatus />
// const AuthStatus = withRouter(({ history }) => (
//     AuthService.isAuthenticated ? (
//       <p>
//         Welcome! <button onClick={() => {
//           AuthService.logout(() => history.push('/'))
//         }}>Sign out</button>
//       </p>
//     ) : (
//       <p>You are not logged in.</p>
//     )
// ))

export default class App extends React.Component<{}, S> {
    state = {
        links: [],
        pages: [],
        pathname: '',
        isOverflow: false,
        redirectToPreviousRoute: false
    }

    // login = () => {
    //     AuthService.authenticate(() => {
    //         this.setState({ redirectToPreviousRoute: true })
    //     })
    // }

    render () {
        // const { links, redirectToPreviousRoute } = this.state
        const { links } = this.state

        // const { from } = this.props.location.state || { from: { pathname: '/' } }
        // const { from } = { from: { pathname: '/' } }

        // if (redirectToPreviousRoute) {
        //     return <Redirect to={from} />
        // }

        // <button onClick={this.login}>Log in</button>
        // <SecretRoute path="/private" component={Auth} />

        return (
            <Router>
                <CoreLayout links={links} base={base}>
                    <Switch>
                        {routes.map(({ component: Component, ...rest }: any, key) => (
                            <Route
                                {...rest}
                                key={key}
                                render={(props: any) => {
                                    if (rest.path !== this.state.pathname) {
                                        if (rest.path) {
                                            console.log('render ', rest.path)
                                            // this.handleChangePath(rest.path)
                                        }

                                        return <Component {...props} />
                                    }

                                    return ''
                                }} />
                        ))}

                    </Switch>
                </CoreLayout>
            </Router>
        )
    }
}
