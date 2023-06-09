// Any files inside the folder pages/api is mapped to /api/* and will be treated as an API endpoint instead of a page.

import { GraphQLClient,gql } from "graphql-request"

const graphqlAPI=process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
const graphcmsToken=process.env.GRAPHCMS_TOKEN;

export default async function comments(req,res){
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${graphcmsToken}`,
    }
  })

  const query = gql`
    mutation createComment($name: String!, $email: String!, $comment: String!, $slug: String!){
      createComment(data: {name: $name, email: $email, comment: $comment, post: {connect: {slug: $slug}}}) {id}
  }`

  try{
    const results= await graphQLClient.request(query,req.body) 
    console.log(results)
    return res.status(200).send(results)
  }catch(err){
    console.log(err)
    res.status(500).send(err)
  }  
}
