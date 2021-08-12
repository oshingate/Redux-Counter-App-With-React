import { connect } from 'react-redux';

const MaxSec = (props) => {
  return (
    <div className='each-div'>
      <h2 className='text-center max-display'>Max</h2>
      <ul className='flex center'>
        <li>
          <button
            className={props.max === 50 ? 'btn-ter active' : 'btn-ter'}
            onClick={() => {
              props.dispatch({ type: 'updateMax', payload: 50 });
            }}
          >
            50
          </button>
        </li>
        <li>
          <button
            className={props.max === 100 ? 'btn-ter active' : 'btn-ter'}
            onClick={() => {
              props.dispatch({ type: 'updateMax', payload: 100 });
            }}
          >
            100
          </button>
        </li>
        <li>
          <button
            className={props.max === 150 ? 'btn-ter active' : 'btn-ter'}
            onClick={() => {
              props.dispatch({ type: 'updateMax', payload: 150 });
            }}
          >
            150
          </button>
        </li>
      </ul>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    max: state.max,
  };
}

export default connect(mapStateToProps)(MaxSec);
