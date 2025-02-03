import { useEffect } from "react";
function Programs() {
  useEffect(() => {
    fetch("http://localhost:3310/api/programs/").then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    });
  });
}
export default Programs;
