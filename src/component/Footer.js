import React from 'react'

const Footer = () => {
  return (
  <>  
  <section class="contact py-5">   
<div class="container text-center">  

  <div class="text-center my-5">   
    <h1 data-aos="fade-up"
    data-aos-anchor-placement="center-center">Feel free  <span class="text-primary">to connect</span></h1>
    <hr class="w-25 m-auto"/ >
  </div>
  <div class="row " >   

    <div class="col-sm-12 col-md-6 col-lg-6 col-12">   
      <form class="row g-3">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Email</label>
          <input type="email" class="form-control" id="inputEmail4"/>
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Password</label>
          <input type="password" class="form-control" id="inputPassword4"/>
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">Address</label>
          <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
        </div>
       
        <div class="col-md-6">
          <label for="inputCity" class="form-label">City</label>
          <input type="text" class="form-control" id="inputCity"/>
        </div>
        <div class="col-md-4">
          <label for="inputState" class="form-label">State</label>
          <select id="inputState" class="form-select">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div class="col-md-2">
          <label for="inputZip" class="form-label">Zip</label>
          <input type="text" class="form-control" id="inputZip"/>
        </div>
        <div class="col-12">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck"/>
            <label class="form-check-label" for="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">Sign in</button>
        </div>
      </form>
    </div>
    <div class="col-sm-12 col-md-6 col-lg-6 col-12"> </div>
  </div>
</div>
 </section>
</>
  )
}

export default Footer