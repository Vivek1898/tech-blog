import Link from 'next/link';
import renderHTML from 'react-render-html';
import moment from 'moment';
import { API } from '../../config';

const SmallCard = ({ blog }) => {
    return (
        <div className="card">
            <section>
              
                    <a href={`/blogs/${blog.slug}`}>
                        <img
                            className="img img-fluid"
                            style={{ height: '250px', width: '100%' }}
                            src={`${API}/blog/photo/${blog.slug}`}
                            alt={blog.title}
                        />
                    </a>
               
            </section>

            <div className="card-body">
                <section>
                   
                        <a href={`/blogs/${blog.slug}`} class="hover:text-black-100 transition duration-150 ease-in-out">
                            <h5 className=" blog-title font-medium leading-tight text-1xl mt-0 mb-2 text-black-900 uppercase font-bold">{blog.title}</h5>
                        </a>
                   
                    {/* <div className="card-text">{renderHTML(blog.excerpt)}</div> */}
                </section>
            </div>

            <div className="card-body">
                Posted {moment(blog.updatedAt).fromNow()} by{' '}
                <Link href={`/profile/${blog.postedBy.username}`}>
                    <a>{blog.postedBy.username}</a>
                </Link>
            </div>
        </div>
    );
};

export default SmallCard;
