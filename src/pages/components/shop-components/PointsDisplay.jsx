const PointsDisplay = ({ points }) => {
    return (
        <div className="bg-linear-to-r from-orange-500 to-yellow-500 rounded-xl p-4 text-white shadow-lg mb-6">
            <div className="flex items-center justify-between">
                <div>
                    <div className="text-sm opacity-90">Punti Disponibili</div>
                    <div className="text-3xl font-bold">{points.available.toLocaleString()}</div>
                </div>
                <div className="text-right">
                    <div className="text-sm opacity-90">Totale Guadagnati</div>
                    <div className="text-xl font-semibold">{points.total.toLocaleString()}</div>
                </div>
            </div>
        </div>
    );
};

export default PointsDisplay;