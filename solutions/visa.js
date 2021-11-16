/*const checkVisa = (visaNum) => {

    //const visaVal = {
        const pattern = {
            visa: /^(\d{4} ){3}\d{4}$/
        }}
        const validate = (visaNum, visa) => {
            return visaNum.match(this.pattern[visa]) ? true : false;
        }
    //}
;*/

const checkVisa = (visaNum) => {    
        return visaNum.match(/^4\d{15}$/) ? true : false;
};

export default checkVisa;