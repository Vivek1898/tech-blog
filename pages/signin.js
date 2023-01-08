import Layout from '../components/Layout';
import { withRouter } from 'next/router';
import dynamic from "next/dynamic";
//import SigninComponent from '../components/auth/SigninComponent';
const SigninComponent = dynamic(() => import('../components/auth/SigninComponent'), { ssr: false });
const Signin = ({ router }) => {
    const showRedirectMessage = () => {
        if (router.query.message) {
            return <div className="alert alert-danger">{router.query.message}</div>;
        } else {
            return;
        }
    };

    return (
        <Layout>
            <div className="container-fluid">
            <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl text-center mb-2">
         
            <span class="block text-black-600 xl:inline">Signin</span>
          </h1>
                {/* <h2 className="text-center pt-4 pb-4">Signin</h2> */}

                <div className="row">
                    <div className="col-md-6 offset-md-3">{showRedirectMessage()}</div>
                </div>

                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <SigninComponent />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default withRouter(Signin);
