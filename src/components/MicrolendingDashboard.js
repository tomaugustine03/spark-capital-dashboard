import { useState } from 'react';
import {
    Bell,
    User,
    Home,
    FileText,
    TrendingUp,
    MessageSquare,
    BarChart2,
    PlusCircle,
    Settings,
    DollarSign,
    Calendar,
    CreditCard,
    Clock,
    AlertCircle,
    ChevronRight,
    ChevronLeft,
    Menu,
    X
} from 'lucide-react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
    PieChart,
    Pie,
    Cell,
    Legend,
    LineChart,
    Line
} from 'recharts';

export default function MicrolendingDashboard() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [activeTab, setActiveTab] = useState('home');

    // Sample data for charts
    const revenueData = [
        { month: 'Jan', revenue: 24000, repayments: 10000 },
        { month: 'Feb', revenue: 26000, repayments: 10000 },
        { month: 'Mar', revenue: 25000, repayments: 10000 },
        { month: 'Apr', revenue: 28000, repayments: 10000 },
        { month: 'May', revenue: 32000, repayments: 12000 },
        { month: 'Jun', revenue: 34000, repayments: 12000 },
        { month: 'Jul', revenue: 38000, repayments: 12000 },
    ];

    const investorContributions = [
        { name: 'Alpha Investments', value: 45000 },
        { name: 'Beta Capital', value: 25000 },
        { name: 'Gamma Ventures', value: 15000 },
        { name: 'Delta Fund', value: 10000 },
        { name: 'Epsilon Group', value: 5000 },
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

    const notifications = [
        { id: 1, title: 'New investor message', description: 'Alpha Investments has sent you a message', time: '5 mins ago' },
        { id: 2, title: 'Payment reminder', description: 'Your next payment is due in 5 days', time: '2 hours ago' },
        { id: 3, title: 'Revenue sharing update', description: 'Your revenue sharing payment was successful', time: '1 day ago' },
    ];

    const recentTransactions = [
        { id: 1, type: 'Loan Repayment', amount: '$2,500', date: '15 Apr 2025', status: 'Completed' },
        { id: 2, type: 'Revenue Share', amount: '$1,800', date: '10 Apr 2025', status: 'Completed' },
        { id: 3, type: 'Loan Repayment', amount: '$2,500', date: '15 Mar 2025', status: 'Completed' },
    ];

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex h-screen bg-gray-50 text-gray-800">
            {/* Sidebar */}
            <div className={`bg-gray-900 text-white transition-all duration-300 ease-in-out ${isSidebarOpen ? 'w-64' : 'w-20'}`}>
                <div className="p-4 flex items-center justify-between">
                    {isSidebarOpen ? (
                        <>
                            <div className="flex items-center">
                                <div className="bg-blue-500 w-8 h-8 rounded-md flex items-center justify-center text-white font-bold">SC</div>
                                <span className="ml-2 font-semibold text-lg">Spark Capital</span>
                            </div>
                            <button onClick={toggleSidebar} className="text-gray-400 hover:text-white">
                                <ChevronLeft size={20} />
                            </button>
                        </>
                    ) : (
                        <>
                            <div className="bg-blue-500 w-8 h-8 rounded-md flex items-center justify-center text-white font-bold">SC</div>
                            <button onClick={toggleSidebar} className="text-gray-400 hover:text-white">
                                <ChevronRight size={20} />
                            </button>
                        </>
                    )}
                </div>

                <nav className="px-2 pt-4">
                    <SidebarLink text="Home" icon={<Home size={20} />} active={activeTab === 'home'} onClick={() => setActiveTab('home')} isExpanded={isSidebarOpen} />
                    <SidebarLink text="Loan Overview" icon={<FileText size={20} />} active={activeTab === 'loan'} onClick={() => setActiveTab('loan')} isExpanded={isSidebarOpen} />
                    <SidebarLink text="Revenue Sharing" icon={<TrendingUp size={20} />} active={activeTab === 'revenue'} onClick={() => setActiveTab('revenue')} isExpanded={isSidebarOpen} />
                    <SidebarLink text="Investor Updates" icon={<MessageSquare size={20} />} active={activeTab === 'investors'} onClick={() => setActiveTab('investors')} isExpanded={isSidebarOpen} />
                    <SidebarLink text="Reports & Analytics" icon={<BarChart2 size={20} />} active={activeTab === 'reports'} onClick={() => setActiveTab('reports')} isExpanded={isSidebarOpen} />
                    <SidebarLink text="Funding Requests" icon={<PlusCircle size={20} />} active={activeTab === 'funding'} onClick={() => setActiveTab('funding')} isExpanded={isSidebarOpen} />
                    <SidebarLink text="Settings" icon={<Settings size={20} />} active={activeTab === 'settings'} onClick={() => setActiveTab('settings')} isExpanded={isSidebarOpen} />
                </nav>

                <div className="absolute bottom-0 w-full p-4 bg-gray-800">
                    <div className="flex items-center">
                        <div className="bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center">
                            <User size={16} className="text-white" />
                        </div>
                        {isSidebarOpen && (
                            <div className="ml-2">
                                <p className="text-sm font-medium">John's Coffee Shop</p>
                                <p className="text-xs text-gray-400">Business Account</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <header className="bg-white shadow-sm z-10">
                    <div className="flex items-center justify-between p-4">
                        <div className="flex items-center md:hidden">
                            <button onClick={toggleSidebar} className="text-gray-600">
                                <Menu size={24} />
                            </button>
                        </div>

                        <div className="flex items-center">
                            <h2 className="text-lg font-semibold">Dashboard</h2>
                            <div className="ml-4 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                                Loan Balance: $75,000
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <button className="relative text-gray-600 hover:text-gray-800">
                                <Bell size={20} />
                                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                            </button>
                            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                                <User size={16} className="text-gray-600" />
                            </div>
                        </div>
                    </div>
                </header>

                {/* Main Dashboard Content */}
                <main className="flex-1 overflow-y-auto p-4">
                    {/* Top Card Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <DashboardCard
                            title="Loan Balance"
                            value="$75,000"
                            subtext="Next payment: $2,500 on May 15, 2025"
                            icon={<DollarSign className="text-blue-500" />}
                        />
                        <DashboardCard
                            title="Revenue Sharing Progress"
                            value="$22,800 / $100,000"
                            subtext="22.8% of total repayment complete"
                            icon={<TrendingUp className="text-green-500" />}
                            progress={22.8}
                        />
                        <DashboardCard
                            title="Next Payment Due"
                            value="15 May 2025"
                            subtext="$2,500 monthly payment"
                            icon={<Calendar className="text-purple-500" />}
                        />
                    </div>

                    {/* Middle Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
                        {/* Revenue Chart */}
                        <div className="bg-white p-4 rounded-lg shadow lg:col-span-2">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-semibold">Revenue & Repayments</h3>
                                <select className="text-sm border rounded px-2 py-1">
                                    <option>Last 6 Months</option>
                                    <option>Last Year</option>
                                    <option>All Time</option>
                                </select>
                            </div>
                            <div className="h-64">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart
                                        data={revenueData}
                                        margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                                        <XAxis dataKey="month" stroke="#888" fontSize={12} />
                                        <YAxis stroke="#888" fontSize={12} tickFormatter={(value) => `$${value / 1000}k`} />
                                        <Tooltip formatter={(value) => [`$${value}`, 'Amount']} />
                                        <Area
                                            type="monotone"
                                            dataKey="revenue"
                                            stackId="1"
                                            stroke="#4f46e5"
                                            fill="#c7d2fe"
                                            name="Revenue"
                                        />
                                        <Area
                                            type="monotone"
                                            dataKey="repayments"
                                            stackId="2"
                                            stroke="#10b981"
                                            fill="#d1fae5"
                                            name="Repayments"
                                        />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        {/* Investor Contributions */}
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="font-semibold mb-4">Investor Contributions</h3>
                            <div className="h-64">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={investorContributions}
                                            cx="50%"
                                            cy="50%"
                                            labelLine={false}
                                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                            outerRadius={80}
                                            fill="#8884d8"
                                            dataKey="value"
                                        >
                                            {investorContributions.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Pie>
                                        <Tooltip formatter={(value) => [`$${value}`, 'Amount']} />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        {/* Recent Transactions */}
                        <div className="bg-white p-4 rounded-lg shadow lg:col-span-2">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-semibold">Recent Transactions</h3>
                                <button className="text-sm text-blue-600 hover:underline">View All</button>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="min-w-full">
                                    <thead>
                                    <tr className="border-b border-gray-200">
                                        <th className="text-left py-3 px-2 text-sm font-medium text-gray-500">TYPE</th>
                                        <th className="text-left py-3 px-2 text-sm font-medium text-gray-500">AMOUNT</th>
                                        <th className="text-left py-3 px-2 text-sm font-medium text-gray-500">DATE</th>
                                        <th className="text-left py-3 px-2 text-sm font-medium text-gray-500">STATUS</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {recentTransactions.map((transaction) => (
                                        <tr key={transaction.id} className="border-b border-gray-100">
                                            <td className="py-3 px-2 text-sm">
                                                <div className="flex items-center">
                                                    {transaction.type === 'Loan Repayment' ? (
                                                        <CreditCard size={16} className="text-blue-500 mr-2" />
                                                    ) : (
                                                        <TrendingUp size={16} className="text-green-500 mr-2" />
                                                    )}
                                                    {transaction.type}
                                                </div>
                                            </td>
                                            <td className="py-3 px-2 text-sm font-medium">{transaction.amount}</td>
                                            <td className="py-3 px-2 text-sm text-gray-500">{transaction.date}</td>
                                            <td className="py-3 px-2 text-sm">
                          <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                            {transaction.status}
                          </span>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Notifications */}
                        <div className="bg-white p-4 rounded-lg shadow">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-semibold">Recent Notifications</h3>
                                <button className="text-sm text-blue-600 hover:underline">Mark All Read</button>
                            </div>
                            <div className="space-y-3">
                                {notifications.map((notification) => (
                                    <div key={notification.id} className="p-3 rounded-lg bg-gray-50 border-l-4 border-blue-500">
                                        <div className="flex items-start">
                                            <div className="mr-3">
                                                <AlertCircle size={16} className="text-blue-500" />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-sm font-medium">{notification.title}</h4>
                                                <p className="text-xs text-gray-500 mt-1">{notification.description}</p>
                                                <p className="text-xs text-gray-400 mt-2 flex items-center">
                                                    <Clock size={12} className="mr-1" />
                                                    {notification.time}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </main>

                {/* Footer */}
                <footer className="bg-white p-4 border-t text-center text-xs text-gray-500">
                    <div className="flex justify-between items-center">
                        <div>© 2025 Spark Capital Lending. All rights reserved.</div>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-blue-600">Terms of Service</a>
                            <a href="#" className="hover:text-blue-600">Privacy Policy</a>
                            <a href="#" className="hover:text-blue-600">Contact Support</a>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}

// Helper Components
function SidebarLink({ text, icon, active, onClick, isExpanded }) {
    return (
        <button
            onClick={onClick}
            className={`flex items-center w-full p-3 mb-1 rounded-lg transition-colors ${
                active ? 'bg-blue-600 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'
            }`}
        >
            <div className="flex items-center justify-center">
                {icon}
            </div>
            {isExpanded && <span className="ml-3 text-sm">{text}</span>}
        </button>
    );
}

function DashboardCard({ title, value, subtext, icon, progress }) {
    return (
        <div className="bg-white p-5 rounded-lg shadow">
            <div className="flex items-start justify-between">
                <div>
                    <h3 className="text-sm font-medium text-gray-500">{title}</h3>
                    <p className="text-2xl font-semibold mt-1">{value}</p>
                    <p className="text-xs text-gray-500 mt-1">{subtext}</p>

                    {progress && (
                        <div className="w-full h-1 bg-gray-200 rounded-full mt-3">
                            <div
                                className="h-1 bg-blue-600 rounded-full"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                    )}
                </div>
                <div className="p-2 rounded-lg bg-gray-100">
                    {icon}
                </div>
            </div>
        </div>
    );
}