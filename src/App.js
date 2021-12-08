import './App.scss';
import './styles/common.scss';
import Header from './components/Header/Header';
import Production from './pages/mainpage/Production/Production';
import Project from './pages/mainpage/Project/Project';
import AboutUs from './pages/mainpage/AboutUs/AboutUs';
import PreliminaryInformation from	'./pages/mainpage/PreliminaryInformation/PreliminaryInformation';
import Desing from './pages/mainpage/Desing/Desing';
import UsefulInfo from './pages/mainpage/UsefulInfo/UsefulInfo';
import RepairInfo from './pages/mainpage/RepairInfo/RepairInfo';
import Partners from './pages/mainpage/Partners/Partners';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<div>
			<Header></Header>
			<Production></Production>
			<Project></Project>
			<AboutUs></AboutUs>
			<PreliminaryInformation></PreliminaryInformation>
			<Desing></Desing>
			<UsefulInfo></UsefulInfo>
			<RepairInfo></RepairInfo>
			<Partners></Partners>
			<Footer></Footer>
		</div>
	);
}

export default App;
