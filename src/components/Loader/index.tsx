import { HashLoader } from "react-spinners"

const Loader = ({ loading }: { loading: boolean }) => {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignContent: "center", paddingTop: "20%" }}>
            <HashLoader color="#1a1818" loading={loading} size={150} />
        </div>
    )
}

export default Loader