export default function MdxLayout({ children }: { children: React.ReactNode }) {
    // Create any shared layout or styles here
    return (
      <div className="prose-zinc prose-lg prose max-w-none w-10/12 mx-auto">
        { children }
      </div>
    )
  }