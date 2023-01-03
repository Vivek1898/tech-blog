import Link from 'next/link';
import renderHTML from 'react-render-html';
import { useState, useEffect } from 'react';
import { listSearch } from '../../actions/blog';
import Router, { withRouter } from 'next/router';

const Search = ({ router }) => {
    const [values, setValues] = useState({
        search: undefined,
        results: [],
        searched: false,
        message: ''
    });

    const { search, results, searched, message } = values;

    const searchSubmit = e => {
        e.preventDefault();
        listSearch({ search }).then(data => {
            setValues({ ...values, results: data, searched: true, message: `${data.length} blogs found` });
        });
        // show search result on different page
        // https://www.udemy.com/instructor/communication/qa/8593208/detail/

        // Router.push({
        //     pathname: '/search',
        //     query: { searchQuery: search }
        // });
    };

    const handleChange = e => {
        // console.log(e.target.value);
        setValues({ ...values, search: e.target.value, searched: false, results: [] });
    };

    const searchedBlogs = (results = []) => {
        return (
            <div className="card">
                {message && <p className="pt-2 text-muted font-italic">{message}</p>}

                {results.map((blog, i) => {
                    return (
                        <div key={i}>
                            <Link href={`/blogs/${blog.slug}`}>
                                <a className="text-primary">{blog.title}</a>
                            </Link>
                        </div>
                    );
                })}
            </div>
        );
    };

    const searchForm = () => (
        <form onSubmit={searchSubmit}>
            <div className="row">
                <div className="">
                    <input type="search" className="form-control mr-sm-2 " placeholder="Search blogs" onChange={handleChange} />
                </div>

                <div className="">
                    <button className="btn btn-block btn-outline-primary" type="submit">
                        Search
                    </button>
                </div>
            </div>
        </form>
    );

    return (
        <div className="container-fluid">
            <div className="">{searchForm()}</div>
            {/* style={{ marginTop: '-120px', marginBottom: '-80px' }} */}
            {searched && <div >{searchedBlogs(results)}</div>}
        </div>
    );
};

export default withRouter(Search);
