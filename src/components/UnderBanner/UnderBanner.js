import React from 'react';
import './UnderBanner.css';
import $ from 'jquery';
import { useTranslation } from 'react-i18next';

const handleSubmit = () => {
    let email = document.getElementById("email").value;

    $.ajax({
        method: "POST",
        url: "http://localhost:7200/api/send_email",
        data: {receiver_email: email}
    }).done(function (result) {
        console.log(result);
        alert("Email has been sent. Please check your mail");
    });

};

function UnderBanner(props) {
    const { t } = useTranslation();
    return (
        <div>
            <div id="intro">
                <div className="container">{t('underbannertext')}</div>
            </div>

            <div id="subcribe-email" className="container">
                <div className="row">
                    <div id="subcribe-email-left" className="col-5">
                        {t('underbannerEmailSubcribe')}
                    </div>
                    
                    <div id="subcribe-email-right" className="col-7">
                        <input id="email" placeholder={t('underbannerEmailBox')} type="email" className="form-control" />
                        <button onClick={handleSubmit} id="btn-subcribe" type="button" className="btn">{t('underbannerEmailBtn')}</button>
                    </div> 
                </div>
                
            </div>
        </div>
    );
}

export default UnderBanner;