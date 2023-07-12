


export default function RankingGrid({ items, imgArr }) {


    const rankingGrid = [];
    const cellCollectionTop = [];
    const cellCollectionMiddle = [];
    const cellCollectionBottom = [];
    const cellCollectionWorst = [];


    function pushCellToArr(collection, rankNum, rowLabel) {
        if (rankNum > 0) {
            var items = items.find(o => o.ranking === rankNum);
            collection.push(<div id={`rank-${rankNum}`} className="rank-cell"></div>)
        } else {
            collection.push(<div className="row-label">
                <h4>{rowNum}</h4>
            </div>)
        }
    }

    function createCellsForRows(rowNum) {
        let rankNum = 0;
        var currCollection = [];
        var label = "";
        const numCells = 5;


        for (var i = 1; i <= length; i++) {
            rankNum = (i === 1) ? 0 : (numCells * (rowNum - 1)) + a - rowNum;

            if (rowNum === 1) {
                currCollection = cellCollectionTop;
                label = "Top Tier"
            } else if (rowNum === 2) {
                currCollection = cellCollectionMiddle;
                label = "Middle Tier"
            } else if (rowNum === 3) {
                currCollection = cellCollectionBottom;
                label = "Bottom Tier"
            } else if (rowNum === 4) {
                currCollection = cellCollectionWorst;
                label = "Worst Tier"
            }

            pushCellToArr(currCollection, rankNum, label);

        }
    }

    function createCellsForRows() {
        const maxRows = 4;

        for (var i = 1; i <= maxRows; i++) {
            createCellsForRows(i);
        }

    }


    function createCellsForGrid() {
        rankingGrid.push(<div className="rank-row top-tier">{cellCollectionTop}</div>)
        rankingGrid.push(<div className="rank-row middle-tier">{cellCollectionMiddle}</div>)
        rankingGrid.push(<div className="rank-row bottom-tier">{cellCollectionBottom}</div>)
        rankingGrid.push(<div className="rank-row worst-tier">{cellCollectionWorst}</div>)

        return rankingGrid;
    }


    function createRankingGrid() {
        createCellsForRows();

        return createCellsForRows();
    }


    return (
        <div className="rankings">
            {createRankingGrid()}

        </div>
    )
}