export default function UsersPage() {
  return (
    <div>
      This is Users Page That you have oppened ...{" "}
      <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-gray-400 border-t-transparent"
        role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div
        className="inline-block h-8 w-8 animate-ping rounded-full bg-gray-400 opacity-75"
        role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
