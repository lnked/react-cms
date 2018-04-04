import * as React from 'react'
import * as css from './styles.scss'

interface S {
    completed: number;
}

export default class Progress extends React.PureComponent<{}, S> {
    state = {
        completed: 0
    }

    timerID: any = null

    componentDidMount () {
        this.timerID = setInterval(
            () => this.tick(),
            16
        )
    }

    componentWillUnmount () {
        this.stop()
    }

    tick = () => {
        this.setState(state => ({
            completed: state.completed + 1
        }), () => {
            if (this.state.completed >= 100) {
                this.stop()
            }
        })
    }

    stop = () => {
        clearInterval(this.timerID)
    }

    render () {
        const { completed } = this.state

        return (
            <div className={css.progress}>
                <span className={css.bar} style={{ 'width': `${completed}%` }} />
            </div>
        )
    }
}
