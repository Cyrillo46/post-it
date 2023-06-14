const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Post-It</h1>
      <div className="links">
        <a href="/">Home</a>
        <a
          href="/create"
          style={{
            color: "white",
            backgroundColor: "#4ad674",
            borderRadius: "8px",
          }}>
          New Post
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
