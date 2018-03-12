import * as React from 'react'
import * as css from './styles.scss'

export default class Cell extends React.PureComponent<{}, {}> {
    render () {
        return (
            <div className={css.table} />
        )
    }
}
