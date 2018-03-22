import * as React from 'react'
import * as css from './styles.scss'

interface T {
    size: 'small' | 'normal' | 'medium' | 'big';
    type: 'primary' | 'secondary';
    label: string;
    className: string;
    children: string | React.ReactChild | React.ReactNode | any[];
}

// export const LemonReset = ({ tag: Tag, children, className, tagRef, ...otherProps }: Props) => (
//     <Tag className={classNames(styles\[\`lemon--${Tag}\`\], className)} ref={tagRef} {...otherProps}>
//         {children}
//     </Tag>
// )

// export const H1 = ({ children, className, ...otherProps }: TagProps) => (
//     <LemonReset tag="h1" className={className} {...otherProps}>
//         {children}
//     </LemonReset>
// )

export default class Title extends React.Component<T, {}> {
    static defaultProps = {
        size: 'normal',
        type: 'primary',
        className: ''
    }

    render () {
        const cn: any = []
        const {
            type, size, label, children, className
        } = this.props

        cn.push(css.title)

        if (type) {
            cn.push(css[`title_${type}`])
        }

        if (size) {
            cn.push(css[`title_size--${size}`])
        }

        if (className) {
            cn.push(className)
        }

        return (
            <div className={cn.join(' ')}>
                {label || children}
            </div>
        )
    }
}
