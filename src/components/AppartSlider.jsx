import Slider from "./Slider";

function AppartSlider (props) {
    const containerStyles ={
        width: '500px',
        height: '500px',
        margin: '0 auto',
       
    }
    
    return (
        <section>
        <div className="container">
            
            <div style={containerStyles}>
               
            <Slider slides={props.appartId.pictures.map((photo) => {
                return <img src={photo} alt={photo} key = {photo} />})}  />
          
            </div>
            
        </div>
        </section>
    )
    
}

export default AppartSlider

/*
<div>{props.appartId.pictures.map((photo) => {
                return <img src={photo} alt={photo} key = {photo} />}) }
                 </div> */