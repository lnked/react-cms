// https://react-dropzone.js.org/

// function onDrop(acceptedFiles, rejectedFiles) {
//     // do stuff with files...
//   }

// <Dropzone
//   accept=".jpeg,.png"
// >
//   {({ isDragActive, isDragReject }) => {
//     if (isDragActive) {
//       return "All files will be accepted";
//     }
//     if (isDragReject) {
//       return "Some files will be rejected";
//     }
//     return "Dropping some files here...";
//   }}
// </Dropzone>

// <Dropzone
//   accept="image/png"
// >
//   {({ isDragActive, isDragReject, acceptedFiles, rejectedFiles }) => {
//     if (isDragActive) {
//       return "This file is authorized";
//     }
//     if (isDragReject) {
//       return "This file is not authorized";
//     }
//     return acceptedFiles.length || rejectedFiles.length
//       ? `Accepted ${acceptedFiles.length}, rejected ${rejectedFiles.length} files`
//       : "Try dropping some files.";
//   }}
// </Dropzone>

//   onDrop: acceptedFiles => {
//     const req = request.post('/upload');
//     acceptedFiles.forEach(file => {
//         req.attach(file.name, file);
//     });
//     req.end(callback);
// }

// onDrop: acceptedFiles => {
//     acceptedFiles.forEach(file => {
//         const reader = new FileReader();
//         reader.onload = () => {
//             const fileAsBinaryString = reader.result;
//             // do whatever you want with the file content
//         };
//         reader.onabort = () => console.log('file reading was aborted');
//         reader.onerror = () => console.log('file reading has failed');

//         reader.readAsBinaryString(file);
//     });
// }

// class Basic extends React.Component {
//     constructor() {
//       super()
//       this.state = { files: [] }
//     }

//     onDrop(files) {
//       this.setState({
//         files
//       });
//     }

//     render() {
//       return (
//         <section>
//           <div className="dropzone">
//             <Dropzone onDrop={this.onDrop.bind(this)}>
//               <p>Try dropping some files here, or click to select files to upload.</p>
//             </Dropzone>
//           </div>
//           <aside>
//             <h2>Dropped files</h2>
//             <ul>
//               {
//                 this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
//               }
//             </ul>
//           </aside>
//         </section>
//       );
//     }
//   }

//   <Basic />

// class Basic extends React.Component {
//     constructor() {
//       super()
//       this.state = { disabled: true, files: [] }
//     }

//     onDrop(files) {
//       this.setState({
//         files
//       });
//     }

//     render() {
//       return (
//         <section>
//           <aside>
//             <button type="button" onClick={() => this.setState({ disabled: !this.state.disabled })}>Toggle disabled</button>
//           </aside>
//           <div className="dropzone">
//             <Dropzone onDrop={this.onDrop.bind(this)} disabled={this.state.disabled}>
//               <p>Try dropping some files here, or click to select files to upload.</p>
//             </Dropzone>
//           </div>
//           <aside>
//             <h2>Dropped files</h2>
//             <ul>
//               {
//                 this.state.files.map(f => <li>{f.name} - {f.size} bytes</li>)
//               }
//             </ul>
//           </aside>
//         </section>
//       );
//     }
//   }

//   <Basic />

// class FullScreen extends React.Component {
//     constructor() {
//       super()
//       this.state = {
//         accept: '',
//         files: [],
//         dropzoneActive: false
//       }
//     }

//     onDragEnter() {
//       this.setState({
//         dropzoneActive: true
//       });
//     }

//     onDragLeave() {
//       this.setState({
//         dropzoneActive: false
//       });
//     }

//     onDrop(files) {
//       this.setState({
//         files,
//         dropzoneActive: false
//       });
//     }

//     applyMimeTypes(event) {
//       this.setState({
//         accept: event.target.value
//       });
//     }

//     render() {
//       const { accept, files, dropzoneActive } = this.state;
//       const overlayStyle = {
//         position: 'absolute',
//         top: 0,
//         right: 0,
//         bottom: 0,
//         left: 0,
//         padding: '2.5em 0',
//         background: 'rgba(0,0,0,0.5)',
//         textAlign: 'center',
//         color: '#fff'
//       };
//       return (
//         <Dropzone
//           disableClick
//           style={{position: "relative"}}
//           accept={accept}
//           onDrop={this.onDrop.bind(this)}
//           onDragEnter={this.onDragEnter.bind(this)}
//           onDragLeave={this.onDragLeave.bind(this)}
//         >
//           { dropzoneActive && <div style={overlayStyle}>Drop files...</div> }
//           <div>
//             <h1>My awesome app</h1>
//             <label htmlFor="mimetypes">Enter mime types you want to accept: </label>
//             <input
//               type="text"
//               id="mimetypes"
//               onChange={this.applyMimeTypes.bind(this)}
//             />

//             <h2>Dropped files</h2>
//             <ul>
//               {
//                 files.map(f => <li>{f.name} - {f.size} bytes</li>)
//               }
//             </ul>

//           </div>
//         </Dropzone>
//       );
//     }
//   }

//   <FullScreen />
