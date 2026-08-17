interface FooterColumnProps {
  title: string;
  links: readonly { label: string; href: string }[];
}

export function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h3 className="mb-4 text-xl font-bold text-gray-800">{title}</h3>
      <ul className="space-y-3 text-lg text-gray-500">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="cursor-pointer transition-colors hover:text-red-500"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}