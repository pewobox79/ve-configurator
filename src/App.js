import React, {useState} from "react";
import './App.css';
import {Button, Jumbotron, Container, Image, Badge} from "react-bootstrap";
import Iframe from "react-iframe";
import Image1 from './assets/image1.png'
import Image2 from './assets/image2.png'

function App() {

    const pricelist = {
        moduleOne: 300,
        moduleTwo: 200,
        moduleThree: 500
    }


    const [priceTotal, setPriceTotal] = useState()

    const handleModulOne = (e) => {
        e.preventDefault()
        document.getElementById("module1").className = ""
        setPriceTotal(pricelist.moduleOne)
        console.log(priceTotal)
    }
    const handleModulTwo = (e) => {
        e.preventDefault()
        document.getElementById("module2").className = ""
        setPriceTotal(priceTotal + pricelist.moduleTwo)
    }
    const handleModulThree = (e) => {
        e.preventDefault()
        document.getElementById("module3").className = ""
        setPriceTotal(priceTotal + pricelist.moduleThree)
    }

    const handleDeleteOne = (e) => {


        document.getElementById("module1").className = "hidden"
        setPriceTotal(priceTotal - pricelist.moduleOne)
    }
    const handleDeleteTwo = (e) => {
        document.getElementById("module2").className = "hidden"
        setPriceTotal(priceTotal - pricelist.moduleTwo)
    }
    const handleDeleteThree = (e) => {

        document.getElementById("module3").className = "hidden"
        setPriceTotal(priceTotal - pricelist.moduleThree)
    }


    const handleClear=()=>{
        handleDeleteOne()
        handleDeleteTwo()
        handleDeleteThree()
        setPriceTotal(0)

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
                    <Button variant="outline-warning" onClick={handleClear} className="m-2">Clear Selection</Button>
                    <Button variant="outline-info" onClick={window.print}>Print your Virtual Event
                        proposal</Button>


                    <section>
                        <Container className="text-center">
                            <hr/>
                            <h6>Your selected Virtual Event Package has an value of </h6>
                            <Badge variant="primary"
                                   className="text-lg-center font-weight-bold m-2">{priceTotal} Euro</Badge>
                        </Container>
                    </section>


                </Container>

                <section id="module1" className="hidden p-3">
                    <Container className="p-4 text-center background-style">
                        <Button variant="secondary" onClick={handleDeleteOne}
                                className="position-relative btn-sm mb-3">exclude</Button>

                        <div>

                            <Image className="image-style" src={Image1}/>

                            <h2 className="text-warning">Content First Module</h2>
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

                        <Iframe className="mx-auto pb-3" url={"https://www.youtube.com/embed/7yLaYBbWwQI"} title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen ></Iframe>

                        <Button className="position-relative" variant="warning">
                            Module Price <Badge variant="light">{pricelist.moduleOne} Euro</Badge>
                        </Button>
                    </Container>
                    <div className="p-3"></div>
                </section>

                <section id="module2" className="hidden">
                    <Container className="p-4 text-center background-style">
                        <Button variant="secondary" onClick={handleDeleteTwo}
                                className="position-relative btn-sm mb-3">exclude</Button>
                        <div>
                            <Image className="image-style" src={Image2}/>
                            <h2 className="text-danger">Booth Configurator</h2>

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
                        <Iframe className="mx-auto pb-3" src="https://www.youtube.com/embed/zeTFD5m3apQ"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></Iframe>
                        <Button className="position-relative" variant="warning">
                            Module Price <Badge variant="light">{pricelist.moduleTwo} Euro</Badge>
                        </Button>
                    </Container>
                    <div className="p-3"></div>
                </section>
                <section id="module3" className="hidden">
                    <Container className="p-4 text-center background-style">
                        <Button variant="secondary" onClick={handleDeleteThree}
                                className="position-relative btn-sm mb-3">exclude</Button>
                        <div>

                            <Image className="image-style" src={Image1}/>
                            <h2 className="text-warning">Content Third Module</h2>
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
                        <Button className="position-relative" variant="warning">
                            Module Price <Badge variant="light">{pricelist.moduleThree} Euro</Badge>
                        </Button>
                    </Container>
                    <div className="p-3"></div>
                </section>


            </div>
        </>

    );
}

export default App;
