import * as React from 'react'
import * as css from './styles.scss'

import { Input, Icon } from 'components'

interface T {
    name: string;
    placeholder?: string;
}

export default class Search extends React.Component<T, {}> {
    static defaultProps = {
        placeholder: ''
    }

    render () {
        const { name, placeholder } = this.props

        return (
            <div className={css.control}>
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
