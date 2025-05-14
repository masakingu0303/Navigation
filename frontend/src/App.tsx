import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/header';
import Page1 from './component/Page1';
import Page2 from './component/Page2';
import Page3 from './component/Page3';
import { Container } from 'react-bootstrap';

const App = () => {
    return (
        <Container>
            <h1 className='text-center my-3'>navtabとcomponentの練習</h1>
            <Router>
                <Header />
                <Routes>
                    <Route path="/page1" element={<Page1 />} />
                    <Route path="/page2" element={<Page2 />} />
                    <Route path="/page3" element={<Page3 />} />
                </Routes>
            </Router>
        </Container>
    );
};

export default App;
