import {departments} from "@/core/data";

export async function GET (
    _request: Request,
    {params}: {params: {title: string}}
) {
    new Promise(resolve => setTimeout(resolve,5000));

    const department = departments.find(
        (d) => d.title === params.title
    );
    return Response.json(department);
}