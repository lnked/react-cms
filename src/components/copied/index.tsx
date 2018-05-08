import * as React from 'react'
import * as css from './styles.scss'
import Clipboard from 'react-clipboard.js'

interface T {
    target?: string;
    children?: string;
}

export default class Copied extends React.PureComponent<T, {}> {
    static defaultProps = {
        target: '',
        children: ''
    }

    onSuccess = () => {
        console.info('successfully coppied')
    }

    getText = () => {
        return this.props.target || this.props.children
    }

    render () {
        const { target, children } = this.props

        return (
            <Clipboard option-text={this.getText} onSuccess={this.onSuccess} className={css.copy}>
                <span className={css.target}>
                    {children || target}
                </span>
            </Clipboard>
        )
    }
}
