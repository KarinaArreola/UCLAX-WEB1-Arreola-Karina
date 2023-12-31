import styled from "styled-components";
/* React Carousel :: 3 rd Pary Library ------------*/
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
/* Data ------------*/
import { slidesData } from "./slidesData";
/* Components ------------*/
import Slide from "./Slide";
const SlideList = () => {
    return (
        <SlideListStyled className="SlideList">
            <Carousel autoPlay={true}>
                {slidesData.map((slide) => {
                    return <Slide key={slide.id} slide={slide} />;
                })}
            </Carousel>
        </SlideListStyled>
    );
};
export default SlideList;
const SlideListStyled = styled.div`
    .carousel .slide .legend {
        background-color: #041e42;
    }
`;
