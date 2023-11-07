import "./search-panel.css";

const SearchPanel = () => {
  return (
    <div className="searchForm">
      <label for="searchEmployeeInput">Поиск сотрудников</label>
      <input class="form-control" type="text" placeholder="Поиск сотрудников" />
      <small id="employeeHelp" class="form-text text-white">
        Введите имя сотрудника для поиска
      </small>
    </div>

    // <label for="exampleInputEmail1">Email address</label>
    // <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    // <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    // <input
    //   type="text"
    //   className="form-control search-input"
    //   placeholder="Найти сотрудника"
    // />
  );
};

export default SearchPanel;
