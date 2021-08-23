import React from 'react';
import './Header.css'
import { useTranslation } from 'react-i18next';


function Header(props) {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    }

    // i18n.changeLanguage("vn");

    return (
        <div style={{backgroundColor: 'darkblue'}}>
            <nav className="navbar navbar-expand-lg" style={{backgroundColor: 'darkblue'}}>
                <div className="container">
                    <div>
                        <a className="navbar-brand" style={{color: 'white', fontWeight: 'bold'}} href="https://wordsmine.com/">
                            <img id="logo" alt="logo" src={process.env.PUBLIC_URL + "/logo_720.png"} />
                        </a>
                    </div>

                    <div className="collapse navbar-collapse col-4" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="https://wordsmine.com/#tryme">{t('Tryit')}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://wordsmine.com/#overview">{t('WhatIsWordsmine')}</a>
                            </li>
                            <li className="nav-item">
                                <select id="language-select" name="language" className="form-select" aria-label="Default select example">
                                    <option onClick={() => changeLanguage('vn')} value="vi" selected>Tiếng Việt</option>
                                    <option onClick={() => changeLanguage('en')} value="en">English</option>
                                </select>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;