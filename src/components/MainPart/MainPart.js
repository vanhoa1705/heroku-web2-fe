import React, { useEffect } from 'react';
import Courses from '../Courses/Courses';
import Carousel from "react-multi-carousel";
import { Container } from 'react-bootstrap';
import "react-multi-carousel/lib/styles.css";
import Icons from "../common/Icons";
import LoadingBox from '../LoadingBox';
import MessageBox from '../MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listAcademys } from '../actions/academyActions';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router';

const MainPart = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      paritialVisibilityGutter: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      paritialVisibilityGutter: 50
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 30
    }
  };
  let history = useHistory();
  const buttonVariant = ["primary", "danger", "success", "warning", "info", "secondary"];

  const dispatch = useDispatch();
  const academyList = useSelector((state) => state.academyList);
  const { loading, error, academys } = academyList; 
  useEffect(() => {
    dispatch(listAcademys);
  }, [dispatch]);

  return (
    <Container className="mt-5">

    {loading ? (
      <LoadingBox></LoadingBox>
    ) : error ? (
      <MessageBox>{error}</MessageBox>
    ) : (
      <>
        <div className="course-item">
          <h5 className="mb-2" style={{float: 'left'}}> 
            <Icons icon="eye" className="mr-2 text-danger" />
            Most-watched courses:
          </h5>
          <Carousel
            ssr
            responsive={responsive}
            containerClass="container"
            draggable
          >
            {
              academys.listMostView.map(academy => (
                <Courses key={academy.academy_id} academy={academy} />
              ))
            }
          </Carousel>
        </div>
        <div className="course-item">
          <h5 className="mb-2" style={{float: 'left'}}> 
            <Icons icon="fire" className="mr-2 text-danger" />
            Newest courses:
          </h5>
          <Carousel
            ssr
            responsive={responsive}
            containerClass="container"
            draggable
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
          >
            {
              academys.listLatest.map(academy => (
                <Courses key={academy.academy_id} academy={academy} />
              ))
            }
          </Carousel>
        </div>

        <div className="course-item">
          <h5 className="mb-2" style={{float: 'left'}}> 
            <Icons icon="books" className="mr-2 text-danger" />
            Best-selling courses:
          </h5>
          <Carousel
            ssr
            responsive={responsive}
            containerClass="container"
            draggable
          >
            {
              academys.listOutstanding.map(academy => (
                <Courses key={academy.academy_id} academy={academy} />
              ))
            }
          </Carousel>
        </div>

        <div className="course-item">
          <h5 className="mb-2" style={{float: 'left'}}> 
            <Icons icon="eye" className="mr-2 text-danger" />
            Most-registered categories:
          </h5>
          <br />
          <br />
          <Container>
            {academys.listCate.map(function(object, i){
                return (
                  <span key={object.academy_category_id}>
                    <Button onClick={() => history.push(`/search/category/${object.academy_category_id}`)} variant={buttonVariant[i]} style={{width: "24%", height: "70px"}}>{object.academy_category_name}</Button>{' '}
                  </span>
                );
            })}
            {/* <Button variant="primary" style={{width: "24%"}}>Primary</Button>{' '}
            <Button variant="danger" style={{width: "24%"}}>Secondary</Button>{' '}
            <Button variant="success" style={{width: "24%"}}>Success</Button>{' '}
            <Button variant="warning" style={{width: "24%"}}>Warning</Button>{' '} */}
          </Container>
          <br />
          <br />
        </div>

        
      </>
    )
    }
    </Container>
  );
};
// Sau này tách các div này ra xử lý, thêm carousel danh sách chủ đề mua nhiều nhất dạng hình ảnh, đẹp!

export default MainPart;