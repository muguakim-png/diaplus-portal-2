import { db } from "./firebase-config.js";
import { collection, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";

async function loadRepos() {
  const repoList = document.getElementById("repo-list");
  const querySnapshot = await getDocs(collection(db, "repositories"));
  repoList.innerHTML = "";
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const btn = document.createElement("button");
    btn.textContent = data.name;
    btn.onclick = () => loadVideo(data.videoUrl);
    repoList.appendChild(btn);
  });
}

function loadVideo(url) {
  const player = document.getElementById("videoPlayer");
  player.src = url;
  player.load();
  player.play();
}

async function addRepo() {
  const name = prompt("Repository name:");
  const videoUrl = prompt("Video URL:");
  if (name && videoUrl) {
    await addDoc(collection(db, "repositories"), { name, videoUrl });
    loadRepos();
  }
}

window.onload = loadRepos;
