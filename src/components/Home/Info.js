import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
              animi recusandae earum consectetur vitae, sint odio atque
              temporibus saepe nisi unde, vero nobis expedita ipsum rem corrupti
              assumenda! Maiores facilis molestiae laudantium impedit, in magnam
              odio eligendi cupiditate, eius ullam fugit dolor, unde cum sunt
              quia omnis fugiat nisi ut.
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
