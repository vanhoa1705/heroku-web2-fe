import React, { useState, useEffect } from 'react';
import { createReview, detailsAcademy, getReviews } from "../actions/academyActions";
import { useSelector, useDispatch } from "react-redux";
import MessageBox from '../MessageBox';
import LoadingBox from "../LoadingBox";
import { ACADEMY_REVIEW_CREATE_RESET } from '../../constants/academyConstants'; 
import Rating from "../Rating/Rating";
import { Container } from "react-bootstrap";
import Icons from '../common/Icons';

function CourseReview({academy}) {
    const academyId = academy.academy_id.toString();
    const userToken = localStorage.token;

    const dispatch = useDispatch();
    const academyReviewCreate = useSelector((state) => state.academyReviewCreate);
    const {loading, error, success } = academyReviewCreate;

    const academyReviews = useSelector((state) => state.academyReviews);
    const {loading: loadingReviews, error: errorReviews, reviews } = academyReviews;
    console.log(academyReviews);

    const [point, setPoint] = useState(0);
    const [comment, setComment] = useState('');

    useEffect(() => {
        dispatch(getReviews(academyId));
    }, [dispatch, academyId]);

    useEffect(() => {
        dispatch({ type: ACADEMY_REVIEW_CREATE_RESET });

        if (success) {
            window.alert('Course Review Submitted Successfully!!!');
            setPoint('');
            setComment('');
            dispatch(detailsAcademy(academyId));
        }
    }, [dispatch, academyId, success]);

    const submitHandler = (e) => {
        e.preventDefault();
        if (comment && point) {
        const pointInt = Number(point);
        dispatch(
            createReview(userToken, { point: pointInt, comment, academy_id: academyId })
        );
        } else {
            alert('Please enter comment and point');
        }
    };

    return (
        <Container>
            <div>
            <h3 className="left">
                <Icons icon="comments" className="mr-2 text-danger" />
                Reviews
            </h3>
            {loadingReviews ? (
                <LoadingBox></LoadingBox>
            ) : errorReviews ? (
                <MessageBox>{error}</MessageBox>
            ) : (
                <>
                {reviews.length <= 0 && (
                    <MessageBox>There is currently no review for this course</MessageBox>
                )}
                <div>
                    {reviews.map((review) => (
                    <div key={review.academy_rate_id} className="left">
                        <strong>{review.student.name + " "}</strong><span><i>{review.created_at.substring(0, 10)}</i></span>
                        <Rating rate={review.point} cap=" "></Rating>
                        <p>{review.comment}</p>
                    </div>
                    ))}
                    <div>
                    <form className="form" onSubmit={submitHandler} style={{width: "40%"}}>
                        <div>
                        <h3>Review Course</h3>
                        </div>
                        <div>
                        <label htmlFor="rating" className="left">Rating:</label>
                        <select
                            id="rating"
                            value={point}
                            onChange={(e) => setPoint(e.target.value)}
                            style={{height: "30px", borderRadius: "0.3rem"}}
                        >
                            <option value="">Select...</option>
                            <option value="1">1 - Poor</option>
                            <option value="2">2 - Fair</option>
                            <option value="3">3 - Good</option>
                            <option value="4">4 - Very good</option>
                            <option value="5">5 - Excelent</option>
                        </select>
                        </div>
                        <div>
                        <label htmlFor="comment" className="left">Comment:</label>
                        <textarea
                            id="comment"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            placeholder="Write your comment here..."
                            style={{height: "80px", borderRadius: "0.3rem"}}
                        ></textarea>
                        </div>
                        <div>
                        <label />
                        <button className="primary mb-3" type="submit" style={{borderRadius: "0.3rem", fontSize: "1.2rem"}}>
                            Leave a rating
                        </button>
                        </div>
                        <div>
                        {loading && <LoadingBox></LoadingBox>}
                        {error && (
                            <MessageBox variant="danger">
                            {error}
                            </MessageBox>
                        )}
                        </div>
                    </form>
                    </div>
                </div>
                </>
            )
            }
            </div>
        </Container>
    )
}

export default CourseReview;
