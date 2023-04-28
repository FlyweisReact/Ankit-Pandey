/** @format */

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState , useEffect } from "react";
import axios from "axios";
import { Table } from 'react-bootstrap'

export function OrderModal(props) {
  const [data, setData] = useState([]);

  const fetchOrderData = async () => {
    try {
      const { data } = await axios.get(
        "https://ant.aliceblueonline.com/rest/AliceBlueAPIService/api/placeOrder/fetchOrderBook" , {
            headers : {
                Authorization : `Bearer 764564 tfhDgNPSo9GdbQXC1Ors3crUV1npKQresY6kBPcXdxmoqN19J4KEMLbW7WUQnKIyLlcQLTb6Uq8ny52k4RTAPt05v23lJayLoOpOP1u25l3hpBmaFznbvbLd2bTm1U8zXfxoIbPJC0gTORLvUZY0h9HEGeNseVCM6AQ5RYMggqyi3zvgI07lu4DXef5bMHePqjL50FdPFi1FUXI7pmWEi5jcnSYPy2OyzLPKjrFWipdgLRNgXSd8Zk1lP1EKiXl5 `
            }
        }
      );
      setData(data)
    } catch (e) {
      console.log(e);
    }
  };


  useEffect(() => {
   if(props.show) {
    fetchOrderData()
   }
  }, [props.show])
  

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
      
        <Table key={index}>
        <tr>
          <th>Price</th>
          </tr>
<tbody>
{data?.map((i , index) => (   ))}
</tbody>
        </Table>
    
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}
