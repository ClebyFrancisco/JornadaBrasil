import React from 'react';
import styles from './styles.module.scss';
import imagem1 from '../../../public/images/article/imagem1.png';

const Article = ({ imagem , title }:{imagem:string, title:string}) =>{
    return(
        <div className={styles.ArticleContainer} style={{
            backgroundImage: `linear-gradient(#00000051, #00000066), url(${imagem})`,
          }}>
            
            <p>{title}</p>

        </div>
    )
}
export default Article;