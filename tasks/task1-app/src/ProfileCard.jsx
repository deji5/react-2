

function ProfileCard() {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
      <div className="flex h-24">
        <div className="w-1/3 bg-green-600"></div>
        <div className="w-1/3 bg-white"></div>
        <div className="w-1/3 bg-green-600"></div>
      </div>

      <div className="flex justify-center -mt-12">
        <img
          src="https://via.placeholder.com/100"
          alt="User avatar"
          className="w-24 h-24 rounded-full border-4 border-white shadow-md"
        />
      </div>

      <div className="text-center mt-4 px-4">
        <h2 className="text-xl font-semibold text-gray-800">Adedeji Samuel</h2>
        <p className="text-sm text-gray-500">Ai Developer</p>
        <p className="text-sm text-gray-400 mt-1">Ogun, Nigeria</p>
      </div>

      <div className="flex justify-between text-center mt-5 px-6">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-800">1.2K</h3>
          <p className="text-sm text-gray-500">Followers</p>
        </div>
        <div className="flex-1 border-l border-r border-gray-200">
          <h3 className="text-lg font-bold text-gray-800">250</h3>
          <p className="text-sm text-gray-500">Posts</p>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-800">3.5K</h3>
          <p className="text-sm text-gray-500">Likes</p>
        </div>
      </div>

      <div className="mt-5 px-6">
        <p className="text-gray-600 text-sm leading-relaxed">
          Passionate about building scalable web applications and improving user
          experience. Love traveling, coding, and networking.
        </p>
      </div>

      <div className="text-center my-6">
        <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-full shadow-md transition duration-200">
          Follow
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
