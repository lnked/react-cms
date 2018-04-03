import * as React from 'react'
import * as css from './styles.scss'

import { Dropzone as Zone } from 'react-dropzone'

interface T {
    target?: string;
    children?: string;
}

export default class Dropzone extends React.PureComponent<T, {}> {
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
        let dropzoneRef
        // const { target, children } = this.props

        return (
            <div className={css.dropzone}>
                <Zone ref={(node) => { dropzoneRef = node }} onDrop={(accepted, rejected) => {
                    console.log(accepted, rejected)
                }}>
                    <p>Drop files here.</p>
                </Zone>

                <button type="button" onClick={() => { dropzoneRef.open() }}>
                    Open File Dialog
                </button>
            </div>
        )
    }
}
