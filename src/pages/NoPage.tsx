
import check from "../assets/lotties/404.json";
import Lottie  from "lottie-react";
const NoPage = () => {
  return (
        <article className='NoPage' >
<section className='NoPageSection'>
<Lottie
                animationData={check}
                loop={true}
                autoPlay={true}
             className="NoPageSection___animation"
            />
</section>
        </article>)
}
export default NoPage
