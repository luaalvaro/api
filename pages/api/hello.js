export default async function handler(req, res) {

  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  console.log(ip)

  res.status(200).json({ message: 'ok', ip: ip })

}