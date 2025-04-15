const Header = () => {
    return (
        // main for header section containing header logo and navigation items
        <div className="header">
            <div className="header-logo">
                <a href="#app"><h3 className="header-name">ohnoyes | THOMAS SIJPKENS</h3></a>
            </div>
            <div className="header-container">
                    <div className="nav-item"><a href="#about">About</a></div>
                    <div className="nav-item"><a href="#projects">Work</a></div>
                    <div className="nav-item"><a href="#skills">Skills</a></div>
                </div>

        </div> 
    )
}

export default Header;