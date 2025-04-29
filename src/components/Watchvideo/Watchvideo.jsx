import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

import video1 from "../../assets/vid-1.mp4";
import video2 from "../../assets/vid-2.mp4";
import video3 from "../../assets/vid-3.mp4";
import video4 from "../../assets/vid-4.mp4";
import video5 from "../../assets/vid-5.mp4";
import video6 from "../../assets/vid-6.mp4";

import post1 from "../../assets/post-1-1.png";
import post2 from "../../assets/post-1-2.png";
import post3 from "../../assets/post-1-3.png";
import post4 from "../../assets/post-1-4.png";
import post5 from "../../assets/post-1-5.png";
import post6 from "../../assets/post-1-6.png";

const videos = [
  { id: 1, src: video1, poster: post1, title: "Complete HTML Tutorial (Part 01)" },
  { id: 2, src: video2, poster: post2, title: "Complete HTML Tutorial (Part 02)" },
  { id: 3, src: video3, poster: post3, title: "Complete HTML Tutorial (Part 03)" },
  { id: 4, src: video4, poster: post4, title: "Complete HTML Tutorial (Part 04)" },
  { id: 5, src: video5, poster: post5, title: "Complete HTML Tutorial (Part 05)" },
  { id: 6, src: video6, poster: post6, title: "Complete HTML Tutorial (Part 06)" },
];

const WatchVideo = () => {
  const { id } = useParams();
  const video = videos.find((v) => v.id === parseInt(id));

  const [comments, setComments] = useState([
    "Great video! Very informative.",
    "Thanks for sharing this tutorial!",
    "This helped me a lot. Keep up the good work!",
  ]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = (e) => {
    e.preventDefault();
    if (newComment.trim() === "") {
      alert("Comment cannot be empty!");
      return;
    }
    setComments([...comments, newComment]);
    setNewComment("");
  };

  if (!video) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <p className="text-2xl font-bold text-red-500">Video not found</p>
      </div>
    );
  }

  return (
    <section className="watch-video p-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen text-white">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

        <div className="lg:col-span-2">
          <div className="video-container bg-gray-800 rounded-lg shadow-lg p-4">
            <video
              src={video.src}
              controls
              poster={video.poster}
              className="w-full rounded-lg mb-4"
            ></video>
            <h1 className="text-2xl font-bold text-green-400 mb-2">{video.title}</h1>
            <p className="text-gray-400">
              Enjoy the video and enhance your skills. Feel free to explore other videos in the playlist.
            </p>
          </div>
        </div>


        <div className="next-videos bg-gray-800 rounded-lg shadow-lg p-4">
          <h2 className="text-xl font-bold text-green-400 mb-4">Next Videos</h2>
          <ul className="space-y-4">
            {videos
              .filter((v) => v.id !== video.id)
              .map((nextVideo) => (
                <li key={nextVideo.id} className="flex items-center gap-4">
                  <img
                    src={nextVideo.poster}
                    alt={nextVideo.title}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <Link
                      to={`/watch/${nextVideo.id}`}
                      className="text-green-400 font-bold hover:underline"
                    >
                      {nextVideo.title}
                    </Link>
                  </div>
                </li>
              ))}
          </ul>
        </div>

        <div className="comments-section lg:col-span-3 bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-green-400 mb-4">Comments</h2>
          <form onSubmit={handleAddComment} className="mb-6">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Add a comment..."
              rows="3"
            ></textarea>
            <button
              type="submit"
              className="mt-3 bg-green-400 text-black font-bold py-2 px-4 rounded-lg hover:bg-green-500 transition duration-300"
            >
              Post Comment
            </button>
          </form>
          <div className="comments-list space-y-4">
            {comments.length > 0 ? (
              comments.map((comment, index) => (
                <div
                  key={index}
                  className="comment bg-gray-700 p-4 rounded-lg shadow-md"
                >
                  <p className="text-gray-300">{comment}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-400">No comments yet. Be the first to comment!</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WatchVideo;