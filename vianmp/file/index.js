// console.log(React)
// console.log(ReactDOM)



const my = React.createElement("ul",null,[ React.createElement("li"), React.createElement("li") ] );

const LabelBabel = "Babel is working"

const FirstApp = () => {


  return (
    <ul><li>{LabelBabel}</li><li>React is working</li></ul>
  )


}

const root = document.getElementById("root");
ReactDOM.render(<FirstApp/>,root)