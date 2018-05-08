import * as React from 'react'
// import * as css from './styles.scss'

import { Content } from 'segments'

interface P {
    className: string;
}

export default class Shop extends React.Component<P, {}> {
    render () {
        const { className } = this.props

        return (
            <Content className={className}>
                Shopping!

                orders<br />
                sale<br />
                storage<br />
                address<br />
                catalog<br />
                category<br />
                customers<br />
                discount<br />
                settings<br />
                manufacturers<br />
                data as - ingredients tags
            </Content>
        )
    }
}
