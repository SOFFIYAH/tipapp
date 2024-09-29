import prsn from "/prsn.svg"
import './App.css'
// eslint-disable-next-line react/prop-types
const Nopeepz= ({setPeep, peep})=>{
  

    return<>
    <div>
       <div className="inplab">
        <label htmlFor="" className="peeps">Number of People</label>
   
{ peep<=0 &&
    <label htmlFor="" className="caupeps"> Can`t be zero</label>}

           
     </div>
        <div className={`inpbox2 ${peep==0&&"redline"}`}> 
            <img src={prsn} alt="dollar bills" className="imgpep" />
            <input
                type="number"
                name=""
                id=""
                placeholder="0"
                value={peep}
                className="inpep"
                onChange={(e)=>{setPeep(+e.target.value)}}
            />
        </div>
    </div>
    </>

}
export default Nopeepz