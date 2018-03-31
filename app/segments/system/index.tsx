import * as React from 'react'
import * as css from './styles.scss'

import { slugify } from 'transliteration'

import { Input, Icon } from 'components'

// interface T {
//     name: string;
//     symbol: string;
//     placeholder?: string;
// }

interface S {
    value: string;
    system: string;
}

export default class System extends React.Component<{}, S> {
    // static defaultProps = {
    //     placeholder: ''
    // }
    state = {
        value: '',
        system: ''
    }

    handleChange = (value) => {
        const system = slugify(value.toLowerCase())

        this.setState({ value, system })
    }

    render () {
        // const { name, symbol, placeholder } = this.props
        const { value, system } = this.state

        return (
            <div className={css.group}>
                <div className={css.control}>
                    <Input
                        name="test"
                        value={value}
                        cleaning={false}
                        handleChange={this.handleChange}
                    />
                </div>

                <div className={css.connect}>
                    <Icon symbol="connect" className={css.icon} />
                </div>

                <div className={css.control}>
                    <Input
                        name="test"
                        value={system}
                        readOnly={true}
                        cleaning={false}
                        placeholder=""
                    />
                </div>
            </div>
        )
    }
}
