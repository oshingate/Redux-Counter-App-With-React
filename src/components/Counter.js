import { connect } from 'react-redux';

const Counter = (props) => {
  return (
    <section class='main-sec sec-padding'>
      <h1 class='text-center' id='counter'>
        {props.count}
      </h1>
    </section>
  );
};

function mapStateToProps(state) {
  return {
    count: state.count,
  };
}

export default connect(mapStateToProps)(Counter);
