import React from 'react'
import zxcvbn from 'zxcvbn';

function PasswordStrong({password}) {
    const testResult = zxcvbn(password);
    const num = testResult.score * 100/4;

    const passwordChangeColor = () => ({
        width:`${num}%`,
        background : passwordColor(),
    });
    const passwordColor = () => { 
        switch(testResult.score){
            case 0 :
                return "#828282";
            case 1 : 
                return "#EA1111";
            case 2:
                return "#FFAD00";
            case 3:
                return "#9bc158";
            case 4:
                return "#00b500";
            default :
            "none";
            
        }
    }
    const passwordLabel = () => {
        switch(testResult.score){
            case 0 :
                return "";
            case 1 : 
            return "رمز باید حداقل 8 کارکتر و ترکیبی از حروف و اعداد باشد";
            case 2:
                return "رمز باید حداقل 8 کارکتر و ترکیبی از حروف و اعداد باشد";
            case 3:
                return "رمز باید حداقل 8 کارکتر و ترکیبی از حروف و اعداد باشد";
            case 4:
                return "رمز قدرتمند";
            default :
            "";
            
        }
    }
  return (
    <div className='mx-auto w-[90%] mt-1'>
        <div className="w-full mx-auto bg-gray-200 rounded-full h-[1px]">
            <div className=" h-[3px] rounded-full" style={passwordChangeColor()}></div>
        </div>
        <p className='fontReg text-end mt-1 text-blueMain text-[11.5px]'>{passwordLabel()}</p>
    </div>
  )
}

export default PasswordStrong