import React from 'react';
import './Home.css'
import { useTranslation } from 'react-i18next';

function Home(props) {
    const { t } = useTranslation();

    return (
        <div className="home container">
            <div className="row">
                <div id="home-left" class="list-group col-4">
                    <a class="list-group-item list-group-item-action" href="#ver1.3">{t('ver1.3')}</a>
                    <a class="list-group-item list-group-item-action" href="#ver1.2">{t('ver1.2')}</a>
                    <a class="list-group-item list-group-item-action" href="#ver1.1">{t('ver1.1')}</a>
                </div>

                <div data-spy="scroll" data-target="#home-left" data-offset="0" id="content-section" className="form-control col-8 scrollspy-example">
                    <h3 id="ver1.3">{t('ver1.3')}</h3>
                    <h4>{t('newFeatures')}</h4>
                    <ul>
                        <li>{t('nf_1stline')}</li>
                        <li>{t('nf_2ndline')}</li>
                        <li>{t('nf_3rdline')}</li>
                        <li>{t('nf_4thline')}</li>
                        <li>{t('nf_5thline')}</li>
                        <li>{t('nf_6thline')}</li>
                    </ul>
                    <h4>{t('improvements')}</h4>
                    <ul>
                        <li>{t('im_line')}</li>
                    </ul>

                    <hr></hr>
                    <h3 id="ver1.2">{t('ver1.2')}</h3>
                    <h4>{t('newFeatures')}</h4>
                    <ul>
                        <li>{t('nf_1stline')}</li>
                        <li>{t('nf_2ndline')}</li>
                        <li>{t('nf_3rdline')}</li>
                        <li>{t('nf_4thline')}</li>
                        <li>{t('nf_5thline')}</li>
                        <li>{t('nf_6thline')}</li>
                    </ul>
                    <h4>{t('improvements')}</h4>
                    <ul>
                        <li>{t('im_line')}</li>
                    </ul>
                    
                    <hr></hr>
                    <h3 id="ver1.1">{t('ver1.1')}</h3>
                    <h4>{t('newFeatures')}</h4>
                    <ul>
                        <li>{t('nf_1stline')}</li>
                        <li>{t('nf_2ndline')}</li>
                        <li>{t('nf_3rdline')}</li>
                        <li>{t('nf_4thline')}</li>
                        <li>{t('nf_5thline')}</li>
                        <li>{t('nf_6thline')}</li>
                    </ul>
                    <h4>{t('improvements')}</h4>
                    <ul>
                        <li>{t('im_line')}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Home;