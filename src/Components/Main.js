import React, { Component } from 'react';
import Title from './Title';
import List from './List';

class Main extends Component {
    render() {
        return (
            <div>
                <Title title={'toDos'} />
                <List tasks={['Mow the lawn', 'walk the dog']} />
                <List tasks={['Mow the lawn', 'walk the dog']} />
            </div>
        )
    }
}

export default Main