import css from "../Statistic/Statistic.module.css";

const Statistic =({title, data}) =>{

   return (
<section className ={css.statistic}>

   {title&&<h2 className ={css.title}>{title}</h2>}

   <ul className ={css.statList}>
      <li className ={css.item}>
         <span className ={css.label}>.docx</span>
         <span className ={css.percentage}>{data}</span>
      </li>
      <li className ={css.item}>
         <span className ={css.label}>.mp3</span>
         <span className ={css.percentage}>{data}</span>
      </li>
      <li className ={css.item}>
         <span className ={css.label}>.pdf</span>
         <span className ={css.percentage}>{data}</span>
      </li>
      <li className ={css.item}>
         <span className ={css.label}>.mp4</span>
         <span className ={css.percentage}>{data}</span>
      </li>
   </ul>
</section>
   );
};

export default Statistic