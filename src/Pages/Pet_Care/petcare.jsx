import React from "react";
import { useState } from "react";
import CardItem from './CardItem';
import { FaTwitter } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaMailBulk } from 'react-icons/fa'
import { IconContext } from "react-icons";
import './petcare.css'

export const PetCare = (props) => {
    return (
        <div className="main">
            <nav className="navbarHome">
                <div className="topLogo">
                    <h1 className="pawshunger">Paws Hunger</h1>
                </div>
                <div className="menu">
                    <a className="menuItem" href="/">
                        HOME
                    </a>
                    <a className="menuItem" href="#">
                        Pet Care
                    </a>
                    <a className="menuItem" href="#">
                        MENU
                    </a>
                    <a className="menuItem" href="#">
                        MENU
                    </a>
                    <a className="menuItem" href="#">
                        FAQ
                    </a>
                    <a className="menuItem" href="#">
                        CONTACT
                    </a>
                </div>
            </nav>

            <div className='cards'>
                <h1>Pet Blogs</h1>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
                            <CardItem
                                src='images/img-9.jpg'
                                text='Potty Training your rescue dog'
                                label='Most viewed'
                                path='https://www.rescuedogs101.com/potty-training-rescue-dog/'
                            />
                            <CardItem
                                src='images/img-2.jpg'
                                text='Kelowna dog rescue selling blueberry bushes in fundraiser'
                                label='Most viewed'
                                path='https://globalnews.ca/news/8949419/kelowna-dog-rescue-selling-blueberry-bushes-in-fundraiser/'
                            />
        
                            <CardItem
                                src='images/img-3.jpg'
                                text='Maxi’s Owner Passed Away—Can You Love and Comfort Her?'
                                label='Recent'
                                path='https://www.peta.org/blog/maxi-dog-peta-adoptable-animals/'
                            />
                            <CardItem
                                src='images/img-4.jpg'
                                text='Meet the Dog Who Helped Inspire a National News Story: Lady, Finally Unchained'
                                label='Recent'
                                path='https://www.peta.org/blog/meet-the-dog-who-helped-inspire-a-national-news-story-lady-finally-unchained/'
                            />
                            <CardItem
                                src='images/img-8.jpg'
                                text='Top reasons to adopt pets'
                                label='Top'
                                path='https://www.humanesociety.org/resources/top-reasons-adopt-pets'
                            />
                        </ul>
                    </div>
                </div>
            </div>

            <div className='cards'>
            <h1>Diet for pets</h1>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
                            <CardItem
                                src='images/img-9.jpg'
                                text='Potty Training your rescue dog'
                                label='Most viewed'
                                path='https://www.rescuedogs101.com/potty-training-rescue-dog/'
                            />
                            <CardItem
                                src='images/img-2.jpg'
                                text='Kelowna dog rescue selling blueberry bushes in fundraiser'
                                label='Most viewed'
                                path='https://globalnews.ca/news/8949419/kelowna-dog-rescue-selling-blueberry-bushes-in-fundraiser/'
                            />
        
                            <CardItem
                                src='images/img-3.jpg'
                                text='Maxi’s Owner Passed Away—Can You Love and Comfort Her?'
                                label='Recent'
                                path='https://www.peta.org/blog/maxi-dog-peta-adoptable-animals/'
                            />
                            <CardItem
                                src='images/img-4.jpg'
                                text='Meet the Dog Who Helped Inspire a National News Story: Lady, Finally Unchained'
                                label='Recent'
                                path='https://www.peta.org/blog/meet-the-dog-who-helped-inspire-a-national-news-story-lady-finally-unchained/'
                            />
                            <CardItem
                                src='images/img-8.jpg'
                                text='Top reasons to adopt pets'
                                label='Top'
                                path='https://www.humanesociety.org/resources/top-reasons-adopt-pets'
                            />
                        </ul>
                    </div>
                </div>
            </div>

            <div className='cards'>
            <h1>Love for pets</h1>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
                            <CardItem
                                src='images/img-9.jpg'
                                text='Potty Training your rescue dog'
                                label='Most viewed'
                                path='https://www.rescuedogs101.com/potty-training-rescue-dog/'
                            />
                            <CardItem
                                src='images/img-2.jpg'
                                text='Kelowna dog rescue selling blueberry bushes in fundraiser'
                                label='Most viewed'
                                path='https://globalnews.ca/news/8949419/kelowna-dog-rescue-selling-blueberry-bushes-in-fundraiser/'
                            />
        
                            <CardItem
                                src='images/img-3.jpg'
                                text='Maxi’s Owner Passed Away—Can You Love and Comfort Her?'
                                label='Recent'
                                path='https://www.peta.org/blog/maxi-dog-peta-adoptable-animals/'
                            />
                            <CardItem
                                src='images/img-4.jpg'
                                text='Meet the Dog Who Helped Inspire a National News Story: Lady, Finally Unchained'
                                label='Recent'
                                path='https://www.peta.org/blog/meet-the-dog-who-helped-inspire-a-national-news-story-lady-finally-unchained/'
                            />
                            <CardItem
                                src='images/img-8.jpg'
                                text='Top reasons to adopt pets'
                                label='Top'
                                path='https://www.humanesociety.org/resources/top-reasons-adopt-pets'
                            />
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footerDivHome">
                <footer className="footerHome">
                    <IconContext.Provider value={{ size: "3em" }}>
                        <div className="shareicons">
                            <a className="socialIcons" href="#">
                                <FaFacebook className="facebook" />
                            </a>
                            <a className="socialIcons" href="#">
                                <FaInstagram className="insta" />
                            </a>
                            <a className="socialIcons" href="#">
                                <FaTwitter className="twitter" />
                            </a>
                            <a className="socialIcons" href="#">
                                <FaLinkedin className="linkedin" />
                            </a>
                            <a className="socialIcons" href="#">
                                <FaMailBulk />
                            </a>
                        </div>
                    </IconContext.Provider>
                    <p className="footerText">company name© 2022 All rights reserved.</p>
                </footer>
            </div>

        </div>
    )
}