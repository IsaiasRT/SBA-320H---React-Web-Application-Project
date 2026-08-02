import { useEffect, useMemo, useState } from "react";
import getMonsters from "../services/mhwApi.js";
import { useHunter } from "../context/HunterContext.jsx";
import JournalCard from "../components/JournalCard.jsx";
import { RESULTS, WEAPONS, today, uid } from "../utils/helpers.js";

const DIFFICULTIES = ["Easy", "Medium", "Hard", "Nightmare"];
const BLANK_FORM = {
  monsterId: "",
  date: today(),
  weapon: WEAPONS[0],
  result: RESULTS[0],
  difficulty: DIFFICULTIES[1],
  notes: "",
};

export default function HunterJournal() {
  const { state, dispatch } = useHunter();
  const [monsters, setMonsters] = useState([]);
  const [monsterMap, setMonsterMap] = useState({});
  const [form, setForm] = useState(BLANK_FORM);

  useEffect(() => {
    let active = true;
    getMonsters()
      .then((data) => {
        if (!active) return;
        setMonsters(data);
        setMonsterMap(Object.fromEntries(data.map((m) => [m.id, m])));
      })
      .catch(() => active && setMonsters([]));
    return () => {
      active = false;
    };
  }, []);

  const entries = useMemo(() => {
    return [...state.journal].sort((a, b) => (a.date < b.date ? 1 : -1));
  }, [state.journal]);

  const submit = (event) => {
    event.preventDefault();
    const monster = monsterMap[Number(form.monsterId)];
    const payload = {
      id: uid(),
      monsterId: monster ? monster.id : null,
      monster: monster ?? null,
      date: form.date || today(),
      weapon: form.weapon,
      result: form.result,
      difficulty: form.difficulty,
      notes: form.notes.trim(),
    };
    dispatch({ type: "ADD_ENTRY", payload });
    setForm(BLANK_FORM);
  };

  const removeEntry = (id) => {
    if (window.confirm("Delete this journal entry?")) {
      dispatch({ type: "DELETE_ENTRY", payload: id });
    }
  };

  const update = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  return (
    <section className="page journal">
      <header className="page-header">
        <h1>Hunter Journal</h1>
        <p className="page-sub">
          Log every hunt with weapon, result, difficulty, and notes.
        </p>
      </header>

      <form className="panel journal-form" onSubmit={submit}>
        <h2>New Entry</h2>

        <div className="form-grid">
          <label className="field">
            <span className="field-label">Monster</span>
            <select
              value={form.monsterId}
              onChange={(e) => update("monsterId", e.target.value)}
              required
            >
              <option value="">Select a monster...</option>
              {monsters.map((monster) => (
                <option key={monster.id} value={monster.id}>
                  {monster.name}
                </option>
              ))}
            </select>
          </label>

          <label className="field">
            <span className="field-label">Date</span>
            <input
              type="date"
              value={form.date}
              onChange={(e) => update("date", e.target.value)}
              required
            />
          </label>

          <label className="field">
            <span className="field-label">Weapon</span>
            <select
              value={form.weapon}
              onChange={(e) => update("weapon", e.target.value)}
            >
              {WEAPONS.map((weapon) => (
                <option key={weapon} value={weapon}>
                  {weapon}
                </option>
              ))}
            </select>
          </label>

          <label className="field">
            <span className="field-label">Result</span>
            <select
              value={form.result}
              onChange={(e) => update("result", e.target.value)}
            >
              {RESULTS.map((result) => (
                <option key={result} value={result}>
                  {result}
                </option>
              ))}
            </select>
          </label>

          <label className="field">
            <span className="field-label">Difficulty</span>
            <select
              value={form.difficulty}
              onChange={(e) => update("difficulty", e.target.value)}
            >
              {DIFFICULTIES.map((difficulty) => (
                <option key={difficulty} value={difficulty}>
                  {difficulty}
                </option>
              ))}
            </select>
          </label>

          <label className="field field-full">
            <span className="field-label">Notes</span>
            <textarea
              value={form.notes}
              onChange={(e) => update("notes", e.target.value)}
              rows="3"
              placeholder="Carve results, carts, tactics, anything..."
            />
          </label>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            Add Entry
          </button>
        </div>
      </form>

      {entries.length > 0 ? (
        <div className="entry-list">
          {entries.map((entry) => (
            <JournalCard
              key={entry.id}
              entry={entry}
              onDelete={() => removeEntry(entry.id)}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p>No hunts logged yet. Add your first entry above!</p>
        </div>
      )}
    </section>
  );
}
