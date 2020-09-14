import React from "react";
import { connect } from "react-redux";
import Location from "../Location";
import Spinner from "../Spinner";
import Paginator from "../Paginator";
import { setLocationThunk } from '../../actions/setLocationsAction';

class LocationList extends React.Component {
  render() {
    const { locations } = this.props;
    const Locationitems = locations.map((item) => {
      return (
        <li key={item.id}>
          <Location
            locationName={item.name}
            dimension={item.dimension}
            type={item.type}
            id={item.id}
          />
        </li>
      );
    });

    if (!locations.length) {
      return <Spinner />;
    }
    
    return (
      <>
        <div className="LocationsList">
          <div>LocationList</div>
          <ul>{Locationitems}</ul>
        </div>
        <Paginator 
        onPaginatorPage = {setLocationThunk}/>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  locations: state.locations,
});

export default connect(mapStateToProps)(LocationList);