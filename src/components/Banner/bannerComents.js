import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../../assets/img/header-img.svg'


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0); // controla o número de iterações.
    const [isDeleting, setIsDeleting] = useState(false); // indica se o texto está sendo apagado.
    const toRotate = ["Web Developer", "Developer Front-End"]; // array de frases que serão alternadas.
    const [text, setText] = useState(''); //é o texto atualmente exibido.
    const [delta, setDelta] = useState(300 - Math.random() * 100); // controla o intervalo entre os caracteres digitados.
    const period = 2000;

    useEffect(() => {
        //cria um intervalo que chama a função tick em intervalos aleatórios definidos pelo estado delta
        let ticker = setInterval(() => {
            tick();
        }, delta)
        return () => { clearInterval(ticker) } //usado para limpar o intervalo quando o componente é desmontado.
    }, [text]) //useEffect e executado sempre que text for atualizado

    const tick = () => { //tick é chamada no intervalo definido por delta
        let i = loopNum % toRotate.length; // calcula o índice da frase atual a partir do loopNum
        let fullText = toRotate[i]; // armazena a frase completa.
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length
            + 1) //é atualizado com o texto que será exibido na próxima iteração.
        setText(updatedText);
        if (isDeleting) { //verifica se o texto está sendo apagado
            setDelta(prevDelta => prevDelta / 2) //divide o valor atual de delta por 2, o que diminui a velocidade de apagamento do texto pela metade.
        }
        if (!isDeleting && updatedText === fullText) { //Verifica se o texto não está sendo apagado, ou seja, o texto está sendo digitado e verifica se o texto digitado (updatedText) é igual à frase completa (fullText), o que significa que a frase foi completamente digitada.
            setIsDeleting(true); // indica que o texto agora deve ser apagado
            setDelta(period); //Isso faz com que o texto permaneça visível por 2 segundos antes de começar a ser apagado.
        } else if (isDeleting && updatedText === '') { //Verifica se o texto está sendo apagado, ou seja, o efeito está retrocedendo, apagando caracteres e se o updatedText está vazio, o que significa que toda a frase foi apagada.
            setIsDeleting(false); //indica que o texto agora deve ser digitado novamente.
            setLoopNum(loopNum + 1); // incrementa o estado loopNum, que controla qual frase será digitada a seguir.
            setDelta(500) //faz com que o texto seja digitado em um ritmo mais rápido após a frase ser apagada.
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Thayna.`}<br /> <span className="wrap">{text}</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section >
    )
}