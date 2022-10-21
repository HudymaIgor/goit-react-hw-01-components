import css from './BordCard.module.css';
import defoultImg from '../DefoultImg.jpg';

const BoardCard = ({ avatar = defoultImg, username, tag, location, stats}) =>{
   const {followers, views, likes} = stats;

   //const Labels = ['f', 'in','G+', 'Я', 'B'];
   
   return (
      <div className={css.profile}>
         <div className={css.description}> 
            <img
            src={avatar}
            alt="User avatar"
            className={css.avatar}
            />
            <p className={css.name}>{username}</p>
            <p className="tag">@{tag}</p>
            <div className={css.labelContainer}>
               {/*{Labels.map(label => (
                  <span className={css.label}>{label}</span>
               ))}*/}
            </div>
            <p className="location">{location}</p>
         </div>     
         <ul className={css.stats}>
                  <li className={css.statsBox}>
                     <span className="label">Followers: </span>
                     <span className={css.quantity}>{followers}</span>
                  </li>
                  <li className={css.statsBox}>
                     <span className="label">Views: </span>
                     <span className={css.quantity}>{views}</span>
                  </li>
                  <li className={css.statsBox}>
                     <span className="label">Likes: </span>
                     <span className={css.quantity}>{likes}</span>
                  </li>
         </ul>
      
      </div>   
   );
}
export default BoardCard   