import Link from "next/link";
import renderHTML from "react-render-html";
import moment from "moment";
import { API } from "../../config";

const Card = ({ blog }) => {
  const showBlogCategories = (blog) =>
    blog.categories.map((c, i) => (
      <Link key={i} href={`/categories/${c.slug}`}>
        {/* <small class="font-weight-bold"> {c.name}</small> */}
        {/* <a className="btn btn-outline-danger btn-sm mr-2">{c.name }   </a> */}
        <li class="m-1">
                         <a class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out" >{c.name } </a>
                     </li>
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
      {/* <div class="row">
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
                
                   <Link href={`/profile/${blog.postedBy.username}`}>
                        <a class="text-dark">{blog.postedBy.name}</a>
                    </Link>
                
                </div>
                <small class="text-muted">{moment(blog.updatedAt).fromNow()}</small>
              </div>
            </div>
          </div>
        </div>
      </div> */}
   
   <section class="mb-2">
 

 <article class="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
     <a class="relative block group" >
         <div class="absolute inset-0 bg-gray-800 hidden md:block  pointer-events-none" aria-hidden="true"></div>
         <Link href={`/blogs/${blog.slug}`}>
         <figure class="relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden ">
             <img class="absolute inset-0 w-full h-full object-cover " src={`${API}/blog/photo/${blog.slug}`} width="200" height="200" alt="Blog post"/>
         </figure>
         </Link>
     </a>
     <div>
         <header>
             <div class="mb-3">
                 <ul class="flex flex-wrap text-xs font-medium -m-1">
                     <li class="m-1">
                         <a class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out" >Solved</a>
                     </li>
                     {/* <li class="m-1">
                         <a class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out" >Engineering</a>
                     </li> */}
                     {showBlogCategories(blog)}
                 </ul>
             </div>
             <h3 class="text-2xl lg:text-3xl font-bold leading-tight mb-2">
             <Link href={`/blogs/${blog.slug}`}>
                 <a class="hover:text-black-100 transition duration-150 ease-in-out card-hver" >{blog.title}</a>
                 </Link>
             </h3>
         </header>
         <p class="text-lg text-gray-400 flex-grow" > {renderHTML(blog.excerpt)}</p>
         <footer class="flex items-center mt-4">
             <a >
                 <img class="rounded-full flex-shrink-0 mr-4" src="https://preview.cruip.com/open-pro/images/news-author-04.jpg" width="40" height="40" alt="Author 04"/>
             </a>
             <div>
             <Link href={`/profile/${blog.postedBy.username}`}>
                 <a class="font-medium text-gray-900 hover:text-gray-500 transition duration-150 ease-in-out" >{blog.postedBy.name}</a>
                 </Link>
                 <span class="text-gray-700"> - </span>
                 <span class="text-gray-500">{moment(blog.updatedAt).fromNow()}</span>
             </div>
         </footer>
     </div>
 </article>    

</section>
    </div>
  );
};

export default Card;
