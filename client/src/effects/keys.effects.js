import { chipsList } from '../models/mockData';

function setKeys(jobData){
  if(jobData.header.title !== ""){
    let regKey = {};
    regKey["title"] = jobData.header.title;
    regKey["position"] = jobData.header.position;
    regKey["location"] = jobData.header.location;
    regKey["experience"] = jobData.requirements.experience;
    regKey["languages"] = jobData.requirements.languages;
    regKey["frameworks"] = jobData.requirements.frameworks;
    regKey["tools"] = jobData.requirements.tools;
    regKey["concepts"] = jobData.requirements.concepts;
    regKey["academicReq"] = jobData.details.academicReq;
    return regKey;
  }
  return {};
  }

  function keysListEffect(event, key, label, registeredKeys, registeredKeysAction) {
    if (chipsList.includes(key)) {
      if (registeredKeys.hasOwnProperty(key)) {
        if (event.target.checked && !registeredKeys[key].includes(label)) {
            registeredKeysAction(key, [...registeredKeys[key], label]);
        } else {
          if (registeredKeys[key].includes(label)) {
            registeredKeys[key] = registeredKeys[key].filter(
              (obj) => obj !== label
            );
            registeredKeysAction(key, registeredKeys[key]);
          }
        }
      } else {
        registeredKeysAction(key, [label]);
      }
    }
  }

  function keysTextEffect(v, data, registeredKeysAction) {
    if (chipsList.includes(v)) {
      registeredKeysAction(v, data[v]);
    }
  }

export { keysListEffect, setKeys, keysTextEffect };
