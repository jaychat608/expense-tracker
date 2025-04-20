export const FinancialRecordForm = () => {
    return <div className = "form-container">
        <form>
            <div className = "form-field">
                <label>Description:</label>
                <input type = "text" required className = "input" />
            </div>
            <div className = "form-field">
                <label>Amount:</label>
                <input type = "number" required className = "input" />
            </div>
            <div className="form-field">
                <label>Category:</label>
                <select required className="input">
                    <option value="">Select a Category</option>
                    <option value="Food">Food</option>
                    <option value="Rent">Rent</option>
                    <option value="Salary">Salary</option>
                    <option value="Utilities">Utilities</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Other">Other</option>
                </select>
            </div>
        </form>
    </div>
}