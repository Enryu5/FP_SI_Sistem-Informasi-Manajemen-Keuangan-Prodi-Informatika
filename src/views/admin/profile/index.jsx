import Banner from "./components/Banner";
import Information from "./components/Information";
import Security from "./components/Security";

const ProfileOverview = () => {
  return (
    <div className="flex w-full flex-col items-center mt-5">
      <div className="w-full max-w-12xl bg-white p-5 rounded-lg shadow-lg" >
        <div className="w-full mt-3 flex h-fit flex-col gap-5 lg:grid lg:grid-cols-12">
          <div className="col-span-12 lg:!mb-0">
            <Banner />
          </div>

          <div className="col-span-12 lg:!mb-0">
            <Information />
          </div>

          <div className="col-span-12 lg:!mb-0">
            <Security />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileOverview;
