import './loader.scss';

const Loader = () => {
  return (
    <>
      <div data-testid="spinner-test" className="loader dots">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default Loader;
