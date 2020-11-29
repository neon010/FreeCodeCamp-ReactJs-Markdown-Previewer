import React from "react";
import "./App.css"
let marked = require("marked");


let initialState = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!


- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![Random Animals](https://loremflickr.com/320/240)
`;
class App extends React.Component{
  constructor(){
    super()
    this.state = {
      input: initialState
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    this.setState({
      input: (event.target.value)
    })
  }
  render(){
    return (
          <div id="App-container">
              <div id="App-title">
                  <h2>Markdown Previewer</h2>
              </div>
              <div id="main">
                  <section className="editor">
                    <div id="editor-title">
                      <h2>Editor</h2>
                    </div>
                    <textarea id="editor" value={this.state.input} onChange={this.handleChange} placeholder="Type here"></textarea>
                  </section>
                  <section className="previewer">
                    <div id="previewer-title">
                      <h2>Previewer</h2>
                    </div>
                    <div id="preview">
                      <div dangerouslySetInnerHTML= {{__html:marked(this.state.input)}}/>
                    </div>
                  </section>
              </div>
          </div>
    )
  }
}
export default App