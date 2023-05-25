import './Form.css'
import Button from '../Button/Button'


function Form() {
    
    setTimeout(console.log('hello'), 1000)

    return (

        <form >
{/* -----Bloco Superior----- */}
            <div className='top'>

                <div className='ExternContainerInput'>
                    <div className="ContainerInput">
                        <div className="Image">🔍</div>
                        <input
                            
                            type="text"
                             />


                    </div>

                </div>

                <div className='ExternContainerToken'>
                    <div className="ContainerInputToken">
                        <div className="Image">🔍</div>
                        <input type="text"  />
                    </div>
                </div>

                <div className='containerConsult'>
                    <Button  />
                </div>
            </div>
{/* -------BLoco Inferior------- */}
            <div className="FormResult">
                <div className='ExternContainerR'>
                    <div className="mid2">
                    </div>
                </div>
            </div>

        </form>
    )

}

export default Form;