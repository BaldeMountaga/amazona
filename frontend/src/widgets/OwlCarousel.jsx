import React from "react";


const OwlNav = props => {
    return (
        <div className={"owl-nav"}>
            <button className={"owl-prev"} type={"button"} role={"presentation"}>
                <span aria-label={"Previous"}></span>
            </button>
            <button className={"owl-next"} type={"button"} role={"presentation"}>
                <span aria-label={"Next"}></span>
            </button>
        </div>
    )
}

const OwlCarousel = props => {

    const owlStageStyle = {
        transform: "translate3d(-690px, 0px, 0px)",
        transition: "all 0s ease 0s",
        width: 2415
    }
    const owlItemStyle = {
        width: 335,
        marginRight: 10
    }

    return (
        <div className={"owl-carousel owl-carousel-promo owl-loaded owl-drag"}
             data-loop={props.dataLoop} data-items={props.dataItems} data-margin={props.dataMargin} data-nav={props.dataNav}>
            <div className={"owl-stage-outer"}>
                <div className={"owl-stage"} style={owlStageStyle}>
                    {
                        props.children.map(child=> (
                            <div className={"owl-item active"} style={owlItemStyle}>
                                {child}
                            </div>
                        ))
                    }
                </div>
                <OwlNav />
                <div className={"owl-dots disabled"}></div>
            </div>
        </div>
    )
}


export default OwlCarousel;