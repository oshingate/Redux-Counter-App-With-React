import ButtonSec from './ButtonSec';
import Counter from './Counter';
import MaxSec from './MaxSec';
import StepSec from './StepSec';

const Main = () => {
  return (
    <main>
      <Counter />
      {/* <section class='step-sec'>
        <div class='flex center'>
          <StepSec />

          <MaxSec />
        </div>
      </section> */}
      <ButtonSec />
    </main>
  );
};

export default Main;
