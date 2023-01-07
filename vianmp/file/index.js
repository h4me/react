// console.log(React)
// console.log(ReactDOM)



const my = React.createElement("ul",null,[ React.createElement("li"), React.createElement("li") ] );

const FirstApp = () => {

   


  return (
    <ul><li>Babel is working</li><li>React is working</li></ul>
  )


}

const root = document.getElementById("root");
ReactDOM.render(<FirstApp/>,root)