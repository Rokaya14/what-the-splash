import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadImages } from "../actions/actions";
import "./styles.css";

const ImageGrid = (props) => {
  useEffect(() => {
    props.loadImages();
  }, [1]);

  const { images } = props;
  return (
    <div className="content">
      <section className="grid" key={Math.random()}>
        {images.map((image) => (
          <div
            key={image.id}
            className={`item item-${Math.ceil(image.height / image.width)}`}
          >
            <img src={image.urls.small} alt={image.user.username} />
          </div>
        ))}
      </section>
      <button className="btn  btn-outline-info" onClick={props.loadImages}>
        Load More ...
      </button>
    </div>
  );
};
const mapStateToProps = ({ isLoading, images, error }) => ({
  isLoading,
  images,
  error,
});
const mapDispatchToProps = (dispatch) => ({
  loadImages: () => dispatch(loadImages()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageGrid);
