import React, { PropTypes as T } from 'react';

const Pool = ({ pools, selected, onChange }) =>
  <div className="input-group" style={{ paddingBottom: '10px' }}>
    <span className="input-group-addon"><i className="icon-servers"></i></span>
    <select
      className="form-control input"
      id="pool-select"
      name="pool-select"
      value={selected}
      onChange={onChange}
    >
      <option value="">Select where to deploy instance</option>
      {
        pools.map(pool =>
          <option key={pool.id} value={pool.id}>{pool.description}</option>)
      }
    </select>
  </div>;

Pool.propTypes = {
  pools: T.any.isRequired,
  selected: T.string.isRequired,
  isValid: T.bool,
  onChange: T.func.isRequired,
};

export default Pool;
