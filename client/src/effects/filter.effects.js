function parseConcepts(concepts) {
  let parsedConcepts = [];
  for (let i = 0; i < concepts.length; i++) {
    if (concepts[i] === "Object Oriented Programming") {
      parsedConcepts.push("Object-Oriented Programming");
    } else if (concepts[i] === "Asynchronous Programming") {
      parsedConcepts.push("Asynchronous programming");
    } else if (concepts[i] === "RESTify Services") {
      parsedConcepts.push("RESTify services");
    } else if (concepts[i] === "Web APIs") {
      parsedConcepts.push("web APIs");
    } else {
      parsedConcepts.push(concepts[i]);
    }
  }
  return parsedConcepts;
}

function parseExperience(experience) {
  if (experience === "none") {
    return 0;
  } else {
    const expArray = experience.split(" ");
    return parseInt(expArray[1]);
  }
}

function parseCitizenshipReqs(candidates) {
  let reqs = [];
  // anyone case
  if (candidates === "Anyone") {
    reqs = ["Anyone"]; // always return true in checker for this!
    return reqs;
  } else {
    // logic-handling for other cases
    const expArray = candidates.split(" ");
    if (expArray.includes("Citizens") && expArray.includes("PR")) {
      reqs = ["Citizen", "Permanent Residency"];
      return reqs;
    }
    if (expArray.includes("Citizens")) {
      reqs = ["Citizen"];
      return reqs;
    }
    reqs = ["Citizen", "Permanent Residency", "International"];
    return reqs;
  }
}

function parseCoopReqs(coOp) {
  if (coOp === "Yes") {
    return true;
  } else {
    return false;
  }
}

function parseLanguages(languages) {
  let editedLanguages = [];
  for (let i = 0; i < languages.length; i++) {
    if (languages[i] === "C++") {
      editedLanguages.push("Cpp");
      editedLanguages.push("C++");
    } else if (languages[i] === "Cpp") {
      editedLanguages.push("C++");
      editedLanguages.push("Cpp");
    } else {
      editedLanguages.push(languages[i]);
    }
  }
  return editedLanguages;
}

function createJobObject(jobPosting) {
  // parsing functions
  const experience = parseExperience(jobPosting.requirements.experience);
  const candidates = parseCitizenshipReqs(jobPosting.details.candidates);
  const coOp = parseCoopReqs(jobPosting.details.coOp);
  const concepts = parseConcepts(jobPosting.requirements.concepts);
  const languages = parseLanguages(jobPosting.requirements.languages);

  return {
    jobId: jobPosting.jobId,
    experience: experience,
    gpa: jobPosting.requirements.gpa,
    gpaValue: jobPosting.requirements.gpaValue,
    languages: languages,
    frameworks: jobPosting.requirements.frameworks,
    tools: jobPosting.requirements.tools,
    concepts: concepts,
    candidates: candidates,
    academicReq: jobPosting.details.academicReq,
    coOp: coOp,
  };
}

function checkIfEmpty(obj, jobData) {
  const sub = jobData[obj];
  for (var key in sub) {
    const currVal = sub[key];
    if (currVal === "" || currVal.length === 0) {
      return true;
    }
  }
  return false;
}

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export { createJobObject, checkIfEmpty, delay };
