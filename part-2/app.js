function App() {
    return (
      <div>
        <Tweet
          name="Larry Fine"
          username="larrystooge"
          date={new Date().toDateString()}
          message="What are we going to do, Moe?"
        />
        <Tweet
          name="Curly Howard"
          username="curlystooge"
          date={new Date().toDateString()}
          message="Nyuck Nyuck Nyuck"
        />
        <Tweet
          name="Moe Howard"
          username="moestooge"
          date={new Date().toDateString()}
          message="You two knuckleheads!"
        />
      </div>
    );
  }