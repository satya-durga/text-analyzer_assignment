import React, { useState } from 'react';
import './App.css';
import Component from './component';

function App() {
  const [text, setText] = useState('');
  const [action,setAction]=useState("word-ip");

  const analyzeText = () => {
  const wordCount = text.split(/\s+/).filter(word => word !== '').length;
const charCount = text.length;
const sentenceCount = text.split(/(?<!\w\.\w.)(?<![A-Z][a-z]\.)(?<=\.|\?|!)\s+(?=[A-Z])/).filter(sentence => sentence.trim() !== '').length;
const paragraphCount = text.split(/\n/).filter(paragraph => paragraph !== '').length;
const spaceCount = text.split(" ").length - 1;
const punctuationCount = text.replace(/[.,'!?;:[\](){}"`\-/&$#~^@%]/g, '').length;

    
    return {
      wordCount,
      charCount,
      sentenceCount,
      paragraphCount,
      spaceCount,
      punctuationCount
    };
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const { wordCount, charCount, sentenceCount, paragraphCount, spaceCount, punctuationCount } = analyzeText();

  return (
    <div className="main">
    <div className="container">
     
      <div className="text">
        <div className="heading">Text Analyzer</div>
        <div className="def">Text Analyzer is a simple free online tool for SEO web content analysis that helps you
          find most frequent phrases and words,numbers of characters,words,sentences and paragraphs,and estimated
          read and speak time of your content.
        </div>
      </div>
   
      <div className="choice">
        <button className={action==="word-ip"?"white":"grey"} onClick={()=>{
          setAction("word-ip")
        }}>Word Input</button>
       <button className={action==="para-ip"?"white":"grey"} onClick={()=>{
          setAction("para-ip")
        }}>paragraph</button>
      </div>
    </div>
      {action=== "para-ip"?(
      <div className="container1">
      <div id="txtArea">
      <textarea
        className="textarea"
        value={text}
        onChange={handleTextChange}
        placeholder="Type or Copy/Paste your content here..."
      /></div>
      <div className="analysis-container">
        <table>
          <thead>
            <th>Characters</th>
             <th>Words</th>
              <th>Sentences</th>
               <th>paragraphs</th>
               <th>Spaces</th> 
               <th>Punctuations</th>
            
          </thead>
          <tbody>
            <tr>
          <td data-label="Characters">{charCount}</td>
           <td data-label="Words">{wordCount}</td>
           <td data-label="Sentences">{sentenceCount}</td> 
           <td data-label="paragraphs">{paragraphCount}</td> 
           <td data-label="Spaces">{spaceCount}</td> 
           <td data-label="Punctuations">{punctuationCount}</td>
            
          </tr>
          </tbody>
        </table>
      </div>
    
    </div>
      
      
      ):(
      
      <Component/>
    
      )}
    </div>
  );
}

export default App;
