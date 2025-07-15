// import React, { useState } from 'react';
// import { Form, Input, DatePicker, Select, InputNumber, Button, Row, Col, Card } from 'antd';

// const { Option } = Select;

// function Quotation() {
//   const [form] = Form.useForm();
//   const [subtotal, setSubtotal] = useState(0);
//   const [discount, setDiscount] = useState(0);
//   const [gst, setGst] = useState(0);

//   const total = subtotal - discount;
//   const billAmount = total + gst;

//   const handleValuesChange = (_, allValues) => {
//     setSubtotal(allValues.subtotal || 0);
//     setDiscount(allValues.discount || 0);
//     setGst(allValues.gst || 0);
//   };

//   const onFinish = (values) => {
//     const finalData = {
//       ...values,
//       total: total.toFixed(2),
//       billAmount: billAmount.toFixed(2),
//     };
//     console.log('Submitted:', finalData);
//   };

//   return (
//     <>
//       <main id="main" className="main">
//         <div className="pagetitle">
//           <h1>Quotation</h1>
//           <nav>
//             <ol className="breadcrumb">
//               <li className="breadcrumb-item"><a href="#">Home</a></li>
//               <li className="breadcrumb-item">Forms</li>
//               <li className="breadcrumb-item active">Quotation</li>
//             </ol>
//           </nav>
//         </div>

//         {/* Card wrapper for bordered form */}
//         <Card title="Quotation Entry" bordered style={{ marginTop: 20, borderRadius: 8 }}>
//           <Form
//             form={form}
//             layout="vertical"
//             onFinish={onFinish}
//             onValuesChange={handleValuesChange}
//           >
//             {/* Row 1: Quotation Date, Quotation No, Customer */}
//             <Row gutter={16}>
//               <Col span={8}>
//                 <Form.Item label="Quotation Date" name="quotationDate" rules={[{ required: true }]}>
//                   <DatePicker style={{ width: '100%' }} />
//                 </Form.Item>
//               </Col>
//               <Col span={8}>
//                 <Form.Item label="Quotation No" name="quotationNo" rules={[{ required: true }]}>
//                   <Input placeholder="Enter quotation number" />
//                 </Form.Item>
//               </Col>
//               <Col span={8}>
//                 <Form.Item label="Customer" name="customer" rules={[{ required: true }]}>
//                   <Select placeholder="Select customer">
//                     <Option value="customer1">Customer 1</Option>
//                     <Option value="customer2">Customer 2</Option>
//                     <Option value="customer3">Customer 3</Option>
//                   </Select>
//                 </Form.Item>
//               </Col>
//             </Row>

//             {/* Row 2: Subtotal, Discount, Total */}
//             <Row gutter={16}>
//               <Col span={8}>
//                 <Form.Item label="Subtotal" name="subtotal" rules={[{ required: true }]}>
//                   <InputNumber
//                     style={{ width: '100%' }}
//                     min={0}
//                     formatter={(val) => `₹ ${val}`}
//                     parser={(val) => val.replace(/₹\s?|(,*)/g, '')}
//                   />
//                 </Form.Item>
//               </Col>
//               <Col span={8}>
//                 <Form.Item label="Discount" name="discount">
//                   <InputNumber
//                     style={{ width: '100%' }}
//                     min={0}
//                     formatter={(val) => `₹ ${val}`}
//                     parser={(val) => val.replace(/₹\s?|(,*)/g, '')}
//                   />
//                 </Form.Item>
//               </Col>
//               <Col span={8}>
//                 <Form.Item label="Total">
//                   <Input value={`₹ ${total.toFixed(2)}`} readOnly />
//                 </Form.Item>
//               </Col>
//             </Row>

//             {/* Row 3: GST Amount, Bill Amount */}
//             <Row gutter={16}>
//               <Col span={8}>
//                 <Form.Item label="GST Amount" name="gst">
//                   <InputNumber
//                     style={{ width: '100%' }}
//                     min={0}
//                     formatter={(val) => `₹ ${val}`}
//                     parser={(val) => val.replace(/₹\s?|(,*)/g, '')}
//                   />
//                 </Form.Item>
//               </Col>
//               <Col span={8}>
//                 <Form.Item label="Bill Amount">
//                   <Input value={`₹ ${billAmount.toFixed(2)}`} readOnly />
//                 </Form.Item>
//               </Col>
//             </Row>

//             <Form.Item>
//               <Button type="primary" htmlType="submit">
//                 Submit Quotation
//               </Button>
//             </Form.Item>
//           </Form>
//         </Card>
//       </main>
//     </>
//   );
// }

// export default Quotation;


import React from 'react'

function Quotation() {
  return (
    <>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Quotation</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active">Quotation</li>
            </ol>
          </nav>
        </div>

        <div class="container mt-4">
          <div class="card p-4">
            <form>
              {/* <!-- Row 1: Quotation Date, Quotation No, Customer --> */}
              <div class="row mb-3">
                <div class="col-md-4">
                  <label class="form-label fw-bold">Quotation Date <span class="text-danger">*</span></label>
                  <input type="date" class="form-control" required />
                </div>
                <div class="col-md-4">
                  <label class="form-label fw-bold">Quotation No <span class="text-danger">*</span></label>
                  <input type="text" class="form-control" placeholder="Enter quotation number" required />
                </div>
                <div class="col-md-4">
                  <label class="form-label fw-bold">Customer <span class="text-danger">*</span></label>
                  <select class="form-select" required>
                    <option disabled selected>Select customer</option>
                    <option>Customer 1</option>
                    <option>Customer 2</option>
                  </select>
                </div>
              </div>

              {/* <!-- Row 2: Subtotal, Discount, Total --> */}
              <div class="row mb-3">
                <div class="col-md-4">
                  <label class="form-label fw-bold">Subtotal <span class="text-danger">*</span></label>
                  <div class="input-group">
                    <span class="input-group-text">₹</span>
                    <input type="number" class="form-control" placeholder="0.00" required />
                  </div>
                </div>
                <div class="col-md-4">
                  <label class="form-label fw-bold">Discount</label>
                  <div class="input-group">
                    <span class="input-group-text">₹</span>
                    <input type="number" class="form-control" placeholder="0.00" />
                  </div>
                </div>
                <div class="col-md-4">
                  <label class="form-label fw-bold">Total</label>
                  <div class="input-group">
                    <span class="input-group-text">₹</span>
                    <input type="text" class="form-control" placeholder="0.00" readonly />
                  </div>
                </div>
              </div>

              {/* <!-- Row 3: GST Amount, Bill Amount --> */}
              <div class="row mb-3">
                <div class="col-md-6">
                  <label class="form-label fw-bold">GST Amount</label>
                  <div class="input-group">
                    <span class="input-group-text">₹</span>
                    <input type="number" class="form-control" placeholder="0.00" />
                  </div>
                </div>
                <div class="col-md-6">
                  <label class="form-label fw-bold">Bill Amount</label>
                  <div class="input-group">
                    <span class="input-group-text">₹</span>
                    <input type="text" class="form-control" placeholder="0.00" readonly />
                  </div>
                </div>
              </div>

              {/* <!-- Buttons --> */}
              <div class="d-flex justify-content-end">
                <button type="submit" class="btn btn-success me-2">Save</button>
                <button type="reset" class="btn btn-danger">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  )
}

export default Quotation
