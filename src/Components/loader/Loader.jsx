import { Oval } from 'react-loader-spinner'

const Loader = () => {
  return (
    <div role="status" className=" absolute">
      <Oval
        visible={true}
        height="80"
        width="80"
        color="#000000"
        background-color
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default Loader;