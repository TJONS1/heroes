import StarIcon from "./StarIcon"

const Hero = ({hero}) => {
    const stars = [
        1,
        2,
        3,
        4,
        5
    ]
  return (
    <div><h1>{hero.name}</h1><span>{stars.map(s => {
        if(hero.awesome !== s - 1) {
            return <StarIcon />
        }
    })}</span></div>
  )
}

export default Hero