import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import { singleTag } from "../../actions/tag";
import { API, DOMAIN, APP_NAME, FB_APP_ID } from "../../config";
import renderHTML from "react-render-html";
import moment from "moment";
import Card from "../../components/blog/Card";
import Search from "../../components/blog/Search";
const Tag = ({ tag, blogs, query, categories, tags }) => {
  const head = () => (
    <Head>
      <title>
        {tag.name} | {APP_NAME}
      </title>
      <meta
        name="description"
        content={`Solved coding problems from ${tag.name}`}
      />
      <link rel="canonical" href={`${DOMAIN}/categories/${query.slug}`} />
      <meta property="og:title" content={`${tag.name}| ${APP_NAME}`} />
      <meta
        property="og:description"
        content={`Solved coding problems from ${tag.name}`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${DOMAIN}/categories/${query.slug}`} />
      <meta property="og:site_name" content={`${APP_NAME}`} />

      <meta
        property="og:image"
        content={`${DOMAIN}/static/images/seoblog.jpeg`}
      />
      <meta
        property="og:image:secure_url"
        content={`${DOMAIN}/static/images/seoblog.jpeg`}
      />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="fb:app_id" content={`${FB_APP_ID}`} />
    </Head>
  );
  const showAllCategories = () => {
    return categories.map((c, i) => (
      <Link href={`/categories/${c.slug}`} key={i} replace={true} prefetch={false}>
        <a className="btn btn-primary mr-1 ml-1 mt-3">{c.name}</a>
      </Link>
    ));
  };

  const showAllTags = () => {
    return tags.map((t, i) => (
      <Link href={`${t.slug}`} key={i}>
        <a className="btn btn-outline-primary mr-1 ml-1 mt-3">{t.name}</a>
      </Link>
    ));
  };
  return (
    <React.Fragment>
      {head()}
      <Layout>
        <main>
          <div className="">
            <header>
              {/* <div className="col-md-12 pt-3">
                                <h1 className="display-4 font-weight-bold">{tag.name}</h1>
                                {blogs.map((b, i) => (
                                    <div>
                                        <Card key={i} blog={b} />
                                        <hr />
                                    </div>
                                ))}
                            </div> */}
  <h1 className="display-4 font-weight-bold text-center">{tag.name}</h1>
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

Tag.getInitialProps = ({ query }) => {
  return singleTag(query.slug).then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      return {
        tag: data.tag,
        blogs: data.blogs,
        query,
        categories: data.categories,
        tags: data.tags,
      };
    }
  });
};

export default Tag;
