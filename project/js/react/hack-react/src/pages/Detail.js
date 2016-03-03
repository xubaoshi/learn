/**
 * Created by xu on 2016/3/1.
 */
import React from 'react';
import ajax from 'superagent';

class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'commits',
            commits: [],
            forks: [],
            pulls: []
        };
    }

    fetchFeed(type) {
        const baseUrl = "https://api.github.com/repos/facebook";
        ajax.get(`${baseUrl}/${this.props.params.repo}/${type}`)
            .end((error, response)=> {
                if (!error && response) {
                    this.setState({[type]: response.body});
                } else {
                    console.log(`Error fetching ${type}`, error)
                }
            })
    }

    componentWillMount() {
        this.fetchFeed("commits");
        this.fetchFeed("forks");
        this.fetchFeed("pulls");
        //ajax.get("https://api.github.com/repos/facebook/react/commits")
        //    .end((err, response)=> {
        //        if (!err && response) {
        //            console.dir(response.body);
        //            this.setState({commits: response.body});
        //        } else {
        //            console.log("There are err feching data", err);
        //        }
        //    });
        //ajax.get("https://api.github.com/repos/facebook/react/forks")
        //    .end((error, response)=> {
        //        if (!error && response) {
        //            this.setState({forks: response.body});
        //        } else {
        //            console.log('Error fetching pulls', error);
        //        }
        //    });
        //ajax.get("https://api.github.com/repos/facebook/react/pulls")
        //    .end((error, response)=> {
        //        if (!error && response) {
        //            this.setState({pulls: response.body});
        //        } else {
        //            console.log('Error fetching pulls', error);
        //        }
        //    })
    }


    renderCommits() {
        return this.state.commits.map((commit, index)=> {
            const author = commit.author ? commit.author.login : "Anonymous";
            return (<p key={index}>
                <strong>{author}</strong>
                <a href="commit.html_url">{commit.commit.message}</a>
            </p>
            );
        })
    }

    renderForks() {
        return this.state.forks.map((fork, index)=> {
            const owner = fork.owner ? fork.owner.login : 'Anoymous';
            return (<p key={index}>
                <strong>{owner}</strong>
            :forked to
                <a href="fork.html_url">{fork.html_url}</a>
            at {fork.created_at}.
            </p>
            )
        })
    }

    renderPulls() {
        return this.state.pulls.map((pull, index)=> {
            const user = pull.user ? pull.user.login : 'Anonymous';
            return (<p key={index}>
                <strong>{user}</strong>
            :
                <a href="pull.html_url">{pull.body}</a>
            </p>
            )
        });
    }

    //showCommits() {
    //    this.setState({mode: "commits"});
    //}
    //
    //showForks() {
    //    this.setState({mode: "forks"});
    //}
    //
    //showPulls() {
    //    this.setState({mode: "pulls"});
    //}

    selectMode(event) {
        this.setState({mode:event.currentTarget.dataset.mode});
    }

    render() {
        let content;
        if (this.state.mode === "commits") {
            content = this.renderCommits();
        } else if (this.state.mode === "forks") {
            content = this.renderForks();
        } else {
            content = this.renderPulls();
        }
        return (<div>
            <button onClick={this.selectMode.bind(this)} data-mode="commits">commits</button>
            <button onClick={this.selectMode.bind(this)} data-mode="forks">forks</button>
            <button onClick={this.selectMode.bind(this)} data-mode="pulls">pulls</button>
            {content}
        </div>);
    }
}

export default Detail;