import { IDepartment } from "@/app/_core/interfaces/common";
import { db } from "@/app/_lib/firebaseConfig";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";

// Dynamically import components
const DepartmentDetail = dynamic(
  () => import("@/components/Features/DepartmentDetail"),
);

interface DepartmentPageProps {
  params: { id: string };
}
export async function generateStaticParams() {
  const querySnapshot = await getDocs(collection(db, "departments"));
  const departments: IDepartment[] = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<IDepartment, "id">), // Explicitly cast data to Department type, omitting the 'id'
  }));

  return departments.map(({ id }) => ({
    params: { id },
  }));
}

export async function generateMetadata({
  params: { id },
}: DepartmentPageProps): Promise<Metadata> {
  const docRef = doc(db, "departments", id as string);
  const docSnap = await getDoc(docRef);

  const department: IDepartment = {
    id: docSnap.id,
    ...(docSnap.data() as Omit<IDepartment, "id">),
  };
  return {
    title: department.title,
    description: department.subTitle,
    // openGraph: {
    //   images: [
    //     {
    //       url: post.imageUrl
    //     }
    //   ]
    // }
  };
}

export default async function DepartmentPage({
  params: { id },
}: DepartmentPageProps) {
  const docRef = doc(db, "departments", id as string);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    notFound();
  }

  const department: IDepartment = {
    id: docSnap.id,
    ...(docSnap.data() as Omit<IDepartment, "id">),
  };

  return <DepartmentDetail {...department} />;
}
