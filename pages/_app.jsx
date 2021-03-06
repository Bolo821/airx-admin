import React, { useEffect } from 'react';
import DefaultLayout from '~/components/layouts/DefaultLayout';
import { wrapper } from '~/store/store';
import '~/styles/style.scss';
import 'antd/dist/antd.min.css';

import { useSelector } from 'react-redux';
import { useRouter } from 'next/router'

import Login from '~/pages/accounts/login';
import Register from '~/pages/accounts/register';


function App({ Component, pageProps }) {
    const router = useRouter();
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    const getLayout =
        Component.getLayout || ((page) => <DefaultLayout children={page} />);
    useEffect(() => {
        setTimeout(function () {
            document.getElementById('__next').classList.add('loaded');
        }, 100);
    }, []);
    if(isLoggedIn)
        return getLayout(<Component {...pageProps} />);
    else {
        if(router.pathname.includes('register')) return getLayout(<Register />);
        return getLayout(<Login />);
    }
}

export default wrapper.withRedux(App);
