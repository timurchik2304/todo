import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllCharacters } from '../../requests/getAllCharacters/ge/getAllCharacters'
import  {setData} from '../../features/data/dataSlice'
import { useNavigate } from 'react-router-dom'
import { setId } from '../../features/idSlice'

const Character = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const heroes = useSelector((state)=> state.data.data)

  console.log(heroes)
  const goToDetailedInfo = (id)=>{
    dispatch(setId(id))
    navigate(`/detail`)
  }

  useEffect(() => {
    (async() => {
      const result = await GetAllCharacters()
      dispatch(setData(result))
    })()
  },[])
  return (
    <div>
        {heroes.map ((item,idx)=>{
          return(
            <div key={idx}
            onClick={()=>goToDetailedInfo(item.id)}
            >
              {item.fullName}
            </div>
          )
        })}
    </div>
  )
}

export default Character