import Head from "next/head";
import Link from "next/link";
import { withRouter } from "next/router";
import Layout from "../components/Layout";
import { useState } from "react";
import { listBlogsWithCategoriesAndTags } from "../actions/blog";
import Card from "../components/blog/Card";
import { API, DOMAIN, APP_NAME, FB_APP_ID } from "../config";
import Search from "../components/blog/Search";
// import "../../static/css/global.css"

import moment from "moment";
const Test = ({
  blogs,
  categories,
  tags,
  totalBlogs,
  blogsLimit,
  blogSkip,
  router,
}) => {
  const [limit, setLimit] = useState(blogsLimit);
  const [skip, setSkip] = useState(0);
  const [size, setSize] = useState(totalBlogs);
  const [loadedBlogs, setLoadedBlogs] = useState([]);

  const loadMore = () => {
    let toSkip = skip + limit;
    listBlogsWithCategoriesAndTags(toSkip, limit).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setLoadedBlogs([...loadedBlogs, ...data.blogs]);
        setSize(data.size);
        setSkip(toSkip);
      }
    });
  };

  const loadMoreButton = () => {
    return (
      size > 0 &&
      size >= limit && (
        <button onClick={loadMore} className="btn btn-outline-primary btn-lg">
          Load more
        </button>
      )
    );
  };
  const showBlogCategories = (blog) =>
  blog.categories.map((c, i) => (
    <Link key={i} href={`/categories/${c.slug}`}>
      {/* <small class="font-weight-bold"> {c.name}</small> */}
      <a className="btn btn-outline-danger btn-sm mr-2">{c.name }   </a>
    </Link> 
  ));

  const showAllBlogs = () => {
    return blogs.map((blog, i) => {
      // ()
      return (
        <article key={i}>
          <Card blog={blog} />
          <hr />
        </article>
      );
    });
  };

  const showAllCategories = () => {
    return categories.map((c, i) => (
      <Link href={`/categories/${c.slug}`} key={i}>
        <a className="btn btn-primary mr-1 ml-1 mt-3">        {c.name}</a>
        {/* <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-orange-600 bg-orange-200 uppercase last:mr-0 mr-1">
        {c.name}
</span> */}
      </Link>
    ));
  };

  const showAllTags = () => {
    return tags.map((t, i) => (
      <Link href={`/tags/${t.slug}`} key={i}>
        <a className="btn btn-outline-primary mr-1 ml-1 mt-3">{t.name}</a>
      </Link>
    ));
  };

  const showLoadedBlogs = () => {
    return loadedBlogs.map((blog, i) => (
      <article key={i}>
        <Card blog={blog} />
      </article>
    ));
  };
  const isActiveLink = (category ) => {
    return category.Slug === router.query;
};
    return (
      <Layout>
 <div>

 {/* <div class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
    <a href="https://flowbite.com/" class="flex items-center">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</div> */}

{/* <div class="navManual">
        <input type="checkbox" id="navManual-check"/>
        <div class="navManual-header">
          <div class="navManual-title">
            MysteryCode
          </div>
        </div>
        <div class="navManual-btn">
          <label for="navManual-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        
        <div class="navManual-links">
            <ul>
          <li><a href="#" target="_blank">Home</a></li>
          <li><a href="#" target="_blank">About</a></li>
          <li><a href="#" target="_blank">Services</a></li>
          <li><a href="#" target="_blank">Portfolio</a></li>
          <li><a href="#" target="_blank">Contact</a></li>
          <a class="icon">
            <i class="fa fa-twitter"></i>
            <i class="fa fa-linkedin"></i>
            <i class="fa fa-youtube"></i>

          </a>
            </ul>
        </div>
      </div>



  <section class="pt-5 pb-5">
<div class="container">
    <div class="row">
      <div class="col-lg-7 mb-4">
        <img class="img-fluid rounded mb-3" src={`${DOMAIN}/static/images/seoblog.jpeg`} alt="A guide to building your online presence"/><a href="#" class="mt-4 h2 text-dark">How to Inspire and Motivate Your Team...</a>
<p class="mt-4">Cras in fringilla egestas condimentum morbi ut urna nec nunc.Cras in fringilla egestas condimentum morbi ut urna nec nunc.Cras in fringilla egestas condimentum morbi ut urna nec nunc.Cras in fringilla egestas condimentum morbi ut urna nec nunc.</p>

<div class="d-flex text-small">
              <a href="#">Business</a>
              <span class="text-muted ml-1">29th November</span>
            </div>

      </div>
      <div class="col-lg-5 ">
        <ul class="list-unstyled">
        {blogs.map((category) => {
              return (
                  <li class="row mb-4"
                      key={category.id}
                    >
                      <Link
                          href={`/categories/${category.slug}`}>
                         <a class="col-3">
            <img src={`${API}/blog/photo/${category.slug}`} alt="Image" class="rounded img-fluid"/>
          </a>
                      </Link>
                      <div class="col-9">
                      <a href="#">
              <h6 class="mb-3 h5 text-dark">{category.title}</h6>
            </a>

            <div class="d-flex text-small">
              <a href="#"> {showBlogCategories(category)}  </a>
              <span class="text-muted ml-1">{moment(category.updatedAt).fromNow()}</span>
            </div>
           </div>
                  </li>
              );
          })}
  
      </ul>
      </div>
    </div>
  </div>
</section> */}

        <section class="px-2 py-32 bg-white md:px-0">
  <div class="container items-center max-w-6xl px-8 mx-auto xl:px-5">
    <div class="flex flex-wrap items-center sm:-mx-3">
      <div class="w-full md:w-1/2 md:px-3">
        <div class="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
          <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
            <span class="block xl:inline">A code a Day </span>
            <span class="block text-indigo-600 xl:inline">Keeps Unemployment away</span>
          </h1>
          {/* <p class="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">It's never been easier to build beautiful websites that convey your message and tell your story.</p> */}
          <div class="relative flex flex-col sm:flex-row sm:space-x-4">
            <a href="#goto" class="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-indigo-600 rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto">
             Get Started
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
            {/* <a href="#_" class="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600">
              Learn More
            </a> */}
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2">
        <div class="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
            <img src="https://images.unsplash.com/photo-1498049860654-af1a5c566876?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"/>
          </div>
      </div>
    </div>
  </div>
</section>
<ul class="nav nav-tabs px-2 py-2 bg-white md:px-0" id="goto">
<li
                            key="2"
                            className={
                              ' nav-item mr-1 pb-1 border-b-4 rounded-sm ' +
                           
                               
                                 'border-primary text-primary'
                             
                          }
                           >
                            <Link
                                href={`/`}>
                                   <a class="nav-link active" aria-current="page" href="#">Recent</a>
                                
                            </Link>
                        </li>
{categories.map((category) => {
                    return (
                        <li
                            key={category.id}
                            className={
                              ' nav-item mr-1 pb-1 border-b-4 rounded-sm ' +
                              `${
                                  isActiveLink(category)
                                      ? 'border-primary text-primary'
                                      : 'border-white text-gray-400'
                              }`
                          }
                           >
                            <Link
                                href={`/categories/${category.slug}`}>
                                   <a class="nav-link active" aria-current="page" href="#">{category.name}</a>
                                
                            </Link>
                        </li>
                    );
                })}
  {/* <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#"></a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
  </li> */}
</ul>
<div class="row px-2 py-2 bg-white md:px-0">
      <div class="leftcolumn">
          
        <div className="container">{showAllBlogs()}</div>
        <div className="container">{showLoadedBlogs()}</div>
        <div className="text-center pt-5 pb-5">{loadMoreButton()}</div>
      </div>

      <div class="rightcolumn ">
          <Search />
          <br/>
          <br/>
          <div class="list">
          <h3 class="font-medium leading-tight text-3xl mt-0 mb-2 text-black-900 uppercase font-bold">Categories</h3>
          {/* <h3 class=" mr-2 p-2text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-xl xl:text-6xl">Categories</h3> */}
        {showAllCategories()}
        <br />
        <br />
        <h3 class="font-medium leading-tight text-3xl mt-0 mb-2 text-black-900 uppercase font-bold">Tags</h3>
        {showAllTags()}
        </div>
      </div>
    </div>
  </div>
      </Layout>
       
    );
    };

    Test.getInitialProps = () => {
  let skip = 0;
  let limit = 5;
  return listBlogsWithCategoriesAndTags(skip, limit).then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      return {
        blogs: data.blogs,
        categories: data.categories,
        tags: data.tags,
        totalBlogs: data.size,
        blogsLimit: limit,
        blogSkip: skip,
      };
    }
  });
};
export default withRouter(Test);



