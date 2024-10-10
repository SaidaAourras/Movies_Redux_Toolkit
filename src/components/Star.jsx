
const Star = (Props) => {

    const {filled} = Props
    return(
        <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill={filled ? "gold" : "lightgray"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 15.27L16.18 19 14.54 12.97 20 8.24 13.81 7.63 10 1 6.19 7.63 0 8.24 5.46 12.97 3.82 19 10 15.27z" />
    </svg>
    )
}

  export default Star;