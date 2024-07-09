import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import z from "zod";
import { prisma } from "../lib/prisma";

export function getLink(app: FastifyInstance){
  app.withTypeProvider<ZodTypeProvider>().get('/trips/:tripId/links',{
    schema:{
      params:z.object({
        tripId: z.string().uuid()
      }),
      body: z.object({
        title: z.string().min(4),
        url:  z.string().url(),
      })
    }
  },async (request) => {
    const {tripId} = request.params
    const {title,url} = request.body

    const trip = await prisma.trip.findUnique({
      where: {id:tripId},
      include:{
       links:true
      }
    })

    if(!trip){
      throw new Error('Trip not found')
    }

    

    return {links: trip.links}
  })
}