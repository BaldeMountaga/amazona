import React from "react";

import Base from "../Base";
import Swiper from "../../components/Header/widgets/Swiper";
import Categories from "./Categories";

import cat1BgImg from '../../assets/images/demo/image-2.jpg';
import cat2BgImg from '../../assets/images/demo/image-3.jpg';


const Home = () => {
    const categories = [
        {
            title: "Feel the summer",
            subTitle: "New Bag 1913",
            bgImage: cat1BgImg
        },
        {
            title: "Feel the summer",
            subTitle: "New Collection",
            bgImage: cat2BgImg
        },
    ]
    return (
        <Base topbar>
            <Swiper />
            <Categories categories={categories} />
        </Base>
    )
}


export default Home;