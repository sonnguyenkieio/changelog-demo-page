import React from 'react';
import './Banner.css'
import { useTranslation } from 'react-i18next';

function Banner(props) {
    const { t } = useTranslation();

    return (
        <div id="banner">
            <p>{t('banner1stline')}</p>
            <p>{t('banner2ndline')}</p>
            <button type="button" className="btn btn-outline-primary">{t('bannerbutton')}</button>
            <p>{t('bannerlastline')}</p>
            {/* <p>Vốn từ vựng phong phú hướng ta đến tương lai không giới hạn</p>
            <p>Cách nhanh nhất để học từ vựng bất kì đâu, bất kì lúc nào</p>
            <button type="button" class="btn btn-outline-primary">Cài đặt Extension</button>
            <p>Tham gia hôm nay để nhận 6 tháng sử dụng miễn phí</p> */}
        </div>
    );
}

export default Banner;