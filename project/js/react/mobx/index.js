import React,{ Component } from 'react'
import ReactDOM from 'react-dom'
import {observable,action,autorun} from 'mobx'
import {observer} from 'mobx-react'
// import './basic'
// import './observable'
// import './objects'
import './arrays'

const appState = observable({
  timer:0,
  resetTimer: action(() =>  appState.timer = 0)
})
setInterval(action(() => appState.timer += 1),1000)

@observer
class Index extends Component {
  render() {
    const {timer,resetTimer} = this.props.appState
    return (
      <div>
        <h1>{timer}</h1>
        <button onClick={resetTimer}>重置</button>
      </div>
     
    )
  }
}
ReactDOM.render(<Index appState={appState}/>,document.getElementById('root'))