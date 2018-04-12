import React from 'react';
import ReactDOM from 'react-dom';
import Timeline from './Components/Timeline';
import './index.css';

let oldArr = [
    {
        title: 'Type',
        desc: 'BUY',
        completed: false
    },
    {
        title: 'ISIN',
        desc: '123',
        completed: false
    },
    {
        title: 'Quantity',
        desc: '100',
        completed: false
    },
    {
        title: 'Price',
        desc: '10.96',
        completed: false
    },
    {
        title: 'Status',
        desc: 'Ticket #A123 has been Booked',
        completed: false
    }
];


let newArr = [
    {
        title: 'Type',
        desc: 'BUY',
        completed: true
    },
    {
        title: 'ISIN',
        desc: '123',
        completed: true
    },
    {
        title: 'Quantity',
        desc: '100',
        completed: true
    },
    {
        title: 'Price',
        desc: '10.96',
        completed: true
    },
    {
        title: 'Status',
        desc: 'Ticket #A123 has been Booked',
        completed: true
    }
];



class App extends React.Component {

    state = { items: oldArr };

    componentDidMount() {
        setTimeout(() => {
            this.setState({ items: newArr });
        }, 2000);
    }

    render() {
        let { items } = this.state;
        return (<Timeline items={items} />);
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

