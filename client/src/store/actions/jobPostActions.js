import axios from "axios";
import qs from "qs";
import { ADD_JOB_HEADER, GET_ALL_JOBS, UPDATE_KEYS, RESET_KEY, GET_USER_JOBS, SET_JOB_TYPE, SET_KEY, RESET_JOB} from "./types/jobPostTypes";
import { v4 as uuidv4 } from "uuid";

export const getJob = (data) => async() => {
  const res = await axios
    .get(`/api/jobs/${data}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.error(err));
  return res;
};

export const getJobs = (user) => (dispatch) => {
  const jobIds = user.jobPostings;
      axios
        .get("/api/jobs/bulk", {
          params: { data: jobIds },
          paramsSerializer: (params) => {
            return qs.stringify(params);
          },
        })
        .then((res) => {
          dispatch({
            type: GET_USER_JOBS,
            payload: res.data[0],
          });
        })
        .catch((err) => console.error(err));
};

export const getAllJobs = () => (dispatch) => {
      axios
        .get("/api/jobs")
        .then((res) => {
          dispatch({
            type: GET_ALL_JOBS,
            payload: res.data,
          });
        })
        .catch((err) => console.error(err));
};

export const addJob = (job) => (dispatch) => {
  axios.post("/api/jobs/", job).then((res) => {
    dispatch({
      type: ADD_JOB_HEADER,
      payload: res.data,
    });
  });
};

export const deleteJob = (jobId) => (dispatch) => {
  axios.delete(`/api/jobs/${jobId}`).then(() => {
  }).catch((err) => console.error(err));
};

export const addJobsData = (data) => (dispatch) => {
  dispatch({
    type: ADD_JOB_HEADER,
    payload: data,
  });
};

export const updateRegKeys = (key, val) => (dispatch) => {
  dispatch({
    type: UPDATE_KEYS,
    payload: {key: key, val: val},
  });
}

export const resetKey = () => (dispatch) => {
  dispatch({
    type: RESET_KEY,
  });
}

export const resetJob = () => (dispatch) => {
  dispatch({
    type: RESET_JOB,
  });
}

export const setKey = (regKeyObj) => (dispatch) => {
  dispatch({
    type: SET_KEY,
    payload: regKeyObj
  });
}

export const setCurrentJob = (type, user_id) => (dispatch) => {
  let result;  
  switch(type) {
      case "frontEnd":
        result = {
          jobId: uuidv4(),
          author: user_id,
          dateCreated: "",
          dateUpdated: "",
          matches: 0,
          students: [],
          notes: {},
          header: {
            position: ["Coop"],
            title: "Frontend Developer",
            company: "Insert Company Name",
            location: "Location",
            startDate: "1999-12-31",
            length: "8 months",
          },
          requirements: {
            languages: ["JavaScript", "HTML", "CSS"],
            frameworks: ["React"],
            tools: ["GitHub"],
            concepts: [
              "Object Oriented Programming",
              "Asynchronous Programming",
              "Recursion",
            ],
            experience: "none",
            gpa: "Optional",
            gpaValue: "70",
          },
          details: {
            academicReq: ["Bachelor's Degree"],
            description: "Insert Description",
            positionType: "",
            pay: "",
            candidates: "",
            coOp: "No",
          },
          contact: {
            name: "Insert Name",
            email: "Insert Email",
            linkedIn: "Insert LinkedIn",
            other: "Insert Other Information",
            applicationSteps: "Insert Application Steps",
          },
        };
        break;
      case "backEnd":
        result = {
          jobId: uuidv4(),
          author: user_id,
          dateCreated: "",
          dateUpdated: "",
          matches: 0,
          students: [],
          notes: {},
          header: {
            position: ["Coop"],
            title: "Backend Developer",
            company: "Insert Company Name",
            location: "Location",
            startDate: "1999-12-31",
            length: "8 months",
          },
          requirements: {
            languages: ["Java", "C++", "C"],
            frameworks: ["MongoDB"],
            tools: ["GitHub"],
            concepts: [
              "Object Oriented Programming",
              "Asynchronous Programming",
              "Recursion",
            ],
            experience: "none",
            gpa: "Optional",
            gpaValue: "70",
          },
          details: {
            academicReq: ["Bachelor's Degree"],
            description: "Insert Description",
            positionType: "",
            pay: "",
            candidates: "",
            coOp: "No",
          },
          contact: {
            name: "Insert Name",
            email: "Insert Email",
            linkedIn: "Insert LinkedIn",
            other: "Insert Other Information",
            applicationSteps: "Insert Application Steps",
          },
        };
        break;
      case "dataScience":
        result = {
          jobId: uuidv4(),
          author: user_id,
          dateCreated: "",
          dateUpdated: "",
          matches: 0,
          students: [],
          notes: {},
          header: {
            position: ["Coop"],
            title: "Data Scientist",
            company: "Insert Company Name",
            location: "Location",
            startDate: "1999-12-31",
            length: "8 months",
          },
          requirements: {
            languages: ["Python", "C++", "C", "SQL"],
            frameworks: ["MongoDB"],
            tools: ["GitHub"],
            concepts: [
              "Object Oriented Programming",
              "Asynchronous Programming",
              "Recursion",
            ],
            experience: "none",
            gpa: "Optional",
            gpaValue: "70",
          },
          details: {
            academicReq: ["Bachelor's Degree"],
            description: "Insert Description",
            positionType: "",
            pay: "",
            candidates: "",
            coOp: "No",
          },
          contact: {
            name: "Insert Name",
            email: "Insert Email",
            linkedIn: "Insert LinkedIn",
            other: "Insert Other Information",
            applicationSteps: "Insert Application Steps",
          },
        };
        break;
      case "fullStack":
        result = {
          jobId: uuidv4(),
          author: user_id,
          dateCreated: "",
          dateUpdated: "",
          matches: 0,
          students: [],
          notes: {},
          header: {
            position: ["Coop"],
            title: "Full Stack Developer",
            company: "Insert Company Name",
            location: "Location",
            startDate: "1999-12-31",
            length: "8 months",
          },
          requirements: {
            languages: ["TypeScript", "JavaScript", "HTML", "CSS"],
            frameworks: ["React", "Angular", "MongoDB"],
            tools: ["GitHub"],
            concepts: [
              "Object Oriented Programming",
              "Asynchronous Programming",
              "Recursion",
            ],
            experience: "none",
            gpa: "Optional",
            gpaValue: "70",
          },
          details: {
            academicReq: ["Bachelor's Degree"],
            description: "Insert Description",
            positionType: "",
            pay: "",
            candidates: "",
            coOp: "No",
          },
          contact: {
            name: "Insert Name",
            email: "Insert Email",
            linkedIn: "Insert LinkedIn",
            other: "Insert Other Information",
            applicationSteps: "Insert Application Steps",
          },
        };
        break;
      default:
        result = {
          jobId: uuidv4(),
          author: user_id,
          dateCreated: "",
          dateUpdated: "",
          matches: 0,
          students: [],
          notes: {},
          header: {
            title: "",
            company: "",
            location: "",
            startDate: "",
            position: [],
            length: "",
          },
          requirements: {
            experience: "",
            gpa: "",
            gpaValue: "",
            languages: [],
            frameworks: [],
            tools: [],
            concepts: [],
          },
          details: {
            description: "",
            positionType: "",
            pay: "",
            candidates: "",
            academicReq: [],
            coOp: "",
          },
          contact: {
            name: "",
            email: "",
            linkedIn: "",
            other: "",
            applicationSteps: "",
          },
        };
        break;
      }
  dispatch({
    type: SET_JOB_TYPE,
    payload: result
  });
}

