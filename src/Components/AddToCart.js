import { makeStyles } from '@material-ui/styles'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
const useStyles=makeStyles({
    AddToCartStyles:{
        width:'100%',
        height:'70vh',
        padding:'10px 0',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'center',
    },
    breedNameBtnStyle:{
        display: 'flex',
        width: '70%',
        justifyContent: 'space-around',
        alignItems: 'center',
      '& h2':{
        color: '#ff2b2b',
        fontSize: '2rem',
      }  
    },

    breedImageStyle:{
        width: '100%',
        height: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& img':{
            width:'50%',
            height:'40vh'
        },
    },
    breedBtnStyle:{

        
        '& button':{
                color: 'white',
                backgroundColor: '#581845',
                fontSize: '2rem',
                fontWeight: 'bold',
                fontFamily: 'Cursive',
                border:'none',
                outline:'none',
                borderRadius: 5,            


    
        },
        '& button:hover':{
            backgroundColor:'white',
            color:'#581845',
            transition:'.8s ease-in-out',
            cursor:'pointer'
            
        },
        '& i':{
            fontSize:'1.8rem',
            color:'#ff2b2b'
        },
        '& i:hover':{
            backgroundColor:'white',
            color:'#581845',
            transition:'.8s ease-in-out',
            cursor:'pointer'
        }
        
    },
    

})
export default function AddToCart() {
    const classes=useStyles()
    
    const { allUser,cartUser} = useSelector(state=>state.api)
    const dispatch = useDispatch();
    const {breedName,message} = allUser
    console.log('cart User = ',cartUser)
    

    return (
        <div className={classes.AddToCartStyles}> 
            
            <div className={classes.breedNameBtnStyle}>
            <h2>Breed Name : {breedName}</h2>

            <div className={classes.breedBtnStyle}>
            <button
            onClick={()=>dispatch({type:'To_Cart',payload:{breedName,message}})}
            >Add Cart &nbsp;&nbsp;&nbsp;<i class="fas fa-star-half-alt"/>
            </button>
            
            </div>

            </div>

            <div className={classes.breedImageStyle}>
            <img src={message} />
            </div>
            
        </div>
    )
}
