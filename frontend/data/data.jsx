// ---------------------------------------------------------------------------
// DASHBOARD SCREEN
// ---------------------------------------------------------------------------
const NAV_ITEMS = [
    { key: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { key: "departments", label: "Departments", icon: Building2 },
    { key: "csr", label: "CSR Activities", icon: Calendar },
    { key: "challenges", label: "Challenges", icon: Trophy },
    { key: "badges", label: "Badges", icon: Award },
    { key: "reports", label: "Reports", icon: FileBarChart2 },
    { key: "settings", label: "Settings", icon: Settings },
];

const usageData = [
    { month: "Jan", carbon: 45.2, csr: 120 },
    { month: "Feb", carbon: 42.8, csr: 145 },
    { month: "Mar", carbon: 40.5, csr: 190 },
    { month: "Apr", carbon: 38.1, csr: 210 },
    { month: "May", carbon: 35.6, csr: 250 },
    { month: "Jun", carbon: 32.4, csr: 290 },
    { month: "Jul", carbon: 30.1, csr: 320 },
];

const leaderboardData = [
    { rank: 1, name: "Engineering & Dev", dept: "Tech", points: "4,820", badges: "42 badges" },
    { rank: 2, name: "Sales & Accounts", dept: "Commercial", points: "4,150", badges: "38 badges" },
    { rank: 3, name: "Human Resources", dept: "HR", points: "3,890", badges: "32 badges" },
    { rank: 4, name: "Brand & Marketing", dept: "Creative", points: "3,420", badges: "28 badges" },
    { rank: 5, name: "Finance & Admin", dept: "Operations", points: "2,980", badges: "21 badges" },
];

const activity = [
    { id: 1, icon: Award, color: "#17B890", text: "Sarah Connor earned 'Carbon Warrior' badge", time: "5m ago" },
    { id: 2, icon: Calendar, color: "#0B5FA5", text: "Tree planting CSR event registration hit 100%", time: "30m ago" },
    { id: 3, icon: Trophy, color: "#E0A100", text: "Tech Department won the 'Commute Zero' challenge", time: "2h ago" },
    { id: 4, icon: Users, color: "#1483C9", text: "15 new employees joined CSR team activities", time: "4h ago" },
    { id: 5, icon: Leaf, color: "#17B890", text: "Monthly Carbon Emissions audit report published", time: "1d ago" },
];

const goals = [
    { label: "100% Employee participation in CSR", value: 78 },
    { label: "Net-zero Carbon footprint goal YTD", value: 65 },
    { label: "Sustainability challenges completed", value: 87 },
];