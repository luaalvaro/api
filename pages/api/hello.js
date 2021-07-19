export default async function handler(req, res) {

  console.log(req.connection.remoteAddress)

  res.status(200).json({ message: 'ok', ip: req.connection.remoteAddress })

}