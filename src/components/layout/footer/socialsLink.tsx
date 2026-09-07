import { socialLinks } from "@/src/data/footer";

export function SocialLinks() {
  return (
    <div className="mb-6 flex gap-10 text-gray-400">
      {socialLinks.map(({ icon: Icon, href, label, hoverClass }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`transition-colors ${hoverClass}`}
        >
          <Icon className="h-12 w-12" />
        </a>
      ))}
    </div>
  );
}