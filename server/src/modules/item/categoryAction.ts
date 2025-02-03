// Some data to make the trick

const categories = [
  {
    id: 1,
    name: "Comédie",
  },
  {
    id: 2,
    name: "Science-Fiction",
  },
];

import type { RequestHandler } from "express";
// Declare the actions

const browse: RequestHandler = (req, res) => {
  if (req.query.q != null) {
    const filteredCategories = categories.filter((categorie) =>
      categorie.name.includes(req.query.q as string),
    );

    res.json(filteredCategories);
  } else {
    res.json(categories);
  }
};

// Export them to import them somewhere else
const read: RequestHandler = (req, res) => {
  const parseID = Number.parseInt(req.params.id);
  const categorie = categories.find((c) => c.id === parseID);
  if (categorie != null) {
    res.json(categorie);
  } else {
    res.sendStatus(404);
  }
};

export default { browse, read };
