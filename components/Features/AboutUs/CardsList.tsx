import { IAboutUsCard } from "@/app/_core/interfaces/common";
import { db } from "@/app/_lib/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import React from "react";
import Card from "./Card";

const CardsList: React.FC = async () => {
  const querySnapShot = await getDocs(collection(db, "about-us"));
  const aboutUsCards: IAboutUsCard[] = querySnapShot.docs.map((doc) => ({
    ...(doc.data() as Omit<IAboutUsCard, "id">), // Explicitly cast data to Department type, omitting the 'id'
    id: doc.id,
  }));

  return (
    <div className="grid w-full grid-cols-1 gap-y-5 md:grid-cols-2 lg:mb-[178px] lg:mt-[120px] lg:grid-cols-4 lg:gap-8">
      {aboutUsCards.map((cardItemData) => {
        return <Card {...cardItemData} key={cardItemData.name} />;
      })}
    </div>
  );
};

export default CardsList;
