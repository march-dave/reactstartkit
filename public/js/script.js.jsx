React.createClass({
  render: function() {
    return (
      // React.createElement('h1', null, 'Hello React')
      <h1>Hello JXS</h1>
    );
  }
})

// ReactDom.render(
//   React.createElement(Hello, null);
//   document.getElementById('react')
// );

ReactDom.render(
  <Hello></Hello>,
  document.getElementById('react')
);
