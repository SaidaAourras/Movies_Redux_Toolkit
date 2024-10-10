import Star from "./Star";


  


const Rating = (Props) => {
    const {rating} = Props
    const stars = Array.from({ length: 5 }, (_, index) => index < rating);
  
    return (
      <div style={{ display: 'flex' }}>
        {stars.map((filled, index) => (
          <Star key={index} filled={filled} />
        ))}
      </div>
    );
  };
export default Rating  