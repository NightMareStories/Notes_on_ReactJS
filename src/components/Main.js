function Main() {
    return (
        <main>
            <div className="container-xl">
                <div className="row">
                    <section className="bg-dark col-6 offset-3 create-show-block d-flex align-items-center">
                        <div className="col-6 d-flex justify-content-center">
                            <a href="/create" className="btn btn-primary">Создать заметку</a>

                        </div>
                        <div className="col-6 d-flex justify-content-center">
                            <a href="/note" className="btn btn-primary">Просмотреть заметку</a>
                        </div></section>
                </div>
            </div>
        </main>

    );
}

export default Main;