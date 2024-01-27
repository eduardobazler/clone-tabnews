function status(request, response) {
  console.log('oi')
    response
    .status(200)
    .json({ "response" : "deu certo ?" })
}

export default status;
