function App() {
  const title = "Welcome to Post-It!";
  const likes = 50;
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} Times </p>
      </div>
    </div>
  );
}
export default App;
