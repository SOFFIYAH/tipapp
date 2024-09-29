// eslint-disable-next-line react/prop-types
const Number=({children})=>{
return<>
{isNaN(children)||!isFinite(children)? "0.00": children.toFixed(2)}
</>
}
export default Number