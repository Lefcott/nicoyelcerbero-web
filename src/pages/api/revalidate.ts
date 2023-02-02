import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { paths } = req.body;
  if (req.query.token !== process.env.REVALIDATION_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }

  if (!paths?.length) {
    return res
      .status(400)
      .json({ message: "You must provide at least 1 path to revalidate" });
  }

  try {
    for (let i = 0; i < req.body.paths.length; i += 1) {
      await res.revalidate(req.body.paths[i]);
    }

    return res.json({ revalidated: true });
  } catch (error: any) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).json({
      message: "Error revalidating",
      error,
      errorMessage: error.message,
      errorCode: error.code,
    });
  }
}
