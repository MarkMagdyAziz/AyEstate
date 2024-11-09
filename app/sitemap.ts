import { IDepartment } from "@/app/_core/interfaces/common";
import { collection, getDocs } from "firebase/firestore";
import { MetadataRoute } from "next";
import { db } from "./_lib/firebaseConfig";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const querySnapshot = await getDocs(collection(db, "departments"));
  const departments: IDepartment[] = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<IDepartment, "id">), // Explicitly cast data to Department type, omitting the 'id'
  }));

  const departmentsEntries: MetadataRoute.Sitemap = departments.map(
    ({ id }) => ({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/departments/${id}`,
      lastModified: new Date(),
      // changeFrequency:,
      // priority:
    }),
  );

  return [...departmentsEntries];
}
