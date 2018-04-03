import * as React from 'react'
import * as css from './styles.scss'

import Dropzone from 'react-dropzone'

interface S {
    files: Array<any>;
}

export default class FileUpload extends React.PureComponent<{}, S> {
    state = {
        files: []
    }

    handleDrop = (acceptedFiles, rejectedFiles) => {
        console.log(acceptedFiles, rejectedFiles)

        this.setState({
            files: acceptedFiles
        })

        acceptedFiles.forEach(file => {
            const reader = new FileReader()

            reader.onload = () => {
                const fileAsBinaryString = reader.result
                console.log('fileAsBinaryString: ', fileAsBinaryString)
                // do whatever you want with the file content
            }

            reader.onabort = () => console.log('file reading was aborted')
            reader.onerror = () => console.log('file reading has failed')

            reader.readAsBinaryString(file)
        })
    }

    render () {
        let dropzoneRef
        const { files } = this.state

        return (
            <div>
                <Dropzone ref={(node) => { dropzoneRef = node }} className={css.dropzone} onDrop={this.handleDrop}>
                    <div className={css.dropzone__content}>
                        <p>Try dropping some files here, or click to select files to upload.</p>
                    </div>
                </Dropzone>

                <aside>
                    <h2>Dropped files</h2>
                    <ul>
                        {
                            files.map((f: any) => <li key={f.name}>{f.name} - {f.size} bytes</li>)
                        }
                    </ul>
                </aside>

                <button type="button" onClick={() => { dropzoneRef.open() }}>
                    Open File Dialog
                </button>
            </div>
        )
    }
}
