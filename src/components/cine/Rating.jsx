import starImg from '../../assets/star.svg'
// eslint-disable-next-line react/prop-types
export default function Rating({value}){
const star=Array(value).fill(starImg)
    return(
        <>
        {star.map((star, index)=>{
           return <img
            key={index}
            src={star}
            width={14}
            height={14}
            alt=""
          />
        })}
        </>
    )
    

}