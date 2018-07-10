import React from "react";
import { Field, reduxForm } from "redux-form";
import { reducer as reduxFormReducer } from "redux-form";
import { connect } from "react-redux";
import { postPeople } from "../../actions/simpleForm";
import { fetchPeople } from "../../actions/personList";
import { bindActionCreators } from "redux";

class simpleForm extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.postPeople();
  }

  handleSubmit(e) {
    e.preventDefault();

    if (!this.props.data) return;

    this.props.postPeople(this.props.data.values);
    this.props.fetchPeople();
  }

  render() {
    const { pristine, reset, submitting } = this.props;

    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>First name</label>
            <Field
              name="name"
              component="input"
              type="text"
              placeholder="John"
            />
          </div>
          <div>
            <label>Last name</label>
            <Field
              name="lastName"
              component="input"
              type="text"
              placeholder="Wick"
            />
          </div>
          <div>
            <button type="submit" disabled={pristine}>
              Register
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return { data: store.form.personForm };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ postPeople, fetchPeople }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({
    form: "list" // a unique identifier for this form
  })(simpleForm)
);

/*
        <form onSubmit={handleSubmit}>
          <div>
            <label>First name</label>
            <div>
              <Field
                name="name"
                component="input"
                type="text"
                placeholder="John"
              />
            </div>
          </div>
          <div>
            <label>Last Name</label>
            <div>
              <Field
                name="lastName"
                component="input"
                type="text"
                placeholder="Wick"
              />
            </div>
            <button type="submit" disabled={pristine || submitting}>
              Submit
          </button>
            <button
              type="button"
              disabled={pristine || submitting}
              onClick={reset}
            >
              Clear Values
          </button>
          </div>
          <div />
        </form>

*/
