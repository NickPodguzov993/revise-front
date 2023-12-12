import "./LoginForm.css"

type LoginType = {
    closeModal:() => void
}


const LoginForm = (props:LoginType) => {

    return (
        <div className="login-form">
            <h2>Log in</h2>
            <form>
                <input type="text" placeholder="Имя пользователя" required/>
                    <input type="password" placeholder="Пароль" required/>
                        <button onClick={props.closeModal} type="submit">Войти</button>
            </form>
        </div>
    );
};

export default LoginForm;
