
import { Field, FieldHelperProps, FieldInputProps, Formik, FormikHelpers } from 'formik'
import React, { Component, PureComponent } from 'react'
import { setSourceMapRange } from 'typescript'
import { Playlist } from '../../core/model/Playlist'

interface Props {
  playlist: Playlist
  onCancel(): void,
  onSave(draft: Playlist): void,
}

interface State {
}



export default class PlaylistForm extends PureComponent<Props, State> {
  state: State = {}
  nameInputRef = React.createRef<HTMLInputElement>()

  constructor(props: Props) {
    super(props)

    // super.render()
  }

  componentDidMount() {
    if (this.nameInputRef.current) {
      this.nameInputRef.current.focus()
    }
  }

  submit = (values: Playlist, formikHelpers: FormikHelpers<Playlist>) => {
    // console.log(values)
    this.props.onSave(values)
    // formikHelpers
  }

  render() {

    return (
      <div>
        <Formik
          initialValues={this.props.playlist}
          enableReinitialize={true}
          onSubmit={this.submit}>{
            ({ handleChange, handleSubmit, handleReset, values, getFieldProps }) => <div>
              <div className="form-group">
                <label>Name:</label>
                {/* <input type="text" className="form-control" name="name" value={values.name} ref={this.nameInputRef} onChange={handleChange} /> */}
                {/* <input type="text" className="form-control" {...getFieldProps('name')} /> */}
                {/* <MyInput field={getFieldProps('name')}  /> */}
                <Field type="text" name="name" className="form-control" placeholder="Playlistname" innerRef={this.nameInputRef} />
                {values.name.length} / 170
              </div>

              <div className="form-group"><label>
                {/* <input type="checkbox" name="public" checked={values.public} onChange={handleChange} /> Public</label> */}
                <Field type="checkbox" name="public" /> Public</label>
              </div>

              <div className="form-group">
                <label>Description:</label>
                {/* <textarea className="form-control" name="description" value={values.description} onChange={handleChange}></textarea> */}
                <Field as="textarea" className="form-control" name="description" />
              </div>

              <button className="btn btn-danger" onClick={this.props.onCancel}>Cancel</button>

              <button className="btn btn-success" onClick={() => handleSubmit()}>Save</button>
            </div>
          }</Formik>


      </div>
    )
  }
}

const MyInput = ({ field, ...inputProps }: { field: FieldInputProps<any> } & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
) => {
  return <input type="text"  {...field} {...inputProps} className={"form-control " + inputProps.className} />
}


// const MyInput = ({ field, form, ...props }) => {
//   return <input {...field} {...props} />;
// };