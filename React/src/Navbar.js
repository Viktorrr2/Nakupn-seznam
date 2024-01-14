import './App.css';
import Switch from './switch';
function Navbar() {
  return (
    <div className="navbar">
    <nav class="navbar navbar-expand-lg navbar-white bg-white">
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="">
        <a class="nav-link" href='A' ><img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/1024px-Flag_of_the_Czech_Republic.svg.png"
          alt="example"
          width="50" height="30"
        /></a>
      </li>
      <li class="">
      <a class="nav-link" href="a" ><img
          src="data:image/png;base64,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"
          alt="example"
          width="50" height="30"
        /></a>
      </li>
      <li class="nav-item">
      <Switch onChange=""></Switch>
      </li>
    </ul>
    <h2 >Dark Mode</h2>
  </div>
</nav>
    </div>
  );
}

export default Navbar;