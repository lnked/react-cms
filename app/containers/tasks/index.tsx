import * as React from 'react'

import { Content } from 'segments'

export default class Tasks extends React.Component<{}, {}> {
    // shouldComponentUpdate () {
    //     const shouldUpdate =
    //         !shallowEqual(prevProps, nextProps) ||
    //         !shallowEqual(inst.state, nextState)

    //     return shouldUpdate
    // }
    render () {
        return (
            <Content>Tasks!</Content>
        )
    }
}
