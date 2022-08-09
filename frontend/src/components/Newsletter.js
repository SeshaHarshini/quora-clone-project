import React from 'react'
// import "./css/bootstrap.min.css"
// import "./css/bootstrap.css"
const Newsletter = () => {
  return (
    <div class="container">
    <section class="row mt-5 text-center">
      <div class="col-md-6 m-auto">
        <h1><i class="fas fa-newspaper fa-2x"></i></h1>
        <h1 class="display-4">Newsletter Signup</h1>
        <p class="lead">
          Enter your info to get our awesome monthly newsletter
        </p>
        <form action="/signup" method="POST">
          <div class="form-group">
            <input type="text" name="firstName" id="first-name" class="form-control" placeholder="First Name"
              required />
          </div>
          <div class="form-group">
            <input type="text" name="lastName" id="last-name" class="form-control" placeholder="Last Name" required />
          </div>
          <div class="form-group">
            <input type="email" name="email" id="email" class="form-control" placeholder="Email" required />
          </div>
          <button type="submit" class="btn btn-primary btn-block">
            Sign Up
          </button>
        </form>
      </div>
    </section>
  </div>
  )
}

export default Newsletter