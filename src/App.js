import { useTranslation } from "react-i18next";
import languages from "./languages";
import i18next from "i18next";
import { useEffect } from "react";

function App() {
  const { t } = useTranslation();
  const releaseDate = new Date("2024-04-05");
  const timeDifference = new Date() - releaseDate;
  const number_of_days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  useEffect(() => {
    document.title = t("app_title");
  }, [t]);

  return (
    <div className="container">
      <div className="d-flex justify-content-end">
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Languages
          </button>
          <ul className="dropdown-menu">
            {languages.map(({ code, name, country_code }) => (
              <li key={country_code} className="d-flex align-items-center">
                <span className={`fi fi-${country_code} ms-2 me-0`}></span>
                <button
                  className="dropdown-item"
                  onClick={() => i18next.changeLanguage(code)}
                >
                  {name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="d-flex flex-column align-items-center">
        <h1 className="fw-bold mb-3">{t("welcome_message")}</h1>
        <p>{t("days_since_release", { number_of_days })}</p>
      </div>
    </div>
  );
}

export default App;
