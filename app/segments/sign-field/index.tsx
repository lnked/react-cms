import * as React from 'react'
import * as css from './styles.scss'

import { Input } from 'components'

interface T {
    name: string;
    symbol: string;
    placeholder?: string;
}

export default class SignField extends React.Component<T, {}> {
    static defaultProps = {
        placeholder: ''
    }

    render () {
        const { name, symbol, placeholder } = this.props

        return (
            <div className={css.control}>
                <span className={css.symbol}>
                    {symbol}
                </span>

                <Input
                    name={name}
                    cleaning={false}
                    placeholder={placeholder}
                />
            </div>
        )
    }
}
