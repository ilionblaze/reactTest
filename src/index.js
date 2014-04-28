/** @jsx React.DOM */

var MarkdownEditor = React.createClass({
  getInitialState: function() {
    return {value: 'Original Text'};
  },
  handleChange: function() {
    this.setState({value: this.refs.textarea.getDOMNode().value});
  },
  render: function() {
    return (
      <div className="MarkdownEditor">
        <h3>Input</h3>
        <textarea
          onChange={this.handleChange}
          ref="textarea"
          defaultValue={this.state.value} />
        <h3>Output</h3>
        <div
          className="content"
          id="content2",
          dangerouslySetInnerHTML={{
            __html: this.state.value
          }}
        />
      </div>
    );
  }
});

React.renderComponent(<MarkdownEditor />, document.getElementById('content'));
