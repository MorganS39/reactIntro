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

