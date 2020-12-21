
import { Formik, FormikHelpers } from 'formik'
import React, { Component, PureComponent } from 'react'
import { Playlist } from '../../core/model/Playlist'

interface Props {
  playlist: Playlist
  onCancel(): void,
  onSave(): void,
}

interface State {
}



export default class PlaylistForm extends PureComponent<Props, State> {
  state: State = {}
  nameInputRef = React.createRef<HTMLInputElement>()

  componentDidMount() {
    if (this.nameInputRef.current) {
      this.nameInputRef.current.focus()
    }
  }

  submit = (values: Playlist, formikHelpers: FormikHelpers<Playlist>) => {
    console.log(values)
    // formikHelpers
  }

  render() {

    return (
      <div>
        <Formik 
          initialValues={this.props.playlist}
          enableReinitialize={true}
          onSubmit={this.submit}>{
            ({ handleChange, handleSubmit, values }) => <div>
              <div className="form-group">
                <label>Name:</label>
                <input type="text" className="form-control" name="name" value={values.name} ref={this.nameInputRef} onChange={handleChange} />
                {values.name.length} / 170
              </div>

              <div className="form-group"><label>
                <input type="checkbox" name="public" checked={values.public} onChange={handleChange} /> Public</label>
              </div>

              <div className="form-group">
                <label>Description:</label>
                <textarea className="form-control" name="description" value={values.description} onChange={handleChange}></textarea>
              </div>

              <button className="btn btn-danger" onClick={this.props.onCancel}>Cancel</button>

              <button className="btn btn-success" onClick={() => handleSubmit()}>Save</button>
            </div>
          }</Formik>


      </div>
    )
  }
}
