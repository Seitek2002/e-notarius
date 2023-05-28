import axios from 'axios'

const API_URL = 'https://goverp.sanarip.org/axelor-erp/login.jsp';

const API_URL_ = 'https://goverp.sanarip.org/axelor-erp/ws/rest/com.axelor.auth.db.User/search';

const postData = {
  "fields": ["name", "group"],
  "data": {
    "criteria": [{
      "fieldName": "name",
      "operator": "like",
      "value": "%front"
    }]
  }
};

class AuthService {

  login(user) {
    return axios
      .post(API_URL, {
        username: user.username,
        password: user.password
      }, {headers: {
          'Content-Type': 'application/json'
        }})
      .then(response => {
        return response.data;
      });
  }
  getRole(user) {

    postData.data.criteria.value = '%' + user.username;
    return axios
      .post(API_URL_ , postData,{ withCredentials: true,  headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        }},
      )
      .then(response => {
        return response.data;
      });
  }
}
export default new AuthService();
