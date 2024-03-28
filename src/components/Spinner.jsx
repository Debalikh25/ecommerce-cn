
import GridLoader from "react-spinners/GridLoader";

const Spinner = (props)=>{
   
    const loading = props.loading;

    return   <GridLoader color="#36d7b7" loading={loading} cssOverride={{
        display: "block",
        margin: "0 auto",
        borderColor: "red",
        marginTop : "150px",
      }} />
}

export default Spinner;