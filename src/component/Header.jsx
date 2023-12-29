const Header = () => {
  return (
    <header class="mb-2">
      <nav class="navbar bg-secondary">
        <div class="container-fluid">          
          <a class="navbar-brand" href="/">Employee Dashboard</a>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-warning" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
};
export default Header;
