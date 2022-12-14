
/* ๐ฆc7 



*/

import React from 'react'

const Rating = ({value, text}) => {
  return (
    <div>
       <h3 className='components_name'> ๐ฆc7 Rating</h3>    

       {/*๐*/}
      <div>
        <p>
          ๐c7. font awesome
          html์ฝ๋ ๊ทธ๋๋ก ๋ณต์ฌํด์จ๊ฒ
          className ={}์ผ๋ก ์์ ํ๊ฒ ๋ชจ๋ ์ ๋๋ก ์ ์ฉ๋จ
        </p>

          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star-half-stroke"></i>   
          <i className={"fa-solid fa-star"}></i>
      </div>

       <div>value(rating) : {value}</div>
       <div>text: {text}</div>
       
       <p>๐c7. rating ๋ฃ๊ธฐ</p>
       <div className="rating">
        <span>
          <i className={value => 1
              ? "fa-solid fa-star"
              : value => 0.5
              ? 'fa-solid fa-star-half-stroke'
              : 'fa-solid fa-empty-set'
          }></i>
        </span>

          <span>        
              {
                  value >= 2
                  ? <i class="fa-solid fa-star"></i> 
                  : value >= 1.5
                  ? <i class="fa-solid fa-star-half-stroke"></i> 
                  : <i class="fa-solid fa-empty-set"></i>                
              }            
          </span>

          <span>       
              {
                  value >= 3
                  ? <i class="fa-solid fa-star"></i> 
                  : value >= 2.5
                  ? <i class="fa-solid fa-star-half-stroke"></i> 
                  : <i class="fa-solid fa-empty-set"></i>                
              }            
          </span>

          <span>        
              {
                  value >= 4
                  ? <i class="fa-solid fa-star"></i> 
                  : value >= 3.5
                  ? <i class="fa-solid fa-star-half-stroke"></i> 
                  : <i class="fa-solid fa-empty-set"></i>                
              }            
          </span>

          <span>        
              {
                  value >= 5
                  ? <i class="fa-solid fa-star"></i> 
                  : value >= 4.5
                  ? <i class="fa-solid fa-star-half-stroke"></i> 
                  : <i class="fa-solid fa-empty-set"></i>                
              }            
          </span>

          {/* ๐c7. ๋๋ค ๊ฐ์ ๋ป */}
          <span>way1: {text ? text : ""}</span>
          <br/>
          <span>way2: {text && text}</span>
       </div>
    
    </div>
  )
}

export default Rating