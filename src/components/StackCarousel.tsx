import "../styles/StackCarousel.css";

const stack = [
  { icon: "⟨⟩", name: "HTML/CSS",   category: "Frontend" },
  { icon: "◻", name: "TypeScript", category: "Full-Stack"     },
  { icon: "▣", name: "SQL",        category: "Backend"     },
  { icon: "△", name: "React",      category: "Frontend"       },
  { icon: "◎", name: "Next.js",    category: "Backend"       },
  { icon: "▲", name: "Express",    category: "Backend"       },
  { icon: "⬡", name: "Python",     category: "Backend" },
  { icon: "◆", name: "Docker",     category: "DevOps"         },
  { icon: "◉", name: "Node.js",    category: "Backend"        },
  { icon: "⟁", name: "Java",       category: "Backend"        },
];

function StackCarousel() {
  // Duplicamos el array para el loop infinito
  const items = [...stack, ...stack];

  return (
      <div className="carousel-wrapper">
        <div className="carousel-track">
          {items.map((item, i) => (
            <div className="stack-card" key={i}>
              <span className="stack-icon">{item.icon}</span>
              <span className="stack-name">{item.name}</span>
              <span className="stack-tag">{item.category}</span>
            </div>
          ))}
        </div>
      </div>
  );
}

export default StackCarousel;
