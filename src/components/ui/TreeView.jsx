import { useState } from "react";

function TreeView() {
  const [isExpanded, setIsExpanded] = useState({});

  const handleToggle = (id) => {
    setIsExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const data = [
    {
      id: 1,
      label: "Group title",
      level: 0,
      children: [
        {
          id: 2,
          label: "Option",
          level: 1,
          children: [
            { id: 3, label: "Item", level: 2 },
            { id: 4, label: "Item", level: 2 },
            { id: 5, label: "Item", level: 2 },
            { id: 6, label: "Item", level: 2 },
            { id: 7, label: "Item", level: 2 },
          ],
        },
        {
          id: 8,
          label: "Option",
          level: 1,
          children: [
            { id: 9, label: "Item", level: 2 },
            { id: 10, label: "Item", level: 2 },
            { id: 11, label: "Item", level: 2 },
            { id: 12, label: "Item", level: 2 },
            { id: 13, label: "Item", level: 2 },
          ],
        },
      ],
    },
  ];

  function renderTree(node) {
    const isOption = node.label === "Option";

    return (
      <div key={node.id} style={{ paddingLeft: `${node.level * 12}px` }}>
        <div
          className={`flex items-center gap-[2px] p-2 cursor-pointer rounded ${
            isExpanded[node.id] && isOption ? "bg-[#EBEBEB]" : ""
          }`}
          onClick={() => handleToggle(node.id)}
        >
          <span className="mr-2 text-[14px]">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.14645 4.64645C2.34171 4.45118 2.65829 4.45118 2.85355 4.64645L6 7.79289L9.14645 4.64645C9.34171 4.45118 9.65829 4.45118 9.85355 4.64645C10.0488 4.84171 10.0488 5.15829 9.85355 5.35355L6.35355 8.85355C6.15829 9.04882 5.84171 9.04882 5.64645 8.85355L2.14645 5.35355C1.95118 5.15829 1.95118 4.84171 2.14645 4.64645Z"
                fill="#616161"
              />
            </svg>
          </span>
          <span className="text-gray1 lg:text-[14px] md:text-xs">
            {node.label}
          </span>
        </div>
        {isExpanded[node.id] &&
          node.children &&
          node.children.map((childNode) => renderTree(childNode))}
      </div>
    );
  }

  return (
    <div className="h-screen w-[13vw]">
      {data.map((node) => renderTree(node))}
    </div>
  );
}

export default TreeView;
