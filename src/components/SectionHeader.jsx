export default function SectionHeader({ title, subtitle, center = true }) {
  return (
    <div className={`mb-8 ${center ? "text-center" : "text-start"}`}>
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">{title}</h2>
      {subtitle && <p className="mt-2 text-gray-500 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}
