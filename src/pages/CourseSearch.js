import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { listSearchAcademys } from '../components/actions/academyActions';
import { Container, Row, Col } from 'react-bootstrap';
// import CheckBox from '../components/CheckBox/Checkbox';
import CoursesList from '../components/CoursesList/CoursesList';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useHistory } from 'react-router';


const CourseSearch = () => {
    const dispatch = useDispatch();

    const { keyword = '', order = 'lowtohigh', pageNumber = 1 } = useParams();
    const academyListSearch = useSelector((state) => state.academyListSearch);
    const { loading, error, academys, page, pages } = academyListSearch;
    useEffect(() => {
        dispatch(listSearchAcademys({ keyword: keyword !== '' ? keyword : '', order, pageNumber }));
    }, [dispatch, keyword, order, pageNumber]);

    let history = useHistory();
    const getFilterUrl = (filter) => {
        const filterKeyword = filter.keyword || keyword;
        const sortOrder = filter.order || order;
        const pageNum = filter.pageNumber || pageNumber;
        return `/search/keyword/${filterKeyword}/order/${sortOrder}/page/${pageNum}`;
    };

    return (
    <>
        {/* <div>
            {academys.map((academy) => (
                <div>
                    {academy.academy_name}
                </div>
            ))}
        </div> */}

        <div className="row">
            {loading ? (
            <LoadingBox></LoadingBox>
            ) : error ? (
            <MessageBox>{error}</MessageBox>
            ) : (
            <>
                <Container>
                    <Row>
                        {/* <Col xs={3}>
                            <div className="card">
                                <div className="card-body" >
                                    <CheckBox />
                                </div>
                            </div>    
                        </Col> */}
                        <Col>
                            <Container>
                                <div className="card">
                                    <div className="card-body text-left">
                                        <span>Sorted by: </span>
                                        <select
                                            value={order}
                                            onChange={(e) => {
                                                history.push(getFilterUrl({ order: e.target.value }));
                                            }}
                                            style={{height: "30px", borderRadius: "0.3rem"}}
                                        >
                                            <option value="lowtohigh">Price: Low to High</option>
                                            <option value="hightolow">Price: High to Low</option>
                                            <option value="toprated">Student Ratings</option>
                                        </select>
                                        
                                    </div>
                                </div>
                            </Container>
                            { academys.map((academy) => (
                                <CoursesList key={academy.academy_id} academy={academy} />
                            ))}  
                        </Col>
                    </Row>
                    <Row style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
                        <div className="row center pagination">
                            {[...Array(pages).keys()].map((x) => (
                            <Link
                                className={x + 1 === page ? 'active' : ''}
                                key={x + 1}
                                to={getFilterUrl({ pageNumber: x + 1 })}
                            >
                                {x + 1}
                            </Link>
                            ))}
                        </div> 
                    </Row>
                </Container> 
                    
            </>   
            )}
        </div>
        
        {/* <Container fluid={true}>
            <Row>
                <Col xs={3}>
                    <div className="card">
                        <div className="card-body" >
                            <CheckBox />
                        </div>
                    </div>    
                </Col>
                <Col xs={9}>
                    <Container>
                        <div className="card">
                            <div className="card-body text-left">
                                <span>Sorted by: </span>

                                <Dropdown as={ButtonGroup}>
                                <Dropdown.Toggle id="dropdown-custom-1">Rating</Dropdown.Toggle>
                                    <Dropdown.Menu className="super-colors">
                                        <Dropdown.Item eventKey="1">Rating Descending</Dropdown.Item>
                                        <Dropdown.Item eventKey="2">Rating Ascending</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>{' '}
                                <Dropdown as={ButtonGroup}>
                                <Dropdown.Toggle id="dropdown-custom-1">Price</Dropdown.Toggle>
                                    <Dropdown.Menu className="super-colors">
                                        <Dropdown.Item eventKey="1">Price Descending</Dropdown.Item>
                                        <Dropdown.Item eventKey="2">Price Ascending</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>{' '}
                            </div>
                        </div>
                    </Container>
                    <CoursesList />
                </Col>
            </Row>
            <Row style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
                <PaginationPart />
            </Row>
        </Container> */}
    </>
  );
};

export default CourseSearch;