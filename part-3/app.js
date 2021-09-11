function App() {
    return (
      <div>
        <Person
          name="Leonardo"
          age={16}
          hobbies={["katanas", "pizza", "leadership"]}
        />
        <Person 
            name="Michelangelo" 
            age={16} 
            hobbies={["nunchucks", "pizza", "partying"]} />
        <Person
          name="Raphael"
          age={16}
          hobbies={["sai", "pizza", "being cool but rude"]}
        />
        <Person
          name="Donatello"
          age={16}
          hobbies={["bow staff", "pizza", "machines"]}
        />
      </div>
    );
  }