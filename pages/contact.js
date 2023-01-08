import Layout from '../components/Layout';
import Link from 'next/link';
import ContactForm from '../components/form/ContactForm';

const Contact = () => {
    return (
        <Layout>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                    <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl text-center mb-2">
         
         <span class="block text-black-600 xl:inline">Contact Form</span>
       </h1>
                        <hr />
                        <ContactForm />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;
