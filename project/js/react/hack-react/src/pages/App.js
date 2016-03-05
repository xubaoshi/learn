/**
 * Created by xu on 2016/3/3.
 */
import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Unoffical GitHub Brower v0.1</h1>
                {this.props.children}
            </div>
        );
    }
}
export default App;