import React from 'react';


function Sidebar() {
  return (
    <div className="container-fluid">
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    
      <aside>
        <h3>Sizes</h3>
        <div class="buttons">
            <button class="size"><h6>XS</h6></button>
            <button class="size"><h6>S</h6></button>
            <button class="size"><h6>M</h6></button>
            <button class="size"><h6>ML</h6></button>
            <button class="size"><h6>L</h6></button>
            <button class="size"><h6>XL</h6></button>
            <button class="size"><h6>XXL</h6></button>

        </div>
        <br></br>
        <p id="message"><h6>Leave a star on Github if this <br/>repository was useful</h6></p>
        <div class="star-stuff">
            <button id="star"> <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="14.053" height="12.956" viewBox="0 0 14.053 12.956">
                    <path id="Path_11" data-name="Path 11" d="M14962.708,1720.052l-1.8,4.584h-5.383l3.889,3.688-1.1,4.684,4.391-2.691,4.281,2.691-1-4.684,3.588-3.688h-4.984Z" transform="translate(-14955.528 -1720.051)"/>
                  </svg>
                  
            </span> Star</button>
            <div id="count">848</div>

        </div>
    </aside>
    </div>
  );
}

export default Sidebar;