import React, { Component, useContext } from 'react';
import { MyContext } from './Test';

class Person extends Component {
  render() {
    return (
      <div>
        <MyContext.Consumer>
          {(context) => (
            <>
              <p>I'm inside the {context.state.name}</p>
              <p>Age : {context.state.age}</p>
              <button onClick={context.growAYearOlder}>Inc Age</button>
            </>
          )}
        </MyContext.Consumer>
      </div>
    );
  }
}

// const Person = () => {
// 	const context = useContext(MyContext);
// 	console.log("This is using useContext hook", context);
// 	return (
// 		<p>{context.state.name}</p>
// 	 );
// }

export default Person;
