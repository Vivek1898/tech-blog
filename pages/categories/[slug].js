import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { singleCategory } from '../../actions/category';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';
import renderHTML from 'react-render-html';
import moment from 'moment';
import Card from '../../components/blog/Card';
import Search from '../../components/blog/Search';
import { useRouter } from 'next/router';

const Category = ({ category, blogs, query,categories,tags }) => {
  const router = useRouter();
    const head = () => (
        <Head>
            <title>
                {category.name} | {APP_NAME}
            </title>
            <meta name="description" content={`Solved coding problems from ${category.name}`} />
            <link rel="canonical" href={`${DOMAIN}/categories/${query.slug}`} />
            <meta property="og:title" content={`${category.name}| ${APP_NAME}`} />
            <meta property="og:description" content={`Solved coding problems from ${category.name}`} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={`${DOMAIN}/categories/${query.slug}`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />

            <meta property="og:image" content={`${DOMAIN}/static/images/seoblog.jpeg`} />
            <meta property="og:image:secure_url" content={`${DOMAIN}/static/images/seoblog.jpeg`} />
            <meta property="og:image:type" content="image/jpg" />
            <meta property="fb:app_id" content={`${FB_APP_ID}`} />
        </Head>
    );
    const showAllTags = () => {
        return tags.map((t, i) => (
          <Link  href={`tags/${t.slug}`}  key={i} replace={true} >
            <a className="btn btn-outline-primary mr-1 ml-1 mt-3">{t.name}</a>
          </Link>
        ));
      };
    const showAllCategories = () => {
        return categories.map((c, i) => (
          <Link href={`${c.slug}`} key={i}>
            <a className="btn btn-primary mr-1 ml-1 mt-3">{c.name}</a>
          </Link>
        ));
      };
    
      const isActiveLink = (category ) => {
        console.log(router.query)
        console.log(category.slug)
        return category.slug === router.query.slug;
    };
    return (
        <React.Fragment>
            {head()}
            <Layout>
                <main>
                    <div className="">
                        <header>
                            {/* <div className="col-md-12 pt-3">
                                <h1 className="display-4 font-weight-bold">{category.name}</h1>
                                {blogs.map((b, i) => (
                                    <div>
                                        <Card key={i} blog={b} />
                                        <hr />
                                    </div>
                                ))}
                            </div> */}
<h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl text-center">
<span class="block text-black-600 xl:inline">  {category.name}</span>

  </h1>
<ul class="nav nav-tabs">
<li
                            key="2"
                            className={
                              ' nav-item mr-1 pb-1 border-b-4 rounded-sm ' 
                           
                               
                              
                             
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
                          }>
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
<div class="row">

            <div class="leftcolumn">

            {blogs.map((b, i) => (
                                    <div>
                                        <Card key={i} blog={b} />
                                        <hr />
                                    </div>
                                ))}
            </div>

            <div class="rightcolumn ">
                <Search />
                <br/>
                <div class="list">

                <h3 class="font-medium leading-tight text-3xl mt-0 mb-2 text-black-900 uppercase font-bold">Categories</h3>
              {showAllCategories()}
              <br />
              <br />
              <h3 class="font-medium leading-tight text-3xl mt-0 mb-2 text-black-900 uppercase font-bold">Tags</h3>
              {showAllTags()}
              </div>
            </div>
          </div>
                        </header>
                    </div>
                </main>
            </Layout>
        </React.Fragment>
    );
};

Category.getInitialProps = async ({ query }) => {
    const data = await singleCategory(query.slug);
  if (data.error) {
    console.log(data.error);
  } else {
    console.log(data.tags);
    return { category: data.category, blogs: data.blogs, query, categories: data.categories, tags: data.tags };
  }
};

export default Category;
