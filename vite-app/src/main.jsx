import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const link = (
    <a href="www.google.com" target='_blank'>google</a>
)

const a = React.createElement(
  'a',
  {href:'www.google.com', target:'_blank'},
  'google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>
)
