import axios from "axios";

const config = {
  baseUrl: "http://devapi.emotion.co.kr/api/v1/",
};

function fetchMagazine(page, size) {
  return axios.get(`${config.baseUrl}magazine?page=${page}&size=${size}`);
}

function fetchWork(page, size) {
  return axios.get(`${config.baseUrl}works/?page=${page}&size=${size}`);
}

function fetchWorkList(id) {
  return axios.get(`${config.baseUrl}works/${id}`);
}

function fetchCareer() {
  return axios.get(`${config.baseUrl}career`);
}

export { fetchMagazine, fetchWork, fetchWorkList, fetchCareer };
