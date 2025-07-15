import React from 'react'

function QuotationDetails() {
  return (
    <>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Quotation Details</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active">Quotation Details</li>
            </ol>
          </nav>
        </div>

        <div class="container mt-4">
          <div class="card p-4 shadow">
            <form>
              {/* <!-- Row 1: Quotation ID and SR No --> */}
              <div class="row mb-3">
                <div class="col-md-6">
                  <label class="form-label fw-bold">Quotation ID <span class="text-danger">*</span></label>
                  <input type="text" class="form-control" name="quotationId" placeholder="Enter Quotation ID" required />
                </div>
                <div class="col-md-6">
                  <label class="form-label fw-bold">SR No <span class="text-danger">*</span></label>
                  <input type="text" class="form-control" name="srNo" placeholder="Enter SR No" required />
                </div>
              </div>

              {/* <!-- Row 2: Item and Description --> */}
              <div class="row mb-3">
                <div class="col-md-6">
                  <label class="form-label fw-bold">Item</label>
                  <input type="text" class="form-control" name="item" placeholder="Enter Item" />
                </div>
                <div class="col-md-6">
                  <label class="form-label fw-bold">Description</label>
                  <input type="text" class="form-control" name="description" placeholder="Enter Description" />
                </div>
              </div>

              {/* <!-- Row 3: Subtotal, Discount, Total --> */}
              <div class="row mb-3">
                <div class="col-md-4">
                  <label class="form-label fw-bold">Subtotal</label>
                  <div class="input-group">
                    <span class="input-group-text">₹</span>
                    <input type="number" class="form-control" name="subtotal" placeholder="Enter Subtotal" />
                  </div>
                </div>
                <div class="col-md-4">
                  <label class="form-label fw-bold">Discount</label>
                  <div class="input-group">
                    <span class="input-group-text">₹</span>
                    <input type="number" class="form-control" name="discount" placeholder="Enter Discount" />
                  </div>
                </div>
                <div class="col-md-4">
                  <label class="form-label fw-bold">Total</label>
                  <div class="input-group">
                    <span class="input-group-text">₹</span>
                    <input type="number" class="form-control" name="total" placeholder="Auto-calculated" readonly />
                  </div>
                </div>
              </div>

              {/* <!-- Row 4: GST Amount, Bill Amount --> */}
              <div class="row mb-3">
                <div class="col-md-6">
                  <label class="form-label fw-bold">GST Amount</label>
                  <div class="input-group">
                    <span class="input-group-text">₹</span>
                    <input type="number" class="form-control" name="gst" placeholder="Enter GST Amount" />
                  </div>
                </div>
                <div class="col-md-6">
                  <label class="form-label fw-bold">Bill Amount</label>
                  <div class="input-group">
                    <span class="input-group-text">₹</span>
                    <input type="number" class="form-control" name="billAmount" placeholder="Auto-calculated" readonly />
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

export default QuotationDetails