import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import moment from 'moment';

class Assignment2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedFilter: 'none',
      filters: ['none', 'name', 'date'],
      users: [
        { name: 'Jon Doe', date: new Date('9-20-1991') },
        { name: 'Dan Ambrov', date: new Date('8-11-1990') },
        { name: 'Mickey Aurther', date: new Date('7-21-1994') },
        { name: 'Walter White', date: new Date('4-10-1988') },
        { name: 'Chris Gardner', date: new Date('3-21-1995') },
      ]
    };
  }

  componentDidMount() {

  }

  selectFilter = (filter) => this.setState({ selectedFilter: filter });

  renderFilter = () => {
    const { filters, selectedFilter } = this.state;
    return (
      <section className="app-section">
        <div className="row">
          {filters.map((item, index) => (
            <span className="checkbox-wrap" key={index} onClick={() => { this.selectFilter(item) }}>
              <span className={`circle ${item === selectedFilter ? 'filled' : ''}`}></span>
              <span>{item}</span>
            </span>
          ))}
        </div>
      </section>
    );
  }

  renderUser = (item, index) => {
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{item.name}</td>
        <td>{moment(item.date).format('DD-MM-yyy')}</td>
      </tr>
    );
  }

  renderUsers = () => {
    const { users, selectedFilter } = this.state;
    const arr = users.map((item) => ({...item}));

    if (selectedFilter !== 'none') {
      arr.sort((a, b) => {
        if (selectedFilter === 'name') {
          if(b.name > a.name) { return -1; }
          if(b.name < a.name) { return 1; }
          return 0;
        }
        if (selectedFilter === 'date') {
          if(new Date(b.date).getTime() > new Date(a.date).getTime()) { return -1; }
          if(new Date(b.date).getTime() < new Date(a.date).getTime()) { return 1; }
          return 0;
        }
      });
    }
    return (
      <div className="app-section">
        <table>
          <thead>
            <tr>
              <th>Sr. No</th>
              <th>Name</th>
              <th>date</th>
            </tr>
          </thead>
          <tbody>
            {arr.map((item, index) => this.renderUser(item, index))}
          </tbody>
        </table>
      </div>
    );
  }

  render() {
    return (
      <div className="wrap">
        <h1>Assignment - 2</h1>
        <section>
          {this.renderFilter()}
          {this.renderUsers()}
        </section>
      </div>
    );
  }
}

export default withRouter(Assignment2);
