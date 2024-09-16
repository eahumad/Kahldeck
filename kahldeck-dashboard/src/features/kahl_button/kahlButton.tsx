import { Button as AButton } from "antd"
import "./kahlButton.css"
import { cyan, red, blue } from "@ant-design/colors"
import { Button } from "../../domain/Button"
import { useAppDispatch } from "../../stores/hooks";
import { selectButton } from "../../stores/layout_slice";

const KahlButton = (props: {button: Button, isBackOffice?: boolean}) => {

  const isBackOffice = props.isBackOffice? true : false
  const dispatch = useAppDispatch()

  const colors = [
    { primaryColor: cyan[6], icon: {} },
    { primaryColor: red[6], icon: {} },
    { primaryColor: blue[6], icon: {} },
    { primaryColor: cyan[8], icon: {} },
    { primaryColor: red[8], icon: {} },
    { primaryColor: blue[8], icon: {} },
    { primaryColor: cyan[2], icon: {} },
    { primaryColor: red[2], icon: {} },
    { primaryColor: blue[2], icon: {} },
  ]

  const getRandomColor = () => {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
  }


  const color = getRandomColor()

  const onClick = () => {

    if( isBackOffice ) {
      // select button on layout view
      dispatch(selectButton(props.button))
      
    } else {
      // call macro function
      console.log(props.button)
    }
  }


  return (
    <AButton className="kahl-button" type="primary" styles={color} onClick={onClick}>
      <span className="kahl-button-text">{props.button.name}</span>
    </AButton>
  )
}

export default KahlButton