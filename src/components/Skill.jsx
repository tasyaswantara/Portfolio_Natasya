import Jetpack from "../assets/icons/jetpack.png"
import Tailwind from "../assets/icons/tailwind.png"
import Marquee from "react-fast-marquee";

const Skill = () => {
  return (
    <div className=" w-[90%] md:w-1/2 mx-auto">
      <Marquee autoFill gradient >
          <img src="https://img.icons8.com/ios/50/html-5.png" className="h-16 w-16 mx-4" alt="HTML5" />
          <img src="https://img.icons8.com/ios/50/css3.png" className="h-16 w-16 mx-4" alt="CSS3" />
          <img src="https://img.icons8.com/ios/50/javascript.png" className="h-16 w-16 mx-4" alt="JS" />
          <img src="https://img.icons8.com/ios/50/react-native.png" className="h-16 w-16 mx-4" alt="React.js" />
          <img src={Tailwind} className="h-16 w-16 mx-4" alt="Tailwind" />
          <img src={Jetpack} className="h-16 mx-4" alt="Jetpack" />
          <img src="https://img.icons8.com/ios/50/java-coffee-cup-logo.png" className="h-16 w-16 mx-4" alt="Java" />
          <img src="https://img.icons8.com/ios/50/kotlin.png" className="h-16 w-16 mx-4" alt="Kotlin" />
          <img src="https://img.icons8.com/ios/50/git.png" className="h-16 w-16 mx-4" alt="Git" />
        </Marquee>
    </div>
        
      
  );
}

export default Skill;
