// @ts-ignore
import HTTPMethods from "../../constants/HTTPMethods";

const FUNCTION_URL =
  "https://4r7o6wh5wf2ch36egza7kj2mym0dcxew.lambda-url.us-east-1.on.aws/";

interface requestServiceProps {
  url: string;
  method: string;
}

export class SpotifyRequestServices {
  static async sendRequest({ url, method }: requestServiceProps) {
    // let startTime = new Date();
    // const requestHeaders = new Headers();
    // headers?.forEach(({ key, value }) => {
    //   if (key) {
    //     requestHeaders.append(key, value);
    //   }
    // });
    // const headersObject = {};
    // [...requestHeaders.entries()].forEach(([key, value]) => {
    //   headersObject[key] = value;
    // });

    const options = {
      method: HTTPMethods.POST,
      body: JSON.stringify({
        url,
        method,
        // headers: headersObject,
        // body,
      }),
    };

    const proxyResponse = await fetch(FUNCTION_URL, options);
    const unwrappedResponse = await proxyResponse.json();
    return {
      body: unwrappedResponse.body,
      // statusCode: unwrappedResponse.statusCode,
      headers: unwrappedResponse.headers,
      // requestTime: new Date() - startTime,
    };
  }
}
