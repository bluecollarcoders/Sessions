import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3000";

/*  API class. 

Static class tying together methods used to get/send to th API*/

class SessionApi {
  // the token for interactaction with the API will be stored here
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${SessionApi.token}` };
    const params = method === "get" ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (e) {
      console.error("API Error:", e.response);
      let message = e.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  //   Indiviual API routes

  /* Get the current user. */

  static async getCurrentUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  /* Post projects */
  static async postProjects(id) {
    await this.request(`projects/${id}`, {}, "post");
  }

  /* Get all projects */
  static async getProjects(title) {
    let res = await this.request("projects", { title });
    return res.projects;
  }

  /* Submit proposal */
  static async submitProposal(id, idProposal) {
    await this.request(`projects/${id}/proposal/${idProposal}`, {}, "post");
  }

  /* Get token for login from username, and password */

  static async login(data) {
    let res = await this.request(`auth/login`, data, "post");
    return res.token;
  }

  /* Signup for Site */

  static async signup(data) {
    let res = await this.request(`auth/register`, data, "post");
    return res.token;
  }

  /* Save user profile page */

  static async saveUserProfile(username, data) {
    let res = await this.request(`users/${username}`, data, "patch");
    return res.user;
  }
}

export default SessionApi;
