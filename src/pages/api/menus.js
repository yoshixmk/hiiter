// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { hiit, training } from './_menus_const';

const menuNames = (req, res) => {
  res.statusCode = 200;
  const q = req.query['q'];
  if (q == 'training') {
    res.json(training);
    return;
  }
  res.json(hiit);
};
export default menuNames;
