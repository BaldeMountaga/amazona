import React from "react";


const Categories = props => {
    return (
        <section className="py-1">
            <div className="container-full">
                <div className="row gutter-1">
                    {
                        props.categories.map(category=> (
                            <div className="col-md-6">
                                <div className="card card-tile">
                                    <figure className="card-image equal vh-75">
                                        <span className="image"
                                              style={{backgroundImage: `url(${category.bgImage})`}}></span>
                                    </figure>
                                    <div className="card-footer p-lg-5">
                                        <div className="bg-white d-inline-block p-3">
                                            <h2 className="card-title"><span
                                                className="d-block text-gray">{category.title}</span> {category.subTitle}</h2>
                                            <a href="#" className="underlined">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Categories;