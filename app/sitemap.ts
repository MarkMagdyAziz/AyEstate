import {IDepartment} from "@/core/interfaces/common";
import {MetadataRoute} from "next";

export default async function sitemap (): Promise<MetadataRoute.Sitemap> {

    const departmentsResponse = await fetch(`${ process.env.NEXT_PUBLIC_BASE_URL }/departments`);
    const departments: IDepartment[] = await departmentsResponse.json();

    const departmentsEntries: MetadataRoute.Sitemap = departments.map(({title}) => ({
        url: `${ process.env.NEXT_PUBLIC_BASE_URL }/departments/${ title }`,
        lastModified: new Date(),
        // changeFrequency:,
        // priority:
    }));

    return [
        ...departmentsEntries,
    ];
}
