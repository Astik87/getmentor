import React, {Component, useContext, useState} from "react";
import {useParams} from "react-router";

import Context from "../../Context";
import Button from "../../componets/Button";
import TagsItem from "../../componets/Mentor/TagsList/TagsItem/TagsItem";

import "./style.css";

import activeStar from './img/active-star.png';
import emptyStar from './img/empty-star.png';
import UserApi from "../../Api/UserApi";
import RatingApi from "../../Api/RaringApi";
import jwtDecode from "jwt-decode";
import EmailApi from "../../Api/EmailApi";

function echoTags(tags) {

    if(!tags)
        return '';

    const htmlTags = [];

    tags.forEach((tag, i) => {
        htmlTags.push(<TagsItem tag={tag} key={i}/>);
    });

    return htmlTags;
}

function echoStars(rating, setUserRating = false, mentorId = false, setOriginUserRating) {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
        stars.push(<span key={i} className="star" onMouseEnter={setUserRating ? () => { setUserRating(i) } : () => {}} onClick={mentorId !== false ? () => { setRating(mentorId, i, setOriginUserRating) } : () => {}}><img src={i <= rating ? activeStar : emptyStar} alt=""/></span>);
    }

    return stars;
}

function setRating(mentorId, rating, setOriginUserRating) {
    if(!rating)
        return false;

    RatingApi.setRating(mentorId, rating).then(data => {
        if(data)
            setOriginUserRating(rating);
    });
}

function echoUserRating(userRating, setUserRating, mentorId, originUserRating, setOriginUserRating) {

    return (
        <div className="user-rating" onMouseLeave={setUserRating ? () => setUserRating(originUserRating) : () => {}}>
            <span>Ваша оценка</span>

            <div className="rating-input">
                {echoStars(userRating, setUserRating, mentorId, setOriginUserRating)}
            </div>
        </div>
    );
}

const getMentor = async (id) => {
    const {user, tagsList} = await UserApi.getUser(+id, true);
    user.tags = tagsList;
    return user;
}

const signup = (to) => {
    EmailApi.send(to).then(data => {
        console.log(data);

        if(!data.error)
            alert('Заявка упешно отправлена!');
        else
            alert('Ошибка! Пожалуйста повторите попытку позже.')
    });
}

const Mentor = () => {

    const [userRating, setUserRating] = useState(false);
    const [originUserRating, setOriginUserRating] = useState(false);
    const [mentor, setMentor] = useState(false);

    const {user} = useContext(Context);

    let mentorLoaded = false;

    const {id} = useParams();
    if(mentor === false && !mentorLoaded) {

        getMentor(id).then(mentor => {
            setMentor(mentor);
            mentorLoaded = true;
        });

    }

    if(!mentor && !mentorLoaded) {
        return 'Error';
    }

    if(user.isAuth && userRating === false) {
        RatingApi.getUserRating(mentor.id).then(data => {
            if(!data) setUserRating(0);
            else setUserRating(data.ratingVal)
        });

    }

    let userToken = '';

    if(user.isAuth)
        userToken = jwtDecode(localStorage.getItem('token'));

    return (
        <div className="mentor">

            <div className="mentor-detail">
                <div className="mentor-detail__rating">
                    {echoStars(mentor.ratingVal)}
                </div>

                {user.isAuth && userToken.id != id && echoUserRating(userRating, setUserRating, mentor.id, originUserRating, setOriginUserRating)}

                <div className="mentor-detail__name">
                    {mentor.name}
                </div>

                <div className="mentor-detail__post">
                    {mentor.post} в @{mentor.company}
                </div>

                <div className="mentor-detail__tags">
                    {echoTags(mentor.tags)}
                </div>

                <div className="mentor-detail__price">
                    Цена: {mentor.price}
                </div>

                <div className="mentor-detail__experience">
                    Опыт: {mentor.experience} г.
                </div>

                <Button text={"Записаться"} className="mentor-signup" click={() => signup( mentor.email)}/>

                <div className="mentor-detail__desc">
                    <div className="mentor-detail__desc-title">О себе:</div>
                    <div className="mentor-detail__desc-text">
                        {mentor.description}
                    </div>
                </div>
            </div>

            <div className="mentor-preview">
                <img src={`${process.env.REACT_APP_API_URL}/static/${mentor.ava}`} alt=""/>
            </div>

        </div>
    );
}

export default Mentor;