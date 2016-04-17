var React = Package['react-runtime'].React

BlazeToReact = React.createClass({
  displayName: 'BlazeToReact',

  renderBlaze: function renderBlaze() {
    this.removeBlaze();
    this.view = Blaze.renderWithData(Template[this.props.blazeTemplate], _.omit(this.props, 'blazeTemplate'), ReactDOM.findDOMNode(this.refs[this.props.blazeTemplate]));
  },
  removeBlaze: function removeBlaze() {
    if (this.view) Blaze.remove(this.view);
  },

  componentWillReceiveProps: function(nextProps) {
    // Ensure a re-rendering of the template if a prop changes
    this.renderBlaze();
  },
  componentDidMount: function componentDidMount() {
    this.renderBlaze();
  },
  componentWillUnmount: function componentWillUnmount() {
    this.removeBlaze();
  },
  render: function render() {
    return React.createElement('div', { ref: this.props.blazeTemplate });
  }
});
