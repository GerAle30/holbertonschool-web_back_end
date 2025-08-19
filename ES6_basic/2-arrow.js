//2-arrow.js

export default function getNeighborhoodsList() {
    this.sanfranciscoNeighborhoods = [ 'SOMA', 'Union Square'];

    this.addNeighborhood = (newNeighborhood) => {
        this.sanFranciscoNeighborrhoods.push(newNeighborhood);
        return this.sanFranciscoNeighborhoods;
    };
}
