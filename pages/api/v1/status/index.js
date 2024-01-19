function status(request, response) {
    response.setHeader('Content-Type', 'application/xml');

    response
    .status(400)
    .json({ "response" : "deu certo ?" })
}

export default status;
