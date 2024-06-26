import React from 'react'

export default function Pagination() {
  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="pagination d-flex justify-content-center ">
          <li className="page-item ms-2 me-2">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li className="page-item ms-2 me-2">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item ms-2 me-2 active">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item ms-2 me-2">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item ms-2 me-2">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}
