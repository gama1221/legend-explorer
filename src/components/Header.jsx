const Header = () => {
    return ( 
        <div className="padT4 padB4">
            <div className="container mobile-container">
                <div className="d-flex justify-content-between">
                    <div>
                        <img alt="SVCC Home Page"
                        src="/images/SVCCLogo.png" />                        
                    </div>
                    <div className="light">
                        <h4 className="header-title">
                            Silicon Valley Code Camp
                        </h4>
                    </div>
                    <div className="text-dark">
                        Mello Mr. Getinet &nbsp;&nbsp;
                        <span>
                            <a href="#">Signout</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Header;