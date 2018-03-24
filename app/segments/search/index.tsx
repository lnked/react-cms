import * as React from 'react'
import * as css from './styles.scss'

import { Input, Icon } from 'components'

interface T {
    name: string;
    className?: string;
    placeholder?: string;
}

export default class Search extends React.Component<T, {}> {
    static defaultProps = {
        className: '',
        placeholder: ''
    }

    render () {
        const cn: Array<string> = []
        const { name, placeholder, className } = this.props

        cn.push(css.control)

        if (className) {
            cn.push(className)
        }

        return (
            <div className={cn.join(' ')}>
                <span className={css.symbol}>
                    <Icon symbol="search" className={css.icon} />
                </span>

                <Input
                    name={name}
                    cleaning
                    placeholder={placeholder}
                    className={css.input}
                />
            </div>
        )
    }
}
