import React, {Component} from "react";
import UserApi from "../../Api/UserApi";

import "./style.css";
import Button from "../../componets/Button";
import {Link} from "react-router-dom";
import {host} from "../../Api/Main";

class ProfileCart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            post: '',
            company: '',
            price: '',
            experience: '',
            tagsIsOpen: false,
            newTag: '',
            tagsList: [],
            allTags: []
        };

        host.get('api/tags/get-all').then(res => {
            this.setState({allTags: res.data})
        });
    }

    changeInput = e => {
        let {value, name} = e.target;

        this.setState({[name]: value});
    }

    cardClickHandler = e => {
        let target = e.target;
        let its_menu = target == document.querySelector('.tags .add-tag') || document.querySelector('.tags .add-tag').contains(target);

        if(its_menu === this.state.tagsIsOpen)
            return;

        this.setState({tagsIsOpen: its_menu});
    }

    addNewTag = (index) => {
        this.state.newTag = this.state.newTag.trim();
        if (index === false && !this.state.newTag.trim()) {
            return;
        }

        const tagsList = this.state.tagsList;
        let newTag = false;

        if (index !== false) {
            newTag = this.state.allTags[index];
        }   else {
            newTag = {name: this.state.newTag}
        }

        if (!newTag) {
            return false;
        }

        let tagIsSet = false;

        if(index === false) {
            this.state.allTags.forEach(e => {
                if (tagIsSet)
                    return;

                tagIsSet = e.name == newTag.name

            });

            this.state.tagsList.forEach(e => {
                if(tagIsSet)
                    return;

                tagIsSet = e.name == newTag.name
            });
        } else {
            this.state.tagsList.forEach(e => {
                if(tagIsSet)
                    return;

                tagIsSet = e.name == newTag.name
            });
        }

        if (tagIsSet)
            return;

        if (tagIsSet)
            return;

        tagsList.push(newTag);

        this.setState({tagsList: tagsList, newTag: ''});
    }

    deleteTag = index => {

        const currentTags = this.state.tagsList;

        currentTags.splice(index, 1)

        this.setState({tagsList: currentTags})
    }

    echoCurrentTags = () => {
        const tags = [];

        this.state.tagsList.forEach((tag, key) => {
            tags.push((
                <div className="tag-item" key={key}>
                    {tag.name}<div className="delete" onClick={() => this.deleteTag(key)}><span>X</span></div>
                </div>
            ));
        });

        return tags;
    }

    echoallTags = () => {
        const tags = [];

        this.state.allTags.forEach((tag, key) => {
            tags.push((
                <li key={key} onClick={() => this.addNewTag(key)}>
                    {tag.name}
                </li>
            ));
        });

        return tags;
    }

    save = async () => {
        await host.put('api/user/update-cart', this.state);
        UserApi.getUser(false, true).then(data => {
            if (data) {

                const {user} = data;

                // host.get('api/tags/get-by-user', user.id).then(data => {
                //     console.log(data);
                // });

                user.tagsList = data.tagsList;

                this.setState(data.user);
            }
        });

        host.get('api/tags/get-all').then(res => {
            this.setState({allTags: res.data})
        });
    }

    render() {
        if (!this.state.id) {
            UserApi.getUser(false, true).then(data => {
                if (data) {

                    const {user} = data;

                    // host.get('api/tags/get-by-user', user.id).then(data => {
                    //     console.log(data);
                    // });

                    user.tagsList = data.tagsList;

                    this.setState(data.user);
                }
            });
        }

        return (
            <div className="profile-card" onClick={this.cardClickHandler}>
                <div className="container">
                    <div className="title">Заполните поля:</div>

                    <div className="profile-card-form">
                        <div className="line">
                            <label className="field">
                                <span>Кем работаете:</span>
                                <input type="text" name="post" onInput={this.changeInput} value={this.state.post || ''}/>
                            </label>

                            <label className="field">
                                <span>Компания:</span>
                                <input type="text" name="company" onInput={this.changeInput} value={this.state.company || ''}/>
                            </label>

                            <label className="field">
                                <span>Цена:</span>
                                <input type="number" name="price" onInput={this.changeInput} value={this.state.price || ''} placeholder="500 ₽"/>
                            </label>

                            <label className="field">
                                <span>Опыт:</span>
                                <input type="number" name="experience" onInput={this.changeInput} value={this.state.experience || ''} placeholder="3 года"/>
                            </label>
                        </div>

                        <div className={this.state.tagsIsOpen ? 'tags active' : 'tags'}>
                            <span className="tags-title">Теги:</span>
                            <div className="tags-values-list">
                                {this.echoCurrentTags()}
                                <div className="add-tag tag-item">
                                    <input type="text" name="newTag" onInput={this.changeInput} value={this.state.newTag || ''} className="new-tag"/> <div className="plus" onClick={() => this.addNewTag(false)}><span>+</span></div>
                                    <div className="tags-list">
                                        <ul>
                                            {this.echoallTags()}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="description">
                            <span className="description-title">Теги:</span>
                            <textarea name="description" maxLength="875" onInput={this.changeInput} value={this.state.description || ''}></textarea>
                        </div>

                        <Button text="Сохранить" click={this.save}/>

                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileCart;