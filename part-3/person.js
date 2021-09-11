function Person(props) {
    let voteText = props.age >= 18 ? "Go vote!" : "Go study!";
  
    let hobbies = props.hobbies.map(hobby => <li>{hobby}</li>);

    let nameText = props.name.length > 8 ? props.name.slice(0,6) : props.name;
  
    return (
      <div>
        <p>Learn some information about this person:</p>
        <ul>
          <li>Name: {nameText}</li>
          <li>Age: {props.age}</li>
          <li>Hobbies</li>
          <ul>
            {hobbies}
          </ul>
        </ul>
        <h3>{voteText}</h3>
      </div>
    );
  }