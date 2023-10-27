import { Hello } from './components/Hello';
import {Student} from './components/Student';
import { StudentClass } from './components/StudentClass';
import { Comments } from './components/Comments';

var name = "Nikola";
var prezime = "Nikolovski";
var age = 27;
var student = {
  name: "Ivan",
  address:"Skopje",
  college: "UKIM",
  index: "141088"
}
var hasComments = false;
var longComment = false

export default function App() {
  return (
    <div>
      <Hello name="Filip" lastName="Dzukovski" />
      <h1>some Content</h1>
      <Hello name={name} lastName={prezime} /> 
      <hr /> 
      <Student student = {student} /> 
    </div>
    <hr/>
    <StudentClass student={student}/>;
    <hr/>
    <Comments hasComments={hasComments}/>
  );
}
