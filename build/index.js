/** @jsx React.DOM */

var MarkdownEditor = React.createClass({displayName: 'MarkdownEditor',
  getInitialState: function() {
    return {value: 'Original Text'};
  },
  handleChange: function() {
    this.setState({value: this.refs.textarea.getDOMNode().value});
  },
  render: function() {
    return (
      React.DOM.div( {className:"MarkdownEditor"}, 
        React.DOM.h3(null, "Input"),
        React.DOM.textarea(
          {onBlur:this.handleChange,
          id:"tatest",
          ref:"textarea",
          defaultValue:this.state.value} ),
        React.DOM.h3(null, "Output"),
        React.DOM.div(
          {className:"content",
          id:"content2",
          dangerouslySetInnerHTML:{
            __html: this.state.value
          }}
        )
      )
    );
  }
});

React.renderComponent(MarkdownEditor(null ), document.getElementById('content'));
