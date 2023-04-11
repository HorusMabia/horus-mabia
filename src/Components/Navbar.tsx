
function Navbar() {
    return (
        <nav className={`navbar`}>
            <div className="navbar-brand">
                <a href="/" className="navbar-item">
                    Horus Mabia
                </a>
            </div>
            <div className="navbar-menu">
                <div className="navbar-start">
                    <a href="#about" className="navbar-item">
                        | About Me |
                    </a>
                    <a href="#tech">
                        | Tech stack |
                    </a>
                    <a href="#projects" className="navbar-item">
                        | My Projects |
                    </a>
                    <a href="#contact" className="navbar-item">
                        | Get in touch |
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;