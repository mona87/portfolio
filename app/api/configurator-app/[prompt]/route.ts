import {Configuration, OpenAIApi} from 'openai';
import type {NextApiRequest, NextApiResponse,} from 'next';

// export const GET = async(req: NextApiRequest, res:NextApiResponse ) => {
//     return new Response(JSON.stringify({test: 'test'}))
// }

export const POST = async(err:any, req:any ) => {
    try {
        const config = new Configuration({
            organization: process.env.OPENAI_ORG_ID,
            apiKey: process.env.OPENAI_API_KEY
        })
        const openApi = new OpenAIApi(config);


  
        const {prompt} = req.params;
        // const completion = await openApi.createCompletion({
        //     model: 'text-davinci-003',
        //     prompt: 'what is 2 + 2?'
        // })
          const completion = await openApi.createImage({
            prompt,
            n: 1,
            size: '512x512',
            response_format: 'b64_json'
        })
        console.log('completion', completion)
        const image = completion.data.data[0].b64_json;
        return new Response(JSON.stringify(image), { status: 200 })

    }catch(error){
        console.log('err',error)
        return new Response(JSON.stringify('Something went wrong'), { status: 500 })
    }
}