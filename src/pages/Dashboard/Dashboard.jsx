import "./Dashboard.css"
import { Outlet } from "react-router";
import { Link } from 'react-router';
import {addappointmentContext} from "../../Context/addappointmentContext"
import {useContext} from "react"

function initials(name) {
  return name.split(" ").map(w => w[0]).slice(0, 2).join("").toUpperCase();
}
import { useState, useMemo } from "react";

// ── Dummy Data ──────────────────────────────────────────────────────────────
const INITIAL_USERS = [
  { id: 1, name: "Layla Hassan",    email: "layla@clinic.io",   role: "Admin"        },
  { id: 2, name: "Dr. Omar Nasser", email: "omar@clinic.io",    role: "Doctor"       },
  { id: 3, name: "Sara El-Badawi",  email: "sara@clinic.io",    role: "Receptionist" },
  { id: 4, name: "Karim Farouk",    email: "karim@clinic.io",   role: "User"         },
  { id: 5, name: "Dr. Nada Youssef",email: "nada@clinic.io",    role: "Doctor"       },
  { id: 6, name: "Ahmed Saber",     email: "ahmed@clinic.io",   role: "Receptionist" },
  { id: 7, name: "Mona Ibrahim",    email: "mona@clinic.io",    role: "User"         },
  { id: 8, name: "Tarek Mansour",   email: "tarek@clinic.io",   role: "Admin"        },
  { id: 9, name: "Dr. Rania Fouad", email: "rania@clinic.io",   role: "Doctor"       },
  { id: 10,"name": "Hana Aziz",     email: "hana@clinic.io",    role: "User"         },
];

const ROLES = ["All", "Admin", "Doctor", "Receptionist"];

const ROLE_META = {
  Admin:        { color: "#e63946", bg: "#fff0f1", icon: "⬡" },
  Doctor:       { color: "#2a9d8f", bg: "#edfaf8", icon: "✦" },
  Receptionist: { color: "#e9c46a", bg: "#fdf8e7", icon: "◈" },
  User:         { color: "#6c757d", bg: "#f4f5f7", icon: "○" },
};


// ── UserRow ───────────────────────────────────────────────────────────────────
function UserRow({ user, onEdit, onDelete }) {
  const meta = ROLE_META[user.role];
  return (
    <tr>
      <td className="id-cell">#{String(user.id).padStart(3, "0")}</td>
      <td>
        <div className="user-cell">
          <div className="user-avatar">{initials(user.name)}</div>
          <div>
            <div className="user-name">{user.name}</div>
            <div className="user-email">{user.email}</div>
          </div>
        </div>
      </td>
      <td>
        <span
          className="role-badge"
          style={{ color: meta.color, background: meta.bg }}
        >
          <span className="role-icon">{meta.icon}</span>
          {user.role}
        </span>
      </td>
      <td>
        <div className="actions-cell">
          <button className="btn-edit" onClick={() => onEdit(user)}>✎ Edit</button>
          <button className="btn-delete" onClick={() => onDelete(user)}>✕ Delete</button>
        </div>
      </td>
    </tr>
  );
}

// ── UserTable ─────────────────────────────────────────────────────────────────
function UserTable({ users, onEdit, onDelete }) {
  return (
    <div className="table-scroll">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan={4}>
                <div className="empty-state">
                  <div className="empty-icon">⊘</div>
                  <div className="empty-text">No users match your search</div>
                </div>
              </td>
            </tr>
          ) : (
            users.map(u => (
              <UserRow key={u.id} user={u} onEdit={onEdit} onDelete={onDelete} />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

// ── Edit Modal ────────────────────────────────────────────────────────────────
function EditModal({ user, onSave, onClose }) {
  const [form, setForm] = useState({ ...user });
  const set = field => e => setForm(f => ({ ...f, [field]: e.target.value }));

  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal">
        <div className="modal-title">Edit User</div>
        <div className="form-field">
          <label className="form-label">Full Name</label>
          <input className="form-input" value={form.name} onChange={set("name")} />
        </div>
        <div className="form-field">
          <label className="form-label">Email</label>
          <input className="form-input" type="email" value={form.email} onChange={set("email")} />
        </div>
        <div className="form-field">
          <label className="form-label">Role</label>
          <select className="form-select" value={form.role} onChange={set("role")}>
            {ROLES.filter(r => r !== "All").map(r => <option key={r}>{r}</option>)}
          </select>
        </div>
        <div className="modal-actions">
          <button className="btn-cancel" onClick={onClose}>Cancel</button>
          <button className="btn-save" onClick={() => onSave(form)}>Save Changes</button>
        </div>
      </div>
    </div>
  );
}

// ── Confirm Delete Modal ──────────────────────────────────────────────────────
function ConfirmModal({ user, onConfirm, onClose }) {
  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal">
        <div className="modal-title">Delete User?</div>
        <p className="confirm-body">
          You're about to permanently delete <strong>{user.name}</strong>. This action cannot be undone.
        </p>
        <div className="modal-actions">
          <button className="btn-cancel" onClick={onClose}>Cancel</button>
          <button className="btn-confirm-delete" onClick={onConfirm}>Delete User</button>
        </div>
      </div>
    </div>
  );
}

// ── Dashboard ─────────────────────────────────────────────────────────────────
export default function Dashboard() {
  const [users, setUsers]         = useState(INITIAL_USERS);
  const [filter, setFilter]       = useState("All");
  const [search, setSearch]       = useState("");
  const [editUser, setEditUser]   = useState(null);
  const [deleteUser, setDeleteUser] = useState(null);
const showAppoinment = useContext(addappointmentContext)

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return users.filter(u => {
      const matchRole   = filter === "All" || u.role === filter;
      const matchSearch = !q || u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q);
      return matchRole && matchSearch;
    });
  }, [users, filter, search]);

  const counts = useMemo(() => {
    const c = { All: users.length };
    ROLES.slice(1).forEach(r => { c[r] = users.filter(u => u.role === r).length; });
    return c;
  }, [users]);

  function handleSave(updated) {
    setUsers(us => us.map(u => u.id === updated.id ? updated : u));
    setEditUser(null);
  }

  function handleDelete() {
    setUsers(us => us.filter(u => u.id !== deleteUser.id));
    setDeleteUser(null);
  }

  return (
    <>
      <div className="dash-shell">
        


        <main className="main">
          <div className="page-header">
            <div>
              <div className="page-title">User Management</div>
              <div className="page-sub">Manage all system users and their permissions</div>
            </div>
            <Link to="/dashboard/addappointment">
            <button onClick={()=> showAppoinment.setShowaddAppoint(true)} className="add-btn">＋ <span>Add New User</span></button>
            </Link>
          </div>

          <div className="stats-row">
            {[
              { label: "Total Users", value: counts.All,         icon: "◎" },
              { label: "Doctors",     value: counts.Doctor,      icon: "✦" },
              { label: "Reception",   value: counts.Receptionist,icon: "◈" },
              { label: "Admins",      value: counts.Admin,       icon: "⬡" },
            ].map(s => (
              <div className="stat-card" key={s.label}>
                <div className="stat-icon">{s.icon}</div>
                <div className="stat-label">{s.label}</div>
                <div className="stat-value">{s.value}</div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="controls">
            <div className="search-wrap">
              <span className="search-icon">⊕</span>
              <input
                className="search-input"
                placeholder="Search by name or email…"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
            <div className="filter-tabs">
              {ROLES.map(r => (
                <button
                  key={r}
                  className={`filter-tab ${filter === r ? "active" : ""}`}
                  onClick={() => setFilter(r)}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          {/* Table */}
          <div className="table-card">
            <div className="table-card-header">
              <div className="table-card-title">
                {filter === "All" ? "All Users" : `${filter}s`}
              </div>
              <div className="results-count">{filtered.length} result{filtered.length !== 1 && "s"}</div>
            </div>
            <UserTable
              users={filtered}
              onEdit={setEditUser}
              onDelete={setDeleteUser}
            />
          </div>
        </main>
      </div>

      {editUser   && <EditModal   user={editUser}   onSave={handleSave}   onClose={() => setEditUser(null)} />}
      {deleteUser && <ConfirmModal user={deleteUser} onConfirm={handleDelete} onClose={() => setDeleteUser(null)} />}
        {showAppoinment.ShowaddAppoint&& <Outlet/>}
    </>
  );
}
