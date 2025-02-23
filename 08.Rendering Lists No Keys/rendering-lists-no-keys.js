function List() {
  const friends = ['Ben', 'Lynn', 'Alex'];

  return (
    <ul>
      {friends.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
}

export default function App() {
  return <List />;
}
