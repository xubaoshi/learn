var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');

const Child = props => {
    const { name, age, inputRef } = props;
    return (
        <div>
            <h3>{name + ' ' + age}</h3>
            <input type="text" ref={inputRef} />
        </div>
    )
}

var D = createReactClass({
    getInitialState: function () {
        return {
            A: { name: 'A', age: 20 },
            B: { name: 'B', age: 30 }
        }
    },
    componentDidMount() {
        this.clickBtn.style.backgroundColor = 'red'
        this.childInput.value = 'ref';
        this.childInput.focus();
        console.log(this.refs.AAge.firstChild.nodeValue);
    },
    render: function () {
        const { A, B } = this.state;
        return (
            <div>
                <h1>{A.name}</h1>
                <h2 ref="AAge">{A.age}</h2>
                <Child inputRef={el => this.childInput = el} name={B.name} age={B.age} />
                <button onClick={this.clickHandle} ref={(btn) => this.clickBtn = btn}>change</button>
            </div>
        )

    },
    clickHandle: function () {
        this.setState({
            A: { name: 'C', age: 40 }
        })
    }
});
ReactDOM.render(<D></D>, document.getElementById('root'));