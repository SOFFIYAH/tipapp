// eslint-disable-next-line react/prop-types
const Resetn= ({onReset,peep,bill})=>{

    return<>
    <input
        type="button"
        value="RESET"
        className={`reset ${
            (peep>0||bill>0)? "postreset":"reset"
        }`}
        onClick={onReset}
        />
    </>

}
export default Resetn