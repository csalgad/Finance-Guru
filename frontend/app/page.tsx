import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-50 text-gray-900">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b p-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <div className="text-sm font-medium bg-gray-200 px-3 py-1 rounded-full">User Profile</div>
        </header>
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <h3 className="text-gray-500 text-sm font-medium mb-2">Total Balance</h3>
              <p className="text-2xl font-bold">$0.00</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <h3 className="text-gray-500 text-sm font-medium mb-2">Monthly Expenses</h3>
              <p className="text-2xl font-bold">$0.00</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <h3 className="text-gray-500 text-sm font-medium mb-2">Monthly Income</h3>
              <p className="text-2xl font-bold">$0.00</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
