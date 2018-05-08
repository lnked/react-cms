import * as React from 'react'

interface T {
    importer: any;
}

interface S {
    isLoaded?: boolean;
    Component?: any;
}

export default class Importer extends React.Component<T, S> {
    state = {
        isLoaded: false,
        Component: false
    }

    componentDidMount () {
        const { importer } = this.props

        importer().then(m => {
            this.setState({
                isLoaded: true,
                Component: m.default
            })
        })
    }

    render () {
        const { isLoaded, Component } = this.state

        return isLoaded && Component
            // @ts-ignore
            ? <Component {...this.props} />
            : <span>Loading...</span>
    }
}
