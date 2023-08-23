export const ScoreEntryComponent = async () => {
  let html = `
    <form id="scoreEntryForm">
    <h2>Round</h2>
        <fieldset>
            <input type="number" placeholder="Round Score"/>
        </fieldset>
        <fieldset>
             <input type="number" placeholder="Round Score"/>
        </fieldset>
         <fieldset>
            <input type="number" placeholder="Round Score"/>
         </fieldset>
        `;
  return html;
};
