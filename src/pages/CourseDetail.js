import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SingleCourse from "../components/SingleCourse";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { detailsAcademy } from "../components/actions/academyActions";


function CourseDetail(props) {
    const dispatch = useDispatch();
    const academyId = props.match.params.id;
    const academyDetails = useSelector((state) => state.academyDetails);
    const { loading, error, academy } = academyDetails;
        // <SingleCourse academy={academy}/>
    useEffect(() => {
        dispatch(detailsAcademy(academyId));
    }, [dispatch, academyId]);

    // console.log(academy);

    return (
        <div>
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox>{error}</MessageBox>
            ) : (
                <SingleCourse academy={academy}/>
            )
            }
        </div>
    );
};

export default CourseDetail;
