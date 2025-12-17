import ProfileSummary from '../components/homepage-components/ProfileSummary.jsx';
import Statistics from '../components/homepage-components/Statistics.jsx';
import BadgeGrid from '../components/homepage-components/BadgeGrid.jsx';
import MissionList from '../components/homepage-components/MissionList.jsx';
import BlogPreview from '../components/homepage-components/BlogPreview.jsx';

// Main App Component
const ExplorerApp = ({ demoData }) => {
    return (
        <div className="min-h-screen bg-linear-to-br from-gray-50 to-blue-50">
            <main className="container mx-auto px-4 py-6 pb-24 md:pb-6">
                <ProfileSummary user={demoData.user} />
                <Statistics stats={demoData.stats} />
                <BadgeGrid badges={demoData.recentBadges} />
                <MissionList missions={demoData.missions} />
                <BlogPreview posts={demoData.blogPosts} />
            </main>
        </div>
    );
};

export default ExplorerApp;