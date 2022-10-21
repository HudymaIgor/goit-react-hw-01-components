import BoardCard from "./BoardCard/BordCard";
import Statistic from "./Statistic/Statistic" ;
import user from "../user.json";
import data from "../data.json";

export const App = () => {
   return (
   <>
      <BoardCard
         key={user.username} 
         username={user.username}
         tag={user.tag}
         location={user.location}
         avatar={user.avatar}
         stats={user.stats}
/>
      <Statistic 
      key={data.id}
      title="Upload stats" 
      stats={data} />
      <Statistic 
      key={data.id}
      stats={data.percentage} />

   </>
   );
};
