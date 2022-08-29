import { useRef } from "react";
import classes from "./NewQuickLink.module.css"
import { useNavigate } from "react-router-dom";
import { db } from "../firebase/init-firebase";
import { doc, setDoc } from "firebase/firestore"; 
import { v1 as uuidv1 } from 'uuid';

function NewQuickLink() {
    const titleRef = useRef();
    const typeRef = useRef();
    const linkRef = useRef();
    const navigate = useNavigate();

    const submitHandler = (event) => {
        event.preventDefault();
        const randomId = uuidv1();

        const addToFirebase = async() => {
            await setDoc(doc(db, "quickLinks", randomId), {
                link: linkRef.current.value,
                title: titleRef.current.value,
                type: typeRef.current.value,
              });
        }

        const backToSettings = () => {
            navigate("/settings")
        }
        addToFirebase();
        const myTimeout = setTimeout(backToSettings, 1000);

    }

    return (
      <>
        <main className={classes.container}>
            <h1>New QuickLinks</h1>
            <form onSubmit={submitHandler}>
                <div class="form-group">
                    <label for="title">Title</label>
                    <input class="form-control" type="text" id="title" ref={titleRef} placeholder="Title"/>
                </div>
                <div class="form-group">
                    <label for="type">Type</label>
                    <input class="form-control" type="text" id="type" ref={typeRef} placeholder="Type"/>
                </div>
                <div class="form-group">
                    <label for="link">Link</label>
                    <input class="form-control" type="text" id="link" ref={linkRef} placeholder="Link"/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </main>
      </>
    );
  }

export default NewQuickLink;