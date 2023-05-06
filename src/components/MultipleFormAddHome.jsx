import axios from 'axios';
import React,{useState ,useEffect} from 'react'
import './MultipleFormAddHome.css'
import formArrow from './../assets/img/formArrow.png'
import AssignmentDouc from './AssignmentDouc';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UploadFilde from './UploadFilde';
import MapLeaf from './MapLeaf';
import { Marker } from 'react-leaflet';
import { MapContainer } from "react-leaflet";
import addpluse from './../assets/img/addpluse.png'
import { TileLayer } from "react-leaflet";
const navigatorData = [{
  num:1,
  title:"مشخصات ملک"
},{
  num:2,
  title:"اطلاعات مالکیتی",
},{
  num:3,
  title:"موقعیت مکانی",
},{
  num:4,
  title:"شرکا و وکلا"
}]
function MultipleFormAddHome() {

  const [smap, setSmap] = useState(false);
  const showMap=()=>{
    setSmap(!smap);
  }


const [state,setState] = useState([]);
  useEffect(()=>{
    axios.get("https://iran-locations-api.vercel.app/api/v1/states")
    .then((response)=>{
      setState(response.data);
    })
  },[])
  const [latLng, setLatLng] = useState({ lat: 51.505, lng: -0.09 });
  const [mapRef, setMapRef] = useState(null);

  const [adding,setAdding] = useState(false);

  const handleLatChange = (event) => {
    setLatLng({ ...latLng, lat: event.target.value });
    if (mapRef) {
      mapRef.flyTo([event.target.value, latLng.lng], mapRef.getZoom());
    }
  };

  const handleLngChange = (event) => {
    setLatLng({ ...latLng, lng: event.target.value });
    if (mapRef) {
      mapRef.flyTo([latLng.lat, event.target.value], mapRef.getZoom());
    }
  };

  const next = (e) => {
    e.preventDefault();
    if(formNo===1 && empty.name && empty.city && empty.part && empty.village && empty.postcode && empty.state && empty.addres  && empty.wide ){
      setFormNo(formNo + 1) 
    }else{
      toast.error("لطفا تمام فیلد ها را وارد کنید ")
    }
  };
  const next2 = (e) => {
    e.preventDefault();
    if(empty.RegistrationDepartment && empty.Divisible && empty.piece && empty.main && empty.sub){
      setFormNo(formNo + 1)
    }else{
      toast.error("لطفا تمام فیلد ها را وارد کنید ")
    }
  };
  const next3 = (e) => {
    e.preventDefault();
    if(empty.Assignor && empty.Participant){
      setFormNo(formNo + 1)
    }else{
      toast.error("لطفا تمام فیلد ها را وارد کنید ")
    }
  };
  const prev = (e) => {
    e.preventDefault();
    setFormNo(formNo - 1)
  }
  const inputHandle = (e)=> {
    setEmpty({
      ...empty,
      [e.target.name] : e.target.value
    })
  };
  const formArray = [1,2,3,4];
  const [formNo,setFormNo]=useState(formArray[0]);
  const [empty , setEmpty ] = useState ({
    name : "",
    city: " ",
    part : "",
    village : " ",
    state :"",
    addres:"",
    wide : " ",
    postcode : "",
    RegistrationDepartment : "",
    Divisible : "",
    piece : "",
    main : "",
    sub : "",
    Assignor:"",
    Participant : "",
  })
const [ending,setEnding]= useState("")
const [ending2,setEnding2]= useState("")
const [ending3,setEnding3]= useState("")
  const next4 = () => {
    setFormNo(formNo + 1)
  }
const [selectType,setSelectType] = useState();


  
  return (
    <div className='bg-white rounded-lg text-end lg:w-[95%] w-full mx-auto py-4'>
          <ToastContainer/>

      <h2 className='fontBold text-[22px] mx-4 my-2'>افزودن ملک جدید</h2>
      <div className='mx-auto flex flex-row-reverse gap-7 justify-center'>
        {navigatorData.map((item,arr)=>{
          return(
          <div className='flex flex-col items-center my-4 mb-6'>
              <div className={` text-blueMain ${formNo - 1 === arr || formNo - 1 === arr + 1 || formNo === formArray.length ? 'bg-blueMain text-gray-200':'bg-gray-200' } fontBold rounded-full lg:h-[35px] lg:w-[35px] h-7 w-7 flex justify-center items-center`}>{item.num}</div>
              <div className=' flex items-center gap-1'>

                {arr !== formArray.length - 1 && <img className='max-w-full w-6 h-2' src={formArrow}/>  }
                <span className='fontBold lg:text-[15px] text-[10px]'>{item.title}</span>
                
              </div>
          </div>
          )
        })}
      </div>
      {formNo===1 && <div className='flex flex-col'>
        
        <form>
          <div className='flex flex-col xl:gap-7 gap-10' >

            <div className='flex xl:flex-row-reverse flex-col justify-between gap-7  xl:gap-3 mx-auto xl:mx-5'>
              <div className='flex items-center relative'>
                <input onChange={inputHandle}  type='text' name='name' id='name'  className=' rounded-xl xl:w-[30rem] w-[310px] mx-auto'/>
                <label htmlFor='name' className='absolute fontBold top-[-15px] left-[204px] xl:left-[355px] bg-white px-2 py-1'> *عنوان ملک</label>
              </div>
              <div className='flex items-center relative'>            
                <select onChange={inputHandle} name='state' id='state'  className='rounded-xl xl:w-[30rem] w-[310px] mx-auto'>
                  <option></option>
                  {state.map((item)=>(
                    <option className='fontBold text-end' value={item.name}>{item.name}</option>
                  ))}
                </select>
                <label htmlFor='state' className='absolute top-[-15px] left-[204px] xl:left-[380px] fontBold bg-white px-2 py-1'>*استان</label>
              </div>
            </div>

            <div className='flex xl:flex-row-reverse flex-col justify-between  gap-7 xl:gap-3 mx-auto xl:mx-5'>
            <div className='flex items-center relative'>            
                <select onChange={inputHandle} name='part' id='part'  className='rounded-xl xl:w-[30rem] w-[310px] mx-auto'>
                  <option></option>
                  {state.map((item)=>(
                    <option className='fontBold text-end' value={item.center}>{item.center}</option>
                  ))}
                </select>
                <label htmlFor='part' className='absolute top-[-15px] left-[204px] xl:left-[380px] fontBold bg-white px-2 py-1'>*بخش</label>
              </div>
              <div className='flex items-center relative'>            
                <select onChange={inputHandle} name='city' id='city'  className='rounded-xl xl:w-[30rem] w-[310px] mx-auto'>
                  <option></option>
                  {state.map((item)=>(
                    <option className='fontBold text-end' value={item.center}>{item.center}</option>
                  ))}
                </select>
                <label htmlFor='city' className='absolute top-[-15px] left-[204px] xl:left-[380px] fontBold bg-white px-2 py-1'>* شهر</label>
              </div>
            </div>

            <div className='flex xl:flex-row-reverse flex-col justify-between gap-7  xl:gap-3 mx-auto xl:mx-5'>
            <div className='flex items-center relative'>            
                <select onChange={inputHandle} name='village' id='village'  className='rounded-xl xl:w-[30rem] w-[310px] mx-auto'>
                  <option></option>
                  {state.map((item)=>(
                    <option className='fontBold text-end' value={item.center}>{item.center}</option>
                  ))}
                </select>
                <label htmlFor='village' className='absolute top-[-15px] left-[204px] xl:left-[380px] fontBold bg-white px-2 py-1'>*روستا</label>
              </div>
              <div className='flex items-center relative'>            
              <input onChange={inputHandle} type='text' name='addres' id='addres'  className=' rounded-xl xl:w-[30rem] w-[310px] mx-auto'/>
              <label htmlFor='addres' className='absolute top-[-15px] left-[204px] xl:left-[380px] fontBold bg-white px-2 py-1'>* آدرس</label>
              </div>
            </div>

            <div className='dottedBorderLine'></div>

            <div className='flex xl:flex-row-reverse flex-col justify-between  gap-7 xl:gap-3 mx-auto xl:mx-5'>
              <div className='flex items-center relative'>
                <input onChange={inputHandle} type='text' name='wide' id='wide'  className=' rounded-xl xl:w-[30rem] w-[310px] mx-auto'/>
                <label htmlFor='wide' className='absolute fontBold top-[-15px] left-[204px] xl:left-[355px] bg-white px-2 py-1'> * مساحت زمین</label>
              </div>
              <div className='flex items-center relative'>            
              <input onChange={inputHandle} type='text' name='postcode' id='postcode'  className=' rounded-xl xl:w-[30rem] w-[310px] mx-auto'/>
              <label htmlFor='postcode' className='absolute top-[-15px] left-[204px] xl:left-[380px] fontBold bg-white px-2 py-1'>کد پستی</label>
              </div>
            </div>

          </div>
          <button onClick={next} className='flex justify-start mx-4 mt-7 bg-greenLight py-2 text-white rounded-xl px-3'>ذخیره و ادامه</button>
        </form>

      </div>},
      {formNo===2 && <div className='flex flex-col'>
        <form>
          <div className='flex flex-col xl:gap-7 gap-10' >
            <div className='flex xl:flex-row-reverse flex-col justify-between gap-7  xl:gap-3 mx-auto xl:mx-5'>
              <div className='flex items-center relative '>            
                <select onChange={(e)=>setSelectType(e.target.value)} name='type' id='type'  className='rounded-xl xl:w-[30rem] w-[310px] mx-auto text-end'>
                  <option></option>
                  <option value={1}>سند شش دنگ</option>
                  <option value={2}>برگه واگذاری</option>
                  <option>قولنامه </option>
                  <option>سند مشماعی </option>
                  <option>سایر  </option>
                </select>
                <label htmlFor='type' className='absolute top-[-15px] left-[204px] xl:left-[380px] fontBold bg-white px-2 py-1'>*نوع مالکیت</label>
              </div>
            </div>
            {selectType == 1 ? 
            <div>
              <div className='dottedBorderLine mb-7'></div>
              <form>
        <div className='flex flex-col xl:gap-7 gap-10'>
             <div className='flex xl:flex-row-reverse flex-col justify-between gap-7  xl:gap-3 mx-auto xl:mx-5'>
                  <div className='flex items-center relative'>
                    <input onChange={inputHandle}  type='text' name='RegistrationDepartment' id='RegistrationDepartment'  className=' rounded-xl xl:w-[30rem] w-[310px] mx-auto'/>
                    <label htmlFor='RegistrationDepartment' className='absolute fontBold top-[-15px] left-[204px] xl:left-[355px] bg-white px-2 py-1'> * بخش ثبتی</label>
                  </div>
                  <div className='flex items-center relative'>
                    <input onChange={inputHandle}  type='text' name='Divisible' id='Divisible' className=' rounded-xl xl:w-[30rem] w-[310px] mx-auto'/>
                    <label htmlFor='Divisible' className='absolute fontBold top-[-15px] left-[204px] xl:left-[355px] bg-white px-2 py-1'> * مفروزی</label>
                  </div>
            </div>
             <div className='flex xl:flex-row-reverse flex-col justify-between gap-7  xl:gap-3 mx-auto xl:mx-5'>
                  <div className='flex items-center relative'>
                    <input onChange={inputHandle}  type='text' name='piece' id='piece'  className=' rounded-xl xl:w-[30rem] w-[310px] mx-auto'/>
                    <label htmlFor='piece' className='absolute fontBold top-[-15px] left-[204px] xl:left-[355px] bg-white px-2 py-1'> * قطعه </label>
                  </div>
                  <div className='flex items-center relative'>
                    <input onChange={inputHandle}  type='text' name='main' id='main'  className=' rounded-xl xl:w-[30rem] w-[310px] mx-auto'/>
                    <label htmlFor='main' className='absolute fontBold top-[-15px] left-[204px] xl:left-[355px] bg-white px-2 py-1'> * اصلی</label>
                  </div>
            </div>
             <div className='flex xl:flex-row-reverse flex-col justify-between gap-7  xl:gap-3 mx-auto xl:mx-5'>
                  <div className='flex items-center relative'>
                    <input onChange={inputHandle}  type='text' name='sub' id='sub'  className=' rounded-xl xl:w-[30rem] w-[310px] mx-auto'/>
                    <label htmlFor='sub' className='absolute fontBold top-[-15px] left-[204px] xl:left-[355px] bg-white px-2 py-1'> * فرعی </label>
                  </div>
            </div>
            <div className='dottedBorderLine mb-7'></div>
            
            <UploadFilde/>   
                  

            
            
          </div>
          <div className='flex gap-2 mx-2'>
          <button onClick={next2}  className='flex justify-start  mt-7 bg-gray-400 py-2 text-white rounded-xl px-3'>ذخیره و ادامه</button>
          <button onClick={prev} className='flex justify-start  mt-7 bg-gray-400 py-2 text-white rounded-xl px-3'> بازگشت </button>
        </div>
          </form>
            </div> 
            : <div></div> }
      {selectType == 2 ?
      
      
        <div>
      <div className='flex xl:flex-row-reverse flex-col justify-between gap-7  xl:gap-3 mx-auto xl:mx-10'>
                  <div className='flex items-center relative'>
                    <input  onChange={inputHandle} type='text' name='Assignor' id='Assignor'  className=' rounded-xl xl:w-[30rem] w-[310px] mx-auto'/>
                    <label htmlFor='Assignor' className='absolute fontBold top-[-15px] left-[55%] xl:left-[355px] bg-white px-2 py-1'> *  شماره قرار داد</label>
                  </div>
                  <div className='flex items-center relative'>
                    <input  onChange={inputHandle}  type='text' name='Participant' id='Participant' className=' rounded-xl xl:w-[30rem] w-[310px] mx-auto'/>
                    <label htmlFor='Participant' className='absolute fontBold top-[-15px] left-[55%] xl:left-[355px] bg-white px-2 py-1'> * واگذار کننده</label>
                  </div>
            </div>
            <div className='dottedBorderLine my-9'></div>
            
            <UploadFilde/>
            <div className='flex gap-2 mx-2'>
          <button onClick={next3}  className='flex justify-start  mt-7 bg-gray-400 py-2 text-white rounded-xl px-3'>ذخیره و ادامه</button>
          <button onClick={prev} className='flex justify-start  mt-7 bg-gray-400 py-2 text-white rounded-xl px-3'> بازگشت </button>
        </div>
    </div>
      
      
      
      : <div></div>}



          </div>
          

          
        </form>

      </div>},
      {formNo===3 && <div className='flex flex-col'>
      <div className='flex xl:flex-row-reverse flex-col justify-between gap-7  xl:gap-3 mx-auto xl:mx-10'>
                  <div className='flex items-center relative'>
                    <input value={latLng.lat} onChange={handleLatChange} type='number' name='lat' id='lat'  className=' rounded-xl xl:w-[30rem] w-[310px] mx-auto'/>
                    <label htmlFor='let' className='absolute fontBold top-[-15px] left-[55%] xl:left-[355px] bg-white px-2 py-1'> *   طول جغرافیایی </label>
                  </div>
                  <div className='flex items-center relative'>
                    <input  type="number" id="lng" name="lng" value={latLng.lng} onChange={handleLngChange} className=' rounded-xl xl:w-[30rem] w-[310px] mx-auto'/>
                    <label htmlFor='lag' className='absolute fontBold top-[-15px] left-[55%] xl:left-[355px] bg-white px-2 py-1'> * عرض جغرافیایی </label>
                  </div>
            </div>
                  <div className='mr-[25px] fontBold text-[14px] mt-5 flex flex-row-reverse gap-2 item-center' >
                    <input type='checkbox' value={false} onChange={()=>showMap()} />
                    <span>انتخاب مختصات از روی نقشه</span>
                  </div>
                  {smap === false && <div></div>}
                  {smap === true && 
                    <div>
                  <div className="flex justify-center mt-9">
        <MapContainer center={latLng} zoom={13} scrollWheelZoom={false} whenCreated={setMapRef} >
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
   <Marker position={latLng} />
</MapContainer>
        </div>
                  </div>}
                  <div className='flex gap-2 mx-2'>
          <button onClick={next4}  className='flex justify-start  mt-7 bg-gray-400 py-2 text-white rounded-xl px-3'>ذخیره و ادامه</button>
          <button onClick={prev} className='flex justify-start  mt-7 bg-gray-400 py-2 text-white rounded-xl px-3'> بازگشت </button>
        </div>
      </div> 
      },
      {formNo ===4 && <div className='flex flex-col'>
      <div className='flex xl:flex-row-reverse flex-col justify-between gap-7   mb-8 xl:gap-3 mx-auto xl:mx-10'>
                  <div className='flex items-center relative'>
                    <input  onChange={(e)=>setEnding(e.target.value)} type='text' name='name4' id='name4'  className=' rounded-xl xl:w-[30rem] w-[310px] mx-auto'/>
                    <label htmlFor='name4' className='absolute fontBold top-[-15px] left-[55%] xl:left-[355px] bg-white px-2 py-1'> *   نام  </label>
                  </div>
                  <div className='flex items-center relative'>
                    <input  type='text' name='lname4' id='lname4'  className=' rounded-xl xl:w-[30rem] w-[310px] mx-auto'/>
                    <label htmlFor='lname4' className='absolute fontBold top-[-15px] left-[55%] xl:left-[355px] bg-white px-2 py-1'> *  نام خانوادگی  </label>
                  </div>
            </div>
      <div className='flex xl:flex-row-reverse flex-col justify-between gap-7  mb-8 xl:gap-3 mx-auto xl:mx-10'>
                  <div className='flex items-center relative'>
                    <input  type='text' name='fathername' id='fathername'  className=' rounded-xl xl:w-[30rem] w-[310px] mx-auto'/>
                    <label htmlFor='fathername' className='absolute fontBold top-[-15px] left-[55%] xl:left-[355px] bg-white px-2 py-1'> *    نام پدر </label>
                  </div>
                  <div className='flex items-center relative'>
                    <input  type='text' name='from' id='from'  className=' rounded-xl xl:w-[30rem] w-[310px] mx-auto'/>
                    <label htmlFor='from' className='absolute fontBold top-[-15px] left-[55%] xl:left-[355px] bg-white px-2 py-1'> *  صادره   </label>
                  </div>
            </div>
      <div className='flex xl:flex-row-reverse flex-col justify-between gap-7 mb-8 xl:gap-3 mx-auto xl:mx-10'>
                  <div className='flex items-center relative'>
                    <input  type='text' name='shenasname' id='shenasname'  className=' rounded-xl xl:w-[30rem] w-[310px] mx-auto'/>
                    <label htmlFor='shenasname' className='absolute fontBold top-[-15px] left-[55%] xl:left-[355px] bg-white px-2 py-1'> *     شماره شناسنامه </label>
                  </div>
                  <div className='flex items-center relative'>
                    <input  onChange={(e)=>setEnding2(e.target.value)} type='text' name='nid4' id='nid4'  className=' rounded-xl xl:w-[30rem] w-[310px] mx-auto'/>
                    <label htmlFor='nid4' className='absolute fontBold top-[-15px] left-[55%] xl:left-[355px] bg-white px-2 py-1'> *  کد ملی   </label>
                  </div>
            </div>
      <div className='flex xl:flex-row-reverse flex-col justify-between gap-7 mb-8 xl:gap-3 mx-auto xl:mx-10'>
                  <div className='flex items-center relative'>
                    <input  type='text' name='mobileN' id='mobileN'  className=' rounded-xl xl:w-[30rem] w-[310px] mx-auto'/>
                    <label htmlFor='mobileN' className='absolute fontBold top-[-15px] left-[55%] xl:left-[355px] bg-white px-2 py-1'> *     شماره همراه </label>
                  </div>
                  <div className='flex items-center relative'>
                    <input  type='text' name='CeoNid' id='CeoNid'  className=' rounded-xl xl:w-[30rem] w-[310px] mx-auto'/>
                    <label htmlFor='CeoNid' className='absolute fontBold top-[-15px] left-[55%] xl:left-[355px] bg-white px-2 py-1'> *  کد ملی  مدیرعامل </label>
                  </div>
            </div>
      <div className='flex xl:flex-row-reverse flex-col justify-between gap-7 mb-8 xl:gap-3 mx-auto xl:mx-10'>
                  <div className='flex items-center relative'>
                  <select  onChange={()=>setEnding3(e.target.value)} className=' rounded-xl xl:w-[30rem] w-[310px] mx-auto'>
                    <option>وکیل</option>
                    <option>شریک</option>
                  </select>
                    <label htmlFor='mobileN' className='absolute fontBold top-[-15px] left-[55%] xl:left-[355px] bg-white px-2 py-1'> *     نوع  </label>
                  </div>
                  <div className='flex items-center relative style'>
                    <p  type='text' name='CeoNid' id='CeoNid'  className=' rounded-xl xl:w-[30rem] w-[310px] mx-auto s'>مدارک خود را بارگداری کنید</p>
                    <label htmlFor='CeoNid' className='absolute fontBold top-[-15px] left-[55%] xl:left-[355px] bg-white px-2 py-1'> *  مدارک    </label>
                  </div>
            </div>
        <div className='addbtn p-5 rounded-lg flex justify-start w-[100px] item-center gap-2 ' onClick={()=>setAdding(true)}>
        <img src={addpluse} className='max-w-full w-4 h-4'/>
        <button className='  flex  fontBold'>افزودن </button>
        </div>
        {adding ===false && <div></div>}
        {adding ===true && <div className='flex flex-col mt-8'>
          <div className='flex justify-between flex-row-reverse mx-5 mb-2 fontBold'>
            <span>لیست شرکا و وکلای ملک</span>
            <span>کد ملی</span>
            <span>نوع</span>
            <span> عملیات</span>
          </div>
          <hr/>
          <div className='flex flex-row-reverse justify-between mx-5 mb-2 fontBold'>
            <span> {ending} </span>
            <span>{ending2} </span>
            <span>{ending3}</span>
            <div className='flex gap-2'>
              <span>ویرایش</span>
              <span onClick={()=>setAdding(false)}>حذف</span>
            </div>
          </div>
        </div> }
        </div>}
    </div>
  )
}

export default MultipleFormAddHome