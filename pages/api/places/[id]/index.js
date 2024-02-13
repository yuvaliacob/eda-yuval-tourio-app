import dbConnect from "../../../../db/connect";
import Place from "../../../../db/models/Place";
// import { db_comments } from "../../../../lib/db_comments";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const place = await Place.findById(id);

    console.log(place);

    if (!place) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json({ place: place, comments: [] });
  }
}
