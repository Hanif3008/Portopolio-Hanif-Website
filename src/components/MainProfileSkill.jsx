import { useState } from "react";

const skills = {
    Frontend: [
        { icon: "logo-html5", name: "HTML" },
        { icon: "logo-css3", name: "CSS" },
        { icon: "logo-react", name: "ReactJS" },
        { img: "/images/nextjs2.png", name: "Javascript" },
        { img: "/images/tailwind3.png", name: "Tailwind" },
    ],
    Backend: [
        { icon: "logo-nodejs", name: "NodeJS" },
        { img: "/images/express.png", name: "Express" },
        { img: "/images/mysql.png", name: "MySQL" },
        { icon: "logo-laravel", name: "Laravel" },
        { img: "/images/php.png", name: "CodeIgniter" },
    ],
    Utilities: [
        { icon: "logo-github", name: "Github" },
        { icon: "logo-gitlab", name: "Gitlab" },
        { icon: "logo-figma", name: "Figma" },
        { img: "/images/jira.png", name: "Jira" },
    ],
};

const categories = ["All", "Frontend", "Backend", "Utilities"];

function MainProfileSkill() {
    const [activeCategory, setActiveCategory] = useState("All");

    const getDisplayedSkills = () => {
        if (activeCategory === "All") {
            return Object.entries(skills);
        } else {
            return [[activeCategory, skills[activeCategory]]];
        }
    };

    return (
        <div className="profile-skill-section">
            {/* <div className="profile-darklayer"></div> */}
            <div className="profile-skill-container">
                <div className="profile-skill-title">
                    <h1>Programming Skills</h1>
                    <p>List Of My Skill Set</p>
                </div>

                {/* Category Selector */}
                <div className="profile-skill-category">
                    <div className="profile-skill-item">
                        <ul>
                            {categories.map((cat) => (
                                <li
                                    key={cat}
                                    className={activeCategory === cat ? "active" : ""}
                                    onClick={() => setActiveCategory(cat)}
                                >
                                    {cat}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Skill Groups */}
                {getDisplayedSkills().map(([category, items]) => (
                    <div key={category} className="profile-skill-sets">
                        <div className="profile-sets-title">
                            <h2>{category}</h2>
                        </div>
                        <div className="profile-sets-items">
                            {items.map((skill, i) => (
                                <div key={i} className="profile-sets-item">
                                    {skill.icon ? (
                                        <ion-icon name={skill.icon}></ion-icon>
                                    ) : (
                                        <img src={skill.img} alt={skill.name} loading="lazy" decoding="async" />
                                    )}
                                    <p>{skill.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MainProfileSkill;
