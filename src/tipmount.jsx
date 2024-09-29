import './App.css'
import Number from './number'
const Tipmount= ({tipmnt})=>{

    return<>
    <div className='tipt'>
        <span className="tiplab">Tip Amount<span className='tipper'>/person</span></span>
        <span className='tally'>$<span className='tallyprice'><Number>{tipmnt}</Number></span></span>
    </div>
    </>

}
export default Tipmount