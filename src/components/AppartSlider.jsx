import Slider from "./Slider";

function AppartSlider(props) {


    return (
        <section>
            <div className="container">
                <Slider slides={props.appartId.pictures.map((photo) => {
                    return <img src={photo} alt={photo} key={photo} className="slider__photo" />
                })} />
            </div>
        </section>
    )

}

export default AppartSlider