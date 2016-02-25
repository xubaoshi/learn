/**
 * Created by xu on 2016/2/25.
 */
import React from 'react';
import Chance from 'chance';

class Detail extends React.Component{
    render() {
        return <p>
                {
                    chance.first() == 'John'
                    ? 'Hello,Jhon'
                    : 'Hello,World!'
                }
                </p> ;

}
}
export default Detail;