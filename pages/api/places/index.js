import dbConnect from "../../../db/connect";
import Place from "../../../db/models/Place";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    try {
      const places = await Place.find();

      response.status(200).json(places);
    } catch (error) {
      console.error(error);
    }
  }
}
