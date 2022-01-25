import React from 'react';
import './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((a) => {
        this.setState({
          items: a,
        });
      });
  }
  render() {
    return (
      <div>
        <h1> Lists Of Data : </h1>

        {this.state.items.map((a) => (
          <ol key={a.id}>
            <img src="https://cdn.pixabay.com/photo/2016/11/11/10/22/building-1816262_960_720.jpg" />
            <br />
            <a href="">{a.email}</a>
            <br />
            {a.name}
            <br />
            <br />
          </ol>
        ))}
      </div>
    );
  }
}

export default App;
