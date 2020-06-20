import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import moment from 'moment';

class Assignment1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      initialData: {
        name: '',
        fromDate: '',
        toDate: ''
      }
    };
  }

  componentDidMount() {

  }

  setData = (e, prop) => {
    const { initialData } = this.state;
    this.setState({
      initialData: { ...initialData, [prop]: e.target.value }
    });
  }

  addUser = () => {
    const { initialData, users } = this.state;

    if (initialData.name === '') {
      alert(`Warning\n Name is not added`);
      return;
    }
    if (initialData.fromDate === '') {
      alert(`Warning\n From date is not added`);
      return;
    }
    if (initialData.toDate === '') {
      alert(`Warning\n To date is not added`);
      return;
    }

    const fromTime = new Date(initialData.fromDate).getTime();
    const toTime = new Date(initialData.toDate).getTime();
    if (fromTime > toTime) {
      alert(`Warning\n From date is greater than to tome`);
      return;
    }

    const currentUser = users.find((item) => item.name === initialData.name);
    if (currentUser) {
      alert(`Warning\n User "${initialData.name}" is already added`);
      return;
    }

    this.setState(prevState => ({
      users: [...prevState.users, initialData],
      initialData: {
        name: '',
        fromDate: '',
        toDate: ''
      }
    }));
  }

  initialUser = () => {
    const { initialData } = this.state;
    const { name, fromDate, toDate } = initialData;

    return (
      <section className="app-section">
        <div className="row">
          <div className="col">
            <input
              type="text"
              value={name}
              onChange={(e) => { this.setData(e, 'name') }}
              placeholder="User name"
            />
          </div>
          <div className="col">
            <input
              type="date"
              value={fromDate}
              onChange={(e) => { this.setData(e, 'fromDate') }}
              placeholder="From date"
            />
          </div>
          <div className="col">
            <input
              type="date"
              value={toDate}
              onChange={(e) => { this.setData(e, 'toDate') }}
              placeholder="To Date"
            />
          </div>
          <div className="col">
            <button type="button" onClick={this.addUser} class="app-btn">Add</button>
          </div>
        </div>
      </section>
    );
  }

  removeUser = (name) => {
    const { users } = this.state;
    this.setState({
      users: users.filter((item) => (item.name !== name))
    })
  }

  renderUser = (item, index) => {
    var start = new Date(item.fromDate);
    var end = new Date(item.toDate);

    var arr = [];
    var loop = new Date(start);
    var index1 = 0;
    while (loop <= end) {
      arr.push((
        <section className="app-section-small" key={`${index}_${index1}`}>
          <ul>
            <li>{`Breakfast for ${item.name} on ${moment(loop).format('DD-mm-yyyy')}`}</li>
            <li>{`Lunch for ${item.name} on ${moment(loop).format('DD-mm-yyyy')}`}</li>
            <li>{`Donner for ${item.name} on ${moment(loop).format('DD-mm-yyyy')}`}</li>
          </ul>
        </section>
      ));

      var newDate = loop.setDate(loop.getDate() + 1);
      loop = new Date(newDate);
      index1++;
    }
    return (
      <section key={index}>
        <h4>
          User: {item.name}
          <button type="button" onClick={() => { this.removeUser(item.name) }}>Remove</button>
        </h4>
        {arr}
      </section>
    );
  }

  renderUserList = () => {
    const { users } = this.state;

    return (
      <>
        {users.map((item, index) => this.renderUser(item, index))}
      </>
    )
  }

  render() {
    return (
      <div className="wrap">
        <h1>Assignment - 1</h1>
        <section>
          {this.initialUser()}
          {this.renderUserList()}
        </section>
      </div>
    );
  }
}

export default withRouter(Assignment1);
