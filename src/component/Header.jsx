const Header = () => {
  return (
    <header className="mb-2">
      <nav className="navbar bg-secondary">
        <div className="container-fluid">          
          <a className="navbar-brand" href="/">Employee Dashboard</a>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-warning" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
};
export default Header;
