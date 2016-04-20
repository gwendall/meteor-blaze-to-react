import React from 'react';
import ReactDOM from 'react-dom';

BlazeToReact = React.createClass({
  mixins: [ReactMeteorData],
  renderBlaze() {
    this.removeBlaze();
    this.view = Blaze.renderWithData(Template[this.props.blazeTemplate], _.omit(this.props, 'blazeTemplate'), ReactDOM.findDOMNode(this.refs[this.props.blazeTemplate]));
  },
  removeBlaze() {
    if (this.view) Blaze.remove(this.view);
  },
  getMeteorData() {
    // Ensure a re-rendering of the template if a prop changes
    this.renderBlaze();
    return this.props;
  },
  componentDidUpdate() {
    // Needed when used with a conditional show, like {condition ? <BlazeToCreact ../> : null}
    this.renderBlaze();
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

export default BlazeToReact;