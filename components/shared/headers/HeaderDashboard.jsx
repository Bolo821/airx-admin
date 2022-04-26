import React from 'react';
import FormHeaderSearch from '~/components/shared/forms/FormHeaderSearch';

const HeaderDashboard = ({
    title = 'Dashboard',
    description = 'Everything here',
}) => {
    return (
        <header className="header--dashboard bg--main-rt" >
            <img src="/img/logo-header.png" style={{height: '80px', flexBasis: 'auto'}} />
            <div className="header__left">
                <h3 style={{color: '#fff'}}>{title}</h3>
                <p style={{color: '#fff'}}>{description}</p>
            </div>
            <div className="header__right">
                <a className="header__site-link" href="/products">
                    <span>View your store</span>
                    <i className="icon-exit-right"></i>
                </a>
            </div>
        </header>
    );
};

export default HeaderDashboard;
