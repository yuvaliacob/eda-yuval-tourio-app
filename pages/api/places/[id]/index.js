import Place from "../../../../db/models/Place";
// import { db_comments } from "../../../../lib/db_comments";
import dbConnect from "../../../../db/connect";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;
  const places = await Place.findById(id);
  // const places = await Place.findById(id).populate("reviews");
  console.log(places);
  if (!places) {
    return response.status(404).json({ status: "Not Found" });
  }
  response.status(200).json(places);
}
