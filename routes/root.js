'use strict'
//we use  route paramter here to GET data from bocycle service using ID
//GET request isdefined

//import got module
//it will be used as the route handler
const got = require('got')


//we set a default port and assigned to a variable
//BICYCLE_SERVICE_PORT - it is an env variablw
//BICYCLE_SERVICE_PORT - this cab be iveerriden on setting the environmnt variable

const { BICYCLE_SERVICE_PORT = 4000} = process.env

const bicycle_url = `http://localhost:${BICYCLE_SERVICE_PORT}`

module.export  = async function (fastify, opts) {
  
  fastify.get("/:id" , async ( request, reply) => {

    const {id } = request.params
    const bicycle =await got (`${bicycle_url}/${id}`).json()

    return bicycle
  })
}
