const JSX = <h1>Hello JSX!</h1>;

const JSX = (
  <div>
    {/*This JSX code wont work because I don't have node.js installed */}
    <h1>Heading</h1>
    <p>The paragraph describing the heading</p>
    <ul>
      <li>beans</li>
      <li>turkey</li>
      <li>some form of cheese</li>
    </ul>
  </div>
);

ReactDOM.render(JSX, document.getElementById('challenge-node'))

const JSX = (
    <div className="myDiv">
      <h1>Add a class to this div</h1>
    </div>
);

const JSX = (
    <div>
      <h2>Welcome to React!</h2> <br />
      <p>Be sure to close all tags!</p>
      <hr />
    </div>
);

const MyComponent = function() {
    return (
      <div>
        some string of text.
      </div>
    );
};

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>Hello React!</h1>
        </div>
      );
    }
};

const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        <ChildComponent />
      </div>
    );
  }
};
