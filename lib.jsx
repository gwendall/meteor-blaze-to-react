BlazeToReact = React.createClass({
  componentDidMount() {
    this.view = Blaze.renderWithData(Template[this.props.blazeTemplate], _.omit(this.props, 'blazeTemplate'), React.findDOMNode(this.refs[this.props.blazeTemplate]));
  },
  componentWillUnmount() {
    Blaze.remove(this.view);
  },
  render() {
    return <div ref={this.props.blazeTemplate}/>
  }
});
