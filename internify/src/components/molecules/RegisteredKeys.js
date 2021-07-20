import React from 'react';
import { ChipBasic } from "../atoms/index";
import { connect } from "react-redux";

const RegisteredKeys = (props) => {
    const registeredKeys = props.jobs.registeredKeys;

    return (
        <div className="keys_container">
            {Object.keys(registeredKeys).map((x, i) => {
              const current = registeredKeys[x];
              if(Array.isArray(current)){
                const result = current.map((key) => {
                  return (
                    <ChipBasic label={key}/>
                  )
                });
                return result;
              } else {
                return (
                  <ChipBasic label={registeredKeys[x]} key={i}/>
                );
              }
          })}
        </div>
    );

}


function mapStateToProps(state) {
  return {
    jobs: state.jobs,
  };
}

export default connect(mapStateToProps)(RegisteredKeys);

