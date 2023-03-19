import { useEffect, useState } from "react";
import {
  createuser,
  getAllUser,
  updateuser,
  deleteuser,
} from "../service/apiCall";

export function CrudOpration() {
  const initialState = {
    _id: "",
    Firstname: "",
    Lastname: "",
    Email: "",
    Password: "",
    Mobile: "",
    Gender: "",
  };
  let [userForm, setUserForm] = useState(initialState);
  let [searchinput, setSearchinput] = useState("");
  let [alluserdata, setalluserdata] = useState([]);

  const handleInputchange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUserForm((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userForm._id) {
      await updateuser(userForm);
    } else {
      await createuser(userForm);
    }
    setUserForm({ ...initialState });
    getAllUserdata();
  };

  const getAllUserdata = async () => {
    let responce = await getAllUser({ search: searchinput });
    setalluserdata(responce);
  };

  const deleteCurrentuser = async (id) => {
    if (window.confirm("Are You sure You Want To Delete ? ")) {
      await deleteuser(id);
      getAllUserdata();
    }
  };

  const editupdate = (currentdate) => {
    setUserForm({ ...currentdate });
  };

  useEffect(() => {
    getAllUserdata();
  }, [searchinput]);

  return (
    <>
      <div className="row container mt-5">
        <div className=" card card-body col-md-4">
          <h4>Create Users</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label>Enter firstName:</label>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Enter First name"
                  className="form-control"
                  name="Firstname"
                  value={userForm.Firstname}
                  onChange={handleInputchange}
                  required
                />
                <input
                  type="hidden"
                  className="form-control"
                  name="_id"
                  value={userForm._id}
                  onChange={handleInputchange}
                />
              </div>
            </div>
            <div className="mb-3">
              <label>Enter lastName:</label>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Enter lastName"
                  className="form-control"
                  name="Lastname"
                  value={userForm.Lastname}
                  onChange={handleInputchange}
                  required
                />
              </div>
            </div>
            <div className="mb-3">
              <label>Enter Email id:</label>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Enter Email"
                  className="form-control"
                  name="Email"
                  value={userForm.Email}
                  onChange={handleInputchange}
                  required
                />
              </div>
            </div>

            {!userForm._id && (
              <div className="mb-3">
                <label>Enter Password:</label>
                <div className="form-group">
                  <input
                    autoComplete="false"
                    type="password"
                    placeholder="Enter password"
                    className="form-control"
                    name="Password"
                    value={userForm.Password}
                    onChange={handleInputchange}
                    required
                  />
                </div>
              </div>
            )}
            <div className="mb-3">
              <label>Enter Mobile No:</label>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Enter Mobile"
                  className="form-control"
                  value={userForm.Mobile}
                  name="Mobile"
                  onChange={handleInputchange}
                  required
                />
              </div>
            </div>

            <div className="mb-3">
              <label>Select Gender:</label>
              <div className="form-group">
                <select
                  value={userForm.Gender}
                  name="Gender"
                  className="form-control"
                  onChange={handleInputchange}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
            <div className="mb3">
              <button type="submit" className="btn btn-primary form-control">
                Save
              </button>
            </div>
          </form>
        </div>
        <div className=" card card-body col-md-7 offset-1">
          <h4>Users</h4>
          <div className="col-md-10 offset-1">
            <input
              value={searchinput}
              name="Gender"
              onChange={(e) => setSearchinput(e.target.value)}
              className="form-control"
              placeholder="Search User"
              type="text"
            />
          </div>
          <div style={{ maxHeight: "500px", color: "red", overflowX: "auto" }}>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">Firstname</th>
                  <th scope="col">Lastname</th>
                  <th scope="col">Email</th>
                  <th scope="col">Mobile</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {alluserdata.map((res) => (
                  <tr key={res._id}>
                    <td>{res.Firstname}</td>
                    <td>{res.Lastname}</td>
                    <td>{res.Email}</td>
                    <td>{res.Mobile}</td>
                    <td>{res.Gender}</td>
                    <td style={{ cursor: "pointer" }}>
                      <span className="mx-2">
                        <i
                          onClick={() => deleteCurrentuser(res._id)}
                          className="fa fa-trash text-danger"
                        ></i>
                      </span>
                      <span>
                        <i
                          onClick={() => editupdate(res)}
                          className="fa fa-pencil text-success"
                        ></i>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
