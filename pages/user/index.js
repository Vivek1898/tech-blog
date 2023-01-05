import Layout from '../../components/Layout';
import Private from '../../components/auth/Private';
import Link from 'next/link';
import Editor from '../../components/auth/Editor';
const UserIndex = () => {
    return (
        <Layout>
            <Editor>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5">
                            <h2>Editor Dashboard</h2>
                        </div>
                        <div className="col-md-4">
                            <ul class="list-group">
                                <li className="list-group-item">
                                    <a href="/user/crud/blog">Create Blog</a>
                                </li>

                                <li className="list-group-item">
                                    <Link href="/user/crud/blogs">
                                        <a>Update/Delete Blog</a>
                                    </Link>
                                </li>

                                <li className="list-group-item">
                                    <a href="/user/update">Update profile</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-8">right</div>
                    </div>
                </div>
            </Editor>
        </Layout>
    );
};

export default UserIndex;
