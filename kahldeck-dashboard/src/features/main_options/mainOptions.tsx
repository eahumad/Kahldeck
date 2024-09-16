import { Button } from "../../domain/Button"
import { useAppSelector } from "../../stores/hooks"
import ButtonOptions from "../button_options/buttonOptions"
import LayoutOptions from "../layout_options/layoutOptions"
import "./mainOptions.css"

const MainOptions = () => {

  const selectedButton: Button = useAppSelector(state => state.layoutReduce.selectedButton)


  return (
    <>
      <aside>
        {selectedButton ?
          <ButtonOptions />
          :
          <LayoutOptions />
        }
      </aside>
    </>
  )
}

export default MainOptions