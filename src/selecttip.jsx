import './App.css'
const percent =[5,10,15,25,50]
// eslint-disable-next-line react/prop-types
const Selectipz= ({setSeltip, tip, custm, setCustm})=>{

    return<>
    <div>
        <p className='seltip'>Select tip %</p>
        <div className='seldiv'>
            {percent.map((tem)=>(
            <button
                key={tem.id}
                className={`selbtn ${
                    tip==tem&& "selectedtip"
                }`}
                onClick={()=>{
                    setSeltip(tem)
                    setCustm('')
                }}>{tem}%</button>

            ))}
            <input
                type="number"
                name=""
                id=""
                value={custm}
                placeholder="Custom"
                className='selinp'
                onChange={(e)=>{ 
                    setSeltip(+e.target.value)
                    setCustm(+e.target.value)
                }}
            />
        </div>
    </div>
    </>

}
export default Selectipz