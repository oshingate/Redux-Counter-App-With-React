import { connect } from 'react-redux';

const ButtonSec = (props) => {
  return (
    <section class='sec-padding button-sec'>
      <div>
        <ul class='flex center'>
          <li>
            <button
              class='btn-pri'
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
              class='btn-pri'
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
              class='btn-pri'
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
