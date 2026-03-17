export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white h-screen p-4 flex flex-col">
      <h2 className="text-xl font-bold mb-8">Finance Guru</h2>
      <nav className="flex-1">
        <ul className="space-y-4">
          <li><a href="#" className="hover:text-blue-400 transition-colors">Dashboard</a></li>
          <li><a href="#" className="hover:text-blue-400 transition-colors">Transactions</a></li>
          <li><a href="#" className="hover:text-blue-400 transition-colors">Settings</a></li>
        </ul>
      </nav>
    </aside>
  );
}
