const { events } = require('./data.json');

export default function handler(req, res) {

    const evt = events.filter(ev => ev.slug === req.query.slug);
    console.log(evt);

  if (req.method === 'GET') {
    res.status(200).json(evt)
  } else {

    res.setHeader('Allow', ['GET'])
    res.status(405).josn({message: `Method ${req.method} is not allowed`})
  }
}
