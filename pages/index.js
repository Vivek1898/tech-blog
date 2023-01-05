import Head from "next/head";
import Link from "next/link";
import { withRouter } from "next/router";
import Router from 'next/router';
import Layout from "./../components/Layout";
import { useState } from "react";
import { listBlogsWithCategoriesAndTags } from "./../actions/blog";
import Card from "./../components/blog/Card";
import { API, DOMAIN, APP_NAME, FB_APP_ID } from "./../config";
import Search from "./../components/blog/Search";

import {
  TabContent, TabPane, Nav,
  NavItem, NavLink, Row, Col
} from 'reactstrap';
import classnames from 'classnames';
const Blogs = ({
  blogs,
  categories,
  tags,
  totalBlogs,
  blogsLimit,
  blogSkip,
  router,
}) => {
  const head = () => (
    <Head>
      <title>Daily Coding | {APP_NAME}</title>
      <meta
        name="description"
        content="Solve Daily contest problems from leetcode codechef codeforces geeksforgeeks spoj hackerrank hackerearth"
      />
      <link rel="canonical" href={`${DOMAIN}${router.pathname}`} />
      <meta
        property="og:title"
        content={`Solve daily coding problems | ${APP_NAME}`}
      />
      <meta
        property="og:description"
        content="Solve Daily contest problems from leetcode codechef codeforces geeksforgeeks spoj hackerrank hackerearth"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${DOMAIN}${router.pathname}`} />
      <meta property="og:site_name" content={`${APP_NAME}`} />

      <meta
        property="og:image"
        content={`${DOMAIN}/static/images/seoblog.jpg`}
      />
      <meta
        property="og:image:secure_url"
        content={`${DOMAIN}/static/images/seoblog.jpg`}
      />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="fb:app_id" content={`${FB_APP_ID}`} />
    </Head>
  );

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
      <Link href={`categories/${c.slug}`} key={i}>
        <a className="btn btn-primary mr-1 ml-1 mt-3">{c.name}</a>
      </Link>
    ));
  };

  const showAllTags = () => {
    return tags.map((t, i) => (
      <Link href={`tags/[key]`} as={`tags/${t.slug}`}  key={i}>
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
   // State for current active Tab
   const [currentActiveTab, setCurrentActiveTab] = useState('1');
  
   // Toggle active state for Tab
   const toggle = tab => {
       if (currentActiveTab !== tab) setCurrentActiveTab(tab);
   }

  return (
    <React.Fragment>
      {head()}
      <Layout>
        <main>
          <div className="container-fluid">
            <header>
              <div className="col-md-12 pt-3">
                <h1 className="display-4 font-weight-bold text-center smallSize mb-4">
                Daily Code Blogs
                </h1>
              </div>
              <section>
                {/* <button onClick={()=>Router.push("categories/codeforces")}>Leetcode</button> */}
                <div className="pb-5 text-center top-cat">
                  {showAllCategories()}
                
                </div>
              </section>
            </header>
          </div>

          <div class="row">
            <div class="leftcolumn">
            {/* <Nav tabs>
                <NavItem>
                    <NavLink
                        className={classnames({
                            active:
                                currentActiveTab === '1'
                        })}
                        onClick={() => { toggle('1'); }}
                    >
                        Tab1
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({
                            active:
                                currentActiveTab === '2'
                        })}
                        onClick={() => { toggle('2'); }}
                    >
                        Tab2
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({
                            active:
                                currentActiveTab === '3'
                        })}
                        onClick={() => { toggle('3'); }}
                    >
                        Tab3
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={currentActiveTab}>
                <TabPane tabId="1">
                    <Row>
                        <Col sm="12">
                            <h5>Sample Tab 1 Content</h5>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <Row>
                        <Col sm="12">
                            <h5>Sample Tab 2 Content</h5>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="3">
                    <Row>
                        <Col sm="12">
                            <h5>Sample Tab 3 Content</h5>
                        
                            
                        </Col>
                    </Row>
                </TabPane>
            </TabContent> */}
                
              <div className="container">{showAllBlogs()}</div>
              <div className="container">{showLoadedBlogs()}</div>
              <div className="text-center pt-5 pb-5">{loadMoreButton()}</div>
            </div>

            <div class="rightcolumn ">
                <Search />
                <br/>
                <div class="list">

                <h3>Categories</h3>
              {showAllCategories()}
              <br />
              <br />
              <h3>Tags</h3>
              {showAllTags()}
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </React.Fragment>
  );
};

Blogs.getInitialProps = () => {
  let skip = 0;
  let limit = 10;
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

export default withRouter(Blogs);


