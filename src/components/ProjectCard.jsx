export default function ProjectCard({ title, description, image, link }) {
  return (
    <div
      className="
        bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-200
        rounded-lg shadow-lg overflow-hidden
        flex flex-col
        transform transition-transform duration-500
        hover:-translate-y-2 hover:scale-105 hover:shadow-2xl
      "
    >
      {/* 1) Fixed‐height header image */}
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover"
      />

      {/* 2) Padded container for title + text */}
      <div className="px-4 py-3 flex flex-col">
        {/* Title (always same height for one line) */}
        <h3 className="text-xl font-semibold mb-2">{title}</h3>

        {/*
          Fixed-height text box:
            - Use e.g. h-32 (8 rem). Adjust as you like.
            - overflow-y-auto to scroll if description is taller.
        */}
        <div className="h-32 overflow-y-auto text-sm mb-4">
          <p>{description}</p>
        </div>

        {/* 
          3) Button wrapper (no need for flex magic here, since the text box above is always h-32)
             The button itself is mx-auto to center horizontally.
        */}
        <a
          href={link}
          target="_blank"
          rel="noopener"
          className="
            mt-auto block mx-auto px-4 py-2 bg-teal-600 text-white rounded-full 
            hover:bg-teal-700 transition
          "
        >
          View Project
        </a>
      </div>
    </div>
  );
}