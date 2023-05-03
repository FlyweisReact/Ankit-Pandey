/** @format */
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

export function PortfoliModal(props) {
  const [data, setData] = useState([]);
  const [tradeData, setTradeData] = useState([]);

  const fetchTradeOrder = async () => {
    try {
      const { data } = await axios.get(
        "https://ant.aliceblueonline.com/rest/AliceBlueAPIService/api/placeOrder/fetchTradeBook",
        {
          headers: {
            Authorization: `Bearer 764564 8NCJcYACJXm7W8TR3TbM76ISfSW0jmEkiXQcfmiyXgdayjZ7TDLIWaJW0gdbVWjDCQ3dJJhoQkaA53N1ArOYe9P0LtmoTvsGDNm6vYSpDAmuNOhdRk4mdIdB4c4ipYEm5jaqcIXFFzYoScKttChs2XWuGXsq3vEU0mV5SrSEOcfZIa0050FAbexTuPOKxitV6YhH37L784Zs57066NBz6dMRYyzuDnuAlYkf4OX7S25XPxBX4bBi7jYXGGzmqTO8 `,
          },
        }
      );
      setTradeData(data);
    } catch (e) {
      console.log(e);
    }
  };

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
      setData(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (props.show) {
      fetchOrderData();
      fetchTradeOrder();
    }
  }, [props.show]);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <p className="headP" style={{ marginTop: "5%" }}>
          All Trade Orders
        </p>
        <div className="overflowCont">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Price</th>
              </tr>
            </thead>
            <tbody></tbody>
          </Table>
        </div>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}
