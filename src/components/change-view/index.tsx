import * as React from 'react'
import * as css from './styles.scss'

import { Icon } from 'components'

interface T {
    active: 'table' | 'list' | 'thumbnails';
    showTitle: boolean;
    className: string;
    handleChange: ((type: string) => void);
}

interface S {
    active: 'table' | 'list' | 'thumbnails';
}

export default class ChangeView extends React.Component<T, S> {
    static defaultProps = {
        active: 'table',
        className: '',
        showTitle: false,
        handleChange: (type) => {
            console.log('click button: ', type)
        }
    }

    state = {
        active: this.props.active
    }

    handleChange = active => (e) => {
        e.preventDefault()

        this.setState({ active })

        if (this.props.handleChange) {
            this.props.handleChange(active)
        }
    }

    renderItem = (type: string, name: string) => {
        const cn: any = []
        const label: any = []

        const { active } = this.state
        const { showTitle } = this.props

        cn.push(css.item)

        if (type && type === active) {
            cn.push(css.item_active)
        }

        if (showTitle) {
            cn.push(css.item_single)

            label.push(<span className={css.label} key="label">{ name }</span>)
        } else {
            cn.push(css.item_half)
        }

        return (
            <button className={cn.join(' ')} onClick={this.handleChange(type)}>
                <Icon symbol={type} className={css.icon} hidden />
                { label }
            </button>
        )
    }

    render () {
        const cn: any = []

        const { className } = this.props

        cn.push(css.view)

        if (className) {
            cn.push(className)
        }

        return (
            <div className={cn.join(' ')}>
                {this.renderItem('table', 'Таблица')}
                {this.renderItem('thumbnails', 'Список с картинками')}
                {this.renderItem('list', 'Список')}
            </div>
        )
    }
}
