import React from 'react';
import './Footer.css'

function Footer(props) {
    return (
        <div id="footer" className="fixed-bottom">
            <div>
                <span><a href="https://wordsmine.com/">Privacy</a></span> <span>&emsp;</span> <span><a href="https://wordsmine.com/">Term</a></span>
            </div>
            <a href="https://app.wordsmine.com/">© 2020 WordsMine! Inc</a>
        </div>
    );
}

export default Footer;