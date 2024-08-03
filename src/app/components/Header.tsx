'use client'
import 'bootstrap/dist/css/bootstrap.min.css';

export const Header = () => {
    const handleClick = () => {
        alert('No!')
    }
    return <>
        <div className="logo-background">
            <h1 className="logo-text m-3">PORSCHE</h1>
        </div>
        <div className="header-content">
            <h3>Choose boldly.</h3>
            <button onClick={handleClick}>Discover Gallery</button>
        </div>
    </>
};

