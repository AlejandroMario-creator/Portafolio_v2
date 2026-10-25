const icons = {
  React: <><ellipse cx="16" cy="16" rx="13" ry="5" /><ellipse cx="16" cy="16" rx="13" ry="5" transform="rotate(60 16 16)" /><ellipse cx="16" cy="16" rx="13" ry="5" transform="rotate(120 16 16)" /><circle cx="16" cy="16" r="2.5" className="tech-icon-fill" /></>,
  JavaScript: <><path d="M5 5h22v22H5z" rx="3" /><path d="M16 12v8c0 2-1 3-3 3m6-1c1 1 4 1 4-1 0-2-4-2-4-5 0-2 2-3 4-2" /></>,
  TypeScript: <><path d="M5 5h22v22H5z" rx="3" /><path d="M9 13h9m-4.5 0v10m7-5v5m0-5h4m-4 2h3m-3 3h4" /></>,
  "Tailwind CSS": <><path d="M4 13c3-6 8-6 11-2 2 3 3 4 6 2s5-1 7 1c-3 6-8 6-11 2-2-3-3-4-6-2s-5 1-7-1Z" /><path d="M4 21c3-6 8-6 11-2 2 3 3 4 6 2s5-1 7 1c-3 6-8 6-11 2-2-3-3-4-6-2s-5 1-7-1Z" transform="translate(0 -5)" /></>,
  "Node.js": <><path d="m16 3 11 6v14l-11 6-11-6V9z" /><path d="M12 21v-9l8 9v-9" /></>,
  Express: <><path d="M5 7h14M5 16h21M5 25h14" /><circle cx="23" cy="7" r="3" className="tech-icon-fill" /><circle cx="7" cy="16" r="3" className="tech-icon-fill" /><circle cx="23" cy="25" r="3" className="tech-icon-fill" /></>,
  "Spring Boot": <><path d="M25 5C14 5 7 10 7 19c0 5 4 8 8 8 7 0 10-8 10-22Z" /><path d="M5 27c4-8 9-12 16-16M18 9l4 1" /></>,
  MySQL: <><path d="M7 22c-3-2-3-6 0-9l4-4c3-3 7-2 9 1l3 4c2 3 1 7-2 9" /><path d="M8 22c4-5 8-7 14-7m-7-5c1 3 1 5 0 7m-6 4h13" /></>,
  PSQL: <><path d="M8 12c0-5 4-8 8-8s8 3 8 8c0 4-2 6-5 8v5h-6v-5c-3-2-5-4-5-8Z" /><path d="M11 12h.1m10-.1h.1M13 17c2 1 4 1 6 0" /><path d="M7 13c-3 0-4 2-4 4s2 3 4 2m18-6c3 0 4 2 4 4s-2 3-4 2" /></>,
  Docker: <><path d="M4 19h23c-1 5-5 8-12 8-5 0-9-3-11-8Zm3-5h4v4H7zm5 0h4v4h-4zm5 0h4v4h-4zm-5-5h4v4h-4zm5 0h4v4h-4zm-5-5h4v4h-4z" /><path d="M25 12c2-1 4 0 4 2" /></>,
  Jmeter: <><path d="M5 24a12 12 0 1 1 22 0M16 17l6-6" /><circle cx="16" cy="17" r="2.5" className="tech-icon-fill" /><path d="M8 23h16" /></>,
  "Selenium IDE": <><path d="M16 3 28 10v12l-12 7L4 22V10z" /><path d="M21 11c-1-2-7-3-8 0-1 3 7 3 7 6s-6 4-9 1" /></>,
  Postman: <><circle cx="16" cy="16" r="12" /><circle cx="10" cy="20" r="2.5" className="tech-icon-fill" /><circle cx="21" cy="10" r="2.5" className="tech-icon-fill" /><circle cx="22" cy="23" r="2.5" className="tech-icon-fill" /><path d="m12 18 7-6m-7 9 8 1" /></>,
  Git: <><path d="m16 3 13 13-13 13L3 16z" /><circle cx="12" cy="12" r="2" className="tech-icon-fill" /><circle cx="20" cy="17" r="2" className="tech-icon-fill" /><circle cx="13" cy="22" r="2" className="tech-icon-fill" /><path d="M12 12v7c0 2 2 3 4 3m-4-10 5 5" /></>,
  "Metodologías ágiles": <><path d="M25 11a10 10 0 0 0-17-4L5 10m0-6v6h6M7 21a10 10 0 0 0 17 4l3-3m0 6v-6h-6" /><path d="M12 16h8m-4-4 4 4-4 4" /></>,
  "Arquitectura de software": <><rect x="12" y="3" width="8" height="8" rx="1" /><rect x="3" y="21" width="8" height="8" rx="1" /><rect x="21" y="21" width="8" height="8" rx="1" /><path d="M16 11v5m-9 5v-5h18v5" /></>,
};

export default function TechIcon({ name }) {
  return (
    <svg className="tech-icon" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {icons[name] ?? <><circle cx="16" cy="16" r="12" /><path d="M11 16h10m-5-5v10" /></>}
    </svg>
  );
}
