export default function MdxLayout({ children }: { children: React.ReactNode }) {
    // Create any shared layout or styles here
    return (
      <div className="prose-lg prose dark:prose-invert max-w-none w-10/12 mx-auto mb-5 text-primary">
        { children }
      </div>
    )
  }