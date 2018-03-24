import * as React from 'react'
import * as css from './styles.scss'

import { Icon, Input, Button } from 'components'

interface T {
    name: string;
    type?: 'google' | 'yandex';
    address?: string;
    handleChange?: (address: string) => void | boolean;
}

interface S {
    address: string;
}

export default class AddressInput extends React.Component<T, S> {
    static defaultProps = {
        name: 'map',
        type: 'yandex',
        address: '',
        handleChange: (count) => {
            console.log(': = ', count)
        }
    }

    state = {
        address: this.props.address || ''
    }

    handleChange = (address) => {
        console.log('address: ', address)
        // this.setState({ count })
    }

    render () {
        const { name, address } = this.props
        // const { count } = this.state

        return (
            <div className={css.wrapper}>
                <Input
                    type="text"
                    name={name}
                    value={address}
                    autoComplete="off"
                    placeholder="Введите адрес"
                    handleChange={this.handleChange}
                />

                <Button className={css.button} variant="pure">
                    <Icon symbol="point-map" className={css.icon} hidden />
                </Button>
            </div>
        )
    }
}
