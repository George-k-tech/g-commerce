import Image from "next/image";
import { getDogsImage } from "./image/page";

export default async function Home() {
  const dog = await getDogsImage();
  return (
   <div>
<Image src={dog.message} width={200} height={200}/>
<p>{dog.status}</p>
   </div>
  )
}
