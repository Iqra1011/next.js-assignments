import Image from "next/image";

export default function Home() {
  return (
    <div className="home_container">
   
   <div className="child_container">Hey,<br/>My name is IQRA<br/>I am Next JS Developer✨

   </div>
   <div >
    <Image className="image_container" src={"/portfolio.png"} alt="user image" width={200} height={200}/>
  

   </div>
   
   </div>
  );
}
