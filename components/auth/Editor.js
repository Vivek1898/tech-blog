import { useEffect } from 'react';
import Router from 'next/router';
import { isAuth } from '../../actions/auth';

const Editor = ({ children }) => {
    useEffect(() => {
        if (!isAuth()) {
            Router.push(`/signin`);
        } else if (isAuth().role !== 2) {
            Router.push(`/`);
        }
    }, []);
    return <React.Fragment>{children}</React.Fragment>;
};

export default Editor;
