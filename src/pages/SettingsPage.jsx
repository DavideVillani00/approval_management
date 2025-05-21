export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-5 p-5">
      <h1>Settings</h1>
      <div className="flex items-center justify-between h-10 p-2 border-b-2 border-divider">
        <span>Language</span>
        <select>
          <option value="en">English</option>
          <option value="it">Italian</option>
        </select>
      </div>
      <div className="flex items-center justify-between h-10 p-2 border-b-2 border-divider">
        <span>Dark Mode</span>
        <div className="bg-amber-400 w-20 h-8 rounded-2xl"></div>
      </div>
    </div>
  );
}
