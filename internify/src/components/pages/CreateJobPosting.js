import InputFormJobHeader from '../molecules/InputFormJobHeader';
import LengthSubHeader from '../molecules/LengthSubHeader';
import PositionSubHeader from '../molecules/PositionSubHeader';
import Container from '@material-ui/core/Container';
import ContinueBtn from '../atoms/ContinueBtn';

import './styles/CreateJobPosting.css';

function CreateJobPosting(props){
    return(
        <div className="CreateJobPosting">
            <Container maxWidth="md" className={"container"}>
                <div className="page-row">
                    <h4 className="progess-bar">Progess Bar Here...</h4>
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
                <div className="page-row btn-div">
                <ContinueBtn />
                </div>
            </div>
            </Container>
        </div>
    )
}

export default CreateJobPosting;