import { useEffect, useState } from "react";

const texts = ["Hi there...", "Let me introduce myself", "My name is..."];

function MainProfile() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index === texts.length) return;

    const currentText = texts[index];
    const typeSpeed = deleting ? 50 : 150; 
    
    if (subIndex === currentText.length + 1 && !deleting) {
      const timeout = setTimeout(() => setDeleting(true), 800);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  return (
    <section className="profile-section" id="profile">
      <div className="profile-darklayer"></div>
      <div className="myprofile-menu">
        <h2>Profile</h2>
      </div>
      {/* <div className="myprofile-menu-scroll">
          <div className="scroll-pic">
              <ion-icon name="home"></ion-icon>
          </div>
          <div className="scroll-desc">
            <p>Back to home</p>
          </div>
        </div> */}
      <div className="profile-container">
        <div className="profile-photo">
          <img src="/images/profilepic1.jpeg" alt="Hanif Profile" loading="lazy" decoding="async" />
        </div>
        <div className="profile-info">
          <h2 className="profile-typing">
            {texts[index].substring(0, subIndex)}
          </h2>
          <h1 className="profile-name">Rizki Hanif Prasetyo</h1>
          <h2 className="profile-role">Frontend Developer</h2>

          <p className="profile-desc">
            Hi, I'm Rizki! I'm a Frontend Developer who loves turning complex designs into smooth, user-friendly digital experiences. During my 6-month journey at BISA AI, I got my hands dirty building and redesigning over 200+ web pages across multiple production-level apps.
            <br />
            From working on Tampil.id (which handles national-scale events for government and enterprise clients) to crafting the UI for Flungo and Finsdemy, I focus on one thing: writing clean, maintainable code that looks great on any screen. I bridge the gap between creative UI and solid backend systems to make sure everything runs perfectly.
          </p>
        </div>
      </div>

      <div className="triangle-bg"></div>
    </section>
  );
}

export default MainProfile;
