import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listAcademyCategories } from '../actions/academyActions';
import LoadingBox from '../LoadingBox';
import MessageBox from '../MessageBox';
import { Link } from 'react-router-dom';
import "./style.css";

function CategoryDropdown() {
    const dispatch = useDispatch();
    const academyCategoryList = useSelector((state) => state.academyCategoryList);
    const {
        loading,
        error,
        categories
    } = academyCategoryList;
    useEffect(() => {
        dispatch(listAcademyCategories());
    }, [dispatch]);
    return (
        <>
            <nav>
                <ul className="nav">
                    <li><a href="/#">Categories</a>
                        <ul>
                            {loading ? (
                            <LoadingBox></LoadingBox>
                            ) : error ? (
                            <MessageBox variant="danger">{error}</MessageBox>
                            ) : (
                            categories.map((cate) => (
                                <li key={cate.academy_category_id}><Link to={`/search/category/${cate.academy_category_id}`}>{cate.academy_category_name}</Link>
                                {cate.child.length > 0 ? (
                                    <ul>
                                        {cate.child.map((c) => (
                                            <li key={c.academy_category_id}><Link to={`/search/category/${c.academy_category_id}`}>{c.academy_category_name}</Link></li>
                                        ))}
                                    </ul>
                                ) : null
                                }
                                </li>
                                
                            ))
                            )}
                            {/* <li><a href="/#">Mathematics</a></li>
                            <li><a href="/#">IT</a>
                            <ul>
                                <li><a href="/#">Web Development</a></li>
                                <li><a href="/#">Mobile Development</a></li>
                                <li><a href="/#">Artificial Intelligence</a></li>
                                <li><a href="/#">Machine learning</a></li>
                            </ul>
                            </li>
                            <li><a href="/#">Literature</a></li>
                            <li><a href="/#">History</a></li> */}
                        </ul>
                    </li>
                </ul>
            </nav>

        </>
      
    )
}

export default CategoryDropdown;
