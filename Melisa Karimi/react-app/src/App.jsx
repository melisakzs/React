import { useState, useEffect } from "react";

const App = () => {
  const tabs = [
    {
      id: 1,
      title: "TAB 1",
      contentTitle: "Content 1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint exercitationem vel illo quaerat. Assumenda, quis nobis laboriosam omnis ullam dolorem similique dolor iste, doloremque sint vel maxime laudantium neque sunt",
    },
    {
      id: 2,
      title: "TAB 2",
      contentTitle: "Content 2",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint exercitationem vel illo quaerat. Assumenda, quis nobis laboriosam omnis ullam dolorem similique dolor iste, doloremque sint vel maxime laudantium neque sunt",
    },
    {
      id: 3,
      title: "TAB 3",
      contentTitle: "Content 3",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint exercitationem vel illo quaerat. Assumenda, quis nobis laboriosam omnis ullam dolorem similique dolor iste, doloremque sint vel maxime laudantium neque sunt",
    },
    {
      id: 4,
      title: "TAB 4",
      contentTitle: "Content 4",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint exercitationem vel illo quaerat. Assumenda, quis nobis laboriosam omnis ullam dolorem similique dolor iste, doloremque sint vel maxime laudantium neque sunt",
    },
  ];

  const [activeTab, setActiveTab] = useState(() => {
    const savedTab = localStorage.getItem("activeTab");
    return savedTab ? Number(savedTab) : tabs[0].id;
  });

  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  return (
    <div>
      <h1>Tabs component with React</h1>
      <div>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              fontWeight: activeTab === tab.id ? "bold" : "normal",
              margin: "0 5px",
            }}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            style={{ display: activeTab === tab.id ? "block" : "none" }}
          >
            <h2>{tab.contentTitle}</h2>
            <p>{tab.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
