import { connect } from 'react-redux';

const ButtonSec = (props) => {
  return (
    <section className='sec-padding button-sec'>
      <div>
        <ul className='flex center'>
          <li>
            <button
              className='btn-pri'
              id='inc'
              onClick={() => {
                props.dispatch({ type: 'increment' });
              }}
            >
              Increment
            </button>
          </li>
          <li>
            <button
              className='btn-pri'
              id='dec'
              onClick={() => {
                props.dispatch({ type: 'decrement' });
              }}
            >
              Decrement
            </button>
          </li>
          <li>
            <button
              className='btn-pri'
              id='reset'
              onClick={() => {
                props.dispatch({ type: 'reset' });
              }}
            >
              Reset
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default connect()(ButtonSec);
