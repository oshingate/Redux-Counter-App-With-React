import { connect } from 'react-redux';

const StepSec = (props) => {
  return (
    <div className='each-div'>
      <h2 className='text-center step-display'>Step</h2>
      <ul className='flex center'>
        <li>
          <button
            className={props.step === 5 ? 'btn-sec active' : 'btn-sec'}
            onClick={() => {
              props.dispatch({ type: 'changeStep', payload: 5 });
            }}
          >
            5
          </button>
        </li>
        <li>
          <button
            className={props.step === 10 ? 'btn-sec active' : 'btn-sec'}
            onClick={() => {
              props.dispatch({ type: 'changeStep', payload: 10 });
            }}
          >
            10
          </button>
        </li>
        <li>
          <button
            className={props.step === 15 ? 'btn-sec active' : 'btn-sec'}
            onClick={() => {
              props.dispatch({ type: 'changeStep', payload: 15 });
            }}
          >
            15
          </button>
        </li>
      </ul>
    </div>
  );
};

function mapStateToProps(State) {
  return { step: State.step };
}

export default connect(mapStateToProps)(StepSec);
