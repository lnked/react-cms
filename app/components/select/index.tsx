import * as React from 'react'
import * as css from './styles.scss'

import { default as ReactSelect } from 'react-select'

export default class Select extends React.PureComponent<{}, {}> {
    render () {
        return <ReactSelect className={css.select} {...this.props} />
    }
}
