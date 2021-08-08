// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { hiit, training } from 'domains/const/menus_const';

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
