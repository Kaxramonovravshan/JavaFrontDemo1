import "bootstrap/dist/css/bootstrap.min.css";
import Books from "./Books";

function App() {
  // const [users, setusers] = useState([]);
  // const [edit, setEdit] = useState(false);
  // const [search, setSearch] = useState("");
  // const [userData, setUserData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   age: 0,
  // });

  // function postFunc() {
  //   if (edit) {
  //     axios({
  //       url: `http://localhost:8080/user/editUser/${userData.user_id}`,
  //       method: "put",
  //       data: userData,
  //     });
  //   } else {
  //     axios({
  //       url: "http://localhost:8080/user/postUser",
  //       method: "post",
  //       data: userData,
  //     });
  //   }
  // }

  // function getFunc() {
  //   axios({
  //     url: `http://localhost:8080/user/getUser`,
  //     method: "get",
  //   }).then(({ data }) => {
  //     setusers(data);
  //   });
  // }

  // function deleteUser(user_id) {
  //   axios({
  //     url: `http://localhost:8080/user/delete/${user_id}`,
  //     method: "delete",
  //   }).then(({ data }) => {
  //     getFunc();
  //   });
  // }

  // function editUser(i) {
  //   setUserData(i);
  //   setEdit(true);
  //   console.log(edit);
  // }
  return (
    <div className="p-5">
      <Books/>
    </div>
  );
}

export default App;
