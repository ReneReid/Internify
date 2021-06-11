import InputFormJobHeader from '../../molecules/InputFormJobHeader';
import LengthSubHeader from '../../molecules/LengthSubHeader';
import PositionSubHeader from '../../molecules/PositionSubHeader';
import Container from '@material-ui/core/Container';
import { ButtonFilled } from '../../atoms/Button';
import Stepper from '../../molecules/Stepper';

import './styles/CreateJobHeader.css';

function CreateJobHeader(props){
    return(
        <div className="Create">
            <Container maxWidth="md" className={"container"}>
                <div className="stepper-row">
                    <Stepper stepNumber={0}/>
                </div>
                <div className="page-row">
                    <h1>1. Create a Job Header</h1>
                </div>
                <div className="input-title-form">
                <div className="form-div">
                    <InputFormJobHeader/>
                </div>
                <div className="page-row subheader-div">
                    <LengthSubHeader/>
                </div>
                <div className="page-row subheader-div">
                    <PositionSubHeader />
                </div>
                <div className="btn-div">
                <ButtonFilled>Continue</ButtonFilled>
                </div>
            </div>
            </Container>
        </div>
    )
}

export default CreateJobHeader;
