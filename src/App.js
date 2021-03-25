import logo from './logo.svg';
import './App.css';
import {Button, Jumbotron, Container} from "react-bootstrap";
import Iframe from "react-iframe";

function App() {

    const handleModulOne = (e) => {
        e.preventDefault()
        document.getElementById("modul1").className = ""

    }
    const handleModulTwo = (e) => {
        e.preventDefault()
        document.getElementById("modul2").className = ""

    }
    const handleModulThree = (e) => {
        e.preventDefault()
        document.getElementById("modul3").className = ""

    }

    const handleDeleteOne = (e) => {
        e.preventDefault()
        document.getElementById("modul1").className = "hidden"
    }
    const handleDeleteTwo = (e) => {
        e.preventDefault()
        document.getElementById("modul2").className = "hidden"
    }
    const handleDeleteThree = (e) => {
        e.preventDefault()
        document.getElementById("modul3").className = "hidden"
    }


    return (
        <><Jumbotron fluid>
            <Container>
                <h1>Virtual Event Configurator</h1>
                <p>
                    We customize your next <span className="font-weight-bold font-italic">Virtual Event</span>. <br/>Choose
                    the available eventv modules below and we can make your event
                    unique!
                </p>
            </Container>
        </Jumbotron>
            <div className="wrapper">


                <Container className="pb-5">
                    <Button variant="outline-primary" className="m-2" onClick={handleModulOne}>Modul 1</Button>
                    <Button variant="outline-primary" className="m-2" onClick={handleModulTwo}>Modul 2</Button>
                    <Button variant="outline-primary" className="m-2" onClick={handleModulThree}>Modul 3</Button>
                </Container>

                <section id="modul1" className="hidden p-3">
                    <Container className="p-4 text-center background-style">
                        <Button variant="secondary" onClick={handleDeleteOne}
                                className="position-relative btn-sm">exclude</Button>
                        <div>
                            <h2>Content First Module</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has
                                been
                                the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                                galley
                                of type and scrambled it to make a type specimen book. It has survived not only five
                                centuries,
                                but also the leap into electronic typesetting, remaining essentially unchanged. It was
                                popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                                passages,
                                and more recently with desktop publishing software like Aldus PageMaker including
                                versions
                                of
                                Lorem Ipsum.</p>
                        </div>
                        <Iframe url={"https://www.youtube.com/embed/7yLaYBbWwQI"} title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></Iframe>

                    </Container>
                    <div className="p-3"></div>
                </section>

                <section id="modul2" className="hidden">
                    <Container className="p-4 text-center background-style">
                        <Button variant="secondary" onClick={handleDeleteTwo}
                                className="position-relative btn-sm">exclude</Button>
                        <div><h2>Content Second Module</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has
                                been
                                the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                                galley
                                of type and scrambled it to make a type specimen book. It has survived not only five
                                centuries,
                                but also the leap into electronic typesetting, remaining essentially unchanged. It was
                                popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                                passages,
                                and more recently with desktop publishing software like Aldus PageMaker including
                                versions
                                of
                                Lorem Ipsum.</p>
                        </div>

                    </Container>
                    <div className="p-3"></div>
                </section>
                <section id="modul3" className="hidden">
                    <Container className="p-4 text-center background-style">
                        <Button variant="secondary" onClick={handleDeleteThree}
                                className="position-relative btn-sm">exclude</Button>
                        <div><h2>Content Third Module</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has
                                been
                                the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                                galley
                                of type and scrambled it to make a type specimen book. It has survived not only five
                                centuries,
                                but also the leap into electronic typesetting, remaining essentially unchanged. It was
                                popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                                passages,
                                and more recently with desktop publishing software like Aldus PageMaker including
                                versions
                                of
                                Lorem Ipsum.</p>
                        </div>

                    </Container>
                    <div className="p-3"></div>
                </section>


                <section>
                    <Container className="text-center ">
                        <Button variant="outline-warning" onClick={window.print}>Print your Virtual Event
                            proposal</Button>
                    </Container>
                </section>
            </div>
        </>

    );
}

export default App;
