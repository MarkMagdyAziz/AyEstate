import {departments} from "@/core/data";
import {type NextRequest} from "next/server";

export async function GET (request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("query");

    // simulate delay
    await new Promise((resolve) => setTimeout(resolve,20000));

    const filteredDepartments = query
        ? departments.filter((department) => department.title.includes(query))
        : departments;
    return Response.json(filteredDepartments);
}
