import './About.scss';

function About() {
    return (
        <div className="about">
            <div className="about-content _container">
                <div className="about-content__block block-about">
                    <div className="block-about__info info-about">
                        <p className="info-about__text">
                            "Notes on ReactJS" is an application written in "ReactJS", "NodeJS" and using the server-side development environment "OpenServer", the application also makes extensive use of routing for SPA, but there are also redirection functions with page.
                        </p>
                        <p className="info-about__text">
                            The work of the application is to create notes or messages by the user and view the already created notes or messages for review. Each note when created has its own unique ID-hash, which can be copied and pasted on the search page, thereby familiarizing yourself with its contents.
                        </p>
                        <p className="info-about__text">
                            Thanks to the interaction between the "backend" and "frontend" via the API, as well as the application for creating and working with sql tables "PhpMyAdmin" in the server environment "OpenServer" - the Notes on ReactJS application creates and saves notes on the server, and gets the generated notes when requested from the client.
                        </p>
                        <p className="info-about__text">
                            Try it, from the main page you can go directly to creating or viewing notes (you need a note ID to view). After creation, you can follow the link directly to the created note, or by clicking on the field with the note ID to copy it. Now you can go to "NOTES" to paste the copied note by clicking in the search field, if the note is found, then all its contents will be shown, if not, then you made a mistake with the spelling and received an error notification.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;