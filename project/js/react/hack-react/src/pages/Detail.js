/**
 * Created by xu on 2016/3/1.
 */
import React from 'react';
import ajax from 'superagent';

class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {commits: []};
    }

    componentWillMount() {
        ajax.get("https://api.github.com/repos/facebook/react/commits")
            .end((err, response)=> {
                if (!err && response) {
                    console.dir(response.body);
                    this.setState({commits: response.body});
                } else {
                    console.log("There are err feching data", err);
                }
            })
    }

    render() {
        return (<div>
            {this.state.commits.map((commit, index)=> {
                const author = commit.author ? commit.author.login : 'Anonymous';
                return ( <p key={index}>
                        <strong>{author}</strong>
                        <a href={commit.html_url}>{commit.commit.message}</a>
                    </p>
                )
            })}
        </div>);
    }
}

export default Detail;