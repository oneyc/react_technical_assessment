import { useState, useRef, useEffect } from "react";
import classes from "./Settings.module.css"
import { doc } from "firebase/firestore"; 
import { db } from "../firebase/init-firebase";
import { collection, getDocs, setDoc, deleteDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';

function Settings() {

    const titleRef = useRef();
    const typeRef = useRef();
    const linkRef = useRef();

    const [isLoading, setIsLoading] = useState(true);
    const [quickLinks, setQuickLinks] = useState([]);
    const navigate = useNavigate();

    const getData = async() => {
        const querySnapshot = await getDocs(collection(db, "quickLinks"));

        const data = [];
        querySnapshot.forEach((doc) => {
            data.push({
                id: doc.id, 
                title: doc.data().title,
                type: doc.data().type,
                url: doc.data().link,
                forEdit: false,
            })
        });
        setQuickLinks(data)
    }

    useEffect(() => {
        getData();
    }, [])
    
    const newEntryHandler = () => {
        navigate("/newQuickLink")
    }

    const deleteHandler = (id) => {      
        //error handling
        const deleteData = async() => {
            console.log(id);
            await deleteDoc(doc(db, "quickLinks", id))
            setQuickLinks(quickLinks.filter(link => link.id !== id))
        }
        var deleteAnswer = window.confirm("Are you sure you want to delete this entry?");
        if(deleteAnswer){
            deleteData();
        }
        else{}
    }

    const editHandler = (id) => {
        let updatedList = quickLinks.map(item => {
            if(item.id === id){
                return {...item, forEdit: true}
            }
            return item;
        })
        setQuickLinks(updatedList)
    }

    const saveHandler = (id) => {
        const addToFirebase = async() => {
            await setDoc(doc(db, "quickLinks", id), {
                link: linkRef.current.value,
                title: titleRef.current.value,
                type: typeRef.current.value,
              });
        }
        let updatedList = quickLinks.map(item => {
            if(item.id === id){
                return {...item, forEdit: false}
            }
            return item;
        })
        addToFirebase();
        setQuickLinks(updatedList)
        getData();
    }

    const mapQuickLinks = quickLinks.map((link) => {
        return (
            <div class="card">
                {!link.forEdit ? (
                <div class="card-body" id={link.id}>
                    <div>
                    <h5 class="card-title">Title: {link.title}</h5> 
                    <h6 class="card-text">Type: {link.type}</h6>
                    <p class="card-text">Url: {link.url ? link.url : 'N/A'}</p>
                    </div>
                        <div className={classes.buttonList}>
                            <a href="#" class="btn btn-warning" onClick={() => editHandler(link.id)}>Edit</a>
                            <a href="#" class="btn btn-danger" onClick={() => deleteHandler(link.id)}>Delete</a>
                        </div>
                </div>
                ) :
                <div class="card-body" id={link.id}>
                    <form>
                        <div>
                        <label for="titleEdit">Title</label>
                        <textarea class="form-control" id="titleEdit" rows="1" ref={titleRef}>{link.title}</textarea>
                        <label for="typeEdit">Type</label>
                        <textarea class="form-control" id="typeEdit" rows="1" ref={typeRef}>{link.type}</textarea>
                        <label for="urlEdit">URL</label>
                        <textarea class="form-control" id="urlEdit" rows="1" ref={linkRef}>{link.url}</textarea>
                        </div>
                            <div className={classes.buttonList}>
                                <a href="#" class="btn btn-success" onClick={() => saveHandler(link.id)}>Save</a>
                                <a href="#" class="btn btn-danger" onClick={() => deleteHandler(link.id)}>Delete</a>
                            </div>
                        </form>
                    </div>
                }
            </div>
        )
    })

    if(quickLinks.length === 0){
        return (
                <h1>Loading...</h1>
            )
    }
    return (
      <>
        <main className={classes.container}>
            <h1>Settings</h1>
            <div>
                <h3>Quick Links</h3>
                <a href="#" class="btn btn-primary" onClick={newEntryHandler}>Create</a>
            </div>
            <div className={classes.row}>
                {mapQuickLinks}
            </div>
        </main>
      </>
    );
  }

export default Settings;