import spotify_logo from "../assets/images/spotify_logo.svg";
import IconText from "../components/IconText";

const HomeComponent = () => {
  return (
    <div className="h-full w-full flex">
      {/* Sidebar Section */}
      <div className="h-full bg-black w-1/5 p-5 ">
        <div className="ml-3 mt-3"><img src={spotify_logo} alt="Spotify" width={125} />
        </div>
        <div className="mt-10">
            <IconText iconName={"material-symbols:home-outline"} label={"Home"} active={"True"}/>
            <IconText iconName={"material-symbols:search"} label={"Search"}/>
            <IconText iconName={"fluent:library-28-regular"} label={"My Library"}/>

        </div>


        <div className="mt-10">
            <IconText iconName={"material-symbols:add-box"} label={"Create Playlist"}/>
            <IconText iconName={"mdi:heart-box"} label={"Liked Songs"}/>

        </div>
      </div>

      {/* Main Content Section */}
      <div className="w-4/5">
        {/* Add content here */}
      </div>
    </div>
  );
};

export default HomeComponent;
