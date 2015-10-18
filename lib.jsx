BlazeToReact = React.createClass({
  mixins: [ReactMeteorData],
  renderBlaze() {
    if (this.view) Blaze.remove(this.view);
    this.view = Blaze.renderWithData(Template[this.props.blazeTemplate], _.omit(this.props, 'blazeTemplate'), React.findDOMNode(this.refs[this.props.blazeTemplate]));
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
    if (this.view) Blaze.remove(this.view);
  },
  render() {
    return <div ref={this.props.blazeTemplate}/>
  }
});
