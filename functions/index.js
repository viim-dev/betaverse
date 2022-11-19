const LINK_TO = "https://viim.framer.website/"
export async function onRequestGet(context) {
    
    // Contents of context object
    const {
      request, // same as existing Worker API
      env, // same as existing Worker API
      params, // if filename includes [id] or [[path]]
      waitUntil, // same as ctx.waitUntil in existing Worker API
      next, // used for middleware or to fetch assets
      data, // arbitrary space for passing data between middlewares
    } = context;
    const url = params.path?.join('/') ?? ''
    // console.log(url)
    return handleRequest(url);
    
    //try asset cdn
    
    // return env.ASSETS.fetch(request);
    // return new Response();
  }

  async function handleRequest(district) {
    const destinationURL = LINK_TO;
    const statusCode = 301;
    
    try{
        return Response.redirect(destinationURL, statusCode);
    } catch(err){
      console.log(err)
    }
    
  }
