import * as React from 'react'
// import * as css from './styles.scss'

// interface T {
//     variant: 'success' | 'amper' | 'red';
//     children?: any;
// }

export default class Range extends React.PureComponent<{}, {}> {
    // static defaultProps = {
    //     variant: 'success',
    //     children: ''
    // }

    render () {
        // const cn: any = []
        // const { variant, children } = this.props

        // cn.push(css.box)
        // cn.push(css.alternate)

        // cn.push(css[variant])

        return (
            <input type="range" step="1" min="0" max="100" value="39" />
        )
    }
}
