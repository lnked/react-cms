import * as React from 'react'
import * as css from './styles.scss'

interface T {
    variant: 'error' | 'info' | 'normal' | 'success' | 'warning';
    children?: any;
}

export default class Important extends React.PureComponent<T, {}> {
    static defaultProps = {
        variant: 'success',
        children: ''
    }

    render () {
        const cn: any = []
        const { variant, children } = this.props

        cn.push(css.box)
        cn.push(css.alternate)

        cn.push(css[variant])

        return (
            <div className={cn.join(' ')}>
                {children}
            </div>
        )
    }
}
