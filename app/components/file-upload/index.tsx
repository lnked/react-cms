import * as React from 'react'
import * as css from './styles.scss'

import Dropzone from 'react-dropzone'

interface S {
    files: Array<any>;
    inProgress: boolean;
}

export default class FileUpload extends React.PureComponent<{}, S> {
    state = {
        files: [],
        inProgress: true
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
        const cn: Array<string> = []
        const { files, inProgress } = this.state

        let dropzoneRef

        cn.push(css.dropzone)

        if (inProgress) {
            cn.push(css.active)
        }

        return (
            <div>
                <Dropzone ref={(node) => { dropzoneRef = node }} className={cn.join(' ')} onDrop={this.handleDrop}>
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
