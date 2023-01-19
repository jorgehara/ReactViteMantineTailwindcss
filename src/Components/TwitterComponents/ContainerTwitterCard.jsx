import { TwitterCard } from "./TwitterCard";

function ContainerTwitterCard() {
  // const formatUserName = (userNAme) => `@${userNAme}`;

const users = [
  {
    userName: 'TroySchennum',
    name: 'Troy Schennum',
    isFollowing: true
  },
  {
    userName: 'dvassallo',
    name: 'Daniel Vassallo',
    isFollowing: false
  },{
    userName: 'rauchg',
    name: 'Guillermo Rauch',
    isFollowing: true
  },{
    userName: 'kentcdodds',
    name: 'Kent C. Dodds',
    isFollowing: false
  },
]


  return (
    <>
      <div className="ContainerTwitterCard">
        {/* <TwitterCard
          // formatUserName={formatUserName}
          // isFollowing dejo de ser props ahora es un State
          isFollowing={isFollowing}
          userName="TroySchennum"
          name="Troy Schennum"
        /> */}
       {
        users.map(user => {
          const {userName, isFollowing, name} = user;
          return(
            <TwitterCard
            key={userName}
            name={name}
            userName={userName}
            initialIsFollowing={isFollowing}
            >
            </TwitterCard>
          )
        })
       }
      </div>
    </>
  );
}

export default ContainerTwitterCard;
