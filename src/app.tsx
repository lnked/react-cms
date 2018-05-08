import * as React from 'react'

import { hot } from 'react-hot-loader'

import {
    BrowserRouter as Router,
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

interface S {
    links: any;
    pages: any;
    pathname: string;
    isOverflow: boolean;
    redirectToPreviousRoute: boolean;
}

class App extends React.Component<{}, S> {
    state = {
        links: [],
        pages: [],
        pathname: '',
        isOverflow: false,
        redirectToPreviousRoute: false
    }

    render () {
        const { links } = this.state

        return (
            <Router>
                <CoreLayout links={links} base={base}>
                    <Switch>
                        {routes.map(({ component: Component, ...rest }: any, key) => (
                            <Route {...rest} key={key} render={(props: any) =>
                                <Component {...props} className={`fade fade-${status}`} />
                            } />
                        ))}
                    </Switch>
                </CoreLayout>
            </Router>
        )
    }
}

export default hot(module)(App)
