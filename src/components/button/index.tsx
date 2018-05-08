import * as React from 'react'
import * as css from './styles.scss'

// import { withHandlers } from 'hocs'

interface T {
    type?: string;
    rounded?: boolean;
    size?: 'small' | 'large' | 'normal' | 'medium';
    label?: string;
    isIcon?: boolean;
    variant?: 'pure' | 'link' | 'info' | 'danger' | 'normal' | 'primary' | 'success' | 'warning' | 'subtle-link';
    className?: string;
    isDisabled?: boolean;
    children?: string | React.ReactChild | React.ReactNode | any[];
    handleClick?: () => void | boolean;
}

export default class Button extends React.PureComponent<T, {}> {
    static defaultProps = {
        size: 'normal',
        type: 'button',
        variant: 'normal',
        rounded: false,
        isIcon: false,
        isDisabled: false,
        handleClick: () => {
            console.log(' click button ')
        }
    }

    handleClick = () => {
        if (this.props.handleClick) {
            this.props.handleClick()
        }
    }

    render () {
        const cn: any = []
        const {
            label, rounded, children, type, size, variant, isIcon, isDisabled, className
        } = this.props

        cn.push(css.button)
        cn.push(css[`size_${size}`])
        cn.push(css[`variant_${variant}`])

        if (rounded) {
            cn.push(css.rounded)
        }

        if (isIcon) {
            cn.push(css.icon)
        }

        if (className) {
            cn.push(className)
        }

        return (
            <button type={type} onClick={this.handleClick} className={cn.join(' ')} disabled={isDisabled}>
                {label || children}
            </button>
        )
    }
}

// const enhance = withHandlers({
//     onClick: ({ message }) => () => console.info(message)
// })

// export default enhance(Button)
