import React, { useEffect ,useState} from "react"
import { GetOneCharacters } from "../../requests/getOneCharacter/getOnechareacter"
import { useDispatch, useSelector } from "react-redux"
import { setDetail } from "../../features/data/detailedSlice"
import './detail.css'
import { useNavigate } from "react-router-dom"
const DetailedInfo = () => {
  const[loading,setLoading] =  useState(true)
  const navigate =  useNavigate()
  const dispatch = useDispatch()
 
  const detail = useSelector((state) => state.detail.detail)
  console.log(detail)  

  const idHello = useSelector((state)=> state.id.id)

  useEffect(()=>{
    (async()=>{
      setLoading(true)
      try{
        
        const result = await GetOneCharacters(idHello)
      dispatch(setDetail(result))
      } catch(e){
        if(e.response.status === 400){
          navigate('/') 
        }
      }finally{
        setLoading(false)
      }
    })()
  },[])
  return (
    <div>
      <div className="redux-detailed__div">
        {loading?<div>Loading...</div>:<div className="redux-detailed__div">
          <div>{detail.fullName}</div>
          <img src={detail.imageUrl} className="heroImg" alt="" />
          <div className="desk">
            <div className="aspects">
            <p>ID</p>
            <p className="detailed-info">{detail.id}</p>
            </div>
            <div className="aspects">
            <p>Full name</p>
            <p className="detailed-info" >{detail.fullName}</p>
            </div>
            <div className="aspects">
            <p>Title</p>
            <p className="detailed-info" >{detail. title}</p>
            </div>
          </div>

        </div>}
      </div>
    </div>
  )
}

export default DetailedInfo