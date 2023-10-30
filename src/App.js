import './App.css';

function App(props) {
  //  console.log(process.argv[0]);
  //  console.log(process.argv[1]);
  //  console.log(process.argv[2]);
  //  console.log(process.argv[3]);
  //  console.log(process.argv[4]);
   //console.log("you have passed a total of " + process.argv.length + " paramenters...");
  if(props.username === props.name){
    const today=new Date();
      if(today.getHours() <= props.visitingTime){
          return (
            <div>
              <fieldset>
              <h1>Welcome&nbsp;{props.firstName}&nbsp;{props.lastName}</h1>
              </fieldset>
            </div>
          );
      }else{
        return(
        window.alert("Please visit after "+ props.visitingTime))
      }
   }else{
        return (
          <h1>UserName:&nbsp;{props.username}</h1>)
      }
  }
export default App;
