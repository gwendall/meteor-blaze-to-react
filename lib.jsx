BlazeToReact = React.createClass({
  mixins: [ReactMeteorData],
  renderBlaze() {
    this.removeBlaze();
    this.view = Blaze.renderWithData(Template[this.props.blazeTemplate], _.omit(this.props, 'blazeTemplate'), React.findDOMNode(this.refs[this.props.blazeTemplate]));
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
    return <div ref={this.props.blazeTemplate}/>
  }
});
