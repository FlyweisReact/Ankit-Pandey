/** @format */

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import axios from "axios";

export function OrderModal(props) {
  const [data, setData] = useState([]);

  const fetchOrderData = async () => {
    try {
      const { data } = await axios.get(
        "https://ant.aliceblueonline.com/rest/AliceBlueAPIService/api/placeOrder/fetchOrderBook",
        {
          headers: {
            Authorization: `Bearer 764564 8NCJcYACJXm7W8TR3TbM76ISfSW0jmEkiXQcfmiyXgdayjZ7TDLIWaJW0gdbVWjDCQ3dJJhoQkaA53N1ArOYe9P0LtmoTvsGDNm6vYSpDAmuNOhdRk4mdIdB4c4ipYEm5jaqcIXFFzYoScKttChs2XWuGXsq3vEU0mV5SrSEOcfZIa0050FAbexTuPOKxitV6YhH37L784Zs57066NBz6dMRYyzuDnuAlYkf4OX7S25XPxBX4bBi7jYXGGzmqTO8 `,
          },
        }
      );
      console.log(data);
      setData(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    first;

    return () => {
      second;
    };
  }, [third]);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}
