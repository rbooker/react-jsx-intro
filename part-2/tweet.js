function Tweet(props) {
    return (
      <div>
        <span>{props.name}</span>
        <p>@{props.username}</p>
        <p>{props.date}</p>
        <p>{props.message}</p>
      </div>
    );
  }