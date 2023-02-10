const FUNCTION_URL =
  "https://4r7o6wh5wf2ch36egza7kj2mym0dcxew.lambda-url.us-east-1.on.aws/";

export class SpotifyRequestServices {
  static async sendRequest() {
    const proxyResponse = await fetch(FUNCTION_URL);
    const unwrappedResponse = await proxyResponse.json();
    return {
      response: unwrappedResponse,
    };
  }
}
