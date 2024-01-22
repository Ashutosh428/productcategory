import React from 'react'


const Aboutme = () => {

  return (
    <>
    <div className='container  my-2 bg-light'>  
<h2 data-aos="fade-right" className='pt-2'>About me</h2>
<hr className='w-25 m-auto '/>
<div className="row ">

<div className='col-sm-12 col-md-6 col-lg-6 col-12'>  
<h2 className='mt-4' data-aos="zoom-in" data-aos-offset="200">What do you want to know </h2>
<p  data-aos="zoom-in" data-aos-offset="200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, numquam vitae labore voluptatem magni aliquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ratione maxime aliquid dolorum saepe commodi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat aliquam, architecto consectetur odio maiores vel!
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est qui sint veritatis repudiandae doloremque expedita reiciendis magnam accusamus, repellendus animi?
</p>
<div className='text-start'>
<button  className='btn btn-danger'>Read more</button>
</div>
<div>

</div>
{/* <p className='p-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio molestiae hic laudantium corporis accusamus laborum consequatur modi mollitia? </p> */}
<div className="accordion mt-4" id="accordionExample">
  <div className="accordion-item  ">
    <h2 className="accordion-header mt-4" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  
</div>

</div>




<div className='col-sm-12 col-md-6 col-lg-6 col-12'>  
<img  data-aos="fade-left"   src="mount.jpeg" className='img-thumbnail img-fluid w-75 mt-5 bg-primary ' alt=""  />
</div>

    </div>
    </div>
    </>
  )
}

export default Aboutme