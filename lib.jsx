BlazeToReact = React.createClass({
  mixins: [ReactMeteorData],
  renderBlaze() {
    this.removeBlaze();
    this.view = Blaze.renderWithData(Template[this.props.blazeTemplate], _.omit(this.props, 'blazeTemplate'), ReactDOM.findDOMNode(this));
  },
  removeBlaze() {
    if (this.view) Blaze.remove(this.view);
  },
  getMeteorData() {
    // Ensure a re-rendering of the template if a prop changes
    this.renderBlaze();
    return this.props;
  },
  componentDidMount() {
    this.renderBlaze();
  },
  componentWillUnmount() {
    this.removeBlaze();
  },
  render() {
    return <div />
  }
});
