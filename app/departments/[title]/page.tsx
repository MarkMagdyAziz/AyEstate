import { IDepartment } from "@/core/interfaces/common";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface DepartmentPageProps {
  params: { title: string };
}
export async function generateStaticParams() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/departments`,
  );
  const departments: IDepartment[] = await response.json();

  return departments.map(({ title }) => ({
    params: { title },
  }));
}

export async function generateMetadata({
  params: { title },
}: DepartmentPageProps): Promise<Metadata> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/departments/${title}`,
  );
  const department: IDepartment = await response.json();

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
  params: { title },
}: DepartmentPageProps) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/departments/${title}`,
  );

  if (response.status === 404) {
    notFound();
  }

  if (!response.ok) {
    throw new Error("Failed to fetch department");
  }

  const { title: departmentTitle, subTitle: departmentSubtitle }: IDepartment =
    await response.json();

  return (
    <>
      <h1> {departmentTitle} </h1>
      <p> {departmentSubtitle} </p>
    </>
  );
}
