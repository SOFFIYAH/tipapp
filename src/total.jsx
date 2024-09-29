import Number from "./number"

const Total= ({tots})=>{

    return<>
     <div className='tipt'>
        <span className="tiplab">Total<span className='tipper'>/person</span></span>
        <span className='tally2'>$<span className='tallyprice'><Number>{tots}</Number></span></span>
    </div>
    </>
    

}
export default Total