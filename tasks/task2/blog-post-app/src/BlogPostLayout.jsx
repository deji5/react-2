import React from "react";

export default function BlogPostLayout() {
  const relatedPosts = [
    {
      title: "10 Nigerian Dishes You Must Try",
      img: "https://images.unsplash.com/photo-1601050690597-1b6b5c8db8a8?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "The Rise of Lagos Fashion Scene",
      img: "https://images.unsplash.com/photo-1600093463592-8b3b6d7c7d74?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Why Palm Wine Is a Cultural Treasure",
      img: "https://images.unsplash.com/photo-1632975382404-7e9f739d5b17?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Featured Image */}
      <div className="relative w-full h-72 sm:h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1598514982846-9987b0664909?auto=format&fit=crop&w=1600&q=80"
          alt="Featured"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-end p-6 sm:p-10">
          <h1 className="text-3xl sm:text-5xl font-bold text-white drop-shadow-lg">
            The Art of Perfect Jollof: A Taste of Nigeria
          </h1>
        </div>
      </div>

      {/* Article Meta + Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="text-gray-600 text-sm mb-6">
          By <span className="font-semibold text-green-700">Tunde Alabi</span> •
          <span className="ml-1">Nov 10, 2025</span> • <span className="ml-1">6 min read</span>
        </div>

        {/* Main layout: Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 leading-relaxed text-lg space-y-6">
            <p>
              Nigerian Jollof rice isn’t just food—it’s a symbol of pride,
              creativity, and culture. Each grain tells a story of spice,
              community, and joy shared at every celebration.
            </p>
            <p>
              The secret lies in the smoky flavor, the rich tomato blend,
              and the tender perfection of long-grain rice. From Lagos to
              Abuja, every cook swears by their “special” recipe—and
              that’s the beauty of it.
            </p>
            <p>
              To cook the perfect Jollof, you need patience, passion, and
              pepper—lots of it! Pair it with fried plantains, coleslaw,
              or grilled chicken, and you have a meal fit for royalty.
            </p>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <h2 className="text-xl font-bold mb-4 text-green-700">
              Related Posts
            </h2>
            <div className="space-y-5">
              {relatedPosts.map((post, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-4 bg-white rounded-xl shadow-sm hover:shadow-md transition p-3"
                >
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <p className="font-medium text-gray-700 text-sm hover:text-green-700 cursor-pointer">
                    {post.title}
                  </p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
