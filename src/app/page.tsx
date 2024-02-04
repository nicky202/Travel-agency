/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

//imported images *****
import img from "@/assets/pexels-andrea-piacquadio-787452.jpg";
import img1 from "@/assets/1.jpg";
import img2 from "@/assets/2.jpg";
import img3 from "@/assets/3.jpg";
import baobab from "@/assets/baobab.jpg";
import parc from "@/assets/parc.jpg";
import nosy from "@/assets/nosy.jpg";
import Header from "./components/Header/Header";

//imported icons ****
import {
  AiOutlineLock,
  AiOutlineSafety,
  AiOutlineDollarCircle,
} from "react-icons/ai";
import CardSafety from "./components/Card/CardSafety";
import CardTendency from "./components/Card/CardTendency";

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-7xl m-auto">
        <div className="w-full flex flex-col items-center gap-24 my-28 px-3">
          <div className="flex items-center flex-wrap gap-4 justify-center">
            <CardSafety
              Icon={AiOutlineLock}
              title="Protection des Données Personnelles"
              content=" Confidentialité assurée avec notre icône de sécurité des données."
            />
            <CardSafety
              Icon={AiOutlineSafety}
              title="Assurance Voyage Complète"
              content="Voyagez en toute confiance avec notre assurance complète."
            />
            <CardSafety
              Icon={AiOutlineDollarCircle}
              title="Garantie de Remboursement"
              content="Réservez sans souci avec notre garantie de remboursement ."
            />
          </div>

          <div className="flex flex-col gap-10 items-center">
            <h1 className="text-3xl text-center">Le monde selon vos envies</h1>
            <div className="flex flex-row flex-wrap items-center justify-center gap-4">
              <div className="w-72 flex flex-col items-center gap-2">
                <figure>
                  <Image
                    src={img}
                    alt="Shoes"
                    className="rounded-md max-h-52 object-cover"
                  />
                </figure>
                <div className="font-bold m-auto capitalize">
                  Circuit accompagné
                </div>
              </div>
              <div className="w-72 flex flex-col items-center gap-2">
                <figure>
                  <Image
                    src={img1}
                    alt="Shoes"
                    className="rounded-md max-h-52 object-cover"
                  />
                </figure>
                <div className="font-bold m-auto capitalize">
                  voyager à l'automne
                </div>
              </div>
              <div className="w-72 flex flex-col items-center gap-2">
                <figure>
                  <Image
                    src={img2}
                    alt="Shoes"
                    className="rounded-md max-h-52 object-cover"
                  />
                </figure>
                <div className="font-bold m-auto capitalize">
                  des voyages inoubliables
                </div>
              </div>
              <div className="w-72 flex flex-col items-center gap-2">
                <figure>
                  <Image
                    src={img3}
                    alt="Shoes"
                    className="rounded-md max-h-52 object-cover"
                  />
                </figure>
                <div className="font-bold m-auto capitalize">
                  voyager en famille
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10 items-center">
            <h1 className="text-3xl text-center">Les déstinations tendances</h1>
            <div className="flex flex-row flex-wrap items-center justify-center gap-4">
              <CardTendency
                title="Avenue de Baobab, Morondava"
                content="Une allée emblématique bordée de baobas majestueux, offrabt des vues
          spectaculaiires, en particulier au coucher du soleil."
                image={baobab.src}
              />
              <CardTendency
                title="Nosy Iranja"
                content="Nichée dans les eaux cristallines de l'océan indien, une île
                    tropicale qui émerveille les visiteurs par sa beauté
                    naturelle préservée."
                image={nosy.src}
              />
              <CardTendency
                title="Parc National de l'Isalo"
                content="Un paysage époustouflant composé de canyons, de plateaux
                    rocheux, de piscines naturelles et de formations géologiques
                    uniques."
                image={parc.src}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
