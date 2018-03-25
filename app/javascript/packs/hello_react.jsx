// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Header from '../components/header.jsx'
import Sidebar from "../components/sidebar";

// const Hello = props => (
//   <div>Hello {props.name}!</div>
// )
//
// Hello.defaultProps = {
//   name: 'David'
// }
//
// Hello.propTypes = {
//   name: PropTypes.string
// }
//
// document.addEventListener('DOMContentLoaded', () => {
//   ReactDOM.render(
//     <Hello name="React" />,
//     document.body.appendChild(document.createElement('div')),
//   )
// })

class App extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                </div>
            </div>
        );
    }
}


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App  />,
    document.getElementById('root'),
  )
    ReactDOM.render(
    <Header  />,
    document.getElementById('header'),
  )
    ReactDOM.render(
    <Sidebar  />,
    document.getElementById('sidebar'),
  )
})