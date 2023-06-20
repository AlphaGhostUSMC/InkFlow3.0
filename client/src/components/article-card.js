import React from 'react';
import articleImage from '../assets/img/pictures/fig1.jpg';
import authorAvatar from '../assets/img/icons/male-avatar.svg';

import '../assets/css/article-card.css';
import '../assets/css/Amiko.css';
import '../assets/css/Poppins.css';


const ArticleCard = () => {
  return (
    <div className="article-card">
      <img className="article-image" src={articleImage} alt="Article" />
      <a href="https://example.com">
        <h4 className="article-heading">Article: This is an article</h4>
      </a>
      <div className="DateTime-Container">
        <p className="dateTime">Jun 26, 2023 @ 5:48 PM</p>
      </div>
      <p className="article-paragraph">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
      </p>
      <div className="author-container">
        <img className="author-avatar" src={authorAvatar} alt="Author Avatar" />
        <a href="https://example.com">
          <p className="author-name">Author Name</p>
        </a>
      </div>
    </div>
  );
};

export default ArticleCard;
