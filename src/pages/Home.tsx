import ButtonLink from "../components/ButtonLink.tsx";
import HorizontalLine from "../components/HorizontalLine.tsx";
import Header from "../components/Header.tsx";

const Home = () => {
    return(
        <div className="max-w-prose h-full flex flex-col justify-center">
            <div className="text-5xl">Word Association Test</div>
            <HorizontalLine />
            <Header>Carl Jung’s method of 16 associations</Header>

            <div className="flex m-10 justify-center">
                <ButtonLink to="/test">
                    Run test
                </ButtonLink>
            </div>


        </div>
    );
}

export default Home