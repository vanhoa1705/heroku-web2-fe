import React, { useEffect } from "react";
import { Collapse, Nav } from "react-bootstrap";
import SingleItem from "./SingleItem";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { listOutlineAcademy } from "../../actions/academyActions";
import LoadingBox from "../../LoadingBox";
import MessageBox from "../../MessageBox";


const FrameCollapsable = ({active, academyId, currentId}) => {
  const dispatch = useDispatch();
  const academyListOutline = useSelector((state) => state.academyListOutline);
  const { loading, error, outlines } = academyListOutline;

  useEffect(() => {
    dispatch(listOutlineAcademy(academyId));
  }, [dispatch, academyId]);  

  return (
    <Collapse in={active} style={{textAlign: "left"}}>
      <Nav className="flex-column">
        {loading ? (
          <LoadingBox></LoadingBox>
          ) : error ? (
          <MessageBox>{error}</MessageBox>
          ) : (
            <>
              {outlines.map(outline => (
                <div key={outline.academy_outline_id}>
                  <Link to={`/coursevideo/academy/${academyId}/outline/${outline.academy_outline_id}`} >
                    {outline.academy_outline_id + "" === currentId ? (
                      <b><SingleItem outline={outline} currentId={currentId} /></b>
                    ) : (
                      <SingleItem outline={outline} currentId={currentId} />
                    )}
                  </Link>
                </div>
              ))}
            </>
          )
        }

                    {/* {outline.academy_outline_id === currentId ? (
                      <b><SingleItem outline={outline} currentId={currentId} /></b>
                    ) : (
                      <SingleItem outline={outline} currentId={currentId} />
                    )} */}
        
        {/* <div>
          <Link to="/coursevideo">
            <SingleItem />
          </Link>
        </div>
        <div>
          <Link to="/coursevideo">
            <SingleItem />
          </Link>
        </div>
        <div>
          <Link to="/coursevideo">
            <SingleItem />
          </Link>
        </div>
        <div>
          <Link to="/coursevideo">
            <SingleItem />
          </Link>
        </div> */}
      </Nav>
    </Collapse>
  );
};

export default FrameCollapsable;
