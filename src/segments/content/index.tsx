import * as React from 'react'
import * as css from './styles.scss'

interface T {
    className?: string;
    children?: string | React.ReactChild | React.ReactNode | any[];
}

export default class Content extends React.Component<T, {}> {
    render () {
        const cn: any = []
        const { className, children } = this.props

        cn.push(css.content)

        if (className) {
            cn.push(className)
        }

        return (
            <div className={cn.join(' ')}>
                {children}
            </div>
        )
    }
}
