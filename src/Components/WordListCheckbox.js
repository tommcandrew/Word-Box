import React from 'react';
import './Wordlist.css';
import {Button, ButtonGroup} from  'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const WordListCheckbox = (props) => {
    // these will be toggle buttons not checkboxes
    var onBtn = "success",  offBtn='secondary';
    if (props.selection.includes('Nouns')) { var nounsBtn = onBtn }
      else {nounsBtn = offBtn}
    if (props.selection.includes('Verbs')) { var verbsBtn = onBtn }
      else {verbsBtn = offBtn}
    if (props.selection.includes('Adjectives')) { var adjBtn = onBtn }
      else {adjBtn = offBtn}
    return (
        <div>
            <h2>Types of words</h2>
            <ButtonGroup vertical>            
              <Button variant={nounsBtn} onClick={()=>props.click('Nouns')} >Nouns</Button>
              <Button variant={verbsBtn} onClick={()=>props.click('Verbs')} >Verbs</Button>
              <Button variant={adjBtn}  onClick={()=>props.click('Adjectives')}>Adjectives</Button>
            </ButtonGroup>
        </div>
    )
}

export default WordListCheckbox;