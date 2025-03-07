
import Link from "next/link";
import {React} from "react";
import { Navigation } from "./components/nav";
import Image from 'next/image';
import ProfileImage from "./assets/image-jorge.jpg";
import { cookies } from "next/headers";
import { English } from "./components/english/about";
import { Espanol } from "./components/spanish/acerca";

export default async function Home() {

  const cookieStore = await cookies();
  const language = cookieStore.get("language");
  
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <ul className="flex items-center justify-center gap-4">
        <Navigation/>
          
        <div className="flex flex-row mx-20">
          <div className="basis-1/5 overflow-hidden">
            <Image
              className="rounded-full aspect-square object-cover custom-position w-full"
              src={ProfileImage}
              alt="My image"
            />
          </div>
          <div className="basis-4/5 ml-10"> 
            {language?.value === "English" ? 
              <English/> : <Espanol/>
            }
          </div>
        </div>
      </ul>
    </div>
  );
}
