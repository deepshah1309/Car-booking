import ScreenOne from "../ScreenOne/ScreenOne";
import ScreenTwo from "../ScreenTwo/ScreenTwo";
import ScreenThree from "../ScreenThree/ScreenThree";

const Screen=({track,onNext,sendDatatoparent,object,setObject,onPrevious,dataobject,data})=>{
    const [data,setData]=useState(data);
    const setDataScreen1=(datas)=>{
            setDatatoparent(datas);
    }
    let renderer;
    if(track===1){
            renderer=<ScreenOne sendDatatoscreen={setDataScreen1} onButtonClick={onNext} dataobject={dataobject} datas={data}/>;

    }
    else if(track===2){
        renderer=<ScreenTwo onButtonClick={onNext} dataobject={dataobject} datas={data}/>
    }
    else if(track===3){
        renderer=<ScreenThree />
    }
 return (

     <div>
 
         <br></br>
         {renderer}   
     </div>
 )   
}
export default Screen;