import * as React from 'react'
import * as css from './styles.scss'

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
        return (
            <div className={css.range}>
                <input type="range" step="1" min="0" max="100" value="10" className={css.input} />
                <input type="range" step="1" min="0" max="100" value="40" className={css.input} />
            </div>
        )
    }
}
