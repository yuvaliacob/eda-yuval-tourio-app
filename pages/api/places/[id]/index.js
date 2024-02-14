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

  // /api/places/[id].js
  if (request.method === "PATCH") {
    await Place.findByIdAndUpdate(id, {
      $set: request.body,
    });
    // Find the place by its ID and update the content that is part of the request body!
    response.status(200).json({ status: `Place ${id} updated!` });
    // If successful, you'll receive an OK status code.
  }

  if (request.method === "DELETE") {
    await Place.findByIdAndDelete(id);
    // Declare placeToDelete to be the place identified by its id and delete it.
    // This line handles the entire deletion process.
    response.status(200).json({ status: `Place ${id} successfully deleted.` });
  }
}
