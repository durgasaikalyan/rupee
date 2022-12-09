const Button = props => {
  //  Write your code here.
  const {name} = props
  return (
      <Button className ="stylingbuttons">
          {name}
      </Button>
  );
};
ReactDOM.render(
    <div>
        <Button name = "Like" /> 
        <Button name = "Comment"/>
        <Button name = "Share"/>

    </div>
)

const element = (
  //  Write your code here.
  <div>
      <h1 Classname = greeting>SocialButtons</h1>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
