import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { useState, useEffect } from 'react';
import { singleBlog, listRelated } from '../../actions/blog';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';
import renderHTML from 'react-render-html';
import moment from 'moment';
import SmallCard from '../../components/blog/SmallCard';
import DisqusThread from '../../components/DisqusThread';
//import 'highlight.js/styles/monokai-sublime.css';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import hljs from 'highlight.js';
import  Router  from 'next/router';
import NProgress from "nprogress";
import useCopy from 'use-copy';
import useClippy from 'use-clippy';
const ans =Router.onRouteChangeComplete = url => NProgress.done();

const SingleBlog = ({ blog, query }) => {
    const [related, setRelated] = useState([]);

    const loadRelated = () => {
        listRelated({ blog }).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setRelated(data);
            }
        });
    };

    useEffect(() => {
        loadRelated();
       fixEditor();
    }, []);

    const head = () => (
        <Head>
            <title>
                {blog.title} | {APP_NAME}
            </title>
            <meta name="description" content={blog.mdesc} />
            <link rel="canonical" href={`${DOMAIN}/blogs/${query.slug}`} />
            <meta property="og:title" content={`${blog.title}| ${APP_NAME}`} />
            <meta property="og:description" content={blog.mdesc} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={`${DOMAIN}/blogs/${query.slug}`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />

            <meta property="og:image" content={`${API}/blog/photo/${blog.slug}`} />
            <meta property="og:image:secure_url" ccontent={`${API}/blog/photo/${blog.slug}`} />
            <meta property="og:image:type" content="image/jpg" />
            <meta property="fb:app_id" content={`${FB_APP_ID}`} />
        </Head>
    );

    const showBlogCategories = blog =>
   

        blog.categories.map((c, i) => (
            <Link key={i} href={`/categories/${c.slug}`}>
                <a className="btn btn-primary mr-1 ml-1 mt-3">{c.name}</a>
            </Link>
        ));

    const showBlogTags = blog =>
        blog.tags.map((t, i) => (
            <Link key={i} href={`/tags/${t.slug}`}>
                <a className="btn btn-outline-primary mr-1 ml-1 mt-3">{t.name}</a>
            </Link>
        ));

    const showRelatedBlog = () => {

        return related.map((blog, i) => (
            <div className="col-md-4" key={i}>
                <article>
                    <SmallCard blog={blog} />
                </article>
            </div>
        ));
    };

    const showComments = () => {
        return (
            <div>
                <DisqusThread id={blog._id} title={blog.title} path={`/blog/${blog.slug}`} />
            </div>
        );
    };
    function insertAfter(el0, el1) {
        el0.parentNode.insertBefore(el1, el0.nextSibling);
    }
    // const [copyText2, setCopyText] = useState('');
    // const [copied, copy, setCopied] = useCopy(copyText2);
    const [clipboard, setClipboard] = useClippy();
    function myFunction() {
        // Get the text field
        // setCopyText(" ");
        var copyText = document.getElementsByClassName("copydata");
       // console.log(copyText[0].innerText)
        const copied=copyText[0];
        setClipboard(copied.innerText);
        alert("Copied");
        return;
        // copied.focus();
        // copied.select();
        // console.log( copied.setSelectionRange(0, 99999))
        return;
       // console.log(copied);
        // document.getElementsByClassName("copydata").forEach( function (el) {
        //     console.log(el.innerText);
        // });
     // console.log(copyText);
     // return;
        // Select the text field
        // copy();
        // setCopyText(copied);
        // console.log(copied);
      
        // setTimeout(() => {
        //     setCopied(false);
        //   }, 1000);
         
      //  CopyToClipboard(copyText2);
        // navigator.clipboard.writeText(copied)
        // copyText[0].innerText.select();
        // copied.setSelectionRange(0, 99999); // For mobile devices
      
        //  // Copy the text inside the text field
        // navigator.clipboard.writeText(copied.value);
      
        // Alert the copied text
        alert("Copied");
      }
      useEffect(() => {
        const el2 = document.createElement('button');

        // ✅ Add classes to element
            el2.classList.add( 'btn-primary','copyme');
        
        // ✅ Add text content to element
                el2.innerText = 'Copy code';
        // setInterval(() => {
       
        //             const someElementsItems=    document.querySelectorAll(".ql-syntax");
        //             console.log(someElementsItems[someElementsItems.length -1])
        //        const og=  someElementsItems[someElementsItems.length -1];
        //        og.classList.add( 'copydata');
        //          //  og.appendChild(el2);
        //          insertAfter(og, el2)
        //            const element = document.getElementsByClassName("copyme");
        //            element[0].addEventListener("click", myFunction);
        // }, 1000);
                      const someElementsItems=    document.querySelectorAll(".ql-syntax");
                    console.log(someElementsItems[someElementsItems.length -1])
               const og=  someElementsItems[someElementsItems.length -1];
               og.classList.add( 'copydata');
                 //  og.appendChild(el2);
                 insertAfter(og, el2)
                   const element = document.getElementsByClassName("copyme");
                   element[0].addEventListener("click", myFunction);
      
      }, []);

    useEffect(() => {
//         const el2 = document.createElement('button');

// // ✅ Add classes to element
//     el2.classList.add( 'btn-primary','copyme');

// // ✅ Add text content to element
//         el2.innerText = 'Click me!';
        document.querySelectorAll('.ql-syntax').forEach(el => {
            // then highlight each
            hljs.highlightElement(el);
           // el.appendChild(el2);
          });
//       const someElementsItems=    document.querySelectorAll(".ql-syntax");
//       console.log(someElementsItems[someElementsItems.length -1])
//  const og=  someElementsItems[someElementsItems.length -1];
//  og.classList.add( 'copydata');
//    //  og.appendChild(el2);
//    insertAfter(og, el2)
//      const element = document.getElementsByClassName("copyme");
//      element[0].addEventListener("click", myFunction);
    }, [showRelatedBlog]);
      
    const fixEditor = () => {
        document.querySelectorAll('.ql-syntax').forEach(el => {
            // then highlight each
            hljs.highlightElement(el);
          });
          
    }

    return (
        <React.Fragment>
            {head()}
            <Layout>
                <main>
                    <article>
                        <div className="container-fluid">
                            {/* <section>
                                <div className="row" style={{ marginTop: '-30px' }}>
                                    <img
                                        src={`${API}/blog/photo/${blog.slug}`}
                                        alt={blog.title}
                                        className="img img-fluid featured-image"
                                    />
                                </div>
                            </section> */}
                            <section>
                                <div className="container">
                                    <h1 className="display-5 pb-3 pt-3 text-center font-weight-bold title-text">{blog.title}</h1>
                                    <p className="lead mt-3 mark">
                                        Written by{' '}
                                        <Link href={`/profile/${blog.postedBy.username}`}>
                                            <a>{blog.postedBy.name}</a>
                                        </Link>{' '}
                                        | Published {moment(blog.updatedAt).fromNow()}
                                    </p>

                                    <div className="pb-3">
                                        {showBlogCategories(blog)}
                                        {showBlogTags(blog)}
                                        <br />
                                        <br />
                                    </div>
                                </div>
                            </section>
                        </div>

                        <div className="container">
                            <section>
                                <div className="col-md-12 lead">{renderHTML(blog.body)}</div>
                                {/* <button onClick={fixEditor}>start</button> */}
                              
                            </section>
                        </div>

                        <div className="container">
                            <h4 className="text-center pt-5 pb-5 h2">RELATED BLOGS</h4>
                            <div className="row">{showRelatedBlog()}</div>
                        </div>

                        <div className="container pt-5 pb-5">{showComments()}</div>
                    </article>
                </main>
            </Layout>
        </React.Fragment>
    );
};

SingleBlog.getInitialProps = ({ query }) => {
    return singleBlog(query.slug).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            // console.log('GET INITIAL PROPS IN SINGLE BLOG', data);
            return { blog: data, query };
        }
    });
};

export default SingleBlog;
