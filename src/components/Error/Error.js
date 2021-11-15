import './Error.scss';
import { Link } from 'react-router-dom'; 

function Error() {
    return (
        <div className="error">
            <div className="error-main _container">
                <div className="error-main__block main-error">
                    <div className="main-error__block error-info">
                        <h3 className="error-info__title">Error 404!</h3>
                        <div className="error-info__img">
                            <img src="./img/error-404-img.png" alt="" className="error-info__img_img"/>
                        </div>
                        <div className="error-info__text">
                            <p className="error-info__text_text">Something went wrong!</p>
                            <p className="error-info__text_text">Please check if the URL is correct. If it is not correct, follow this link to be on the main page of the application.</p>
                        </div>
                        <Link to="/" className="error-info__link _btn">Go to main page</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Error;