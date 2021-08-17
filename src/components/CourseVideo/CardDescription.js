import React from "react";

export default function CardDescription({ outlineDetail }) {
  // const pic_url = author.user_pic ? author.user_pic : "/img/noPic.jpg";

  return (
    <>
      <h1 className="h4 mb-0 mt-3" style={{ textAlign: "left" }}>
        {outlineDetail.title}
      </h1>
      <div className="teacher d-flex align-items-center mt-3">
        <img
          alt="author name"
          className="avatar avatar-md-sm rounded-circle shadow"
          src={
            outlineDetail.teacher.avatar
              ? outlineDetail.teacher.avatar
              : "https://firebasestorage.googleapis.com/v0/b/tu-academia.appspot.com/o/user-pics%2F366-tomas_vasquez?alt=media&token=61a8fc1e-936a-4cdb-a71e-ecb9063f42b2"
          }
          style={{ height: "40px", width: "40px" }}
        />
        <div className="ml-2">
          <h6 className="mb-0 text-shadow">
            <strong>{outlineDetail.teacher.name}</strong>
          </h6>
          <p className="small my-0 text-muted left">Web developer</p>
        </div>
      </div>

      <p className="mt-3" style={{ textAlign: "left" }}>
        {outlineDetail.description}
      </p>
    </>
  );
}
