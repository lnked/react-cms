import * as React from 'react'
import * as ReactDOM from 'react-dom'
// import { AppContainer } from 'react-hot-loader'
// import { hot } from 'react-hot-loader'

import 'app.scss'

// import App from './routes'

ReactDOM.render(<div>Hello</div>, document.getElementById('root'))
// ReactDOM.render(<App />, document.getElementById('root'))

// if (module.hot) {
//     module.hot.accept()
//     module.hot.dispose(() => {
//         clearInterval(1000)
//     })
// }

// const renderApp = Component => {
//     ReactDOM.render(
//         <AppContainer>
//             <Component />
//         </AppContainer>,
//         document.getElementById('root')
//     )
// }

// renderApp(App)

// // @ts-ignore
// if (module.hot) {
//     // @ts-ignore
//     module.hot.accept('./routes', () => {
//         console.log('Accepting the updated module!')
//         renderApp(App)
//     })
// }

// export default hot(module)(App)

// if (module.hot) {
//     module.hot.accept('./routes', () => { renderApp(App); });
// }

// Hot Module Replacement API
// if (module.hot) {
//     module.hot.accept('./routes', () => {
//         ReactDOM.render(<App />, document.getElementById('root'))
//     })
// }

// if (module.hot) {
//     module.hot.accept()
//     module.hot.dispose(() => {
//         ReactDOM.render(<App />, document.getElementById('root'))
//     }
// }

// if (module.hot) {
//     // Whenever a new version of App.js is available
//     module.hot.accept('./App', function () {
//       // Require the new version and render it instead
//       var NextApp = require('./App')
//       ReactDOM.render(<NextApp />, rootEl)
//     })
//   }
