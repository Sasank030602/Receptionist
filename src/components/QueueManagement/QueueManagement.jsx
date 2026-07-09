import "./QueueManagement.css";

const QueueManagement = () => {
  return (
    <div className="w-100 dashboard-content">
      <div className="d-flex justify-content-between align-items-center mb-4 pb-2">
        <div>
          <h3 className="fw-bold text-dark mb-1">Queue Management</h3>
          <p className="text-muted small mb-0">Real-time patient queue and token system</p>
        </div>
        <div className="d-flex align-items-center gap-3">
          <span className="badge rounded-pill fw-medium" style={{ fontSize: 16, backgroundColor: "#DBEAFE", color: "#1447E6" }}>
            1 in queue
          </span>
          <button
            className="btn text-white px-4 py-2 shadow-sm"
            style={{ backgroundColor: '#00A6F4', borderRadius: '8px', fontWeight: '500' }}
            onClick={() => alert("Calling Next Patient...")}
          >
            Call Next Patient
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4">
          <div className="bg-white border rounded-16 p-4 shadow-sm">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="mb-0 fw-normal" style={{ color: '#00A6F4', fontSize: '32px' }}>#3</h2>
              <span className="badge-waiting rounded-pill fw-medium text-lowercase" style={{ padding: '4px 14px', fontSize: '14px', letterSpacing: '0.3px', backgroundColor: "#FEF9C2", color: "#AD6C10" }}>
                waiting
              </span>
            </div>

            <div>
              <div className="text-muted small mb-1" style={{ fontSize: '18px' }}>Patient</div>
              <div className="text-dark" style={{ fontSize: '16px', color: '#334155' }}>John Anderson</div>
            </div>

            <div>
              <div className="text-muted small mb-1" style={{ fontSize: '18px' }}>Doctor</div>
              <div className="text-dark" style={{ fontSize: '16px', color: '#334155' }}>Dr. James Wilson</div>
            </div>

            <div>
              <div className="text-muted small mb-1" style={{ fontSize: '18px' }}>Time</div>
              <div className="text-dark" style={{ fontSize: '16px', color: '#334155' }}>09:00</div>
            </div>

            <hr />

            <div className="d-flex gap-3 mt-4">
              <button
                className="btn text-white flex-grow-1 py-2"
                style={{ backgroundColor: '#00A6F4', borderRadius: '8px', fontWeight: '500' }}
                onClick={() => alert("Calling Patient #3")}
              >
                Call
              </button>
              <button
                className="btn btn-light flex-grow-1 py-2"
                style={{ backgroundColor: '#f1f5f9', color: '#475569', borderRadius: '8px', fontWeight: '500', border: 'none' }}
                onClick={() => alert("Skipped Patient #3")}
              >
                Skip
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueueManagement;
