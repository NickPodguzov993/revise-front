import Modal from 'react-modal';
import {useState} from "react";
import "./LoginForm.css"


const LoginForm = () => {

    const [modalIsOpen, setModalIsOpen] = useState(true);



    const closeModal = () => {
        setModalIsOpen(false);
    };

    const modalContent = (
        <div >
            <div className="container">
                <section id="content">
                    <form action="">
                        <h1>Login Form</h1>
                        <div>
                            <input type="text" placeholder="Username" required="" id="username"/>
                        </div>
                        <div>
                            <input type="password" placeholder="Password" required="" id="password"/>
                        </div>
                        <div>
                            <input onClick={closeModal} type="submit" value="Log in"/>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );

    return (
        <div>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
                {modalContent}
            </Modal>
        </div>
    );
};

export default LoginForm;
