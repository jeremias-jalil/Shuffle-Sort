
import { useState } from 'react';
import Controls from '../../components/Controls';
import NumberContainer from '../../components/NumberContainer';
import { shuffleNumber, sortNumber } from '../../utils/functions';
import Footer from '../Footer';
import Header from '../Header';
import { AppContent, Container, FooterContainer, HeaderContainer } from './style';
function App() {
    const [numberList, setNumberList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

    const handleShuffle = () => {
        const shuffledArray = shuffleNumber(numberList);
        setNumberList(shuffledArray);
    }

    const handleSort = () => {
        const sortedArray = sortNumber(numberList)
        setNumberList(sortedArray);
    }

    return (
        <Container data-testid='App'>
            <HeaderContainer>
                <Header />
            </HeaderContainer>
            <AppContent>
                <NumberContainer numberList={numberList} />
                <Controls handleShuffle={handleShuffle} handleSort={handleSort} />
            </AppContent>
            <FooterContainer>
                <Footer text="Shuffle & sort by Jeremias Jalil" />
            </FooterContainer>
        </Container>
    );
}

export default App;
