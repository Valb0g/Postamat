/* eslint-disable no-nested-ternary */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'reactstrap';
import { getAllPackages, getThisPack } from '../../Redux/actions/asyncActions';
import { clearInput } from '../../Redux/actions/Actions';

function Showcase() {
  const showPackages = useSelector((state) => state.show);
  const dispatch = useDispatch();
  const delHandler = (arg) => {
    dispatch(getThisPack(arg));
    dispatch(clearInput(''));
    dispatch(getAllPackages());
  };
  return (
    <div>
      {
    !showPackages.length
      ? <h2>Введите код посылки</h2>
      : typeof (showPackages) === 'object'
        ? (
          <>
            Ваша посылка:&nbsp;
            {showPackages[0].title}
            <hr />
            Описание:&nbsp;
            {showPackages[0].description}
            <hr />
            <Button
              className="mx-1"
              color="success"
              onClick={() => {
                delHandler(showPackages[0].id);
              }}
              type="button"
            >
              Забрать посылку
            </Button>
          </>
        )
        : <h2>{showPackages}</h2>
}
    </div>
  );
}

export default Showcase;
