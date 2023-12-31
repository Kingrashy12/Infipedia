import axios from "axios";
import { BASE_URL } from "../hooks/api";

export async function ViewVideo(userId, videoId) {
  const response = await axios.patch(`${BASE_URL}/videos/view/one`, {
    userId: userId,
    videoId: videoId,
  });
  return response?.data;
}

export async function DownloadVideo(userId, videoId) {
  const response = await axios.patch(`${BASE_URL}/videos/download/one`, {
    userId: userId,
    videoId: videoId,
  });
  return response?.data;
}

export async function FetchVideoViews(vId) {
  const response = await axios.get(`${BASE_URL}/videos/views/all/${vId}`);
  return response?.data;
}

export async function FetchVideoLikes(vId) {
  const response = await axios.get(`${BASE_URL}/videos/likes/all/${vId}`);
  return response?.data;
}

export async function FetchPostLikes(postId) {
  const response = await axios.get(`${BASE_URL}/posts/likes/all/${postId}`);
  return response?.data;
}
export async function FetchPostComments(postId) {
  const response = await axios.get(`${BASE_URL}/posts/comments/all/${postId}`);
  return response?.data;
}

export async function FetchUsersWhoLiked(videoId) {
  const response = await axios.get(
    `${BASE_URL}/videos/like/user/liked/${videoId}`
  );
  return response?.data;
}

export async function FetchTrendingVideos() {
  const response = await axios.get(`${BASE_URL}/videos/trend/all`);
  return response?.data;
}

export async function getCommunity(slug) {
  const response = await axios.get(`${BASE_URL}/community/one/${slug}`);
  return response?.data;
}

export async function getUnreadNotification(username) {
  const response = await axios.get(`${BASE_URL}/notification/get/${username}`);
  return response?.data;
}
