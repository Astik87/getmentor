import React, {useContext, useState} from "react";

import MainBanner from "../../componets/MainBanner";
import Mentor from "../../componets/Mentor";
import Button from "../../componets/Button"

import "./style.css"

import helpImg from './img/helpImg.png';
import newMentorImg from './img/newMentorImg.png';
import {Link} from "react-router-dom";
import EmailApi from "../../Api/EmailApi";
import Context from "../../Context";


const send = async (name, email) => {
	const data = await EmailApi.sendQuestions(name, email);

	if(!data.error)
		alert('Спасибо! Мы свяжемся с вами в ближайшее время!')
	else
		alert('Ошибка! Пожалуйста, повторите попытку позже.')
}

const Main = () => {

	const [userName, setUserName] = useState('');
	const [userEmail, setUserEmail] = useState('');

	const {user} = useContext(Context);

	return (
		<div className="main">
			<MainBanner />
			<Mentor />
			<div className="line">

			</div>
			<div className="help-wrap">
				<div className="container">
					<h2 className="heading">Кому может помочь наш сайт?</h2>
					<div className="help">
						<div className="help-item">
							<div className="title-wrap">
								<div className="img">
									<img src={helpImg} alt="" />
								</div>
								<div className="title">Начинающим</div>
							</div>
							<div className="line"></div>
							<ul className="desc">
								<li>
									Хотите разобраться в новой теме
								</li>
								<li>
									Для тех кто учил, но забыл
								</li>
								<li>
									Задать интересующий вопрос
								</li>
								<li>
									Хотите составить план для развития
								</li>

							</ul>
						</div>
						<div className="help-item">
							<div className="title-wrap">
								<div className="img">
									<img src={helpImg} alt="" />
								</div>
								<div className="title">Начинающим</div>
							</div>
							<div className="line"></div>
							<ul className="desc">
								<li>
									Хотите разобраться в новой теме
								</li>
								<li>
									Для тех кто учил, но забыл
								</li>
								<li>
									Задать интересующий вопрос
								</li>
								<li>
									Хотите составить план для развития
								</li>

							</ul>
						</div>
						<div className="help-item">
							<div className="title-wrap">
								<div className="img">
									<img src={helpImg} alt="" />
								</div>
								<div className="title">Начинающим</div>
							</div>
							<div className="line"></div>
							<ul className="desc">
								<li>
									Хотите разобраться в новой теме
								</li>
								<li>
									Для тех кто учил, но забыл
								</li>
								<li>
									Задать интересующий вопрос
								</li>
								<li>
									Хотите составить план для развития
								</li>

							</ul>
						</div>
					</div>
				</div>
			</div>

			<div className="new-mentor">
				<h2 className="heading">Станьте новым ментором</h2>
				<div className="new-mentor-wrap">
					<div className="left item">
						<div className="title">Ты тоже можешь стать ментором</div>
						<div className="desc">
							<div className="desc-item">
								<div className="block"></div>
								<span className="text">Любите общаться с людьми</span>
							</div>
							<div className="desc-item">
								<div className="block"></div>
								<span className="text">Хорошо разбираешься в профессиональной теме</span>
							</div>
							<div className="desc-item">
								<div className="block"></div>
								<span className="text">Желаешь поделиться своими знаниями с людми</span>
							</div>
						</div>
					</div>
					<div className="center">
						<div className="img">
							<img src={newMentorImg} alt="" />
						</div>
						<div className="text">
							Если хотите <a href="#">стать ментором</a>, то оправьте нам свою заявку и мы постараемся рассмотреть её в ближайшее время
						</div>
					</div>
					<div className="right item">
						<div className="title">Ты тоже можешь стать ментором</div>
						<div className="desc">
							<div className="desc-item">
								<span className="text">Любите общаться с людьми</span>
								<div className="block"></div>
							</div>
							<div className="desc-item">
								<span className="text">Хорошо разбираешься в профессиональной теме</span>
								<div className="block"></div>
							</div>
							<div className="desc-item">
								<span className="text">Желаешь поделиться своими знаниями с людми</span>
								<div className="block"></div>
							</div>
						</div>
					</div>
				</div>
				<Link to={user.isAuth ? '/profile' : `/register`} className="btn">Оставить заявку</Link>
			</div>

			<div className="questions" id="help">
				<h2 className="heading">Остались вопросы?</h2>
				<div className="form">
					<div className="title">Связаться с нами по почте</div>
					<input type="text" placeholder="Ваше имя" value={userName} onInput={(e) => setUserName(e.target.value)} />
					<input className="email" type="text" placeholder="Электронная почта" value={userEmail} onInput={(e) => setUserEmail(e.target.value)} />
					<span>Я соглашаюсь с условиями <Link to="/privacy-policy">политики конфиденциальности</Link></span>
					<Button text="Отправить" click={() => send()} />
				</div>
			</div>
		</div>
	);
}

export default Main;