import Link from "next/link";
import renderHTML from "react-render-html";
import moment from "moment";
import { API } from "../../config";

const Card = ({ blog }) => {
  const showBlogCategories = (blog) =>
    blog.categories.map((c, i) => (
      <Link key={i} href={`/categories/${c.slug}`}>
        {/* <small class="font-weight-bold"> {c.name}</small> */}
        <a className="btn btn-outline-danger btn-sm mr-2">{c.name }   </a>
      </Link> 
    ));

  const showBlogTags = (blog) =>
    blog.tags.map((t, i) => (
      <Link key={i} href={`/tags/${t.slug}`}>
        <a className="btn btn-outline-primary mr-1 ml-1 mt-3">{t.name}</a>
      </Link>
    ));

  return (
    <div className="lead ">
      {/* <header>
                <Link href={`/blogs/${blog.slug}`}>
                    <a>
                        <h2 className="pt-3 pb-3 font-weight-bold">{blog.title}</h2>
                    </a>
                </Link>
            </header> */}

      {/* <section>
                {showBlogCategories(blog)}
                {showBlogTags(blog)}
                <br />
                <br />
            </section> */}

      {/* <div className="row">
                <div className="col-md-4">
                    <section>
                        <img
                            className="img img-fluid"
                            style={{ maxHeight: 'auto', width: '100%' }}
                            src={`${API}/blog/photo/${blog.slug}`}
                            alt={blog.title}
                        />
                    </section>
                </div>
                <div className="col-md-8">
                <Link href={`/blogs/${blog.slug}`}>
                    <a>
                        <h2 className=" font-weight-bold">{blog.title}</h2>
                    </a>
                </Link>
                    <section>
                        
                        <div className="m-0">{renderHTML(blog.excerpt)} &nbsp;
                        <Link href={`/blogs/${blog.slug}`}>
                        Read more
                        </Link>
                        </div>
                       
                    </section>
                  
                    
                    <section>
                   
                <p className="mark ml-1 pt-2 pb-2">
                    Written by{' '}
                    <Link href={`/profile/${blog.postedBy.username}`}>
                        <a>{blog.postedBy.name}</a>
                    </Link>{' '}
                    | Published {moment(blog.updatedAt).fromNow()}
                </p>
            </section>
                </div>
            </div> */}
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <div class="blog-card bg-white mb-4 overflow-hidden d-lg-flex rounded-lg position-relative">
            <div class="blog-image overflow-hidden d-flex align-items-center">
              <img
                src={`${API}/blog/photo/${blog.slug}`}
                alt={blog.title}
                class="blog-thumbnail"
              />
            </div>
            <div class="p-2 blog-container">
          
              <div
                href="#!"
                class="text-uppercase"
              >
                {/* <small class="font-weight-bold">
                Solved { " "} 
                </small> */}
                <div className="btn btn-outline-success btn-sm">Solved</div>{" "}
                 {showBlogCategories(blog)}  
            
              </div>
              <h4 class="mt-2 font-weight-bold">
                <Link href={`/blogs/${blog.slug}`}>
                  <a  class="text-dark" title={blog.title}>
                   {blog.title}
                  </a>
                </Link>
              </h4>
              <p class="text-muted">
              {renderHTML(blog.excerpt)}
              </p>
              <div class="blog-footer d-flex justify-content-between align-items-center border-top">
                <div>
                  {/* <a href="#!">
                    <img
                      src="images/user.jpg"
                      alt=""
                      class="blog-author shadow"
                    />
                  </a> */}
                   <Link href={`/profile/${blog.postedBy.username}`}>
                        <a class="text-dark">{blog.postedBy.name}</a>
                    </Link>
                
                </div>
                <small class="text-muted">{moment(blog.updatedAt).fromNow()}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
