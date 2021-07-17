import React from 'react';
import { ChipBasic } from "../atoms/index";

const RegisteredKeys = (props) => {
    const data = props.keysData;

    return (
        <div className="keys_container">
            {data.map((x, i) => {
            return (
              <ChipBasic label={x} key={i}/>
            );
          })}
        </div>
    )
}

export default RegisteredKeys;
