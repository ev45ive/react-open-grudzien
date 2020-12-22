
import React from 'react'

interface Props {

}

export const SearchForm = (props: Props) => {
  return (
    <div>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Search Albums" />
        
        <button className="btn btn-outline-secondary">Search</button>
      </div>
    </div>
  )
}