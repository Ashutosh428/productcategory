import React from 'react'

const Ourteam = () => {
  return (
    <>
    <section class="team my-5 text-center">   


<div class="container">   
  <div class="text-center my-5">   
    <h1>Our <span class="text-primary">Members</span></h1>
    <hr class="w-25 m-auto"/>
  </div>
<div class="row" data-aos="fade-up"
data-aos-duration="3000">
  <div class="col-sm-12 col-md-4 col-lg-4 col-12">  
    <div class="card">
      <div class="card-body">
        <img src="team1.jpg" class="img-fluid rounded-circle border border-primary p-2" alt=""/>
        <h5 class="card-title mt-4">Andrew</h5>
        <p class="card-text">Frontend developer</p>
        <a href="#" class="btn btn-primary">Read more</a>
      </div>
    </div>


  </div>
  <div class="col-sm-12 col-md-4 col-lg-4 col-12">  
    <div class="card">
      <div class="card-body">
        <img src="team2.jpg" class="img-fluid rounded-circle border border-primary p-2" alt=""/>
        <h5 class="card-title mt-4">Frank</h5>
        <p class="card-text">Java developer</p>
        <a href="#" class="btn btn-primary">Read more </a>
      </div>
    </div>


    
  </div>
  <div class="col-sm-12 col-md-4 col-lg-4 col-12">  
    <div class="card">
      <div class="card-body">
        <img src="team3.jpg" class="img-fluid rounded-circle border border-primary p-2" alt=""/>
        <h5 class="card-title mt-4">Matt</h5>
        <p class="card-text">Business analyst</p>
        <a href="#" class="btn btn-primary">Read more</a>
      </div>
    </div>

    
  </div>
</div>
</div>
</section>

        </>
  )
}

export default Ourteam