import '../style/alertStyle.css';

export default function Alerts(props) {

  return (
    <div>
      <div className="container1">
        <div className="outer-box" id="alert-box" style= {{backgroundColor : props.outColor}}>
            <div className="inner-box" style={{backgroundColor : props.inColor}}>

            </div>

            <div className="content" >
                {props.msg}
            </div>
        </div>
      </div>
    </div>
  )
}
