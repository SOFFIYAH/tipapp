import Dollar from "/dolla.svg"
import './App.css'
// eslint-disable-next-line react/prop-types
const Billz= ({setBill,bill})=>{

    return<>
    <div className="do1">
        <label htmlFor="" className="bill">Bill</label>
        <div className="inpbox1">
            <img src={Dollar} alt="dollar bills" className="imgbill" />
            <input
                type="number"
                name=""
                id=""

                value={bill}
                placeholder="0"
                className="inbill"
                onChange={(e)=>{setBill(+e.target.value)}}/>
        </div>
    </div>
    </>

}
export default Billz